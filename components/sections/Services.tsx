"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Lightbulb, FileCheck, Network } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Diseño y planos de instalaciones eléctricas",
    description:
      "Elaboramos planos detallados para sistemas eléctricos completos en edificios de distintas índoles, asegurando un diseño eficiente y bien ejecutado. Adaptados a las necesidades específicas de cada obra.",
    details: [
      "Diseño de instalaciones eléctricas",
      "Cálculo de cargas y dimensionamiento",
      "Planos técnicos detallados",
      "Especificaciones de materiales",
    ],
  },
  {
    icon: FileCheck,
    title: "Planos municipales",
    description:
      "Elaboramos la documentación técnica requerida para la presentación de proyectos eléctricos ante organismos municipales.",
    details: [
      "Confección de planos eléctricos conforme a normativa",
      "Detalles y esquemas técnicos",
      "Cálculos de potencia y planillas",
    ],
  },
  {
    icon: Network,
    title: "Corrientes Débiles",
    description:
      "Diseñamos sistemas de corrientes debiles, redes de datos y sistemas de comunicación para edificios modernos.",
    details: [
      "Redes de datos y telefonía",
      "Control de Acceso",
      "Detección de Incendio",
      "Circuito Cerrado de TV (CCTV)",
      "Portero Electrico",
      "Intrusión",
    ],
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      {/* Sección SERVICES original */}
      <section
        id="servicios"
        className="py-24 bg-[#A60C38] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10 filter blur-sm "></div>
        <div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          ref={ref}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block group">
              Nuestros Servicios
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-white"></div>
            </h2>
            <p className="text-lg text-white/90">
              Soluciones integrales para tus necesidades eléctricas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                <div className="flex flex-col items-center mb-6">
                  <div className="w-16 h-16 bg-[#A60C38] rounded-lg flex items-center justify-center transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 text-center relative group-hover:text-[#A60C38] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-6 text-center">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300"
                    >
                      <div className="w-1.5 h-1.5 bg-[#A60C38] rounded-full mr-2 group-hover:scale-125 transition-transform duration-300"></div>
                      {detail}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marcado estructurado adicional para SEO (lista de Servicios) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: services.map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Service",
                name: service.title,
                description: service.description,
                provider: {
                  "@type": "Organization",
                  name: "Bramelec",
                },
              },
            })),
          }),
        }}
      />
    </>
  );
}
