"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import {
  FaTools,
  FaMicrochip,
  FaSatelliteDish,
  FaCloud,
  FaCogs,
  FaLightbulb,
} from "react-icons/fa";
import services from "@/data/ourServices";

// const services = [
//   {
//     title: "IoT Device Integration",
//     slug: "iot-device-integration",
//     description:
//       "Seamless integration of smart devices for remote monitoring and control.",
//     icon: <FaMicrochip className="text-4xl text-purple-500" />,
//   },
//   {
//     title: "Automation Solutions",
//     slug: "iot-device-integration",
//     description:
//       "Automate industrial, home, and agricultural operations efficiently.",
//     icon: <FaCogs className="text-4xl text-blue-500" />,
//   },
//   {
//     title: "Real-time Analytics",
//     slug: "iot-device-integration",
//     description:
//       "Get instant insights from connected devices to improve decision-making.",
//     icon: <FaSatelliteDish className="text-4xl text-pink-500" />,
//   },
//   {
//     title: "Cloud Sync",
//     slug: "iot-device-integration",
//     description: "Store, sync, and retrieve data from cloud-based dashboards.",
//     icon: <FaCloud className="text-4xl text-green-500" />,
//   },
//   {
//     title: "Custom Development",
//     slug: "iot-device-integration",
//     description:
//       "Tailored solutions to match your specific business workflows.",
//     icon: <FaTools className="text-4xl text-yellow-500" />,
//   },
//   {
//     title: "Smart Energy",
//     slug: "iot-device-integration",
//     description: "Monitor and optimize your energy consumption intelligently.",
//     icon: <FaLightbulb className="text-4xl text-orange-400" />,
//   },
// ];

export default function ServicesSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax background movement
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section
      ref={ref}
      className="relative bg-[#0f172a] text-white lg:px-24 px-6 md:px-12 py-8 md:py-20 overflow-hidden"
    >
      {/* Floating parallax glow background */}
      <motion.div
        style={{ y }}
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue-500 opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0"
      ></motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h4 className="text-blue-400 text-lg font-medium mb-2">
            What We Offer
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <Link href={`/services/${service.slug}`} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="cursor-pointer bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.data1}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
