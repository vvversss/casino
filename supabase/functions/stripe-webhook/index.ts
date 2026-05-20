import Stripe from "npm:stripe@16.12.0";
import { createClient } from "npm:@supabase/supabase-js@2";
import { getRequiredEnv, getServiceRoleKey } from "../_shared/supabaseEnv.ts";

const stripe = new Stripe(getRequiredEnv("STRIPE_SECRET_KEY"), {
  apiVersion: "2024-06-20",
  httpClient: Stripe.createFetchHttpClient(),
});

function jsonResponse(body: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function errorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "object" && error && "message" in error) {
    return String((error as { message?: unknown }).message || "Unknown error");
  }
  return String(error || "Unknown error");
}

async function fallbackCreditPurchase(
  supabaseAdmin: ReturnType<typeof createClient>,
  purchaseId: string,
  stripeSessionId: string | null,
  paymentIntent: string | null,
) {
  const { data: purchase, error: purchaseError } = await supabaseAdmin
    .from("stripe_coin_purchases")
    .select("id,user_id,coins,status")
    .eq("id", purchaseId)
    .maybeSingle();

  if (purchaseError) throw purchaseError;
  if (!purchase) throw new Error(`Purchase ${purchaseId} was not found`);
  if (purchase.status === "paid") return { purchase, alreadyPaid: true };
  if (purchase.status !== "pending") {
    throw new Error(`Purchase ${purchaseId} is ${purchase.status}, not pending`);
  }

  const { data: profile, error: profileError } = await supabaseAdmin
    .from("casino_profiles")
    .select("balance")
    .eq("id", purchase.user_id)
    .maybeSingle();

  if (profileError) throw profileError;
  if (!profile) throw new Error(`Casino profile ${purchase.user_id} was not found`);

  const nextBalance = Number(profile.balance || 0) + Number(purchase.coins || 0);
  const { error: balanceError } = await supabaseAdmin
    .from("casino_profiles")
    .update({ balance: nextBalance })
    .eq("id", purchase.user_id);

  if (balanceError) throw balanceError;

  const { error: paidError } = await supabaseAdmin
    .from("stripe_coin_purchases")
    .update({
      status: "paid",
      stripe_session_id: stripeSessionId,
      stripe_payment_intent: paymentIntent,
    })
    .eq("id", purchase.id)
    .eq("status", "pending");

  if (paidError) throw paidError;

  return { purchase, alreadyPaid: false };
}

Deno.serve(async (req) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });

  const signature = req.headers.get("stripe-signature");
  if (!signature) return new Response("Missing Stripe signature", { status: 400 });

  const rawBody = await req.text();
  let event: Stripe.Event;

  try {
    event = await stripe.webhooks.constructEventAsync(
      rawBody,
      signature,
      getRequiredEnv("STRIPE_WEBHOOK_SECRET"),
      undefined,
      Stripe.createSubtleCryptoProvider(),
    );
  } catch (error) {
    console.error("Stripe webhook signature verification failed", error);
    return jsonResponse(
      {
        error:
          "Invalid Stripe signature. Set STRIPE_WEBHOOK_SECRET to the whsec_ signing secret from this exact Stripe webhook endpoint.",
      },
      400,
    );
  }

  console.log("Stripe event:", event.type);

  let metadata: Stripe.Metadata | null = null;
  let stripeSessionId: string | null = null;
  let paymentIntent: string | null = null;

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    metadata = session.metadata || {};
    stripeSessionId = session.id;
    paymentIntent =
      typeof session.payment_intent === "string"
        ? session.payment_intent
        : session.payment_intent?.id || null;
  } else if (event.type === "payment_intent.succeeded") {
    const intent = event.data.object as Stripe.PaymentIntent;
    metadata = intent.metadata || {};
    paymentIntent = intent.id;
  } else {
    return jsonResponse({ received: true, ignored: event.type });
  }

  if (!metadata) return jsonResponse({ error: "Missing Stripe metadata" }, 400);

  console.log("Stripe metadata:", metadata);

  const purchaseId = metadata.purchase_id;
  const userId = metadata.user_id;
  const packageId = metadata.package_id;
  const coins = Number(metadata.coins || 0);

  if (!purchaseId || !userId || !packageId || !Number.isFinite(coins) || coins <= 0) {
    console.error("Stripe webhook missing required metadata", metadata);
    return new Response("Missing purchase metadata", { status: 400 });
  }

  const supabaseAdmin = createClient(getRequiredEnv("SUPABASE_URL"), getServiceRoleKey(), {
    auth: { persistSession: false },
  });

  const { data: creditRows, error } = await supabaseAdmin.rpc("credit_stripe_coin_purchase", {
    p_purchase_id: purchaseId,
    p_stripe_session_id: stripeSessionId,
    p_stripe_payment_intent: paymentIntent,
  });

  if (error) {
    console.error("Could not credit Stripe coin purchase through RPC", error);

    try {
      const fallbackResult = await fallbackCreditPurchase(
        supabaseAdmin,
        purchaseId,
        stripeSessionId,
        paymentIntent,
      );

      console.log("Stripe purchase credited through fallback", fallbackResult);
      return jsonResponse({
        received: true,
        credited: true,
        fallback: true,
        purchase_id: purchaseId,
        already_paid: fallbackResult.alreadyPaid,
      });
    } catch (fallbackError) {
      console.error("Could not credit Stripe coin purchase through fallback", fallbackError);
      return jsonResponse(
        {
          error: "Could not credit purchase",
          rpc_error: errorMessage(error),
          fallback_error: errorMessage(fallbackError),
        },
        500,
      );
    }
  }

  if (!creditRows || creditRows.length === 0) {
    console.log("Stripe purchase was already paid or not pending", { purchaseId });
    return jsonResponse({ received: true, credited: false, already_processed: true, purchase_id: purchaseId });
  }

  return jsonResponse({ received: true, credited: true, purchase_id: purchaseId });
});
