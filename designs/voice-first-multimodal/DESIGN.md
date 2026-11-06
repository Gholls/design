---
version: "alpha"
name: "Voice-First Multimodal"
description: "Voice-first multimodal interface. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#FAFAFA"
  secondary: "#6B8FAF"
  tertiary: "#9B8FBB"
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
    padding: 12px

gallery:
  order: 831
  author: "designmd.app"
  source: "https://designmd.app/library/voice-first-multimodal"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Voice-first multimodal interface. Ideal for landing pages, saas. AI-ready template. Voice interfaces spent a decade being disappointing. Siri launched in 2011 as a party trick. Alexa turned voice into a shopping cart with a speaker attached. Google Assistant got smarter but stayed trapped in a cylinder. The problem was never recognition accuracy — it was that we kept designing voice as a replacement for screens instead of a companion to them.

The real shift happened when designers stopped asking "how do we remove the screen?" and started asking "what does each modality do best?" Voice excels at intent, at speed, at hands-free moments. Screens excel at comparison, at browsing, at confirmation. The multimodal era — where voice and visual work as a unified experience — finally arrived when automotive and smart display interfaces proved the pattern at scale.

By 2026, voice-first multimodal is the default for automotive dashboards, kitchen displays, accessibility layers, and AI assistant interfaces. The design challenge isn't technical anymore. It's choreographic: orchestrating what the user hears, sees, and says into a single coherent flow without either channel fighting the other.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 6/10 — Expressive

- **Style:** Voice-First, Multimodal, Ambient, Accessible
- **Keywords:** Voice UI, multimodal, audio feedback, conversational, hands-free, ambient, contextual, speech recognition
- **Era:** 2025+ Voice Era
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Soft White** (#FAFAFA) — Light surface, card backgrounds
- **Muted Blue** (#6B8FAF) — Secondary text, borders, muted elements
- **Gentle Purple** (#9B8FBB) — Accent color, emphasis elements


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

Voice waveform visualization, listening pulse, processing spinner, speak animation, smooth transitions

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 480ms ease-out. Staggered cascades for lists: 100ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 24px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Generously rounded (1.5rem) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Generously rounded (1.5rem) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Voice recognition works
- Do Visual feedback clear
- Do Listening state obvious
- Do Speaking animation smooth
- Do Fallback UI provided
- Do Accessibility excellent


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/voice-first-multimodal · designmd.app -->
