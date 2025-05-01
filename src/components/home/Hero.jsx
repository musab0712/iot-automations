'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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
    <section className="relative w-full h-96 md:h-[700px]  flex items-center justify-center text-white">
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
        <h1 className=" font-playfair text-4xl md:text-6xl font-bold mb-6 text-[#0a0147]">
        Automate your all systems with IOT such as 
        </h1>
        <div
          className="h-[60px] md:h-[80px] overflow-hidden relative mb-6"
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
              className="font-playfairSc text-4xl md:text-6xl font-bold text-[#004aad] absolute w-full"
            >
              {phrases[index]}
            </motion.h2>
          </AnimatePresence>
        </div>
        <p className=" font-playfair text-lg md:text-4xl mb-12 font-semibold text-[#545454]">
        At IoT Auto Hub, we don’t just provide automation products, we redefine how infrastructure operates
        </p>
        <div className="flex justify-center gap-4 md:gap-10 flex-wrap">
          <Link href="/services" className=" font-playfair bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-2xl font-semibold hover:bg-gray-200 transition text-xl">
              All Services
          </Link>
          <Link href="/get-started" className=" font-playfair bg-blue-600 px-6 py-3 md:px-8 md:py-4 text-xl rounded-2xl font-semibold hover:bg-blue-800 transition">
              Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}

