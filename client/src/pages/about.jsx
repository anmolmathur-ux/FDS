import React from "react";
import step1Img from "../assets/step-1.jpg";
import step2Img from "../assets/step2.jpg";
import step3Img from "../assets/step3.jpg";
import step4Img from "../assets/step4.jpg";
import step5Img from "../assets/step5.jpg";
import step6Img from "../assets/step6.jpg";

export default function About() {
  const steps = [
    {
      number: "01",
      title: "Becoming Private",
      description: "Transition to private status across domains.",
      Icon: ShieldCheck,
    },
    {
      number: 2,
      title: "Building Your Private Business Trust",
      description:
        "Establish a private trust structure to protect your assets and build generational stability.",
      image: step2Img
    },
    {
      number: "03",
      title: "Optimize Credit",
      description: "Strengthen personal and business credit.",
      Icon: CreditCard,
    },
    {
      number: 4,
      title: "Becoming a Secure Party Creditor",
      description:
        "Take legal control of your identity and assets through Secure Party Creditor status.",
      image: step4Img
    },
    {
      number: "05",
      title: "Reclaim Securities",
      description: "Take ownership of securities and instruments.",
      Icon: FileText,
    },
    {
      number: 6,
      title: "Becoming Your Own Banker",
      description:
        "Achieve full financial autonomy by taking control of your banking and financial systems.",
      image: step6Img
    },
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
          <section className="bg-[#315262] py-20 font-serif">
            <h1 className="text-4xl font-bold text-[#FBFCFC] p-6">
              Vision & Mission
            </h1>

            {/* CEO MESSAGE */}
            <div className="max-w-4xl mx-auto px-6 text-center mb-20">
              <blockquote className="text-2xl italic text-[#FBFCFC] leading-relaxed">
                Financial freedom comes from the courage to invest in
                self-education.  
                The path to total independence — legally, financially, and
                spiritually — unfolds through the following steps:
              </blockquote>
            </div>

            {/* STEPS GRID */}
            <div className="max-w-6xl mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold text-[#FBFCFC] mb-12">
                Steps to Total Independence
              </h2>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="steps-card rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition"
                    style={{
                      backgroundImage: `url(${step.image})`
                    }}
                  >
                    <div className="steps-card-content">
                      <div className="text-5xl font-bold text-[#FBFCFC] mb-4">
                        {step.number}
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

    {/* ----------- REST OF YOUR ORIGINAL CONTENT ----------- */ }
    <section className="section bg-[#FBFCFC] p-6 border-b-4 border-[#829494]">
        <h2 className="text-3xl font-bold text-[#315262] ">
          Company Vision & Mission
        </h2>
        <div className="mt-6 bg-white border border-[#829494] rounded-lg p-6">
          <p className="text-[#315262]">
            To educate individuals on how to become private and gain generational
            wealth through our courses. Our subjects are status corrections, secure
            party creditor, building unincorporated business trust, repairing and
            optimizing personal and business credit profiles. Reclaiming your
            securities and debt discharge.
          </p>
          <p className="mt-2 text-[#315262]">
            Becoming private gives the freedom to live and operate within the public
            statutory laws, policies, regulations and free from taxation.
          </p>
        </div>

        <h2 className="mt-8 text-3xl font-semibold text-[#315262]">
          Our Approach
        </h2>

        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <div className="bg-white border border-[#829494] rounded-lg p-6">
            <h3 className="font-semibold text-[#315262]">Learn</h3>
            <p className="text-[#315262]">
              Step-by-step, self-paced modules with templates, checklists, and case studies.
            </p>
          </div>
          <div className="bg-white border border-[#829494] rounded-lg p-6">
            <h3 className="font-semibold text-[#315262]">Apply</h3>
            <p className="text-[#315262]">
              Guided documentation practices, compliance awareness, and review workflows.
            </p>
          </div>
          <div className="bg-white border border-[#829494] rounded-lg p-6">
            <h3 className="font-semibold text-[#315262]">Thrive</h3>
            <p className="text-[#315262]">
              Privacy-focused operations and long-term planning for wealth preservation.
            </p>
          </div>
        </div>

        <h2 className="mt-8 text-3xl font-semibold text-[#315262]">
          Core Values
        </h2>
        <ul className="mt-2 space-y-2 text-[#315262]">
          <li>
            <strong className="text-[#315262]">Privacy</strong> — Protect personal and
            organizational information.
          </li>
          <li>
            <strong className="text-[#315262]">Compliance</strong> — Operate responsibly within applicable laws and regulations.
          </li>
          <li>
            <strong className="text-[#315262]">Empowerment</strong> — Provide clear, actionable guidance.
          </li>
          <li>
            <strong className="text-[#315262]">Integrity</strong> — Teach practices grounded in ethics and transparency.
          </li>
        </ul>

        <div className="mt-6 bg-[#EFAB47]/20 border border-[#EFAB47] rounded-xl p-4">
          <p className="text-[#315262]">
            Important: This platform provides education only. Statements about taxation or
            legal status vary by jurisdiction; consult licensed professionals and follow all laws.
          </p>
        </div>
      </section>
    </div>
  );
}