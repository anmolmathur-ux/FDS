import React, { useState } from "react";
import { motion } from "framer-motion";
import admissionImg from "../assets/online-admission.jpg";
import logoImg from "../assets/logo.png";

export default function Admission() {
  const [infoLoading, setInfoLoading] = useState(false);
  const [applyLoading, setApplyLoading] = useState(false);

  async function submit(path, formData, setLoading, label) {
    try {
      setLoading(true);
      const res = await fetch(`http://localhost:4000/api/${path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const ok = res.ok;
      alert(`${label} submitted${ok ? "" : " (server error)"}.`);
    } catch {
      alert(`${label} failed. Check server.`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-[#315262] min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-12">

        {/* MAIN WRAPPER */}
        <div className="grid gap-6">

          {/* HERO SECTION */}
          <div className="admission-hero rounded-xl overflow-hidden h-72 sm:h-96 md:h-[500px] relative">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${admissionImg})` }}
            ></div>

            <div className="absolute inset-0 bg-gradient-to-b from-[#315262]/70 to-[#315262]/90"></div>

            <div className="p-6 relative z-10 h-full flex flex-col justify-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 py-2 px- ">
                Online Admission
              </h1>

              <p className="text-slate-300 mb-6 max-w-3xl text-sm sm:text-base">
                Enroll in self-paced programs designed to help you operate privately and build generational wealth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <a href="#info" className="btn-blue">Request Info</a>
                <a href="#apply" className="btn-yellow">Apply Now</a>
              </div>

              <h2 className="mt-8 text-xl sm:text-2xl font-bold text-white">
                How Do I Apply?
              </h2>

              <ol className="mt-4 list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base max-w-2xl">
                <li>Create your student account.</li>
                <li>Select one or more courses that match your goals.</li>
                <li>Complete enrollment and payment.</li>
                <li>Start learning immediately with guided modules.</li>
              </ol>
              
              {/* Logo in bottom right corner */}
              <div className="absolute bottom-6 right-6">
                <img 
                  src={logoImg} 
                  alt="FDS Logo" 
                  className="w-32 h-32 object-contain"
                />
              </div>
            </div>
          </div>

          {/* FORMS WRAPPER */}
          <div id="info" className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* REQUEST INFO */}
            <div className="bg-white border border-[#829494] rounded-xl p-6">
              <h3 className="font-semibold text-[#315262] text-lg sm:text-xl mb-4">
                Request Info
              </h3>

              <form
                className="grid gap-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const data = {
                    name: form.name.value,
                    email: form.email.value,
                    interest: form.interest.value,
                    query: "Request Info Form Submission",
                  };
                  await submit("info", data, setInfoLoading, "Request Info");
                  form.reset();
                }}
              >
                <label className="grid gap-1 text-[#315262] text-sm">
                  Full Name *
                  <input
                    name="name"
                    required
                    className="bg-[#FBFCFC] text-[#315262] border border-[#829494] rounded px-3 py-2"
                    placeholder="Enter your full name"
                  />
                </label>

                <label className="grid gap-1 text-[#315262] text-sm">
                  Email *
                  <input
                    name="email"
                    type="email"
                    required
                    className="bg-[#FBFCFC] text-[#315262] border border-[#829494] rounded px-3 py-2"
                    placeholder="Enter your email address"
                  />
                </label>

                <label className="grid gap-1 text-[#315262] text-sm">
                  Area of Interest *
                  <select
                    name="interest"
                    required
                    className="bg-[#FBFCFC] text-[#315262] border border-[#829494] rounded px-3 py-2"
                  >
                    <option value="">Select an area of interest</option>
                    <option value="Status Corrections">Status Corrections</option>
                    <option value="Secure Party Creditor">Secure Party Creditor</option>
                    <option value="Unincorporated Business Trust">Unincorporated Business Trust</option>
                    <option value="Credit Optimization">Credit Optimization</option>
                    <option value="Reclaiming Securities & Debt Discharge">Reclaiming Securities & Debt Discharge</option>
                  </select>
                </label>
                <label className="grid gap-1 text-[#315262] text-sm">Add Your Message (optional)
                  <textarea
                    name="message"
                    rows="6"
                    className="bg-[#FBFCFC] text-[#315262] border border-[#829494] rounded px-3 py-2"
                    placeholder="Add your message (optional)"
                  />
                </label>

                <button disabled={infoLoading} className="btn-blue mt-2 text-sm sm:text-base">
                  {infoLoading ? "Submitting..." : "Request Info"}
                </button>
                
              </form>

             
            </div>

            {/* APPLY NOW */}
            <div className="bg-white border border-[#829494] rounded-xl p-6" id="apply">
              <h3 className="font-semibold text-[#315262] text-lg sm:text-xl mb-4">
                Apply Now
              </h3>

              <form
                className="grid gap-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const data = {
                    name: form.name.value,
                    email: form.email.value,
                    phone: form.phone.value,
                    course: form.course.value,
                    experience: form.experience.value,
                    query: "Apply Now Form Submission",
                  };
                  await submit("apply", data, setApplyLoading, "Application");
                  form.reset();
                }}
              >
                <label className="grid gap-1 text-[#315262] text-sm">
                  Full Name *
                  <input
                    name="name"
                    required
                    className="bg-[#FBFCFC] text-[#315262] border border-[#829494] rounded px-3 py-2"
                    placeholder="Enter your full name"
                  />
                </label>

                <label className="grid gap-1 text-[#315262] text-sm">
                  Email *
                  <input
                    name="email"
                    type="email"
                    required
                    className="bg-[#FBFCFC] text-[#315262] border border-[#829494] rounded px-3 py-2"
                    placeholder="Enter your email address"
                  />
                </label>

                <label className="grid gap-1 text-[#315262] text-sm">
                  Phone Number *
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="bg-[#FBFCFC] text-[#315262] border border-[#829494] rounded px-3 py-2"
                    placeholder="Enter your phone number"
                  />
                </label>

                <label className="grid gap-1 text-[#315262] text-sm">
                  Selected Course *
                  <select
                    name="course"
                    required
                    className="bg-[#FBFCFC] text-[#315262] border border-[#829494] rounded px-3 py-2"
                  >
                    <option value="">Select a course</option>
                    <option value="Status Corrections">Status Corrections</option>
                    <option value="Secure Party Creditor">Secure Party Creditor</option>
                    <option value="Unincorporated Business Trust">Unincorporated Business Trust</option>
                    <option value="Credit Repair & Optimization (Personal)">Credit Repair & Optimization (Personal)</option>
                    <option value="Credit Optimization (Business)">Credit Optimization (Business)</option>
                    <option value="Reclaiming Securities & Debt Discharge">Reclaiming Securities & Debt Discharge</option>
                  </select>
                </label>

                <label className="grid gap-1 text-[#315262] text-sm">
                  Relevant Experience
                  <textarea
                    name="experience"
                    className="bg-[#FBFCFC] text-[#315262] border border-[#829494] rounded px-3 py-2"
                    placeholder="Describe your relevant experience (optional)"
                  />
                </label>

                <button disabled={applyLoading} className="btn-yellow mt-2 text-sm sm:text-base">
                  {applyLoading ? "Submitting..." : "Submit Application"}
                </button>
              </form>
            </div>
          </div>

          <div className="mt-8 bg-[#EFAB47]/20 border border-[#EFAB47] rounded-xl p-6">
            <p className="text-white font-semibold">
              Educational disclaimer: Enrollment provides access to educational materials only.
              It does not constitute legal, financial, or tax advice.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}