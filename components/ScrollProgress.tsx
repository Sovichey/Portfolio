"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 32,
    mass: 0.35,
    restDelta: 0.0005,
  });

  if (shouldReduceMotion) return null;

  return (
    <div className="fixed left-0 top-0 z-[60] h-1.5 w-full bg-primary/10">
      <motion.div
        className="h-full w-full origin-left bg-gradient-to-r from-primary/80 via-cyan-300 to-primary/80 shadow-[0_0_6px_rgba(0,218,243,0.35)]"
        style={{ scaleX, willChange: "transform" }}
      />
    </div>
  );
}
