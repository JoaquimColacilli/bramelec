"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle2 } from "lucide-react";

const values = [
  {
    title: "Excelencia Técnica",
    description: "Comprometidos con los más altos estándares de calidad en cada proyecto."
  },
  {
    title: "Innovación Constante",
    description: "Adoptamos las últimas tecnologías y métodos para ofrecer soluciones modernas."
  },
  {
    title: "Compromiso Total",
    description: "Dedicación completa a la satisfacción y éxito de nuestros clientes."
  }
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative inline-block group">
            Sobre Nosotros
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#A60C38]"></div>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-[#A60C38] rounded-lg opacity-20 hidden md:block"></div>
            <div className="relative bg-white p-6 md:p-8 rounded-lg shadow-xl">
              <p className="text-base md:text-lg text-gray-600 mb-6">
                En BRAMELEC, nos dedicamos a transformar espacios a través de soluciones eléctricas innovadoras y seguras. Con años de experiencia en el sector, hemos desarrollado una reputación sólida basada en la excelencia técnica y el compromiso con nuestros clientes.
              </p>
              <p className="text-base md:text-lg text-gray-600">
                Nuestra misión es proporcionar servicios de ingeniería eléctrica de la más alta calidad, garantizando la seguridad y eficiencia en cada proyecto que emprendemos.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 md:space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
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
                    <p className="text-sm md:text-base text-gray-600">{value.description}</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-1 bg-[#A60C38] w-0 group-hover:w-full transition-all duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}