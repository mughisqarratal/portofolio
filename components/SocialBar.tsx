"use client";

// ============================================================
// PETUNJUK PENGGUNAAN:
// Tambahkan akun sosial media kamu di array SOCIAL_LINKS.
// Ganti "icon" dengan komponen ikon dari library pilihanmu
// (misal: react-icons, lucide-react, simple-icons, dsb.)
//
// Contoh dengan react-icons:
//   import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
//   { label: "GitHub",   href: "https://github.com/username",  icon: <FiGithub size={16} /> },
// ============================================================

const SOCIAL_LINKS = [
  // { label: "GitHub",    href: "https://github.com/username",      icon: <YourIconHere /> },
  // { label: "LinkedIn",  href: "https://linkedin.com/in/username", icon: <YourIconHere /> },
  // { label: "Instagram", href: "https://instagram.com/username",   icon: <YourIconHere /> },
  // { label: "Email",     href: "mailto:kamu@email.com",            icon: <YourIconHere /> },

  // PLACEHOLDER sementara — hapus & ganti dengan ikon + link asli kamu
  { label: "GitHub",    href: "#", icon: null },
  { label: "LinkedIn",  href: "#", icon: null },
  { label: "Instagram", href: "#", icon: null },
  { label: "Email",     href: "#", icon: null },
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
          className="group w-8 h-8 flex items-center justify-center border border-[#1a1508] bg-[#080608]/60 text-[#3a3020] hover:border-[#b8860b]/50 hover:text-[#b8860b]/80 hover:bg-[#b8860b]/5 transition-all duration-300 relative"
        >
          {/* Tooltip */}
          <span className="absolute left-11 bg-[#0e0c08]/90 border border-[#2a2010] text-[#c8b89a] text-[10px] tracking-widest uppercase px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap backdrop-blur-sm">
            {s.label}
          </span>

          {s.icon ? (
            s.icon
          ) : (
            /* Placeholder — hapus saat sudah tambah ikon */
            <span className="w-1.5 h-1.5 rounded-full bg-[#2a2010] group-hover:bg-[#b8860b]/60 transition-colors" />
          )}
        </a>
      ))}

      {/* Garis vertikal ke bawah */}
      <div className="w-px h-16 bg-gradient-to-b from-[#b8860b]/30 to-transparent" />
    </div>
  );
}
