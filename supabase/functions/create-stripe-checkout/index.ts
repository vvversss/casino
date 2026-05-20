import Stripe from "npm:stripe@16.12.0";
import { createClient } from "npm:@supabase/supabase-js@2";
import { getCoinPackage } from "../_shared/stripePackages.ts";
import { getPublishableKey, getRequiredEnv, getServiceRoleKey } from "../_shared/supabaseEnv.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function jsonResponse(body: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return jsonResponse({ error: "Method not allowed" }, 405);

  try {
    const supabaseUrl = getRequiredEnv("SUPABASE_URL");
    const siteUrl = getRequiredEnv("SITE_URL").replace(/\/$/, "");
    const stripeSecretKey = getRequiredEnv("STRIPE_SECRET_KEY");
    const authorization = req.headers.get("Authorization");

    if (!authorization) return jsonResponse({ error: "Missing authorization header" }, 401);

    const supabaseUser = createClient(supabaseUrl, getPublishableKey(), {
      global: { headers: { Authorization: authorization } },
      auth: { persistSession: false },
    });

    const {
      data: { user },
      error: userError,
    } = await supabaseUser.auth.getUser();

    if (userError || !user) return jsonResponse({ error: "Authentication required" }, 401);

    const body = await req.json().catch(() => ({}));
    const pack = getCoinPackage(body.package_id);
    if (!pack) return jsonResponse({ error: "Invalid package_id" }, 400);

    const supabaseAdmin = createClient(supabaseUrl, getServiceRoleKey(), {
      auth: { persistSession: false },
    });

    const { data: purchase, error: purchaseError } = await supabaseAdmin
      .from("stripe_coin_purchases")
      .insert({
        user_id: user.id,
        package_id: pack.id,
        coins: pack.coins,
        amount_usd: pack.amountUsd,
        status: "pending",
      })
      .select("id")
      .single();

    if (purchaseError || !purchase) throw purchaseError || new Error("Could not create purchase");

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: "2024-06-20",
      httpClient: Stripe.createFetchHttpClient(),
    });

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: `${siteUrl}?payment=success`,
      cancel_url: `${siteUrl}?payment=cancel`,
      customer_email: user.email || undefined,
      client_reference_id: user.id,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: Math.round(pack.amountUsd * 100),
            product_data: {
              name: pack.label,
              description: "VERS Coins are entertainment credits only. They have no cash value and cannot be withdrawn.",
            },
          },
        },
      ],
      metadata: {
        user_id: user.id,
        package_id: pack.id,
        purchase_id: purchase.id,
        coins: String(pack.coins),
      },
      payment_intent_data: {
        metadata: {
          user_id: user.id,
          package_id: pack.id,
          purchase_id: purchase.id,
          coins: String(pack.coins),
        },
      },
    });

    const { error: updateError } = await supabaseAdmin
      .from("stripe_coin_purchases")
      .update({ stripe_session_id: session.id })
      .eq("id", purchase.id)
      .eq("status", "pending");

    if (updateError) throw updateError;

    return jsonResponse({ url: session.url });
  } catch (error) {
    console.error(error);
    return jsonResponse({ error: error instanceof Error ? error.message : "Checkout failed" }, 500);
  }
});
