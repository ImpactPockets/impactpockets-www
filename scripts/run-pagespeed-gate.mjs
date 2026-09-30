import fs from "node:fs";
import https from "node:https";
import path from "node:path";

const [targetUrl, strategy, outputPath] = process.argv.slice(2);

if (!targetUrl || !["mobile", "desktop"].includes(strategy) || !outputPath) {
  console.error("Usage: node scripts/run-pagespeed-gate.mjs URL STRATEGY OUTPUT_PATH");
  process.exit(2);
}

const envText = fs.readFileSync(".env", "utf8");
const keyMatch = envText.match(/^PAGESPEED_API_KEY=(.*)$/m);

if (!keyMatch) {
  console.error("PAGESPEED_API_KEY is missing from .env");
  process.exit(2);
}

const apiKey = keyMatch[1].trim().replace(/^(['"])(.*)\1$/, "$2");
const requestUrl = new URL("https://www.googleapis.com/pagespeedonline/v5/runPagespeed");
requestUrl.searchParams.set("url", targetUrl);
requestUrl.searchParams.set("strategy", strategy);
for (const category of ["performance", "accessibility", "best-practices", "seo"]) {
  requestUrl.searchParams.append("category", category);
}
requestUrl.searchParams.set("key", apiKey);

https
  .get(requestUrl, (response) => {
    let body = "";
    response.on("data", (chunk) => {
      body += chunk;
    });
    response.on("end", () => {
      fs.mkdirSync(path.dirname(outputPath), { recursive: true });
      fs.writeFileSync(outputPath, body);

      let result;
      try {
        result = JSON.parse(body);
      } catch {
        console.error("PageSpeed returned a response that was not JSON");
        process.exit(3);
      }

      if (response.statusCode !== 200) {
        console.error(
          `PageSpeed provider error, status ${response.statusCode}, ${result.error?.status ?? "unknown"}`,
        );
        process.exit(4);
      }

      const categories = result.lighthouseResult.categories;
      const scores = {
        performance: Math.round(categories.performance.score * 100),
        accessibility: Math.round(categories.accessibility.score * 100),
        bestPractices: Math.round(categories["best-practices"].score * 100),
        seo: Math.round(categories.seo.score * 100),
      };

      console.log(
        JSON.stringify({
          strategy,
          ...scores,
          finalUrl: result.lighthouseResult.finalUrl,
          fetchTime: result.lighthouseResult.fetchTime,
        }),
      );

      if (Object.values(scores).some((score) => score !== 100)) {
        process.exit(5);
      }
    });
  })
  .on("error", (error) => {
    console.error(`PageSpeed request failed, ${error.code ?? error.name}`);
    process.exit(6);
  });
