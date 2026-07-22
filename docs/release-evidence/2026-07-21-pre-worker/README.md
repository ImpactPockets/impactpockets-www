# Pre-Worker Recovery Snapshot

This directory preserves the public DNS state and rendered production site before the Cloudflare Worker migration.

## Contents

- `dns-records.json`, complete Cloudflare DNS record export before changes
- `dns-summary.json`, safe DNS summary for release review
- `live/`, response headers and rendered HTML for the five public routes

## Rendered page SHA-256 hashes

- Home: `b927e65e748b005a8e59b3859981f011b288a2396f6840ab02d66c31aa0c9cbf`
- About: `6e19d997b8f591e325eb11dacb9f967f22efccfcddf7432fe748d9e7fc98733f`
- Contact: `e22ef1358f83d095eb92a73d10f56967214b90069129f6cb9b89bbd1a02b99aa`
- Process: `f93931ed2590225930e810edb4c27211ec43568208a87e31eb4fa3ff3004e208`
- Services: `ddbeb6ff14268df3780eee313d20211573494d26e3dd41ad32d3debb1a8e13fe`

The production hostname was not changed after the staging email delivery gate failed.
