import type { Metadata } from "next";
import Link from "next/link";
import TextReveal from "@/components/animations/TextReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: "Products — NIVEEL LLC",
  description: "Niveel LLC products — coming soon.",
};

export default function ProductsPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,213,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,213,0,0.3) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-[var(--accent)]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <ScrollReveal type="fadeUp" className="mb-4">
          <span className="font-mono text-xs tracking-widest text-[var(--accent)]">WHAT WE&rsquo;RE BUILDING</span>
        </ScrollReveal>

        <TextReveal
          text="PRODUCTS"
          tag="h1"
          className="font-serif text-[clamp(4rem,16vw,16rem)] leading-none mb-8 opacity-20"
          splitBy="chars"
        />

        <ScrollReveal type="fadeUp" delay={0.2} className="mb-4">
          <h2 className="font-serif text-[clamp(1.5rem,3vw,3.5rem)] leading-tight">
            Coming Soon
          </h2>
        </ScrollReveal>

        <ScrollReveal type="fadeUp" delay={0.3} className="mb-10">
          <p className="text-[#999] leading-relaxed max-w-md mx-auto">
            We&rsquo;re cooking up something exciting. Our proprietary products are in active
            development and will be launching soon. Stay tuned.
          </p>
        </ScrollReveal>

        <ScrollReveal type="fadeUp" delay={0.4}>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-mono text-sm tracking-widest border border-white/30 rounded-full px-8 py-3 text-white hover:bg-[var(--accent)] hover:text-[#111111] hover:border-[var(--accent)] transition-all duration-300"
          >
            STAY UPDATED
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
