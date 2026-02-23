# 🌟 Portfolio Next.js

Web portfolio personal yang keren dibangun dengan **Next.js 14** + **Tailwind CSS**.

## ✨ Fitur

- 🎨 Dark theme dengan animated background blobs
- 🖱️ Custom cursor effect
- 📱 Fully responsive (mobile-first)
- ⚡ Animasi smooth dengan pure CSS
- 🎯 Scroll navigation aktif
- 🔮 Glassmorphism cards
- 📊 Skill bars dengan gradient
- 📬 Contact form

## 🚀 Cara Menjalankan

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 📁 Struktur

```
portfolio-nextjs/
├── app/
│   ├── layout.tsx     # Root layout + font setup
│   ├── page.tsx       # Halaman utama (semua section)
│   └── globals.css    # Global styles + animasi
├── tailwind.config.ts # Konfigurasi Tailwind + custom blob animation
├── postcss.config.js
├── tsconfig.json
└── package.json
```

## 🎨 Kustomisasi

Edit `app/page.tsx` untuk mengubah:
- **Nama & bio** di bagian Hero dan About
- **Proyek** di array `projects`
- **Skill** di array `skills`
- **Warna aksen** (saat ini violet/fuchsia)

## 📦 Deploy ke Vercel

```bash
npx vercel
```
