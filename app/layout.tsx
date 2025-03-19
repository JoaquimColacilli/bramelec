import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://bramelec.com"),
  manifest: "/manifest.json",
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
        {/* Favicons y manifest */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="manifest" href="/manifest.json" />

        {/* Color de la barra de navegación en móviles (opcional) */}
        <meta name="theme-color" content="#0070f3" />

        {/* Marcado JSON-LD para la organización */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ElectricalContractor",
              name: "Bramelec",
              description:
                "Empresa líder en soluciones eléctricas y tecnológicas",
              url: "https://bramelec.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Tu Ciudad",
                addressRegion: "Tu Región",
                addressCountry: "Argentina",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+54-91172368190",
                contactType: "customer service",
              },
              sameAs: [
                "https://facebook.com/bramelec",
                "https://instagram.com/bramelec",
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

        {/* Etiqueta canonical */}
        <link rel="canonical" href="https://bramelec.com" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
