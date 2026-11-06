---
name: "VTEX Admin UI"
description: "Intermediate design system for VTEX Admin v4 — bridging Styleguide and Shoreline with semantic color tokens and VTEX Trust typography"
status: "deprecated"
predecessor: "VTEX Styleguide"
successor: "VTEX Shoreline"
colors:
  primary: "#2953B2"
  secondary: "#DA3561"
  accent: "#2953B2"
  surface: "#FFFFFF"
  surface-soft: "#F4F4F4"
  on-surface: "#000000"
  on-surface-soft: "#545454"
  success: "#38853C"
  warning: "#D56A00"
  danger: "#CC3D3D"
  info: "#2978B5"
typography:
  headline:
    fontFamily: "VTEX Trust"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: "2rem"
  body:
    fontFamily: "VTEX Trust"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.5rem"
  caption:
    fontFamily: "VTEX Trust"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: "1rem"
  action:
    fontFamily: "VTEX Trust"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: "1.25rem"
rounded:
  none: "0px"
  sm: "0.25rem"
  md: "0.5rem"
  lg: "0.75rem"
  full: "9999px"
spacing:
  "0": "0rem"
  "05": "0.125rem"
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "5": "1.25rem"
  "6": "1.5rem"
  "7": "1.75rem"
  "8": "2rem"

gallery:
  order: 1705
  author: "designmd.app"
  source: "https://designmd.app/brands/vtex-admin-ui"
  tags: ["真实品牌"]
---

## Overview

> ⚠️ **Status: Deprecated** — Admin UI foi o design system intermediário da VTEX, criado para o Admin v4. Está sendo substituído pelo Shoreline.

**Admin UI** é o design system criado pela VTEX para construir experiências de alta qualidade e consistentes no produto Admin. Representou uma evolução significativa do Styleguide.

### Evolução dos Design Systems VTEX

| Período | Design System | Status |
|---|---|---|
| 2017–2021 | **Styleguide** | Legacy |
| 2020–2024 | **Admin UI** | **Deprecated** |
| 2023–atual | **Shoreline** | Ativo |

## Colors

### Paleta Blue (Main)
| Token | Hex | Uso |
|---|---|---|
| `blue40` | `#2953B2` | **Ação primária** |
| `blue50` | `#20408C` | Hover |
| `blue60` | `#172F66` | Pressed |

### Paleta Green (Positive)
| Token | Hex | Uso |
|---|---|---|
| `green40` | `#38853C` | **Sucesso** |

### Paleta Red (Critical)
| Token | Hex | Uso |
|---|---|---|
| `red40` | `#CC3D3D` | **Critical** |

### Paleta Orange (Warning)
| Token | Hex | Uso |
|---|---|---|
| `orange40` | `#D56A00` | **Warning** |

### Paleta Pink (Brand)
| Token | Hex | Uso |
|---|---|---|
| `pink40` | `#DA3561` | **VTEX Pink** — logo, ilustrações |

## Typography

### VTEX Trust
Typeface proprietária da VTEX:
```css
font-family: 'VTEX Trust', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

## Do's and Don'ts

### Do's
- ✅ Use tokens semânticos (`blue40` para ações, `green40` para sucesso)
- ✅ Use `$space-4` (16px) como espaçamento padrão

### Don'ts
- ❌ Não inicie novos projetos com Admin UI — use Shoreline
- ❌ Não misture Admin UI com Styleguide ou Shoreline

---

## Attribution
- Source: https://admin-ui.vercel.app
- npm: @vtex/admin-ui
- Extracted: 2026-09-21
- Method: Public documentation
- License: Design tokens extracted from publicly available documentation. No affiliation with VTEX.

<!-- Source: https://designmd.app/brands/vtex-admin-ui · designmd.app -->
