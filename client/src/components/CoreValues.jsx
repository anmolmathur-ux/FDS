import React from "react";
import { motion } from "framer-motion";

export default function CoreValues() {
  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="mt-8">
      <div className="flex flex-col items-center">
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white text-center mb-8"
        >
          Core Values
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[#efe7da] to-[#EFAB47] p-6 rounded-3xl shadow-lg max-w-2xl w-full mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Privacy */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.04 }}
              className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-lg flex gap-4 cursor-pointer"
            >
              <span className="text-yellow-600 text-3xl">🔒</span>
              <div>
                <h4 className="font-semibold text-gray-900 text-lg">Privacy</h4>
                <p className="text-gray-600 text-sm mt-1">
                  Your information and sovereignty are sacred.
                </p>
              </div>
            </motion.div>

            {/* Compliance */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.04 }}
              className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-lg flex gap-4 cursor-pointer"
            >
              <span className="text-yellow-600 text-3xl">📜</span>
              <div>
                <h4 className="font-semibold text-gray-900 text-lg">Compliance</h4>
                <p className="text-gray-600 text-sm mt-1">
                  Operate responsibly while mastering lawful processes.
                </p>
              </div>
            </motion.div>

            {/* Empowerment */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.04 }}
              className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-lg flex gap-4 cursor-pointer"
            >
              <span className="text-yellow-600 text-3xl">⚡</span>
              <div>
                <h4 className="font-semibold text-gray-900 text-lg">Empowerment</h4>
                <p className="text-gray-600 text-sm mt-1">
                  We equip you with actionable guidance and real strategies.
                </p>
              </div>
            </motion.div>

            {/* Integrity */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ scale: 1.04 }}
              className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-lg flex gap-4 cursor-pointer"
            >
              <span className="text-yellow-600 text-3xl">⚖️</span>
              <div>
                <h4 className="font-semibold text-gray-900 text-lg">Integrity</h4>
                <p className="text-gray-600 text-sm mt-1">
                  Transparent, ethical, and principle-based education.
                </p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
