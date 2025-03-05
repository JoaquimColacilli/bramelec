"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Send, X } from "lucide-react";
import emailjs from "emailjs-com";

/**
 * Spinner con un ícono de bombilla y un efecto de parpadeo (flicker).
 */
function LightBulbSpinner() {
  return (
    <div className="flex items-center justify-center animate-flicker">
      <svg
        fill="#ffffff"
        width="72"
        height="72"
        version="1.1"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path d="M256,0C155.174,0,73.143,82.027,73.143,182.857c0,67.839,38.46,130.937,98.424,162.232l1.817,25.482 c0.357,5.036,4.719,8.911,9.772,8.464c5.036-0.357,8.826-4.732,8.469-9.768l-2.187-30.661c-0.232-3.259-2.192-6.152-5.134-7.571 c-56.42-27.348-92.875-85.518-92.875-148.178c0-90.741,73.826-164.571,164.571-164.571c90.745,0,164.571,73.83,164.571,164.571 c0,66.919-39.969,126.652-101.821,152.196c-3.201,1.322-5.379,4.339-5.629,7.795l-3.978,55.661 c-0.357,5.036,3.433,9.411,8.469,9.768c0.223,0.018,0.442,0.027,0.661,0.027c4.755,0,8.768-3.679,9.112-8.491l3.58-50.116 c65.732-29.527,107.893-94.402,107.893-166.839C438.857,82.027,356.826,0,256,0z" />
          <path d="M312.915,420.804l-118.857-27.429c-4.906-1.134-9.83,1.937-10.969,6.857c-1.134,4.92,1.933,9.83,6.853,10.964 l118.857,27.429c0.692,0.161,1.384,0.232,2.067,0.232c4.161,0,7.924-2.857,8.902-7.089 C320.902,426.848,317.835,421.937,312.915,420.804z" />
          <path d="M312.915,457.375l-118.857-27.429c-4.906-1.134-9.83,1.937-10.969,6.857c-1.134,4.92,1.933,9.83,6.853,10.964 l118.857,27.429c0.692,0.161,1.384,0.232,2.067,0.232c4.161,0,7.924-2.857,8.902-7.089 C320.902,463.42,317.835,458.509,312.915,457.375z" />
          <path d="M312.915,493.947l-118.857-27.429c-4.906-1.143-9.83,1.928-10.969,6.857c-1.134,4.92,1.933,9.83,6.853,10.964 l118.857,27.429c0.692,0.161,1.384,0.232,2.067,0.232c4.161,0,7.924-2.857,8.902-7.089 C320.902,499.991,317.835,495.08,312.915,493.947z" />
        </g>
      </svg>
    </div>
  );
}

function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <LightBulbSpinner />
    </div>
  );
}

function Notification({
  message,
  type,
  onClose,
}: {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}) {
  const bgColor = type === "success" ? "#16a34a" : "#b91c1c";

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          key="notification"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed top-2 right-4 z-50"
        >
          <div
            className="relative rounded-lg shadow-lg text-white px-4 py-3 pr-10"
            style={{ backgroundColor: bgColor, width: "300px" }}
          >
            <button
              className="absolute top-2 right-2 text-white hover:text-gray-200"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </button>
            {message}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationType, setNotificationType] = useState<"success" | "error">(
    "success"
  );
  const [isLoading, setIsLoading] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Activa la pantalla de carga
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_32m7639", // Ajusta con tu ID real
        "template_0n49t18", // Ajusta con tu Template real
        formRef.current,
        "e2HqOi8odXsKsmB4K" // Ajusta con tu User ID real
      )
      .then(
        (result) => {
          console.log("Éxito al enviar:", result.text);
          setNotificationType("success");
          setNotificationMessage("Mensaje enviado con éxito!");

          setFormState({
            name: "",
            phone: "",
            email: "",
            subject: "",
            message: "",
          });

          setIsLoading(false);

          setTimeout(() => {
            setNotificationMessage("");
          }, 4000);
        },
        (error) => {
          console.error("Error al enviar:", error.text);
          setNotificationType("error");
          setNotificationMessage(
            "Hubo un error al enviar el mensaje. Inténtalo de nuevo."
          );

          setIsLoading(false);

          setTimeout(() => {
            setNotificationMessage("");
          }, 4000);
        }
      );
  };

  return (
    <>
      {/* Notificación flotante (exito/error) */}
      <Notification
        message={notificationMessage}
        type={notificationType}
        onClose={() => setNotificationMessage("")}
      />

      {/* Overlay de carga a pantalla completa */}
      {isLoading && <LoadingOverlay />}

      <section id="contacto" className="py-24 bg-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative inline-block">
              Contáctanos
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#A60C38]"></div>
            </h2>
            <p className="text-lg text-gray-600">
              Estamos aquí para ayudarte con tu proyecto
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl mx-auto"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="from_name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A60C38] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="from_phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="from_phone"
                  name="from_phone"
                  value={formState.phone}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A60C38] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="from_email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A60C38] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      subject: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A60C38] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A60C38] focus:border-transparent transition-all duration-300"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center px-6 py-3 bg-[#A60C38] text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
                disabled={isLoading}
              >
                {/* Aquí ya no mostramos el spinner, sólo el texto */}
                {isLoading ? "Enviando..." : "Enviar mensaje"}
                {!isLoading && <Send className="ml-2 h-5 w-5" />}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Marcado estructurado adicional para SEO (ContactPage) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contáctanos - Bramelec",
            description:
              "Estamos aquí para ayudarte con tu proyecto. Completa el formulario de contacto y nos pondremos en contacto contigo.",
          }),
        }}
      />
    </>
  );
}
