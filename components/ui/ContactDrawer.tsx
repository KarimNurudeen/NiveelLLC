"use client";

import { useEffect, useRef, useState } from "react";
import { X, Send, CheckCircle } from "lucide-react";
import { gsap } from "@/lib/gsap";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ContactDrawer({ open, onClose }: Props) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const drawer = drawerRef.current;
    const backdrop = backdropRef.current;
    if (!drawer || !backdrop) return;

    if (open) {
      gsap.to(drawer, { x: "0%", duration: 0.5, ease: "power4.inOut", pointerEvents: "all" });
      gsap.to(backdrop, { opacity: 1, duration: 0.35, pointerEvents: "all" });
    } else {
      gsap.to(drawer, { x: "100%", duration: 0.4, ease: "power3.inOut", pointerEvents: "none" });
      gsap.to(backdrop, { opacity: 0, duration: 0.3, pointerEvents: "none" });
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    // Simulate send — replace with real API call when ready
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1200);
  }

  function handleClose() {
    onClose();
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 500);
  }

  return (
    <>
      {/* Backdrop */}
      <div
        ref={backdropRef}
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm opacity-0"
        style={{ pointerEvents: "none" }}
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="fixed top-0 right-0 h-full w-full max-w-lg bg-[#111111] border-l border-white/10 z-50 flex flex-col"
        style={{ transform: "translateX(100%)", pointerEvents: "none" }}
        role="dialog"
        aria-label="Contact form"
      >
        {/* Header */}
        <div className="flex items-start justify-between px-8 py-7 border-b border-white/10 shrink-0">
          <div>
            <span className="font-mono text-[10px] tracking-widest text-[var(--accent)] block mb-1">
              GET IN TOUCH
            </span>
            <h2 className="font-serif text-2xl text-white leading-tight">
              Send Us a Message
            </h2>
            <p className="text-[#999] text-sm mt-1 leading-snug">
              We respond within one business day.
            </p>
          </div>
          <button
            onClick={handleClose}
            className="w-9 h-9 border border-white/20 flex items-center justify-center text-white hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200 shrink-0 mt-1"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-8 py-8">
          {sent ? (
            /* ── Success state ── */
            <div className="flex flex-col items-center justify-center h-full text-center gap-6">
              <CheckCircle className="w-16 h-16 text-[var(--accent)]" />
              <div>
                <h3 className="font-serif text-2xl text-white mb-2">Message Sent!</h3>
                <p className="text-[#999] leading-relaxed">
                  Thanks, {form.name.split(" ")[0]}. We&rsquo;ll get back to you at{" "}
                  <span className="text-white">{form.email}</span> shortly.
                </p>
              </div>
              <button
                onClick={handleClose}
                className="font-mono text-xs tracking-widest border border-white/30 rounded-full px-6 py-2.5 text-white hover:bg-white hover:text-[#111111] transition-all duration-300 mt-2"
              >
                CLOSE
              </button>
            </div>
          ) : (
            /* ── Form ── */
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] tracking-widest text-[#999]">
                  YOUR FULL NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="bg-transparent border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[var(--accent)] transition-colors duration-200"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] tracking-widest text-[#999]">
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="bg-transparent border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[var(--accent)] transition-colors duration-200"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] tracking-widest text-[#999]">
                  WHAT&rsquo;S ON YOUR MIND?
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, question, or idea..."
                  required
                  rows={6}
                  className="bg-transparent border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[var(--accent)] transition-colors duration-200 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={sending}
                className="flex items-center justify-center gap-2 font-mono text-sm tracking-widest bg-[var(--accent)] text-[#111111] rounded-full px-8 py-4 hover:bg-white transition-colors duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed mt-2"
              >
                {sending ? (
                  <>
                    <span className="w-4 h-4 border-2 border-[#111111]/30 border-t-[#111111] rounded-full animate-spin" />
                    SENDING…
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    SEND MESSAGE
                  </>
                )}
              </button>

              {/* Contact alternatives */}
              <div className="border-t border-white/10 pt-6 flex flex-col gap-2">
                <span className="font-mono text-[10px] tracking-widest text-[#999] mb-1">
                  OR REACH US DIRECTLY
                </span>
                <a
                  href="mailto:adm@niveel.com"
                  className="text-white/60 text-sm hover:text-[var(--accent)] transition-colors duration-200"
                >
                  adm@niveel.com
                </a>
                <a
                  href="tel:+19084168408"
                  className="text-white/60 text-sm hover:text-[var(--accent)] transition-colors duration-200"
                >
                  (908) 416-8408
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
