import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://www.impactpockets.com",
  trailingSlash: "always",
  output: "static",
  adapter: cloudflare(),
  build: {
    format: "directory"
  },
  server: {
    host: "127.0.0.1",
    port: 4321
  },
  preview: {
    host: "127.0.0.1",
    port: 4321
  }
});
