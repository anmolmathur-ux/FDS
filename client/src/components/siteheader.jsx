import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import logoImg from "../assets/logo.png";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-20 bg-[#315262]/90 backdrop-blur-lg shadow-lg border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between">

        {/* BRAND */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <NavLink
            to="/"
            className="flex items-center gap-3 font-bold text-xl md:text-2xl text-white"
          >
            <motion.img
              src={logoImg}
              alt="Freedom Solutions logo"
              className="w-10 h-10 drop-shadow-[0_2px_4px_rgba(255,255,255,0.7)]"
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            <motion.span
              className="text-white tracking-wide"
              whileHover={{ x: 2 }}
            >
              FREEDOM SOLUTIONS
            </motion.span>
          </NavLink>
        </motion.div>

        {/* NAV LINKS */}
        <nav className="hidden md:flex gap-8 ml-auto">
          {[
            ["Home", "/"],
            ["About", "/about-new"],
            ["Courses", "/courses"],
            ["Admission", "/admission"],
            ["Contact", "/contact"],
          ].map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `relative text-white text-[15px] tracking-wide px-1 transition 
                 ${isActive ? "font-semibold text-[#EFAB47]" : "hover:text-[#EFAB47]"}`
              }
            >
              {/* Animated Underline */}
              <span
                className={`
                  absolute left-0 -bottom-1 h-[2px] w-full rounded-full transform transition-all duration-300
                  ${path === window.location.pathname ? "bg-[#EFAB47] scale-x-100" : "bg-[#EFAB47] scale-x-0 group-hover:scale-x-100"}
                `}
              />
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
