"use client";

import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  // const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  // const cursorRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const handleMouse = (e: MouseEvent) => {
  //     setMousePos({ x: e.clientX, y: e.clientY });
  //   };
  //   window.addEventListener("mousemove", handleMouse);
  //   return () => window.removeEventListener("mousemove", handleMouse);
  // }, []);

  // useEffect(() => {
  //   if (cursorRef.current) {
  //     cursorRef.current.style.transform = `translate(${mousePos.x - 10}px, ${mousePos.y - 10}px)`;
  //   }
  // }, [mousePos]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setMenuOpen(false);
  };

  const projects = [
    {
      title: "Nexus Commerce",
      desc: "Platform e-commerce full-stack dengan AI recommendation engine dan real-time analytics.",
      stack: ["Next.js", "PostgreSQL", "Stripe", "OpenAI"],
      color: "from-violet-500 to-fuchsia-500",
    },
    {
      title: "Luminary CMS",
      desc: "Headless CMS modern untuk tim kreatif dengan editor drag-and-drop dan versioning.",
      stack: ["React", "Node.js", "MongoDB", "AWS S3"],
      color: "from-cyan-400 to-blue-500",
    },
    {
      title: "Orbit Dashboard",
      desc: "Dashboard analytics real-time untuk startup SaaS dengan visualisasi data interaktif.",
      stack: ["TypeScript", "D3.js", "GraphQL", "Redis"],
      color: "from-emerald-400 to-teal-600",
    },
    {
      title: "Pulse Mobile",
      desc: "Aplikasi mobile kesehatan dengan pelacakan aktivitas, meditasi, dan AI health coach.",
      stack: ["React Native", "Firebase", "TensorFlow Lite"],
      color: "from-orange-400 to-rose-500",
    },
  ];

  const skills = [
    { name: "React / Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "UI/UX Design", level: 80 },
    { name: "PostgreSQL", level: 78 },
    { name: "DevOps / Cloud", level: 72 },
  ];

  return (
    <div className="bg-[#080810] text-white min-h-screen font-sans selection:bg-violet-500 selection:text-white overflow-x-hidden">
      {/* Custom cursor */}
      <div
        // ref={cursorRef}
        // className="fixed top-0 left-0 w-5 h-5 rounded-full border-2 border-violet-400 pointer-events-none z-[9999] transition-transform duration-75 mix-blend-difference"
      />

      {/* Animated background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-fuchsia-600/15 rounded-full blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] bg-indigo-700/20 rounded-full blur-[100px] animate-blob animation-delay-4000" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-[#E0D9D9]">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="text-xl font-black tracking-tight bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            tjoet.dev
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            {["home", "about", "projects", "contact"].map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className={`capitalize transition-colors hover:text-white ${
                  activeSection === s ? "text-white" : ""
                }`}
              >
                {s}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="bg-violet-600 hover:bg-violet-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105"
            >
              Hire Me
            </button>
          </div>
          <button
            className="md:hidden text-zinc-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-zinc-900/95 backdrop-blur mt-2 rounded-2xl p-4 flex flex-col gap-3 text-center border border-white/10">
            {["home", "about", "projects", "contact"].map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className="capitalize text-zinc-300 hover:text-white py-2"
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6 pt-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-zinc-400 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Just a Self-Introduction Website
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight mb-6">
            <span className="block text-white">Cut Qarratal</span>
            <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent pb-5">
              Mughis
            </span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Full-stack developer yang membangun produk digital yang{" "}
            <span className="text-white font-semibold">cepat</span>,{" "}
            <span className="text-white font-semibold">indah</span>, dan{" "}
            <span className="text-white font-semibold">berdampak</span>.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollTo("projects")}
              className="group bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white px-8 py-4 rounded-full font-semibold text-base transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] flex items-center gap-2"
            >
              Lihat Proyek
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full font-semibold text-base transition-all hover:bg-white/5"
            >
              Hubungi Saya
            </button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { val: "4+", label: "Tahun Pengalaman" },
              { val: "30+", label: "Proyek Selesai" },
              { val: "15+", label: "Klien Puas" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-black text-white">{s.val}</div>
                <div className="text-xs text-zinc-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 text-xs">
          <span>Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-zinc-600 to-transparent" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-violet-400 font-mono text-sm mb-3">
                // tentang saya
              </p>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Saya membangun <br />
                <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  pengalaman digital
                </span>
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed mb-8">
                Saya adalah Full-Stack Developer berbasis di Jakarta dengan
                passion mendalam pada UI/UX dan performa web. Saya percaya bahwa
                kode yang baik bukan hanya yang bekerja, tapi yang membuat
                pengguna jatuh cinta.
              </p>
              <p className="text-zinc-400 text-base leading-relaxed mb-10">
                Spesialisasi saya di React ecosystem, Node.js, dan desain
                sistem. Saya selalu up-to-date dengan teknologi terbaru dan
                menerapkannya untuk memecahkan masalah nyata.
              </p>

              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-zinc-300">{skill.name}</span>
                      <span className="text-zinc-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Profile card */}
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-600 mx-auto mb-6 flex items-center justify-center text-5xl font-black text-white shadow-[0_0_60px_rgba(139,92,246,0.5)]">
                  CQM
                </div>
                <h3 className="text-center text-xl font-bold mb-1">
                  Cut Qarratal Mughis
                </h3>
                <p className="text-center text-zinc-500 text-sm mb-6">
                  Full-Stack Developer · Jakarta, ID
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    { icon: "⚡", label: "React / Next.js" },
                    { icon: "🛠", label: "Node.js / Express" },
                    { icon: "🎨", label: "Figma / Design" },
                    { icon: "☁️", label: "AWS / Vercel" },
                    { icon: "🗄️", label: "PostgreSQL" },
                    { icon: "📱", label: "React Native" },
                  ].map((t) => (
                    <div
                      key={t.label}
                      className="flex items-center gap-2 bg-white/5 rounded-xl px-3 py-2 text-zinc-300"
                    >
                      <span>{t.icon}</span>
                      <span>{t.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-violet-600/30 rounded-2xl blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-fuchsia-600/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-violet-400 font-mono text-sm mb-3">// proyek</p>
            <h2 className="text-4xl md:text-5xl font-black">
              Karya{" "}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Terpilih
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((proj, i) => (
              <div
                key={proj.title}
                className="group relative bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Gradient accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${proj.color} opacity-60 group-hover:opacity-100 transition-opacity`}
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className={`absolute top-4 right-4 w-32 h-32 bg-gradient-to-br ${proj.color} opacity-10 rounded-full blur-2xl`}
                  />
                </div>

                <div className="relative">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${proj.color} mb-4 flex items-center justify-center text-lg font-black text-white`}
                  >
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {proj.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {proj.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {proj.stack.map((s) => (
                      <span
                        key={s}
                        className="text-xs bg-white/5 border border-white/10 text-zinc-400 px-3 py-1 rounded-full"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-sm text-zinc-500 group-hover:text-violet-400 transition-colors">
                    <span>Lihat proyek</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-violet-400 font-mono text-sm mb-3">// kontak</p>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Mari{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Berkolaborasi
            </span>
          </h2>
          <p className="text-zinc-400 text-lg mb-12">
            Punya proyek menarik? Saya selalu terbuka untuk diskusi dan
            kesempatan baru.
          </p>

          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm mb-8">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Nama kamu"
                className="bg-white/5 border border-white/10 focus:border-violet-500 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 outline-none transition-colors text-sm"
              />
              <input
                type="email"
                placeholder="Email kamu"
                className="bg-white/5 border border-white/10 focus:border-violet-500 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 outline-none transition-colors text-sm"
              />
            </div>
            <textarea
              rows={4}
              placeholder="Ceritakan proyekmu..."
              className="w-full bg-white/5 border border-white/10 focus:border-violet-500 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 outline-none transition-colors resize-none text-sm mb-4"
            />
            <button className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white py-4 rounded-xl font-semibold transition-all hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] hover:scale-[1.01]">
              Kirim Pesan ✦
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 text-zinc-500 text-sm">
            {["LinkedIn"].map((s) => (
              <a
                key={s}
                href="https://www.linkedin.com/in/cutqarratalmughis/"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                {s}
              </a>
            ))}
            {["Email"].map((s) => (
              <a
                key={s}
                href="#"
                target=""
                className="hover:text-white transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5 text-center text-zinc-600 text-sm">
        <p>
          &copy; {new Date().getFullYear()} - Tjoet
        </p>
      </footer>
    </div>
  );
}
