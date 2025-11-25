import type { APIRoute } from "astro";

const pages = [
  {
    url: "/",
    lastmod: new Date().toISOString().split("T")[0],
    priority: "1.0"
  },
  {
    url: "/about",
    lastmod: new Date().toISOString().split("T")[0],
    priority: "0.8"
  },
  {
    url: "/services/chartering",
    lastmod: new Date().toISOString().split("T")[0],
    priority: "0.8"
  },
  {
    url: "/services/broking",
    lastmod: new Date().toISOString().split("T")[0],
    priority: "0.8"
  },
  {
    url: "/services/consultancy",
    lastmod: new Date().toISOString().split("T")[0],
    priority: "0.8"
  },
  {
    url: "/team",
    lastmod: new Date().toISOString().split("T")[0],
    priority: "0.7"
  },
  {
    url: "/contact",
    lastmod: new Date().toISOString().split("T")[0],
    priority: "0.8"
  },
  {
    url: "/blog",
    lastmod: new Date().toISOString().split("T")[0],
    priority: "0.7"
  },
  {
    url: "/privacy",
    lastmod: new Date().toISOString().split("T")[0],
    priority: "0.5"
  },
  {
    url: "/terms",
    lastmod: new Date().toISOString().split("T")[0],
    priority: "0.5"
  }
];

export const GET: APIRoute = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>https://apa-maritime.com${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
};
