"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-background flex items-center justify-center px-4 py-16 md:py-24 scroll-mt-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto w-full"
      >
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-8">
          {/* Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-8 text-center md:text-left order-2 md:order-1"
          >
            <div className="space-y-2">
              <p className="text-primary text-sm font-mono tracking-widest">
                WELCOME TO MY PORTFOLIO
              </p>
              <h1 className="text-4xl md:text-6xl font-bold font-mono">
                Hi, I am{" "}
                <span className="text-primary text-5xl md:text-7xl">
                  SOVICHEY
                </span>
                <br />
                I'm a Software Developer
              </h1>
            </div>

            <p className="text-lg text-gray-400 leading-relaxed">
              I specialize in bridging the gap between design and code to craft
              beautiful, intuitive digital experiences. My work focuses on
              frontend development and UX/UI, combining technical precision with
              creative problem-solving to build stunning web applications.
            </p>

            <motion.div
              className="flex gap-4 justify-center md:justify-start flex-wrap pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary to-cyan-400 text-background font-bold rounded-lg shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/70 transition-all duration-300 cursor-pointer relative overflow-hidden group"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/10 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 backdrop-blur-sm"
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center md:justify-end order-1 md:order-2 mt-8 md:mt-0"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-400 to-primary rounded-full blur opacity-50"></div>
              <div className="relative w-72 md:w-full aspect-square bg-gray-900 border-2 border-primary/75 overflow-hidden rounded-full shadow-lg shadow-primary/30">
                <img
                  src="/my-profile-2.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Scroll Arrow */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="pt-8 flex justify-center"
        >
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
