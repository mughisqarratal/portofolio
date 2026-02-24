"use client";

import { useState } from "react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-10 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <div className="flex items-center gap-6 mb-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#3a2e1e]" />
          <h2 className="text-sm tracking-[0.5em] uppercase font-bold text-[#9a8060]" style={{ fontFamily: "var(--font-cinzel)" }}>
            Contact
          </h2>
          <div className="h-px w-12 bg-[#3a2e1e]" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h3 className="text-3xl md:text-4xl text-[#e8d5b0] italic leading-tight mb-6" style={{ fontFamily: "var(--font-fell)" }}>
              Ada proyek?<br />
              <span className="text-[#d4a843]">Mari bicara.</span>
            </h3>
            <p className="text-base text-[#9a8060] leading-loose italic mb-10" style={{ fontFamily: "var(--font-fell)" }}>
              Apakah kamu butuh situs WordPress yang solid, tim QA yang tahu cara kerja developer,
              atau keduanya — saya siap mendengarkan.
            </p>

            <div className="space-y-5">
              {[
                { label: "Email",        value: "cutqarratalmughis@email.com" },
                { label: "Lokasi",       value: "Indonesia" },
                { label: "Ketersediaan", value: "Terbuka untuk proyek baru" },
              ].map((item) => (
                <div key={item.label} className="flex gap-6 items-start">
                  <span className="text-xs tracking-[0.3em] text-[#5a4830] w-28 shrink-0 pt-0.5" style={{ fontFamily: "var(--font-cinzel)" }}>
                    {item.label}
                  </span>
                  <span className="text-sm text-[#9a8060] italic" style={{ fontFamily: "var(--font-fell)" }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="border border-[#2a2010] p-8 bg-[#070509]/40 backdrop-blur-sm">
            {sent ? (
              <div className="text-center py-10">
                <div className="text-[#d4a843] text-3xl mb-3">✦</div>
                <p className="text-base text-[#c8b89a] italic" style={{ fontFamily: "var(--font-fell)" }}>
                  Pesan terkirim. Saya akan segera menghubungi.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-xs tracking-[0.3em] uppercase text-[#7a6040] block mb-2" style={{ fontFamily: "var(--font-cinzel)" }}>Nama</label>
                  <input type="text" required placeholder="Nama kamu"
                    className="w-full bg-transparent border-b border-[#2a2010] focus:border-[#d4a843]/60 py-2 text-base text-[#c8b89a] placeholder:text-[#3a2e1e] outline-none transition-colors"
                    style={{ fontFamily: "var(--font-fell)" }} />
                </div>
                <div>
                  <label className="text-xs tracking-[0.3em] uppercase text-[#7a6040] block mb-2" style={{ fontFamily: "var(--font-cinzel)" }}>Email</label>
                  <input type="email" required placeholder="email@kamu.com"
                    className="w-full bg-transparent border-b border-[#2a2010] focus:border-[#d4a843]/60 py-2 text-base text-[#c8b89a] placeholder:text-[#3a2e1e] outline-none transition-colors"
                    style={{ fontFamily: "var(--font-fell)" }} />
                </div>
                <div>
                  <label className="text-xs tracking-[0.3em] uppercase text-[#7a6040] block mb-2" style={{ fontFamily: "var(--font-cinzel)" }}>Keperluan</label>
                  <select className="w-full bg-[#080608] border-b border-[#2a2010] focus:border-[#d4a843]/60 py-2 text-sm text-[#7a6848] outline-none transition-colors"
                    style={{ fontFamily: "var(--font-cinzel)" }}>
                    <option value="">Pilih...</option>
                    <option value="qa">QA / Testing</option>
                    <option value="wp">WordPress Development</option>
                    <option value="both">Keduanya</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs tracking-[0.3em] uppercase text-[#7a6040] block mb-2" style={{ fontFamily: "var(--font-cinzel)" }}>Pesan</label>
                  <textarea rows={4} required placeholder="Ceritakan proyekmu..."
                    className="w-full bg-transparent border-b border-[#2a2010] focus:border-[#d4a843]/60 py-2 text-base text-[#c8b89a] placeholder:text-[#3a2e1e] outline-none transition-colors resize-none"
                    style={{ fontFamily: "var(--font-fell)" }} />
                </div>
                <button type="submit"
                  className="group w-full border border-[#d4a843]/40 hover:border-[#d4a843]/80 py-3.5 text-sm tracking-[0.3em] uppercase text-[#9a8060] hover:text-[#e8d5b0] transition-all duration-300 relative overflow-hidden"
                  style={{ fontFamily: "var(--font-cinzel)" }}>
                  <span className="absolute inset-0 bg-[#d4a843]/0 group-hover:bg-[#d4a843]/8 transition-all" />
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