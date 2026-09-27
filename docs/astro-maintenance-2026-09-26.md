# Astro maintenance, September 26, 2026

Acceptance owner: Lane Campbell. Automated operating record, no human content or visual approval is asserted.

Baseline: 35a9d1008fd6886225cd3037edb363e2f4432a5e. Toolkit: 9b5b89988ef1ce26e4c9fd3bbc83ea50c44975a5. Qualified fast-forward pull passed.

Scope: current compatible dependency maintenance, local validation, and safe blocker repair. Cloudflare staging and production are authorized by the automation prompt only after their required gates pass. Preserve all existing editorial and visual review requirements.

Build and browser runner: Podman on 10.13.37.151. Native iOS Safari runner: this Mac with an explicit isolated UDID. PageSpeed remains required at 100 in all four categories for mobile and desktop before production.

External services: GitHub and npm required for synchronization and dependencies; Cloudflare conditional on verified candidate readiness; PageSpeed and native Safari required for production; Ahrefs optional unless the repository contract requires it. No new paid service is approved. Existing onboarding and project contracts remain authoritative.

Completion: dependency lockfile resolves, applicable local checks pass, source and output legacy public GovSoft destinations are absent, and every remaining release blocker has evidence and a next action. Production is a separate result.

Control thresholds: two failed attempts or ninety minutes per blocker. Rollback: preserve the preflight snapshot and reverse only explicit maintenance changes. No reset, stash, or user-work overwrite. Resource budget and phase command are recorded in maintenance-control.config.mjs.

Evidence: /Users/lane/.codex/automations/astro-static-site-upgrade-and-deploy/run-2026-09-26

## Current run outcome

Recorded at 2026-09-26T12:24:45.469790+00:00. Normal build: passed.

Full private verification passes: 36 browser cases, 3 intentional platform skips, 50 interface checks and 96 composition checks. Prior mobile PSI remains 99/100/100/100. Today private Lighthouse 13.5.0 reports 98/100/100/100 and Speed Index 1.4 seconds, without reproducing the prior staging 3.7 seconds.

Maintenance: Preserved first PSI report, filmstrip, network and LCP timing. Profiled current frozen output in Chromium and WebKit, then ran a pinned private Lighthouse diagnostic. No unsupported source change or hosted score retry.

Next action: Compare hosted delivery timing and preserved traces against the private diagnostic before a supported fix. After a changed candidate is validated, qualify staging, isolated native Safari and the complete eight-score PSI matrix.

Blocker scope: Production only. No staging or production deployment and no remote Git push occurred. Native iOS Safari is blocked by the locked Mac session. Current-candidate hosted PageSpeed scores are unavailable. All required release gates remain enforced.
