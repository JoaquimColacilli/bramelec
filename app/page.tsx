"use client";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Implement structured data for breadcrumbs
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: "https://bramelec.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Nosotros",
          item: "https://bramelec.com#nosotros",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Servicios",
          item: "https://bramelec.com#servicios",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Contacto",
          item: "https://bramelec.com#contacto",
        },
      ],
    };

    // Add breadcrumb schema to the page
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
