---
version: "alpha"
name: "Datacore SaaS Hero"
description: "Linear-style dark SaaS hero with HLS background video and black overlay (bg-black/60). Ideal for plataformas de dados, ferramentas de infraestrutura, redes e networking, saas enterprise. AI-ready template."
colors:
  primary: "#7b39fc"
  secondary: "#2b2344"
  tertiary: "#f87b52"
  neutral: "#000000"
  surface: "#6a2ce0"
  accent: "#352b54"
typography:
  h1:
    fontFamily: Manrope
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Manrope
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 319
  author: "designmd.app"
  source: "https://designmd.app/library/datacore-saas-hero"
  tags: ["风格模板", "plataformas de dados", "redes e networking", "saas enterprise"]
---

## Overview

Linear-style dark SaaS hero with HLS background video and black overlay (bg-black/60). Ideal for plataformas de dados, ferramentas de infraestrutura, redes e networking, saas enterprise. AI-ready template. Around 2020, Linear quietly redefined what a SaaS product could look like. They took the dark UI — previously associated with code editors and terminal windows — and elevated it into something genuinely luxurious. Deep purples, precise gradients, and restrained motion. Vercel followed a similar thread with monochrome severity. Suddenly every developer tool startup wanted that aesthetic: the implicit message that your infrastructure product was as carefully crafted as the software your users were building.

The purple SaaS hero became a specific genre. Not the playful purples of consumer apps — these were deeper, cooler, almost astronomical. Paired with subtle grain textures, geometric light sources, and typography that borrowed from editorial design rather than tech defaults. The hero section stopped being a feature showcase and became a mood statement. It said: we take craft seriously, we ship fast, we respect your intelligence.

What makes this template lineage interesting is how opinionated it remains. You either commit to the dark premium aesthetic fully or it falls apart. There's no halfway — the moment you add a stock photo or a generic illustration, the spell breaks. The constraint is the point.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 8/10 — Cinematic

- **Style:** SaaS, Linear-Style, Purple Accent, HLS Video, Badge Glassmorphism
- **Keywords:** SaaS, Linear-style, roxo, HLS video, glassmorphism badge, Instrument Serif italic, Manrope, dark mode, poster fallback, mobile drawer
- **Era:** 2024-2026 Linear-Style SaaS
- **Light/Dark:** ✗ Not Recommended / ✓ Full

## Colors

- **Roxo Primário** (#7b39fc) — Accent color, emphasis elements
- **Escuro Secundário** (#2b2344) — Dark surface, primary background
- **Laranja Acento** (#f87b52) — Warm accent, call-to-action secondary
- **Preto** (#000000) — Dark surface, primary background
- **Roxo Hover** (#6a2ce0) — Accent color, emphasis elements
- **Escuro Hover** (#352b54) — Deep contrast surface
- **Vidro Borda** (rgba(164,132,215,0.5)) — Extended palette, decorative use
- **Vidro Fundo** (rgba(85,80,110,0.4)) — Primary background surface


## Typography

- **Display / Hero:** Manrope — Weight 700, tight tracking, used for headline impact
- **Accent:** Inter — Used for decorative or emphasis text
- **Body:** Manrope — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Manrope — 0.875rem, weight 500, slight letter-spacing
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

VÍDEO: Stream HLS via Cloudflare com visual abstrato tecnológico. Formas digitais, linhas de dados ou partículas em rede sobre fundo escuro, evocando infraestrutura de dados e conectividade. Inclui poster/thumbnail JPG como fallback que faz fade-out quando o vídeo inicia, prevenindo flash preto. Overlay preto (bg-black/60) para legibilidade do texto. | EFEITOS CSS: Vídeo HLS de fundo com overlay preto (bg-black/60), poster/thumbnail com fade-out ao iniciar vídeo, navbar com logo ícone Command em quadrado branco, badge glassmorphism pill com tag laranja 'New', headline com palavra em Instrument Serif italic, botões roxo sólido e navy escuro, mobile full-screen overlay menu preto

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 8px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Subtly rounded (0.5rem) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Subtly rounded (0.5rem) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Vídeo HLS com overlay preto bg-black/60
- Do Poster com fade-out
- Do Badge glassmorphism com tag laranja
- Do Headline com palavra serif italic
- Do Botão roxo + navy
- Do Mobile menu full-screen preto
- Do 4 Google Fonts
- Do Responsivo


## Use Case

Platforms de dados, Tools de infraestrutura, Redes e networking, SaaS enterprise

<!-- Source: https://designmd.app/library/datacore-saas-hero · designmd.app -->
