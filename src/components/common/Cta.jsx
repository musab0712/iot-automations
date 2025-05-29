"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Cta() {
  return (
    <section className=" font-playfair relative h-[400px] w-full overflow-hidden rounded-t-3xl shadow-2xl ">
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
          className="text-3xl md:text-4xl font-bold mb-5 drop-shadow-md"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Elevate Your Business with Smart IoT Solutions
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl font-semibold mb-6 md:mb-10 drop-shadow-md max-w-4xl"
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
          <Link
            href="/services"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300"
          >
            Get Started
          </Link>
          <Link
            href="/contact-us"
            className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-full shadow-lg transition-all duration-300"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
