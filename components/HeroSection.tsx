"use client";

import { useEffect, useState } from "react";

const ROLES = [
  "Quality Assurance Engineer",
  "WordPress Developer",
  "Bug Hunter",
  "Web Craftsman",
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setTimeout(() => setRevealed(true), 200);
  }, []);

  // Typewriter loop untuk role
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-16"
    >
      {/* Background grid subtle */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(184,134,11,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(184,134,11,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div
        className={`max-w-3xl w-full transition-all duration-1000 ${
          revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Eyebrow */}
        <p
          className="text-[10px] tracking-[0.6em] uppercase text-[#3a2e1e] mb-6"
          style={{ fontFamily: "var(--font-cinzel)" }}
        >
          ✦ &nbsp; Portofolio &nbsp; ✦
        </p>

        {/* Identity block — tanpa nama */}
        <div className="mb-8">
          <h1
            className="text-[clamp(3.5rem,10vw,8rem)] font-normal leading-[0.88] text-[#e8d5b0] mb-3"
            style={{
              fontFamily: "var(--font-fell)",
              textShadow: "0 0 80px rgba(180,130,50,0.1)",
            }}
          >
            Unknown
          </h1>
          <h2
            className="text-[clamp(3rem,8vw,6rem)] font-normal leading-[0.88]"
            style={{
              fontFamily: "var(--font-fell)",
              color: "transparent",
              WebkitTextStroke: "1px rgba(184,134,11,0.45)",
            }}
          >
            Developer.
          </h2>
        </div>

        {/* Role typewriter */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-6 h-px bg-[#b8860b]/40" />
          <p
            className="text-sm text-[#b8860b]/70 tracking-widest min-h-[1.4rem]"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            {displayed}
            <span className="animate-pulse text-[#d4a843]">|</span>
          </p>
        </div>

        {/* Deskripsi singkat */}
        <p
          className="text-sm md:text-base leading-loose text-[#5a4830] max-w-xl mb-12 italic"
          style={{ fontFamily: "var(--font-fell)" }}
        >
          Seseorang yang memastikan setiap baris kode bekerja dengan sempurna,
          dan membangun situs WordPress yang bukan sekadar indah — tapi juga
          tidak mudah rusak.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative border border-[#b8860b]/35 hover:border-[#b8860b]/70 px-8 py-3 text-[10px] tracking-[0.35em] uppercase text-[#9a7840] hover:text-[#c8b89a] transition-all duration-300 overflow-hidden"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            <span className="absolute inset-0 bg-[#b8860b]/0 group-hover:bg-[#b8860b]/6 transition-all duration-300" />
            <span className="relative">Lihat Karya</span>
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-[#3a2e1e] hover:text-[#6a5840] text-[10px] tracking-[0.35em] uppercase transition-colors"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Hubungi →
          </button>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-25">
        <span className="text-[8px] tracking-[0.5em] uppercase text-[#4a3820]" style={{ fontFamily: "var(--font-cinzel)" }}>
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#b8860b] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
