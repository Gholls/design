---
version: "alpha"
name: "AI-Native UI"
description: "Design an AI-native interface. Ideal for landing pages, saas. AI-ready template."
colors:
  primary: "#6366F1"
  secondary: "#10B981"
  tertiary: "#F5F5F5"
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
spacing:
  sm: 16.0px
  md: 32.0px
  lg: 64.0px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    padding: 12px

gallery:
  order: 134
  author: "designmd.app"
  source: "https://designmd.app/library/ai-native-ui"
  tags: ["风格模板", "landing pages", "saas"]
---

## Overview

Design an AI-native interface. Ideal for landing pages, saas. AI-ready template. November 2022. OpenAI drops ChatGPT and suddenly every product team on earth is staring at a blinking cursor in a chat bubble, wondering if their entire interface just became obsolete. The chat-as-interface pattern didn't evolve gradually — it detonated. Within months, the most sophisticated AI on the planet was being accessed through what is essentially a text field and a send button. That's wild if you think about it.

Here's the distinction that matters: AI-augmented means you bolt intelligence onto existing UI patterns — autocomplete, smart suggestions, inline corrections. AI-native means the conversation IS the interface. There's no dashboard behind the curtain. The prompt is the navigation, the output is the content, and the boundary between input and output dissolves entirely.

This creates what designers call the blank canvas problem. A empty text field carries zero affordance. Users don't know what's possible, what's off-limits, or how to get from vague intent to useful output. Solving that tension — infinite capability versus zero discoverability — is the core design challenge of this generation.

- Density: 3/10 — Airy
- Variance: 3/10 — Restrained
- Motion: 6/10 — Expressive

- **Style:** Intelligent, Adaptive, Conversational, Modern
- **Keywords:** Chatbot, conversational, voice, assistant, agentic, ambient, minimal chrome, streaming text, AI interactions
- **Era:** 2020s AI-Era
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **#6366F1** (#6366F1) — Primary surface or dominant color
- **#10B981** (#10B981) — Secondary surface or text color
- **#F5F5F5** (#F5F5F5) — Supporting palette color


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

Typing indicators (3-dot pulse), streaming text animations, pulse animations, context cards, smooth reveals

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 480ms ease-out. Staggered cascades for lists: 100ms between items.
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
- No decorative gradients — flat color only
- No shadows heavier than 0 2px 8px rgba(0,0,0,0.08)
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Chat layout responsive
- Do Typing indicator smooth
- Do Input always visible
- Do Context cards styled
- Do AI responses distinct
- Do User messages aligned right


## Use Case

Landing pages, SaaS

<!-- Source: https://designmd.app/library/ai-native-ui · designmd.app -->
