"use client";

import { useState } from "react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Hubungkan dengan email service (Resend, EmailJS, Formspree, dsb.)
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-32 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-6 mb-20">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#1a1508]" />
          <h2
            className="text-[10px] tracking-[0.5em] uppercase text-[#3a2e1e]"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Kontak
          </h2>
          <div className="h-px w-12 bg-[#1a1508]" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — teks */}
          <div>
            <h3
              className="text-3xl md:text-4xl text-[#e8d5b0] italic leading-tight mb-6"
              style={{ fontFamily: "var(--font-fell)" }}
            >
              Ada proyek?
              <br />
              <span className="text-[#b8860b]">Mari bicara.</span>
            </h3>
            <p
              className="text-sm text-[#4a3820] leading-loose italic mb-10"
              style={{ fontFamily: "var(--font-fell)" }}
            >
              Apakah kamu butuh situs WordPress yang solid, tim QA yang tahu
              cara kerja developer, atau keduanya — saya siap mendengarkan.
            </p>

            {/* Info kontak */}
            <div className="space-y-4">
              {[
                { label: "Email", value: "kamu@email.com" },
                { label: "Lokasi", value: "Indonesia" },
                { label: "Ketersediaan", value: "Terbuka untuk proyek baru" },
              ].map((item) => (
                <div key={item.label} className="flex gap-6 items-start">
                  <span
                    className="text-[9px] tracking-[0.4em] text-[#2a2010] w-24 shrink-0 pt-0.5"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="text-xs text-[#6a5840] italic"
                    style={{ fontFamily: "var(--font-fell)" }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="border border-[#150f05] p-8 bg-[#070509]/40 backdrop-blur-sm">
            {sent ? (
              <div className="text-center py-10">
                <div className="text-[#b8860b] text-2xl mb-3">✦</div>
                <p
                  className="text-sm text-[#c8b89a] italic"
                  style={{ fontFamily: "var(--font-fell)" }}
                >
                  Pesan terkirim. Saya akan segera menghubungi.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    className="text-[9px] tracking-[0.4em] uppercase text-[#2a2010] block mb-2"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    Nama
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nama kamu"
                    className="w-full bg-transparent border-b border-[#150f05] focus:border-[#b8860b]/40 py-2 text-sm text-[#c8b89a] placeholder:text-[#1e1a0e] outline-none transition-colors"
                    style={{ fontFamily: "var(--font-fell)" }}
                  />
                </div>
                <div>
                  <label
                    className="text-[9px] tracking-[0.4em] uppercase text-[#2a2010] block mb-2"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@kamu.com"
                    className="w-full bg-transparent border-b border-[#150f05] focus:border-[#b8860b]/40 py-2 text-sm text-[#c8b89a] placeholder:text-[#1e1a0e] outline-none transition-colors"
                    style={{ fontFamily: "var(--font-fell)" }}
                  />
                </div>
                <div>
                  <label
                    className="text-[9px] tracking-[0.4em] uppercase text-[#2a2010] block mb-2"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    Keperluan
                  </label>
                  <select
                    className="w-full bg-[#080608] border-b border-[#150f05] focus:border-[#b8860b]/40 py-2 text-sm text-[#6a5840] outline-none transition-colors"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    <option value="">Pilih...</option>
                    <option value="qa">QA / Testing</option>
                    <option value="wp">WordPress Development</option>
                    <option value="both">Keduanya</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>
                <div>
                  <label
                    className="text-[9px] tracking-[0.4em] uppercase text-[#2a2010] block mb-2"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    Pesan
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Ceritakan proyekmu..."
                    className="w-full bg-transparent border-b border-[#150f05] focus:border-[#b8860b]/40 py-2 text-sm text-[#c8b89a] placeholder:text-[#1e1a0e] outline-none transition-colors resize-none"
                    style={{ fontFamily: "var(--font-fell)" }}
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full border border-[#b8860b]/25 hover:border-[#b8860b]/55 py-3 text-[10px] tracking-[0.4em] uppercase text-[#6a5840] hover:text-[#c8b89a] transition-all duration-300 relative overflow-hidden"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  <span className="absolute inset-0 bg-[#b8860b]/0 group-hover:bg-[#b8860b]/5 transition-all" />
                  <span className="relative">Kirim Pesan ✦</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
