import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoImg from "../assets/logo.png";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 nav-blur bg-[#315262]">
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
          <span className="text-white">FREEDOM SOLUTIONS</span>
        </NavLink>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex ml-auto gap-6">
          <NavLink to="/" className={({ isActive }) =>
              `nav-link ${isActive ? "nav-link-active" : ""}`}>Home</NavLink>
          <NavLink to="/courses" className={({ isActive }) =>
              `nav-link ${isActive ? "nav-link-active" : ""}`}>Courses</NavLink>
          <NavLink to="/admission" className={({ isActive }) =>
              `nav-link ${isActive ? "nav-link-active" : ""}`}>Admission</NavLink>
          <NavLink to="/about" className={({ isActive }) =>
              `nav-link ${isActive ? "nav-link-active" : ""}`}>Vision & Mission</NavLink>
        </nav>

        {/* MOBILE TOGGLE BUTTON */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-[#315262] text-white transition-all duration-300 overflow-hidden ${
          open ? "max-h-60 py-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-4 px-6">

          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `nav-link-mobile ${isActive ? "nav-link-active" : ""}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/courses"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `nav-link-mobile ${isActive ? "nav-link-active" : ""}`
            }
          >
            Courses
          </NavLink>

          <NavLink
            to="/admission"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `nav-link-mobile ${isActive ? "nav-link-active" : ""}`
            }
          >
            Admission
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `nav-link-mobile ${isActive ? "nav-link-active" : ""}`
            }
          >
            Vision & Mission
          </NavLink>

        </nav>
      </div>
    </header>
  );
}
