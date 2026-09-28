# Astro maintenance, September 27, 2026

Acceptance owner: Lane Campbell. Automated operating record, no human content or visual approval is asserted.

Baseline: 03015842dc98f09d390d897f43b11a78e2b88ccd. Toolkit: 9b5b89988ef1ce26e4c9fd3bbc83ea50c44975a5. Qualified fast-forward pull passed.

Scope: current compatible dependency maintenance, local validation, and safe blocker repair. Cloudflare staging and production are authorized by the automation prompt only after their required gates pass. Preserve all existing editorial and visual review requirements.

Build and browser runner: Podman on 10.13.37.151. Native iOS Safari runner: this Mac with an explicit isolated UDID. PageSpeed remains required at 100 in all four categories for mobile and desktop before production.

External services: GitHub and npm required for synchronization and dependencies; Cloudflare conditional on verified candidate readiness; PageSpeed and native Safari required for production; Ahrefs optional unless the repository contract requires it. No new paid service is approved. Existing onboarding and project contracts remain authoritative.

Completion: dependency lockfile resolves, applicable local checks pass, source and output legacy public GovSoft destinations are absent, and every remaining release blocker has evidence and a next action. Production is a separate result.

Control thresholds: two failed attempts or ninety minutes per blocker. Rollback: preserve the preflight snapshot and reverse only explicit maintenance changes. No reset, stash, or user-work overwrite. Resource budget and phase command are recorded in maintenance-control.config.mjs.

Evidence: /Users/lane/.codex/automations/astro-static-site-upgrade-and-deploy/run-2026-09-27

## Current run outcome

Recorded at 2026-09-27T12:22:07.533543+00:00. Normal build: passed.

Full private verification passes: 36 browser cases, 3 intentional platform skips, 50 interface checks and 96 composition checks. Preserved September 25 staged mobile PSI is 99/100/100/100; it does not qualify the current candidate. Two unscored existing-staging requests return HTTP 200 and cache HIT, with document and hero TTFB 267 ms and 110 ms. The prior 1899 ms post-download hero paint delay is not explained by these delivery checks.

Maintenance: Updated @cloudflare/workers-types 5.20260926.1 to 5.20260927.1. Completed fresh synchronized-baseline Podman installation, available checks and normal build attempt. Preserved the first valid scored PSI failure and inspected its resource/render timing; performed two bounded unscored hosted delivery checks, with no score retries.

Next action: Obtain an unlocked isolated native session and a bounded browser trace on the existing staging artifact to isolate the post-download paint delay. Make only a supported fix, then qualify the changed candidate through staging and both PSI strategies. No unchanged-artifact scored retries.

Blocker scope: Production only. No staging or production deployment and no remote Git push occurred. Native iOS Safari is blocked by the locked Mac session. Current-candidate hosted PageSpeed scores are unavailable. All release gates remain enforced.
