import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const origin = "https://www.impactpockets.com";
const routes = ["/", "/about-impact-pockets/", "/our-process/", "/our-services/", "/contact-us/"];
const entries = routes.map((route) => `  <url><loc>${origin}${route}</loc></url>`).join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;

await writeFile(resolve("dist/client/sitemap.xml"), sitemap);
