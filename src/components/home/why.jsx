import React from "react";
import StickySection from "./StickySection";
import ContentSection from "./ContentSection";
import Image from "next/image";

export default function Why() {
  return (
    <section
      id="about"
      className=" lg:px-24 px-6 md:px-12 container lg:relative flex flex-col lg:flex-row h-auto py-12 md:py-16"
    >
      {/* <Image
        src="/bg-icon/2.svg"
        width={200}
        height={200}
        alt="img"
        className="hidden lg:block absolute left-4 top-20 max-w-36 top_image_bounce"
      /> */}
      <StickySection />
      <ContentSection />
    </section>
  );
}