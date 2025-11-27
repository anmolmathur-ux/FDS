import React, { useState } from "react";
import admissionImg from "../assets/online-admission.jpg";

export default function Admission() {
  const [infoLoading, setInfoLoading] = useState(false);
  const [applyLoading, setApplyLoading] = useState(false);

  async function submit(path, formData, setLoading, label) {
    try {
      setLoading(true);
      const res = await fetch(`http://localhost:4000/api/${path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
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
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid gap-6">
          <div>
            {/* HERO */}
            <div className="admission-hero rounded-xl overflow-hidden h-96 md:h-[500px] relative">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${admissionImg})`
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-b from-[#315262]/70 to-[#315262]/90"></div>
              <div className="p-6 md:p-8 relative z-10 h-full flex flex-col justify-center">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Online Admission</h1>
                <p className="text-slate-300 mb-6 max-w-3xl">
                  Enroll in self-paced programs designed to help you operate privately and build generational wealth.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#info" className="btn-blue">Request Info</a>
                  <a href="#apply" className="btn-yellow">Apply Now</a>
                </div>

                <h2 className="mt-8 text-2xl font-bold text-white">How Do I Apply?</h2>
                <ol className="mt-4 list-decimal pl-5 space-y-2 text-slate-300">
                  <li>Create your student account.</li>
                  <li>Select one or more courses that match your goals.</li>
                  <li>Complete enrollment and payment.</li>
                  <li>Start learning immediately with guided modules.</li>
                </ol>
              </div>
            </div>

            {/* ❌ REMOVED Register Now (dark blue section) */}

            <div id="info" className="mt-8 grid md:grid-cols-2 gap-6">
              {/* REQUEST INFO — kept white */}
              <div className="bg-white border border-[#829494] rounded-xl p-6">
                <h3 className="font-semibold text-[#315262] text-xl mb-4">Request Info</h3>

                <form
                  className="grid gap-4"
                  onSubmit={async e => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const data = {
                      name: form.name.value,
                      email: form.email.value,
                      interest: form.interest.value
                    };
                    await submit("info", data, setInfoLoading, "Request Info");
                    form.reset();
                  }}
                >
                  <label className="grid gap-1 text-[#315262]">
                    Full Name
                    <input name="name" required className="bg-[#FBFCFC] text-[#315262] border border-[#829494] rounded px-3 py-2" />
                  </label>

                  <label className="grid gap-1 text-[#315262]">
                    Email
                    <input name="email" type="email" required className="bg-[#FBFCFC] text-[#315262] border border-[#829494] rounded px-3 py-2" />
                  </label>

                  <label className="grid gap-1 text-[#315262]">
                    Area of Interest
                    <select name="interest" className="bg-[#FBFCFC] text-[#315262] border border-[#829494] rounded px-3 py-2">
                      <option>Status Corrections</option>
                      <option>Secure Party Creditor</option>
                      <option>Unincorporated Business Trust</option>
                      <option>Credit Optimization</option>
                      <option>Reclaiming Securities & Debt Discharge</option>
                    </select>
                  </label>

                  <button disabled={infoLoading} className="btn-blue mt-2">
                    {infoLoading ? "Submitting..." : "Request Info"}
                  </button>
                </form>

                <p className="mt-4 text-[#EFAB47] text-sm">
                  Submitting this form sends data to the local server.
                </p>
              </div>

              {/* APPLY NOW — CONVERTED TO WHITE (dark blue removed) */}
              <div className="bg-white border border-[#829494] rounded-xl p-6">
                <h3 className="font-semibold text-[#315262] text-xl mb-4">Apply Now</h3>

                <form
                  className="grid gap-4"
                  onSubmit={async e => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const data = {
                      name: form.name.value,
                      email: form.email.value,
                      course: form.course.value
                    };
                    await submit("apply", data, setApplyLoading, "Application");
                    form.reset();
                  }}
                >
                  <label className="grid gap-1 text-[#315262]">
                    Full Name
                    <input name="name" required className="bg-[#FBFCFC] text-[#315262] border border-[#829494] rounded px-3 py-2" />
                  </label>

                  <label className="grid gap-1 text-[#315262]">
                    Email
                    <input name="email" type="email" required className="bg-[#FBFCFC] text-[#315262] border border-[#829494] rounded px-3 py-2" />
                  </label>

                  <label className="grid gap-1 text-[#315262]">
                    Selected Course
                    <select name="course" required className="bg-[#FBFCFC] text-[#315262] border border-[#829494] rounded px-3 py-2">
                      <option>Status Corrections</option>
                      <option>Secure Party Creditor</option>
                      <option>Unincorporated Business Trust</option>
                      <option>Credit Repair & Optimization (Personal)</option>
                      <option>Credit Optimization (Business)</option>
                      <option>Reclaiming Securities & Debt Discharge</option>
                    </select>
                  </label>

                  <button disabled={applyLoading} className="btn-amber mt-2">
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
        </div>
      </section>
    </div>
  );
}