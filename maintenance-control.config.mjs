export default {
  "phase": "implementation",
  "output": "artifacts/maintenance-2026-09-30/execution-control.json",
  "taskEnvelope": {
    "requestedOutcome": "Maintain current compatible Astro and Cloudflare dependencies and repair safely verifiable release blockers",
    "acceptanceOwner": "Lane Campbell",
    "targetRepository": "/Users/lane/Dev/.codex-worktrees/impactpockets-20260824-upstream",
    "targetBranch": "codex/preflight-astro-20260930-impactpockets-20260824-upstream",
    "initialRevision": "e8b1374d00ea1b267427e40037c8818860951ca1",
    "toolkitRevision": "1275b680e3cc3c2d0446fdb346891f92f25ce4d5",
    "rollbackMethod": "Preserve the preflight snapshot and reverse only the explicit maintenance diff if rejected",
    "scope": [
      "Astro application .",
      "Dependency and build validation on private Podman host 10.13.37.151",
      "Exact candidate Safari, staging and PageSpeed when prerequisites pass"
    ],
    "exclusions": [
      "Production data mutation",
      "Unapproved factual or brand assertions",
      "Unrelated user changes"
    ],
    "separateAuthorization": [
      "Named factual, social or design approval where required"
    ]
  },
  "thresholds": {
    "maximumUnsuccessfulAttempts": 2,
    "activeInvestigationMinutes": 90,
    "progressRecordMinutes": 30
  },
  "resourceBudget": {
    "lane": "application-release",
    "estimatedExternalRequests": 1500,
    "maximumExternalRequests": 5000,
    "estimatedTransferBytes": 500000000,
    "maximumTransferBytes": 1000000000,
    "estimationMethod": "Registry and package installation allowance; local builds and browsers complete zero production requests; stage and PSI require a separate bounded gate record",
    "observedExternalRequests": null,
    "observedTransferBytes": null
  },
  "findings": [],
  "checkpoints": [
    {
      "recordedAt": "2026-09-30T12:06:58.947090+00:00",
      "phase": "implementation",
      "candidate": "No frozen candidate",
      "change": "Completed qualified fast-forward pull and current registry comparison",
      "evidence": "/Users/lane/.codex/automations/astro-static-site-upgrade-and-deploy/run-2026-09-30/priority-sync.json",
      "nextAction": "Install compatible patches and validate on Podman"
    },
    {
      "recordedAt": "2026-09-30T12:26:19.963036+00:00",
      "phase": "implementation",
      "candidate": "Unfrozen maintenance output",
      "change": "Complete private verification passes, including composition, static checks and 36 browser tests with 3 intentional skips. Historical PageSpeed evidence is retained separately and is not current-candidate acceptance.",
      "evidence": "/Users/lane/.codex/automations/astro-static-site-upgrade-and-deploy/run-2026-09-30/site-results.json",
      "nextAction": "Restore Simulator.app and native GUI control. Review the preserved September 25 first-failure filmstrip, qualify this exact candidate, stage it, then run the required mobile/desktop PSI matrix without discarding the first valid failure."
    }
  ],
  "blockers": [
    {
      "category": "Retained PageSpeed failure and native acceptance",
      "scope": "Staging and production",
      "evidence": "Complete private verification passes, including composition, static checks and 36 browser tests with 3 intentional skips. Historical PageSpeed evidence is retained separately and is not current-candidate acceptance.",
      "nextAction": "Restore Simulator.app and native GUI control. Review the preserved September 25 first-failure filmstrip, qualify this exact candidate, stage it, then run the required mobile/desktop PSI matrix without discarding the first valid failure.",
      "summary": "Retained PageSpeed failure and native acceptance",
      "status": "blocked",
      "activeMinutes": 0,
      "attempts": []
    },
    {
      "category": "Native Safari and PageSpeed",
      "scope": "Staging and production",
      "evidence": "Simulator.app missing; no verified staged candidate or current PSI matrix",
      "nextAction": "Restore complete Simulator application, validate exact candidate with an isolated explicit UDID, then stage and score all eight PSI categories.",
      "summary": "Native Safari and PageSpeed",
      "status": "blocked",
      "activeMinutes": 0,
      "attempts": []
    }
  ],
  "candidate": {
    "frozenRevision": "",
    "buildIdentity": "",
    "frozenAt": "",
    "mandatorySuiteCommand": "npm run check && npm run test:unit && npm run build && npm run verify:seo && npm run verify:aeo && npm run verify:images && npm run verify:brand && npm run verify:site-health && npm run verify:semantic-seo && npm run verify:content-quality && npm run verify:render && npm run verify:side-navigation && npm run verify:design && npm run verify:interface && npm run verify:composition && npm run test:browser",
    "gates": {}
  }
};
