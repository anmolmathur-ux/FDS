import React from "react";
import { motion } from "framer-motion";

const AboutNew = () => {
  // Placeholder image sources - replace with actual image imports
  const image1 = "https://plus.unsplash.com/premium_photo-1668383778557-d71c562fdb4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QWJvdXQlMjB1c3xlbnwwfHwwfHx8MA%3D%3D";
  const image2 = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QWJvdXQlMjB1c3xlbnwwfHwwfHx8MA%3D%3D";
  const image3 = "https://images.unsplash.com/photo-1560277090-46659724a489?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEFib3V0JTIwdXN8ZW58MHx8MHx8fDA%3D";
  const image4 = "https://plus.unsplash.com/premium_photo-1738637796692-d29db83fb7c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fEFib3V0JTIwdXN8ZW58MHx8MHx8fDA%3D";
  const portraitImage = "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2E4A56] to-[#355A66] font-serif -georgian">
      {/* SECTION 1 — HERO SECTION (TOP YELLOW HEADER) */}
      <section className="bg-[#315262]/60 rounded-b-[40px] py-20 md:py-10 relative overflow-visible">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-4xl font-bold text-white mb-6 tracking-tight hover:text-gray-200 transition-colors duration-300">
              About Us
            </h1>
            <p className="text-base md:text-lg text-[#315262] max-w-2xl mx-auto leading-relaxed mb-8 hover:text-[#315262] duration-300">
              We empower individuals and businesses with the knowledge and tools needed to thrive in today's competitive landscape.
            </p>
          </div>
        </div>
        
        {/* DECORATIVE ICONS */}
        <div className="absolute top-10 left-10 w-6 h-6 rounded-full border border-white opacity-30"></div>
        <div className="absolute top-20 right-20 w-4 h-4 rounded-full border border-white opacity-30"></div>
        <div className="absolute bottom-20 left-1/4 w-3 h-3 rounded-full border border-white opacity-30"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full border border-white opacity-30"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 border-t-2 border-r-2 border-white opacity-30"></div>
        
        {/* 4 IMAGE GRID MOVED FURTHER DOWN */}
        <div className=" py-20 max-w-7xl mx-auto px-3 mt-12 pb-0 -mb-20 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="rounded-[20px] overflow-hidden shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300">
              <img 
                src={image1} 
                alt="Team Collaboration" 
                className="w-full h-50 object-cover"
              />
            </div>
            <div className="rounded-[20px] overflow-hidden shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300 -mt-8">
              <img 
                src={image2} 
                alt="Working Together" 
                className="w-full h-66 object-cover"
              />
            </div>
            <div className="rounded-[20px] overflow-hidden shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300">
              <img 
                src={image3} 
                alt="Professional Setting" 
                className="w-full h-50 object-cover"
              />
            </div>
            <div className="rounded-[20px] overflow-hidden shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300 -mt-8">
              <img 
                src={image4} 
                alt="Team Meeting" 
                className="w-full h-66 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PREMIUM 3-STEP PROCESS FLOW */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-[#1A1A1A] font-serif">
              We Make Sure Your Idea & Creation Delivered Properly
            </h2>
            <div className="w-16 h-[3px] bg-blue-600 rounded-full mt-3 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-4 relative">
            {/* Horizontal connector line between steps (hidden on mobile) */}
            <div className="hidden md:block absolute top-16 left-1/3 w-1/3 h-[2px] bg-gray-300 transform -translate-y-1/2"></div>
            <div className="hidden md:block absolute top-16 right-1/3 w-1/3 h-[2px] bg-gray-300 transform -translate-y-1/2"></div>

            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/80 shadow-sm rounded-2xl p-6 md:p-8 relative"
            >
              <div className="bg-blue-50 p-3 rounded-xl text-blue-600 w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
                  <path d="M9 18h6"/>
                  <path d="M10 22h4"/>
                </svg>
              </div>
              <div className="text-2xl font-semibold text-#315262 mb-1 tracking-wider">01</div>
              <h3 className="text-xl font-bold text-[#315262] mb-3">Understanding Your Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                We empower individuals and businesses with the knowledge needed to operate effectively and build sustainable growth outside traditional systems.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 shadow-sm rounded-2xl p-6 md:p-8 relative"
            >
              <div className="bg-blue-50 p-3 rounded-xl text-blue-600 w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 3v18"/>
                  <path d="M3 12h18"/>
                </svg>
              </div>
              <div className="text-2xl font-semibold text-gray-900 mb-1 tracking-wider">02</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic Execution</h3>
              <p className="text-gray-600 leading-relaxed">
                Our approach combines practical training with strategic insights to ensure every concept is implemented effectively for your business objectives.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 shadow-sm rounded-2xl p-6 md:p-8 relative"
            >
              <div className="bg-blue-50 p-3 rounded-xl text-blue-600 w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <div className="text-2xl font-semibold text-gray-900 mb-1 tracking-wider">03</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Delivering Results Confidently</h3>
              <p className="text-gray-600 leading-relaxed">
                With years of experience, we help entrepreneurs navigate complex challenges and achieve their goals with confidence through proven methodologies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — BUSINESS OWNER EMPOWERMENT BLOCK */}
      <section className=" py-5 bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF]">
        <div className="bg-[#315262]/80 max-w-7xl mx-auto px-2">
          <div className=" px-7 py-16 grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-[20px] overflow-hidden shadow-lg">
              <img 
                src={portraitImage} 
                alt="Business Owner" 
                className="w-full h-96 object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-[#EFAB49] mb-6  transition-colors duration-300 font-serif">
                We empower small business owners
              </h2>
              <div className="p-5 rounded-[20px] bg-white/10 text-lg mb-6 leading-relaxed  transition-colors duration-300 font-serif">
                <p className="text-[#fff]">
                    Our structured approach helps entrepreneurs establish strong business foundations, optimize their operations, and gain the confidence to navigate complex market challenges with proven strategies.
                </p>
                <p className="text-[#fff]">
                    We provide comprehensive training and resources that enable business owners to build sustainable growth models, enhance their market position, and achieve long-term success in their respective industries.
                </p>
               </div>
              
              {/* QUOTE CARD */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                <p className="text-[#1A1A1A] text-lg italic mb-2 hover:text-[#333] transition-colors duration-300">
                  "Making an impact, together"
                </p>
                <p className="text-[#555] text-sm">
                  Socially Founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — BUSINESS GROWTH SECTION */}
      <section className="py-16 bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4 hover:text-[#333] transition-colors duration-300 font-serif">
            We help business to grow faster and bigger
          </h2>
          <p className="text-[#555] text-lg max-w-2xl mx-auto hover:text-[#333] transition-colors duration-300">
            Our proven methodologies and strategic frameworks are designed to accelerate business growth and expand market reach effectively.
          </p>
        </div>
        
        {/* SUB-SECTION — 3 FEATURE ICON CARDS */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full bg-[#F9E27C33] flex items-center justify-center mx-auto mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 hover:text-[#333] transition-colors duration-300">Professional Team</h3>
              <p className="text-[#666] hover:text-[#333] transition-colors duration-300">Expert educators with deep knowledge in business development and growth strategies</p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full bg-[#F9E27C33] flex items-center justify-center mx-auto mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 hover:text-[#333] transition-colors duration-300">Target Oriented</h3>
              <p className="text-[#666] hover:text-[#333] transition-colors duration-300">Focused curriculum designed to achieve specific business growth objectives</p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full bg-[#F9E27C33] flex items-center justify-center mx-auto mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="1.5">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 hover:text-[#333] transition-colors duration-300">Success Guarantee</h3>
              <p className="text-[#666] hover:text-[#333] transition-colors duration-300">Proven methodology for achieving sustainable business growth and expansion</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutNew;