---
version: "alpha"
name: "Frosted Glass"
description: "Frosted Glass visual system, translated from the Claude Artisan catalog for use in digital products. Simple backdrop-filter blur behind modals/overlays; Semi-opaque white or dark scrim"
colors:
  primary: "#1f6feb"
  background: "#7c8a99"
  surface: "#7c8a99"
  text: "#16202b"
  accent: "#1a1f26"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#FFFFFF"
typography:
  h1:
    fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'SF Pro Text', -apple-system, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'SF Pro Text', -apple-system, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "8px"
  md: "14px"
  lg: "20px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "16px"
  button-secondary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.md}"
    padding: "16px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "24px"
  page:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text}"
    padding: "16px"

gallery:
  order: 417
  author: "designmd.app"
  source: "https://designmd.app/library/frosted-glass"
  tags: ["风格模板"]
---
## Overview

Frosted Glass visual system, translated from the Claude Artisan catalog for use in digital products. Simple backdrop-filter blur behind modals/overlays; Semi-opaque white or dark scrim

- **Category:** glass
- **Era:** 2013–present
- **Origin:** Generic pattern popularized by iOS 7 blur layers.
- **Reference:** iOS Control Center; modal backdrops across the web.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Simple backdrop-filter blur behind modals/overlays
- Semi-opaque white or dark scrim
- Content legibility via blur + tint
- No strong refraction or edge lighting

## Colors

- **bg** — #7c8a99
- **bg-photo-a** — #93a2b0
- **bg-photo-b** — #5c6b7a
- **surface** — rgba(255, 255, 255, 0.55)
- **surface-strong** — rgba(255, 255, 255, 0.72)
- **border** — rgba(255, 255, 255, 0.4)
- **text** — #16202b
- **text-muted** — #3d4a58
- **primary** — #1f6feb
- **accent** — #1a1f26

## Typography

- Display: 'SF Pro Display', -apple-system, system-ui, sans-serif
- Body: 'SF Pro Text', -apple-system, system-ui, sans-serif
- Mono: 'SF Mono', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Simple backdrop-filter blur behind modals/overlays; Semi-opaque white or dark scrim; Content legibility via blur + tint; No strong refraction or edge lighting; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 8px, 14px, 20px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/frosted-glass · designmd.app -->
