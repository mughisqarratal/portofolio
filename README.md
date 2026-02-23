# Portfolio — QA & WordPress Developer

Web portfolio personal dengan tema **dark & mysterious**, dibangun dengan **Next.js 15 + Tailwind CSS**.

---

## 🗂️ Struktur Proyek

```
portfolio/
├── app/
│   ├── layout.tsx          ← Root layout + font
│   ├── page.tsx            ← Assembler semua section
│   └── globals.css         ← Global styles & tema
│
├── components/
│   ├── SideNav.tsx         ← Navbar samping KANAN (tambahkan ikonmu di sini)
│   ├── SocialBar.tsx       ← Ikon sosmed samping KIRI (tambahkan ikonmu di sini)
│   ├── HeroSection.tsx     ← Halaman utama / hero
│   ├── AboutSection.tsx    ← Tentang saya + dual identity
│   ├── SkillSection.tsx    ← Skill QA + WordPress + tools
│   ├── ProjectSection.tsx  ← Daftar proyek
│   └── ContactSection.tsx  ← Form kontak
│
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
└── package.json
```

---

## 🚀 Cara Menjalankan

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

---

## 🎨 Cara Menambahkan Ikon Navigasi (SideNav)

Buka `components/SideNav.tsx`.

1. Install library ikon pilihanmu, misal:
   ```bash
   npm install lucide-react
   # atau
   npm install react-icons
   ```

2. Import ikon di bagian atas file:
   ```tsx
   import { Home, User, Code2, Briefcase, Mail } from "lucide-react";
   ```

3. Ganti array `NAV_ITEMS`:
   ```tsx
   const NAV_ITEMS = [
     { id: "home",     label: "Home",     icon: <Home size={16} /> },
     { id: "about",    label: "About",    icon: <User size={16} /> },
     { id: "skills",   label: "Skills",   icon: <Code2 size={16} /> },
     { id: "projects", label: "Projects", icon: <Briefcase size={16} /> },
     { id: "contact",  label: "Contact",  icon: <Mail size={16} /> },
   ];
   ```

---

## 🔗 Cara Menambahkan Ikon Sosial Media (SocialBar)

Buka `components/SocialBar.tsx`.

1. Import ikon:
   ```tsx
   import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
   ```

2. Ganti array `SOCIAL_LINKS`:
   ```tsx
   const SOCIAL_LINKS = [
     { label: "GitHub",    href: "https://github.com/username",      icon: <FiGithub size={15} /> },
     { label: "LinkedIn",  href: "https://linkedin.com/in/username", icon: <FiLinkedin size={15} /> },
     { label: "Instagram", href: "https://instagram.com/username",   icon: <FiInstagram size={15} /> },
     { label: "Email",     href: "mailto:kamu@email.com",            icon: <FiMail size={15} /> },
   ];
   ```

---

## ✏️ Kustomisasi Konten

| File | Yang bisa diubah |
|------|-----------------|
| `HeroSection.tsx` | Teks deskripsi, array ROLES (typewriter) |
| `AboutSection.tsx` | Statistik, narasi, dua kartu identitas |
| `SkillSection.tsx` | Level skill QA & WordPress, daftar tools |
| `ProjectSection.tsx` | Daftar proyek, deskripsi, tags |
| `ContactSection.tsx` | Email, lokasi, form |

---

## 🌐 Deploy ke Vercel

```bash
npx vercel
```
