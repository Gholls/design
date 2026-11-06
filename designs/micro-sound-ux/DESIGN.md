---
version: "alpha"
name: "Micro-Sound UX"
description: "Multisensory landing page with micro-sound UX integration. Ideal for apps de produtividade premium, plataformas de musica, interfaces de gaming, dashboards interativos, experiencias imersivas, ferramentas criativas. AI-ready template."
colors:
  primary: "#0D0D1A"
  secondary: "#1A1A3E"
  tertiary: "#E8E8F0"
  neutral: "#4A7CFF"
  surface: "#00E676"
  accent: "#FF5252"
typography:
  h1:
    fontFamily: Inter
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 12px
  md: 24px
  lg: 36px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 553
  author: "designmd.app"
  source: "https://designmd.app/library/micro-sound-ux"
  tags: ["风格模板", "interfaces de gaming"]
---

## Overview

Multisensory landing page with micro-sound UX integration. Ideal for apps de produtividade premium, plataformas de musica, interfaces de gaming, dashboards interativos, experiencias imersivas, ferramentas criativas. AI-ready template. Sound in interfaces wasn't always intentional. For decades, computers beeped at you — error tones, dial-up screeches, the aggressive buzz of a failed floppy read. Then Jim Reekes composed the Mac startup chime in 1991, and suddenly someone was thinking about what a computer should *sound like* rather than just what noise it happened to make. That single chord — a C major with overtones designed to feel reassuring — proved that audio could carry emotional weight in a digital context.

The discipline stayed dormant for years. Mobile changed everything. When touch replaced physical buttons, we lost tactile confirmation. The iPhone's keyboard clicks, the subtle lock sound, the payment ding — these weren't decoration, they were replacing the feedback that hardware used to provide for free. Designers had to learn psychoacoustics.

Today micro-sound lives at the intersection of haptics, animation, and audio. A notification isn't just a tone — it's a synchronized vibration pattern, a visual pulse, and a carefully pitched sound that your brain processes as a single event. The best sonic UX disappears entirely. You never notice it's there, but you'd immediately feel its absence.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 6/10 — Expressive

- **Style:** Multisensory, Audio-Visual, Tactile Feedback, Haptic-Inspired, Interactive Sound
- **Keywords:** micro-sound, UX sound, audio feedback, multisensory, tactile, haptic, click sound, hover tone, success chime, error beep, Web Audio API, sound design, interactive audio, satisfying clicks, low-frequency tones
- **Era:** 2025-2026 Multisensory Web
- **Light/Dark:** ✗ None / ✓ Full

## Colors

- **Escuro Profundo** (#0D0D1A) — Primary background surface
- **Azul Noturno** (#1A1A3E) — Accent highlight, links and focus states
- **Branco Suave** (#E8E8F0) — Light surface, card backgrounds
- **Azul Interacao** (#4A7CFF) — Secondary accent
- **Verde Sucesso** (#00E676) — Success states, positive indicators
- **Vermelho Erro** (#FF5252) — Error states, destructive actions
- **Amarelo Atencao** (#FFD740) — Warning states, attention indicators
- **Roxo Hover** (#9C6AFF) — Accent color, emphasis elements


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
- **Hero layout:** Split-screen (text left, visual right).
- **Feature sections:** Zig-zag alternating text+image rows. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).


## Elevation & Depth

UX Multissensorial com micro-sons: clique mecanico satisfatorio ao apertar botoes (Web Audio API oscillator 80ms), tons suaves low-frequency ao hover em links (sine wave 200Hz 50ms fade), bipes curtos para sucesso/erro de formularios, indicador visual de som ativo (icone speaker pulsante), ondas sonoras visuais (CSS animation em circulos concentricos), ripple effect tatil nos cliques, feedback visual sincronizado com audio (flash de cor no momento do som), toggle mute respeitando preferencias do usuario

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 480ms ease-out. Staggered cascades for lists: 100ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 12px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Rounded (12px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (12px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Fundo escuro profundo com elementos interativos brilhantes
- Do Ripple wave animation em cliques de botao
- Do Pulse glow no hover de elementos interativos
- Do Ondas sonoras visuais (circulos concentricos animados)
- Do Shake animation para erros
- Do Icone speaker pulsante flutuante
- Do Web Audio API para micro-sons reais
- Do Toggle mute com localStorage
- Do Feedback visual sincronizado com audio
- Do Color coding por tipo de interacao


## Use Case

Apps de produtividade premium, Platforms de musica, Interfaces de gaming, Dashboards interactive, Experiencias imersivas, Tools creative

<!-- Source: https://designmd.app/library/micro-sound-ux · designmd.app -->
