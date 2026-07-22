# Go for Launch Project Extension Record

## Toolkit source

- Repository: `/Users/lane/Dev/go-for-launch`
- Branch: `main`
- Revision: `646a96eaafd183b83871135c7ae8ff125b9b48bf`
- Integration command: `npm run verify`

## Project-owned extensions

| Extension | Files and commands | Owner | Reason |
|---|---|---|---|
| Legacy source bridge | `src/layouts/LegacyDocument.astro`, root HTML files | Impact Pockets | Preserves the approved site while adding Astro routes, metadata, semantics, and form security |
| Brand asset contract | `brand-assets.config.mjs`, `brand/Impact_Pockets_Brand_Guide.pdf`, `npm run verify:brand` | Impact Pockets | Binds approved logos, surfaces, minimum widths, and clear space to exact hashes |
| Open Graph renderer | `scripts/generate-open-graph.mjs`, `open-graph.config.mjs`, state and approval JSON, `npm run verify:open-graph` | Impact Pockets | Uses the approved palette and primary logo in deterministic page-specific cards while the shared toolkit verifies immutable state and hash-bound approval |
| Content review | `content-quality.config.mjs`, `content-quality.reviews.json`, `npm run verify:content-quality` | Impact Pockets | Defines route audiences, tasks, content families, similarity limits, and exact editorial approvals |
| Interface contract | `interface-quality.config.mjs`, `npm run verify:interface` | Impact Pockets | Defines five route families, archetypes, selectors, and the required viewport matrix |
| Visual composition contract | `visual-composition.config.mjs`, hero markers in `LegacyDocument.astro`, `npm run verify:composition` | Impact Pockets | Audits the four image-led hero families in Chromium and WebKit |
| Cloudflare observability | `cloudflare-observability.config.mjs`, `npm run cloudflare:observe` | Impact Pockets | Selects the account, zone, hostname, advisory window, and reviewed thresholds |
| Contact service | `src/pages/api/contact.ts`, `src/lib/contact-form.ts`, `wrangler.jsonc`, unit tests | Impact Pockets | Enforces same-origin Turnstile validation and a fixed email recipient |

## Upgrade handling

The project-owned Open Graph renderer intentionally differs from the reusable toolkit renderer. It calculates the same stable input contract used by the shared review script, embeds the exact approved primary-logo hash, and writes only during the explicit `npm run og:generate` command. Normal builds call the shared verifier and fail on changed input, changed bytes, stale state, or stale approval.

When Go for Launch changes, fetch its upstream first, review changes that overlap these extensions, rerun the toolkit tests when shared files are modified, and rerun `npm run verify`. Do not move Impact Pockets identity, copy, thresholds, account identifiers, or approvals into the shared toolkit.

## Current validation

On 2026-07-22, `npm run verify` passed the complete local chain. The one content warning for the repeated route label `Our Process` is acknowledged in the exact editorial review and does not represent repeated generic page copy. Candidate `a9a0db7b64af31c9496c2a896ff8e214a0580ed9` then passed exact-candidate staging, real Worker form submissions, native Safari, PageSpeed, redirects, canonical-host verification, and production smoke tests.
