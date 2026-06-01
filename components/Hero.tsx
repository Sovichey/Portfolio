"use client";

import { motion } from "framer-motion";

const hoverSpring = {
  type: "spring",
  stiffness: 260,
  damping: 24,
  mass: 0.7,
} as const;

const hoverMotionStyle = { willChange: "transform, box-shadow" };

const socialLogos = [
  {
    name: "GitHub",
    url: "https://github.com/Sovichey",
    icon: (
      <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sovichey-rim/",
    icon: (
      <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/rimsovichey/",
    icon: (
      <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z" />
      </svg>
    ),
  },
  {
    name: "Email",
    url: "mailto:vichey779@gmail.com",
    icon: (
      <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    url: "https://t.me/Sovichey7",
    icon: (
      <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.22-.054-.334-.373-.113l-6.869 4.332-2.97-.924c-.644-.213-.658-.644.136-.954l11.593-4.47c.538-.196 1.006.128.832.941z" />
      </svg>
    ),
  },
];

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-background flex items-center justify-center px-4 py-16 md:py-20 scroll-mt-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto w-full"
      >
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch mb-4">
          {/* Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6 text-center md:text-left order-2 md:order-1"
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
              className="flex gap-4 justify-center md:justify-start flex-wrap pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.08,
                  transition: hoverSpring,
                }}
                whileTap={{ scale: 0.95 }}
                style={{ willChange: "transform" }}
                className="px-8 py-4 bg-gradient-to-r from-primary to-cyan-400 text-background font-bold rounded-none shadow-none hover:shadow-none transition-opacity duration-300 cursor-pointer relative overflow-hidden group transform-gpu"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 20px rgba(0, 218, 243, 0.4)",
                  transition: hoverSpring,
                }}
                whileTap={{ scale: 0.95 }}
                style={hoverMotionStyle}
                className="relative overflow-hidden px-8 py-4 border-2 border-primary text-primary font-bold rounded-none transition-colors duration-300 backdrop-blur-sm transform-gpu group hover:border-primary hover:text-background"
              >
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center justify-center md:items-end md:justify-between order-1 md:order-2 mt-4 md:mt-0 gap-5 md:gap-6 md:pt-10"
          >
            <motion.div
              whileHover={{ scale: 1.04, transition: hoverSpring }}
              style={{ willChange: "transform" }}
              className="relative transform-gpu"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-400 to-primary rounded-full blur opacity-50"></div>
              <div className="relative w-56 sm:w-64 md:w-88 lg:w-96 max-w-full aspect-square bg-gray-900 border-2 border-primary/75 overflow-hidden rounded-full shadow-lg shadow-primary/30">
                <img
                  src="/my-profile-2.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <div className="w-56 sm:w-64 md:w-88 lg:w-96 max-w-full">
              <p className="mb-2 text-center text-xs font-mono font-bold uppercase tracking-widest text-cyan-300">
                Connect_With_Me
              </p>
              <div className="social-logo-window relative overflow-hidden border-y border-primary/20 py-3">
                <div className="social-logo-marquee flex w-max items-center gap-9 pr-9">
                  {[...socialLogos, ...socialLogos].map((social, idx) => (
                    <a
                      key={`${social.name}-${idx}`}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      title={social.name}
                      className="flex shrink-0 items-center justify-center text-cyan-300 transition-colors duration-300 hover:text-primary"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Scroll Arrow */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="pt-4 flex justify-center"
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
