"use client";
import React from "react";
import FAQsticky from "./FAQSticky";
import FAQcontent from "./FAQcontent";

const FAQ = () => {
  return (
    <section
      id="FAQ"
      className=" font-playfair px-6 md:px-12 lg:px-24 container lg:relative flex flex-col lg:flex-row h-auto py-12 md:py-16 gap-5"
    >
      <FAQsticky />
      <FAQcontent />
    </section>
  );
};
export default FAQ;
