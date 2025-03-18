// app/sitemap.xml.ts
export const runtime = "edge";

// Podemos generar la lista de URL dinámicamente si tenemos un CMS o BDD
export async function GET() {
  // URLs estáticas
  const pages = [
    { url: "https://bramelec.com", priority: 1.0 },
    { url: "https://bramelec.com#nosotros", priority: 0.8 },
    { url: "https://bramelec.com#servicios", priority: 0.8 },
    { url: "https://bramelec.com#contacto", priority: 0.8 },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      return `
  <url>
    <loc>${page.url}</loc>
    <priority>${page.priority}</priority>
  </url>
  `;
    })
    .join("")}
</urlset>
`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
