# Astro maintenance, September 19, 2026

Acceptance owner: Lane Campbell. Automated operating record, no human content or visual approval is asserted.

Baseline: a9261ac5fc1735b842c00a6cfe4fbedb7405364a. Toolkit: 837f39fc24f3053110f17bae1d69bd2f31e1fe20. Qualified fast-forward pull passed.

Scope: current compatible dependency maintenance, local validation, and safe blocker repair. Cloudflare staging and production are authorized by the automation prompt only after their required gates pass. Preserve all existing editorial and visual review requirements.

Build and browser runner: Podman on 10.13.37.151. Native iOS Safari runner: this Mac with an explicit isolated UDID. PageSpeed remains required at 100 in all four categories for mobile and desktop before production.

External services: GitHub and npm required for synchronization and dependencies; Cloudflare conditional on verified candidate readiness; PageSpeed and native Safari required for production; Ahrefs optional unless the repository contract requires it. No new paid service is approved. Existing onboarding and project contracts remain authoritative.

Completion: dependency lockfile resolves, applicable local checks pass, source and output legacy public GovSoft destinations are absent, and every remaining release blocker has evidence and a next action. Production is a separate result.

Control thresholds: two failed attempts or ninety minutes per blocker. Rollback: preserve the preflight snapshot and reverse only explicit maintenance changes. No reset, stash, or user-work overwrite. Resource budget and phase command are recorded in maintenance-control.config.mjs.

Evidence: /Users/lane/.codex/automations/astro-static-site-upgrade-and-deploy/run-2026-09-19

## Validation outcome

Normal private build passed. Final complete private verify passed after Cloudflare Vite plugin 1.56.0, including 15 unit tests and 33 browser passes with three intentional skips. Native touch acceptance remains incomplete; earlier native observations precede this final plugin upgrade.

Remediation: Updated Wrangler, Workers types and Cloudflare Vite plugin. Preserved prior valid mobile PSI 98/100/100/100; no unsupported score retry.

Next action: Finish native touch acceptance on the final artifact. Diagnose the prior delayed first paint with a supported fix, then freeze, stage and complete mobile and desktop PSI at all 100s.

No production deployment. Exact staging, full native Safari and both hosted PSI strategies remain required.

Full report: /Users/lane/Dev/astro-pipeline-run-2026-09-19.md
