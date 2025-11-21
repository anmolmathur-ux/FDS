import React, { useState } from "react";
import CourseCard from "../components/coursecard.jsx";

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
      imageUrl: "/images/status.jpg",
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
      imageUrl: "",
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
      imageUrl: "/images/.j",
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
      imageUrl: "/images/cre",
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
      imageUrl: "/images/credit-business.jpg",
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
      imageUrl: "/images/securities.jpg",
      buttonLink: "/admission"
    }
  ];

  // Apply filter
  const visible = courses.filter(
    (c) => filter === "all" || c.category === filter
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      
      {/* Header + Filter Section */}
      <div className="flex items-end justify-between border-b border-slate-700 pb-4 mb-8">
        <h1 className="text-3xl font-bold text-white">All Courses</h1>

        <div className="text-right">
          <label className="block text-gray-400 text-sm">Filter by category</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="mt-1 bg-slate-900 text-gray-200 border border-slate-700 rounded px-3 py-2 focus:ring focus:ring-blue-500/40 transition"
          >
            <option value="all">All</option>
            <option value="legal">Legal Foundations</option>
            <option value="business">Business Structures</option>
            <option value="credit">Credit</option>
            <option value="finance">Securities & Finance</option>
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
          className="btn-amber inline-block px-6 py-3 rounded bg-amber-600 text-white hover:bg-amber-700 transition shadow"
        >
          Apply Now
        </a>

        <a
          href="/about"
          className="btn-blue inline-block px-6 py-3 rounded bg-blue-600 text-white hover:bg-blue-700 transition shadow"
        >
          Request Info
        </a>
      </div>

      {/* Disclaimer */}
      <p className="mt-8 text-amber-200 text-center text-sm max-w-3xl mx-auto leading-relaxed">
        Educational disclaimer: These courses present educational materials only.
        Outcomes depend on individual circumstances and jurisdiction. Consult qualified professionals.
      </p>
    </div>
  );
}