<div align="center">

# Abdulbasit Adigun — Portfolio

**DevbasrahtopIT** · Graphic Designer · Web Developer · Web3 Builder · Community Organiser

[![Live](https://img.shields.io/badge/Live-Portfolio-d4ff00?style=for-the-badge&logo=vercel&logoColor=black)](https://basrahtop.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

</div>

---

## ✦ Overview

Dark-luxury personal portfolio for **Abdulbasit Adigun** — a multi-disciplinary creator at the intersection of graphic design, full-stack web development, and decentralised technology.

Built from scratch with Next.js 14 App Router, animated with Framer Motion, and deployed on Vercel.

---

## ✦ Sections

| Section | Description |
|---|---|
| **Hero** | Animated name reveal, role switcher (5 roles), magnetic CTA buttons |
| **About** | Bio, real profile photo, stats |
| **Graphic Design** | Masonry gallery with category filter, multi-image carousel & lightbox |
| **Web Development** | 6 real GitHub projects with live/source links and status badges |
| **Events** | 4 real Web3 events with interactive detail panel and verify links |
| **Volunteering** | 4 real volunteering roles with organisation details and impact stats |
| **Contact** | Working contact form → emails delivered to inbox via Resend API |

---

## ✦ Tech Stack

- **Framework** — [Next.js 14](https://nextjs.org) (App Router, TypeScript)
- **Styling** — [Tailwind CSS](https://tailwindcss.com) with custom design tokens
- **Animations** — [Framer Motion](https://www.framer.com/motion/)
- **Fonts** — Syne (display) + Montserrat (body) via Google Fonts
- **Email** — [Resend](https://resend.com) via `/api/contact` route
- **Images** — `next/image` with priority loading and `object-contain` lightbox
- **Deployment** — [Vercel](https://vercel.com)

---

## ✦ Design Tokens

```css
--canvas:       #0a0a0a   /* near-black background */
--accent:       #d4ff00   /* electric lime highlight */
--font-display: Syne
--font-body:    Montserrat (300 / 400 / 500 / 600)
```

---

## ✦ Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repo
git clone https://github.com/Basrahtop/basrahtop-portfolio.git
cd basrahtop-portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your RESEND_API_KEY to .env.local

# Run development server (opens on port 3001 if 3000 is occupied)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✦ Environment Variables

Create a `.env.local` file in the root with the following:

```env
RESEND_API_KEY=re_your_api_key_here
```

Get your free API key at [resend.com](https://resend.com) — 3,000 emails/month on the free plan.

---

## ✦ Project Structure

```
├── app/
│   ├── api/contact/route.ts   # Contact form API → sends email via Resend
│   ├── layout.tsx             # Global layout, fonts, metadata
│   ├── page.tsx               # Root page — composes all sections
│   └── globals.css            # Design tokens & global styles
├── components/
│   ├── Navbar.tsx             # Fixed nav with scroll-spy
│   ├── CustomCursor.tsx       # Spring physics custom cursor
│   ├── Hero.tsx               # Animated hero with role switcher
│   ├── About.tsx              # Bio + profile photo
│   ├── GraphicDesign.tsx      # Design gallery with lightbox
│   ├── WebDev.tsx             # GitHub project cards
│   ├── Events.tsx             # Web3 events timeline
│   ├── Volunteering.tsx       # Volunteer roles
│   ├── Contact.tsx            # Working contact form
│   └── SectionReveal.tsx      # Scroll-triggered reveal wrapper
├── public/                    # Images (profile + design gallery)
└── tailwind.config.ts         # Custom theme
```

---

## ✦ Deployment

This portfolio is deployed on **Vercel**. Every push to `main` triggers an automatic re-deploy.

To add the environment variable in Vercel:
1. Go to your project → **Settings** → **Environment Variables**
2. Add `RESEND_API_KEY` with your Resend API key value
3. Redeploy

---

## ✦ Contact

**Abdulbasit Adigun**

- 📧 [devbasrahtop@gmail.com](mailto:devbasrahtop@gmail.com)
- 🔗 [linkedin.com/in/devbasrahtop](https://linkedin.com/in/devbasrahtop)
- 🐙 [github.com/basrahtop](https://github.com/basrahtop)
- 🐦 [x.com/Basrahtop](https://x.com/Basrahtop)

---

<div align="center">
  <sub>Built with ♥ in Lagos, Nigeria</sub>
</div>

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
