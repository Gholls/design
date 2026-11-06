---
version: "alpha"
name: "Dark SaaS Hero with Liquid Glass"
description: "Dark SaaS landing page hero section. Ideal for b2b saas, ai tools, plataformas de desenvolvedores, landing pages tech, startups, apis e sdks. AI-ready template."
colors:
  primary: "#87FB89"
typography:
  h1:
    fontFamily: Geist Sans
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Geist Sans
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    padding: 12px

gallery:
  order: 316
  author: "designmd.app"
  source: "https://designmd.app/library/dark-saas-hero-with-liquid-glass"
  tags: ["风格模板", "b2b saas", "ai tools", "landing pages tech"]
---

## Overview

Dark SaaS landing page hero section. Ideal for b2b saas, ai tools, plataformas de desenvolvedores, landing pages tech, startups, apis e sdks. AI-ready template. The dark SaaS hero didn't emerge from nowhere — it's the logical endpoint of a decade-long shift away from the friendly, white-space-heavy interfaces that dominated early SaaS. When Stripe went dark in 2018, it signaled that developer tools could look like luxury goods. The rest of the industry followed. Dark backgrounds became shorthand for technical sophistication.

Liquid glass is the latest evolution of this lineage. It borrows from Apple's visionOS material language and the frosted-glass experiments that Figma and Linear popularized, but pushes further — introducing refraction, caustics, and fluid distortion that make UI elements feel physically present. The video background underneath isn't decorative; it's structural. It provides the light source that makes the glass effect legible.

What makes this pattern distinct from generic glassmorphism is intentionality. The glass isn't slapped on a gradient. It reacts to content beneath it, creating depth hierarchy without relying on drop shadows or borders. It's a post-flat, post-neumorphic approach that finally treats the screen as a volumetric space rather than a stack of cards.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 8/10 — Cinematic

- **Style:** Dark SaaS, Liquid Glass, Video Background, Marquee Social Proof
- **Keywords:** dark SaaS, liquid glass, video background, hero section, marquee, social proof, green accent, backdrop blur, glass morphism, navbar pill, announcement badge, CTA buttons
- **Era:** 2025-2026 SaaS/AI Startup
- **Light/Dark:** ✗ None / ✓ Full

## Colors

- **Primary** (#87FB89) — Primary accent, CTAs and interactive elements


## Typography

- **Display / Hero:** Geist Sans — Weight 700, tight tracking, used for headline impact
- **Body:** Geist Sans — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Geist Sans — 0.875rem, weight 500, slight letter-spacing
- **Monospace:** JetBrains Mono — Used for code, metadata, and technical values

Scale:
- Hero: clamp(2.5rem, 5vw, 4rem)
- H1: 2.25rem
- H2: 1.5rem
- Body: 1rem / 1.6
- Small: 0.875rem


## Layout

- **Grid:** CSS Grid primary. Max-width containment: 1280px centered with 1.5rem side padding.
- **Spacing rhythm:** Balanced. Base unit: 0.5rem (8px).
- **Section vertical gaps:** clamp(4rem, 8vw, 8rem).
- **Hero layout:** Split-screen (text left, visual right).
- **Feature sections:** Zig-zag alternating text+image rows. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).


## Elevation & Depth

Liquid glass com backdrop-filter blur(4px) e pseudo-element gradient border via mask-composite, video background full-screen (Terra rotacionando do espaço) com autoPlay loop muted playsInline object-cover absolute inset-0, marquee horizontal infinito translateX(0%) a translateX(-50%) em 20s linear infinite, hover suave em botões e links (200ms transition)

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 9999px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Pill-shaped (9999px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Pill-shaped (9999px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
- **Inputs:** Label above input. 1px border stroke. Focus ring: 2px accent color offset 2px. Error text below in semantic red. No floating labels.
- **Navigation:** Primary surface background. Active item: accent color indicator. Font weight 500 when active.
- **Skeletons:** Shimmer animation matching component dimensions. No circular spinners.
- **Empty States:** Icon-based composition with descriptive text and action button.


## Do's and Don'ts

- No emojis in UI — use icon system only (Lucide, Heroicons)
- No pure white (#FFFFFF) backgrounds — use off-white or dark surfaces
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Fundo escuro hsl(260,87%,3%) com leve tom roxo
- Do Vídeo background full-screen da Terra do espaço
- Do Classe .liquid-glass reutilizável com backdrop-filter e pseudo-element gradient border
- Do Navbar pill centralizada liquid-glass com logo + nav items + CTA verde
- Do Badge de anúncio liquid-glass rounded-full
- Do Heading text-7xl semibold tracking-tight
- Do Dois botões CTA (verde primary + liquid-glass secondary)
- Do Marquee social proof com 6 marcas em loop infinito 20s
- Do Fonte Geist Sans 400-700
- Do Cor primária verde #87FB89


## Use Case

B2B SaaS, AI tools, Platforms de desenvolvedores, Tech landing pages, Startups, APIs e SDKs

<!-- Source: https://designmd.app/library/dark-saas-hero-with-liquid-glass · designmd.app -->
