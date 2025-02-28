"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Send, X } from "lucide-react";
import emailjs from "emailjs-com";

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

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_32m7639",
        "template_0n49t18",
        formRef.current,
        "e2HqOi8odXsKsmB4K"
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
          setTimeout(() => {
            setNotificationMessage("");
          }, 4000);
        }
      );
  };

  return (
    <>
      {/* Notificación flotante */}
      <Notification
        message={notificationMessage}
        type={notificationType}
        onClose={() => setNotificationMessage("")}
      />

      <section id="contacto" className="py-24 bg-white">
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
              >
                Enviar mensaje
                <Send className="ml-2 h-5 w-5" />
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
