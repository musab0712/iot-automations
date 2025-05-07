"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MissionVision() {
  const [activeTab, setActiveTab] = useState("mission");

  const [dots, setDots] = useState([]);

  useEffect(() => {
    const generateDots = Array.from({ length: 20 }, () => ({
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 8 + 5,
      delay: Math.random() * 5,
      distance: Math.random() * 300 + 100,
    }));
    setDots(generateDots);
  }, []);

  const missionText =
    "To empower businesses and individuals by creating innovative IoT solutions that seamlessly integrate technology into everyday life. We aim to bridge the gap between humans and technology for a smarter, more connected world.";
  const visionText =
    "To be a global leader in IoT, driving the future of interconnected systems with sustainability, security, and innovation at the forefront. Our vision is to create a world where technology empowers everyone.";

  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Animated Glowing Background */}
      {/* Animated Glowing Dots */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-green-100 via-blue-100 to-purple-100 opacity-70"></div>

        {dots.map((dot, i) => (
          <motion.span
            key={i}
            className="absolute w-3 h-3 bg-blue-400 rounded-full opacity-20 blur-md"
            initial={{ y: "100%" }}
            animate={{ y: `-${dot.distance}px`, opacity: [0.4, 0] }}
            transition={{
              duration: dot.duration,
              delay: dot.delay,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ left: dot.left, top: "100%" }}
          />
        ))}
      </div>

      {/* Mission & Vision Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center px-6 py-20"
      >
        <h2 className="text-4xl font-semibold mb-8 text-gray-800">
          Our Mission and Vision
        </h2>

        <div className="flex justify-center space-x-6 mb-6">
          <button
            onClick={() => setActiveTab("mission")}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeTab === "mission"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-blue-600 border border-blue-600"
            }`}
          >
            Mission
          </button>
          <button
            onClick={() => setActiveTab("vision")}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeTab === "vision"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-blue-600 border border-blue-600"
            }`}
          >
            Vision
          </button>
        </div>

        <motion.p
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg text-gray-700 leading-relaxed"
        >
          {activeTab === "mission" ? missionText : visionText}
        </motion.p>
      </motion.div>

      {/* Image Section */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Image
            src="/about/health.png"
            alt="The Future"
            width={500}
            height={300}
            className="mx-auto rounded-3xl shadow-2xl"
          />
          <h3 className="mt-4 text-xl font-semibold text-gray-700">
            The Future
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <Image
            src="/about/smart-home.png"
            alt="We Create It"
            width={500}
            height={300}
            className="mx-auto rounded-3xl shadow-2xl"
          />
          <h3 className="mt-4 text-xl font-semibold text-gray-700">
            We Create It
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
