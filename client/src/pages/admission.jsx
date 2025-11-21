import React, { useState } from "react"

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
            <div className="admission-hero">
              <div className="admission-overlay">
                <h1 className="text-3xl font-bold">Online Admission</h1>
                <p>Enroll in self‑paced programs designed to help you operate privately and build generational wealth.</p>
                <div className="mt-3 flex gap-2">
                  <a href="#info" className="btn-blue">Request Info</a>
                  <a href="#apply" className="btn-yellow">Apply Now</a>
                </div>
              </div>
            </div>

            <h2 className="mt-6 heading-accent">How Do I Apply?</h2>
            <ol className="mt-2 list-decimal ml-6 space-y-1">
              <li>Create your student account.</li>
              <li>Select one or more courses that match your goals.</li>
              <li>Complete enrollment and payment.</li>
              <li>Start learning immediately with guided modules.</li>
            </ol>

            <div id="info" className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                <h3 className="font-semibold">Request Info</h3>
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
                  <label className="grid gap-1">Full Name<input name="name" required className="bg-slate-900 text-gray-200 border border-slate-700 rounded px-3 py-2" /></label>
                  <label className="grid gap-1">Email<input name="email" type="email" required className="bg-slate-900 text-gray-200 border border-slate-700 rounded px-3 py-2" /></label>
                  <label className="grid gap-1">Area of Interest
                    <select name="interest" className="bg-slate-900 text-gray-200 border border-slate-700 rounded px-3 py-2">
                      <option>Status Corrections</option>
                      <option>Secure Party Creditor</option>
                      <option>Unincorporated Business Trust</option>
                      <option>Credit Optimization</option>
                      <option>Reclaiming Securities & Debt Discharge</option>
                    </select>
                  </label>
                  <button disabled={infoLoading} className="btn-blue">{infoLoading ? "Submitting..." : "Request Info"}</button>
                </form>
                <p className="mt-2 text-amber-200 text-sm">Submitting this form sends data to the local server.</p>
              </div>

              <div id="apply" className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                <h3 className="font-semibold">Apply Now</h3>
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
                  <label className="grid gap-1">Full Name<input name="name" required className="bg-slate-900 text-gray-200 border border-slate-700 rounded px-3 py-2" /></label>
                  <label className="grid gap-1">Email<input name="email" type="email" required className="bg-slate-900 text-gray-200 border border-slate-700 rounded px-3 py-2" /></label>
                  <label className="grid gap-1">Selected Course
                    <select name="course" required className="bg-slate-900 text-gray-200 border border-slate-700 rounded px-3 py-2">
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

            <div className="mt-6 bg-amber-900/40 border border-amber-700 rounded-xl p-4">
              <p className="text-amber-200">Educational disclaimer: Enrollment provides access to educational materials only. It does not constitute legal, financial, or tax advice.</p>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="aside-card">
              <div className="aside-title">Online Admission</div>
              <ul className="space-y-1">
                <li><a href="#" className="aside-link">How to Apply Online</a></li>
                <li><a href="#" className="aside-link">Term Start Dates</a></li>
              </ul>
            </div>
            <div className="aside-card">
              <div className="aside-title">Contact Us</div>
              <p className="text-sm">Online Admission</p>
              <p className="text-sm">📞 888.327.SNHU</p>
              <p className="text-sm">✉️ enroll@snhu.edu</p>
            </div>
            <div className="aside-card">
              <div className="aside-title">Find Your Program</div>
              <select className="aside-select mb-2">
                <option>Select a Degree Level</option>
                <option>Foundational</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
              <select className="aside-select mb-2">
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