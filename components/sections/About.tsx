"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle2 } from "lucide-react";

const values = [
  {
    title: "Excelencia Técnica",
    description:
      "Comprometidos con los más altos estándares de calidad en cada proyecto.",
  },
  {
    title: "Innovación Constante",
    description:
      "Adoptamos las últimas tecnologías y métodos para ofrecer soluciones modernas.",
  },
  {
    title: "Compromiso Total",
    description:
      "Dedicación completa a la satisfacción y éxito de nuestros clientes.",
  },
];

export default function About() {
  const [titleRef, titleInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [contentRef, contentInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [cardsRef, cardsInView] = useInView({
    threshold: 0.05,
    triggerOnce: true,
  });
  const [bgRef, bgInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <section
        id="nosotros"
        className="relative py-24 bg-gray-100 overflow-hidden"
      >
        {/* SVG solo en desktop */}
        <motion.div
          ref={bgRef}
          initial={{ opacity: 0 }}
          animate={bgInView ? { opacity: 0.1 } : {}}
          transition={{ duration: 0.5 }}
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 hidden md:block"
        >
          <svg
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 373.69 620.58"
            fill="#9e1a3f"
            className="w-[550px] -mr-[100px]"
          >
            <defs>
              <style>{`.cls-1{fill:#9e1a3f;}`}</style>
            </defs>
            <path
              className="cls-1"
              d="M349.68,336.36c-8.83-9.98-23.76-11.41-34.5-3.52-20.79,15.27-55.49,34.36-99.1,33.07-83.5-2.47-158.46-78.25-158.46-153.19,0-22.17,4.64-43.1,13.05-61.96,24.09-54.01,83.28-91.33,145.42-91.23,43.61.07,77.15,18.7,97.17,33.65,11.18,8.35,26.93,6.34,35.54-4.64.91-1.16,1.82-2.32,2.72-3.47,8.99-11.46,6.57-28.02-5.19-36.61C309.59,21.63,263.76,5.66,216.7,5.66,97.62,5.66,2.6,96.58,2.6,211.54s93.85,208.23,212.34,208.23c47.41,0,93.6-17.51,131.1-45.41,12.08-8.99,13.96-26.35,3.98-37.62-.11-.13-.23-.26-.34-.39Z"
            />
            <circle className="cls-1" cx="216.97" cy="212.6" r="81.43" />
            <path
              className="cls-1"
              d="M276.67,504.24l-108.93,19.93c-17.83,3.26-34.26-10.43-34.26-28.56h0c0-14.02,10.02-26.04,23.81-28.56l108.93-19.93c17.83-3.26,34.26,10.43,34.26,28.56h0c0,14.02-10.02,26.04-23.81,28.56Z"
            />
            <path
              className="cls-1"
              d="M255.06,603.14l-65.73,12.03c-17.83,3.26-34.26-10.43-34.26-28.56h0c0-14.02,10.02-26.04,23.81-28.56l65.73-12.03c17.83-3.26,34.26,10.43,34.26,28.56h0c0,14.02-10.02,26.04-23.81,28.56Z"
            />
          </svg>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative inline-block group">
              Sobre Nosotros
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#A60C38]"></div>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={contentRef}
              initial={{ opacity: 0, x: -20 }}
              animate={contentInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-[#A60C38] rounded-lg opacity-20 hidden md:block"></div>
              <div className="relative bg-white p-6 md:p-8 rounded-lg shadow-xl">
                <p className="text-base md:text-lg text-gray-600 mb-6">
                  En BRAMELEC, nos dedicamos a transformar espacios a través de
                  soluciones eléctricas innovadoras y seguras. Con años de
                  experiencia en el sector, hemos desarrollado una reputación
                  sólida basada en la excelencia técnica y el compromiso con
                  nuestros clientes.
                </p>
                <p className="text-base md:text-lg text-gray-600">
                  Nuestra misión es proporcionar servicios de ingeniería
                  eléctrica de la más alta calidad, garantizando la seguridad y
                  eficiencia en cada proyecto que emprendemos.
                </p>
              </div>
            </motion.div>

            <div className="space-y-4 md:space-y-6" ref={cardsRef}>
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="group relative bg-white p-4 md:p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-[#A60C38]" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600">
                        {value.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 bg-[#A60C38] w-0 group-hover:w-full transition-all duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Sobre Nosotros - Bramelec",
            description:
              "En BRAMELEC, nos dedicamos a transformar espacios a través de soluciones eléctricas innovadoras y seguras.",
            mainEntity: {
              "@type": "Organization",
              name: "Bramelec",
            },
          }),
        }}
      />
    </>
  );
}
