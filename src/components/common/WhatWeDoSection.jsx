"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const areas = [
  {
    title: "Smart Homes & Building",
    img: "/about/smart-home.png",
    points: [
      "Water Management & Pump Control",
      "HVAC Control",
      "Electrical System Management",
      "Security Monitor & Control",
      "Fire & Safety System",
      "Parking Management",
    ],
  },
  {
    title: "Oil & Gas Plant",
    img: "/about/oil-gas.png",
    points: [
      "Pressure Monitoring",
      "Tank Level Monitoring",
      "Equipment Health",
      "Gas Leak Detection",
      "Remote Site Management",
    ],
  },
  {
    title: "Agriculture & Green House",
    img: "/about/agriculture.png",
    points: [
      "Soil Moisture Monitoring",
      "Temperature & Humidity Control",
      "Light Monitoring",
      "Irrigation Automation",
      "Environment Monitoring",
    ],
  },
  {
    title: "Health & Facilities",
    img: "/about/health.png",
    points: [
      "Air Quality Monitoring",
      "Asset Tracking",
      "Temperature Control",
      "Occupancy Sensor",
      "Parking Management",
    ],
  },
  {
    title: "Data Centre & IT Facilities",
    img: "/about/data-centre.png",
    points: [
      "Temperature Monitoring",
      "Humidity Control",
      "Power Monitoring",
      "Motion Detection",
      "Water Leak Detection",
    ],
  },
  {
    title: "Cold Storage & Warehousing",
    img: "/about/cold-storage.png",
    points: [
      "Temperature Monitoring",
      "Humidity Control",
      "Open/Close Door Sensor",
      "Power Loss Detection",
      "Water Leak Detection",
    ],
  },
];

export default function WhatWeDoSection() {
  return (
    <section className=" font-playfair py-16 px-4 max-w-7xl mx-auto">
      {/* Intro */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">What We Do</h2>
        <p className="text-xl font-semibold">
          Empowering Smart Living Through Automation
        </p>
        <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
          At IoT Auto Hub, we believe that automation is the future—and we’re
          here to make it accessible, efficient, and innovative. Based in Delhi
          and expanding across India, we specialize in delivering smart
          automation solutions that simplify life, improve safety, and boost
          energy efficiency for homes, commercial buildings, hospitals,
          factories, and IT campuses.
        </p>
      </div>

      {/* Area We Cover */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold">Area we Cover</h2>
      </div>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {areas.map((area, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Image
              src={area.img}
              alt={area.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{area.title}</h3>
              <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                {area.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
