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
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={() => setActiveSection("home")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-lg font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400 hover:from-cyan-400 hover:to-primary transition-all cursor-pointer"
        >
          [ SOVICHEY ]
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setActiveSection(item.href.slice(1))}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className={`text-sm transition-all font-mono relative py-2 px-3 rounded-lg ${
                  isActive
                    ? "text-primary font-bold bg-primary/10"
                    : "text-gray-300 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="desktop-underline"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute bottom-1 left-2 right-2 h-0.5 bg-gradient-to-r from-primary to-cyan-400 rounded"
                  />
                )}
              </motion.a>
            );
          })}
        </div>

        {/* Resume Button */}
        <motion.a
          href="https://drive.google.com/file/d/13oPwN8QD2idh5cSjPG6XpU6tIHuDhqdG/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-6 py-2 bg-gradient-to-r from-primary to-cyan-400 text-background font-bold text-sm rounded-lg hover:shadow-lg shadow-primary/30 transition-all"
        >
          RESUME
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-primary font-bold text-xl"
        >
          {isOpen ? "✕" : "☰"}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-gradient-to-b from-background/95 to-background/90 border-t border-primary/20 backdrop-blur-xl"
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
                  className={`block py-3 px-4 text-sm transition-all font-mono rounded-lg ${
                    isActive
                      ? "text-primary font-bold bg-gradient-to-r from-primary/20 to-cyan-400/10 border-l-2 border-primary"
                      : "text-gray-300 hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {item.name}
                </motion.a>
              );
            })}
            <motion.a
              href="https://drive.google.com/file/d/13oPwN8QD2idh5cSjPG6XpU6tIHuDhqdG/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block px-6 py-3 bg-gradient-to-r from-primary to-cyan-400 text-background font-bold text-sm rounded-lg hover:shadow-lg shadow-primary/40 transition-all text-center mt-4"
            >
              RESUME
            </motion.a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
