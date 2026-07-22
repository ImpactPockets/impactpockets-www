export default {
  outputDirectory: "dist/client",
  output: "artifacts/content-quality-report.json",
  contentSelector: "body",
  requireRouteRule: true,
  requireReview: false,
  reviewFile: "content-quality.reviews.json",
  maximumReviewAgeDays: 180,
  maximumSentenceWords: 36,
  maximumParagraphWords: 100,
  minimumReadingEase: 35,
  readingEaseSeverity: "error",
  maximumRepeatedOpenings: 3,
  phraseSeverity: "error",
  additionalPhrases: [],
  routeRules: [
    {
      pattern: "/",
      audience: "Experienced operators considering a private equity fund",
      primaryTask: "Understand the partnership and decide whether to explore the process",
      minimumReadingEase: 38
    },
    {
      pattern: "/about-impact-pockets/",
      audience: "Operators evaluating the Impact Pockets managing partners",
      primaryTask: "Understand the partners' experience and decide whether to contact them",
      minimumReadingEase: 23
    },
    {
      pattern: "/our-process/",
      audience: "Experienced operators evaluating fund formation",
      primaryTask: "Understand each stage from discovery through formal launch",
      minimumReadingEase: 35
    },
    {
      pattern: "/our-services/",
      audience: "Operators comparing private equity fund support services",
      primaryTask: "Understand the available support and decide whether it fits their needs",
      minimumReadingEase: 28
    },
    {
      pattern: "/contact-us/",
      audience: "Operators ready to discuss a fund opportunity",
      primaryTask: "Find contact details or send a complete inquiry",
      minimumReadingEase: 5
    }
  ]
};
