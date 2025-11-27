import React from "react";

const AboutNew = () => {
  // Placeholder image sources - replace with actual image imports
  const image1 = "https://plus.unsplash.com/premium_photo-1668383778557-d71c562fdb4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QWJvdXQlMjB1c3xlbnwwfHwwfHx8MA%3D%3D";
  const image2 = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QWJvdXQlMjB1c3xlbnwwfHwwfHx8MA%3D%3D";
  const image3 = "https://images.unsplash.com/photo-1560277090-46659724a489?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEFib3V0JTIwdXN8ZW58MHx8MHx8fDA%3D";
  const image4 = "https://plus.unsplash.com/premium_photo-1738637796692-d29db83fb7c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fEFib3V0JTIwdXN8ZW58MHx8MHx8fDA%3D";
  const portraitImage = "https://images.unsplash.com/photo-1718087036737-62d69f635ba3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fEFib3V0JTIwdXN8ZW58MHx8MHx8fDA%3D";

  return (
    <div className="min-h-screen bg-white">
      {/* SECTION 1 — HERO SECTION (TOP YELLOW HEADER) */}
      <section className="bg-blue-600 rounded-b-[40px] py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight hover:text-gray-200 transition-colors duration-300">
              About Us
            </h1>
            <p className="text-base md:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed mb-8 hover:text-white transition-colors duration-300">
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
      </section>

      {/* SECTION 2 — 4 IMAGE GRID */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="rounded-[20px] overflow-hidden shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300">
              <img 
                src={image1} 
                alt="Team Collaboration" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-[20px] overflow-hidden shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300">
              <img 
                src={image2} 
                alt="Working Together" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-[20px] overflow-hidden shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300">
              <img 
                src={image3} 
                alt="Professional Setting" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-[20px] overflow-hidden shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300">
              <img 
                src={image4} 
                alt="Team Meeting" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — TEXT SECTION: "We Make Sure Your Idea Delivered Properly" */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12 text-left hover:text-[#333] transition-colors duration-300">
            We Make Sure Your Idea & Creation Delivered Properly
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-[#555] text-lg leading-relaxed mb-6 hover:text-[#333] transition-colors duration-300">
                Our mission is to empower individuals and businesses with the knowledge and structure needed to operate effectively, build sustainable growth, and thrive outside the limitations of traditional systems.
              </p>
              <p className="text-[#555] text-lg leading-relaxed hover:text-[#333] transition-colors duration-300">
                We provide transformative education and resources designed to help entrepreneurs establish strong foundations, optimize their operations, and achieve long-term success through our specialized curriculum and proven methodologies.
              </p>
            </div>
            <div>
              <p className="text-[#555] text-lg leading-relaxed mb-6 hover:text-[#333] transition-colors duration-300">
                Our approach combines practical training with strategic insights to ensure that every concept is implemented effectively. We focus on delivering results that matter to your business objectives.
              </p>
              <p className="text-[#555] text-lg leading-relaxed hover:text-[#333] transition-colors duration-300">
                With years of experience in business development and growth strategies, we've helped countless entrepreneurs navigate complex challenges and achieve their goals with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — BUSINESS OWNER EMPOWERMENT BLOCK */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-[20px] overflow-hidden shadow-lg">
              <img 
                src={portraitImage} 
                alt="Business Owner" 
                className="w-full h-96 object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6 hover:text-[#333] transition-colors duration-300">
                We empower small business owners
              </h2>
              
              <p className="text-[#555] text-lg mb-6 leading-relaxed hover:text-[#333] transition-colors duration-300">
                Our structured approach helps entrepreneurs establish strong business foundations, optimize their operations, and gain the confidence to navigate complex market challenges with proven strategies.
              </p>
              
              <p className="text-[#555] text-lg mb-8 leading-relaxed hover:text-[#333] transition-colors duration-300">
                We provide comprehensive training and resources that enable business owners to build sustainable growth models, enhance their market position, and achieve long-term success in their respective industries.
              </p>
              
              {/* QUOTE CARD */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
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

      {/* SECTION 5 — BUSINESS GROWTH SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4 hover:text-[#333] transition-colors duration-300">
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