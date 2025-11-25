import React from "react"
import logoImg from "../assets/LOGO.jpg"

export default function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-[#315262] border-t border-[#829494]">
      <div className="max-w-6xl mx-auto px-10 py-10 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="FDS logo" className="logo-foot" />
            <h3 className="text-lg font-semibold text-[#FBFCFC]">FDS</h3>
          </div>
          <p className="text-[#829494]">Education for operating privately and planning generational wealth.</p>
          <p className="text-[#9aa9a9] text-sm">© {year} FDS. For educational purposes only.</p>
        </div>
        <div>
          <h4 className="font-semibold text-[#FBFCFC]">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/courses" className="text-[#829494] hover:text-[#EFAB47]">Courses</a></li>
            <li><a href="/admission" className="text-[#829494] hover:text-[#EFAB47]">Apply</a></li>
            <li><a href="/about" className="text-[#829494] hover:text-[#EFAB47]">Vision & Mission</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-[#FBFCFC]">Contact</h4>
          <ul className="space-y-1">
            <li><a href="mailto:info@example.com" className="text-[#829494] hover:text-[#EFAB47]">info@example.com</a></li>
            <li><a href="#" className="text-[#829494] hover:text-[#EFAB47]">Community</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}