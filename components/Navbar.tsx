"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavbar = () => {
    setOpen((open) => !open);
  };

  const menuVars = {
    closed: {
      height: "40px",
      overflow: "hidden",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    open: {
      overflow: "visible",
      height: "140px",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <>
      <div
        className="hamburger cursor-pointer sm:hidden flex flex-col"
        onClick={handleNavbar}
      >
        <div className="lines w-6 h-1 bg-black mb-1"></div>
        <div className="lines w-6 h-1 bg-black mb-1"></div>
        <div className="lines w-6 h-1 bg-black"></div>
      </div>

      <motion.div
        className={`mt-8 w-[90%] mx-auto sm:h-auto sm:flex sm:flex-row items-center gap-4 rounded-lg ${
          open ? "overflow-visible" : "overflow-hidden"
        }`}
        initial="closed"
        animate={open ? "open" : "closed"}
        variants={menuVars}
      >
        <div
          className="navbar-brand cursor-pointer text-white text-2xl font-semibold p-2"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Bhagvad
        </div>

        <ul className="flex flex-col sm:flex-row gap-3 text-white p-2">
          <li>
            <a href="http://localhost:3000" className="hover:text-gray-200">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200">
              Github
            </a>
          </li>
          <li>
            <a
              href="https://rapidapi.com/bhagavad-gita-bhagavad-gita-default/api/bhagavad-gita3"
              className="hover:text-gray-200"
            >
              Source
            </a>
          </li>
        </ul>
      </motion.div>
    </>
  );
}
