"use client";

const QA_SKILLS = [
  { name: "Manual Testing",        level: 92 },
  { name: "Selenium / Cypress",    level: 80 },
  { name: "Postman / API Testing", level: 85 },
  { name: "Jira / Bug Tracking",   level: 90 },
  { name: "Test Case Design",      level: 88 },
  { name: "Regression Testing",    level: 85 },
];

const WP_SKILLS = [
  { name: "WordPress / Elementor", level: 90 },
  { name: "Custom Theme Dev",      level: 82 },
  { name: "Plugin Development",    level: 75 },
  { name: "WooCommerce",           level: 80 },
  { name: "PHP / MySQL",           level: 72 },
  { name: "Performance & SEO",     level: 78 },
];

const TOOLS = [
  "Cypress", "Selenium", "Postman", "Jira", "TestRail",
  "Git / GitHub", "WordPress", "Elementor", "WooCommerce",
  "PHP", "MySQL", "ACF", "Figma", "VS Code", "Chrome DevTools",
];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-[#c8b89a]">{name}</span>
        <span className="text-[#9a8060]">{level}%</span>
      </div>
      <div className="h-px bg-[#1e1a0e] relative overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#b8860b]/60 to-[#f0c040]/80"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function SkillSection() {
  return (
    <section id="skills" className="relative py-10 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <div className="flex items-center gap-6 mb-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#3a2e1e]" />
          <h2 className="text-sm tracking-[0.5em] uppercase font-bold text-[#9a8060]" style={{ fontFamily: "var(--font-cinzel)" }}>
            Skills
          </h2>
          <div className="h-px w-12 bg-[#3a2e1e]" />
        </div>

        {/* Dual column */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* QA */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="border border-[#2a2010] px-3 py-1.5">
                <span className="text-xs tracking-[0.3em] text-[#9a8060]" style={{ fontFamily: "var(--font-cinzel)" }}>QA</span>
              </div>
              <h3 className="text-base text-[#e8d5b0] tracking-wider" style={{ fontFamily: "var(--font-cinzel)" }}>
                Quality Assurance
              </h3>
            </div>
            <div className="space-y-5">
              {QA_SKILLS.map((s) => <SkillBar key={s.name} {...s} />)}
            </div>
          </div>

          {/* WordPress */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="border border-[#2a2010] px-3 py-1.5">
                <span className="text-xs tracking-[0.3em] text-[#9a8060]" style={{ fontFamily: "var(--font-cinzel)" }}>WP</span>
              </div>
              <h3 className="text-base text-[#e8d5b0] tracking-wider" style={{ fontFamily: "var(--font-cinzel)" }}>
                WordPress Dev
              </h3>
            </div>
            <div className="space-y-5">
              {WP_SKILLS.map((s) => <SkillBar key={s.name} {...s} />)}
            </div>
          </div>
        </div>

        {/* Tools grid */}
        <div>
          <p className="text-xs tracking-[0.5em] uppercase text-[#7a6848] mb-6 text-center" style={{ fontFamily: "var(--font-cinzel)" }}>
            Tools &amp; Teknologi
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {TOOLS.map((tool) => (
              <span
                key={tool}
                className="border border-[#2a2010] hover:border-[#d4a843]/50 text-[#7a6848] hover:text-[#d4a843] px-4 py-2 text-xs tracking-wider transition-all duration-200"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}