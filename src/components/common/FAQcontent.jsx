"use client";
import React, { useState } from "react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import questions from "@/data/faq";
import { motion } from "framer-motion";

const FAQcontent = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);

  const handleToggle = (id) => {
    setActiveQuestion(id === activeQuestion ? null : id);
  };
  return (
    <div className="w-full pt-4 lg:w-3/4 lg:pl-24 md:pt-20">
      {questions.map((question, index) => (
        <motion.div
          key={question.id}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.3 }}
          className={`pb-4 border ${
            activeQuestion === question.id ? "bg-gray-100" : ""
          }`}
        >
          <button
            className={`flex items-center text-left w-full p-2  ${
              activeQuestion === question.id ? "bg-gray-100" : ""
            }`}
            onClick={() => handleToggle(question.id)}
          >
            <span className="hidden md:block text-xl pl-2 md:pl-5 pr-3 md:pr-6">
              {index + 1}.
            </span>
            <span className="pr-2 md:pr-4 py-3 md:py-6 text-base md:text-lg font-bold ">
              {question.question}
            </span>
            <span className=" items-end">
              {activeQuestion === question.id ? (
                <BiChevronDown size={35} />
              ) : (
                <BiChevronRight size={35} />
              )}
            </span>
          </button>
          {activeQuestion === question.id && (
            <div className="p-2">
              <p className="text-lg md:text-xl pb-6 font-medium pl-3 md:pl-6">
                {question.answer}
              </p>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};
export default FAQcontent;
