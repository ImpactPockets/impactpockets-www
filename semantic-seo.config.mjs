export default {
  outputDirectory: "dist/client",
  site: "https://www.impactpockets.com",
  output: "artifacts/semantic-seo-report.json",
  failOnWarnings: false,
  requirePageRule: true,
  contentSelectors: ["body"],
  title: {
    minimumCharacters: 30,
    maximumCharacters: 60,
    minimumWords: 4,
    minimumH1Overlap: 1,
    minimumContentOverlap: 2,
    maximumRepeatedWord: 2,
    ignoredTerms: []
  },
  pageRules: [
    {
      pattern: "/",
      minimumWords: 240,
      titleTerms: ["Impact Pockets", "private equity fund"],
      minimumTitleTerms: 1,
      contentTerms: ["experienced operators", "fund", "strategy"],
      minimumContentTerms: 2
    },
    {
      pattern: "/about-impact-pockets/",
      minimumWords: 200,
      titleTerms: ["Impact Pockets", "managing partners"],
      minimumTitleTerms: 1,
      contentTerms: ["serial founder", "certified public accountant", "fund managers"],
      minimumContentTerms: 2
    },
    {
      pattern: "/our-process/",
      minimumWords: 350,
      titleTerms: ["process", "fund manager"],
      minimumTitleTerms: 1,
      contentTerms: ["operating history", "investor network", "formal fund formation"],
      minimumContentTerms: 2
    },
    {
      pattern: "/our-services/",
      minimumWords: 280,
      titleTerms: ["services", "fund incubation"],
      minimumTitleTerms: 1,
      contentTerms: ["private equity fund", "experienced operators", "global operations"],
      minimumContentTerms: 2
    },
    {
      pattern: "/contact-us/",
      minimumWords: 120,
      titleTerms: ["contact", "fund"],
      minimumTitleTerms: 1,
      contentTerms: ["operating experience", "fund", "contact"],
      minimumContentTerms: 2
    }
  ],
  citations: {
    routePatterns: [],
    requireOnMatchedRoutes: false,
    checkExternal: false,
    timeoutMs: 8000,
    concurrency: 4,
    requireReviews: false,
    maximumReviewAgeDays: 365,
    minimumContextSourceOverlap: 2,
    lowOverlapSeverity: "warning",
    ignoredUrls: [],
    sourceSnapshots: [],
    reviews: []
  }
};
