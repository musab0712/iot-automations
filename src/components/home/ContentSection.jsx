import React, { Fragment } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import whyContentData from "@/data/whyContent";

export default function ContentSection() {
  return (
    <div className=" font-playfair w-full pt-4 lg:w-1/2 md:pl-36 md:pt-20">
      {whyContentData.map((content) => (
        <Fragment key={content.id}>
          <Image width={500} height={500} src={content.imgSrc} alt="hero img" />
          <motion.h1
            initial={{ y: 50, opacity: 0, scale: 0.8, x: -20 }}
            whileInView={{ y: 0, opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 0.2,
            }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-2xl font-extrabold uppercase pt-4 md:pt-10 text-blue-600"
          >
            {content.title}
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0, scale: 0.8, x: -20 }}
            whileInView={{ y: 0, opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 0.2,
            }}
            className=" pt-5 text-lg font-medium pb-6 md:pb-10"
          >
            {content.data}
          </motion.p>
        </Fragment>
      ))}
    </div>
  );
}
