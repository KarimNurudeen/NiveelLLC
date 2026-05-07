import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Link as LinkIcon, Heart, Share2 } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import ParallaxImage from "@/components/animations/ParallaxImage";
import HeroSceneClient from "@/components/three/HeroSceneClient";
import HeroBackground from "@/components/layout/HeroBackground";
import HeroCyclingWord from "@/components/animations/HeroCyclingWord";
import ProductsMarquee from "@/components/home/ProductsMarquee";

const TESTIMONIALS = [
  {
    category: "WEB DEVELOPMENT",
    quote:
      "Niveel transformed our digital presence completely. The team's attention to detail and technical excellence exceeded every expectation.",
    author: "Sarah Johnson",
    role: "CEO, TechVentures",
  },
  {
    category: "MOBILE APPS",
    quote:
      "The mobile application they built for us has been a game changer. Smooth, intuitive, and delivered on time.",
    author: "Marcus Chen",
    role: "Product Lead, AppDynamics",
  },
  {
    category: "AI SOLUTIONS",
    quote:
      "Their AI integration cut our operational costs by 40%. The team truly understands both business and technology.",
    author: "Priya Sharma",
    role: "CTO, DataFlow Inc",
  },
];

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
      <section className="relative h-screen min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] overflow-hidden">
        {/* Cycling background images */}
        <HeroBackground />

        {/* Three.js particle overlay */}
        <HeroSceneClient />

        {/* Right-side floating social icons */}
        <div className="hidden lg:flex flex-col gap-3 absolute right-6 top-1/2 -translate-y-1/2 z-20">
          {[LinkIcon, Heart, Share2].map((Icon, i) => (
            <div
              key={i}
              className="w-9 h-9 border border-white/30 rounded-full flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300 cursor-pointer"
            >
              <Icon className="w-3.5 h-3.5" />
            </div>
          ))}
        </div>

        {/* Main heading — left-aligned, positioned at ~30% from top */}
        <div className="absolute left-6 lg:left-10 z-10" style={{ top: "30%" }}>
          <TextReveal
            text="INDIVIDUAL BUILDING"
            tag="h1"
            className="font-serif leading-[0.9] tracking-tight text-white block"
            style={{ fontSize: "clamp(2.2rem, 6.8vw, 8.5rem)" } as React.CSSProperties}
            splitBy="words"
            delay={0}
          />
          <TextReveal
            text="FOR YOUR"
            tag="h1"
            className="font-serif leading-[0.9] tracking-tight text-white block"
            style={{ fontSize: "clamp(2.2rem, 6.8vw, 8.5rem)" } as React.CSSProperties}
            splitBy="words"
            delay={0.15}
          />
          <HeroCyclingWord
            className="font-serif leading-[0.9] tracking-tight text-white"
            style={{ fontSize: "clamp(2.2rem, 6.8vw, 8.5rem)" } as React.CSSProperties}
          />
        </div>

        {/* Quote — bottom-left, above the glass bar */}
        <ScrollReveal
          type="fadeUp"
          delay={0.6}
          className="absolute z-10 left-6 lg:left-10 bottom-[190px] max-w-[240px] hidden lg:block"
        >
          <p className="text-white/65 text-sm leading-relaxed">
            We are a Delaware-registered LLC with a global reach, dedicated to saving
            you time and money through bookkeeping, taxation, and software solutions.
          </p>
        </ScrollReveal>

        {/* LEARN MORE — outer dark ring (the "nut") + inner white button (the "bolt") */}
        <MagneticButton className="absolute z-30 left-1/2 -translate-x-1/2 bottom-[58px] hidden lg:block">
          <div className="w-52 h-52 rounded-full bg-[#0E0E0E] border border-white/10 flex items-center justify-center">
            <Link
              href="/about"
              className="w-36 h-36 rounded-full bg-white text-[#111111] flex items-center justify-center font-mono text-xs tracking-widest hover:bg-[var(--accent)] transition-colors duration-300 font-semibold shadow-xl"
            >
              LEARN MORE
            </Link>
          </div>
        </MagneticButton>

        {/* Bottom bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 px-8 lg:px-16 pb-8">
          <div className="bg-[#0E0E0E] rounded-3xl px-8 lg:px-12 pt-6 pb-7">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
              {/* Card 1 */}
              <ScrollReveal type="fadeUp" delay={0.5} className="flex items-center gap-4 flex-1">
                <div
                  className="shrink-0 w-28 h-20 rounded-2xl bg-center bg-cover"
                  style={{ backgroundImage: "url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80)" }}
                />
                <p className="text-white/80 text-sm leading-snug max-w-[220px]">
                  We apply modern financial technologies of bookkeeping, taxation, and process management.
                </p>
              </ScrollReveal>

              {/* Oval socket — same width as the outer ring so content doesn't crowd it */}
              <div className="hidden lg:block w-56 shrink-0" />

              {/* Card 2 */}
              <ScrollReveal type="fadeUp" delay={0.65} className="hidden sm:flex items-center gap-4 flex-1 justify-end">
                <p className="text-white/80 text-sm leading-snug text-right max-w-[220px]">
                  We understand the needs and goals of our partners and fully assist in achieving these goals.
                </p>
                <div
                  className="shrink-0 w-28 h-20 rounded-2xl bg-center bg-cover"
                  style={{ backgroundImage: "url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80)" }}
                />
              </ScrollReveal>
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
              style={{ marginLeft: `min(${i * 5}vw, ${i * 8}rem)` } as React.CSSProperties}
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

      {/* ─── Strategy ─── */}
      <section className="bg-[#1A1A1A] py-24 md:py-36 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal type="clipBottom" className="mb-16 text-center">
            <h2 className="font-serif text-[clamp(1.5rem,4vw,4rem)] leading-tight max-w-3xl mx-auto">
              WE CREATE{" "}
              <span className="text-[var(--accent)] inline-block animate-pulse-slow">✦</span>{" "}
              <span className="text-[var(--accent)] inline-block animate-pulse-slow" style={{ animationDelay: "0.5s" }}>✦</span>{" "}
              <span className="text-[var(--accent)] inline-block animate-pulse-slow" style={{ animationDelay: "1s" }}>✦</span>{" "}
              STRATEGIES AND DIGITAL EXPERIENCES.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal type="scaleIn" className="relative h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <ParallaxImage
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
                alt="Strategy meeting"
                containerClassName="h-full rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </ScrollReveal>

            <ScrollReveal type="fadeUp" delay={0.2}>
              <span className="font-mono text-xs tracking-widest text-[var(--accent)] mb-4 block">
                OUR APPROACH
              </span>
              <p className="text-[#999999] leading-relaxed mb-6">
                From bookkeeping and taxation to custom software development, we combine
                professional expertise with a client-first approach to deliver solutions that
                truly make a difference — saving time and money at every step.
              </p>
              <p className="text-[#999999] leading-relaxed">
                Our team spans accounting, engineering, and business strategy, serving clients
                across North America and Europe with the same dedication regardless of project size.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="py-24 md:py-36 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <ScrollReveal type="fadeUp">
            <p className="text-[#999999] leading-relaxed mb-6 max-w-sm">
              Trusted by businesses and individuals across North America, Europe, and beyond who rely on us for financial clarity and innovative software.
            </p>
            <Link
              href="/about"
              className="font-mono text-xs tracking-widest border border-white/30 rounded-full px-6 py-2.5 text-white hover:bg-white hover:text-[#111111] transition-all duration-300 inline-block"
            >
              ABOUT US
            </Link>
          </ScrollReveal>
          <ScrollReveal type="scaleIn" className="relative h-64 rounded-2xl overflow-hidden hidden lg:block">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="Team"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </ScrollReveal>
        </div>

        <ScrollReveal type="fadeUp" className="mb-4">
          <span className="font-mono text-xs tracking-widest text-[var(--accent)]">CLIENT MOMENTUM</span>
        </ScrollReveal>
        <ScrollReveal type="clipBottom" className="mb-4">
          <h2 className="font-serif text-[clamp(2rem,5vw,5rem)] leading-none">
            WHAT CLIENTS SAY
          </h2>
        </ScrollReveal>
        <ScrollReveal type="fadeUp" delay={0.1} className="mb-16">
          <p className="text-[#999999] max-w-md">
            Real results from real partnerships.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={t.author} type="fadeUp" delay={i * 0.1}>
              <div className="bg-white text-[#111111] rounded-2xl p-8 h-full flex flex-col hover:-translate-y-2 transition-transform duration-300">
                <span className="font-mono text-[10px] tracking-widest bg-[#111111] text-white px-3 py-1 rounded-full w-fit mb-6">
                  {t.category}
                </span>
                <p className="text-[#333] leading-relaxed mb-8 flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-sm">{t.author}</div>
                  <div className="text-[#999] text-xs mt-0.5 font-mono">{t.role}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-12">
            <ScrollReveal type="fadeUp">
              <p className="text-[#666] leading-relaxed">
                Hand-picked projects showcasing our range of capabilities.
              </p>
            </ScrollReveal>
            <ScrollReveal type="clipBottom" className="text-center">
              <h2 className="font-serif text-[clamp(1.5rem,3vw,3rem)] leading-tight">
                OUR CASE STUDIES
              </h2>
            </ScrollReveal>
            <ScrollReveal type="fadeUp" className="text-right">
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
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
              "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&q=80",
              "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
            ].map((src, i) => (
              <ScrollReveal key={src} type="scaleIn" delay={i * 0.1}>
                <div className="relative h-64 rounded-xl overflow-hidden group cursor-pointer">
                  <Image
                    src={src}
                    alt={`Case study ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
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
