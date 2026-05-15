# Velora Play

Fully static demo casino interface with virtual credits only. No real-money payments,
accounts, deposits, withdrawals, or third-party gambling integrations are included.

## Run locally

Open `index.html` in a browser, or serve the folder with any static server.

## Deploy on GitHub Pages

This repository includes a GitHub Actions workflow that publishes the static site
from the repository root to GitHub Pages.

After pushing to GitHub:

1. Open repository settings.
2. Go to Pages.
3. Set Source to GitHub Actions.
4. Run or wait for the `Deploy static site to Pages` workflow.

The site uses only relative local assets, so it works under either a root domain or
a repository subpath such as `https://username.github.io/repository-name/`.
