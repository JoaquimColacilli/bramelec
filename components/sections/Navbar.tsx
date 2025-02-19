"use client";

import { useState, useEffect } from "react";
import { Building2, Menu, X } from "lucide-react";
import Link from "next/link";

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

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Building2 className={`h-8 w-8 transition-all duration-300 ${
                  isScrolled ? "text-[#A60C38]" : "text-white"
                }`} />
                <div className="absolute inset-0 bg-white/20 rounded-full transform scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>
              <span className={`font-bold text-xl transition-all duration-300 ${
                isScrolled ? "text-[#A60C38]" : "text-white"
              }`}>
                BRAMELEC
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {["Nosotros", "Servicios", "Contacto"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`relative group ${
                    isScrolled ? "text-gray-800 hover:text-[#A60C38]" : "text-white hover:text-white"
                  } transition-colors duration-300 font-medium`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A60C38] group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? "text-[#A60C38]" : "text-white"
              }`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 ${
              isScrolled ? "bg-white" : "bg-[#A60C38]"
            }`}>
              {["Nosotros", "Servicios", "Contacto"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isScrolled 
                      ? "text-gray-800 hover:text-[#A60C38]" 
                      : "text-white hover:text-white"
                  }`}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}