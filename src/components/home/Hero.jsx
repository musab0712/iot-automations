"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const phrases = [
  "Water Automation",
  "Electric Panel Automation",
  "Building Automation System",
  "Customised Automation Solution",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % phrases.length);
      }, 3000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered]);

  return (
    <section className="relative w-full h-[450px] md:h-[520px]  flex items-center justify-center text-white px-6 py-10">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-bg.svg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        {/* <div className="absolute inset-0 bg-black/50" /> Overlay for contrast */}
      </div>

      {/* Content */}
      <div className="text-center px-4 max-w-6xl">
        <h1 className=" font-playfair text-3xl md:text-4xl font-bold mb-6 text-[#0a0147]">
          Automate your all systems with IOT such as
        </h1>
        <div
          className="h-[80px] overflow-hidden relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.h2
              key={phrases[index]}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
              className="font-playfairSc text-3xl md:text-4xl font-bold text-[#004aad] absolute w-full"
            >
              {phrases[index]}
            </motion.h2>
          </AnimatePresence>
        </div>
        <p className=" font-playfair text-lg md:text-2xl mb-12 font-semibold text-[#545454]">
          At IoT Auto Hub, we don’t just provide automation products, we <br />
          redefine how infrastructure operates
        </p>
        <div className="flex justify-center gap-4 md:gap-10 flex-wrap">
          <Link
            href="/services"
            className=" font-playfair bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition text-base"
          >
            All Services
          </Link>
          <Link
            href="/contact-us"
            className=" font-playfair bg-blue-600 px-8 py-4 text-base rounded-2xl font-semibold hover:bg-blue-800 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
