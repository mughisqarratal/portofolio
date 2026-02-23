"use client";

import { useState, useEffect } from "react";

// ============================================================
// PETUNJUK PENGGUNAAN:
// Tambahkan menu navigasi kamu di array NAV_ITEMS di bawah.
// Ganti "icon" dengan komponen ikon dari library pilihanmu
// (misal: lucide-react, react-icons, heroicons, dsb.)
//
// Contoh dengan lucide-react:
//   import { Home, User, Briefcase, Mail } from "lucide-react";
//   { id: "home",     label: "Home",     icon: <Home size={18} /> },
// ============================================================

const NAV_ITEMS = [
  // { id: "home",     label: "Home",     icon: <YourIconHere /> },
  // { id: "about",    label: "About",    icon: <YourIconHere /> },
  // { id: "skills",   label: "Skills",   icon: <YourIconHere /> },
  // { id: "projects", label: "Projects", icon: <YourIconHere /> },
  // { id: "contact",  label: "Contact",  icon: <YourIconHere /> },

  // PLACEHOLDER sementara — hapus & ganti dengan ikon asli kamu
  { id: "home",     label: "Home",     icon: null },
  { id: "about",    label: "About",    icon: null },
  { id: "skills",   label: "Skills",   icon: null },
  { id: "projects", label: "Projects", icon: null },
  { id: "contact",  label: "Contact",  icon: null },
];

export default function SideNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
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
      <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#b8860b]/40 mb-1" />

      {NAV_ITEMS.map((item) => (
        <div key={item.id} className="group relative flex items-center justify-end">
          {/* Tooltip label — muncul saat hover */}
          <span className="absolute right-12 bg-[#0e0c08]/90 border border-[#2a2010] text-[#c8b89a] text-[10px] tracking-widest uppercase px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap backdrop-blur-sm">
            {item.label}
          </span>

          {/* Tombol ikon */}
          <button
            onClick={() => scrollTo(item.id)}
            className={`
              w-9 h-9 flex items-center justify-center border transition-all duration-300 relative
              ${active === item.id
                ? "border-[#b8860b]/70 bg-[#b8860b]/10 text-[#d4a843]"
                : "border-[#1a1508] bg-[#080608]/60 text-[#3a3020] hover:border-[#b8860b]/40 hover:text-[#b8860b]/70"
              }
            `}
            aria-label={item.label}
          >
            {/* Active indicator */}
            {active === item.id && (
              <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-[#b8860b]/70" />
            )}

            {item.icon ? (
              item.icon
            ) : (
              /* Placeholder dot — hapus saat sudah tambah ikon */
              <span className={`w-1.5 h-1.5 rounded-full transition-all ${active === item.id ? "bg-[#d4a843]" : "bg-[#2a2010]"}`} />
            )}
          </button>
        </div>
      ))}

      {/* Garis bawah */}
      <div className="w-px h-10 bg-gradient-to-b from-[#b8860b]/40 to-transparent mt-1" />
    </nav>
  );
}
