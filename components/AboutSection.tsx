"use client";

const STATS = [
  { value: "3+", label: "Tahun Pengalaman" },
  { value: "20+", label: "Proyek Selesai" },
  { value: "500+", label: "Bug Ditemukan" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <div className="flex items-center gap-6 mb-20">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#3a2e1e]" />
          <h2 className="text-sm tracking-[0.5em] uppercase text-[#9a8060]" style={{ fontFamily: "var(--font-cinzel)" }}>
            Tentang
          </h2>
          <div className="h-px w-12 bg-[#3a2e1e]" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h3 className="text-3xl md:text-4xl text-[#e8d5b0] italic leading-tight mb-6" style={{ fontFamily: "var(--font-fell)" }}>
              Dua peran,{" "}
              <span className="text-[#d4a843]">satu visi:</span>
              <br /> digital yang benar-benar bekerja.
            </h3>

            <p className="text-base leading-loose text-[#9a8060] mb-5 italic" style={{ fontFamily: "var(--font-fell)" }}>
              Saya adalah QA Engineer yang memahami cara membangun — dan
              WordPress Developer yang tahu cara menguji. Kombinasi ini membuat
              saya melihat produk dari dua sudut yang kebanyakan orang hanya pilih satu.
            </p>
            <p className="text-base leading-loose text-[#9a8060] italic" style={{ fontFamily: "var(--font-fell)" }}>
              Ketika saya membangun sebuah situs, saya sekaligus memikirkan
              bagaimana ia bisa gagal. Dan ketika saya menguji, saya memahami
              keputusan teknis yang ada di baliknya.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {STATS.map((s) => (
                <div key={s.label} className="border-l-2 border-[#d4a843]/40 pl-4">
                  <div className="text-3xl text-[#d4a843]" style={{ fontFamily: "var(--font-fell)" }}>{s.value}</div>
                  <div className="text-xs text-[#7a6848] tracking-wider mt-1" style={{ fontFamily: "var(--font-cinzel)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — dual identity cards */}
          <div className="space-y-4">
            {/* QA Card */}
            <div className="border border-[#2a2010] p-6 hover:border-[#d4a843]/40 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-[#2a2010] group-hover:border-[#d4a843]/50 flex items-center justify-center text-[#7a6040] group-hover:text-[#d4a843] transition-all duration-300 shrink-0">
                  <span className="text-sm font-semibold" style={{ fontFamily: "var(--font-cinzel)" }}>QA</span>
                </div>
                <div>
                  <h4 className="text-base text-[#e8d5b0] tracking-wider mb-2" style={{ fontFamily: "var(--font-cinzel)" }}>
                    Quality Assurance
                  </h4>
                  <p className="text-sm text-[#7a6848] leading-relaxed italic" style={{ fontFamily: "var(--font-fell)" }}>
                    Merancang test case, menemukan bug sebelum pengguna
                    menemukannya, dan memastikan setiap fitur bekerja sesuai
                    ekspektasi — di semua skenario, termasuk yang tidak terduga.
                  </p>
                </div>
              </div>
            </div>

            {/* WordPress Card */}
            <div className="border border-[#2a2010] p-6 hover:border-[#d4a843]/40 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-[#2a2010] group-hover:border-[#d4a843]/50 flex items-center justify-center text-[#7a6040] group-hover:text-[#d4a843] transition-all duration-300 shrink-0">
                  <span className="text-sm font-semibold" style={{ fontFamily: "var(--font-cinzel)" }}>WP</span>
                </div>
                <div>
                  <h4 className="text-base text-[#e8d5b0] tracking-wider mb-2" style={{ fontFamily: "var(--font-cinzel)" }}>
                    WordPress Developer
                  </h4>
                  <p className="text-sm text-[#7a6848] leading-relaxed italic" style={{ fontFamily: "var(--font-fell)" }}>
                    Membangun situs WordPress dari nol — custom theme, plugin
                    development, WooCommerce, hingga optimasi performa dan
                    keamanan yang tidak main-main.
                  </p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="border-l-2 border-[#d4a843]/40 pl-5 py-2 mt-6">
              <p className="text-sm text-[#7a6848] italic leading-relaxed" style={{ fontFamily: "var(--font-fell)" }}>
                "Kode yang bagus adalah kode yang bisa saya uji.
                <br />
                Kode yang hebat adalah kode yang lulus uji tanpa perlu diubah."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}