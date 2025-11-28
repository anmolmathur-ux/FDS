import React from "react";
import { motion } from "framer-motion";
import Timeline from "./timeline";

export default function GoalsIdeals() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#315262] to-[#1F3A48]">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white text-center mb-8"
        >
          Our Goals & Ideals
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-[#EFAB47] shadow-2xl">
                <img 
                  src="/src/assets/logo.png" 
                  alt="Freedom Solutions Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-sm border border-[#829494] rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-[#EFAB47] mb-3">Our Commitment</h3>
              <p className="text-white text-lg leading-relaxed">
                We are committed to delivering practical, principle-based education that empowers individuals to operate privately, build generational wealth, and thrive outside the limitations of public-statutory systems.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-[#829494] rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-[#EFAB47] mb-3">Our Vision</h3>
              <p className="text-white text-lg leading-relaxed">
                We envision a world where individuals have the knowledge, tools, and sovereignty to create lasting prosperity for themselves and future generations—free from unnecessary constraints.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}