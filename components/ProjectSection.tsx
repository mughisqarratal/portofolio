"use client";

const PROJECTS = [
  {
    index: "01", type: "WordPress", title: "Toko Online Fashion",
    desc: "Custom WooCommerce store dengan tema unik, filter produk dinamis, dan integrasi payment gateway lokal. Diuji penuh end-to-end sebelum launch.",
    tags: ["WooCommerce", "Custom Theme", "PHP", "Payment Gateway"], year: "2024",
  },
  {
    index: "02", type: "QA", title: "Automation Test Suite — SaaS App",
    desc: "Membangun test suite otomatis menggunakan Cypress untuk aplikasi SaaS B2B. Coverage lebih dari 80% fitur utama, termasuk skenario edge case.",
    tags: ["Cypress", "JavaScript", "CI/CD", "Test Reporting"], year: "2024",
  },
  {
    index: "03", type: "WordPress", title: "Company Profile — Konstruksi",
    desc: "Situs company profile modern dengan Elementor, optimasi SEO on-page, Page Speed Score 90+, dan form inquiry terintegrasi dengan CRM.",
    tags: ["Elementor", "ACF", "SEO", "Performance"], year: "2023",
  },
  {
    index: "04", type: "QA", title: "API Testing — Fintech Platform",
    desc: "Pengujian menyeluruh REST API platform fintech menggunakan Postman & Newman. Dokumentasi lengkap, 200+ test case, integrasi ke pipeline CI.",
    tags: ["Postman", "Newman", "REST API", "CI Integration"], year: "2023",
  },
  {
    index: "05", type: "WordPress", title: "Blog & Membership Site",
    desc: "Platform konten dengan sistem membership, konten terkunci, dan halaman landing premium. Dioptimasi untuk kecepatan dan konversi.",
    tags: ["MemberPress", "Custom Plugin", "Optimization"], year: "2023",
  },
  {
    index: "06", type: "QA", title: "Regression Testing — E-commerce",
    desc: "Merancang dan menjalankan siklus regression testing menyeluruh untuk platform e-commerce menjelang major release. Zero critical bug lolos.",
    tags: ["Manual Testing", "Jira", "Test Case", "Regression"], year: "2022",
  },
];

const TYPE_STYLE: Record<string, string> = {
  QA:        "text-[#7abf70] border-[#3a6830]",
  WordPress: "text-[#a080c8] border-[#5a3880]",
};

export default function ProjectSection() {
  return (
    <section id="projects" className="relative py-32 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <div className="flex items-center gap-6 mb-20">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#3a2e1e]" />
          <h2 className="text-sm tracking-[0.5em] uppercase text-[#9a8060]" style={{ fontFamily: "var(--font-cinzel)" }}>
            Proyek
          </h2>
          <div className="h-px w-12 bg-[#3a2e1e]" />
        </div>

        {/* Legend */}
        <div className="flex items-center gap-6 mb-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 border-2 border-[#3a6830]" />
            <span className="text-xs tracking-widest text-[#7abf70]" style={{ fontFamily: "var(--font-cinzel)" }}>QA</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 border-2 border-[#5a3880]" />
            <span className="text-xs tracking-widest text-[#a080c8]" style={{ fontFamily: "var(--font-cinzel)" }}>WordPress</span>
          </div>
        </div>

        {/* Project list */}
        <div className="space-y-px">
          {PROJECTS.map((proj) => (
            <div
              key={proj.index}
              className="group border border-[#1e1a0e] hover:border-[#d4a843]/30 p-6 md:p-8 transition-all duration-300 hover:bg-[#0a0805]/60 cursor-pointer relative"
            >
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#d4a843]/0 group-hover:bg-[#d4a843]/50 transition-all duration-500" />

              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <span className="text-sm text-[#4a3820] group-hover:text-[#7a6040] transition-colors shrink-0 mt-0.5" style={{ fontFamily: "var(--font-cinzel)" }}>
                  {proj.index}
                </span>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl text-[#e8d5b0] group-hover:text-white transition-colors" style={{ fontFamily: "var(--font-fell)" }}>
                      {proj.title}
                    </h3>
                    <span className={`border px-2 py-0.5 text-xs tracking-widest ${TYPE_STYLE[proj.type]}`} style={{ fontFamily: "var(--font-cinzel)" }}>
                      {proj.type}
                    </span>
                  </div>
                  <p className="text-sm text-[#7a6848] leading-relaxed italic mb-4 max-w-xl" style={{ fontFamily: "var(--font-fell)" }}>
                    {proj.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="text-xs text-[#5a4830] border border-[#2a2010] px-3 py-1 hover:text-[#9a8060] hover:border-[#4a3820] transition-colors" style={{ fontFamily: "var(--font-cinzel)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-right shrink-0 hidden md:block">
                  <span className="text-sm text-[#4a3820] group-hover:text-[#7a6040] transition-colors">{proj.year}</span>
                  <div className="text-[#4a3820] group-hover:text-[#d4a843] transition-colors mt-2 text-lg">→</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}