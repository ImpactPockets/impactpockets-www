# Astro maintenance, September 29, 2026

Acceptance owner: Lane Campbell. Automated operating record, no human content or visual approval is asserted.

Baseline: 6a4bf33b9b3dfb89da3f92a5e4cc0ebe81f7a255. Toolkit: 9b5b89988ef1ce26e4c9fd3bbc83ea50c44975a5. Qualified fast-forward pull passed.

Scope: current compatible dependency maintenance, local validation, and safe blocker repair. Cloudflare staging and production are authorized by the automation prompt only after their required gates pass. Preserve all existing editorial and visual review requirements.

Build and browser runner: Podman on 10.13.37.151. Native iOS Safari runner: this Mac with an explicit isolated UDID. PageSpeed remains required at 100 in all four categories for mobile and desktop before production.

External services: GitHub and npm required for synchronization and dependencies; Cloudflare conditional on verified candidate readiness; PageSpeed and native Safari required for production; Ahrefs optional unless the repository contract requires it. No new paid service is approved. Existing onboarding and project contracts remain authoritative.

Completion: dependency lockfile resolves, applicable local checks pass, source and output legacy public GovSoft destinations are absent, and every remaining release blocker has evidence and a next action. Production is a separate result.

Control thresholds: two failed attempts or ninety minutes per blocker. Rollback: preserve the preflight snapshot and reverse only explicit maintenance changes. No reset, stash, or user-work overwrite. Resource budget and phase command are recorded in maintenance-control.config.mjs.

Evidence: /Users/lane/.codex/automations/astro-static-site-upgrade-and-deploy/run-2026-09-29

## Final validation outcome

Complete private verification passes, including composition, static gates and 36 browser tests with 3 intentional skips. The previous composition failure remains archived. Current throttled private trace records first paint and LCP at 1144 ms, no layout shifts, no browser errors, no external requests and no active animations. This diagnostic does not reproduce or replace the September 25 scored PageSpeed failure.

No active public legacy destination found; no URL replacement needed this run.

Remaining action: Restore native Simulator GUI/control, qualify this exact candidate, and use the preserved first-failure filmstrip plus current trace to diagnose staged rendering before another scored PSI matrix. Do not reuse historical scores.

No staging or production deployment occurred. Current PageSpeed matrix and native Safari acceptance remain unavailable. See [/Users/lane/Dev/astro-pipeline-run-2026-09-29.md](/Users/lane/Dev/astro-pipeline-run-2026-09-29.md) for exact upstream hashes, current toolkit contract, all check results and retained failures.
