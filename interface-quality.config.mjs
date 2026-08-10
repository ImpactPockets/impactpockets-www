export default {
  outputDirectory: "dist/client",
  report: "artifacts/interface-quality-report.json",
  screenshotDirectory: "artifacts/interface-quality",
  screenshots: "failures",
  requireIndexableCoverage: true,
  exemptRoutes: [],
  browsers: ["chromium", "webkit"],
  viewports: [
    { name: "expanded", width: 1440, height: 1000 },
    { name: "compact-desktop", width: 1024, height: 900 },
    { name: "tablet", width: 768, height: 1024 },
    { name: "mobile", width: 390, height: 844 },
    { name: "minimum", width: 320, height: 720 }
  ],
  overlapTolerance: 1,
  overflowTolerance: 1,
  minimumDistinctiveDimensions: 2,
  differentiationBrowsers: ["chromium"],
  differentiationViewports: ["expanded", "mobile"],
  failOnWarnings: false,
  header: {
    selector: "[data-site-header]",
    maximumViewportHeightRatio: 0.2
  },
  controls: {
    selector: 'a[href], button, summary, input:not([type="hidden"]), textarea, select',
    targetSize: {
      enabled: true,
      minimumWidth: 24,
      minimumHeight: 24,
      severity: "warning",
      ignoreSelectors: []
    }
  },
  routes: [
    {
      path: "/",
      family: "home",
      archetype: "operator-fund-landing",
      purpose: "Introduce the operator partnership and direct qualified visitors to the process.",
      contentRhythm: "Value proposition, operator fit, team, and process invitation.",
      visualIdentity: "Bull-led hero followed by editorial sections and partner portraits.",
      requiredSelectors: ["main", ".hero-section"],
      distinctiveSelectors: [".hero-content", ".why-join-section", ".team-section"]
    },
    {
      path: "/about-impact-pockets/",
      family: "company-profile",
      archetype: "managing-partner-profile",
      purpose: "Explain the firm, its managing partners, and shared operating values.",
      contentRhythm: "Introduction, partner profiles, values, and frequently asked questions.",
      visualIdentity: "Market hero, centered company story, partner portraits, and value cards.",
      requiredSelectors: [".hero", ".about"],
      distinctiveSelectors: [".team-members", ".value", ".faq"]
    },
    {
      path: "/our-process/",
      family: "process-explainer",
      archetype: "fund-formation-process",
      purpose: "Explain the sequence from initial conversation through fund formation.",
      contentRhythm: "Sequential stages with supporting diagrams, responsibilities, and next steps.",
      visualIdentity: "Exchange hero followed by alternating stage narratives and process artwork.",
      requiredSelectors: [".hero", ".conversation-section"],
      distinctiveSelectors: [".service_contract", ".performa-main", ".investor-main"]
    },
    {
      path: "/our-services/",
      family: "service-catalog",
      archetype: "service-capability-catalog",
      purpose: "Present the fund incubation, advisory, technology, and tax capabilities.",
      contentRhythm: "Service overview followed by capability sections, proof points, and an invitation.",
      visualIdentity: "Architectural hero, capability imagery, service cards, and a closing call to action.",
      requiredSelectors: [".hero", ".fund-incubation"],
      distinctiveSelectors: [".advisory-services", ".technology-ai", ".tax-optimization"]
    },
    {
      path: "/contact-us/",
      family: "contact-intake",
      archetype: "qualified-contact-intake",
      purpose: "Give qualified operators direct contact details and a secure inquiry form.",
      contentRhythm: "Contact choices, structured inquiry form, and frequently asked questions.",
      visualIdentity: "Two-column contact panel with prominent form and supporting accordion.",
      requiredSelectors: [".contact-section", "[data-contact-form]"],
      distinctiveSelectors: [".contact-info", ".form-fields_main", ".faq"]
    }
  ]
};
