# VERS casino

Static social casino frontend for VERS Coins entertainment credits.

VERS Coins have no real-world monetary value. They cannot be withdrawn,
exchanged, sold, transferred, or redeemed for money, crypto, gift cards, NFTs,
skins, goods, services, or prizes.

## Run locally

Open `index.html` in a browser, or serve the folder with any static server.

## Deploy on GitHub Pages

This site is published from the `gh-pages` branch.

If you need to reconnect Pages manually:

1. Open repository settings.
2. Go to Pages.
3. Set Source to `Deploy from a branch`.
4. Select branch `gh-pages` and folder `/ (root)`.

The site uses only relative local assets, so it works under either a root domain
or a repository subpath such as `https://username.github.io/repository-name/`.

## Supabase Auth setup

The frontend reads Supabase settings from `supabase-config.js`.

To enable accounts in a fresh Supabase project:

1. Open Supabase SQL Editor.
2. Run `supabase-schema.sql`.
3. Go to Authentication -> URL Configuration.
4. Set Site URL to `https://vvversss.github.io/casino/`.
5. Add `https://vvversss.github.io/casino/` to Redirect URLs.

Use a publishable key only in `supabase-config.js`. Never expose a service role
key in this static frontend.

## Stripe Checkout setup

Stripe payments are handled by Supabase Edge Functions. Do not put
`STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, or `SUPABASE_SERVICE_ROLE_KEY` in
frontend files.

Before deploying functions, run the latest `supabase-schema.sql` in the Supabase
SQL Editor so `stripe_coin_purchases` and the service-role credit RPC exist.

Required Supabase secrets:

```bash
STRIPE_SECRET_KEY=<new Stripe secret key>
STRIPE_WEBHOOK_SECRET=<Stripe webhook signing secret>
SITE_URL=https://vvversss.github.io/casino/
SUPABASE_URL=https://PROJECT_REF.supabase.co
SUPABASE_SERVICE_ROLE_KEY=...
```

Set secrets in the Supabase Dashboard under Edge Function Secrets, or with the
CLI:

```bash
supabase secrets set STRIPE_SECRET_KEY=<new Stripe secret key>
supabase secrets set STRIPE_WEBHOOK_SECRET=<Stripe webhook signing secret>
supabase secrets set SITE_URL=https://vvversss.github.io/casino/
supabase secrets set SUPABASE_URL=https://PROJECT_REF.supabase.co
supabase secrets set SUPABASE_SERVICE_ROLE_KEY=...
```

Deploy Edge Functions:

```bash
supabase functions deploy create-stripe-checkout
supabase functions deploy stripe-webhook
```

Add this webhook endpoint in Stripe Dashboard:

```text
https://PROJECT_REF.supabase.co/functions/v1/stripe-webhook
```

Listen to:

```text
checkout.session.completed
```

Payment flow:

1. The frontend calls `create-stripe-checkout` for an authenticated user.
2. The Edge Function creates a pending `stripe_coin_purchases` row.
3. Stripe Checkout collects payment.
4. Stripe calls `stripe-webhook`.
5. The webhook verifies the Stripe signature and credits Coins exactly once.

## Stripe test purchase

Coin Shop includes `100 Coins Test` for `$1.00`. The Stripe account settles
through PLN, so lower USD amounts can convert below Stripe's 200 grosz minimum
and be rejected before checkout. A `$0.01` USD item is also below Stripe's
minimum charge amount.
