"use client";

import React, { useEffect, useRef, ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

type RevealType = "fadeUp" | "clipBottom" | "clipLeft" | "scaleIn";

interface ScrollRevealProps {
  children: ReactNode;
  type?: RevealType;
  delay?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

const fromProps: Record<RevealType, gsap.TweenVars> = {
  fadeUp: { opacity: 0, y: 60, ease: "power3.out" },
  clipBottom: {
    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
    y: 30,
    ease: "power4.out",
  },
  clipLeft: {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
    ease: "power4.out",
  },
  scaleIn: { opacity: 0, scale: 1.15, ease: "power3.out" },
};

const toProps: Record<RevealType, gsap.TweenVars> = {
  fadeUp: { opacity: 1, y: 0 },
  clipBottom: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", y: 0 },
  clipLeft: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
  scaleIn: { opacity: 1, scale: 1 },
};

export default function ScrollReveal({
  children,
  type = "fadeUp",
  delay = 0,
  duration = 0.9,
  className,
  style,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(el, fromProps[type], {
        ...toProps[type],
        duration,
        delay,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [type, delay, duration]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
