import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillSection from "@/components/SkillSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
import SideNav from "@/components/SideNav";
import SocialBar from "@/components/SocialBar";

export default function Home() {
  return (
    <main className="relative">
      {/* Sidebar kanan — navigasi */}
      <SideNav />

      {/* Sidebar kiri — social media */}
      <SocialBar />

      {/* Konten utama — beri padding kanan agar tidak tertutup SideNav */}
      <div className="pr-16 md:pr-20">
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 md:px-16 border-t border-[#100d05] text-center pr-16 md:pr-20">
        <p
          className="text-[9px] tracking-[0.4em] uppercase text-[#1e1a0e]"
          style={{ fontFamily: "var(--font-cinzel)" }}
        >
          © 2025 &nbsp;·&nbsp; Built in silence &nbsp;·&nbsp; Unknown Developer
        </p>
      </footer>
    </main>
  );
}
