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
- Production route: `www.impactpockets.com/*`

The corrected candidate has not yet replaced the previous staging version. Local Go for Launch gates are green as of 2026-07-22, and exact-candidate staging is the next release step.

## Current blockers

Production promotion is prohibited until all of these pass:

1. A real staging form submission passes Turnstile and arrives at `lane@impactpockets.com`.
2. Native Safari passes on the dedicated iOS Simulator.
3. Mobile and desktop PageSpeed each report 100 for Performance, Accessibility, Best Practices, and SEO.
4. Exact-candidate, sitemap, robots, Open Graph, redirect, WebKit, and canonical-host checks pass.

Cloudflare Email Sending is enabled for `impactpockets.com`. On 2026-07-21, a narrowly scoped Email Sending token was created for the Impact Pockets account and stored in the 1Password `AgentWork` vault. A real Cloudflare Email Sending API message from `hello@impactpockets.com` to `lane@impactpockets.com` was reported as delivered, and the matching message was confirmed in the `lane@impactpockets.com` Gmail inbox. The exact staging Worker form flow still requires verification after the local hard gates pass. No production DNS or route change was made.

The advisory Cloudflare baseline on 2026-07-22 passed with both RUM and edge analytics available, 2 RUM route groups, 15,034 edge requests, and no findings.

## Secret handling

`TURNSTILE_SECRET` belongs in Wrangler secrets for both environments. It must never be committed or printed.
