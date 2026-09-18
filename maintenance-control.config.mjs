export default {
  "phase": "implementation",
  "output": "artifacts/maintenance-2026-09-17/execution-control.json",
  "taskEnvelope": {
    "requestedOutcome": "Maintain current compatible Astro and Cloudflare dependencies and repair safely verifiable release blockers",
    "acceptanceOwner": "Lane Campbell",
    "targetRepository": "/Users/lane/Dev/.codex-worktrees/impactpockets-20260824-upstream",
    "targetBranch": "codex/preflight-astro-20260917-impactpockets-20260824-upstream",
    "initialRevision": "570863abef32603ee67e1118df4923bb24d7b9ec",
    "toolkitRevision": "837f39fc24f3053110f17bae1d69bd2f31e1fe20",
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
      "recordedAt": "2026-09-17T12:06:41.021815+00:00",
      "phase": "implementation",
      "candidate": "No frozen candidate",
      "change": "Completed qualified fast-forward pull and current registry comparison",
      "evidence": "/Users/lane/.codex/automations/astro-static-site-upgrade-and-deploy/run-2026-09-17/priority-sync.json",
      "nextAction": "Install compatible patches and validate on Podman"
    }
  ],
  "blockers": [],
  "candidate": {
    "frozenRevision": "",
    "buildIdentity": "",
    "frozenAt": "",
    "mandatorySuiteCommand": "npm run check && npm run test:unit && npm run build && npm run verify:seo && npm run verify:aeo && npm run verify:images && npm run verify:brand && npm run verify:site-health && npm run verify:semantic-seo && npm run verify:content-quality && npm run verify:render && npm run verify:side-navigation && npm run verify:design && npm run verify:interface && npm run verify:composition && npm run test:browser",
    "gates": {}
  }
};
