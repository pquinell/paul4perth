// Generates public/robots.txt and public/sitemap.xml from VITE_SITE_URL in .env,
// so the public URL is only ever written down in one place. Runs automatically
// before `npm run build` via the "prebuild" script.
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const PLACEHOLDER = "CHANGE-ME";

function siteUrl() {
  if (process.env.VITE_SITE_URL) return process.env.VITE_SITE_URL;
  if (!existsSync(".env")) return "";
  const line = readFileSync(".env", "utf8")
    .split("\n")
    .find((l) => l.trim().startsWith("VITE_SITE_URL="));
  return line ? line.slice(line.indexOf("=") + 1).trim() : "";
}

const url = siteUrl().replace(/\/+$/, "");

if (!url || url.includes(PLACEHOLDER)) {
  console.warn(
    "\n" +
      "  ┌───────────────────────────────────────────────────────────────┐\n" +
      "  │  VITE_SITE_URL is not set to a real domain.                   │\n" +
      "  │  Set it in .env before deploying, or canonical tags, social   │\n" +
      "  │  previews and the sitemap will all point at nothing.          │\n" +
      "  └───────────────────────────────────────────────────────────────┘\n",
  );
}

const today = new Date().toISOString().slice(0, 10);

writeFileSync(
  "public/robots.txt",
  ["User-agent: *", "Allow: /", "", `Sitemap: ${url}/sitemap.xml`, ""].join("\n"),
);

writeFileSync(
  "public/sitemap.xml",
  [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    "  <url>",
    `    <loc>${url}/</loc>`,
    `    <lastmod>${today}</lastmod>`,
    "    <changefreq>weekly</changefreq>",
    "    <priority>1.0</priority>",
    "  </url>",
    "</urlset>",
    "",
  ].join("\n"),
);

console.log(`SEO files generated for ${url || "(unset)"}`);
