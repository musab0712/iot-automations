"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function GlowingBackground({ count = 20 }) {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const generatedDots = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 5,
      size: Math.random() * 8 + 4,
      color: `hsla(${Math.random() * 360}, 100%, 70%, 0.3)`,
    }));

    setDots(generatedDots);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full blur-md"
          style={{
            width: dot.size,
            height: dot.size,
            backgroundColor: dot.color,
            left: dot.x,
            bottom: -20,
          }}
          initial={{ y: 0, opacity: 0.5 }}
          animate={{ y: -1000, opacity: 0 }}
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
