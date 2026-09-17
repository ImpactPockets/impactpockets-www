# Astro maintenance, September 16, 2026

Acceptance owner: Lane Campbell. Automated operating record, no human content or visual approval is asserted.

Baseline: 2c9be3fe56e48983cc1631fe2d3d8c2c2a0247ab. Toolkit: 837f39fc24f3053110f17bae1d69bd2f31e1fe20. Qualified fast-forward pull passed.

Scope: current compatible dependency maintenance, local validation, and safe blocker repair. Cloudflare staging and production are authorized by the automation prompt only after their required gates pass. Preserve all existing editorial and visual review requirements.

Build and browser runner: Podman on 10.13.37.151. Native iOS Safari runner: this Mac with an explicit isolated UDID. PageSpeed remains required at 100 in all four categories for mobile and desktop before production.

External services: GitHub and npm required for synchronization and dependencies; Cloudflare conditional on verified candidate readiness; PageSpeed and native Safari required for production; Ahrefs optional unless the repository contract requires it. No new paid service is approved. Existing onboarding and project contracts remain authoritative.

Completion: dependency lockfile resolves, applicable local checks pass, source and output legacy public GovSoft destinations are absent, and every remaining release blocker has evidence and a next action. Production is a separate result.

Control thresholds: two failed attempts or ninety minutes per blocker. Rollback: preserve the preflight snapshot and reverse only explicit maintenance changes. No reset, stash, or user-work overwrite. Resource budget and phase command are recorded in maintenance-control.config.mjs.

Evidence: /Users/lane/.codex/automations/astro-static-site-upgrade-and-deploy/run-2026-09-16

## Validation outcome

Build: normal private build passed. Browser: 30 passed, three skipped in the repository browser suite, including iPhone WebKit.

Build and 30 browser tests pass, three skips. Native Safari initial paint, menu and About navigation work, but complete scrolling was not established. Historical mobile PSI 99/100/100/100 remains a prior failure, not a current score.

Remediation: Updated three Cloudflare packages, ran current local gates, booted an explicit native device and checked the existing staging hostname, HTTP 200 without current-candidate identity.

Next action: Use the retained paint trace to identify a repeatable source or transport cause, complete native scrolling, freeze and stage the candidate, then request both bounded PSI strategies.

No production deployment. Exact staging, complete native Safari and both PageSpeed strategies remain required. Full report: /Users/lane/Dev/astro-pipeline-run-2026-09-16.md
