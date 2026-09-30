export default {
  "phase": "closed",
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
    },
    {
      "recordedAt": "2026-09-30T17:00:46Z",
      "phase": "production-ready",
      "candidate": "297bef61eacef87b328f72c83305a4607696d595543e91842263e2972ceccd48",
      "change": "Resolved the native simulator and dependency blockers, deployed the exact candidate to staging, and completed all production release gates.",
      "evidence": "artifacts/maintenance-2026-09-30",
      "nextAction": "Promote the unchanged dist artifact with the documented production environment and verify the canonical hostname."
    },
    {
      "recordedAt": "2026-09-30T17:10:19Z",
      "phase": "closed",
      "candidate": "297bef61eacef87b328f72c83305a4607696d595543e91842263e2972ceccd48",
      "change": "Deployed production Worker version 586da9cd-72c2-4f5f-a3e2-a50d137bbb5e and completed canonical HTTP, WebKit, and native Safari verification.",
      "evidence": "docs/release-evidence/2026-09-30-production/README.md",
      "nextAction": "Monitor normal production observability and retain this evidence with the release commit."
    }
  ],
  "blockers": [
    {
      "category": "Retained PageSpeed failure and native acceptance",
      "scope": "Staging and production",
      "evidence": "Complete private verification passes, including composition, static checks and 36 browser tests with 3 intentional skips. Historical PageSpeed evidence is retained separately and is not current-candidate acceptance.",
      "nextAction": "Restore Simulator.app and native GUI control. Review the preserved September 25 first-failure filmstrip, qualify this exact candidate, stage it, then run the required mobile/desktop PSI matrix without discarding the first valid failure.",
      "summary": "Retained PageSpeed failure and native acceptance",
      "status": "resolved",
      "activeMinutes": 0,
      "attempts": [
        {
          "action": "Run a single mobile provider probe followed by the desktop matrix for the final staged candidate.",
          "result": "Both strategies returned 100 in all four required categories.",
          "evidence": "artifacts/maintenance-2026-09-30/pagespeed-final",
          "successful": true
        }
      ],
      "resolutionEvidence": "artifacts/maintenance-2026-09-30/pagespeed-final"
    },
    {
      "category": "Native Safari and PageSpeed",
      "scope": "Staging and production",
      "evidence": "Simulator.app missing; no verified staged candidate or current PSI matrix",
      "nextAction": "Restore complete Simulator application, validate exact candidate with an isolated explicit UDID, then stage and score all eight PSI categories.",
      "summary": "Native Safari and PageSpeed",
      "status": "resolved",
      "activeMinutes": 0,
      "attempts": [
        {
          "action": "Use Xcode 27 Device Hub with an isolated explicit iPhone 17 Pro UDID and verify the staged candidate in native Safari.",
          "result": "Homepage navigation, mobile menu, About route, and scrolling passed on iOS 26.5.",
          "evidence": "artifacts/maintenance-2026-09-30/native-safari/staging-about.png",
          "successful": true
        }
      ],
      "resolutionEvidence": "artifacts/maintenance-2026-09-30/native-safari/staging-about.png"
    }
  ],
  "candidate": {
    "frozenRevision": "c76747b6d5c71acdf7e3036ea5075677409661e6 plus frozen maintenance diff 06824b1d50f98e597985c2b77bb6f2f941baf822a2bd2c12f19bf6c1087813aa",
    "buildIdentity": "297bef61eacef87b328f72c83305a4607696d595543e91842263e2972ceccd48",
    "frozenAt": "2026-09-30T17:00:46Z",
    "mandatorySuiteCommand": "npm run check && npm run test:unit && npm run build && npm run verify:seo && npm run verify:aeo && npm run verify:images && npm run verify:brand && npm run verify:site-health && npm run verify:semantic-seo && npm run verify:content-quality && npm run verify:render && npm run verify:side-navigation && npm run verify:design && npm run verify:interface && npm run verify:composition && npm run test:browser",
    "gates": {
      "build": {
        "status": "passed",
        "evidence": "Podman host 10.13.37.151 full verify output and dist digest 297bef61eacef87b328f72c83305a4607696d595543e91842263e2972ceccd48"
      },
      "mobilePageSpeed": {
        "status": "passed",
        "evidence": "artifacts/maintenance-2026-09-30/pagespeed-final/mobile.json",
        "scores": { "performance": 100, "accessibility": 100, "bestPractices": 100, "seo": 100 },
        "failureTriage": null
      },
      "desktopPageSpeed": {
        "status": "passed",
        "evidence": "artifacts/maintenance-2026-09-30/pagespeed-final/desktop.json",
        "scores": { "performance": 100, "accessibility": 100, "bestPractices": 100, "seo": 100 },
        "failureTriage": null
      },
      "chromium": {
        "status": "passed",
        "evidence": "Podman browser suite, 36 passed with 3 profile-inapplicable skips"
      },
      "playwrightWebKit": {
        "status": "passed",
        "evidence": "Staged and production WebKit suites, each 24 passed with 2 profile-inapplicable skips"
      },
      "nativeIosSafari": {
        "status": "passed",
        "evidence": "artifacts/maintenance-2026-09-30/native-safari/staging-about.png and production-about.png, UDID 01472FC1-95D2-42EE-97FB-7BDA34E086D6"
      },
      "interfaceQuality": {
        "status": "passed",
        "evidence": "artifacts/interface-quality-report.json, 50 of 50 checks passed"
      },
      "accessibility": {
        "status": "passed",
        "evidence": "PageSpeed accessibility 100 for mobile and desktop plus browser and interface validation"
      },
      "security": {
        "status": "passed",
        "evidence": "npm audit reports zero vulnerabilities and staged bindings preserve documented resources"
      }
    }
  }
};
