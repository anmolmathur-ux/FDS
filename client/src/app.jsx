import React, { useEffect, useState } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import SiteHeader from "./components/siteheader.jsx"
import SiteFooter from "./components/sitefooter.jsx"
import ChatBot from "./components/ChatBot.jsx"
import ScrollToTop from "./components/ScrollToTop.jsx"
import Home from "./pages/home.jsx"
import Courses from "./pages/courses.jsx"
import CourseIndex from "./pages/CourseIndex.jsx"
import CourseDetail from "./pages/CourseDetail.jsx"
import Plans from "./pages/Plans.jsx"
import CurriculumDemo from "./pages/CurriculumDemo.jsx"
import About from "./pages/about.jsx"
import Admission from "./pages/admission.jsx"
import AboutNew from "./pages/AboutNew.jsx"
import Contact from "./pages/contact.jsx"
import { motion, AnimatePresence } from "framer-motion"

// Add CSS for hiding scrollbar
const scrollbarHideStyles = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`

export default function App() {
  const [showWelcomePopup, setShowWelcomePopup] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Inject CSS for hiding scrollbar
    const styleSheet = document.createElement("style")
    styleSheet.innerText = scrollbarHideStyles
    document.head.appendChild(styleSheet)
    
    return () => {
      document.head.removeChild(styleSheet)
    }
  }, [])

  useEffect(() => {
    // Debugging: Log when component mounts
    console.log("App component mounted, current path:", location.pathname)
    
    // Check if we should force show the popup (for testing)
    const urlParams = new URLSearchParams(window.location.search);
    const forcePopup = urlParams.get('showPopup') === 'true';
    
    // Only show popup on home page
    if (location.pathname === '/') {
      // More reliable way to check if user has visited before
      try {
        const hasVisited = localStorage.getItem('hasVisitedFDS')
        console.log("Has visited value:", hasVisited)
        
        if (!hasVisited || forcePopup) {
          console.log("User is new and on home page, setting up popup timer")
          // Set flag and show popup after a short delay
          if (!forcePopup) {
            localStorage.setItem('hasVisitedFDS', 'true')
          }
          console.log("Setting popup to show")
          const timer = setTimeout(() => {
            console.log("Timer fired, showing popup")
            setShowWelcomePopup(true)
          }, 1000)
          return () => clearTimeout(timer)
        } else {
          console.log("User has visited before, not showing popup")
        }
      } catch (error) {
        // Handle cases where localStorage is not available
        console.log("LocalStorage not available, showing popup:", error)
        const timer = setTimeout(() => {
          setShowWelcomePopup(true)
        }, 1000)
        return () => clearTimeout(timer)
      }
    }
  }, [location])

  // Debugging: Log when showWelcomePopup changes
  useEffect(() => {
    console.log("showWelcomePopup state changed:", showWelcomePopup)
    // Also log to verify it's working
    if (showWelcomePopup) {
      console.log("Popup should be visible now!")
    }
  }, [showWelcomePopup])

  return (
    <div>
      <ScrollToTop />
      <SiteHeader />
      {/* Manual trigger button for testing - positioned like chatbot but with different icon */}
      <button 
        onClick={() => {
          localStorage.removeItem('hasVisitedFDS')
          setShowWelcomePopup(true)
        }}
        className="fixed bottom-4 left-4 z-40 bg-[#315262] text-white p-3 rounded-full shadow-lg hover:bg-[#253d4a] transition-colors animate-pulse"
      >
        <span className="text-xl">📣</span>
      </button>
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course-index" element={<CourseIndex />} />
          <Route path="/course/:slug" element={<CourseDetail />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/curriculum-demo" element={<CurriculumDemo />} />
          <Route path="/about" element={<About />} />
          <Route path="/about-new" element={<AboutNew />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <SiteFooter />
      <ChatBot />
      
      {/* Welcome Popup for New Users */}
      <AnimatePresence>
        {showWelcomePopup && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-4"
            onClick={() => setShowWelcomePopup(false)}
          >
            <motion.div 
              initial={{ scale: 0.5, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.5, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden relative z-[10000]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 overflow-y-auto max-h-[90vh] scrollbar-hide">
                <div className="flex justify-center items-center mb-6 relative">
                  <h2 className="text-3xl font-bold text-[#315262] text-center">Welcome to Freedom Solutions!</h2>
                  <button 
                    onClick={() => setShowWelcomePopup(false)}
                    className="absolute right-0 top-0 text-gray-500 hover:text-gray-700 text-2xl w-8 h-8 flex items-center justify-center"
                  >
                    ✕
                  </button>
                </div>
                
                <div className="text-center mb-8">
                  <div className="inline-block bg-gradient-to-r from-[#315262] to-[#253d4a] text-white px-6 py-3 rounded-full mb-6">
                    <span className="font-bold text-xl">BEGINNER'S PATH</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#315262] mb-4">Start Your Journey to Financial Sovereignty</h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    As a new member, you'll begin with our foundational courses:
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <motion.div 
                    whileHover={{ y: -10 }}
                    className="bg-gradient-to-br from-white to-gray-50 border-2 border-[#315262] rounded-xl p-6 text-center shadow-lg"
                  >
                    <div className="text-4xl mb-4">📘</div>
                    <h4 className="font-bold text-lg text-[#315262] mb-2">SOV 101</h4>
                    <p className="text-gray-600 text-sm">
                      Introduction to Sovereignty Principles
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ y: -10 }}
                    className="bg-gradient-to-br from-white to-gray-50 border-2 border-[#EFAB47] rounded-xl p-6 text-center shadow-lg"
                  >
                    <div className="text-4xl mb-4">🔒</div>
                    <h4 className="font-bold text-lg text-[#315262] mb-2">Become Private</h4>
                    <p className="text-gray-600 text-sm">
                      The Basics of Financial Privacy
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ y: -10 }}
                    className="bg-gradient-to-br from-white to-gray-50 border-2 border-[#315262] rounded-xl p-6 text-center shadow-lg"
                  >
                    <div className="text-4xl mb-4">🗺️</div>
                    <h4 className="font-bold text-lg text-[#315262] mb-2">Road Map Series</h4>
                    <p className="text-gray-600 text-sm">
                      Your Step-by-Step Guide to Success
                    </p>
                  </motion.div>
                </div>
                
                <div className="bg-gradient-to-r from-[#315262] to-[#253d4a] rounded-xl p-6 text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">Ready to Begin?</h3>
                  <p className="mb-6 opacity-90 text-white">
                    Join thousands who have started their journey to financial freedom
                  </p>
                  <button 
                    onClick={() => setShowWelcomePopup(false)}
                    className="inline-block py-4 px-10 bg-[#EFAB47] text-[#315262] font-bold rounded-lg hover:bg-[#e6992e] transition-colors text-lg"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}