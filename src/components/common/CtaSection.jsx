"use client";

import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-3xl shadow-2xl my-12">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/cta-bg.jpg')", // <-- replace with your image path
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Supercharge Your Business with Smart IoT Automation
        </motion.h2>

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
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
