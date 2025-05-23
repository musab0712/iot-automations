"use client";

import { motion } from "framer-motion";

export default function Cta() {
  return (
    <section className=" font-playfair relative h-[500px] w-full overflow-hidden rounded-t-3xl shadow-2xl ">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/cta-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-md"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Elevate Your Business with Smart IoT Solutions
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl font-semibold mb-6 md:mb-10 drop-shadow-md max-w-6xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          we help you unlock new opportunities, boost efficiency, and stay ahead
          in a rapidly evolving world. Let us be your partner in building a
          smarter, more successful tomorrow.
        </motion.p>

        <motion.div
          className="flex gap-6 flex-wrap justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300">
            Get Started
          </button>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-full shadow-lg transition-all duration-300">
            Contact Sales
          </button>
        </motion.div>
      </div>
    </section>
  );
}
