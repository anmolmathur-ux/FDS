import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/learn.jpg";
import img2 from "../assets/apply.jpg";
import img3 from "../assets/thrive.jpg";

export default function Approach() {
  const steps = [
    {
      number: 1,
      title: "Learn",
      description: "Master foundational concepts through structured modules.",
      image: img1,
    },
    {
      number: 2,
      title: "Apply",
      description: "Implement strategies with guided practical exercises.",
      image: img2,
    },
    {
      number: 3,
      title: "Thrive",
      description: "Operate independently with confidence and clarity.",
      image: img3,
    },
  ];

  return (
    <div className="mt-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white text-center mb-8"
        >
          Our Approach
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#315262] border border-[#829494] rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-white text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}