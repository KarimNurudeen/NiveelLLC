"use client";

import Link from "next/link";
import Image from "next/image";
import { X, Globe, Rss, Link2, Phone, Mail, MapPin } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const EXPLORE = ["About Us", "Services", "Consultation", "Contact"];
const SOLUTIONS = ["Web Development", "Mobile Apps", "Game Development", "AI Solutions"];
const COMPANY = ["Collaboration", "Bookkeeping", "niveel.com", "info@niveel.com"];

const SOCIALS = [
  { icon: X, href: "#", label: "X (Twitter)" },
  { icon: Globe, href: "#", label: "Website" },
  { icon: Rss, href: "#", label: "Blog" },
  { icon: Link2, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--accent)] text-[#111111] pt-20 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Left */}
          <div>
            <ScrollReveal type="clipBottom">
              <h2 className="font-serif text-3xl md:text-4xl xl:text-5xl leading-tight mb-10 max-w-lg">
                LET&rsquo;S WORK TOGETHER IN BUILDING FUTURE
              </h2>
            </ScrollReveal>

            {/* Social icons */}
            <div className="flex gap-3 mb-10">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-12 h-12 rounded-full border-2 border-[#111111] flex items-center justify-center hover:bg-[#111111] hover:text-[var(--accent)] transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-3 font-mono text-xs tracking-wider opacity-70">
              <div className="flex items-center gap-2">
                <Phone className="w-3 h-3" />
                <span>(908) 416-8408</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3 h-3" />
                <span>adm@niveel.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3" />
                <span>1255 Magie Ave, Suite 352, Union, NJ 07083</span>
              </div>
            </div>
          </div>

          {/* Right columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              { heading: "EXPLORE", links: EXPLORE },
              { heading: "SOLUTIONS", links: SOLUTIONS },
              { heading: "COMPANY", links: COMPANY },
            ].map(({ heading, links }) => (
              <div key={heading}>
                <h4 className="font-mono text-xs tracking-widest mb-5 opacity-50">{heading}</h4>
                <ul className="flex flex-col gap-3">
                  {links.map((l) => (
                    <li key={l}>
                      <Link
                        href="#"
                        className="font-sans text-sm hover:opacity-60 transition-opacity duration-200"
                      >
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Giant NIVEEL LLC text with logo */}
        <ScrollReveal type="clipBottom">
          <div className="flex items-center justify-end gap-6 overflow-hidden mb-8">
            <Image
              src="/niveellogo.jpg"
              alt="Niveel LLC"
              width={110}
              height={110}
              className="rounded-2xl shrink-0"
            />
            <span
              className="font-serif opacity-90 leading-none"
              style={{ fontSize: "clamp(4rem, 12vw, 12rem)" }}
            >
              NIVEEL LLC
            </span>
          </div>
        </ScrollReveal>

        {/* Bottom bar */}
        <div className="border-t border-[#111111]/20 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-xs tracking-wider opacity-60">
          <span>© {new Date().getFullYear()} Niveel LLC. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
            <Link href="#" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
