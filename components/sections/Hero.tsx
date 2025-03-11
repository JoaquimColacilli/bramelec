"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <>
      {/* Sección HERO original */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur scale-105"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-[#A60C38] bg-opacity-60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Realizamos planos de instalaciones eléctricas para edificios,
              asegurando un diseño eficiente y bien planificado.{" "}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 mb-8"
            >
              Acompañamos tu proyecto con soluciones eléctricas pensadas para
              cada espacio.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="#servicios"
                className="inline-flex items-center px-6 py-3 bg-white text-[#A60C38] rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
              >
                Conocé nuestros servicios
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marcado estructurado adicional para SEO (LandingPage) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LandingPage",
            name: "Bramelec - Expertos en Planos de Instalaciones Eléctricas",
            description:
              "Diseñamos el futuro eléctrico de tu proyecto con precisión y excelencia.",
            url: "https://bramelec.com",
          }),
        }}
      />
    </>
  );
}
