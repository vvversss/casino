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

  const { error } = await supabaseAdmin.rpc("credit_stripe_coin_purchase", {
    p_purchase_id: purchaseId,
    p_stripe_session_id: stripeSessionId,
    p_stripe_payment_intent: paymentIntent,
  });

  if (error) {
    console.error("Could not credit Stripe coin purchase", error);
    return new Response("Could not credit purchase", { status: 500 });
  }

  return jsonResponse({ received: true, credited: true, purchase_id: purchaseId });
});
