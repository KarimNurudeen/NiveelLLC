"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const STEPS = [
  {
    num: "01",
    title: "Assess",
    body: "We audit your current books, processes, and goals to identify gaps and opportunities before we touch anything.",
  },
  {
    num: "02",
    title: "Build",
    body: "Custom-tailored solutions — financial systems, tax strategies, or software platforms built around your workflow.",
  },
  {
    num: "03",
    title: "Grow",
    body: "Ongoing bookkeeping, reporting, and consultation that keeps your business scaling without the overhead.",
  },
];

export default function StrategyHorizontal() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Horizontal scroll only on desktop — touch scroll conflicts on mobile
    if (window.innerWidth < 1024) return;

    const inner = innerRef.current;
    const track = trackRef.current;
    if (!inner || !track) return;

    track.style.width = "300vw";

    const ctx = gsap.context(() => {
      const getDistance = () => track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: inner,
          pin: true,
          scrub: 1.2,
          invalidateOnRefresh: true,
          end: () => `+=${getDistance()}`,
        },
      });

      ScrollTrigger.refresh();
    }, inner);

    return () => ctx.revert();
  }, []);

  /* ── Mobile layout (< lg): vertical stack ── */
  return (
    <div ref={outerRef} className="bg-[#111111]">

      {/* Mobile-only vertical layout */}
      <div className="lg:hidden px-6 py-16 space-y-16">
        {/* Panel 1 */}
        <div>
          <span className="font-mono text-xs tracking-widest text-[var(--accent)] mb-6 block">
            OUR APPROACH
          </span>
          <h2 className="font-serif text-[clamp(2.5rem,10vw,5rem)] leading-none text-white mb-6">
            WE CREATE <span className="text-[var(--accent)]">STRATEGIES</span>{" "}
            <span className="italic text-white/50">&amp; DIGITAL</span> EXPERIENCES.
          </h2>
        </div>

        {/* Panel 2 */}
        <div className="space-y-6">
          <div className="relative h-52 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
              alt="Strategy meeting"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="font-mono text-xs tracking-widest text-[var(--accent)] mb-3 block">
              WHO WE ARE
            </span>
            <p className="text-white/70 leading-relaxed mb-4">
              From bookkeeping and taxation to custom software development, we combine
              professional expertise with a client-first approach — saving time and money
              at every step.
            </p>
            <p className="text-white/50 leading-relaxed text-sm">
              Our team spans accounting, engineering, and business strategy, serving clients
              across North America and Europe with the same dedication regardless of project size.
            </p>
          </div>
        </div>

        {/* Panel 3 */}
        <div>
          <span className="font-mono text-xs tracking-widest text-[var(--accent)] mb-8 block">
            HOW IT WORKS
          </span>
          <div className="space-y-8">
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                className="border-t-2 pt-6"
                style={{ borderTopColor: i === 0 ? "var(--accent)" : "rgba(255,255,255,0.1)" }}
              >
                <span className="font-mono text-[var(--accent)] text-sm mb-3 block">{step.num}</span>
                <h3 className="font-serif text-white text-2xl mb-3">{step.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop-only horizontal scroll */}
      <div ref={innerRef} className="hidden lg:block overflow-hidden" style={{ height: "100vh" }}>
        <div ref={trackRef} className="flex h-full will-change-transform">

          {/* Panel 1 */}
          <div className="w-screen h-full shrink-0 flex flex-col justify-center px-20">
            <span className="font-mono text-xs tracking-widest text-[var(--accent)] mb-8 block">
              OUR APPROACH
            </span>
            <h2 className="font-serif leading-none text-white" style={{ fontSize: "clamp(3rem,8vw,10rem)" }}>
              WE CREATE<br />
              <span className="text-[var(--accent)]">STRATEGIES</span><br />
              <span className="italic text-white/50">&amp; DIGITAL</span><br />
              EXPERIENCES.
            </h2>
            <p className="text-white/30 font-mono text-xs tracking-widest mt-10">SCROLL TO EXPLORE →</p>
          </div>

          {/* Panel 2 */}
          <div className="w-screen h-full shrink-0 flex items-center px-20 gap-20">
            <div className="w-1/2 h-[55%] relative overflow-hidden shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
                alt="Strategy meeting"
                fill
                sizes="50vw"
                className="object-cover"
              />
              <div className="absolute inset-0" style={{ clipPath: "polygon(0 0, 100% 0, 92% 100%, 0 100%)" }} />
            </div>
            <div className="flex-1">
              <span className="font-mono text-xs tracking-widest text-[var(--accent)] mb-6 block">WHO WE ARE</span>
              <p className="text-white/70 leading-relaxed text-lg mb-6">
                From bookkeeping and taxation to custom software development, we combine
                professional expertise with a client-first approach — saving time and money at every step.
              </p>
              <p className="text-white/50 leading-relaxed">
                Our team spans accounting, engineering, and business strategy, serving clients
                across North America and Europe with the same dedication regardless of project size.
              </p>
            </div>
          </div>

          {/* Panel 3 */}
          <div className="w-screen h-full shrink-0 flex items-center px-20">
            <div className="w-full">
              <span className="font-mono text-xs tracking-widest text-[var(--accent)] mb-12 block">HOW IT WORKS</span>
              <div className="grid grid-cols-3 gap-0">
                {STEPS.map((step, i) => (
                  <div
                    key={step.num}
                    className="border-t-2 pt-8 pr-10"
                    style={{ borderTopColor: i === 0 ? "var(--accent)" : "rgba(255,255,255,0.1)" }}
                  >
                    <span className="font-mono text-[var(--accent)] text-sm mb-6 block">{step.num}</span>
                    <h3 className="font-serif text-white mb-5" style={{ fontSize: "clamp(2rem,3.5vw,3.5rem)" }}>{step.title}</h3>
                    <p className="text-white/50 leading-relaxed text-sm">{step.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
