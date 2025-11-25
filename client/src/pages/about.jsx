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
      image:step2Img  
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
          <section className="bg-gray-50 py-20 font-serif">
            <h1 className="text-4xl font-bold text-[#315262] p-6">
            Vision & Mission
          </h1>
            {/* CEO MESSAGE */}
            <div className="max-w-4xl mx-auto px-6 text-center mb-20">
              <blockquote className="text-2xl italic text-gray-800 leading-relaxed">
                
                Financial freedom comes from the courage to invest in self-education.
                The path to total independence — legally, financially, and spiritually —
                unfolds through the following steps:
                </blockquote>
            </div>

            {/* STEPS CARDS */}
            <div className="max-w-6xl mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">
                Steps to Total Independence :-
              </h2>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="steps-card rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition"
                    style={{
                      backgroundImage: `url(${step.image})`,
                    }}
                  >
                    <div className="steps-card-content">
                      <div className="text-5xl font-bold text-[#FBFCFC] mb-4">
                        {step.number}
                      </div>
                      <h3 className="text-xl font-semibold text-[#FBFCFC] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[#FBFCFC] leading-relaxed">
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

      {/* ----------- REST OF YOUR ORIGINAL CONTENT ----------- */}
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