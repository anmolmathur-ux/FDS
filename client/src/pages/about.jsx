import React from "react";
import { motion } from "framer-motion";
import ConnectWithUs from "../components/ConnectWithUs";

export default function About() {
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
        
      <ConnectWithUs />
    </div>
  );
}
