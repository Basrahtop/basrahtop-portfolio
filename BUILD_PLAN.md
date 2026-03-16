# Portfolio Website Build Plan

## 🏗️ Architecture & Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + custom CSS for animations
- **Animations**: Framer Motion for scroll-triggered reveals, hover states, page transitions
- **Fonts**: A bold editorial display font paired with a refined body font (e.g., Clash Display + Instrument Serif)
- **Deployment-ready**: Structured for Vercel

## 🎨 Aesthetic Direction

**Editorial Magazine meets Dark Luxury** — a dark-themed, high-contrast portfolio with:

- Large typographic statements and asymmetric layouts
- Grid-breaking hero sections
- Smooth scroll animations & cursor interactions
- Color accent: a vibrant signature color (e.g., electric lime or warm amber) on a near-black canvas

## 📄 Pages & Sections

| Section | What It Does |
|---------|--------------|
| **Hero** | Full-screen animated intro with name, tagline, and animated role-switcher |
| **About** | Split layout — photo + personality statement |
| **Graphic Design** | Masonry grid gallery with hover zoom & project lightbox |
| **Web Development** | Project cards with live/GitHub links, tech stack badges |
| **Event Organization** | Timeline/carousel of events with photos & stats |
| **Volunteering** | Story-driven layout with impact numbers & causes |
| **Contact** | Minimal animated contact form + social links |

## ✨ Key Interactions

- Custom cursor that morphs on hover
- Staggered scroll reveals on every section
- Magnetic buttons that follow the mouse
- Smooth page transitions between routes
- Active nav indicator that slides between links
- Parallax on hero background elements

## 📁 Project Structure

```
/app
  /page.tsx          ← Home (all sections)
  /layout.tsx        ← Global layout + fonts
/components
  /Hero.tsx
  /About.tsx
  /GraphicDesign.tsx
  /WebDev.tsx
  /Events.tsx
  /Volunteering.tsx
  /Contact.tsx
  /Navbar.tsx
  /CustomCursor.tsx
/public/assets        ← Your images & project screenshots
```

## 🚀 Build Plan

1. Scaffold Next.js 14 app with Tailwind + Framer Motion
2. Build global layout (navbar, cursor, fonts, color tokens)
3. Build each section as a self-contained component
4. Wire up smooth scroll navigation
5. Add all animations and micro-interactions
6. Final polish pass on spacing, typography, responsiveness

---

## Implementation Checklist

### Phase 1: Project Setup
- [ ] Initialize Next.js 14 project with App Router
- [ ] Install and configure Tailwind CSS
- [ ] Install Framer Motion
- [ ] Set up fonts (Clash Display + Instrument Serif)
- [ ] Configure color tokens and theme variables
- [ ] Create base directory structure

### Phase 2: Global Components
- [ ] Create `layout.tsx` with global setup
- [ ] Build `Navbar.tsx` with active nav indicator
- [ ] Build `CustomCursor.tsx` with morph on hover
- [ ] Set up page transition animations

### Phase 3: Section Components
- [ ] Build `Hero.tsx` with animated role-switcher
- [ ] Build `About.tsx` with split layout
- [ ] Build `GraphicDesign.tsx` with masonry grid and lightbox
- [ ] Build `WebDev.tsx` with project cards and tech badges
- [ ] Build `Events.tsx` with timeline/carousel
- [ ] Build `Volunteering.tsx` with impact numbers
- [ ] Build `Contact.tsx` with animated form

### Phase 4: Interactions & Animations
- [ ] Implement staggered scroll reveals
- [ ] Add magnetic button interactions
- [ ] Implement parallax effects on hero
- [ ] Add hover zoom effects
- [ ] Polish page transitions
- [ ] Test smooth scroll navigation

### Phase 5: Polish & Deployment
- [ ] Responsive design pass (mobile, tablet, desktop)
- [ ] Typography refinement
- [ ] Spacing consistency check
- [ ] Performance optimization
- [ ] Accessibility audit
- [ ] Deploy to Vercel

---

## Design Tokens

### Colors
```
Dark Canvas: #0a0a0a (near-black)
Accent: #d4ff00 (electric lime) OR #ff9500 (warm amber)
Text Primary: #ffffff
Text Secondary: #a0a0a0
```

### Typography Scale
```
Display: 4rem - 8rem (Hero statements)
Heading 1: 3rem
Heading 2: 2.25rem
Body: 1.125rem
Small: 0.875rem
```

### Spacing System
```
Section Padding: 6rem vertical
Element Gap: 2rem default
Grid Gap: 1.5rem
```

---

## Animation Specs

### Scroll Reveals
- Stagger delay: 0.1s between elements
- Duration: 0.6s
- Easing: ease-out

### Hover States
- Transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1)
- Scale on hover: 1.02 - 1.05

### Page Transitions
- Duration: 0.4s
- Fade + slide combination

### Cursor Morph
- Default: 16px circle
- Hover: 48px circle with blend mode
- Transition: 0.2s ease-out

---

## Content Placeholders

### Hero
- Name
- Tagline
- Rotating roles (e.g., "Designer", "Developer", "Creator")

### About
- Professional photo
- Bio paragraph
- Key skills or values

### Projects
- Project titles
- Descriptions
- Technologies used
- Live links & GitHub repos

### Events & Volunteering
- Event names & dates
- Impact metrics
- Photos
- Organizations

### Contact
- Email
- Social media links (LinkedIn, GitHub, etc.)
- Contact form fields: name, email, message

---

*Build Plan Created: March 10, 2026*
