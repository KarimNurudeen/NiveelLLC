import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";

export const metadata: Metadata = {
  title: "Services — NIVEEL LLC",
  description: "Explore the full range of digital services offered by Niveel LLC.",
};

const SERVICES = [
  {
    number: "01",
    title: "Web Development",
    desc: "Fast, accessible, beautifully crafted web applications — from marketing sites to complex SaaS platforms.",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80",
    bg: "#0D1117",
    id: "web-development",
  },
  {
    number: "02",
    title: "Cloud Solutions",
    desc: "Infrastructure that scales with you. We design, migrate, and manage cloud architectures on AWS, GCP, and Azure.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    bg: "#1B3A2D",
    id: "cloud-solutions",
  },
  {
    number: "03",
    title: "UI/UX Design",
    desc: "Research-led design that converts and delights. Interfaces as intuitive as they are visually striking.",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
    bg: "#1A2744",
    id: "ui-ux-design",
  },
  {
    number: "04",
    title: "Mobile Apps",
    desc: "Native iOS and Android, or cross-platform with Flutter and React Native. Experiences users keep coming back to.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
    bg: "#1A2744",
    id: "mobile-apps",
  },
  {
    number: "05",
    title: "Game Development",
    desc: "Game systems, prototypes, and production-ready experiences for studios and interactive products.",
    img: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&q=80",
    bg: "#1A3A5C",
    id: "game-development",
  },
  {
    number: "06",
    title: "E-Commerce",
    desc: "High-converting storefronts on Shopify, WooCommerce, or fully custom — built to sell.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    bg: "#2D1B4E",
    id: "e-commerce",
  },
  {
    number: "07",
    title: "AI Solutions",
    desc: "Practical AI — LLMs, computer vision, and predictive models integrated into your workflows to create real value.",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80",
    bg: "#0F1A2E",
    id: "ai",
  },
  {
    number: "08",
    title: "Research",
    desc: "User research, competitive analysis, and market sizing that de-risk your product decisions.",
    img: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=1200&q=80",
    bg: "#1A0F2E",
    id: "research",
  },
  {
    number: "09",
    title: "Bookkeeping",
    desc: "Daily, monthly, quarterly, and annual bookkeeping services for small and medium-sized firms in North America and Europe — ensuring accurate financial records and peace of mind for business owners.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
    bg: "#111827",
    id: "bookkeeping",
  },
  {
    number: "10",
    title: "Taxation",
    desc: "Individual and corporate tax solutions in North America, including tax return preparation for citizens living abroad — helping clients navigate complex tax laws with ease.",
    img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&q=80",
    bg: "#1A1A2E",
    id: "taxation",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#F5F5F5] text-[#111111] min-h-screen">
      {/* ─── Header ─── */}
      <div className="pt-28 pb-0 px-8 lg:px-16 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-mono text-xs tracking-widest text-[#111111]/50 hover:text-[#111111] transition-colors">
            ← BACK
          </Link>
        </div>
        <Link
          href="/contact"
          className="font-mono text-xs tracking-widest border border-[#111111]/30 px-5 py-2 text-[#111111] hover:bg-[#111111] hover:text-white transition-all duration-300"
        >
          HIRE US
        </Link>
      </div>

      {/* ─── Title ─── */}
      <section className="px-8 lg:px-16 pt-10 pb-16 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
          <ScrollReveal type="clipBottom">
            <h1 className="font-serif text-[clamp(2.5rem,6vw,7rem)] leading-none text-[#111111]">
              Our Company<br />Service!
            </h1>
          </ScrollReveal>
          <ScrollReveal type="fadeUp" delay={0.1}>
            <p className="text-[#666] leading-relaxed max-w-md">
              From bookkeeping and taxation to software development — everything you need under
              one roof. We save you time and money so you can focus on what matters most.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Service Cards ─── */}
      <div className="px-8 lg:px-16 pb-24 flex flex-col gap-6">
        {SERVICES.map((service, i) => (
          <ScrollReveal key={service.id} type="fadeUp" delay={0.05 * (i % 3)}>
            <div
              id={service.id}
              className="rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 lg:min-h-[340px]"
              style={{ backgroundColor: service.bg }}
            >
              {/* Text side */}
              <div className="flex flex-col justify-between p-8 lg:p-10">
                <div>
                  {/* Number badge */}
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 font-mono text-xs text-white/50 mb-6">
                    {service.number}
                  </span>

                  <h2 className="font-serif text-[clamp(1.8rem,3vw,3rem)] leading-tight text-white mb-4">
                    {service.title}
                  </h2>

                  <p className="text-white/60 leading-relaxed text-sm max-w-xs">
                    {service.desc}
                  </p>
                </div>

                <Link
                  href={`/contact`}
                  className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-white/70 hover:text-white transition-colors duration-200 group mt-8 w-fit"
                >
                  LEARN MORE
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>

              {/* Image side */}
              <div className="relative min-h-[240px] lg:min-h-0">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                {/* Gradient bleed into text side */}
                <div
                  className="absolute inset-y-0 left-0 w-24 hidden lg:block"
                  style={{
                    background: `linear-gradient(to right, ${service.bg}, transparent)`,
                  }}
                />
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* ─── CTA ─── */}
      <section className="border-t border-[#111111]/10 py-24 px-8 lg:px-16 text-center">
        <ScrollReveal type="clipBottom" className="mb-8">
          <h2 className="font-serif text-[clamp(2rem,5vw,6rem)] leading-none text-[#111111]">
            READY TO START?
          </h2>
        </ScrollReveal>
        <ScrollReveal type="fadeUp" delay={0.2}>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-mono text-sm tracking-widest bg-[#111111] text-white px-8 py-4 hover:bg-[var(--accent)] hover:text-[#111111] transition-all duration-300"
          >
            GET IN TOUCH <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
