"use client";

import { useRef, ReactNode, MouseEvent } from "react";
import { gsap } from "@/lib/gsap";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export default function MagneticButton({
  children,
  className,
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * strength;
    const dy = (e.clientY - cy) * strength;
    gsap.to(ref.current, { x: dx, y: dy, duration: 0.3, ease: "power2.out" });
  }

  function handleMouseLeave() {
    if (!ref.current) return;
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      ease: "elastic.out(1, 0.3)",
      duration: 0.8,
    });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
