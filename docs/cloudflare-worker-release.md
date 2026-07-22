# Cloudflare Worker Release

## Architecture

Astro prerenders the five public pages and Cloudflare Workers serves the static output. Requests to `/api/contact` run through the Worker.

The contact flow is fixed:

1. The browser posts to same-origin `/api/contact`.
2. The Worker validates the origin, hostname, body size, allowed fields, field lengths, and honeypot.
3. The Worker validates the managed Turnstile token with Cloudflare Siteverify.
4. The destination-restricted `EMAIL` binding may send only to `lane@impactpockets.com` from `hello@impactpockets.com`.
5. The visitor address is used only as the reply-to address.

No email credential or Turnstile secret is shipped to browser code.

## Environments

- Staging Worker: `impactpockets-www-staging.biglane.workers.dev`
- Production Worker: `impactpockets-www`
- Production route: `www.impactpockets.com/*`

The corrected visual-fidelity candidate has not replaced the existing staging version because the Go for Launch brand asset gate is not green.

## Current blockers

Production promotion is prohibited until all of these pass:

1. Resolve the conflict between the 1:1 layout and the current brand guide minimum logo width and clear-space requirements.
2. A real staging form submission passes Turnstile and arrives at `lane@impactpockets.com`.
3. The remaining Go for Launch staging, native Safari, PageSpeed, redirect, and exact-candidate gates pass.

Cloudflare Email Sending is enabled for `impactpockets.com`. On 2026-07-21, a narrowly scoped Email Sending token was created for the Impact Pockets account and stored in the 1Password `AgentWork` vault. A real Cloudflare Email Sending API message from `hello@impactpockets.com` to `lane@impactpockets.com` was reported as delivered, and the matching message was confirmed in the `lane@impactpockets.com` Gmail inbox. The exact staging Worker form flow still requires verification after the local hard gates pass. No production DNS or route change was made.

## Secret handling

`TURNSTILE_SECRET` belongs in Wrangler secrets for both environments. It must never be committed or printed.
