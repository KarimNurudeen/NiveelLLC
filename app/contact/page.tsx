"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Plus, Minus } from "lucide-react";
import { useState, useRef } from "react";
import { gsap } from "@/lib/gsap";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import ContactDrawer from "@/components/ui/ContactDrawer";

const CONTACT_BLOCKS = [
  {
    label: "EMAIL US",
    icon: Mail,
    value: "adm@niveel.com",
    href: "mailto:adm@niveel.com",
  },
  {
    label: "CALL US",
    icon: Phone,
    value: "(908) 416-8408",
    href: "tel:+19084168408",
  },
  {
    label: "OUR ADDRESS",
    icon: MapPin,
    value: "1255 Magie Ave, Suite 352, Union, NJ 07083",
    href: "https://maps.google.com/?q=1255+Magie+Ave+Suite+352+Union+NJ+07083",
  },
];

const FAQS = [
  {
    q: "What types of projects do you take on?",
    a: "We work across web development, mobile apps, AI integration, game development, cloud infrastructure, UI/UX design, e-commerce, and bookkeeping. If it touches technology or design, we likely have the expertise.",
  },
  {
    q: "How long does a typical project take?",
    a: "It depends on scope. A branding project might take 4–6 weeks. A full web application could be 3–6 months. We always scope timelines clearly upfront and keep you updated throughout.",
  },
  {
    q: "Do you work with startups or only established companies?",
    a: "Both. We love working with ambitious founders at early stages, and we also partner with enterprises on complex, large-scale projects. The common thread is ambition and a commitment to quality.",
  },
  {
    q: "What does the engagement process look like?",
    a: "It starts with a discovery call to understand your goals. We then produce a detailed proposal with scope, timeline, and pricing. Once aligned, we kick off with a structured onboarding and regular check-ins throughout.",
  },
  {
    q: "Can you work with our existing team?",
    a: "Absolutely. Many of our engagements are collaborative — we embed alongside in-house teams to augment capacity or bring specific expertise. We adapt to whatever working model serves you best.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  function toggle() {
    if (!contentRef.current) return;
    if (!open) {
      gsap.fromTo(
        contentRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.4, ease: "power3.out" }
      );
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.35,
        ease: "power3.inOut",
      });
    }
    setOpen((v) => !v);
  }

  return (
    <div className="border-b border-white/10">
      <button
        className="w-full flex items-center justify-between py-6 text-left gap-4"
        onClick={toggle}
        aria-expanded={open}
      >
        <span className="font-serif text-lg text-white">{q}</span>
        <span className="shrink-0 text-[var(--accent)]">
          {open ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>
      <div ref={contentRef} className="overflow-hidden" style={{ height: 0, opacity: 0 }}>
        <p className="text-[#999] leading-relaxed pb-6">{a}</p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* ─── Header ─── */}
      <div className="pt-24 pb-0 px-6 max-w-7xl mx-auto">
        <Link
          href="/"
          className="font-mono text-xs tracking-widest text-white/50 hover:text-white transition-colors"
        >
          ← BACK
        </Link>
      </div>

      {/* ─── Main ─── */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <ScrollReveal type="clipBottom" className="mb-8">
              <h1 className="font-serif text-[clamp(3rem,8vw,9rem)] leading-none">
                CONTACT US
              </h1>
            </ScrollReveal>

            <ScrollReveal type="fadeUp" delay={0.1} className="mb-12">
              <p className="text-[#999] leading-relaxed max-w-md">
                Niveel LLC listens to your voice. Feel free to reach out through our messaging
                form — we respond promptly and are here to assist with any questions or concerns
                you may have. For immediate assistance, give us a call during business hours.
              </p>
            </ScrollReveal>

            <div className="flex flex-col gap-6 mb-12">
              {CONTACT_BLOCKS.map((block, i) => {
                const Icon = block.icon;
                return (
                  <ScrollReveal key={block.label} type="fadeUp" delay={i * 0.1}>
                    <a
                      href={block.href}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] transition-all duration-300">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-mono text-[10px] tracking-widest text-[#999] mb-0.5">
                          {block.label}
                        </div>
                        <div className="text-white group-hover:text-[var(--accent)] transition-colors duration-200">
                          {block.value}
                        </div>
                      </div>
                    </a>
                  </ScrollReveal>
                );
              })}
            </div>

            <ScrollReveal type="fadeUp" delay={0.4}>
              <MagneticButton>
                <button
                  onClick={() => setDrawerOpen(true)}
                  className="inline-flex items-center gap-2 font-mono text-sm tracking-widest bg-white text-[#111111] rounded-full px-8 py-4 hover:bg-[var(--accent)] transition-colors duration-300 font-semibold"
                >
                  SEND US A MESSAGE
                </button>
              </MagneticButton>
            </ScrollReveal>
          </div>

          {/* Right — image */}
          <ScrollReveal type="scaleIn" className="relative h-64 md:h-[400px] lg:h-[700px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80"
              alt="Cityscape"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </ScrollReveal>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal type="clipBottom" className="mb-16">
            <h2 className="font-serif text-[clamp(2rem,4vw,4rem)] leading-none">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </ScrollReveal>

          <div>
            {FAQS.map((faq) => (
              <FAQItem key={faq.q} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact Drawer ─── */}
      <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />

      {/* ─── Mini footer CTA ─── */}
      <section className="py-16 px-6 text-center border-t border-white/10">
        <ScrollReveal type="clipBottom" className="mb-8">
          <a
            href="mailto:adm@niveel.com"
            className="font-serif block leading-none hover:text-[var(--accent)] transition-colors duration-300"
            style={{ fontSize: "clamp(2rem, 6vw, 8rem)" }}
          >
            ADM@NIVEEL.COM
          </a>
        </ScrollReveal>
        <ScrollReveal type="fadeUp" delay={0.2} className="flex justify-center gap-8 mt-8">
          <Link href="/about" className="font-mono text-xs tracking-widest text-white/50 hover:text-white transition-colors">
            ABOUT
          </Link>
          <Link href="/services" className="font-mono text-xs tracking-widest text-white/50 hover:text-white transition-colors">
            SERVICES
          </Link>
          <Link href="/showcase" className="font-mono text-xs tracking-widest text-white/50 hover:text-white transition-colors">
            SHOWCASE
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
