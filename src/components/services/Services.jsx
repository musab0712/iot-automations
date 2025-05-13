"use client";
import React from "react";
import ServicesAll from "./ServicesAll";
import { motion } from "framer-motion";
//import Image from "next/image";
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
      {/* <Image
        src="/bg-icon/2.svg"
        width={200}
        height={200}
        alt="img"
        className="hidden lg:block absolute left-4 top-10 max-w-36 top_image_bounce"
      />
      <Image
        src="/bg-icon/12.svg"
        width={200}
        height={200}
        alt="img"
        className="hidden lg:block absolute right-10 top-[33%] max-w-36 top_image_bounce"
      />
      <Image
        src="/bg-icon/11.svg"
        width={200}
        height={200}
        alt="img"
        className="hidden lg:block absolute right-10 top-[75%] max-w-36 top_image_bounce"
      />

      <Image
        src="/bg-icon/1.svg"
        width={200}
        height={200}
        alt="img"
        className="hidden lg:block absolute right-10 top-[48%] max-w-36 top_image_bounce"
      />

      <Image
        src="/bg-icon/10.svg"
        width={300}
        height={300}
        alt="img"
        className="hidden lg:block absolute right-6 top-10 max-w-36 top_image_bounce"
      />

      <Image
        src="/bg-icon/14.svg"
        width={200}
        height={200}
        alt="img"
        className="hidden lg:block absolute left-14 top-[95%] max-w-36 top_image_bounce"
      />
      <Image
        src="/bg-icon/3.svg"
        width={200}
        height={200}
        alt="img"
        className="hidden lg:block absolute right-10 top-[92%] max-w-36 top_image_bounce"
      /> */}
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
            {/* <span className="text-blue-600">Unlock the potential</span> of
            technology-driven and create{" "}
            <span className="text-blue-600">a smarter, more sustainable</span>{" "}
            future */}
            Unlock the potential of technology-driven and create a smarter, more
            sustainable future
          </motion.h1>
        </div>
        <div className="w-full md:w-1/3 md:pl-5">
          <p className="pb-10 md:pb-20 lg:pb-20 font-bold md:text-xl lg:text-3xl text-blue-600 text-right">
            SERVICES
          </p>
          {/* <p className=" hidden md:block md:text-lg lg:text-xl">
            In an era where efficiency, sustainability, and precision are
            paramount, we emerges as your trusted partner in transforming
            operations through advanced automation products.
          </p> */}
        </div>
      </div>
      <ServicesAll />
    </section>
  );
}
