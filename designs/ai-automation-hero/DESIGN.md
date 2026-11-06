---
version: "alpha"
name: "AI Automation Hero"
description: "Design an AI hero with dark purple-black background #070612. Ideal for plataformas de ai, automação de workflows, produtos de machine learning, startups de inteligência artificial. AI-ready template."
colors:
  primary: "#070612"
  secondary: "#FFFFFF"
  tertiary: "#070612"
  neutral: "#9CA3AF"
typography:
  h1:
    fontFamily: System UI stack
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: System UI stack
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: System UI stack
    fontSize: 0.75rem
    fontWeight: 500
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 125
  author: "designmd.app"
  source: "https://designmd.app/library/ai-automation-hero"
  tags: ["风格模板", "plataformas de ai"]
---

## Overview

Design an AI hero with dark purple-black background #070612. Ideal for plataformas de ai, automação de workflows, produtos de machine learning, startups de inteligência artificial. AI-ready template. The dark purple hero section didn't emerge from nowhere — it's the direct descendant of cyberpunk interfaces and early-2000s sci-fi film UI. Think Minority Report's gesture panels, Tron Legacy's luminous grids. When AI tools started shipping to consumers around 2022-2023, marketing teams needed a visual shorthand that screamed 'intelligent' without defaulting to the tired blue gradient. Purple — specifically deep violet with electric accents — became that signal. It carries connotations of mystery, premium positioning, and computational depth that blue simply can't match anymore.

The hero pattern itself borrows from SaaS landing pages that prioritized a single dramatic statement above the fold, but the AI automation variant pushes further into atmospheric territory. Particle systems, node-graph backgrounds, flowing data visualizations — these aren't decoration. They're metaphors for the invisible orchestration happening beneath the surface. The best implementations treat the hero as a mood-setter rather than an information dump, letting the dark canvas breathe while a single workflow animation or abstract network diagram does the heavy lifting.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 8/10 — Cinematic

- **Style:** AI, Dark Purple, Video Shifted, Split-Text Animation, Blur-In
- **Keywords:** AI, automação, dark purple, vídeo deslocado, split-text animation, blur-in, Sparkles badge, serif italic, left-aligned, Framer Motion
- **Era:** 2024-2026 AI Product Landing
- **Light/Dark:** ✗ Not Recommended / ✓ Full

## Colors

- **Roxo-Preto** (#070612) — Dark surface, primary background
- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **** (rgba(255,255,255,0.8)) — Supporting palette color
- **Branco Borda** (rgba(255,255,255,0.2)) — Light surface, card backgrounds
- **Preto Botão** (#070612) — Deep contrast surface
- **Cinza Muted** (#9CA3AF) — Secondary text, borders, muted elements
- **Vidro Badge** (rgba(255,255,255,0.1)) — Extended palette, decorative use
- **Vidro Botão** (rgba(255,255,255,0.2)) — Extended palette, decorative use


## Typography

- **Display / Hero:** System UI stack (-apple-system, sans-serif) — Weight 700, tight tracking, used for headline impact
- **Body:** System UI stack (-apple-system, sans-serif) — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** System UI stack (-apple-system, sans-serif) — 0.875rem, weight 500, slight letter-spacing
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

VÍDEO: Stream HLS (~12s loop) com visual abstrato de inteligência artificial. Formas orgânicas luminosas, redes neurais ou ondas de dados em movimento sobre fundo escuro roxo-preto. Aspect ratio ~16:9 (306x160px storyboard). O vídeo é deslocado 200px à direita (margin-left: 200px) e escalado a 1.2x com origin-left, criando um efeito de profundidade assimétrica que complementa o conteúdo alinhado à esquerda. | EFEITOS CSS: Fundo #070612 com vídeo deslocado 200px à direita (margin-left: 200px, scale 1.2, origin-left), gradient fade inferior (h-40), conteúdo alinhado à esquerda, badge pill com ícone Sparkles e animação blur-in, headline com split-text animation staggered (cada palavra: y 40→0, opacity 0→1, delay 0.08s), palavra em serif italic, subtitle com blur-in delay 0.4s, botão branco sólido com ArrowRight e glass transparente (bg-white/20 backdrop-blur)

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 12px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Moderately rounded (0.75rem) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Moderately rounded (0.75rem) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Fundo #070612
- Do Vídeo deslocado 200px scale 1.2
- Do Gradient fade inferior
- Do Conteúdo left-aligned
- Do Badge Sparkles blur-in
- Do Split-text staggered animation
- Do Palavra serif italic
- Do Botão branco + glass
- Do Z-index layering correto


## Use Case

Platforms de AI, Automação de workflows, Products de machine learning, Startups de inteligência artificial

<!-- Source: https://designmd.app/library/ai-automation-hero · designmd.app -->
