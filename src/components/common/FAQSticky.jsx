import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function FAQsticky() {
  return (
    <div className="lg:sticky lg:top-2 lg:h-screen w-full pt:10 lg:w-1/4 md:pt-20">
      <div>
        {/* <h1 className=" font-extrabold text-4xl md:text-6xl pb-4 md:pb-24 lg:pb-48">
          FAQ's
        </h1> */}
        <Image
          className="pb-4 md:pb-24"
          src="/common/faq-img.png"
          width={200}
          height={300}
          alt="FAQ Img"
        />
      </div>
      <div className=" hidden md:block">
        <p className="text-base pb-8 font-medium">
          <span className="text-blue-500 font-extrabold">
            Still have questions?
          </span>
          Sign up for a free consultation and we will answer any questions you
          may have.
        </p>
        <Link
          href="/contact-us"
          className=" font-playfair bg-blue-600 px-8 py-4 text-lg rounded-2xl font-semibold hover:bg-blue-800 transition"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
