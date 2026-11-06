---
version: "alpha"
name: "Logoisum Video Agency Hero"
description: "Premium video agency hero with full-screen video no color overlay. Ideal for agências de vídeo, produtoras de reels e shorts, estúdios de edição, freelancers de vídeo. AI-ready template."
colors:
  primary: "#FFFFFF"
  secondary: "#222222"
  tertiary: "#000000"
  neutral: "#F5F5F5"
  surface: "#666666"
  accent: "#FFFFFF"
typography:
  h1:
    fontFamily: Barlow
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Barlow
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 520
  author: "designmd.app"
  source: "https://designmd.app/library/logoisum-video-agency-hero"
  tags: ["风格模板", "agências de vídeo", "estúdios de edição", "freelancers de vídeo"]
---

## Overview

Premium video agency hero with full-screen video no color overlay. Ideal for agências de vídeo, produtoras de reels e shorts, estúdios de edição, freelancers de vídeo. AI-ready template. The video agency hero pattern emerged from the collision of two worlds: editorial print design and motion graphics showreels. In the early 2010s, production houses realized their websites needed to feel like their work — kinetic, bold, unapologetically visual. The floating white navbar became the signature move, borrowed from fashion editorial sites where navigation needed to exist without competing with full-bleed imagery beneath it.

What makes this pattern distinctly "agency" rather than generic corporate is the tension between restraint and spectacle. The navbar floats clean and minimal — almost Swiss in its discipline — while the hero below it screams creativity through illustration, oversized type, or looping video. That contrast is the whole point. It signals: we understand craft AND we understand business.

The illustrated variant (Arte & Ilustração) pushes further into personality territory. Where photo-based heroes commoditize quickly, custom illustration declares a point of view. Studios like Buck, Oddfellows, and Gunner pioneered this approach — proving that hand-crafted visual identity in the hero converts better than stock footage ever could.

- Density: 3/10 — Airy
- Variance: 3/10 — Restrained
- Motion: 6/10 — Expressive

- **Style:** Agency, Floating White Navbar, Video No Overlay, Instrument Serif Italic, Minimal Premium
- **Keywords:** agency, vídeo editing, floating navbar branca, sem overlay, Instrument Serif italic, Barlow font, seta 45 graus, play icon, minimal premium, reels virais
- **Era:** 2024-2026 Video Agency Premium
- **Light/Dark:** ✓ Full / ◐ Partial

## Colors

- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Preto Escuro** (#222222) — Dark surface, primary background
- **Preto** (#000000) — Dark surface, primary background
- **Cinza Claro** (#F5F5F5) — Secondary text, borders, muted elements
- **Cinza Texto** (#666666) — Primary text color
- **Branco Puro** (#FFFFFF) — Secondary surface
- **Preto Suave** (#333333) — Deep contrast surface
- **Sombra Sutil** (rgba(0,0,0,0.08)) — Extended palette, decorative use


## Typography

- **Display / Hero:** Barlow — Weight 700, tight tracking, used for headline impact
- **Accent:** Instrument Serif — Used for decorative or emphasis text
- **Body:** Barlow — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Barlow — 0.875rem, weight 500, slight letter-spacing
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

VÍDEO: Showreel de edição de vídeo profissional com cortes rápidos de projetos de vídeo, reels e conteúdo para redes sociais. Cenas dinâmicas com transições fluidas mostrando trabalhos de edição, color grading e motion graphics. Exibido em tela cheia sem overlay de cor, permitindo que a qualidade do trabalho fale por si. A navbar flutuante branca contrasta elegantemente sobre o vídeo. | EFEITOS CSS: Vídeo de fundo tela cheia sem overlay de cor, navbar flutuante branca rounded-[16px] com sombra sutil, botão CTA escuro (#222) com ícone seta 45 graus em housing circular, headline em duas linhas: Barlow bold tracking-[-4px] e Instrument Serif italic 84px, botão pill branco grande com ícone play, layout min-h-[90vh] centralizado, tipografia 14px Barlow Medium para links

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 480ms ease-out. Staggered cascades for lists: 100ms between items.
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
- No decorative gradients — flat color only
- No shadows heavier than 0 2px 8px rgba(0,0,0,0.08)
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Vídeo tela cheia sem overlay
- Do Navbar flutuante branca rounded-16px
- Do Botão CTA escuro seta 45° circular
- Do Headline Barlow + Instrument Serif 84px
- Do Botão pill branco play icon
- Do Layout min-h-90vh
- Do Barlow Medium 14px nav
- Do Subtexto 18px centralizado
- Do Responsivo


## Use Case

Agencies de vídeo, Produtoras de reels e shorts, Studios de edição, Freelancers de vídeo

<!-- Source: https://designmd.app/library/logoisum-video-agency-hero · designmd.app -->
