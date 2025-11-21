import React from "react"
import logoImg from "../assets/LOGO.jpg"

export default function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-slate-800 border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-10 py-10 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Private Path logo" className="logo-foot" />
            <h3 className="text-lg font-semibold">Private Path</h3>
          </div>
          <p className="text-gray-400">Education for operating privately and planning generational wealth.</p>
          <p className="text-gray-500 text-sm">© {year} Private Path. For educational purposes only.</p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/courses" className="text-blue-400">Courses</a></li>
            <li><a href="/admission" className="text-blue-400">Apply</a></li>
            <li><a href="/about" className="text-blue-400">Vision & Mission</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <ul className="space-y-1">
            <li><a href="mailto:info@example.com" className="text-blue-400">info@example.com</a></li>
            <li><a href="#" className="text-blue-400">Community</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}