"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://formspree.io/f/xqapnjab", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0f1e] text-white font-sans">
      {/* Nav */}
      <nav className="border-b border-white/10 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight text-white">
            Goffer <span className="text-blue-400">AI</span>
          </span>
          <span className="text-sm text-gray-400">Early Access</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-widest">
          Built for Policy Professionals
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
          Congressional intelligence,
          <br />
          <span className="text-blue-400">your documents</span>,{" "}
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            one conversation.
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Goffer AI is the AI assistant for policy researchers and government affairs
          professionals — giving you instant access to legislative intelligence, bill
          analysis, and your own documents in a single, secure chat.
        </p>

        {/* Email Capture */}
        <div className="max-w-md mx-auto">
          {submitted ? (
            <div className="rounded-xl bg-blue-500/10 border border-blue-500/30 px-6 py-5 text-center">
              <p className="text-blue-300 font-semibold text-lg mb-1">You&apos;re on the list!</p>
              <p className="text-gray-400 text-sm">
                We&apos;ll reach out with early access details soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                required
                className="flex-1 rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={loading}
                className="rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-60 px-6 py-3 font-semibold text-white transition-colors whitespace-nowrap"
              >
                {loading ? "Joining..." : "Join Waitlist"}
              </button>
            </form>
          )}
          {error && <p className="mt-3 text-red-400 text-sm">{error}</p>}
          {!submitted && (
            <p className="mt-3 text-gray-500 text-xs">
              No credit card. No spam. Just early access.
            </p>
          )}
        </div>
      </section>

      {/* Problem */}
      <section className="border-t border-white/5 bg-white/[0.02] px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Policy research is still painfully manual
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            You spend hours cross-referencing bills, committee reports, and agency
            filings — while your documents live in silos that no AI tool can touch.
            Goffer AI changes that.
          </p>
          <div className="grid sm:grid-cols-3 gap-8 text-left">
            {problems.map((p) => (
              <div key={p.title} className="rounded-xl bg-white/5 border border-white/10 p-6">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-gray-400">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything a policy professional needs
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4 rounded-xl bg-white/[0.03] border border-white/10 p-6">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 text-xl">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{f.title}</h3>
                  <p className="text-sm text-gray-400">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="border-t border-white/5 bg-white/[0.02] px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-8 font-semibold">
            Built for teams at
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-gray-500 font-semibold">
            {["Think Tanks", "Lobbying Firms", "Congressional Offices", "State Agencies", "Law Firms"].map(
              (org) => (
                <span key={org} className="text-sm">
                  {org}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Be among the first to access Goffer AI
          </h2>
          <p className="text-gray-400 mb-8">
            We&apos;re onboarding a limited cohort of policy professionals. Secure your
            spot on the waitlist today.
          </p>
          {submitted ? (
            <div className="rounded-xl bg-blue-500/10 border border-blue-500/30 px-6 py-5 text-center inline-block">
              <p className="text-blue-300 font-semibold">You&apos;re already on the list!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                required
                className="flex-1 rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={loading}
                className="rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-60 px-6 py-3 font-semibold text-white transition-colors whitespace-nowrap"
              >
                {loading ? "Joining..." : "Join Waitlist"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
        <p>© 2026 Goffer AI. All rights reserved.</p>
        <p className="mt-1">— The Goffer AI team</p>
      </footer>
    </main>
  );
}

const problems = [
  {
    icon: "🔍",
    title: "Too many sources",
    body: "Bills, markups, committee reports, CRS summaries — no single tool synthesizes them for you.",
  },
  {
    icon: "🗂️",
    title: "Documents stay siloed",
    body: "Your proprietary memos, filings, and analysis can't be queried alongside public legislative data.",
  },
  {
    icon: "⏳",
    title: "Hours lost to research",
    body: "Staff and analysts spend the majority of their week on research that should take minutes.",
  },
];

const features = [
  {
    icon: "🏛️",
    title: "Congressional Intelligence",
    body: "Search bills, votes, committee activity, and member records across Congress — powered by real-time legislative data.",
  },
  {
    icon: "📄",
    title: "Document Chat",
    body: "Upload your own memos, filings, and reports. Goffer AI reads them alongside public data so context is never lost.",
  },
  {
    icon: "💬",
    title: "Conversational Research",
    body: "Ask follow-up questions, drill down into specifics, and get cited answers — no SQL, no complex queries.",
  },
  {
    icon: "🔐",
    title: "Secure & Private",
    body: "Your documents stay yours. Enterprise-grade security keeps proprietary analysis private.",
  },
];
