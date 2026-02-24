# Portfolio — QA & WordPress Developer

Web portfolio personal dengan tema **dark & mysterious**, dibangun dengan **Next.js 15 + Tailwind CSS**.

---

## 🗂️ Struktur Proyek

```
portfolio/
├── app/
│   ├── layout.tsx          
│   ├── page.tsx            
│   └── globals.css         
│
├── components/
│   ├── SideNav.tsx         
│   ├── SocialBar.tsx       
│   ├── HeroSection.tsx     
│   ├── AboutSection.tsx    
│   ├── SkillSection.tsx    
│   ├── ProjectSection.tsx  
│   └── ContactSection.tsx  
│
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
└── package.json
```

---



Buka [http://localhost:3000](http://localhost:3000)

---

## 🎨 Cara Menambahkan Ikon Navigasi (SideNav)

Buka `components/SideNav.tsx`.

1. Install library:
   ```bash
   npm install lucide-react
   # atau
   npm install react-icons
