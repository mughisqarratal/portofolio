"use client";

const PROJECTS = [
  {
    index: "01",
    type: "WordPress",
    title: "Toko Online Fashion",
    desc: "Custom WooCommerce store dengan tema unik, filter produk dinamis, dan integrasi payment gateway lokal. Diuji penuh end-to-end sebelum launch.",
    tags: ["WooCommerce", "Custom Theme", "PHP", "Payment Gateway"],
    year: "2024",
  },
  {
    index: "02",
    type: "QA",
    title: "Automation Test Suite — SaaS App",
    desc: "Membangun test suite otomatis menggunakan Cypress untuk aplikasi SaaS B2B. Coverage lebih dari 80% fitur utama, termasuk skenario edge case.",
    tags: ["Cypress", "JavaScript", "CI/CD", "Test Reporting"],
    year: "2024",
  },
  {
    index: "03",
    type: "WordPress",
    title: "Company Profile — Konstruksi",
    desc: "Situs company profile modern dengan Elementor, optimasi SEO on-page, Page Speed Score 90+, dan form inquiry terintegrasi dengan CRM.",
    tags: ["Elementor", "ACF", "SEO", "Performance"],
    year: "2023",
  },
  {
    index: "04",
    type: "QA",
    title: "API Testing — Fintech Platform",
    desc: "Pengujian menyeluruh REST API platform fintech menggunakan Postman & Newman. Dokumentasi lengkap, 200+ test case, integrasi ke pipeline CI.",
    tags: ["Postman", "Newman", "REST API", "CI Integration"],
    year: "2023",
  },
  {
    index: "05",
    type: "WordPress",
    title: "Blog & Membership Site",
    desc: "Platform konten dengan sistem membership, konten terkunci, dan halaman landing premium. Dioptimasi untuk kecepatan dan konversi.",
    tags: ["MemberPress", "Custom Plugin", "Optimization"],
    year: "2023",
  },
  {
    index: "06",
    type: "QA",
    title: "Regression Testing — E-commerce",
    desc: "Merancang dan menjalankan siklus regression testing menyeluruh untuk platform e-commerce menjelang major release. Zero critical bug lolos.",
    tags: ["Manual Testing", "Jira", "Test Case", "Regression"],
    year: "2022",
  },
];

const TYPE_COLOR: Record<string, string> = {
  QA: "text-[#7a9870] border-[#3a5830]",
  WordPress: "text-[#8870a0] border-[#483060]",
};

export default function ProjectSection() {
  return (
    <section id="projects" className="relative py-32 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-6 mb-20">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#1a1508]" />
          <h2
            className="text-[10px] tracking-[0.5em] uppercase text-[#3a2e1e]"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Proyek
          </h2>
          <div className="h-px w-12 bg-[#1a1508]" />
        </div>

        {/* Filter label */}
        <div className="flex items-center gap-6 mb-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 border border-[#3a5830]" />
            <span className="text-[9px] tracking-widest text-[#3a3020]" style={{ fontFamily: "var(--font-cinzel)" }}>QA</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 border border-[#483060]" />
            <span className="text-[9px] tracking-widest text-[#3a3020]" style={{ fontFamily: "var(--font-cinzel)" }}>WordPress</span>
          </div>
        </div>

        {/* Project list */}
        <div className="space-y-px">
          {PROJECTS.map((proj) => (
            <div
              key={proj.index}
              className="group border border-[#150f05] hover:border-[#b8860b]/20 p-6 md:p-8 transition-all duration-400 hover:bg-[#0a0805]/60 cursor-pointer relative"
            >
              {/* Left accent line on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-[#b8860b]/0 group-hover:bg-[#b8860b]/35 transition-all duration-500" />

              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                {/* Index */}
                <span
                  className="text-[#1e1a10] group-hover:text-[#2e2a18] transition-colors text-xs shrink-0"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  {proj.index}
                </span>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3
                      className="text-base md:text-lg text-[#e8d5b0] group-hover:text-white transition-colors"
                      style={{ fontFamily: "var(--font-fell)" }}
                    >
                      {proj.title}
                    </h3>
                    <span
                      className={`border px-2 py-0.5 text-[9px] tracking-widest ${TYPE_COLOR[proj.type]}`}
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      {proj.type}
                    </span>
                  </div>
                  <p
                    className="text-xs text-[#4a3820] leading-relaxed italic mb-4 max-w-xl"
                    style={{ fontFamily: "var(--font-fell)" }}
                  >
                    {proj.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] tracking-wider text-[#2a2010] border border-[#1a1508] px-2 py-1"
                        style={{ fontFamily: "var(--font-cinzel)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Year + arrow */}
                <div className="text-right shrink-0 hidden md:block">
                  <span className="text-xs text-[#1e1a10] group-hover:text-[#3a3020] transition-colors">
                    {proj.year}
                  </span>
                  <div className="text-[#2a2010] group-hover:text-[#b8860b] transition-colors mt-2 text-base">→</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
