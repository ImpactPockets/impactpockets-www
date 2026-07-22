# Cloudflare Worker Release

## Architecture

Astro prerenders the five public pages and Cloudflare Workers serves the static output. Requests to `/api/contact` run through the Worker.

The contact flow is fixed:

1. The browser posts to same-origin `/api/contact`.
2. The Worker validates the origin, hostname, body size, allowed fields, field lengths, and honeypot.
3. The Worker validates the managed Turnstile token with Cloudflare Siteverify.
4. The destination-restricted `EMAIL` binding may send only to `info@impactpockets.com` from `website@impactpockets.com`.
5. The visitor address is used only as the reply-to address.

No email credential or Turnstile secret is shipped to browser code.

## Environments

- Staging Worker: `impactpockets-www-staging.biglane.workers.dev`
- Production Worker: `impactpockets-www`
- Production route: `www.impactpockets.com/*`

The corrected visual-fidelity candidate has not replaced the existing staging version because the Go for Launch render-sharpness hard gate is not green.

## Current blockers

Production promotion is prohibited until all of these pass:

1. The original-style render-sharpness conflict is resolved through an approved fidelity-preserving approach.
2. Cloudflare Email Sending is enabled for `impactpockets.com`.
3. A real staging form submission passes Turnstile and arrives at `info@impactpockets.com`.
4. The remaining Go for Launch staging, native Safari, PageSpeed, redirect, and exact-candidate gates pass.

Cloudflare currently rejects Email Sending enablement with API error 2036, Unauthorized, using both the authenticated OAuth path and the approved global-key path. A prior staging call passed Turnstile but the Send Email binding rejected delivery at runtime. No production DNS or route change was made.

## Secret handling

`TURNSTILE_SECRET` belongs in Wrangler secrets for both environments. It must never be committed or printed.
