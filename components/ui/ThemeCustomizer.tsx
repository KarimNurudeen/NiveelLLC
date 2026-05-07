"use client";

import { useEffect, useRef, useState } from "react";
import { Palette, X, RotateCcw, Check } from "lucide-react";
import { gsap } from "@/lib/gsap";

const DEFAULT_ACCENT = "#F5D500";
const DEFAULT_BG     = "#111111";

const ACCENTS = [
  { name: "Gold",    value: "#F5D500", isDefault: true  },
  { name: "Blue",    value: "#3B82F6", isDefault: false },
  { name: "Emerald", value: "#10B981", isDefault: false },
  { name: "Purple",  value: "#8B5CF6", isDefault: false },
  { name: "Rose",    value: "#F43F5E", isDefault: false },
  { name: "Teal",    value: "#14B8A6", isDefault: false },
];

const BACKGROUNDS = [
  { name: "Pitch Black",   value: "#111111", isDefault: true  },
  { name: "Deep Charcoal", value: "#1C1C1E", isDefault: false },
];

function applyVars(accent: string, bg: string) {
  document.documentElement.style.setProperty("--accent",   accent);
  document.documentElement.style.setProperty("--site-bg",  bg);
}

export default function ThemeCustomizer() {
  const [open,   setOpen]   = useState(false);
  const [accent, setAccent] = useState(DEFAULT_ACCENT);
  const [bg,     setBg]     = useState(DEFAULT_BG);

  const panelRef    = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  /* ── Restore from localStorage on mount ── */
  useEffect(() => {
    const savedAccent = localStorage.getItem("nv-accent") ?? DEFAULT_ACCENT;
    const savedBg     = localStorage.getItem("nv-bg")     ?? DEFAULT_BG;
    setAccent(savedAccent);
    setBg(savedBg);
    applyVars(savedAccent, savedBg);
  }, []);

  /* ── Panel animation ── */
  useEffect(() => {
    const panel    = panelRef.current;
    const backdrop = backdropRef.current;
    if (!panel || !backdrop) return;

    if (open) {
      gsap.to(panel,    { x: "0%",  duration: 0.45, ease: "power4.inOut", pointerEvents: "all" });
      gsap.to(backdrop, { opacity: 1, duration: 0.3, pointerEvents: "all" });
    } else {
      gsap.to(panel,    { x: "100%", duration: 0.4, ease: "power3.inOut", pointerEvents: "none" });
      gsap.to(backdrop, { opacity: 0, duration: 0.25, pointerEvents: "none" });
    }
  }, [open]);

  /* ── Escape key ── */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  function handleAccent(value: string) {
    setAccent(value);
    document.documentElement.style.setProperty("--accent", value);
    localStorage.setItem("nv-accent", value);
  }

  function handleBg(value: string) {
    setBg(value);
    document.documentElement.style.setProperty("--site-bg", value);
    localStorage.setItem("nv-bg", value);
  }

  function resetDefault() {
    setAccent(DEFAULT_ACCENT);
    setBg(DEFAULT_BG);
    applyVars(DEFAULT_ACCENT, DEFAULT_BG);
    localStorage.setItem("nv-accent", DEFAULT_ACCENT);
    localStorage.setItem("nv-bg",     DEFAULT_BG);
  }

  const isDefault = accent === DEFAULT_ACCENT && bg === DEFAULT_BG;

  return (
    <>
      {/* ── Backdrop ── */}
      <div
        ref={backdropRef}
        className="fixed inset-0 z-[60] bg-black/30 opacity-0"
        style={{ pointerEvents: "none" }}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* ── Pull-tab ── */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Customize theme"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-[70] flex flex-col items-center justify-center gap-1.5 py-4 px-2 rounded-l-xl shadow-xl transition-all duration-300 hover:px-3"
        style={{ backgroundColor: accent }}
      >
        <Palette className="w-4 h-4 text-[#111111]" />
        <span
          className="text-[#111111] font-mono font-bold"
          style={{ fontSize: "9px", letterSpacing: "0.15em", writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          THEME
        </span>
      </button>

      {/* ── Panel ── */}
      <div
        ref={panelRef}
        className="fixed top-0 right-0 h-full w-72 bg-[#0E0E0E] border-l border-white/10 z-[70] flex flex-col"
        style={{ transform: "translateX(100%)", pointerEvents: "none" }}
        role="dialog"
        aria-label="Theme customizer"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
          <div>
            <p className="font-mono text-[10px] tracking-widest text-white/40">PERSONALISE</p>
            <h2 className="font-serif text-lg text-white mt-0.5">Theme</h2>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="w-8 h-8 flex items-center justify-center text-white/40 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-8">

          {/* ── Accent colour ── */}
          <div>
            <p className="font-mono text-[10px] tracking-widest text-white/40 mb-4">ACCENT COLOR</p>
            <div className="grid grid-cols-3 gap-3">
              {ACCENTS.map((a) => (
                <button
                  key={a.value}
                  onClick={() => handleAccent(a.value)}
                  title={a.name}
                  className="relative flex flex-col items-center gap-2 group"
                >
                  <span
                    className="w-full h-10 rounded-lg transition-all duration-200 group-hover:scale-105 flex items-center justify-center"
                    style={{ backgroundColor: a.value }}
                  >
                    {accent === a.value && (
                      <Check className="w-3.5 h-3.5 text-[#111111]" strokeWidth={3} />
                    )}
                  </span>
                  <span className="font-mono text-[9px] tracking-widest text-white/40">
                    {a.isDefault ? `${a.name} ★` : a.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* ── Background ── */}
          <div>
            <p className="font-mono text-[10px] tracking-widest text-white/40 mb-4">BACKGROUND</p>
            <div className="flex flex-col gap-2">
              {BACKGROUNDS.map((b) => (
                <button
                  key={b.value}
                  onClick={() => handleBg(b.value)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-all duration-200 ${
                    bg === b.value
                      ? "border-white/30 bg-white/6"
                      : "border-white/8 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-6 h-6 rounded-md border border-white/20"
                      style={{ backgroundColor: b.value }}
                    />
                    <span className="text-white text-sm">
                      {b.name}
                      {b.isDefault && (
                        <span className="ml-1.5 font-mono text-[9px] text-white/30">DEFAULT</span>
                      )}
                    </span>
                  </div>
                  {bg === b.value && <Check className="w-3.5 h-3.5 text-[var(--accent)]" strokeWidth={3} />}
                </button>
              ))}
            </div>
          </div>

          {/* ── Live preview strip ── */}
          <div>
            <p className="font-mono text-[10px] tracking-widest text-white/40 mb-3">PREVIEW</p>
            <div
              className="rounded-xl p-4 border border-white/10 flex flex-col gap-2"
              style={{ backgroundColor: bg }}
            >
              <span
                className="font-mono text-[10px] tracking-widest"
                style={{ color: accent }}
              >
                NIVEEL LLC
              </span>
              <span className="font-serif text-white text-lg leading-tight">
                Building for the world
              </span>
              <span className="text-white/50 text-xs">
                Delaware-registered LLC with global reach.
              </span>
              <button
                className="mt-1 w-fit font-mono text-[10px] tracking-widest px-3 py-1.5 rounded-full text-[#111111] font-semibold"
                style={{ backgroundColor: accent }}
              >
                GET STARTED
              </button>
            </div>
          </div>
        </div>

        {/* Footer — reset */}
        <div className="px-6 py-5 border-t border-white/8">
          <button
            onClick={resetDefault}
            disabled={isDefault}
            className="flex items-center justify-center gap-2 w-full font-mono text-xs tracking-widest py-3 rounded-xl border transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed border-white/15 text-white/60 hover:border-white/30 hover:text-white"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            RESET TO DEFAULT
          </button>
        </div>
      </div>
    </>
  );
}
