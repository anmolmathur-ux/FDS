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
      <section className="border-b border-[#829494]">
        <div
          className="vision-section"
          style={{
            backgroundImage: "url('/images/vision.jpg')"
          }}
        >
          {/* ---------- CEO MESSAGE + STEPS ---------- */}
          <section className="bg-white py-20 font-serif">
            <h1 className="text-4xl font-bold text-[#315262] p-6">
              Vision & Mission
            </h1>

            {/* CEO MESSAGE */}
            <div className="max-w-4xl mx-auto px-6 text-center mb-20">
              <blockquote className="text-2xl italic text-[#315262] leading-relaxed">
                Financial freedom comes from the courage to invest in
                self-education.  
                The path to total independence — legally, financially, and
                spiritually — unfolds through the following steps:
              </blockquote>
            </div>

            {/* STEPS GRID */}
            <div className="max-w-6xl mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold text-[#315262] mb-12">
                Steps to Total Independence
              </h2>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="steps-card rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition"
                    style={{
                      backgroundImage: `url(${step.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat"
                    }}
                  >
                    <div className="steps-card-content">
                      <div className="text-5xl font-bold text-[#315262] mb-4">
                        {step.number}
                      </div>
                      <h3 className="text-xl font-semibold text-[#315262] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[#315262] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
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

        {/* Core Values */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-3xl font-bold text-white text-center"
        >
          Core Values
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-6 space-y-4 max-w-4xl mx-auto text-lg text-white"
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
          className="mt-12 bg-[#315262] border border-[#EFAB47] rounded-xl p-6 max-w-4xl mx-auto"
        >
          <p className="text-white text-md leading-relaxed">
            <strong>Important:</strong> This platform is educational and does not
            provide legal or tax advice. Laws vary by region — always consult
            licensed professionals and follow all jurisdictional requirements.
          </p>
        </motion.div>
      </section>
    </div>
  );
}