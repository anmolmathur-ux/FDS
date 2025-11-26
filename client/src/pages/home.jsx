import React from "react";
import homeImg from "../assets/home.jpg";

import About from "./about";
import Courses from "./courses";
import Admission from "./admission";

export default function Home() {
  return (
    <>
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


      {/* ALL SECTIONS ADDED HERE */}
      <About />
      <Courses />
      <Admission />
    </>
  );
}