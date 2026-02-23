"use client";
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";

// ============================================================
// PETUNJUK PENGGUNAAN:
// Tambahkan akun sosial media kamu di array SOCIAL_LINKS.
// Ganti "icon" dengan komponen ikon dari library pilihanmu
//
// Contoh dengan react-icons:
//   import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
//   { label: "GitHub",   href: "https://github.com/username",  icon: <FiGithub size={16} /> },
// ============================================================

const SOCIAL_LINKS = [
  { label: "GitHub",    href: "https://github.com/mughisqarratal",      icon: <FiGithub size={16} /> },
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/cutqarratalmughis/", icon: <FiLinkedin size={16} /> },
  { label: "Instagram", href: "https://instagram.com/mughis.tjoet_",   icon: <FiInstagram size={16} /> },
  { label: "Email",     href: "mailto:cutqarratalmughis@gmail.com.com",            icon: <FiMail size={16} /> },

  // { label: "GitHub", href: "#", icon: null },
  // { label: "LinkedIn", href: "#", icon: null },
  // { label: "Instagram", href: "#", icon: null },
  // { label: "Email", href: "#", icon: null },
];

export default function SocialBar() {
  return (
    <div className="fixed left-6 bottom-0 z-50 flex flex-col items-center gap-3">
      {SOCIAL_LINKS.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target={s.href.startsWith("mailto") ? "_self" : "_blank"}
          rel="noopener noreferrer"
          aria-label={s.label}
          className="group w-9 h-9 flex items-center justify-center border-2 border-[#3a2e1e] bg-[#0a0805]/70 text-[#7a6848] hover:border-[#d4a843]/70 hover:text-[#d4a843] hover:bg-[#d4a843]/10 transition-all duration-300 relative"
        >
          {/* Tooltip */}
          <span className="absolute left-12 bg-[#0e0c08]/95 border border-[#d4a843]/40 text-[#e8d5b0] text-xs tracking-widest uppercase px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap backdrop-blur-sm">
            {s.label}
          </span>

          {s.icon ? (
            s.icon
          ) : (
            <span className="w-2 h-2 rounded-full bg-[#4a3820] group-hover:bg-[#d4a843] transition-colors" />
          )}
        </a>
      ))}

      {/* Garis vertikal ke bawah */}
      <div className="w-px h-16 bg-gradient-to-b from-[#d4a843]/40 to-transparent" />
    </div>
  );
}
