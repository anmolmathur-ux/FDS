import React from "react"
import { NavLink } from "react-router-dom"
import logoImg from "../assets/LOGO.jpg"

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 nav-blur bg-white">
      <div className="max-w-6xl mx-auto px-8 py-6 flex items-center">
        <NavLink to="/" className="flex items-center gap-3 font-bold text-xl md:text-2xl text-[#315262]">
          <img src={logoImg} alt="FDS logo" className="logo-brand" />
          <span className="text-white">FDS</span>
        </NavLink>
        <nav className="ml-auto flex gap-6">
          <NavLink to="/" className={({isActive})=>`nav-link ${isActive?"nav-link-active":""}`}>Home</NavLink>
          <NavLink to="/courses" className={({isActive})=>`nav-link ${isActive?"nav-link-active":""}`}>Courses</NavLink>
          <NavLink to="/admission" className={({isActive})=>`nav-link ${isActive?"nav-link-active":""}`}>Admission</NavLink>
          <NavLink to="/about" className={({isActive})=>`nav-link ${isActive?"nav-link-active":""}`}>Vision & Mission</NavLink>
        </nav>
      </div>
    </header>
  )
}