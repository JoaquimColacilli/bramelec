const EXTERNAL_DATA_URL = 'https://bramelec.com'

function generateSiteMap(pages) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${pages
       .map((page) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}${page.loc}`}</loc>
           <lastmod>${page.lastmod}</lastmod>
           <changefreq>${page.changefreq}</changefreq>
           <priority>${page.priority}</priority>
       </url>
     `}).join('')}
   </urlset>
 `
}

export async function getServerSideProps({ res }) {
  const sitemapPages = [
    { loc: '/', lastmod: new Date().toISOString(), changefreq: 'daily', priority: '1.0' },
    { loc: '/#nosotros', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: '0.8' },
    { loc: '/#servicios', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: '0.8' },
    { loc: '/#contacto', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: '0.8' },
  ]

  res.setHeader('Content-Type', 'text/xml')
  res.write(generateSiteMap(sitemapPages))
  res.end()

  return { props: {} }
}