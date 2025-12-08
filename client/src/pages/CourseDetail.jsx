import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import CurriculumSection from "../components/CurriculumSection";
import EnrollButton from "../components/EnrollButton";
import course1 from "../assets/course1.jpg";
import course2 from "../assets/course2.jpg";
import course3 from "../assets/course3.jpg";
import course4 from "../assets/course4.jpg";
import course5 from "../assets/course5.jpg";
import course6 from "../assets/course6.jpg";

// Course data with detailed information
const courseData = [
  {
    id: 1,
    slug: "status-corrections",
    title: "Status Corrections",
    level: "Foundational",
    duration: "4 weeks",
    price: 500,
    summary: "Core principles, documentation workflows, and compliance considerations.",
    description: "This foundational course provides a comprehensive understanding of status corrections, essential for anyone seeking to establish a private operational framework. You'll learn the fundamental principles that govern legal status, documentation workflows, and compliance considerations that ensure your operations remain within accepted parameters while maximizing privacy and autonomy.",
    category: "legal",
    features: ["Principles", "Workflows", "Compliance"],
    imageUrl: course1,
    curriculum: [
      {
        week: "Week 1",
        topics: [
          "Understanding Legal Status",
          "Public vs Private Identity",
          "Documentation Fundamentals"
        ]
      },
      {
        week: "Week 2",
        topics: [
          "Workflow Design Principles",
          "Document Creation Process",
          "Record Keeping Requirements"
        ]
      },
      {
        week: "Week 3",
        topics: [
          "Compliance Frameworks",
          "Jurisdictional Considerations",
          "Risk Assessment Methods"
        ]
      },
      {
        week: "Week 4",
        topics: [
          "Implementation Strategies",
          "Review and Adjustment",
          "Ongoing Maintenance"
        ]
      }
    ]
  },
  {
    id: 2,
    slug: "secure-party-creditor",
    title: "Secure Party Creditor",
    level: "Intermediate",
    duration: "5 weeks",
    price: 700,
    summary: "Understanding frameworks, filings, and risk management.",
    description: "This intermediate course delves into the Secure Party Creditor framework, teaching you how to position yourself correctly within financial systems. You'll explore advanced filing techniques, risk management strategies, and practical applications that can help optimize your financial standing while maintaining compliance with applicable regulations.",
    category: "legal",
    features: ["Frameworks", "Risk Management", "Compliance"],
    imageUrl: course2,
    curriculum: [
      {
        week: "Week 1",
        topics: [
          "Creditor vs Debtor Dynamics",
          "Legal Positioning Strategies",
          "Asset Protection Fundamentals"
        ]
      },
      {
        week: "Week 2",
        topics: [
          "Filing Procedures",
          "Documentation Templates",
          "Submission Protocols"
        ]
      },
      {
        week: "Week 3",
        topics: [
          "Risk Identification",
          "Mitigation Techniques",
          "Contingency Planning"
        ]
      },
      {
        week: "Week 4",
        topics: [
          "Portfolio Management",
          "Performance Monitoring",
          "Adjustment Strategies"
        ]
      },
      {
        week: "Week 5",
        topics: [
          "Advanced Applications",
          "Case Studies",
          "Implementation Workshop"
        ]
      }
    ]
  },
  {
    id: 3,
    slug: "unincorporated-business-trust",
    title: "Unincorporated Business Trust",
    level: "Intermediate",
    duration: "4 weeks",
    price: 500,
    summary: "Establishing and operating private trust structures with expertise.",
    description: "Learn to establish and operate private trust structures with our comprehensive course on Unincorporated Business Trusts. This intermediate-level program covers everything from initial setup to ongoing administration, providing you with the expertise needed to create robust asset protection mechanisms while maintaining operational flexibility.",
    category: "business",
    features: ["Private Trusts", "Operating Structures", "Creditor Rights"],
    imageUrl: course3,
    curriculum: [
      {
        week: "Week 1",
        topics: [
          "Trust Fundamentals",
          "Legal Framework Overview",
          "Structural Options"
        ]
      },
      {
        week: "Week 2",
        topics: [
          "Formation Process",
          "Required Documentation",
          "Filing Requirements"
        ]
      },
      {
        week: "Week 3",
        topics: [
          "Operational Guidelines",
          "Administrative Duties",
          "Compliance Obligations"
        ]
      },
      {
        week: "Week 4",
        topics: [
          "Advanced Strategies",
          "Optimization Techniques",
          "Troubleshooting Scenarios"
        ]
      }
    ]
  },
  {
    id: 4,
    slug: "credit-repair-personal",
    title: "Optimizing Personal Credit",
    level: "Foundational",
    duration: "3 weeks",
    price: 500,
    summary: "Remedy Now - Dispute mechanics, profile hygiene, and scoring optimization.",
    description: "Transform your personal credit profile with our specialized course on credit repair and optimization. This foundational program teaches dispute mechanics, profile hygiene, and scoring optimization techniques that can help improve your credit standing and unlock better financial opportunities.",
    category: "credit",
    features: ["Dispute Mechanics", "Profile Hygiene", "Scoring Optimization"],
    imageUrl: course4,
    curriculum: [
      {
        week: "Week 1",
        topics: [
          "Credit Report Analysis",
          "Dispute Identification",
          "Documentation Gathering"
        ]
      },
      {
        week: "Week 2",
        topics: [
          "Dispute Submission Process",
          "Negotiation Techniques",
          "Response Management"
        ]
      },
      {
        week: "Week 3",
        topics: [
          "Profile Enhancement",
          "Scoring Strategies",
          "Maintenance Protocols"
        ]
      }
    ]
  },
  {
    id: 5,
    slug: "credit-optimization-business",
    title: "Optimizing Business Credit Profile",
    level: "Intermediate",
    duration: "3 weeks",
    price: 500,
    summary: "Vendor tiers, trade lines, and underwriting signals.",
    description: "Maximize your business credit potential with our advanced course on credit optimization. Learn about vendor tiers, trade lines, and underwriting signals that can help establish strong business credit profiles and unlock significant financial advantages for your enterprise.",
    category: "credit",
    features: ["Vendor Tiers", "Trade Lines", "Underwriting Signals"],
    imageUrl: course5,
    curriculum: [
      {
        week: "Week 1",
        topics: [
          "Business Credit Fundamentals",
          "Entity Selection",
          "Establishment Process"
        ]
      },
      {
        week: "Week 2",
        topics: [
          "Vendor Relationship Building",
          "Trade Line Development",
          "Credit Utilization Strategies"
        ]
      },
      {
        week: "Week 3",
        topics: [
          "Underwriting Signal Management",
          "Score Optimization",
          "Growth Strategies"
        ]
      }
    ]
  },
  {
    id: 6,
    slug: "reclaiming-securities-debt-discharge",
    title: "Reclaiming Securities & Debt Discharging",
    level: "Advanced",
    duration: "6 weeks",
    price: 800,
    summary: "Advanced processes, reconciliation, and documentation review.",
    description: "Master the complex processes of reclaiming securities and debt discharge with our advanced-level course. This comprehensive program covers advanced processes, reconciliation techniques, and documentation review methods that can help you navigate challenging financial situations and achieve optimal outcomes.",
    category: "finance",
    features: ["Advanced Processes", "Reconciliation", "Documentation Review"],
    imageUrl: course6,
    curriculum: [
      {
        week: "Week 1",
        topics: [
          "Securities Law Overview",
          "Claim Identification",
          "Documentation Requirements"
        ]
      },
      {
        week: "Week 2",
        topics: [
          "Claim Preparation",
          "Submission Procedures",
          "Tracking Mechanisms"
        ]
      },
      {
        week: "Week 3",
        topics: [
          "Debt Analysis",
          "Discharge Eligibility",
          "Strategy Development"
        ]
      },
      {
        week: "Week 4",
        topics: [
          "Negotiation Tactics",
          "Settlement Approaches",
          "Documentation Assembly"
        ]
      },
      {
        week: "Week 5",
        topics: [
          "Reconciliation Processes",
          "Account Resolution",
          "Verification Methods"
        ]
      },
      {
        week: "Week 6",
        topics: [
          "Final Implementation",
          "Post-Resolution Management",
          "Ongoing Monitoring"
        ]
      }
    ]
  }
];

