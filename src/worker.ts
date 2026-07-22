import astroWorker from "@astrojs/cloudflare/entrypoints/server";
import { canonicalRedirectPath, isAlternateProductionHostname } from "@/lib/redirects";

export default {
  async fetch(request: Request, env: Cloudflare.Env, context: ExecutionContext) {
    if (request.method === "GET" || request.method === "HEAD") {
      const url = new URL(request.url);

      if (isAlternateProductionHostname(url.hostname)) {
        url.hostname = "www.impactpockets.com";
        return Response.redirect(url, 308);
      }

      const redirectPath = canonicalRedirectPath(url.pathname);
      if (redirectPath) {
        url.pathname = redirectPath;
        return Response.redirect(url, 308);
      }
    }

    return astroWorker.fetch(request, env, context);
  }
};
