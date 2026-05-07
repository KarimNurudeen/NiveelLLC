"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 1024) return;

    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    let mouseX = 0;
    let mouseY = 0;

    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.to(inner, { x: mouseX, y: mouseY, duration: 0.05, ease: "none" });
      gsap.to(outer, { x: mouseX, y: mouseY, duration: 0.15, ease: "power2.out" });
    }

    function onEnter() {
      gsap.to(outer, {
        width: 60,
        height: 60,
        backgroundColor: "rgba(245, 213, 0, 0.15)",
        border: "1px solid rgba(245, 213, 0, 0.8)",
        duration: 0.25,
        ease: "power2.out",
      });
    }

    function onLeave() {
      gsap.to(outer, {
        width: 20,
        height: 20,
        backgroundColor: "rgba(245, 213, 0, 0.5)",
        border: "0px solid transparent",
        duration: 0.25,
        ease: "power2.out",
      });
    }

    const interactiveSelector = "a, button, input, textarea, [data-cursor-hover]";
    const interactives = document.querySelectorAll<HTMLElement>(interactiveSelector);

    window.addEventListener("mousemove", onMouseMove);
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    const observer = new MutationObserver(() => {
      document.querySelectorAll<HTMLElement>(interactiveSelector).forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={outerRef} className="cursor-outer" aria-hidden="true" />
      <div ref={innerRef} className="cursor-inner" aria-hidden="true" />
    </>
  );
}