// Map difficulty levels to colors and labels
const difficultyConfig = {
  'Foundational': { 
    label: 'Beginner', 
    color: 'bg-green-100 text-green-800',
    textColor: 'text-green-600'
  },
  'Intermediate': { 
    label: 'Intermediate', 
    color: 'bg-yellow-100 text-yellow-800',
    textColor: 'text-yellow-600'
  },
  'Advanced': { 
    label: 'Advanced', 
    color: 'bg-red-100 text-red-800',
    textColor: 'text-red-600'
  }
};

export default function CourseDetail() {
  const { slug } = useParams();
  const [openWeek, setOpenWeek] = useState(null);
  
  // Find the course by slug
  const course = courseData.find(course => course.slug === slug);
  
  // If course not found, show 404
  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#2E4A56] to-[#355A66] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h1 className="text-3xl font-bold text-[#315262] mb-4">Course Not Found</h1>
            <p className="text-[#444444] mb-6">The course you're looking for doesn't exist or has been moved.</p>
            <Link 
              to="/courses" 
              className="inline-block px-6 py-3 bg-[#EFAB47] text-white font-semibold rounded-lg shadow-lg hover:bg-[#d69235] transition duration-300"
            >
              Browse All Courses
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  const difficulty = difficultyConfig[course.level] || difficultyConfig['Foundational'];
  
  const toggleWeek = (weekIndex) => {
    setOpenWeek(openWeek === weekIndex ? null : weekIndex);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2E4A56] to-[#355A66] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Back to Courses Button */}
        <div className="mb-6">
          <Link 
            to="/courses" 
            className="inline-flex items-center text-white hover:text-[#EFAB47] transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Courses
          </Link>
        </div>
        
        {/* Course Header */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          {/* Hero Image */}
          <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${course.imageUrl})`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#315262] via-[#315262]/70 to-transparent"></div>
            </div>
            
            {/* Course Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between">
                <div>
                  <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-white drop-shadow-lg mb-2">
                    {course.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 mt-3">
                    <span className={`text-sm font-semibold px-3 py-1.5 rounded-full shadow-md ${difficulty.color} flex items-center`}>
                      <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      {difficulty.label}
                    </span>
                    <div className="flex items-center text-white text-sm sm:text-base drop-shadow-md">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {course.duration}
                    </div>
                    <div className="flex items-center text-white text-sm sm:text-base drop-shadow-md">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      ${course.price}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Course Details */}
          <div className="p-6">
            {/* Short Description */}
            <p className="text-[#444444] text-lg mb-8 leading-relaxed">
              {course.description}
            </p>
            
            {/* What You'll Learn */}
            <div className="mb-8">
              <h2 className="font-bold text-[#315262] text-2xl mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                What You'll Learn
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {course.features.map((feature, index) => (
                  <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0 mt-1 mr-3 text-[#EFAB47]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-[#444444]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Curriculum */}
            <div className="mb-8">
              <h2 className="font-bold text-[#315262] text-2xl mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Curriculum
              </h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <CurriculumSection curriculumData={course.curriculum} />
              </motion.div>
            </div>
            
            {/* Enroll Button */}
            <div className="text-center pt-6">
              <EnrollButton price={course.price} />
              <p className="mt-3 text-sm text-[#444444]">
                Secure your spot in this comprehensive course
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
