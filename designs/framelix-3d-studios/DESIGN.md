---
version: "alpha"
name: "Framelix 3D Studios"
description: "Cinematic 3D studio page with pure black background. Ideal for estúdios 3d, agências de motion design, produtoras de vídeo, portfólios de animação. AI-ready template."
colors:
  primary: "#000000"
  secondary: "#FFFFFF"
  tertiary: "#A6A4FF"
  neutral: "#EAEAEA"
  surface: "#000000"
  accent: "#6B7280"
typography:
  h1:
    fontFamily: Inter
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: 400
spacing:
  sm: 60.0px
  md: 120.0px
  lg: 240.0px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 416
  author: "designmd.app"
  source: "https://designmd.app/library/framelix-3d-studios"
  tags: ["风格模板", "estúdios 3d", "produtoras de vídeo"]
---

## Overview

Cinematic 3D studio page with pure black background. Ideal for estúdios 3d, agências de motion design, produtoras de vídeo, portfólios de animação. AI-ready template. The dark, cinematic aesthetic in digital design didn't emerge from web trends — it came from film titles and VFX pipelines. Saul Bass understood contrast. Kyle Cooper made Se7en's opening a cultural reset. When 3D studios started building their own websites in the early 2000s, they brought that same sensibility: deep blacks, controlled light, typography that breathes in negative space. The portfolio wasn't just showing work — it was the work.

What we're seeing now is the maturation of that lineage. Studios like Framelix operate in a space where the website IS a reel. Every scroll is a camera move. Every transition is a render. The dark canvas isn't decorative — it's functional. It eliminates distraction so dimensional work can exist with the same fidelity it had in the viewport. This is design that respects the craft it represents, refusing to flatten cinematic work into a generic SaaS grid.

- Density: 5/10 — Balanced
- Variance: 7/10 — Dynamic
- Motion: 8/10 — Cinematic

- **Style:** Creative, 3D, Cinematic, Marquee Banner, Multi-Video Sections
- **Keywords:** 3D, cinematic, motion studio, marquee banner, múltiplos vídeos, Framer Motion, Inter font, preto puro, lavanda acento, ticket icon, seções com vídeo
- **Era:** 2024-2026 Creative Studio
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Preto Puro** (#000000) — Dark surface, primary background
- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Lavanda Acento** (#A6A4FF) — Supporting palette color
- **Cinza Claro** (#EAEAEA) — Secondary text, borders, muted elements
- **Preto Texto** (#000000) — Deep contrast surface
- **Cinza Muted** (#6B7280) — Secondary text, borders, muted elements
- **Preto Botão** (#000000) — Deep contrast surface
- **Branco Muted** (rgba(255,255,255,0.6)) — Secondary surface


## Typography

- **Display / Hero:** Inter — Weight 700, tight tracking, used for headline impact
- **Body:** Inter — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Inter — 0.875rem, weight 500, slight letter-spacing
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
- **Hero layout:** Asymmetric composition.
- **Feature sections:** Asymmetric grid with varied card sizes. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).


## Elevation & Depth

VÍDEO: Dois vídeos distintos: (1) Hero: showreel cinematográfico de motion design 3D com cenas de animações, renders e efeitos visuais em alta qualidade sobre fundo preto. Full-width (w-full h-auto object-cover) com overlays de texto animados via Framer Motion. (2) Shipping: demonstração de produto 3D em formato quadrado (800x800px), mostrando um objeto ou cena 3D rotacionando ou em animação, sobre fundo cinza claro (#EAEAEA) com cantos arredondados. | EFEITOS CSS: Múltiplas seções com vídeos (hero full-width + shipping 800x800px), marquee banner infinito CSS translateX 20s linear infinite em fundo lavanda #A6A4FF com texto preto, navbar 3 colunas de links empilhados e ícone ticket SVG, hero com vídeo full-width e overlays de texto absolutos animados com Framer Motion fade+slide, seção shipping fundo cinza #EAEAEA cantos arredondados inferiores 40px, Inter font com brightness-0 invert no logo

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 0px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Sharp edges (0px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Sharp edges (0px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
- **Inputs:** Label above input. 1px border stroke. Focus ring: 2px accent color offset 2px. Error text below in semantic red. No floating labels.
- **Navigation:** Primary surface background. Active item: accent color indicator. Font weight 500 when active.
- **Skeletons:** Shimmer animation matching component dimensions. No circular spinners.
- **Empty States:** Icon-based composition with descriptive text and action button.


## Do's and Don'ts

- No emojis in UI — use icon system only (Lucide, Heroicons)
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Fundo preto com múltiplos vídeos
- Do Hero vídeo full-width overlays animados
- Do Marquee banner lavanda infinito
- Do Navbar 3 colunas + ticket SVG
- Do Seção shipping cinza cantos 40px
- Do Vídeo 800x800 shipping
- Do Framer Motion fade+slide
- Do Inter font logo invertido
- Do Responsivo


## Use Case

Studios 3D, Agencies de motion design, Produtoras de vídeo, Portfolios de animação

<!-- Source: https://designmd.app/library/framelix-3d-studios · designmd.app -->
