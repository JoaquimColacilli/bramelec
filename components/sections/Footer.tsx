"use client";

import {
  Building2,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Linkedin,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <footer className="relative bg-[#A60C38] text-white" ref={ref}>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="col-span-1"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-8 w-8 text-white" />
                <span className="font-bold text-xl">BRAMELEC</span>
              </div>
              <p className="text-white/90">
                Expertos en planes de instalaciones eléctricas para edificios
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="col-span-2"
            >
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 group">
                  <Phone className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:text-white/80 transition-colors duration-300">
                    +54 11 1234-5678
                  </span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Mail className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:text-white/80 transition-colors duration-300">
                    contacto@bramelec.com
                  </span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <MapPin className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:text-white/80 transition-colors duration-300">
                    Buenos Aires, Argentina
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="col-span-1"
            >
              <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="#" className="group">
                  <Instagram className="h-6 w-6 text-white group-hover:scale-110 transition-all duration-300" />
                </a>
                <a href="#" className="group">
                  <Linkedin className="h-6 w-6 text-white group-hover:scale-110 transition-all duration-300" />
                </a>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="border-t border-white/20 mt-12 pt-8 text-center text-white/90"
          >
            <p>
              &copy; {new Date().getFullYear()} BRAMELEC. Todos los derechos
              reservados.
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Marcado estructurado adicional para SEO (ProfessionalService) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Bramelec",
            url: "https://bramelec.com",
            telephone: "+54 11 1234-5678",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Buenos Aires",
              addressCountry: "Argentina",
            },
            contactPoint: {
              "@type": "ContactPoint",
              email: "contacto@bramelec.com",
              contactType: "customer service",
            },
            sameAs: [
              "https://instagram.com/bramelec",
              "https://linkedin.com/company/bramelec",
            ],
            description:
              "Expertos en planes de instalaciones eléctricas para edificios",
          }),
        }}
      />
    </>
  );
}
