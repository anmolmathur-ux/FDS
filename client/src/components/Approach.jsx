import React from "react";
import { motion } from "framer-motion";

import img1 from "../assets/learn.jpg";
import img2 from "../assets/apply.jpg";
import img3 from "../assets/thrive.jpg";

export default function Approach() {
  return (
    <div className="mt-16">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white text-center"
      >
        Our Approach
      </motion.h2>

      {/* THREE CARDS IN ONE ROW */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          {
            title: "Learn",
            description:
              "Self-placed modules, guided lessons, templates and real case studies to build deep understanding.",
            image: img1,
          },
          {
            title: "Apply",
            description:
              "Becoming private gives individuals the ability to operate peacefully within public laws and regulations ",
            image: img2,
          },
          {
            title: "Thrive",
            description:
              "We provide transformative education designed to help individuals become private and achieve generational wealth.",
            image: img3,
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-[#315262] border border-[#829494] rounded-3xl p-6 shadow-lg flex flex-col overflow-hidden"
          >
            {/* Image */}
            <div className="w-full h-48 rounded-xl overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <h3 className="mt-6 text-2xl font-bold text-white">
              {item.title}
            </h3>

            <p className="mt-3 text-white text-lg leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
