import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaPhoneAlt,
    FaYoutube,
  } from "react-icons/fa";
  import { FaSquareXTwitter } from "react-icons/fa6";
  import { LuMail } from "react-icons/lu";
  
  export default function Topbar() {
    return (
      <div className="bg-[#94b9ff] text-white lg:px-24 py-2 md:py-4 px-6 md:px-12 flex justify-between items-center">
        {/* Topbar Text */}
        <div className="flex space-x-4">
          {/* Clickable Phone Number */}
          <div className="space-x-2 hover:underline hidden md:flex">
            <FaPhoneAlt className="text-xl" />
            <a
              href="tel:+917065650148"
              className=" hover:underline font-semibold"
              aria-label="Call +91 7065650148"
            >
              +91 7065650148
            </a>
          </div>
  
          {/* Clickable Email */}
          <div className="space-x-2 flex">
            <LuMail className="text-xl" />
            <a
              href="mailto:info@iotautohub.com"
              className=" hover:underline font-semibold"
              aria-label="Send email to info@iotautohub.com"
            >
              info@iotautohub.com
            </a>
          </div>
        </div>
  
        {/* Social Icons */}
        <div className=" hidden md:flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-xl hover:text-blue-500" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter className="text-xl hover:text-blue-400" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-xl hover:text-pink-500" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-xl hover:text-red-500" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-xl hover:text-blue-300" />
          </a>
        </div>
      </div>
    );
  }