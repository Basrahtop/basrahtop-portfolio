"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "./SectionReveal";

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/devbasrahtop/", icon: "in" },
  { label: "GitHub",   href: "https://github.com/basrahtop",             icon: "gh" },
  { label: "X / Twitter", href: "https://x.com/Basrahtop",              icon: "x"  },
];

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [form, setForm]     = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputClass = (name: string) =>
    `w-full bg-transparent border-b py-4 font-body text-text-1 placeholder-text-3 outline-none transition-colors duration-300 text-lg ${
      focused === name ? "border-accent" : "border-white/10"
    }`;

  return (
    <section id="contact" className="section-padding bg-canvas relative overflow-hidden">

      {/* Background accent glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[30vh] bg-accent opacity-[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <SectionReveal>
          <p className="font-display text-accent tracking-[0.3em] text-xs uppercase mb-6 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-accent" />
            Contact
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — copy */}
          <div>
            <SectionReveal delay={0.1}>
              <h2 className="font-display text-display-md font-bold text-text-1 leading-tight mb-6">
                Let&apos;s build something{" "}
                <span className="text-accent italic font-body font-normal">together</span>
              </h2>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <p className="font-body text-text-2 text-lg leading-relaxed mb-10">
              Whether you have a project in mind, want to collaborate, or just want to say hello —{" "}
              my inbox is always open. I&apos;ll get back to you within 24 hours.
              </p>
            </SectionReveal>

            {/* Email */}
            <SectionReveal delay={0.25}>
              <a
                href="mailto:devbasrahtop@gmail.com"
                data-cursor="EMAIL"
                className="inline-flex items-center gap-3 font-display text-xl font-semibold text-text-1 hover:text-accent transition-colors duration-200 mb-12 group"
              >
                devbasrahtop@gmail.com
                <svg className="w-5 h-5 text-accent transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </SectionReveal>

            {/* Social links */}
            <SectionReveal delay={0.3}>
              <div className="flex items-center gap-4">
                {SOCIALS.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor={label.toUpperCase()}
                    className="w-11 h-11 border border-white/10 hover:border-accent flex items-center justify-center font-display text-xs font-bold text-text-2 hover:text-accent transition-all duration-200 uppercase"
                    aria-label={label}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </SectionReveal>
          </div>

          {/* Right — form */}
          <SectionReveal delay={0.15} direction="right">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  required
                  className={inputClass("name")}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  required
                  className={inputClass("email")}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={form.message}
                  required
                  rows={5}
                  className={`${inputClass("message")} resize-none`}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <motion.button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-cursor="SEND"
                  className="relative w-full md:w-auto px-12 py-4 bg-accent text-canvas font-display font-bold text-sm tracking-widest uppercase disabled:opacity-60 overflow-hidden"
                >
                  <AnimatePresence mode="wait">
                    {status === "idle" && (
                      <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        Send Message
                      </motion.span>
                    )}
                    {status === "sending" && (
                      <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        Sending…
                      </motion.span>
                    )}
                    {status === "sent" && (
                      <motion.span key="sent" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                        ✓ Message Sent!
                      </motion.span>
                    )}
                    {status === "error" && (
                      <motion.span key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        Try Again
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </form>
          </SectionReveal>
        </div>

        {/* Footer */}
        <SectionReveal delay={0.3}>
          <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-text-3 text-sm font-body">
            <p>© {new Date().getFullYear()} Abdulbasit Adigun. All rights reserved.</p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
