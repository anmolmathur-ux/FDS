import React from "react";
import { ShieldCheck, Briefcase, CreditCard, BadgeCheck, FileText, Landmark } from "lucide-react";

export default function About() {
  const steps = [
    {
      number: "01",
      title: "Becoming Private",
      description: "Transition to private status across domains.",
      Icon: ShieldCheck,
    },
    {
      number: "02",
      title: "Private Business Trust",
      description: "Establish a trust to protect assets.",
      Icon: Briefcase,
    },
    {
      number: "03",
      title: "Optimize Credit",
      description: "Strengthen personal and business credit.",
      Icon: CreditCard,
    },
    {
      number: "04",
      title: "Secure Party Creditor",
      description: "Gain legal control of identity and assets.",
      Icon: BadgeCheck,
    },
    {
      number: "05",
      title: "Reclaim Securities",
      description: "Take ownership of securities and instruments.",
      Icon: FileText,
    },
    {
      number: "06",
      title: "Become Your Banker",
      description: "Operate with full financial autonomy.",
      Icon: Landmark,
    },
  ];

  return (
    <div>
      <section className="hero-gradient border-b border-[#829494]">
        <div
          className="vision-section"
          style={{
            backgroundImage: "url('/images/vision.jpg')",
          }}
        >
          

          {/* ---------- CEO MESSAGE + STEPS SECTION INSERTED HERE ---------- */}
          <section className="bg-gray-50 py-15 font-serif">
            <h1 className=" text-4xl font-bold text-[#315262] p-6 text-center">
              Goals & Ideals
          </h1>
            {/* CEO MESSAGE */}
            <div className="max-w-4xl mx-auto px-4 text-center mb-10">
              <blockquote className="text-2xl italic text-gray-800 leading-relaxed">
                
                Financial freedom comes from the courage to invest in self-education.
                The path to total independence — legally, financially, and spiritually —
                unfolds through the following steps:
                </blockquote>
            </div>

            {/* STEPS TIMELINE */}
            <div className="w-full px-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center px-4">
                Sovereignty Path:-
              </h2>

              <div className="steps-dark rounded-none p-4 sm:p-6 md:p-8 w-full">
                <div className="relative">
                  <div className="progress-line hidden sm:block" aria-hidden="true"></div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 px-4 md:px-8">
                    {steps.map(({ number, title, description, Icon }) => (
                      <div key={number} className="text-center transition-all duration-300 hover:-translate-y-2 animate-fade-up" style={{animationDelay: `${parseInt(number) * 0.1}s`}}>
                        <div className="mx-auto step-circle-mobile sm:step-circle relative transition-all duration-300 hover:border-[#F6B93B]/80 hover:scale-110 hover:shadow-lg hover:shadow-[#F6B93B]/50">
                          <Icon className="w-6 h-6 sm:w-7 sm:h-7 transition-all duration-300" />
                          <span className="step-number transition-all duration-300" aria-hidden="true">{number}</span>
                        </div>
                        <h3 className="mt-3 text-white font-semibold text-base sm:text-lg md:text-xl transition-all duration-300 hover:text-[#F6B93B]">
                          {title}
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm md:text-base text-white/90 transition-all duration-300 hover:text-white">
                          {description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* ----------- REST OF YOUR ORIGINAL CONTENT ----------- */}
      <section className="section bg-[#FBFCFC] py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-[#829494]">
        <div className="max-w-7xl mx-auto">
          {/* Company Vision & Mission Section */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#315262] mb-6">
              Company Vision & Mission
            </h2>
            <div className="max-w-3xl mx-auto bg-white border border-[#829494] rounded-xl p-8 shadow-sm">
              <p className="text-[#315262] text-lg leading-relaxed mb-4">
                To educate individuals on how to become private and gain generational
                wealth through our courses. Our subjects are status corrections, secure
                party creditor, building unincorporated business trust, repairing and
                optimizing personal and business credit profiles. Reclaiming your
                securities and debt discharge.
              </p>
              <p className="text-[#315262] text-lg leading-relaxed">
                Becoming private gives the freedom to live and operate within the public
                statutory laws, policies, regulations and free from taxation.
              </p>
            </div>
          </div>

          {/* Our Approach Section */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#315262] mb-6">
              Our Approach
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border border-[#829494] rounded-xl p-8 shadow-sm flex flex-col h-full">
                <h3 className="font-bold text-[#315262] text-xl mb-4">Learn</h3>
                <p className="text-[#315262] text-base leading-relaxed flex-grow">
                  Step-by-step, self-paced modules with templates, checklists, and case studies.
                </p>
              </div>
              <div className="bg-white border border-[#829494] rounded-xl p-8 shadow-sm flex flex-col h-full">
                <h3 className="font-bold text-[#315262] text-xl mb-4">Apply</h3>
                <p className="text-[#315262] text-base leading-relaxed flex-grow">
                  Guided documentation practices, compliance awareness, and review workflows.
                </p>
              </div>
              <div className="bg-white border border-[#829494] rounded-xl p-8 shadow-sm flex flex-col h-full">
                <h3 className="font-bold text-[#315262] text-xl mb-4">Thrive</h3>
                <p className="text-[#315262] text-base leading-relaxed flex-grow">
                  Privacy-focused operations and long-term planning for wealth preservation.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#315262] mb-6">
              Core Values
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-[#829494] rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#315262] text-xl mb-2">Privacy</h3>
                  <p className="text-[#315262] text-base leading-relaxed">
                    Protect personal and organizational information.
                  </p>
                </div>
                <div className="bg-white border border-[#829494] rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#315262] text-xl mb-2">Compliance</h3>
                  <p className="text-[#315262] text-base leading-relaxed">
                    Operate responsibly within applicable laws and regulations.
                  </p>
                </div>
                <div className="bg-white border border-[#829494] rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#315262] text-xl mb-2">Empowerment</h3>
                  <p className="text-[#315262] text-base leading-relaxed">
                    Provide clear, actionable guidance.
                  </p>
                </div>
                <div className="bg-white border border-[#829494] rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#315262] text-xl mb-2">Integrity</h3>
                  <p className="text-[#315262] text-base leading-relaxed">
                    Teach practices grounded in ethics and transparency.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto bg-[#EFAB47]/20 border border-[#EFAB47] rounded-xl p-6 shadow-sm">
            <p className="text-[#315262] text-center text-lg">
              Important: This platform provides education only. Statements about taxation or
              legal status vary by jurisdiction; consult licensed professionals and follow all laws.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}