"use client";

import { useState } from "react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result?.error || "Submission failed.");
      }

      setSubmitted(true);
      form.reset();
    } catch (err: any) {
      setError(err.message || "Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex justify-center font-sans">
      <main className="w-full max-w-6xl p-8 space-y-14">

        {/* HERO */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Xinovee</h1>
          <p className="max-w-3xl mx-auto text-lg opacity-80">
            Xinovee is a security-first healthcare infrastructure support platform
            focused on access governance, audit visibility, and risk clarity.
          </p>
        </section>

        {/* CONTENT GRID */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* ABOUT */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold mb-3">About Xinovee</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Modern healthcare environments rely on complex technical systems
              where access decisions, credential usage, and system activity must
              be clearly understood and defensible.
              <br /><br />
              Xinovee provides visibility into how access is granted and used
              across systems—without disrupting clinical workflows.
              <br /><br />
              The platform supports security, compliance, and risk teams by
              improving audit readiness and access accountability.
            </p>
          </div>

          {/* AI USAGE */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold mb-3">How Xinovee Uses AI</h3>
            <p className="text-sm opacity-80">
              Xinovee uses AI strictly as an assistive capability to interpret
              and summarize approved, sanitized, non-identifiable,
              non-clinical information.
            </p>
            <ul className="list-disc ml-5 mt-3 text-sm opacity-80 space-y-1">
              <li>Summarize observations and findings</li>
              <li>Highlight trends and potential anomalies</li>
              <li>Support reporting and documentation workflows</li>
            </ul>
            <p className="text-sm opacity-80 mt-3">
              AI outputs do not replace human judgment, legal review,
              compliance oversight, or organizational decision-making.
            </p>
          </div>

          {/* PILOT DATA RULES */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold mb-3">Pilot Data Rules</h3>
            <ul className="list-disc ml-5 text-sm opacity-80 space-y-1">
              <li>Non-identifiable, non-clinical data only</li>
              <li>Used solely for the approved pilot scope</li>
              <li>Stored in restricted environments</li>
              <li>Deleted after pilot completion</li>
            </ul>
            <p className="text-sm opacity-80 mt-3">
              Patient identifiers, clinical records, credentials, and PHI are
              not accepted.
            </p>
          </div>

          {/* WHAT WE DO */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold mb-3">Capabilities & Accepted Inputs</h3>

            <p className="text-sm font-medium opacity-80">What Xinovee Does</p>
            <ul className="list-disc ml-5 text-sm opacity-80 space-y-1">
              <li>Analyze access and audit-related metadata</li>
              <li>Identify governance gaps and risk indicators</li>
              <li>Support audit preparation and review workflows</li>
            </ul>

            <p className="text-sm font-medium opacity-80 mt-4">
              What Xinovee Accepts
            </p>
            <ul className="list-disc ml-5 text-sm opacity-80 space-y-1">
              <li>De-identified system and access logs</li>
              <li>Aggregated access activity data</li>
              <li>Policy, control, and governance documentation</li>
            </ul>
          </div>

          {/* CONTACT FORM */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold mb-4 text-center">
              Request a Pilot Conversation
            </h3>

            {submitted ? (
              <p className="text-green-600 text-center text-sm">
                Your request has been received. Xinovee will follow up shortly.
              </p>
            ) : (
              <>
                {error && (
                  <p className="text-red-500 text-center mb-3 text-sm">
                    {error}
                  </p>
                )}

                <form
                  action="https://formspree.io/f/xgoedbdg"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-3"
                >
                  <input
                    name="name"
                    required
                    aria-label="Contact name"
                    placeholder="Contact name"
                    className="w-full rounded-lg px-4 py-2 bg-black/20 border border-white/10"
                  />

                  <input
                    name="organization"
                    required
                    aria-label="Organization name"
                    placeholder="Organization name"
                    className="w-full rounded-lg px-4 py-2 bg-black/20 border border-white/10"
                  />

                  <input
                    type="email"
                    name="email"
                    required
                    aria-label="Work email"
                    placeholder="Work email"
                    className="w-full rounded-lg px-4 py-2 bg-black/20 border border-white/10"
                  />

                  <textarea
                    name="message"
                    required
                    rows={3}
                    aria-label="Pilot use case description"
                    placeholder="Briefly describe your pilot use case (no PHI)"
                    className="w-full rounded-lg px-4 py-2 bg-black/20 border border-white/10"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-full px-6 py-2 font-semibold bg-white text-black disabled:opacity-50"
                  >
                    {loading ? "Sending…" : "Request Pilot Conversation"}
                  </button>
                </form>

                <p className="mt-3 text-xs text-center opacity-70">
                  Do not submit patient data, credentials, or protected health
                  information (PHI). Xinovee accepts non-identifiable,
                  non-clinical information only.
                </p>
              </>
            )}
          </div>

          {/* HIPAA */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold mb-3">Xinovee & HIPAA</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Xinovee supports HIPAA Security Rule objectives by reinforcing
              access accountability, audit visibility, and governance practices.
              <br /><br />
              Xinovee is not a covered entity or business associate, does not
              process protected health information (PHI), and does not certify
              or guarantee HIPAA compliance. Xinovee does not replace an
              organization’s legal, compliance, or regulatory obligations.
            </p>
          </div>

        </section>

        {/* FOOTER */}
        <footer className="text-center text-sm opacity-60">
          Washington, D.C.
        </footer>

      </main>
    </div>
  );
}
