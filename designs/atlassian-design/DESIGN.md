---
version: "alpha"
name: "Atlassian Design System"
description: "Atlassian Design System visual system, translated from the Claude Artisan catalog for use in digital products. Friendly-professional productivity tone; Blue/neutral palette, clear hierarchy"
colors:
  primary: "#0052cc"
  background: "#f7f8f9"
  surface: "#ffffff"
  text: "#172b4d"
  accent: "#36b37e"
  on-primary: "#FFFFFF"
  on-surface: "#000000"
  on-accent: "#000000"
typography:
  h1:
    fontFamily: "'Charlie Sans', 'Segoe UI', system-ui, sans-serif"
    fontSize: "4rem"
    fontWeight: "700"
    lineHeight: "1.05"
  body-md:
    fontFamily: "'Charlie Sans', 'Segoe UI', system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: "'Charlie Sans', 'Segoe UI', system-ui, -apple-system, sans-serif"
    fontSize: "0.75rem"
    fontWeight: "600"
    letterSpacing: "0.06em"
rounded:
  sm: "3px"
  md: "6px"
  lg: "10px"
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
  order: 166
  author: "designmd.app"
  source: "https://designmd.app/library/atlassian-design"
  tags: ["风格模板", "clear hierarchy"]
---
## Overview

Atlassian Design System visual system, translated from the Claude Artisan catalog for use in digital products. Friendly-professional productivity tone; Blue/neutral palette, clear hierarchy

- **Category:** flat-platform
- **Era:** 2017–present
- **Origin:** Atlassian.
- **Reference:** Jira; Confluence; Trello.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Friendly-professional productivity tone
- Blue/neutral palette, clear hierarchy
- Strong content + accessibility guidance
- Componentized (Atlaskit)

## Colors

- **bg** — #f7f8f9
- **surface** — #ffffff
- **surface-strong** — #f1f2f4
- **border** — #dcdfe4
- **text** — #172b4d
- **text-muted** — #44546f
- **primary** — #0052cc
- **accent** — #36b37e

## Typography

- Display: 'Charlie Sans', 'Segoe UI', system-ui, sans-serif
- Body: 'Charlie Sans', 'Segoe UI', system-ui, -apple-system, sans-serif
- Mono: 'SFMono-Regular', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Friendly-professional productivity tone; Blue/neutral palette, clear hierarchy; Strong content + accessibility guidance; Componentized (Atlaskit); sombras e elevação

## Shapes

- Radius scale: 3px, 6px, 10px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.

<!-- Source: https://designmd.app/library/atlassian-design · designmd.app -->
