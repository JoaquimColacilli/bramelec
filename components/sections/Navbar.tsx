"use client";

import { useState, useEffect } from "react";
import { Building2, Menu, X } from "lucide-react";

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
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 group transition-transform duration-300 hover:scale-105"
            >
              <div className="relative">
                <Building2
                  className={`h-8 w-8 transition-colors duration-300 ${
                    isScrolled || isMenuOpen ? "text-[#A60C38]" : "text-white"
                  }`}
                />
                <div className="absolute inset-0 bg-white/20 rounded-full transform scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>
              <span
                className={`font-bold text-xl transition-colors duration-300 ${
                  isScrolled || isMenuOpen ? "text-[#A60C38]" : "text-white"
                }`}
              >
                BRAMELEC
              </span>
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
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
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
  );
}
