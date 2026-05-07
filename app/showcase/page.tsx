import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";

export const metadata: Metadata = {
  title: "Showcase — NIVEEL LLC",
  description: "Selected works from Niveel LLC.",
};

const PROJECTS = [
  {
    number: "01",
    title: "OnnOn",
    subtitle: "VIDEO CONFERENCING — MOBILE & DESKTOP",
    desc: "A video conferencing app designed for smooth meetings, classes, and team calls. OnnOn delivers reliable audio/video controls, screen sharing, waiting rooms, and meeting history — built for modern remote work and education.",
    images: [
      { src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1200&q=80", ratio: "aspect-[4/3]", position: "object-center" },
      { src: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80", ratio: "aspect-[4/3]", position: "object-center" },
      { src: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=800&q=80", ratio: "aspect-[4/3]", position: "object-center" },
    ],
  },
  {
    number: "02",
    title: "Cafa AI",
    subtitle: "AI CHAT PLATFORM — WEB & MOBILE",
    desc: "A ChatGPT-style AI assistant for chatting, content generation, and everyday task help. Built around fast streaming responses, conversation history, prompt templates, multi-language support, and synced accounts across devices.",
    images: [
      { src: "/screenshots/cafa-ai-chat.jpg", ratio: "aspect-[4/3]", position: "object-top" },
      { src: "/screenshots/cafa-ai-models.jpg", ratio: "aspect-[4/3]", position: "object-top" },
      { src: "/screenshots/cafa-ai-history.jpg", ratio: "aspect-[4/3]", position: "object-top" },
    ],
  },
  {
    number: "03",
    title: "Cafa Tickets",
    subtitle: "EVENTS & TICKETING PLATFORM — WEB & MOBILE",
    desc: "An event discovery and ticketing platform for organizers and attendees alike. Features QR-based entry validation, real-time availability, promo codes, organizer dashboards, and a clean mobile-first experience for local and diaspora users.",
    images: [
      { src: "/screenshots/cafa-tickets-home.png", ratio: "aspect-[4/3]", position: "object-top" },
      { src: "/screenshots/cafa-tickets-payments.png", ratio: "aspect-[4/3]", position: "object-top" },
      { src: "/screenshots/cafa-tickets-home.png", ratio: "aspect-[4/3]", position: "object-center" },
    ],
  },
];

export default function ShowcasePage() {
  return (
    <div className="bg-[#F5F5F5] text-[#111111] min-h-screen">
      {/* ─── Header ─── */}
      <div className="pt-28 pb-0 px-8 lg:px-16 flex items-center gap-4">
        <Link href="/" className="font-mono text-xs tracking-widest text-[#111111]/50 hover:text-[#111111] transition-colors">
          ← BACK
        </Link>
        <span className="font-mono text-xs tracking-widest text-[#111111]/40">/</span>
        <span className="font-mono text-xs tracking-widest text-[#111111]/50">SELECTED WORKS</span>
      </div>

      {/* ─── Title ─── */}
      <section className="px-8 lg:px-16 pt-8 pb-16 overflow-hidden">
        <TextReveal
          text="OUR SHOWCASE"
          tag="h1"
          className="font-serif text-[clamp(3.5rem,10vw,12rem)] leading-none text-[#111111]"
          splitBy="chars"
        />
      </section>

      {/* ─── Projects ─── */}
      {PROJECTS.map((project, i) => (
        <section
          key={project.number}
          className="border-t border-[#111111]/10 px-8 lg:px-16 py-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Info column */}
            <div className="lg:col-span-3">
              <ScrollReveal type="fadeUp">
                <span className="font-mono text-4xl font-bold text-[#111111]/10 block mb-3">
                  {project.number}
                </span>
                <h2 className="font-serif text-[clamp(2rem,3.5vw,3.5rem)] leading-tight text-[#111111] mb-3">
                  {project.title}
                </h2>
                <p className="font-mono text-[10px] tracking-widest text-[#111111]/50 mb-5">
                  {project.subtitle}
                </p>
                <p className="text-[#555] text-sm leading-relaxed mb-8">
                  {project.desc}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-[#111111] hover:text-[var(--accent)] hover:bg-[#111111] border border-[#111111]/30 px-4 py-2.5 transition-all duration-300 group"
                >
                  VIEW PROJECT
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </ScrollReveal>
            </div>

            {/* Images mosaic */}
            <div className="lg:col-span-9">
              <div className="grid grid-cols-12 gap-4">
                {/* Large main image — top, spans 7 cols */}
                <ScrollReveal
                  type="scaleIn"
                  className="col-span-12 md:col-span-7 relative rounded-2xl overflow-hidden group cursor-pointer h-52 sm:h-64 lg:h-[420px]"
                >
                  <Image
                    src={project.images[0].src}
                    alt={`${project.title} main`}
                    fill
                    sizes="(max-width: 768px) 100vw, 55vw"
                    className={`object-cover ${project.images[0].position ?? ""} group-hover:scale-105 transition-transform duration-700`}
                  />
                  {/* VIEW overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center font-mono text-[10px] tracking-widest text-[#111111] scale-0 group-hover:scale-100 transition-transform duration-300">
                      VIEW
                    </div>
                  </div>
                </ScrollReveal>

                {/* Top-right image — spans 5 cols */}
                <ScrollReveal
                  type="scaleIn"
                  delay={0.1}
                  className="col-span-12 md:col-span-5 relative rounded-2xl overflow-hidden group cursor-pointer h-52 sm:h-64 lg:h-[420px]"
                >
                  <Image
                    src={project.images[1].src}
                    alt={`${project.title} 2`}
                    fill
                    sizes="(max-width: 768px) 100vw, 35vw"
                    className={`object-cover ${project.images[1].position ?? ""} group-hover:scale-105 transition-transform duration-700`}
                  />
                </ScrollReveal>

                {/* Bottom-left image — spans 5 cols, shorter */}
                <ScrollReveal
                  type="scaleIn"
                  delay={0.2}
                  className="col-span-12 md:col-span-5 relative rounded-2xl overflow-hidden group cursor-pointer h-36 sm:h-48 lg:h-[260px]"
                >
                  <Image
                    src={project.images[2].src}
                    alt={`${project.title} 3`}
                    fill
                    sizes="(max-width: 768px) 100vw, 35vw"
                    className={`object-cover ${project.images[2].position ?? ""} group-hover:scale-105 transition-transform duration-700`}
                  />
                </ScrollReveal>

                {/* Bottom-right: project number watermark */}
                <div className="col-span-12 md:col-span-7 flex items-center justify-center">
                  <span className="font-serif text-[clamp(5rem,12vw,14rem)] text-[#111111]/5 leading-none select-none">
                    {project.number}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ─── CTA ─── */}
      <section className="border-t border-[#111111]/10 py-24 px-8 lg:px-16 text-center">
        <ScrollReveal type="clipBottom" className="mb-8">
          <h2 className="font-serif text-[clamp(2rem,5vw,6rem)] leading-none text-[#111111]">
            HAVE A PROJECT?
          </h2>
        </ScrollReveal>
        <ScrollReveal type="fadeUp" delay={0.2}>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-mono text-sm tracking-widest bg-[#111111] text-white px-8 py-4 hover:bg-[var(--accent)] hover:text-[#111111] transition-all duration-300"
          >
            LET&rsquo;S TALK <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
