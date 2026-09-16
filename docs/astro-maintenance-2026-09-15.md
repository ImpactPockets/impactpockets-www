# Astro maintenance, September 15, 2026

Acceptance owner: Lane Campbell. Automated operating record, no human content or visual approval is asserted.

Baseline: 814b40a5270232ece3c3d01b6f7247d53c6ec91f. Toolkit: 837f39fc24f3053110f17bae1d69bd2f31e1fe20. Qualified fast-forward pull passed.

Scope: current compatible dependency maintenance, local validation, and safe blocker repair. Cloudflare staging and production are authorized by the automation prompt only after their required gates pass. Preserve all existing editorial and visual review requirements.

Build and browser runner: Podman on 10.13.37.151. Native iOS Safari runner: this Mac with an explicit isolated UDID. PageSpeed remains required at 100 in all four categories for mobile and desktop before production.

External services: GitHub and npm required for synchronization and dependencies; Cloudflare conditional on verified candidate readiness; PageSpeed and native Safari required for production; Ahrefs optional unless the repository contract requires it. No new paid service is approved. Existing onboarding and project contracts remain authoritative.

Completion: dependency lockfile resolves, applicable local checks pass, source and output legacy public GovSoft destinations are absent, and every remaining release blocker has evidence and a next action. Production is a separate result.

Control thresholds: two failed attempts or ninety minutes per blocker. Rollback: preserve the preflight snapshot and reverse only explicit maintenance changes. No reset, stash, or user-work overwrite. Resource budget and phase command are recorded in maintenance-control.config.mjs.

Evidence: /Users/lane/.codex/automations/astro-static-site-upgrade-and-deploy/run-2026-09-15

## Validation outcome

Normal build: passed normal local build. Browser: 30 passed, 3 intentional skips, repository browser suite including iPhone WebKit.

Preserved September 12 mobile 99/100/100/100. Private throttled hero LCP was about 1.14 s, with no hidden or animated hero and no external requests. This is not a new PSI result.

Remediation: Analyzed retained filmstrip and new private transport/paint trace; no evidence-supported source fix found.

Next action: Compare retained provider trace with private timing, isolate a repeatable cause, then prepare a changed candidate before another bounded PSI audit.

Production was not deployed. Exact staging, native Safari and both PageSpeed strategies remain required. Full report: /Users/lane/Dev/astro-pipeline-run-2026-09-15.md
