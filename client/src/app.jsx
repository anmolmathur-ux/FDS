import React from "react"
import { Routes, Route } from "react-router-dom"
import SiteHeader from "./components/siteheader.jsx"
import SiteFooter from "./components/sitefooter.jsx"
import ChatBot from "./components/ChatBot.jsx"
import Home from "./pages/home.jsx"
import Courses from "./pages/courses.jsx"
import About from "./pages/about.jsx"
import Admission from "./pages/admission.jsx"

export default function App() {
  return (
    <div>
      <SiteHeader />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/admission" element={<Admission />} />
        </Routes>
      </main>
      <SiteFooter />
      <ChatBot />
    </div>
  )
}