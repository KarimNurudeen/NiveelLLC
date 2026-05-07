import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Link as LinkIcon, Heart, Share2, Ticket, Zap, TrendingUp } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import ProductsMarquee from "@/components/home/ProductsMarquee";
import StrategyHorizontal from "@/components/home/StrategyHorizontal";
import TestimonialsSection from "@/components/home/TestimonialsSection";



const PRODUCT_IMAGES = [
  { src: "/screenshots/cafa-tickets-home.png",     label: "Cafa Tickets", position: "object-top" },
  { src: "/screenshots/cafa-ai-chat.jpg",          label: "Cafa AI",      position: "object-top" },
  { src: "/screenshots/cafa-tickets-payments.png", label: "Cafa Tickets", position: "object-top" },
  { src: "/screenshots/cafa-ai-models.jpg",        label: "Cafa AI",      position: "object-top" },
  { src: "/screenshots/cafa-ai-history.jpg",       label: "Cafa AI",      position: "object-top" },
  { src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&q=80", label: "OnnOn", position: "object-center" },
  { src: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80", label: "OnnOn", position: "object-center" },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-[#150c2e]">
        <div className="relative min-h-screen flex flex-col">

          {/* Right-side social icons */}
          <div className="hidden lg:flex flex-col gap-3 absolute right-6 top-1/2 -translate-y-1/2 z-20">
            {[LinkIcon, Heart, Share2].map((Icon, i) => (
              <div key={i} className="w-9 h-9 border border-white/20 rounded-full flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300 cursor-pointer">
                <Icon className="w-3.5 h-3.5 text-white" />
              </div>
            ))}
          </div>

          {/* Hero summary content */}
          <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-20 pb-32 lg:pb-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

              {/* Left: text content */}
              <div>
                <span className="font-mono text-xs tracking-widest text-[var(--accent)] mb-6 block">
                  DELAWARE-REGISTERED · GLOBAL REACH
                </span>
                <h1
                  className="font-serif leading-[0.92] text-white mb-8"
                  style={{ fontSize: "clamp(2.4rem, 4.8vw, 6rem)" }}
                >
                  We Handle<br />
                  Your Books.<br />
                  <span className="text-[var(--accent)]">We Build</span><br />
                  Your Software.
                </h1>
                <p className="text-[#c9b8e8] text-base sm:text-lg leading-relaxed max-w-xl mb-10">
                  Niveel LLC delivers expert bookkeeping, tax preparation, and custom
                  software development to businesses across North America and Europe —
                  saving you time and money at every step.
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Bookkeeping",
                    "Tax Preparation",
                    "Software Development",
                    "Business Consulting",
                    "Payroll Services",
                  ].map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] sm:text-xs tracking-widest border border-white/20 px-3 sm:px-4 py-1.5 text-white/60 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-200 cursor-default"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: productivity illustration */}
              <div className="hidden lg:block relative h-[500px]">
                {/* Ambient glow */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-80 h-80 rounded-full" style={{ background: "radial-gradient(circle, rgba(245,213,0,0.06) 0%, transparent 70%)" }} />
                </div>

                {/* Card 1 — Ticketing operations */}
                <div className="absolute top-[2%] left-0 border border-white/10 rounded-2xl p-5 w-56 animate-float-1" style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(12px)" }}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center animate-glow-gold" style={{ background: "rgba(245,213,0,0.12)" }}>
                      <Ticket className="w-4 h-4 text-[var(--accent)] animate-icon-swing" />
                    </div>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="font-mono text-[9px] text-white/30">LIVE</span>
                    </span>
                  </div>
                  <div className="font-serif text-4xl text-white leading-none mb-1">1,247</div>
                  <div className="font-mono text-[9px] tracking-widest text-white/35 mb-4">TICKETS PROCESSED</div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between font-mono text-[9px] text-white/25">
                      <span>Monthly target</span><span>78%</span>
                    </div>
                    <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
                      <div className="h-full rounded-full bg-[var(--accent)]" style={{ width: "78%" }} />
                    </div>
                  </div>
                </div>

                {/* Card 2 — AI productivity */}
                <div className="absolute top-[30%] right-0 border border-white/10 rounded-2xl p-5 w-60 animate-float-2" style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(12px)" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center animate-glow-purple" style={{ background: "rgba(168,85,247,0.15)" }}>
                      <Zap className="w-4 h-4 text-purple-300 animate-icon-flash" />
                    </div>
                    <span className="font-mono text-[9px] tracking-widest text-white/35">AI PRODUCTIVITY</span>
                  </div>
                  <div className="font-serif text-4xl text-white leading-none mb-1">60%</div>
                  <div className="font-mono text-[9px] tracking-widest text-white/35 mb-4">FASTER TASK COMPLETION</div>
                  <div className="flex items-end gap-1 h-10">
                    {[40, 55, 48, 70, 60, 85, 75].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm"
                        style={{ height: `${h}%`, background: i === 5 ? "var(--accent)" : "rgba(255,255,255,0.1)" }}
                      />
                    ))}
                  </div>
                </div>

                {/* Card 3 — Commerce & customer reach */}
                <div className="absolute bottom-[4%] left-[8%] border border-white/10 rounded-2xl p-5 w-52 animate-float-3" style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(12px)" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center animate-glow-blue" style={{ background: "rgba(59,130,246,0.15)" }}>
                      <TrendingUp className="w-4 h-4 text-blue-300 animate-icon-rise" />
                    </div>
                    <span className="font-mono text-[9px] tracking-widest text-white/35">SOCIAL COMMERCE</span>
                  </div>
                  <div className="flex items-end gap-2 mb-1">
                    <div className="font-serif text-4xl text-white leading-none">2.4×</div>
                    <span className="font-mono text-xs text-green-400 mb-0.5">↑ growth</span>
                  </div>
                  <div className="font-mono text-[9px] tracking-widest text-white/35">CUSTOMER REACH EXPANDED</div>
                </div>

              </div>

            </div>
          </div>

          {/* LEARN MORE bolt-nut */}
          <MagneticButton className="absolute z-30 left-1/2 -translate-x-1/2 bottom-[58px] hidden lg:block">
            <div className="w-52 h-52 rounded-full bg-[#0E0E0E] border border-white/10 flex items-center justify-center">
              <Link href="/about" className="w-36 h-36 rounded-full bg-white text-[#111111] flex items-center justify-center font-mono text-xs tracking-widest hover:bg-[var(--accent)] transition-colors duration-300 font-semibold shadow-xl">
                LEARN MORE
              </Link>
            </div>
          </MagneticButton>

          {/* Bottom bar */}
          <div className="absolute bottom-0 left-0 right-0 z-20 px-6 sm:px-8 lg:px-16 pb-6 lg:pb-8 hidden lg:block">
            <div className="bg-[#0E0E0E] rounded-3xl px-6 lg:px-12 pt-5 pb-6">
              <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
                <div className="flex items-center gap-4 flex-1">
                  <div className="shrink-0 w-28 h-20 rounded-2xl bg-center bg-cover"
                    style={{ backgroundImage: "url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80)" }} />
                  <p className="text-white/75 text-sm leading-snug max-w-[200px]">
                    Modern financial services — bookkeeping, taxation, and process management.
                  </p>
                </div>
                <div className="w-56 shrink-0" />
                <div className="flex items-center gap-4 flex-1 justify-end">
                  <p className="text-white/75 text-sm leading-snug text-right max-w-[200px]">
                    Purpose-built software that accelerates productivity and business growth.
                  </p>
                  <div className="shrink-0 w-28 h-20 rounded-2xl bg-center bg-cover"
                    style={{ backgroundImage: "url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80)" }} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ─── Brand Statement ─── */}
      <section className="py-24 md:py-36 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="mb-16">
          {["WE HELPING", "CLIENTS SAVE", "TIME & MONEY"].map((line, i) => (
            <div
              key={line}
              style={{ marginLeft: `min(${i * 3}vw, ${i * 6}rem)` } as React.CSSProperties}
            >
              <TextReveal
                text={line}
                tag="h2"
                className="font-serif text-[clamp(2rem,6vw,7rem)] leading-none tracking-tight text-white"
                delay={i * 0.15}
                splitBy="words"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal type="fadeUp">
            <Link
              href="/about"
              className="font-mono text-xs tracking-widest text-[var(--accent)] flex items-center gap-2 mb-6 hover:gap-4 transition-all duration-300"
            >
              OUR EXPERIENCE <ArrowDown className="w-4 h-4 -rotate-90" />
            </Link>
            <p className="text-[#999999] leading-relaxed max-w-md">
              Niveel LLC is a Delaware-registered Limited Liability Company with a global reach.
              We specialize in bookkeeping, taxation, and software development — saving you time
              and money while delivering innovative solutions tailored to your needs.
            </p>
          </ScrollReveal>

          <ScrollReveal type="clipBottom" className="flex items-center justify-end gap-6">
            <Image
              src="/niveellogo.jpg"
              alt="Niveel LLC"
              width={110}
              height={110}
              className="rounded-2xl shrink-0"
            />
            <span className="font-serif text-[clamp(3rem,7vw,8rem)] leading-none text-white select-none">
              NIVEEL{" "}
              <span className="text-[var(--accent)]">LLC</span>
            </span>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Products Marquee ─── */}
      <ProductsMarquee />

      {/* ─── Strategy — horizontal scroll ─── */}
      <StrategyHorizontal />

      {/* ─── Testimonials — horizontal scroll cards ─── */}
      <TestimonialsSection />

      {/* ─── Stats & Case Studies ─── */}
      <section className="bg-[#F5F5F5] text-[#111111] rounded-t-[3rem] py-24 md:py-36 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-24 border-b border-[#111111]/10 pb-16">
            {[
              { value: "30+", label: "Businesses Served" },
              { value: "15+", label: "Countries Reached" },
              { value: "40%", label: "Productivity Boost" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} type="fadeUp" delay={i * 0.1} className="text-center">
                <div className="font-serif text-[clamp(2.5rem,6vw,6rem)] leading-none mb-2">
                  {stat.value}
                </div>
                <div className="font-mono text-xs tracking-widest text-[#999]">{stat.label}</div>
              </ScrollReveal>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center mb-12">
            <ScrollReveal type="fadeUp">
              <p className="text-[#666] leading-relaxed text-sm lg:text-base">
                Hand-picked projects showcasing our range of capabilities.
              </p>
            </ScrollReveal>
            <ScrollReveal type="clipBottom" className="text-center">
              <h2 className="font-serif text-[clamp(1.5rem,3vw,3rem)] leading-tight">
                OUR CASE STUDIES
              </h2>
            </ScrollReveal>
            <ScrollReveal type="fadeUp" className="lg:text-right">
              <Link
                href="/showcase"
                className="font-mono text-xs tracking-widest border border-[#111111]/30 rounded-full px-6 py-2.5 text-[#111111] hover:bg-[#111111] hover:text-white transition-all duration-300 inline-block"
              >
                OUR WORKS
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                stat: "3×",
                headline: "Faster event operations",
                desc: "Automated ticket sales, real-time attendee tracking, and instant payment processing eliminated manual cash handling and reconciliation entirely.",
                img: "/screenshots/cafa-tickets-home.png",
                tag: "TICKETING & PAYMENTS",
                position: "object-top",
              },
              {
                stat: "60%",
                headline: "Less time on repetitive tasks",
                desc: "Multi-model AI assistance handles research, drafting, and data summarisation in minutes — freeing teams to focus purely on decisions that move the business forward.",
                img: "/screenshots/cafa-ai-chat.jpg",
                tag: "AI-POWERED WORKFLOW",
                position: "object-top",
              },
              {
                stat: "2×",
                headline: "Growth in customer engagement",
                desc: "A social-first commerce platform that connects businesses with customers organically, cutting acquisition costs while expanding reach across new markets.",
                img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
                tag: "SOCIAL COMMERCE",
                position: "object-center",
              },
            ].map((cs, i) => (
              <ScrollReveal key={cs.tag} type="scaleIn" delay={i * 0.1}>
                <div className="rounded-xl overflow-hidden group cursor-pointer bg-white border border-[#111111]/8">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={cs.img}
                      alt={cs.headline}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={`object-cover ${cs.position} group-hover:scale-110 transition-transform duration-700`}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    <span className="absolute top-3 left-3 font-mono text-[9px] tracking-widest bg-[#111111] text-white px-2.5 py-1">
                      {cs.tag}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="font-serif text-5xl leading-none text-[#111111] mb-1">{cs.stat}</div>
                    <div className="font-semibold text-[#111111] text-sm mb-2">{cs.headline}</div>
                    <p className="text-[#666] text-xs leading-relaxed">{cs.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Logo Marquee ─── */}
      <section className="bg-[#F5F5F5] py-12 overflow-hidden border-t border-[#111111]/5">
        <div className="flex" aria-hidden="true">
          <div className="flex items-end gap-5 animate-marquee min-w-max">
            {[...PRODUCT_IMAGES, ...PRODUCT_IMAGES].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2 shrink-0">
                <div className="relative w-[120px] h-[76px] rounded-lg overflow-hidden border border-[#111111]/10">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    sizes="120px"
                    className={`object-cover ${item.position}`}
                  />
                </div>
                <span className="font-mono text-[10px] tracking-widest text-[#111111]/50 select-none">
                  {item.label.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pre-footer CTA ─── */}
      <section className="py-24 md:py-36 px-6 text-center overflow-hidden">
        <ScrollReveal type="clipBottom">
          <h2
            className="font-serif leading-none text-white opacity-20 hover:opacity-60 transition-opacity duration-500 cursor-default select-none"
            style={{ fontSize: "clamp(3rem, 10vw, 12rem)" }}
          >
            STAY CONNECTED
          </h2>
        </ScrollReveal>
        <ScrollReveal type="fadeUp" delay={0.3} className="mt-8">
          <Link
            href="/contact"
            className="font-mono text-xs tracking-widest border border-white/30 rounded-full px-8 py-3 text-white hover:bg-[var(--accent)] hover:text-[#111111] hover:border-[var(--accent)] transition-all duration-300 inline-block"
          >
            GET IN TOUCH
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
