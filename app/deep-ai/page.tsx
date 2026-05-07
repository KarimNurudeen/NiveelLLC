import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import MagneticButton from "@/components/animations/MagneticButton";

export const metadata: Metadata = {
  title: "Deep AI — NIVEEL LLC",
  description: "AI-powered solutions and intelligent bookkeeping by Niveel LLC.",
};

const AI_SERVICES = [
  {
    title: "Automated Bookkeeping",
    desc: "AI-driven transaction categorization, reconciliation, and reporting that eliminates manual data entry.",
  },
  {
    title: "Financial Data Analysis",
    desc: "Pattern recognition and anomaly detection across your financial data — surfacing insights in real time.",
  },
  {
    title: "Intelligent Document Processing",
    desc: "Extract, classify, and structure data from invoices, receipts, and contracts at scale.",
  },
  {
    title: "Predictive Business Analytics",
    desc: "Forecasting models tailored to your business — cash flow, demand, churn, and more.",
  },
];

export default function DeepAIPage() {
  return (
    <>
      {/* ─── Breadcrumb ─── */}
      <div className="pt-24 pb-0 px-6 max-w-7xl mx-auto flex items-center gap-3">
        <Link
          href="/"
          className="font-mono text-xs tracking-widest text-white/40 hover:text-white transition-colors"
        >
          ← BACK
        </Link>
        <span className="text-white/20">/</span>
        <span className="font-mono text-xs tracking-widest text-[var(--accent)]">
          AI & BOOKKEEPING SOLUTIONS
        </span>
      </div>

      {/* ─── Main content ─── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <ScrollReveal type="clipBottom" className="mb-6">
              <h1 className="font-serif text-[clamp(2.5rem,5vw,6rem)] leading-tight">
                AI-Powered Diagnostics
              </h1>
            </ScrollReveal>

            <ScrollReveal type="fadeUp" delay={0.1} className="mb-12">
              <p className="text-[#999] leading-relaxed text-lg">
                We make artificial intelligence practical. Our deep AI services connect
                state-of-the-art language models and machine learning pipelines directly to
                your business operations — removing friction, surfacing insight, and
                automating the repetitive.
              </p>
            </ScrollReveal>

            {/* Service items */}
            <div className="grid grid-cols-1 gap-3 mb-12">
              {AI_SERVICES.map((s, i) => (
                <ScrollReveal key={s.title} type="fadeUp" delay={i * 0.08}>
                  <div className="border border-white/10 rounded-xl p-5 hover:bg-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">{s.title}</h3>
                      <p className="text-[#999] text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal type="fadeUp" delay={0.4}>
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-mono text-sm tracking-widest bg-[var(--accent)] text-[#111111] rounded-full px-8 py-4 hover:bg-white transition-colors duration-300 font-semibold"
                >
                  START A PROJECT <ArrowRight className="w-4 h-4" />
                </Link>
              </MagneticButton>
            </ScrollReveal>
          </div>

          {/* Right — image */}
          <ScrollReveal type="scaleIn" className="relative h-64 md:h-[450px] lg:h-[700px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80"
              alt="AI visualization"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/60 via-transparent to-purple-900/60" />
            {/* Dot pattern */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: "radial-gradient(circle, var(--accent) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Stats strip ─── */}
      <section className="bg-[#1A1A1A] py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { value: "40%", label: "Average cost reduction" },
            { value: "10×", label: "Faster document processing" },
            { value: "99.9%", label: "Data accuracy rate" },
          ].map((stat, i) => (
            <ScrollReveal key={stat.label} type="fadeUp" delay={i * 0.1}>
              <div className="font-serif text-[clamp(2.5rem,5vw,5rem)] leading-none text-[var(--accent)] mb-2">
                {stat.value}
              </div>
              <div className="font-mono text-xs tracking-widest text-[#999]">{stat.label}</div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
