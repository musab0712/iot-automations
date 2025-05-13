"use client";
import React from "react";
import ServicesAll from "./ServicesAll";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section
      id="services"
      className=" font-playfair px-6 lg:px-24 md:px-12 w-full h-auto py-16 md:py-28 "
      style={{
        background: "linear-gradient(192deg, #e6f7ff 1.05%, #f1ebff 97.91%)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col-reverse md:flex-row h-auto pr-10">
        <div className="w-full pt:10 md:w-2/3">
          <motion.h1
            initial={{ y: 50, opacity: 0, scale: 0.8, x: -20 }}
            whileInView={{ y: 0, opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 0.2,
            }}
            whileHover={{ scale: 1.05, y: -5 }}
            className=" text-2xl md:text-5xl font-extrabold pb-8 uppercase"
          >
            Unlock the potential of technology-driven and create a smarter, more
            sustainable future
          </motion.h1>
        </div>
        <div className="w-full md:w-1/3 md:pl-5">
          <p className="pb-10 md:pb-20 lg:pb-20 font-bold md:text-xl lg:text-3xl text-blue-600 text-right">
            SERVICES
          </p>
        </div>
      </div>
      <ServicesAll />
    </section>
  );
}
