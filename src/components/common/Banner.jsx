"use client";
import { motion } from "framer-motion";

export default function Banner({ videoSrc, headline, subheadline }) {
  return (
    <section className=" font-playfair relative w-full h-[600px] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-red-500"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {headline}
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-4xl mt-6 font-semibold text-white"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {subheadline}
        </motion.h2>
      </div>
    </section>
  );
}
