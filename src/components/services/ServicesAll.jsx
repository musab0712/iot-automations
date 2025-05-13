"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import services from "@/data/ourServices";
import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function ServicesAll() {
  const imageVariants = {
    hidden: { rotateY: 90, opacity: 0 },
    visible: { rotateY: 0, opacity: 1 },
  };
  return (
    <div>
      {services.map((data, index) => (
        <div
          key={data.id}
          className={`w-full h-auto py-8  flex flex-col-reverse lg:flex-row ${
            index % 2 === 0 ? "" : "lg:flex-row-reverse"
          } `}
        >
          <div
            className={`w-full lg:w-1/2 ${
              index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"
            }`}
          >
            <p className="hidden md:block md:text-xl lg:text-2xl font-bold text-blue-500">
              SERVICE 0{data.id}
            </p>
            <div className="pb-6 md:pb-8 md:pt-20">
              <Image
                src={data.icon}
                width={50}
                height={50}
                alt="icon"
                className="top_image_bounce"
              />
            </div>
            <motion.p
              initial={{ y: 50, opacity: 0, scale: 0.8, x: -20 }}
              whileInView={{ y: 0, opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 0.2,
              }}
              className=" text-base md:text-lg lg:text-xl  md:pb-28 pb-5"
            >
              {data.data}
            </motion.p>
            {/* <motion.p
              initial={{ y: 50, opacity: 0, scale: 0.8, x: -20 }}
              whileInView={{ y: 0, opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 0.2,
              }}
              className=" text-base md:text-lg  lg:text-xl pb-6 md:pb-10"
            >
              {data.data1}
            </motion.p> */}

            <Link
              href="/services"
              className="bg-blue-600 w-24 md:w-56 px-6 py-3 md:px-8 md:py-4 text-xl rounded-2xl font-semibold hover:bg-blue-800 transition flex items-center gap-2 text-white "
            >
              <span className=" hidden lg:block uppercase pr-3">Read More</span>
              <span>
                <FaArrowAltCircleRight />
              </span>
            </Link>
          </div>
          <div className=" w-full lg:w-1/2 flex  flex-col-reverse lg:block">
            <motion.h1
              initial={{ y: 50, opacity: 0, scale: 0.8, x: -20 }}
              whileInView={{ y: 0, opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 0.2,
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              className=" text-2xl md:text-4xl font-extrabold pb-8 md:pb-12 pt-6 lg:pt-0 uppercase text-blue-500"
            >
              {data.title}
            </motion.h1>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={imageVariants}
              className="text-center"
            >
              <Image
                src={data.img}
                width={1000}
                height={500}
                alt="service img"
                className=" rounded-xl md:h-[450px] md:w-10/12"
              />
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
}
