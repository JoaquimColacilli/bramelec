"use client";

import { Menu, X } from "lucide-react"; // Se quita Building2
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Navbar principal */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled || isMenuOpen ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 group transition-transform duration-300 hover:scale-105"
              >
                <div className="relative">
                  {isScrolled || isMenuOpen ? (
                    // SVG BORDÓ
                    <svg
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 773 184.89"
                      className="h-52 w-52 transition-colors duration-300"
                      fill="#9e1a3f"
                    >
                      <path
                        className="cls-1"
                        d="M15.55,27.2h44.59c21.15,0,34.62,9.16,34.62,23.58,0,9.97-6.2,17.92-16.17,20.75,11.85,2.29,19.4,11.59,19.4,23.85,0,16.03-14.01,26.14-36.24,26.14H15.55V27.2ZM58.8,64.92c7.01,0,11.45-3.77,11.45-9.83s-4.45-9.56-11.45-9.56h-19.4v19.4h19.4ZM58.8,103.05c8.89,0,14.42-3.91,14.42-10.64,0-6.33-5.52-10.24-14.42-10.24h-19.4v20.88h19.4Z"
                      />
                      <path
                        className="cls-1"
                        d="M111.88,27.2h42.17c24.92,0,39.2,11.85,39.2,32.87,0,14.42-6.06,24.79-17.11,30.31l19.8,31.12h-27.21l-14.01-26.54h-18.86v26.54h-23.98V27.2ZM154.04,76.11c10.37,0,16.44-5.25,16.44-15.22s-6.06-14.82-16.44-14.82h-18.19v30.04h18.19Z"
                      />
                      <path
                        className="cls-1"
                        d="M239.99,27.2h24.65l39.74,94.3h-25.6l-6.74-17.38h-41.22l-6.87,17.38h-24.65l40.69-94.3ZM265.05,85.94l-13.47-34.89-13.74,34.89h27.21Z"
                      />
                      <path
                        className="cls-1"
                        d="M313.14,27.07h26.27l25.6,56.18,25.6-56.18h26.13v94.44h-21.15l-.13-61.3-22.63,51.87h-15.63l-22.63-51.87v61.3h-21.42V27.07Z"
                      />
                      <path
                        className="cls-1"
                        d="M440.58,27.2h63.99v10.37h-53.21v30.99h47.56v10.37h-47.56v32.33h54.96v10.24h-65.74V27.2Z"
                      />
                      <path
                        className="cls-1"
                        d="M528.29,27.2h10.78v84.06h41.36v10.24h-52.14V27.2Z"
                      />
                      <path
                        className="cls-1"
                        d="M597.93,27.2h63.99v10.37h-53.21v30.99h47.56v10.37h-47.56v32.33h54.96v10.24h-65.74V27.2Z"
                      />
                      <path
                        className="cls-1"
                        d="M756.33,103.22c-2.03-2.29-5.46-2.62-7.92-.81-4.77,3.51-12.75,7.89-22.76,7.59-19.18-.57-36.39-17.97-36.39-35.18,0-5.09,1.06-9.9,3-14.23,5.53-12.4,19.13-20.98,33.4-20.95,10.02.02,17.72,4.29,22.32,7.73,2.57,1.92,6.18,1.46,8.16-1.07.21-.27.42-.53.63-.8,2.06-2.63,1.51-6.44-1.19-8.41-8.44-6.16-18.96-9.83-29.77-9.83-27.35,0-49.17,20.88-49.17,47.29s21.55,47.83,48.77,47.83c10.89,0,21.5-4.02,30.11-10.43,2.77-2.06,3.21-6.05.91-8.64-.03-.03-.05-.06-.08-.09Z"
                      />
                      <circle
                        className="cls-1"
                        cx="725.85"
                        cy="74.8"
                        r="18.7"
                      />
                      <path
                        className="cls-1"
                        d="M739.56,141.78l-25.02,4.58c-4.1.75-7.87-2.4-7.87-6.56h0c0-3.22,2.3-5.98,5.47-6.56l25.02-4.58c4.1-.75,7.87,2.4,7.87,6.56h0c0,3.22-2.3,5.98-5.47,6.56Z"
                      />
                      <path
                        className="cls-1"
                        d="M734.6,164.49l-15.1,2.76c-4.1.75-7.87-2.4-7.87-6.56h0c0-3.22,2.3-5.98,5.47-6.56l15.1-2.76c4.1-.75,7.87,2.4,7.87,6.56h0c0,3.22-2.3,5.98-5.47,6.56Z"
                      />
                    </svg>
                  ) : (
                    // SVG BLANCO
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
                  )}
                  {/* Overlay div */}
                  <div className="absolute inset-0 bg-white/20 rounded-full transform scale-110 opacity-0 transition-all duration-300"></div>
                </div>
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {["Nosotros", "Servicios", "Contacto"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`relative group ${
                      isScrolled ? "text-gray-800" : "text-white"
                    } transition-colors duration-300 font-medium`}
                  >
                    {item}
                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ${
                        isScrolled || isMenuOpen ? "bg-[#A60C38]" : "bg-white"
                      } group-hover:w-full`}
                    ></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md transition-colors duration-300 ${
                  isScrolled || isMenuOpen ? "text-[#A60C38]" : "text-white"
                }`}
                aria-label="Menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Moved outside of max-w container */}
        <div
          className={`md:hidden fixed left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="px-4 py-2 space-y-1">
            {["Nosotros", "Servicios", "Contacto"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="block w-full px-3 py-2 text-base font-medium text-gray-800 hover:text-[#A60C38] hover:bg-gray-50 rounded-md transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Marcado estructurado adicional para SEO (SiteNavigationElement) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: [
              {
                "@type": "SiteNavigationElement",
                position: 1,
                name: "Nosotros",
                url: "https://bramelec.com#nosotros",
              },
              {
                "@type": "SiteNavigationElement",
                position: 2,
                name: "Servicios",
                url: "https://bramelec.com#servicios",
              },
              {
                "@type": "SiteNavigationElement",
                position: 3,
                name: "Contacto",
                url: "https://bramelec.com#contacto",
              },
            ],
          }),
        }}
      />
    </>
  );
}
