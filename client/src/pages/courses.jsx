import React, { useState } from "react";
import CourseCard from "../components/coursecard.jsx";
import course1 from '../assets/course1.jpg';
import course2 from '../assets/course2.jpg';
import course3 from '../assets/course3.jpg';
import course4 from '../assets/course4.jpg';
import course5 from '../assets/course5.jpg';
import course6 from '../assets/course6.jpg';


export default function Courses() {
  const [filter, setFilter] = useState("all");

  // Courses data with images & button links
  const courses = [
    {
      title: "Status Corrections",
      level: "Foundational",
      duration: "4 weeks",
      summary:
        "Core principles, documentation workflows, and compliance considerations.",
      category: "legal",
      features: ["Principles", "Workflows", "Compliance"],
      imageUrl: course1,
      buttonLink: "/admission"
    },
    {
      title: "Secure Party Creditor",
      level: "Intermediate",
      duration: "5 weeks",
      summary:
        "Understanding frameworks, filings, and risk management.",
      category: "legal",
      features: ["Frameworks", "Risk Management"],
      imageUrl: course2,
      buttonLink: "/admission"
    },
    {
      title: "Unincorporated Business Trust",
      level: "Intermediate",
      duration: "4 weeks",
      summary:
        "Establishing and operating private trust structures.",
      category: "business",
      features: ["Private Trusts", "Operating Structures"],
      imageUrl: course3  ,
      buttonLink: "/admission"
    },
    {
      title: "Credit Repair & Optimization (Personal)",
      level: "Foundational",
      duration: "3 weeks",
      summary:
        "Dispute mechanics, profile hygiene, and scoring optimization.",
      category: "credit",
      features: [
        "Dispute Mechanics",
        "Profile Hygiene",
        "Scoring Optimization"
      ],
      imageUrl: course4,
      buttonLink: "/admission"
    },
    {
      title: "Credit Optimization (Business)",
      level: "Intermediate",
      duration: "3 weeks",
      summary:
        "Vendor tiers, trade lines, and underwriting signals.",
      category: "credit",
      features: ["Vendor Tiers", "Trade Lines", "Underwriting Signals"],
      imageUrl: course5,
      buttonLink: "/admission"
    },
    {
      title: "Reclaiming Securities & Debt Discharge",
      level: "Advanced",
      duration: "6 weeks",
      summary:
        "Advanced processes, reconciliation, and documentation review.",
      category: "finance",
      features: [
        "Advanced Processes",
        "Reconciliation",
        "Documentation Review"
      ],
      imageUrl: course6,
      buttonLink: "/admission"
    }
  ];

  // Apply filter
  const visible = courses.filter(
    (c) => filter === "all" || c.category === filter
  );

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
      
        {/* Header + Filter Section */}
        <div className="flex items-end justify-between border-b border-[#829494] pb-4 mb-8">
          <h1 className="text-3xl font-bold text-[#315262]">All Courses</h1>

          <div className="text-right">
            <label className="block text-[#315262] text-sm">Filter by category</label>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="mt-1 bg-white text-[#315262] border border-[#829494] rounded px-3 py-2 focus:ring focus:ring-[#315262]/40 transition"
            >
              <option value="all">All</option>
              <option value="legal">Legal Foundation</option>
              <option value="financial">Financial Strategy</option>
              <option value="identity">Identity Management</option>
            </select>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {visible.map((c) => (
            <CourseCard
              key={c.title}
              title={c.title}
              level={c.level}
              duration={c.duration}
              summary={c.summary}
              category={c.category}
              features={c.features}
              imageUrl={c.imageUrl}
              buttonLink={c.buttonLink}
            />
          ))}
        </div>

        {/* Bottom Buttons */}
        <div className="mt-10 text-center flex justify-center gap-4">
          <a
            href="/admission"
            className="btn-amber inline-block px-6 py-3 rounded bg-[#EFAB47] text-[#FBFCFC] hover:bg-[#d6922e] transition shadow"
          >
            Apply Now
          </a>

          <a
            href="/about"
            className="btn-blue inline-block px-6 py-3 rounded bg-[#315262] text-[#FBFCFC] hover:bg-[#253d4a] transition shadow"
          >
            Request Info
          </a>
        </div>

      {/* Disclaimer */}
      <p className="mt-8 text-[#315262] text-center text-sm max-w-3xl mx-auto leading-relaxed">
        Educational disclaimer: These courses present educational materials only.
        Outcomes depend on individual circumstances and jurisdiction. Consult qualified professionals.
      </p>
      </div>
    </div>
  );
}
