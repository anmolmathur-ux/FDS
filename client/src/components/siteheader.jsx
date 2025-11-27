import React from "react"
import { NavLink } from "react-router-dom"
import logoImg from "../assets/logo.png"

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 nav-blur bg-[#315262]">
      <div className="max-w-6xl mx-auto px-8 py-6 flex items-center">
        <NavLink to="/" className="flex items-center gap-3 font-bold text-xl md:text-2xl text-white">
          <img src={logoImg} alt="Freedom Solutions logo" className="logo-brand drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)]" />
          <span className="text-white">FREEDOM SOLUTIONS</span>
        </NavLink>
        <nav className="ml-auto flex gap-6">
          <NavLink to="/" className={({isActive})=>`nav-link ${isActive?"nav-link-active":""}`}>Home</NavLink>
          <NavLink to="/courses" className={({isActive})=>`nav-link ${isActive?"nav-link-active":""}`}>Courses</NavLink>
          <NavLink to="/admission" className={({isActive})=>`nav-link ${isActive?"nav-link-active":""}`}>Admission</NavLink>
          <NavLink to="/about" className={({isActive})=>`nav-link ${isActive?"nav-link-active":""}`}>Vision & Mission</NavLink>
          <NavLink to="/about-new" className={({isActive})=>`nav-link ${isActive?"nav-link-active":""}`}>About</NavLink>
        </nav>
      </div>
    </header>
  )
}