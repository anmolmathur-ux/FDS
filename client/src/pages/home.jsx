import React from "react";
import homeImg from "../assets/home.jpg";

import About from "./about";
import Courses from "./courses";
import Admission from "./admission";
import Timeline from "../components/timeline";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2E4A56] to-[#355A66]">
      {/* HERO SECTION */}
      <section className="w-full h-screen relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${homeImg})`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#315262]/70 to-[#315262]/90"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-6xl text-center px-6 py-12">
            <h1 className="text-4xl md:text-6xl font-bold text-[#EFAB47]">
              Become Private. Build Generational Wealth.
            </h1>

            <p className="mt-4 text-lg md:text-xl text-[#FBFCFC] p-6">
              Structured courses on status corrections, secure party creditor
              concepts, unincorporated business trusts, credit optimization,
              reclaiming securities, and debt discharge strategies.
            </p>

            <div className="mt-6 flex justify-center gap-4 flex-wrap p-6">
              <a href="/admission" className="btn-amber">Apply Now</a>
              <a href="/about" className="btn-blue">Request Info</a>
            </div>

            <ul className="mt-6 flex justify-center gap-8 text-white p-6">
              <li><strong>6</strong> core subject areas</li>
              <li><strong>Self-paced</strong> modules</li>
              <li><strong>Community</strong> support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* GOALS & IDEALS SECTION */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2F4A55] text-center mb-6 sm:mb-8 font-serif tracking-wide">
            Goals & Ideals
          </h2>
          
          {/* Centered Paragraph */}
          <p className="text-[#2F4A55] text-center text-base sm:text-lg md:text-xl leading-relaxed mb-10 sm:mb-12 max-w-3xl mx-auto font-sans">
            Our mission is to empower individuals with the knowledge and tools needed to operate privately, build generational wealth, and thrive outside the limitations of public-statutory systems.
          </p>
          
          {/* Subheading */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2F4A55] text-center mb-3 sm:mb-6 font-serif tracking-wide">
            Sovereignty Path
          </h3>
          
          {/* Timeline */}
          <div className="mt-0">
            <Timeline />
          </div>
        </div>
      </section>

      {/* ALL SECTIONS ADDED HERE */}
      <About />
      <Courses />
      <Admission />
    </div>
  );
}