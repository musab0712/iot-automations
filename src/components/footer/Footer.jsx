import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" font-playfair bg-[#031338] text-white lg:px-24 md:px-12 px-6 py-10 md:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About Company */}
        <div>
          <h2 className="text-xl font-bold mb-4">About company</h2>
          <p className="text-sm mb-4">
            At IoT Auto Hub, we don’t just provide automation products, we
            redefine how infrastructure operates.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com"
              className="hover:text-blue-500 transition-colors"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.x.com"
              className="hover:text-blue-400 transition-colors"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.instagram.com"
              className="hover:text-pink-500 transition-colors"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/"
              className="hover:text-blue-300 transition-colors"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Our Services */}
        <div>
          <h2 className="text-xl font-bold mb-4">Our Services</h2>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              <FaArrowRight />
              <Link
                href="/service/water-automation"
                className="hover:text-blue-400 transition-colors"
              >
                Water Automation
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaArrowRight />
              <Link
                href="/service/electric-panel"
                className="hover:text-blue-400 transition-colors"
              >
                Electric Panel Automation
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaArrowRight />
              <Link
                href="/service/building-automation"
                className="hover:text-blue-400 transition-colors"
              >
                Building Automation System
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaArrowRight />
              <Link
                href="/service/customised-automation"
                className="hover:text-blue-400 transition-colors"
              >
                Customised Automation Solution
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Solutions */}
        <div>
          <h2 className="text-xl font-bold mb-4">Company</h2>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              <FaArrowRight />
              <Link
                href="/about-us"
                className="hover:text-blue-400 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaArrowRight />
              <Link
                href="/contact-us"
                className="hover:text-blue-400 transition-colors"
              >
                Contact Us
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaArrowRight />
              <Link
                href="/about-us"
                className="hover:text-blue-400 transition-colors"
              >
                Our Mission
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaArrowRight />
              <Link
                href="/about-us"
                className="hover:text-blue-400 transition-colors"
              >
                Our Vision
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact us</h2>
          <div className="text-sm space-y-3">
            <p className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-lg md:text-2xl" />
              Office No.: 306-in 25/34, East Patel Nagar, Central Delhi, New
              Delhi, Delhi, India, 110008
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt />
              <a
                href="tel:+917065650148"
                className="hover:text-blue-400 transition-colors"
              >
                +91 7065650148
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope />
              <a
                href="mailto:info@dgsketch.com"
                className="hover:text-blue-400 transition-colors"
              >
                info@iotautohub.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
