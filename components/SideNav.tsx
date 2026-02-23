"use client";

import { useState, useEffect } from "react";
import { Home, User, FolderGit2, Mails, CodeXml } from "lucide-react";

// ============================================================
// PETUNJUK PENGGUNAAN:
// Tambahkan menu navigasi kamu di array NAV_ITEMS di bawah.
// Ganti "icon" dengan komponen ikon dari library pilihanmu
// (misal: lucide-react, react-icons, heroicons, dsb.)
//
// Contoh dengan lucide-react:
//  
//   { id: "home",     label: "Home",     icon: <Home size={18} /> },
// ============================================================

const NAV_ITEMS = [
  { id: "home",     label: "Home",     icon: <Home size={18} /> },
  { id: "about",    label: "About",    icon: <User size={18} /> },
  { id: "skills",   label: "Skills",   icon: <CodeXml size={18} /> },
  { id: "projects", label: "Projects", icon: <FolderGit2 size={18} /> },
  { id: "contact",  label: "Contact",  icon: <Mails size={18} /> },
];

export default function SideNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2">
      {/* Garis atas */}
      <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#d4a843]/60 mb-1" />

      {NAV_ITEMS.map((item) => (
        <div key={item.id} className="group relative flex items-center justify-end">
          {/* Tooltip label */}
          <span className="absolute right-12 bg-[#0e0c08]/95 border border-[#d4a843]/40 text-[#e8d5b0] text-xs tracking-widest uppercase px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap backdrop-blur-sm">
            {item.label}
          </span>

          {/* Tombol ikon */}
          <button
            onClick={() => scrollTo(item.id)}
            className={`
              w-10 h-10 flex items-center justify-center border-2 transition-all duration-300 relative
              ${active === item.id
                ? "border-[#d4a843] bg-[#d4a843]/20 text-[#f0c040] shadow-[0_0_12px_rgba(212,168,67,0.4)]"
                : "border-[#3a2e1e] bg-[#0a0805]/70 text-[#7a6848] hover:border-[#d4a843]/60 hover:text-[#d4a843] hover:bg-[#d4a843]/10"
              }
            `}
            aria-label={item.label}
          >
            {/* Active left bar */}
            {active === item.id && (
              <span className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-1 h-5 bg-[#d4a843] rounded-full shadow-[0_0_6px_rgba(212,168,67,0.8)]" />
            )}

            {item.icon ? (
              item.icon
            ) : (
              <span className={`w-2 h-2 rounded-full transition-all ${
                active === item.id
                  ? "bg-[#f0c040] shadow-[0_0_6px_rgba(240,192,64,0.8)]"
                  : "bg-[#4a3820]"
              }`} />
            )}
          </button>
        </div>
      ))}

      {/* Garis bawah */}
      <div className="w-px h-10 bg-gradient-to-b from-[#d4a843]/60 to-transparent mt-1" />
    </nav>
  );
}