# Cloudflare Worker Release

## Architecture

Astro prerenders the five public pages and Cloudflare Workers serves the static output. Requests to `/api/contact/` run through the Worker.

The contact flow is fixed:

1. The browser posts to same-origin `/api/contact/`.
2. The Worker validates the origin, hostname, body size, allowed fields, field lengths, and honeypot.
3. The Worker validates the managed Turnstile token with Cloudflare Siteverify.
4. The destination-restricted `EMAIL` binding may send only to `lane@impactpockets.com` from `hello@impactpockets.com`.
5. The visitor address is used only as the reply-to address.

No email credential or Turnstile secret is shipped to browser code.

## Environments

- Staging Worker: `impactpockets-www-staging.biglane.workers.dev`
- Production Worker: `impactpockets-www`
- Production routes: `www.impactpockets.com/*` and `impactpockets.com/*`
- Released candidate: `9bb3adef6332f13e08e4e9fbc5af3376ddf52fe2`
- Staging version: `7042623d-7d65-40e8-a2ea-76c5e33a52c0`
- Production version: `1d2a034b-4c98-4f92-a330-a8f3b4b772e2`

## Release verification

The latest production promotion completed on 2026-07-23 after all release gates passed:

1. Real staging and production form submissions passed managed Turnstile in native Safari and were accepted by the Worker.
2. Native Safari passed on the dedicated iOS 26.5 Simulator.
3. Mobile and desktop PageSpeed each reported 100 for Performance, Accessibility, Best Practices, and SEO.
4. Exact-candidate, sitemap, robots, Open Graph, redirect, Chromium, WebKit, and canonical-host checks passed.
5. The apex host and legacy paths redirect directly to the canonical `www` route while preserving query strings.

Cloudflare Email Sending is enabled for `impactpockets.com`. On 2026-07-21, a narrowly scoped Email Sending token was created for the Impact Pockets account and stored in the 1Password `AgentWork` vault. A real Cloudflare Email Sending API message from `hello@impactpockets.com` to `lane@impactpockets.com` was reported as delivered, and the matching message was confirmed in the `lane@impactpockets.com` Gmail inbox.

The production Worker binding is restricted to `lane@impactpockets.com`, permits `hello@impactpockets.com` as the sender, and exposes no email credential to the browser. The public site displays `hello@impactpockets.com`.

The advisory Cloudflare baseline on 2026-07-22 returned both RUM and edge analytics with 2 RUM route groups and 16,803 edge requests. Its one aggregate advisory was traced to Cloudflare's internal Early Hints crawler, not visitor responses. The affected requests had `requestSource=earlyHintsCache`, internal Early Hints user agents, no origin response, and visitor-facing checks remained 200. Early Hints was disabled for this Worker-served static site to remove that false edge-error signal.

The initial production evidence is in `docs/release-evidence/2026-07-22-production/README.md`. The current Our Process redesign release is recorded in `docs/release-evidence/2026-07-22-process-page-redesign/README.md`.

The current sitewide visual-polish release is recorded in `docs/release-evidence/2026-07-22-sitewide-visual-polish/README.md`.

The current typography-polish release is recorded in `docs/release-evidence/2026-07-22-typography-polish/README.md`.

The current Services spacing release is recorded in `docs/release-evidence/2026-07-23-services-spacing/README.md`.

The current mark-favicon release is recorded in `docs/release-evidence/2026-07-23-favicon-mark/README.md`.

## Secret handling

`TURNSTILE_SECRET` belongs in Wrangler secrets for both environments. It must never be committed or printed.
