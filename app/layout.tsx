import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://bramelec.com"),
  title: {
    default: "Bramelec - Expertos en Planos de Instalaciones Eléctricas",
    template: "%s | Bramelec",
  },
  icons: {
    icon: "/favicon.ico",
  },
  description:
    "Especialistas en diseño y planos de instalaciones eléctricas para edificios. Servicios profesionales de ingeniería eléctrica en Buenos Aires.",
  keywords: [
    "instalaciones eléctricas",
    "planos eléctricos",
    "ingeniería eléctrica",
    "Buenos Aires",
    "diseño eléctrico",
    "edificios",
  ],
  authors: [{ name: "Bramelec" }],
  creator: "Bramelec",
  publisher: "Bramelec",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://bramelec.com",
    title: "Bramelec - Expertos en Planos de Instalaciones Eléctricas",
    description:
      "Especialistas en diseño y planos de instalaciones eléctricas para edificios. Servicios profesionales de ingeniería eléctrica en Buenos Aires.",
    siteName: "Bramelec",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bramelec - Expertos en Planos de Instalaciones Eléctricas",
    description:
      "Especialistas en diseño y planos de instalaciones eléctricas para edificios. Servicios profesionales de ingeniería eléctrica en Buenos Aires.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Marcado JSON-LD para la organización */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Bramelec",
              url: "https://bramelec.com",
              logo: "https://bramelec.com/logo.png",
              description:
                "Especialistas en diseño y planos de instalaciones eléctricas para edificios.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Buenos Aires",
                addressCountry: "AR",
              },
              sameAs: [
                "https://instagram.com/bramelec",
                "https://linkedin.com/company/https://www.linkedin.com/company/bramelec-proyectos-electricos/",
              ],
            }),
          }}
        />

        {/* Marcado JSON-LD para Sitelinks Search Box */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Bramelec",
              url: "https://bramelec.com/",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://bramelec.com/?s={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Ejemplo de etiqueta canonical (opcional si deseas forzar canonical) */}
        <link rel="canonical" href="https://bramelec.com" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
