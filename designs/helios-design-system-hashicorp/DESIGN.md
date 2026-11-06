---
version: "alpha"
name: "Helios Design System (HashiCorp)"
description: "Highly structured and technical enterprise UI inspired by HashiCorp Helios. Ideal for ferramentas devops, saas técnico, dashboards de infraestrutura, plataformas open-source, painéis de engenharia. AI-ready template."
colors:
  primary: "#1060ff"
  secondary: "#0c0c0e"
  tertiary: "#ffffff"
  neutral: "#0c56e9"
  surface: "#008a22"
  accent: "#e52228"
typography:
  h1:
    fontFamily: "-apple-system"
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: "-apple-system"
    fontSize: 1rem
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px

gallery:
  order: 465
  author: "designmd.app"
  source: "https://designmd.app/library/helios-design-system-hashicorp"
  tags: ["风格模板", "ferramentas devops", "saas técnico"]
---

## Overview

Highly structured and technical enterprise UI inspired by HashiCorp Helios. Ideal for ferramentas devops, saas técnico, dashboards de infraestrutura, plataformas open-source, painéis de engenharia. AI-ready template. HashiCorp didn't set out to build a design system. They set out to make infrastructure manageable — and Helios emerged from that obsession with operational clarity. When you're building UIs for Terraform state files, Vault secret hierarchies, and Consul service meshes, you can't afford decorative ambiguity. Every pixel needs to communicate system state without hesitation.

What makes Helios fascinating is how it reverse-engineered aesthetics from constraint. Infrastructure tools demand information density that would break most consumer-facing systems. HashiCorp's team had to solve for operators scanning hundreds of resources at 2am during an incident — not users leisurely browsing a feed. That pressure forged a visual language where hierarchy is ruthlessly enforced, color is functional rather than emotional, and whitespace exists only to prevent cognitive collision.

The system carries the DNA of terminal interfaces forward into modern UI. It respects the developer's mental model — structured, predictable, scannable — while adding just enough visual refinement to feel like software rather than a spreadsheet. Helios proves that infrastructure companies produce some of the most disciplined design systems precisely because their users have zero tolerance for ambiguity.

- Density: 8/10 — Dense
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Technical Enterprise
- **Keywords:** Systemic, reliable, data-dense, technical, accessible, open-source, engineering-focused
- **Era:** 2020s Technical SaaS
- **Light/Dark:** ✓ Full

## Colors

- **Action Blue** (#1060ff) — Accent highlight, links and focus states
- **Foreground Strong** (#0c0c0e) — Secondary surface or text color
- **Surface Primary** (#ffffff) — Primary accent, CTAs and interactive elements
- **Action Hover** (#0c56e9) — Extended palette, decorative use
- **Success Green** (#008a22) — Success states, positive indicators
- **Critical Red** (#e52228) — Error states, destructive actions
- **Neutral Faint** (#fafafa) — Extended palette, decorative use


## Typography

- **Display / Hero:** Segoe UI — Weight 700, tight tracking, used for headline impact
- **Accent:** -apple-system — Used for decorative or emphasis text
- **Body:** Segoe UI — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Segoe UI — 0.875rem, weight 500, slight letter-spacing
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

Small border-radius (5-6px), layered elevation (soft shadows for interactivity), precise grid layouts, high contrast ratios (WCAG AA), subtle hover transitions

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
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
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Action Blue #1060ff
- Do Border-radius 5-6px
- Do System font stack
- Do Data-dense layout spacing
- Do High contrast accessibility (WCAG AA)


## Use Case

DevOps tools, Technical SaaS, Infrastructure dashboards, Open-source platforms, Engineering panels

<!-- Source: https://designmd.app/library/helios-design-system-hashicorp · designmd.app -->
