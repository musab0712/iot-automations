"use client";
import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { BsBox, BsCart, BsTools } from "react-icons/bs"; // Icons for dropdown
import { navLinks } from "@/data/menu";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [sideMenu, setMenu] = useState(false);
  const [isClient, setIsClient] = useState(false); // Detect client-side rendering

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <nav className=" font-playfair bg-white lg:px-24 md:px-12 px-6 py-6 md:py-2 flex justify-between items-center shadow-md top-0 sticky z-50">
      {/* Logo and Mobile Menu Button */}
      <div className="flex items-center">
        <FiMenu
          onClick={() => setMenu(true)}
          className="text-4xl cursor-pointer lg:hidden mr-4"
          aria-label="Open Menu"
        />
        <Link href="/">
          {/* <h1 className="font-bold  md:text-3xl text-blue-600 uppercase">
            IoT Auto Hub
          </h1> */}
          <Image
            className="text-6xl"
            src="/logo.png"
            alt="iot-auto-hub-logo"
            width={100}
            height={50}
          />
        </Link>
      </div>

      {/* Mobile Sidebar Menu */}
      {sideMenu && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setMenu(false)}
        >
          <div
            className="bg-white h-full w-64 fixed top-0 left-0 p-6 shadow-lg flex flex-col z-50"
            onClick={(e) => e.stopPropagation()} // Prevent click from closing menu
          >
            <IoClose
              onClick={() => setMenu(false)}
              className="text-4xl self-end cursor-pointer mb-6"
              aria-label="Close Menu"
            />
            <ul className="space-y-6">
              {navLinks.map((nav, index) => (
                <li key={index}>
                  <Link
                    onClick={() => setMenu(false)}
                    href={nav.link}
                    className="font-bold text-lg block hover:text-blue-500"
                  >
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex space-x-6 items-center">
        {navLinks.map((nav, index) => {
          /* Products dropdown */
          if (nav.label === "Services") {
            return (
              <li key={index} className="relative group">
                <Link
                  href={nav.link}
                  className="font-bold text-lg hover:text-blue-500 transition-colors flex items-center"
                >
                  {nav.label}
                </Link>
                {/* Dropdown Menu */}
                <div className="absolute -right-18 top-10 w-64 mt-2 bg-white shadow-lg rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transform -translate-y-2 transition-all z-50">
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <BsBox className="text-blue-500 mr-3" />
                      <Link
                        href="/product/water-level-monitering"
                        className="text-gray-800 hover:text-blue-500"
                      >
                        Water Automation
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <BsCart className="text-blue-500 mr-3" />
                      <Link
                        href="/product/pressure-protection"
                        className="text-gray-800 hover:text-blue-500"
                      >
                        Electric Panel Automation
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <BsTools className="text-blue-500 mr-3" />
                      <Link
                        href="/product/dry-run"
                        className="text-gray-800 hover:text-blue-500"
                      >
                        Building Automation System
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <BsBox className="text-blue-500 mr-3" />
                      <Link
                        href="/product/fully-automatic-water"
                        className="text-gray-800 hover:text-blue-500"
                      >
                        Customised Automation Solution
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            );
          }
          return (
            <li key={index}>
              <Link
                href={nav.link}
                className="font-bold text-lg hover:text-blue-500 transition-colors"
              >
                {nav.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
