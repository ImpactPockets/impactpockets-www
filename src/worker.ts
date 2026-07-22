import astroWorker from "@astrojs/cloudflare/entrypoints/server";
import { canonicalRedirectPath, isAlternateProductionHostname } from "@/lib/redirects";

export default {
  async fetch(request: Request, env: Cloudflare.Env, context: ExecutionContext) {
    if (request.method === "GET" || request.method === "HEAD") {
      const url = new URL(request.url);
      const alternateHostname = isAlternateProductionHostname(url.hostname);
      const redirectPath = canonicalRedirectPath(url.pathname);

      if (alternateHostname) {
        url.hostname = "www.impactpockets.com";
      }

      if (redirectPath) {
        url.pathname = redirectPath;
      }

      if (alternateHostname || redirectPath) {
        return Response.redirect(url, 308);
      }
    }

    return astroWorker.fetch(request, env, context);
  }
};
