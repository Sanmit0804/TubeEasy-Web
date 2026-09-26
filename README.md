<div align="center">

# 🌐 TubeEasy Web

**The Modern Online YouTube Video & Audio Downloader Web Application.**

[![Next.js](https://img.shields.io/badge/framework-Next.js%2015%20(App%20Router)-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/react-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/typescript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/styling-Tailwind%20CSS%20v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Google AdSense](https://img.shields.io/badge/ads-Google%20AdSense%20Ready-4285F4?style=flat-square&logo=google-ads)](https://adsense.google.com/)
[![SEO](https://img.shields.io/badge/SEO-Rank%20Optimized-00C7B7?style=flat-square)](https://schema.org/)

*TubeEasy Web delivers instant YouTube video inspection, stream merging (4K, 1080p, 720p), 320kbps MP3 audio conversion, full SEO optimization, and dedicated Google AdSense monetization ad slots.*

[Live Features](#-features) • [Google AdSense Monetization](#-google-adsense-monetization-setup) • [SEO & Schema](#-seo--search-engine-optimization) • [Local Development](#-getting-started) • [Deployment](#-deployment)

</div>

---

## ✨ Features

- ⚡ **Next.js App Router & React 19**: Ultra-fast server-side rendering, streaming API routes, and minimal JavaScript overhead.
- 🎨 **Modern Minimalist UI**: Clean slate aesthetic (`#0F1115`) with matte crimson accents (`#E11D48`), identical to the TubeEasy desktop app.
- 🔍 **Instant URL Analysis**: Analyzes standard watch URLs, shorts, and playlist links to extract titles, 16:9 thumbnail previews, durations, view counts, and every available media format.
- 🎵 **High-Quality Audio & Video Downloads**:
  - MP4 Video with merged audio: 4K (2160p), 2K (1440p), Full HD (1080p), HD (720p), SD (480p).
  - Audio extraction: MP3 (320 kbps studio quality & 192 kbps), Apple M4A (AAC), Lossless WAV.
- 💰 **Monetization & Ad Placement Slots**: Pre-configured, high-CTR, policy-compliant Google AdSense ad units across header, post-analysis, in-content, sidebar, and footer.
- 🛡️ **Google AdSense Policy Compliant**: Complete Privacy Policy with DoubleClick DART cookie disclosure, Terms of Service, DMCA disclaimer, and Contact pages.
- 📱 **Mobile & Desktop Responsive**: Native touch-friendly UI for iPhones, Android smartphones, iPads, and desktop displays.

---

## 💰 Google AdSense Monetization Setup

TubeEasy Web comes with built-in, non-intrusive, high-converting ad units designed to maximize RPM while strictly complying with Google AdSense policies.

### 1. Configure Your Publisher ID
Create a `.env.local` file (or copy `.env.example`) and add your Google AdSense Publisher ID:

```bash
NEXT_PUBLIC_ADSENSE_PUB_ID=ca-pub-XXXXXXXXXXXXXXXX
```

### 2. Configure Individual Ad Slots
Create responsive display ad units in your Google AdSense console and paste their slot IDs into `.env.local`:

```bash
NEXT_PUBLIC_AD_SLOT_TOP=1111111111          # Header Leaderboard (728x90)
NEXT_PUBLIC_AD_SLOT_POST_ANALYSIS=2222222222 # Post-Analysis Rectangle (336x280 / High CTR)
NEXT_PUBLIC_AD_SLOT_IN_CONTENT=3333333333   # In-Content Banner (728x90)
NEXT_PUBLIC_AD_SLOT_BOTTOM=4444444444       # Bottom Leaderboard (728x90)
NEXT_PUBLIC_AD_SLOT_SIDEBAR=5555555555      # Desktop Sticky Skyscraper (300x600)
```

> **Note**: While in local development or before your AdSense account is approved, TubeEasy renders sleek dashed placeholder cards without throwing ad script errors.

---

## 🔍 SEO & Search Engine Optimization

Built from the ground up to rank on Google for high-volume keywords:

1. **Structured Data (JSON-LD)**:
   - `WebApplication` & `SoftwareApplication` schema for Google rich search results.
   - `FAQPage` schema to capture Google Search accordion question boxes.
2. **Dynamic XML Sitemap & Robots.txt**:
   - Automatically served at `/sitemap.xml` and `/robots.txt`.
3. **OpenGraph & Twitter Cards**:
   - Pre-configured meta tags for rich link previews across Twitter, Discord, WhatsApp, and Facebook.
4. **Keyword Rich Content Sections**:
   - "How to Download YouTube Videos in 3 Steps"
   - "Supported Resolutions & Audio Formats"
   - "Frequently Asked Questions"

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js 18+** (Node.js 22 recommended)
- **Python 3.10+** with `yt-dlp` installed:
  ```bash
  pip install yt-dlp
  ```

### 2. Install Node Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🐳 Deployment

### Option 1: Docker (Recommended for VPS / Railway / Render)
A production-ready `Dockerfile` bundling Node.js, Python, FFmpeg, and `yt-dlp` is included:

```bash
# Build and run with Docker Compose
docker compose up -d --build
```

### Option 2: Vercel / Cloudflare
For serverless hosting:
1. Connect your GitHub repository to [Vercel](https://vercel.com).
2. Set your environment variables (`NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_ADSENSE_PUB_ID`).
3. Deploy!

---

## ⚖️ Legal Notice

> [!IMPORTANT]
> TubeEasy is intended for downloading content that you own, have created, or have express authorization or license to download. Please comply with YouTube's Terms of Service and all applicable copyright laws in your jurisdiction.
