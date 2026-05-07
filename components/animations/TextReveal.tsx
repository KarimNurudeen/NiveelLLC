"use client";

import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

type TagName = "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";

interface TextRevealProps {
  text: string;
  tag?: TagName;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  splitBy?: "chars" | "words";
}

export default function TextReveal({
  text,
  tag: Tag = "h2",
  className,
  style,
  delay = 0,
  splitBy = "chars",
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const el = containerRef.current;
    const tokens = splitBy === "chars" ? text.split("") : text.split(" ");

    el.innerHTML = tokens
      .map((token) => {
        if (splitBy === "chars" && token === " ") {
          return '<span style="display:inline-block; white-space:pre;">&nbsp;</span>';
        }
        return `<span style="display:inline-block; overflow:hidden;"><span class="reveal-inner" style="display:inline-block;">${token}</span></span>${splitBy === "words" ? " " : ""}`;
      })
      .join("");

    const inners = el.querySelectorAll<HTMLElement>(".reveal-inner");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        inners,
        { y: "110%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          stagger: splitBy === "chars" ? 0.03 : 0.06,
          duration: 0.8,
          ease: "power4.out",
          delay,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        }
      );
    });

    return () => {
      ctx.revert();
    };
  }, [text, delay, splitBy]);

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={containerRef} className={className} style={style} />
  );
}
