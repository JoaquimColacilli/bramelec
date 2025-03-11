"use client";

import { Phone, Mail, MapPin, Instagram, Linkedin } from "lucide-react"; // Quitamos Building2 de la importación
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10 filter blur"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="col-span-1"
            >
              <div className="flex items-center space-x-2 mb-4">
                <svg
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 773 184.89"
                  className="w-52"
                  fill="#ffffff"
                >
                  <path d="M15.55,27.2h44.59c21.15,0,34.62,9.16,34.62,23.58,0,9.97-6.2,17.92-16.17,20.75,11.85,2.29,19.4,11.59,19.4,23.85,0,16.03-14.01,26.14-36.24,26.14H15.55V27.2ZM58.8,64.92c7.01,0,11.45-3.77,11.45-9.83s-4.45-9.56-11.45-9.56h-19.4v19.4h19.4ZM58.8,103.05c8.89,0,14.42-3.91,14.42-10.64,0-6.33-5.52-10.24-14.42-10.24h-19.4v20.88h19.4Z" />
                  <path d="M111.88,27.2h42.17c24.92,0,39.2,11.85,39.2,32.87,0,14.42-6.06,24.79-17.11,30.31l19.8,31.12h-27.21l-14.01-26.54h-18.86v26.54h-23.98V27.2ZM154.04,76.11c10.37,0,16.44-5.25,16.44-15.22s-6.06-14.82-16.44-14.82h-18.19v30.04h18.19Z" />
                  <path d="M239.99,27.2h24.65l39.74,94.3h-25.6l-6.74-17.38h-41.22l-6.87,17.38h-24.65l40.69-94.3ZM265.05,85.94l-13.47-34.89-13.74,34.89h27.21Z" />
                  <path d="M313.14,27.07h26.27l25.6,56.18,25.6-56.18h26.13v94.44h-21.15l-.13-61.3-22.63,51.87h-15.63l-22.63-51.87v61.3h-21.42V27.07Z" />
                  <path d="M440.58,27.2h63.99v10.37h-53.21v30.99h47.56v10.37h-47.56v32.33h54.96v10.24h-65.74V27.2Z" />
                  <path d="M528.29,27.2h10.78v84.06h41.36v10.24h-52.14V27.2Z" />
                  <path d="M597.93,27.2h63.99v10.37h-53.21v30.99h47.56v10.37h-47.56v32.33h54.96v10.24h-65.74V27.2Z" />
                  <path d="M756.33,103.22c-2.03-2.29-5.46-2.62-7.92-.81-4.77,3.51-12.75,7.89-22.76,7.59-19.18-.57-36.39-17.97-36.39-35.18,0-5.09,1.06-9.9,3-14.23,5.53-12.4,19.13-20.98,33.4-20.95,10.02.02,17.72,4.29,22.32,7.73,2.57,1.92,6.18,1.46,8.16-1.07.21-.27.42-.53.63-.8,2.06-2.63,1.51-6.44-1.19-8.41-8.44-6.16-18.96-9.83-29.77-9.83-27.35,0-49.17,20.88-49.17,47.29s21.55,47.83,48.77,47.83c10.89,0,21.5-4.02,30.11-10.43,2.77-2.06,3.21-6.05.91-8.64-.03-.03-.05-.06-.08-.09Z" />
                  <circle cx="725.85" cy="74.8" r="18.7" />
                  <path d="M739.56,141.78l-25.02,4.58c-4.1.75-7.87-2.4-7.87-6.56h0c0-3.22,2.3-5.98,5.47-6.56l25.02-4.58c4.1-.75,7.87,2.4,7.87,6.56h0c0,3.22-2.3,5.98-5.47,6.56Z" />
                  <path d="M734.6,164.49l-15.1,2.76c-4.1.75-7.87-2.4-7.87-6.56h0c0-3.22,2.3-5.98,5.47-6.56l15.1-2.76c4.1-.75,7.87,2.4,7.87,6.56h0c0,3.22-2.3,5.98-5.47,6.56Z" />
                </svg>
              </div>
              <p className="text-white/90">
                Soluciones eléctricas eficientes para tu proyecto.
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
                    +54 9 11 7236-8190
                  </span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Mail className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:text-white/80 transition-colors duration-300">
                    bramelec1@gmail.com
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
                <a
                  className="h-6 w-6 text-white group-hover:scale-110 transition-all duration-300 group"
                  href="https://wa.me/5491172368190?text=Hola,%20me%20interesa%20más%20información%20sobre%20los%20servicios%20que%20brinda%20Bramelec"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    fill="#ffffff"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 308 308"
                    xmlSpace="preserve"
                    stroke="#ffffff"
                    className="text-white group-hover:scale-110 transition-all duration-300"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <g id="XMLID_468_">
                        <path
                          id="XMLID_469_"
                          d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156
     c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687
     c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887
     c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153
     c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348
     c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802
     c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922
     c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0
     c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458
     C233.168,179.508,230.845,178.393,227.904,176.981z"
                        ></path>
                        <path
                          id="XMLID_470_"
                          d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716
     c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396
     c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z
      M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188
     l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677
     c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867
     C276.546,215.678,222.799,268.994,156.734,268.994z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/bramelec-proyectos-el%C3%A9ctricos/"
                  className="group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
            telephone: "+54 9 11 7236-8190",
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
            description: "Expertos en planos de instalaciones eléctricas.",
          }),
        }}
      />
    </>
  );
}
