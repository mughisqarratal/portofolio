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
      <footer className="relative z-10 py-8 px-6 md:px-16 border-t border-[#3a2e1e] text-center mt-5">
        <p
          className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#9a8060] text-shadow-sm"
          style={{ fontFamily: "var(--font-cinzel)" }}
        >
          © 2025 &nbsp;·&nbsp; Built in silence 
        </p>
      </footer>
    </main>
  );
}
