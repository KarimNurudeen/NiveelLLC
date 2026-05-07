"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import ScrollReveal from "@/components/animations/ScrollReveal";

const CARDS = [
  {
    category: "BOOKKEEPING",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
    quote: "Niveel's bookkeeping service transformed how we manage our finances. Our books are always accurate, on time, and stress-free every single month.",
    author: "Sarah Johnson",
    role: "CEO, TechVentures",
  },
  {
    category: "TAX PREPARATION",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80",
    quote: "They handled our corporate tax returns flawlessly and found deductions we had missed for years. We saved thousands thanks to their expertise.",
    author: "Marcus Chen",
    role: "Founder, Chen Enterprises",
  },
  {
    category: "SOFTWARE DEVELOPMENT",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
    quote: "Niveel built our custom business platform from scratch — streamlined our entire workflow and delivered exactly what we envisioned, on budget.",
    author: "James Okonkwo",
    role: "Managing Director, Primex Group",
  },
  {
    category: "BUSINESS CONSULTING",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    quote: "Their consultation pinpointed inefficiencies we didn't know existed. Our operational costs dropped significantly within the very first quarter.",
    author: "Priya Sharma",
    role: "Director, Growth Partners",
  },
  {
    category: "PAYROLL SERVICES",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
    quote: "Payroll used to take us two full days every month. Niveel cut that to under an hour. Their accuracy and reliability have been outstanding.",
    author: "David Kim",
    role: "COO, Horizon Retail",
  },
  {
    category: "FINANCIAL PLANNING",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
    quote: "Their financial planning gave us a clear roadmap. We finally know where every dollar is going and exactly where we'll be in five years.",
    author: "Amara Osei",
    role: "Founder, BrightPath Advisory",
  },
];

const CARD_HEIGHT = 460;

export default function TestimonialsSection() {
  // outerRef: tall container — its scroll range drives the animation
  const outerRef = useRef<HTMLDivElement>(null);
  // trackRef: the flex row of cards that translates horizontally
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const track = trackRef.current;
    if (!outer || !track) return;

    const getDistance = () => track.scrollWidth - window.innerWidth;

    const setOuterHeight = () => {
      outer.style.height = `${window.innerHeight + getDistance()}px`;
    };

    setOuterHeight();

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: outer,
          // fires the instant outer's top hits the viewport top
          start: "top top",
          end: () => `+=${getDistance()}`,
          scrub: 1,
          invalidateOnRefresh: true,
          onRefresh: setOuterHeight,
        },
      });
    }, outer);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ── Section header — normal vertical scroll ── */}
      <div className="bg-[#150c2e] px-6 pt-24 md:pt-36 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <ScrollReveal type="fadeUp">
              <p className="text-[#c9b8e8] leading-relaxed mb-6 max-w-sm">
                Trusted by businesses and individuals across North America, Europe, and beyond
                who rely on us for financial clarity and innovative software.
              </p>
              <Link
                href="/about"
                className="font-mono text-xs tracking-widest border border-[var(--accent)] px-6 py-2.5 text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[#111111] transition-all duration-300 inline-block"
              >
                ABOUT US
              </Link>
            </ScrollReveal>
            <ScrollReveal type="scaleIn" className="relative h-64 overflow-hidden hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </ScrollReveal>
          </div>

          <ScrollReveal type="fadeUp" className="mb-3">
            <span className="font-mono text-xs tracking-widest text-[var(--accent)]">
              CLIENT MOMENTUM
            </span>
          </ScrollReveal>
          <ScrollReveal type="clipBottom" className="mb-3">
            <h2 className="font-serif text-[clamp(2rem,5vw,5rem)] leading-none text-white">
              WHAT CLIENTS SAY
            </h2>
          </ScrollReveal>
          <ScrollReveal type="fadeUp" delay={0.1}>
            <p className="text-[#c9b8e8] max-w-md text-sm">
              Scroll to explore all client stories →
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Horizontal scroll zone (all screen sizes) ── */}
      <div ref={outerRef} className="bg-[#150c2e]">
        <div
          className="sticky top-0 overflow-hidden bg-[#150c2e] flex items-center"
          style={{ height: `${CARD_HEIGHT + 60}px` }}
        >
          <div
            ref={trackRef}
            className="flex items-center gap-5 will-change-transform"
            style={{
              paddingLeft: "clamp(1.5rem, 5vw, 5rem)",
              paddingRight: "clamp(1.5rem, 5vw, 5rem)",
            }}
          >
            {CARDS.map((card) => (
              <div
                key={card.author}
                className="shrink-0 flex flex-col bg-white text-[#111111] border-2 border-[var(--accent)]"
                style={{
                  width: "300px",
                  height: `${CARD_HEIGHT}px`,
                  boxShadow: "6px 6px 0 0 var(--accent)",
                }}
              >
                {/* Image — top 40% */}
                <div
                  className="relative w-full shrink-0 overflow-hidden"
                  style={{ height: "40%" }}
                >
                  <Image
                    src={card.image}
                    alt={card.category}
                    fill
                    sizes="300px"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 overflow-hidden">
                  <span className="font-mono text-[9px] tracking-widest bg-[#111111] text-white px-2.5 py-1 w-fit mb-4 shrink-0">
                    {card.category}
                  </span>
                  <p className="text-[#333] text-sm leading-relaxed flex-1">
                    &ldquo;{card.quote}&rdquo;
                  </p>
                  <div className="border-t border-[#111111]/10 pt-3 mt-3 shrink-0">
                    <div className="font-semibold text-sm">{card.author}</div>
                    <div className="text-[#999] text-xs mt-0.5 font-mono">{card.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* bottom breathing room */}
      <div className="bg-[#150c2e] h-20" />
    </>
  );
}
