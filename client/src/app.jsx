import React from "react"
import { Routes, Route } from "react-router-dom"
import SiteHeader from "./components/siteheader.jsx"
import SiteFooter from "./components/sitefooter.jsx"
import ChatBot from "./components/ChatBot.jsx"
import ScrollToTop from "./components/ScrollToTop.jsx"
import Home from "./pages/home.jsx"
import Courses from "./pages/courses.jsx"
import About from "./pages/about.jsx"
import Admission from "./pages/admission.jsx"
import AboutNew from "./pages/AboutNew.jsx"
import Contact from "./pages/contact.jsx"

export default function App() {
  return (
    <div>
      <ScrollToTop />
      <SiteHeader />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/about-new" element={<AboutNew />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <SiteFooter />
      <ChatBot />
    </div>
  )
}