"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const detectActiveSection = () => {
      const sections = navItems.map((item) => item.href.slice(1));

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleScroll = () => {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(detectActiveSection, 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    detectActiveSection();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => setActiveSection("home")}
          className="text-lg font-mono font-bold text-primary hover:text-primary-fixed transition-colors cursor-pointer"
        >
          [ SOVICHEY ]
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setActiveSection(item.href.slice(1))}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`text-sm transition-all font-mono relative py-2 px-2 rounded ${
                  isActive
                    ? "text-primary font-bold"
                    : "text-gray-300 hover:text-primary"
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="desktop-underline"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded"
                  />
                )}
              </motion.a>
            );
          })}
        </div>

        {/* Resume Button */}
        <a
          href="#"
          className="hidden md:block px-6 py-2 bg-primary text-background font-semibold text-sm rounded hover:bg-opacity-90 transition"
        >
          RESUME
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-t border-gray-700"
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setActiveSection(item.href.slice(1));
                    setIsOpen(false);
                  }}
                  whileHover={{ x: 8 }}
                  whileTap={{ x: 4 }}
                  className={`block py-3 px-4 text-sm transition-all font-mono rounded ${
                    isActive
                      ? "text-primary font-bold bg-gray-900 border-l-2 border-primary"
                      : "text-gray-300 hover:text-primary hover:bg-gray-900/50"
                  }`}
                >
                  {item.name}
                </motion.a>
              );
            })}
            <a
              href="#"
              className="block px-6 py-2 bg-primary text-background font-semibold text-sm rounded hover:bg-opacity-90 transition text-center mt-2"
            >
              RESUME
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
