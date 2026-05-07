import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import ParallaxImage from "@/components/animations/ParallaxImage";

export const metadata: Metadata = {
  title: "About Us — NIVEEL LLC",
  description:
    "Learn about Niveel LLC — a modern digital agency crafting experiences with purpose, precision, and passion.",
};

const VALUES = [
  {
    number: "01",
    title: "Integrity",
    desc: "We uphold the highest standards of honesty, transparency, and ethical practices in every interaction and decision.",
  },
  {
    number: "02",
    title: "Inclusivity",
    desc: "We embrace diversity and ensure that everyone has equal opportunities to contribute and thrive.",
  },
  {
    number: "03",
    title: "Commitment",
    desc: "We are devoted to fulfilling our promises and building strong, lasting relationships with our clients and partners.",
  },
  {
    number: "04",
    title: "Excellence",
    desc: "We strive for perfection in every project, delivering results that exceed expectations and set benchmarks for quality.",
  },
];

const TEAM = [
  {
    name: "Karim Nurudeen",
    role: "Founder & CEO",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Alex Rivera",
    role: "Head of Engineering",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Jordan Kim",
    role: "Creative Director",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative h-screen min-h-[600px] sm:min-h-[700px] flex flex-col justify-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
            alt="Team meeting"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Top-right links */}
        <div className="absolute top-28 right-8 flex gap-6 z-10">
          <Link href="/showcase" className="font-mono text-xs tracking-widest text-white/60 hover:text-white transition-colors">
            EXPLORE
          </Link>
          <Link href="/contact" className="font-mono text-xs tracking-widest text-white/60 hover:text-white transition-colors">
            CONTACT
          </Link>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <TextReveal
            text="ABOUT US"
            tag="h1"
            className="font-serif text-[clamp(4rem,12vw,14rem)] leading-none text-white mb-6"
            splitBy="chars"
          />
          <p className="font-mono text-sm tracking-widest text-white/50">
            DELAWARE-REGISTERED LLC — GLOBAL REACH
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2 text-white/40">
          <ArrowDown className="w-4 h-4 animate-bounce" />
          <span className="font-mono text-[10px] tracking-widest" style={{ writingMode: "vertical-rl" }}>
            SCROLL
          </span>
        </div>
      </section>

      {/* ─── Philosophy ─── */}
      <section className="relative py-36 md:py-48 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1920&q=80"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <ScrollReveal type="fadeUp">
            <span className="inline-block font-mono text-xs tracking-widest border border-[var(--accent)]/50 rounded-full px-4 py-1.5 text-[var(--accent)] mb-12">
              OUR PHILOSOPHY
            </span>
          </ScrollReveal>

          <ScrollReveal type="clipBottom" className="mb-10">
            <h2 className="font-serif italic text-[clamp(2.5rem,6vw,7rem)] leading-none text-[var(--accent)]">
              &ldquo;Built for Convenience&rdquo;
            </h2>
          </ScrollReveal>

          <ScrollReveal type="fadeUp" delay={0.2}>
            <p className="text-[#999999] leading-relaxed text-lg max-w-2xl mx-auto">
              We are more than just a business — we are a trusted partner for individuals and
              organizations seeking innovative solutions that simplify life. Everything we do is
              built around creating convenience for you. By simplifying complex processes and
              saving time and money, we help our clients focus on what truly matters.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section className="bg-[#1A1A1A] py-24 md:py-36 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal type="clipBottom" className="mb-20">
            <h2 className="font-serif text-[clamp(2rem,5vw,5rem)] leading-none">
              WHAT DRIVES US
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {VALUES.map((v, i) => (
              <ScrollReveal key={v.number} type="fadeUp" delay={i * 0.1}>
                <div className="bg-[#1A1A1A] p-10 group hover:bg-[#242424] transition-colors duration-300">
                  <span className="font-mono text-xs tracking-widest text-[var(--accent)] mb-4 block">
                    {v.number}
                  </span>
                  <h3 className="font-serif text-2xl mb-4 text-white">{v.title}</h3>
                  <p className="text-[#999] leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Story / Split section ─── */}
      <section className="py-24 md:py-36 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal type="fadeUp">
              <span className="font-mono text-xs tracking-widest text-[var(--accent)] mb-6 block">
                OUR STORY
              </span>
            </ScrollReveal>
            <ScrollReveal type="clipBottom" className="mb-6">
              <h2 className="font-serif text-[clamp(2rem,4vw,4rem)] leading-tight">
                FROM VISION TO DIGITAL REALITY
              </h2>
            </ScrollReveal>
            <ScrollReveal type="fadeUp" delay={0.1} className="mb-6">
              <p className="text-[#999] leading-relaxed">
                Niveel LLC was founded on the principles of making life easier and more efficient
                for our clients. As a Delaware-registered Limited Liability Company, we&rsquo;ve
                worked tirelessly to establish a global presence, offering a diverse range of
                services — from bookkeeping and taxation to software development — that cater to
                businesses, individuals, and organizations worldwide.
              </p>
            </ScrollReveal>
            <ScrollReveal type="fadeUp" delay={0.2} className="mb-8">
              <p className="text-[#999] leading-relaxed">
                What sets us apart is our dedication to understanding our clients&rsquo; needs and
                providing tailored solutions that truly make a difference. Whether you need
                financial clarity or innovative software, we bring the same level of care to
                every engagement, regardless of size.
              </p>
            </ScrollReveal>
            <ScrollReveal type="fadeUp" delay={0.3}>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-white border border-white/30 rounded-full px-6 py-3 hover:bg-white hover:text-[#111111] transition-all duration-300"
              >
                OUR SERVICES <ArrowRight className="w-3 h-3" />
              </Link>
            </ScrollReveal>
          </div>

          <ScrollReveal type="scaleIn" className="relative h-72 md:h-[450px] lg:h-[600px] rounded-2xl overflow-hidden">
            <ParallaxImage
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
              alt="Our work"
              containerClassName="h-full rounded-2xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Team ─── */}
      <section className="bg-[#F5F5F5] text-[#111111] rounded-t-[3rem] py-24 md:py-36 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal type="clipBottom" className="mb-16">
            <h2 className="font-serif text-[clamp(2rem,5vw,5rem)] leading-none">
              THE PEOPLE BEHIND IT
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member, i) => (
              <ScrollReveal key={member.name} type="fadeUp" delay={i * 0.1}>
                <div className="group">
                  <div className="relative h-80 rounded-xl overflow-hidden mb-5">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-serif text-xl text-[#111111]">{member.name}</h3>
                  <p className="font-mono text-xs tracking-widest text-[#999] mt-1">{member.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 px-6 text-center">
        <ScrollReveal type="clipBottom" className="mb-8">
          <h2 className="font-serif text-[clamp(2rem,6vw,7rem)] leading-none">
            READY TO BUILD?
          </h2>
        </ScrollReveal>
        <ScrollReveal type="fadeUp" delay={0.2}>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-mono text-sm tracking-widest bg-[var(--accent)] text-[#111111] rounded-full px-8 py-4 hover:bg-white transition-colors duration-300 font-semibold"
          >
            START A PROJECT <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
