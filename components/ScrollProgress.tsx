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
    <div className="fixed left-0 top-0 z-[120] h-1.5 w-full overflow-hidden bg-background">
      <div className="absolute inset-0 bg-primary/15" />
      <motion.div
        className="relative h-full w-full origin-left bg-gradient-to-r from-primary via-cyan-300 to-primary shadow-[0_0_4px_rgba(0,218,243,0.3)]"
        style={{
          scaleX,
          transform: "translateZ(0)",
          willChange: "transform",
        }}
      />
    </div>
  );
}
