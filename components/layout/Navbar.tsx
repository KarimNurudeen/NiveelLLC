"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone, Menu, X, ArrowRight,
  Users, Briefcase, LayoutGrid, Package, Sparkles,
  MessageSquare, Smartphone, Globe, Gamepad2, BookOpen, UsersRound,
} from "lucide-react";
import { gsap } from "@/lib/gsap";

const LINKS = [
  { name: "ABOUT US",  path: "/about",    icon: Users,      hasDrawer: false },
  { name: "SERVICES",  path: "/services", icon: Briefcase,  hasDrawer: true  },
  { name: "SHOWCASE",  path: "/showcase", icon: LayoutGrid, hasDrawer: false },
  { name: "PRODUCTS",  path: "/products", icon: Package,    hasDrawer: false },
  { name: "DEEP AI",   path: "/deep-ai",  icon: Sparkles,   hasDrawer: false },
];

const SERVICES = [
  { name: "Consultation",          desc: "Strategic planning and expert guidance for your projects",      icon: MessageSquare },
  { name: "Mobile App Development",desc: "Native and cross-platform mobile applications",                icon: Smartphone    },
  { name: "Website Development",   desc: "Modern, responsive websites and web applications",             icon: Globe         },
  { name: "Game Development",      desc: "Immersive gaming experiences across platforms",                icon: Gamepad2      },
  { name: "Bookkeeping",           desc: "Daily, monthly & annual financial record-keeping services",    icon: BookOpen      },
  { name: "Collaboration",         desc: "Team augmentation and partnership solutions",                  icon: UsersRound    },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isHome = pathname === "/";

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileLinksRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const drawerItemsRef = useRef<HTMLDivElement>(null);

  // Close both on route change
  useEffect(() => {
    setMenuOpen(false);
    setDrawerOpen(false);
  }, [pathname]);

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu animation
  useEffect(() => {
    if (!mobileMenuRef.current) return;
    if (menuOpen) {
      gsap.to(mobileMenuRef.current, {
        clipPath: "circle(150% at 95% 5%)",
        duration: 0.6,
        ease: "power4.inOut",
        pointerEvents: "all",
      });
      if (mobileLinksRef.current) {
        const links = mobileLinksRef.current.querySelectorAll(".mobile-link");
        gsap.fromTo(
          links,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.08, delay: 0.3, duration: 0.5, ease: "power3.out" }
        );
      }
    } else {
      gsap.to(mobileMenuRef.current, {
        clipPath: "circle(0% at 95% 5%)",
        duration: 0.5,
        ease: "power4.inOut",
        pointerEvents: "none",
      });
    }
  }, [menuOpen]);

  // Services drawer animation
  useEffect(() => {
    const drawer = drawerRef.current;
    const backdrop = backdropRef.current;
    if (!drawer || !backdrop) return;

    if (drawerOpen) {
      // Slide drawer in from right
      gsap.to(drawer, { x: "0%", duration: 0.5, ease: "power4.inOut", pointerEvents: "all" });
      gsap.to(backdrop, { opacity: 1, duration: 0.35, pointerEvents: "all" });

      // Stagger the service items
      if (drawerItemsRef.current) {
        const items = drawerItemsRef.current.querySelectorAll(".drawer-item");
        gsap.fromTo(
          items,
          { x: 40, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.07, delay: 0.25, duration: 0.45, ease: "power3.out" }
        );
      }
    } else {
      gsap.to(drawer, { x: "100%", duration: 0.4, ease: "power3.inOut", pointerEvents: "none" });
      gsap.to(backdrop, { opacity: 0, duration: 0.3, pointerEvents: "none" });
    }
  }, [drawerOpen]);

  // Escape key closes drawer
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setDrawerOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const navBg = scrolled
    ? "bg-[#150c2e]/85 backdrop-blur-2xl border-b border-white/10 py-4 shadow-xl shadow-black/30"
    : "bg-[#150c2e]/60 backdrop-blur-2xl border-b border-white/[0.07] py-5";

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/niveellogo.jpg"
              alt="Niveel LLC"
              width={40}
              height={40}
              className="rounded-lg"
              priority
            />
            <span className="font-mono text-sm tracking-widest text-white hidden sm:block">
              NIVEEL LLC
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {LINKS.map((link) => {
              const Icon = link.icon;
              return link.hasDrawer ? (
                <button
                  key={link.name}
                  onClick={() => setDrawerOpen((v) => !v)}
                  className="flex items-center gap-1.5 font-mono text-sm tracking-widest text-white/80 hover:text-white transition-colors duration-200 relative group"
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  {link.name}
                  <span
                    className="absolute -bottom-0.5 left-0 h-px bg-[var(--accent)] transition-all duration-300"
                    style={{ width: drawerOpen ? "100%" : "0%" }}
                  />
                </button>
              ) : (
                <Link
                  key={link.name}
                  href={link.path}
                  className="flex items-center gap-1.5 font-mono text-sm tracking-widest text-white/80 hover:text-white transition-colors duration-200 relative group"
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  {link.name}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[var(--accent)] group-hover:w-full transition-all duration-300" />
                </Link>
              );
            })}
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+1234567890"
              className="text-white/70 hover:text-white transition-colors duration-200"
              aria-label="Call us"
            >
              <Phone className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="font-mono text-sm tracking-widest border border-white/50 px-5 py-2 text-white hover:bg-white hover:text-[#111111] transition-all duration-300"
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* ── Services Drawer backdrop ── */}
      <div
        ref={backdropRef}
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm opacity-0"
        style={{ pointerEvents: "none" }}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* ── Services Drawer ── */}
      <div
        ref={drawerRef}
        className="fixed top-0 right-0 h-full w-full max-w-sm bg-[#161616] z-50 flex flex-col"
        style={{ transform: "translateX(100%)", pointerEvents: "none" }}
        role="dialog"
        aria-label="Services menu"
      >
        {/* Header row */}
        <div className="flex items-center justify-between px-7 pt-8 pb-5">
          <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase">
            Our Services
          </span>
          <button
            onClick={() => setDrawerOpen(false)}
            className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors duration-200"
            aria-label="Close services drawer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Service items */}
        <div ref={drawerItemsRef} className="flex-1 overflow-y-auto px-4 pb-6 flex flex-col gap-1">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.name}
                href="/services"
                onClick={() => setDrawerOpen(false)}
                className={`drawer-item group flex items-center gap-4 px-4 py-4 rounded-xl transition-colors duration-200 ${
                  i === 0 ? "bg-white/10" : "hover:bg-white/6"
                }`}
              >
                {/* Icon box */}
                <div className="w-10 h-10 rounded-lg bg-white/8 flex items-center justify-center shrink-0 group-hover:bg-white/12 transition-colors duration-200">
                  <Icon className="w-4.5 h-4.5 text-white/70" />
                </div>
                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="text-white text-sm font-medium leading-tight">
                    {s.name}
                  </div>
                  <div className="text-white/40 text-xs mt-0.5 leading-snug">
                    {s.desc}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-7 py-5 border-t border-white/8">
          <Link
            href="/services"
            onClick={() => setDrawerOpen(false)}
            className="flex items-center justify-between w-full font-mono text-[10px] tracking-widest text-white/40 hover:text-white transition-colors duration-200 group"
          >
            VIEW ALL SERVICES
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 z-40 bg-[#111111] flex flex-col justify-center px-8"
        style={{ clipPath: "circle(0% at 95% 5%)", pointerEvents: "none" }}
      >
        <div ref={mobileLinksRef} className="flex flex-col gap-4 sm:gap-6 mt-12 sm:mt-16">
          {LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.path}
                className="mobile-link flex items-center gap-3 font-serif text-3xl sm:text-4xl text-white hover:text-[var(--accent)] transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                <Icon className="w-6 h-6 shrink-0 opacity-60" />
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="mobile-link mt-8 inline-block font-mono text-sm tracking-widest border border-white/40 rounded-full px-6 py-3 text-white hover:bg-[var(--accent)] hover:text-[#111111] hover:border-[var(--accent)] transition-all duration-300 w-fit"
            onClick={() => setMenuOpen(false)}
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </>
  );
}
