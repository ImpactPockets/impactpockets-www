# Astro maintenance, September 30, 2026

Acceptance owner: Lane Campbell. Automated operating record, no human content or visual approval is asserted.

Baseline: e8b1374d00ea1b267427e40037c8818860951ca1. Toolkit: 1275b680e3cc3c2d0446fdb346891f92f25ce4d5. Qualified fast-forward pull passed.

Scope: current compatible dependency maintenance, local validation, and safe blocker repair. Cloudflare staging and production are authorized by the automation prompt only after their required gates pass. Preserve all existing editorial and visual review requirements.

Build and browser runner: Podman on 10.13.37.151. Native iOS Safari runner: this Mac with an explicit isolated UDID. PageSpeed remains required at 100 in all four categories for mobile and desktop before production.

External services: GitHub and npm required for synchronization and dependencies; Cloudflare conditional on verified candidate readiness; PageSpeed and native Safari required for production; Ahrefs optional unless the repository contract requires it. No new paid service is approved. Existing onboarding and project contracts remain authoritative.

Completion: dependency lockfile resolves, applicable local checks pass, source and output legacy public GovSoft destinations are absent, and every remaining release blocker has evidence and a next action. Production is a separate result.

Control thresholds: two failed attempts or ninety minutes per blocker. Rollback: preserve the preflight snapshot and reverse only explicit maintenance changes. No reset, stash, or user-work overwrite. Resource budget and phase command are recorded in maintenance-control.config.mjs.

Evidence: /Users/lane/.codex/automations/astro-static-site-upgrade-and-deploy/run-2026-09-30

## Final validation outcome

Complete private verification passes, including composition, static checks and 36 browser tests with 3 intentional skips. Historical PageSpeed evidence is retained separately and is not current-candidate acceptance.

No active public legacy GovSoft destination required replacement. Generated HTML scan has zero govsoft.us references.

Remaining action: Restore Simulator.app and native GUI control. Review the preserved September 25 first-failure filmstrip, qualify this exact candidate, stage it, then run the required mobile/desktop PSI matrix without discarding the first valid failure.

No staging or production deployment occurred. Current PageSpeed and native Safari gates remain unsatisfied. See [portfolio report](/Users/lane/Dev/astro-pipeline-run-2026-09-30.md) for upstream hashes, checks, retained failures and target evidence.
