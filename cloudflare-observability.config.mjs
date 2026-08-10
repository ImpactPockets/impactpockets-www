export default {
  output: "artifacts/cloudflare-observability-report.json",
  required: false,
  edgeRequired: false,
  mode: "advisory",
  accountId: process.env.CLOUDFLARE_ACCOUNT_ID || "588dde8dea5c387c6858b80a900a4269",
  zoneId: process.env.CLOUDFLARE_ZONE_ID || "d3519f1a807b6b73b58b610a692b02bf",
  hostname: process.env.CLOUDFLARE_RUM_HOSTNAME || "www.impactpockets.com",
  apiTokenEnvironmentVariable: "CLOUDFLARE_API_TOKEN",
  globalApiKeyEnvironmentVariable: "CLOUDFLARE_GLOBAL_API_KEY",
  authEmailEnvironmentVariable: "CLOUDFLARE_AUTH_EMAIL",
  endpoint: "https://api.cloudflare.com/client/v4/graphql",
  windowHours: 24,
  minimumSamples: 20,
  minimumEdgeRequests: 100,
  groupLimit: 250,
  durationDivisor: 1000,
  thresholds: {
    largestContentfulPaintP75Ms: 2500,
    largestContentfulPaintP99Ms: 8000,
    interactionToNextPaintP75Ms: 200,
    cumulativeLayoutShiftP75: 0.1,
    edge4xxRate: null,
    edge5xxRate: 0.01
  },
  regression: {
    ratio: 1.25,
    largestContentfulPaintP75Ms: 250,
    interactionToNextPaintP75Ms: 50,
    cumulativeLayoutShiftP75: 0.05
  }
};
