---
version: "alpha"
name: "Notebook Tabs"
description: "Design an editorial, organized landing page that looks like a notebook. Ideal for blogs editoriais, digital magazines, portfolios criativos, educational platforms. AI-ready template."
colors:
  primary: "#2d2d2d"
  secondary: "#f8f6f1"
  tertiary: "#1a1a1a"
  neutral: "#98d4bb"
  surface: "#c7b8ea"
  accent: "#f4b8c5"
typography:
  h1:
    fontFamily: Bodoni Moda
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: Bodoni Moda
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 8px
  md: 16px
  lg: 24px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px

gallery:
  order: 605
  author: "designmd.app"
  source: "https://designmd.app/library/notebook-tabs"
  tags: ["风格模板", "blogs editoriais", "digital magazines", "portfolios criativos"]
---

## Overview

Design an editorial, organized landing page that looks like a notebook. Ideal for blogs editoriais, digital magazines, portfolios criativos, educational platforms. AI-ready template. Notebook tabs didn't emerge from software. They're a direct lift from physical filing systems — those plastic dividers with printed labels that let you thumb through a binder without reading every page. The metaphor worked because everyone already understood it. Early HyperCard stacks and Apple's Newton used tab-like navigation to organize cards of information, treating each section as a discrete page you could flip to.

What's interesting is how the pattern diverged once it hit digital. Browser tabs became about parallel contexts — multiple documents open simultaneously. But notebook tabs kept the original promise: sequential organization within a single document or workspace. They're closer to a table of contents made interactive. Notion, Obsidian, and Bear all use variations of this pattern, though they rarely call them "tabs" anymore. The language shifted to "pages" or "sections," but the interaction model — click a labeled edge to reveal its content — remains unchanged from those plastic binder dividers.

The best implementations preserve that physicality. A slight overlap, a shadow suggesting depth, a sense that content exists behind the active surface rather than being conjured on demand.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Editorial, Organized, Elegant, Tactile
- **Keywords:** editorial, notebook, tabs, cream paper, colorful tabs, Bodoni Moda, DM Sans, organized, elegant, tactile, binder holes
- **Era:** 2024-2026 Editorial Tactile
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Outer Dark** (#2d2d2d) — Dark surface, primary background
- **Page Cream** (#f8f6f1) — Light surface, card backgrounds
- **Text Dark** (#1a1a1a) — Dark surface, primary background
- **Tab Mint** (#98d4bb) — Extended palette, decorative use
- **Tab Lavender** (#c7b8ea) — Extended palette, decorative use
- **Tab Pink** (#f4b8c5) — Primary text color
- **Tab Sky** (#a8d8ea) — Extended palette, decorative use
- **Tab Cream** (#ffe6a7) — Secondary surface


## Typography

- **Display / Hero:** Bodoni Moda — Weight 700, tight tracking, used for headline impact
- **Accent:** DM Sans — Used for decorative or emphasis text
- **Body:** Bodoni Moda — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Bodoni Moda — 0.875rem, weight 500, slight letter-spacing
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

Paper container with subtle shadow, colorful section tabs on right edge with vertical text, binder hole decorations on left, tab text scales with viewport clamp(), smooth page-turn transitions 300ms

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 8px. See rounded tokens in front matter for the full scale.


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

- Do Bodoni Moda + DM Sans carregados
- Do Paper container cream #f8f6f1
- Do Dark outer background #2d2d2d
- Do Colorful tabs na borda direita
- Do Vertical text nos tabs
- Do Binder holes na esquerda
- Do Tab text com clamp()
- Do Responsivo mobile/tablet/desktop


## Use Case

Blogs editoriais, Digital magazines, Portfolios criativos, Educational platforms

<!-- Source: https://designmd.app/library/notebook-tabs · designmd.app -->
