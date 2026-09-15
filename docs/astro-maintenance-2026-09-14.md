# Astro maintenance, September 14, 2026

Acceptance owner: Lane Campbell. Automated operating record, no human content or visual approval is asserted.

Baseline: f6f53f168c62b0d9fc06018b770dc5a389ed86e3. Toolkit: 837f39fc24f3053110f17bae1d69bd2f31e1fe20. Qualified fast-forward pull passed.

Scope: current compatible dependency maintenance, local validation, and safe blocker repair. Cloudflare staging and production are authorized by the automation prompt only after their required gates pass. Preserve all existing editorial and visual review requirements.

Build and browser runner: Podman on 10.13.37.151. Native iOS Safari runner: this Mac with an explicit isolated UDID. PageSpeed remains required at 100 in all four categories for mobile and desktop before production.

External services: GitHub and npm required for synchronization and dependencies; Cloudflare conditional on verified candidate readiness; PageSpeed and native Safari required for production; Ahrefs optional unless the repository contract requires it. No new paid service is approved. Existing onboarding and project contracts remain authoritative.

Completion: dependency lockfile resolves, applicable local checks pass, source and output legacy public GovSoft destinations are absent, and every remaining release blocker has evidence and a next action. Production is a separate result.

Control thresholds: two failed attempts or ninety minutes per blocker. Rollback: preserve the preflight snapshot and reverse only explicit maintenance changes. No reset, stash, or user-work overwrite. Resource budget and phase command are recorded in maintenance-control.config.mjs.

Evidence: /Users/lane/.codex/automations/astro-static-site-upgrade-and-deploy/run-2026-09-14

## Final validation outcome

Recorded at 2026-09-14T08:47:33.038447-04:00. Dependency result: @cloudflare/vite-plugin 1.54.9, @cloudflare/workers-types 5.20260914.1, wrangler 4.131.2.

Normal build exit: 0. Browser result: 30 pass, 3 explicit skips, includes iPhone WebKit. A successful local build is not production acceptance.

Preserved September 12 mobile PSI is 99/100/100/100, desktop not run after failure. Today all named local gates pass; native homepage, navigation and keyboard checked, long scroll and real Turnstile remain incomplete.

Next action: Continue provider paint-delay diagnosis against the retained filmstrip before another PSI request; complete native long-scroll and staged form evidence.

Staging and production were not deployed. Current native and PageSpeed release gates remain incomplete. Full evidence: `/Users/lane/.codex/automations/astro-static-site-upgrade-and-deploy/run-2026-09-14`.
