import React from "react";
import { motion } from "framer-motion";

import img1 from "../assets/learn.jpg";
import img2 from "../assets/apply.jpg";
import img3 from "../assets/thrive.jpg";
import coreImg from "../assets/core.png";

export default function VisionMission() {
  return (
    <section className="bg-[#315262]/80 py-16 px-6 border-b-4 border-[#829494] font-serif">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-white tracking-wide">
          Our Vision & Mission
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-white opacity-80">
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
        className="mt-10 bg-[#315262] border border-[#829494] rounded-2xl p-8 shadow-sm max-w-5xl mx-auto"
      >
        <p className="text-white leading-relaxed text-lg">
          We provide transformative education designed to help individuals
          become private and achieve generational wealth. Our specialized
          curriculum covers status correction, secure party creditor
          processes, establishing unincorporated business trusts, repairing
          & optimizing credit profiles, reclaiming securities, and
          understanding lawful debt discharge.
        </p>

        <p className="mt-4 text-white leading-relaxed text-lg">
          Becoming private gives individuals the ability to operate
          peacefully within public laws and regulations — while gaining the
          freedom and autonomy to build and protect wealth without
          unnecessary constraints.
        </p>
      </motion.div>

      {/* Core Values */}
      <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
        <div className="bg-[#EFAB47] p-8 rounded-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-[#315262] text-center md:text-left"
          >
            Core Values
          </motion.h2>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-6 space-y-4 text-lg text-white"
          >
            
          </motion.ul>
        </div>
        {/* Core Values Object */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="bg-gradient-to-br from-[#efe7da] to-[#d6ccb8] p-8 rounded-3xl shadow-lg max-w-xl mx-auto md:mx-0"
>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {/* Privacy */}
    <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow flex gap-3">
      <span className="text-yellow-600 text-2xl">🔒</span>
      <div>
        <h4 className="font-semibold text-gray-900">Privacy</h4>
        <p className="text-gray-600 text-sm">
          Your information and sovereignty are sacred.
        </p>
      </div>
    </div>

    {/* Compliance */}
    <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow flex gap-3">
      <span className="text-yellow-600 text-2xl">📜</span>
      <div>
        <h4 className="font-semibold text-gray-900">Compliance</h4>
        <p className="text-gray-600 text-sm">
          Operate responsibly while mastering lawful processes.
        </p>
      </div>
    </div>

    {/* Empowerment */}
    <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow flex gap-3">
      <span className="text-yellow-600 text-2xl">⚡</span>
      <div>
        <h4 className="font-semibold text-gray-900">Empowerment</h4>
        <p className="text-gray-600 text-sm">
          We equip you with actionable guidance and real strategies.
        </p>
      </div>
    </div>

    {/* Integrity */}
    <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow flex gap-3">
      <span className="text-yellow-600 text-2xl">⚖️</span>
      <div>
        <h4 className="font-semibold text-gray-900">Integrity</h4>
        <p className="text-gray-600 text-sm">
          Transparent, ethical, and principle-based education.
        </p>
      </div>
    </div>
  </div>
</motion.div>

      </div>

      {/* Approach */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 text-3xl font-bold text-white text-center"
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
            className="bg-[#315262] border border-[#829494] rounded-2xl p-7 shadow hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer"
          >
            <div className="h-40 rounded-lg overflow-hidden mb-4">
              <img 
                src={card.image} 
                alt={card.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-xl text-white mb-2">{card.title}</h3>
            <p className="text-white leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Disclaimer */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-12 bg-[#315262] border border-[#EFAB47] rounded-xl p-6 max-w-4xl mx-auto"
      >
        <p className="text-white text-md leading-relaxed">
          <strong>Important:</strong> This platform is educational and does not
          provide legal or tax advice. Laws vary by region — always consult
          licensed professionals and follow all jurisdictional requirements.
        </p>
      </motion.div>
    </section>
  );
}