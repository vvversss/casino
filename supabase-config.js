window.VELORA_SUPABASE = {
  url: "https://ultayypaqsgjuqwdewuv.supabase.co",
  publishableKey: "sb_publishable_cvBytbL36qswV3vJmsvKSw_Wozk46SB",
};

window.VERS_ENABLE_TEST_PAYMENTS = false;

window.VERS_PAYMENT_CONFIG = {
  // Public checkout links or publishable keys only. Never put Stripe secret keys,
  // crypto private keys, or webhook secrets in frontend code.
  stripePaymentLinks: {
    // starter: "https://buy.stripe.com/...",
  },
  cryptoPaymentLinks: {
    // starter: "https://commerce.coinbase.com/checkout/...",
  },
  // Real confirmation must be handled by a trusted backend webhook or
  // Supabase Edge Function that verifies the provider event before crediting Coins.
};
