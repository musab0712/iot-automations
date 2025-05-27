import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function StickySection() {
  return (
    <div className=" font-playfair lg:sticky lg:top-20 lg:h-screen w-full pt:6 lg:w-1/2 md:pt-6">
      <p className="text-blue-600 pb-3 uppercase font-bold text-xl md:text-2xl">
        Why Automate your system with IoT
      </p>
      <div className="flex flex-col md:flex-row justify-between w-full">
        <div className="w-3/4">
          <motion.h1
            initial={{ y: 50, opacity: 0, scale: 0.8, x: -20 }}
            whileInView={{ y: 0, opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 0.2,
            }}
            className=" text-lg md:text-xl font-semibold"
          >
            Automating your system with Internet of Things (IoT) brings
            efficiency, convenience, and intelligence to operations by enabling
            real-time data collection, remote control, and smart
            decision-making.
          </motion.h1>
          <div className="flex justify-around flex-col-reverse lg:flex-row">
            <Image src="why/why-3.svg" width={500} height={500} alt="why-img" />
          </div>
        </div>
        <div className="w-1/4 pl-20 pt-28">
          <Image src="why/why-4.svg" width={100} height={300} alt="why-img" />
        </div>
      </div>
    </div>
  );
}
