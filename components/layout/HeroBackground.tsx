"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const BG_IMAGES = [
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80",
];

export default function HeroBackground() {
  const panelsRef = useRef<HTMLDivElement[]>([]);
  const currentRef = useRef(0);

  useEffect(() => {
    const panels = panelsRef.current;
    if (!panels.length) return;

    const cycle = () => {
      const prev = currentRef.current;
      const next = (prev + 1) % BG_IMAGES.length;

      gsap.to(panels[prev], { opacity: 0, duration: 1.8, ease: "power2.inOut" });
      gsap.to(panels[next], { opacity: 1, duration: 1.8, ease: "power2.inOut" });

      currentRef.current = next;
    };

    const id = setInterval(cycle, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      {BG_IMAGES.map((src, i) => (
        <div
          key={src}
          ref={(el) => { if (el) panelsRef.current[i] = el; }}
          className="absolute inset-0 bg-center bg-cover transition-none"
          style={{
            backgroundImage: `url(${src})`,
            opacity: i === 0 ? 1 : 0,
          }}
        />
      ))}
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/58" />
    </div>
  );
}
