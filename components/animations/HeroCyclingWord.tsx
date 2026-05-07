"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const WORDS = ["FUTURE", "BRAND", "VISION", "TOMORROW"];

export default function HeroCyclingWord({ className, style }: { className?: string; style?: React.CSSProperties }) {
  const wordRef = useRef<HTMLSpanElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const el = wordRef.current;
    if (!el) return;

    // Initial entrance
    gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.7, delay: 0.45, ease: "power3.out" }
    );

    const id = setInterval(() => {
      gsap.to(el, {
        opacity: 0,
        y: -28,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
          indexRef.current = (indexRef.current + 1) % WORDS.length;
          el.textContent = WORDS[indexRef.current];
          gsap.fromTo(
            el,
            { opacity: 0, y: 32 },
            { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" }
          );
        },
      });
    }, 3200);

    return () => clearInterval(id);
  }, []);

  return (
    <span ref={wordRef} className={className} style={{ display: "block", opacity: 0, ...style }}>
      {WORDS[0]}
    </span>
  );
}
