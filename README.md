# Velora Play

Fully static demo casino interface with virtual credits only. No real-money payments,
accounts, deposits, withdrawals, or third-party gambling integrations are included.

## Run locally

Open `index.html` in a browser, or serve the folder with any static server.

## Deploy on GitHub Pages

This site is published from the `gh-pages` branch.

If you need to reconnect Pages manually:

1. Open repository settings.
2. Go to Pages.
3. Set Source to `Deploy from a branch`.
4. Select branch `gh-pages` and folder `/ (root)`.

The site uses only relative local assets, so it works under either a root domain or
a repository subpath such as `https://username.github.io/repository-name/`.

## Supabase Auth setup

The frontend reads Supabase settings from `supabase-config.js`.

To enable accounts in a fresh Supabase project:

1. Open Supabase SQL Editor.
2. Run `supabase-schema.sql`.
3. Go to Authentication -> URL Configuration.
4. Set Site URL to `https://vvversss.github.io/casino/`.
5. Add `https://vvversss.github.io/casino/` to Redirect URLs.

Use a publishable key only in `supabase-config.js`. Never expose a service role key
in this static frontend.
