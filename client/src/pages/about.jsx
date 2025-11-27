import React from "react";
import { motion } from "framer-motion";

import step1Img from "../assets/step1.jpg";
import step2Img from "../assets/step2.jpg";
import step3Img from "../assets/step3.jpg";
import step4Img from "../assets/step4.jpg";
import step5Img from "../assets/step5.jpg";
import step6Img from "../assets/step6.jpg";
import VisionMission from "../components/VisionMission.jsx";

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
    <div className="min-h-screen bg-gradient-to-b from-[#2E4A56] to-[#355A66]">
      {/* ================= HERO SECTION ================= */}
      <section className="border-b border-[#829494]">
        <div
          className="vision-section"
          style={{
            backgroundImage: "url('/images/vision.jpg')"
          }}
          >
          </div>
          </section>
        
           
            

                    
      {/* ===========================================================
        Vision & Mission
      ============================================================ */}
      <VisionMission />
    </div>
  );
}