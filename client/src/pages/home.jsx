import React from "react";
import { Link } from "react-router-dom";
import homeImg from "../assets/home.jpg";

import About from "./about";
import Courses from "./courses";
import Admission from "./admission";
import Timeline from "../components/timeline";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2E4A56] to-[#355A66] overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="w-full h-[100vh] relative px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${homeImg})` }}
          aria-hidden="true"
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#315262]/70 to-[#315262]/90"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-6xl text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#EFAB47] break-words">
              Become Private. Build Generational Wealth.
            </h1>

            <p className="mt-4 text-base sm:text-lg md:text-xl text-[#FBFCFC] leading-relaxed">
              Structured courses on status corrections, secure party creditor
              concepts, unincorporated business trusts, credit optimization,
              reclaiming securities, and debt discharge strategies.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex justify-center gap-3 sm:gap-4 flex-wrap">
              <Link to="/admission" className="btn-amber">
                Apply Now
              </Link>

              <Link to="/about" className="btn-blue">
                Request Info
              </Link>
            </div>

            {/* Stats */}
            <ul className=" mt-6 flex justify-center flex-wrap text-white gap-3 sm:gap-5 md:gap-8 text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 " > <li className="flex items-center"> <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /> </svg> <strong>6</strong> core subject areas </li> <li className="flex items-center"> <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /> </svg> <strong>Self-paced</strong> modules </li> <li className="flex items-center"> <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /> </svg> <strong>Community</strong> support </li> </ul>
          </div>
        </div>
      </section>

      {/* GOALS & IDEALS */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2F4A55] text-center mb-6 font-serif tracking-wide">
            Goals & Ideals
          </h2>

          <p className="text-[#2F4A55] text-center text-sm sm:text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
            Our mission is to empower individuals with the knowledge and tools 
            needed to operate privately, build generational wealth, and thrive 
            outside the limitations of public-statutory systems.
          </p>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2F4A55] text-center mb-4 font-serif tracking-wide">
            Sovereignty Path
          </h3>

          <p className="text-[#2F4A55]/80 text-center text-sm sm:text-lg mb-8">
            Six steps toward full legal, financial, and spiritual independence.
          </p>

          {/* Timeline */}
          <div className="flex justify-center">
            <Timeline />
          </div>
        </div>
      </section>

      {/* IMPORTED SECTIONS */}
      <About />
      <Courses />
      <Admission />
    </div>
  );
}