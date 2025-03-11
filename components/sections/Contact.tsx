"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Send, X } from "lucide-react";
import emailjs from "emailjs-com";

function LightBulbSpinner() {
  return (
    <div className="flex items-center justify-center animate-flicker">
      <svg
        fill="#ffffff"
        width="144"
        height="144"
        version="1.1"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
      >
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
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [bgRef, bgInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsLoading(true);

    emailjs
      .sendForm(
        "service_32m7639",
        "template_0n49t18",
        formRef.current,
        "e2HqOi8odXsKsmB4K"
      )
      .then(
        (result) => {
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
          setTimeout(() => setNotificationMessage(""), 4000);
        },
        (error) => {
          setNotificationType("error");
          setNotificationMessage(
            "Hubo un error al enviar el mensaje. Inténtalo de nuevo."
          );
          setIsLoading(false);
          setTimeout(() => setNotificationMessage(""), 4000);
        }
      );
  };

  return (
    <>
      <Notification
        message={notificationMessage}
        type={notificationType}
        onClose={() => setNotificationMessage("")}
      />

      {isLoading && <LoadingOverlay />}

      <section
        id="contacto"
        className="py-24 bg-gray-100 relative overflow-hidden"
      >
        {/* SVG A LA IZQUIERDA */}
        <motion.div
          ref={bgRef}
          initial={{ opacity: 0 }}
          animate={bgInView ? { opacity: 0.1 } : {}}
          transition={{ duration: 0.5 }}
          className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 hidden md:block z-0"
        >
          <svg
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 373.69 620.58"
            fill="#9e1a3f"
            className="w-[600px] -ml-[100px]"
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

        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          ref={ref}
        >
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
                    setFormState((prev) => ({ ...prev, name: e.target.value }))
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
                    setFormState((prev) => ({ ...prev, phone: e.target.value }))
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
                    setFormState((prev) => ({ ...prev, email: e.target.value }))
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
                {isLoading ? "Enviando..." : "Enviar mensaje"}
                {!isLoading && <Send className="ml-2 h-5 w-5" />}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

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
