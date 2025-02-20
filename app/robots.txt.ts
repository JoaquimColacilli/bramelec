// app/robots.txt.ts
export const runtime = "edge";

// Genera robots.txt dinámico
export async function GET() {
  const content = `User-agent: *
Allow: /

Sitemap: https://bramelec.com/sitemap.xml
`;
  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
