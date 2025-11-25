import React, { useState } from "react"
import admissionImg from "../assets/online-admission.jpg"

export default function Admission() {
  const [infoLoading, setInfoLoading] = useState(false)
  const [applyLoading, setApplyLoading] = useState(false)

  async function submit(path, formData, setLoading, label) {
    try {
      setLoading(true)
      const res = await fetch(`http://localhost:4000/api/${path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })
      const ok = res.ok
      alert(`${label} submitted${ok ? "" : " (server error)"}.`)
    } catch {
      alert(`${label} failed. Check server.`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <section className="section">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div 
              className="admission-hero"
              style={{
                backgroundImage: `url(${admissionImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            >
              <div className="admission-overlay">
                <h1 className="text-3xl font-bold text-white p-2">Online Admission</h1>
                <p className="text-[#FBFCFC] p-2">Enroll in self‑paced programs designed to help you operate privately and build generational wealth.</p>
                <div className="mt-1 flex gap-2">
                  <a href="#info" className="btn-blue">Request Info</a>
                  <a href="#apply" className="btn-yellow">Apply Now</a>
                </div>
                 <h2 className="mt-6 heading-accent text-white p-2">How Do I Apply?</h2>
            <ol className="mt-2 list-decimal ml-2 space-y-1 text-white">
              <li>Create your student account.</li>
              <li>Select one or more courses that match your goals.</li>
              <li>Complete enrollment and payment.</li>
              <li>Start learning immediately with guided modules.</li>
            </ol>
              </div>
            </div>

            <div id="info" className="mt-4 grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-[#829494] rounded-xl p-4">
                <h3 className="font-semibold text-[#315262]">Request Info</h3>
                <form
                  className="grid gap-3"
                  onSubmit={async e => {
                    e.preventDefault()
                    const form = e.currentTarget
                    const data = { name: form.name.value, email: form.email.value, interest: form.interest.value }
                    await submit("info", data, setInfoLoading, "Request Info")
                    form.reset()
                  }}
                >
                  <label className="grid gap-1 text-[#315262]">Full Name<input name="name" required className="bg-[#FBFCFC] text-[#315262] border border-[#829494] rounded px-3 py-2" /></label>
                  <label className="grid gap-1 text-[#315262]">Email<input name="email" type="email" required className="bg-[#FBFCFC] text-[#315262] border border-[#829494] rounded px-3 py-2" /></label>
                  <label className="grid gap-1 text-[#315262]">Area of Interest
                    <select name="interest" className="bg-[#FBFCFC] text-[#315262] border border-[#829494] rounded px-3 py-2">
                      <option>Status Corrections</option>
                      <option>Secure Party Creditor</option>
                      <option>Unincorporated Business Trust</option>
                      <option>Credit Optimization</option>
                      <option>Reclaiming Securities & Debt Discharge</option>
                    </select>
                  </label>
                  <button disabled={infoLoading} className="btn-blue">{infoLoading ? "Submitting..." : "Request Info"}</button>
                </form>
                <p className="mt-2 text-[#EFAB47] text-sm">Submitting this form sends data to the local server.</p>
              </div>

              <div id="apply" className="bg-white border border-[#829494] rounded-xl p-4">
                <h3 className="font-semibold text-[#315262]">Apply Now</h3>
                <form
                  className="grid gap-3"
                  onSubmit={async e => {
                    e.preventDefault()
                    const form = e.currentTarget
                    const data = { name: form.name.value, email: form.email.value, course: form.course.value }
                    await submit("apply", data, setApplyLoading, "Application")
                    form.reset()
                  }}
                >
                  <label className="grid gap-1 text-[#315262]">Full Name<input name="name" required className="bg-[#FBFCFC] text-[#315262] border border-[#829494] rounded px-3 py-2" /></label>
                  <label className="grid gap-1 text-[#315262]">Email<input name="email" type="email" required className="bg-[#FBFCFC] text-[#315262] border border-[#829494] rounded px-3 py-2" /></label>
                  <label className="grid gap-1 text-[#315262]">Selected Course
                    <select name="course" required className="bg-[#FBFCFC] text-[#315262] border border-[#829494] rounded px-3 py-2">
                      <option>Status Corrections</option>
                      <option>Secure Party Creditor</option>
                      <option>Unincorporated Business Trust</option>
                      <option>Credit Repair & Optimization (Personal)</option>
                      <option>Credit Optimization (Business)</option>
                      <option>Reclaiming Securities & Debt Discharge</option>
                    </select>
                  </label>
                  <button disabled={applyLoading} className="btn-amber">{applyLoading ? "Submitting..." : "Submit Application"}</button>
                </form>
              </div>
            </div>

            <div className="mt-6 bg-[#EFAB47]/20 border border-[#EFAB47] rounded-xl p-4">
              <p className="text-[#315262]">Educational disclaimer: Enrollment provides access to educational materials only. It does not constitute legal, financial, or tax advice.</p>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="bg-white border border-[#829494] rounded-lg p-4">
              <div className="font-semibold text-[#315262] mb-2">Online Admission</div>
              <ul className="space-y-1">
                <li><a href="#" className="text-[#315262] hover:text-[#EFAB47] transition">How to Apply Online</a></li>
                <li><a href="#" className="text-[#315262] hover:text-[#EFAB47] transition">Term Start Dates</a></li>
              </ul>
            </div>
            <div className="bg-white border border-[#829494] rounded-lg p-4">
              <div className="font-semibold text-[#315262] mb-2">Contact Us</div>
              <p className="text-sm text-[#315262]">Online Admission</p>
              <p className="text-sm text-[#315262]">📞 888.327.SNHU</p>
              <p className="text-sm text-[#315262]">✉️ enroll@snhu.edu</p>
            </div>
            <div className="bg-white border border-[#829494] rounded-lg p-4">
              <div className="font-semibold text-[#315262] mb-2">Find Your Program</div>
              <select className="w-full bg-[#FBFCFC] text-[#315262] border border-[#829494] rounded px-3 py-2 mb-2">
                <option>Select a Degree Level</option>
                <option>Foundational</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
              <select className="w-full bg-[#FBFCFC] text-[#315262] border border-[#829494] rounded px-3 py-2 mb-2">
                <option>All Categories</option>
                <option>Legal Foundations</option>
                <option>Business Structures</option>
                <option>Credit</option>
                <option>Securities & Finance</option>
              </select>
              <a className="btn-yellow block text-center" href="/courses">Find Program</a>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}