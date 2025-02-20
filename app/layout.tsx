// app/layout.tsx
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
  alternates: {
    canonical: "/",
    languages: {
      "es-AR": "/es-AR",
    },
  },
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
    images: [
      {
        url: "https://bramelec.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bramelec - Expertos en Planos Eléctricos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bramelec - Expertos en Planos de Instalaciones Eléctricas",
    description:
      "Especialistas en diseño y planos de instalaciones eléctricas para edificios. Servicios profesionales de ingeniería eléctrica en Buenos Aires.",
    images: ["https://bramelec.com/twitter-image.jpg"],
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
    <html lang="es" dir="ltr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://bramelec.com#organization",
              name: "Bramelec",
              url: "https://bramelec.com",
              logo: "https://bramelec.com/logo.png",
              description:
                "Especialistas en diseño y planos de instalaciones eléctricas para edificios.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. Corrientes 1234",
                addressLocality: "Buenos Aires",
                addressRegion: "CABA",
                postalCode: "C1043",
                addressCountry: "AR",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+54-11-1234-5678",
                contactType: "customer service",
                areaServed: "AR",
                availableLanguage: "Spanish",
              },
              sameAs: [
                "https://instagram.com/bramelec",
                "https://linkedin.com/company/bramelec",
              ],
            }),
          }}
        />

        {/* Structured Data para SiteNavigationElement */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              name: "Servicios",
              url: "https://bramelec.com#servicios",
              description:
                "Nuestros servicios profesionales en ingeniería eléctrica",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        {/* Footer Navigation Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              name: "Contacto",
              url: "https://bramelec.com#contacto",
              description: "Formulario de contacto profesional",
            }),
          }}
        />
      </body>
    </html>
  );
}
