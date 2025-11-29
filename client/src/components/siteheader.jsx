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
        <NavLink
          to="/"
          className="flex items-center gap-3 font-bold text-xl md:text-2xl text-white"
        >
          <img
            src={logoImg}
            alt="Freedom Solutions logo"
            className="logo-brand w-10 h-10 drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)]"
          />
          <span className="text-white">RLC FREEDOM SOLUTIONS LLC</span>
        </NavLink>
        <nav className="ml-auto flex gap-6">
          <NavLink to="/" className={({isActive})=>`nav-link ${isActive?"nav-link-active":""}`}>Home</NavLink>
          <NavLink to="/courses" className={({isActive})=>`nav-link ${isActive?"nav-link-active":""}`}>Courses</NavLink>
          <NavLink to="/admission" className={({isActive})=>`nav-link ${isActive?"nav-link-active":""}`}>Admission</NavLink>
          <NavLink to="/about" className={({isActive})=>`nav-link ${isActive?"nav-link-active":""}`}>Vision & Mission</NavLink>
          <NavLink to="/about-new" className={({isActive})=>`nav-link ${isActive?"bg-[#315262] text-white":""}`}>About</NavLink>
        </nav>
      </div>
    </motion.header>
  );
}
