import React from "react";
import { motion } from "framer-motion";

import step1Img from "../assets/step1.jpg";
import step2Img from "../assets/step2.jpg";
import step3Img from "../assets/step3.jpg";
import step4Img from "../assets/step4.jpg";
import step5Img from "../assets/step5.jpg";
import step6Img from "../assets/step6.jpg";
import img1 from "../assets/learn.jpg";
import img2 from "../assets/apply.jpg";
import img3 from "../assets/thrive.jpg";


export default function About() {
  const steps = [
    {
      number: 1,
      title: "Becoming Private",
      description:
        "The first step toward financial, legal, and spiritual independence begins with transitioning to a private status.",
      image: step1Img
    },
    {
      number: 2,
      title: "Building Your Private Business Trust",
      description:
        "Establish a private trust structure to protect your assets and build generational stability.",
      image: step2Img
    },
    {
      number: 3,
      title: "Optimizing Personal & Business Credit",
      description:
        "Strengthen both personal and business credit to unlock greater financial opportunities.",
      image: step3Img
    },
    {
      number: 4,
      title: "Becoming a Secure Party Creditor",
      description:
        "Take legal control of your identity and assets through Secure Party Creditor status.",
      image: step4Img
    },
    {
      number: 5,
      title: "Reclaiming Your Securities",
      description:
        "Recover what belongs to you by taking ownership of your securities and financial instruments.",
      image: step5Img
    },
    {
      number: 6,
      title: "Becoming Your Own Banker",
      description:
        "Achieve full financial autonomy by taking control of your banking and financial systems.",
      image: step6Img
    }
  ];

  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <section className="hero-gradient border-b border-[#829494]">
        <div
          className="vision-section"
          style={{
            backgroundImage: "url('/images/vision.jpg')"
          }}
        >
          {/* ---------- CEO MESSAGE + STEPS ---------- */}
          <section className="bg-[#315262] py-16 font-serif">
            <div className="max-w-4xl mx-auto px-6">
              <h1 className="text-4xl md:text-5xl font-bold text-[#FBFCFC] text-center tracking-tight leading-tight">
                Goals & Ideals
              </h1>
              
              <p className="mt-6 text-xl md:text-2xl italic text-[#FBFCFC] text-center leading-relaxed max-w-3xl mx-auto">
                Financial freedom comes from the courage to invest in self-education. The path to total independence — legally, financially, and spiritually — unfolds through the following steps:
              </p>
              
              <h2 className="mt-10 text-xl sm:text-2xl md:text-3xl font-bold text-[#FBFCFC] text-center tracking-tight">
  Sovereignty Path
</h2>

            </div>

            {/* STEPS TIMELINE */}
            <div className="mt-12 max-w-6xl mx-auto px-4 sm:px-6">
              {/* Desktop Horizontal Timeline */}
              <div className="hidden md:block relative py-12">
                {/* Glowing gold line with enhanced effect */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#EFAB47] to-transparent shadow-[0_0_10px_#EFAB47,inset_0_0_8px_#EFAB47] blur-[1px]"></div>
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#EFAB47] to-transparent"></div>
                
                {/* Timeline items */}
                <div className="relative flex justify-between w-full max-w-5xl mx-auto">
                  {[
                    { id: 1, label: "01", title: "Becoming Private", icon: (
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) },
                    { id: 2, label: "02", title: "Building Your Private Business Trust", icon: (
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M20 7h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 7h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M20 17h-4a2 2 0 0 0-2 2v1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 17h4a2 2 0 0 1 2 2v1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 3v4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 3v4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) },
                    { id: 3, label: "03", title: "Optimizing Personal & Business Credit", icon: (
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <rect x="2" y="5" width="20" height="14" rx="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="2" y1="10" x2="22" y2="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) },
                    { id: 4, label: "04", title: "Becoming a Secure Party Creditor", icon: (
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <rect x="8" y="2" width="8" height="4" rx="1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) },
                    { id: 5, label: "05", title: "Reclaiming Your Securities", icon: (
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="14,2 14,8 20,8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="16" y1="13" x2="8" y2="13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="16" y1="17" x2="8" y2="17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="10,9 9,9 8,9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) },
                    { id: 6, label: "06", title: "Becoming Your Own Banker", icon: (
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M17 9V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 13v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17 13h-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13 9h4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13 5v4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) }
                  ].map((item, index) => (
                    <motion.div 
                      key={item.id} 
                      className="flex flex-col items-center relative z-10"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {/* Label */}
                      <div className="text-[#EFAB47] text-xs font-bold mb-3 tracking-widest opacity-90">{item.label}</div>
                      
                      {/* Circle with icon */}
                      <div className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-black border-2 border-[#EFAB47] shadow-[0_0_8px_#EFAB47] hover:shadow-[0_0_15px_#EFAB47] transition-all duration-300 cursor-pointer transform hover:scale-110">
                        <div className="text-[#EFAB47] flex items-center justify-center">
                          {item.icon}
                        </div>
                        
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 rounded-full bg-[#EFAB47] opacity-0 group-hover:opacity-15 blur-md transition-opacity duration-300"></div>
                      </div>
                      
                      {/* Title */}
                      <div className="mt-3 text-center text-white text-xs font-medium font-serif max-w-[110px] tracking-wide opacity-90">{item.title}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Mobile and Tablet Vertical/Responsive Layout */}
              <div className="md:hidden block py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { id: 1, label: "01", title: "Becoming Private", icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) },
                    { id: 2, label: "02", title: "Building Your Private Business Trust", icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M20 7h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 7h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M20 17h-4a2 2 0 0 0-2 2v1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 17h4a2 2 0 0 1 2 2v1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 3v4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 3v4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) },
                    { id: 3, label: "03", title: "Optimizing Personal & Business Credit", icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <rect x="2" y="5" width="20" height="14" rx="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="2" y1="10" x2="22" y2="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) },
                    { id: 4, label: "04", title: "Becoming a Secure Party Creditor", icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <rect x="8" y="2" width="8" height="4" rx="1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) },
                    { id: 5, label: "05", title: "Reclaiming Your Securities", icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="14,2 14,8 20,8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="16" y1="13" x2="8" y2="13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="16" y1="17" x2="8" y2="17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="10,9 9,9 8,9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) },
                    { id: 6, label: "06", title: "Becoming Your Own Banker", icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M17 9V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 13v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17 13h-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13 9h4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13 5v4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) }
                  ].map((item, index) => (
                    <motion.div 
                      key={item.id} 
                      className="flex flex-col items-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {/* Circle with icon */}
                      <div className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-black border-2 border-[#EFAB47] shadow-[0_0_6px_#EFAB47] transition-all duration-300">
                        <div className="text-[#EFAB47] flex items-center justify-center">
                          {item.icon}
                        </div>
                        
                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-full bg-[#EFAB47] opacity-10 blur-md"></div>
                      </div>
                      
                      {/* Label and Title */}
                      <div className="mt-3 text-center">
                        <div className="text-[#EFAB47] text-xs font-bold tracking-widest mb-1">{item.label}</div>
                        <div className="text-white text-xs font-medium font-serif tracking-wide">{item.title}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* ===========================================================
        Vision & Mission
      ============================================================ */}
      <section className="bg-[#315262] py-16 px-6 border-b-4 border-[#829494] font-serif">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-[#FBFCFC] tracking-wide">
            Our Vision & Mission
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-[#FBFCFC] opacity-80">
            Empowering individuals with the knowledge and structure needed
            to operate privately, build generational wealth, and thrive
            outside the limitations of public-statutory systems.
          </p>
        </motion.div>

        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 bg-[#FBFCFC] border border-[#829494] rounded-2xl p-8 shadow-sm max-w-5xl mx-auto"
        >
          <p className="text-[#315262] leading-relaxed text-lg">
            We provide transformative education designed to help individuals
            become private and achieve generational wealth. Our specialized
            curriculum covers status correction, secure party creditor
            processes, establishing unincorporated business trusts, repairing
            & optimizing credit profiles, reclaiming securities, and
            understanding lawful debt discharge.
          </p>

          <p className="mt-4 text-[#315262] leading-relaxed text-lg">
            Becoming private gives individuals the ability to operate
            peacefully within public laws and regulations — while gaining the
            freedom and autonomy to build and protect wealth without
            unnecessary constraints.
          </p>
        </motion.div>

        {/* Approach */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-3xl font-bold text-[#FBFCFC] text-center"
        >
          Our Approach
        </motion.h2>

        <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Learn",
              desc: "Self-paced modules, guided lessons, templates, and real case studies to build deep understanding.",
              image: img1
            },
            {
              title: "Apply",
              desc: "Hands-on documentation, lawful compliance awareness, and private administrative procedures.",
              image: img2
            },
            {
              title: "Thrive",
              desc: "Tools for long-term planning, privacy-centered operations, and generational wealth building.",
              image: img3 
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-[#FBFCFC] border border-[#829494] rounded-2xl p-7 shadow hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer"
            >
              <div className="h-40 rounded-lg overflow-hidden mb-4">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-xl text-[#315262] mb-2">{card.title}</h3>
              <p className="text-[#315262] leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-3xl font-bold text-[#FBFCFC] text-center"
        >
          Core Values
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-6 space-y-4 max-w-4xl mx-auto text-lg text-[#FBFCFC]"
        >
          <li>
            <strong>
               Privacy
               </strong> — Your information and sovereignty are sacred.
          </li>
          <li>
            <strong>Compliance</strong> — Operate responsibly while mastering lawful processes.
          </li>
          <li>
            <strong>Empowerment</strong> — We equip you with actionable guidance and real strategies.
          </li>
          <li>
            <strong>Integrity</strong> — Transparent, ethical, and principle-based education.
          </li>
        </motion.ul>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 bg-[#FBFCFC] border border-[#EFAB47] rounded-xl p-6 max-w-4xl mx-auto"
        >
          <p className="text-[#315262] text-md leading-relaxed">
            <strong>Important:</strong> This platform is educational and does not
            provide legal or tax advice. Laws vary by region — always consult
            licensed professionals and follow all jurisdictional requirements.
          </p>
        </motion.div>
      </section>
    </div>
  );
}