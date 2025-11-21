import React from "react"

export default function About() {
  return (
    <div>
      <section className="hero-gradient border-b border-slate-700">
        <div
  className="vision-section"
  style={{
    backgroundImage: "url('/images/vision.jpg')",
  }}
>
  <h1 className="text-3xl font-bold">Vision & Mission</h1>
  <p>
    Empowering individuals to operate privately and build lasting generational wealth
    through education.
  </p>
</div>

      </section>
      <section className="section about-bg">
        <h2 className="text-2xl font-semibold">Company Vision & Mission</h2>
        <div className="mt-6 aside-card">
          <p>To educate individuals on how to become private and gain generational wealth through our courses. Our subjects are status corrections, secure party creditor, building unincorporated business trust, repairing and optimizing personal and business credit profiles. Reclaiming your securities and debt discharge.</p>
          <p className="mt-2">Becoming private gives the freedom to live and operate within the public statutory laws, policies, regulations and free from taxation.</p>
        </div>
        <h2 className="mt-8 text-2xl font-semibold">Our Approach</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <div className="aside-card">
            <h3 className="font-semibold">Learn</h3>
            <p>Step‑by‑step, self‑paced modules with templates, checklists, and case studies.</p>
          </div>
          <div className="aside-card">
            <h3 className="font-semibold">Apply</h3>
            <p>Guided documentation practices, compliance awareness, and review workflows.</p>
          </div>
          <div className="aside-card">
            <h3 className="font-semibold">Thrive</h3>
            <p>Privacy‑focused operations and long‑term planning for wealth preservation.</p>
          </div>
        </div>
        <h2 className="mt-8 text-2xl font-semibold">Core Values</h2>
        <ul className="mt-2 space-y-2">
          <li><strong>Privacy</strong> — Protect personal and organizational information.</li>
          <li><strong>Compliance</strong> — Operate responsibly within applicable laws and regulations.</li>
          <li><strong>Empowerment</strong> — Provide clear, actionable guidance.</li>
          <li><strong>Integrity</strong> — Teach practices grounded in ethics and transparency.</li>
        </ul>
        <div className="mt-6 bg-amber-900/40 border border-amber-700 rounded-xl p-4">
          <p className="text-amber-200">Important: This platform provides education only. Statements about taxation or legal status vary by jurisdiction; consult licensed professionals and follow all laws.</p>
        </div>
      </section>
    </div>
  )
}