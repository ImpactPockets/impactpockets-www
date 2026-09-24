# Astro maintenance, September 23, 2026

Acceptance owner: Lane Campbell. Automated operating record, no human content or visual approval is asserted.

Baseline: 86fbe2c1406f57e0fa2319679de821dd9a115747. Toolkit: 837f39fc24f3053110f17bae1d69bd2f31e1fe20. Qualified fast-forward pull passed.

Scope: current compatible dependency maintenance, local validation, and safe blocker repair. Cloudflare staging and production are authorized by the automation prompt only after their required gates pass. Preserve all existing editorial and visual review requirements.

Build and browser runner: Podman on 10.13.37.151. Native iOS Safari runner: this Mac with an explicit isolated UDID. PageSpeed remains required at 100 in all four categories for mobile and desktop before production.

External services: GitHub and npm required for synchronization and dependencies; Cloudflare conditional on verified candidate readiness; PageSpeed and native Safari required for production; Ahrefs optional unless the repository contract requires it. No new paid service is approved. Existing onboarding and project contracts remain authoritative.

Completion: dependency lockfile resolves, applicable local checks pass, source and output legacy public GovSoft destinations are absent, and every remaining release blocker has evidence and a next action. Production is a separate result.

Control thresholds: two failed attempts or ninety minutes per blocker. Rollback: preserve the preflight snapshot and reverse only explicit maintenance changes. No reset, stash, or user-work overwrite. Resource budget and phase command are recorded in maintenance-control.config.mjs.

Evidence: /Users/lane/.codex/automations/astro-static-site-upgrade-and-deploy/run-2026-09-23

## Verified outcome

Recorded: 2026-09-23T08:33:03.380901-04:00

Preserved the first scored report, filmstrip, network and LCP breakdown. Upgraded dependencies, completed normal verification, staged without rebuilding, and verified exact bytes. No speculative performance edit or score retry.

Complete private verify passed: 33 browser tests, three intentional skips, and 96 composition artboard checks. Existing staging Worker serves the exact built candidate on all seven checked endpoints. First mobile PSI is 99/100/100/100, correct final URL and no runtime warnings. Desktop was not requested after the first failure, per the stop rule. Private diagnostic FCP 1076ms and hero LCP 1096ms do not reproduce the hosted 1978ms hero element render delay.

Remaining: Inspect the retained hosted filmstrip/render delay against the private trace; make a justified fix before another scored candidate. Unlock the Mac and finish native touch/form acceptance, then meet all eight exact-candidate PSI scores.

Native Safari: Dedicated iPhone booted successfully. Native Safari acceptance unavailable because the Mac is locked and CUA automatic unlock failed. Desktop Commander is unavailable. No native acceptance claimed. Owned device shut down.

Staging: Deployed existing impactpockets-www-staging Worker without rebuilding. Seven HTTP 200 endpoints match exact dist/client bytes.

No production deployment or remote push. Full site record: [Impact Pockets](</Users/lane/.codex/automations/astro-static-site-upgrade-and-deploy/run-2026-09-23/site-results.json>).
