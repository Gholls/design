---
name: "TOTVS PO UI"
description: "Design system enterprise da TOTVS para aplicações Angular, focado em produtividade e consistência em ERPs e sistemas corporativos."
colors:
  primary: "#753399"
  secondary: "#b92f72"
  tertiary: "#ffd464"
  surface: "#fbfbfb"
  on-surface: "#1d2426"
  neutral-light: "#eceeee"
  neutral-dark: "#4a5c60"
  success: "#107048"
  warning: "#efba2a"
  error: "#be3e37"
  info: "#23489f"
typography:
  headline:
    fontFamily: "Roboto"
    fontSize: "2rem"
    fontWeight: 700
  body:
    fontFamily: "Roboto"
    fontSize: "1rem"
    fontWeight: 400
  small:
    fontFamily: "Roboto"
    fontSize: "0.875rem"
    fontWeight: 400
rounded:
  sm: "2px"
  md: "4px"
  lg: "8px"
  xl: "16px"
  pill: "400px"
spacing:
  xxs: "4px"
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "40px"

gallery:
  order: 1706
  author: "designmd.app"
  source: "https://designmd.app/brands/totvs-po-ui"
  tags: ["真实品牌"]
---

## Overview

PO UI (Portinari UI) é o design system open-source da TOTVS, a maior empresa de tecnologia do Brasil focada em software de gestão empresarial. Construído sobre Angular, o PO UI atende sistemas ERP, CRM, HCM e aplicações corporativas de alta complexidade.

A filosofia de design prioriza **produtividade**, **acessibilidade** e **consistência** em interfaces densas de dados. O sistema adota uma paleta roxa institucional (brand-01) como identidade da TOTVS, combinada com rosa (brand-02) para ações de navegação e dourado (brand-03) para destaques visuais.

O PO UI está em transição gradual para o **Animalia DS**, o novo design system unificado da TOTVS, que introduz tokens semânticos expandidos e suporte a temas customizáveis.

## Colors

### Brand Colors

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-brand-01-base` | `#753399` | Cor primária, ações principais, botões |
| `--color-brand-01-dark` | `#5b1c7d` | Hover em elementos primários |
| `--color-brand-01-darker` | `#400e58` | Pressed em elementos primários |
| `--color-brand-01-darkest` | `#260538` | Focus ring |
| `--color-brand-01-light` | `#bd94d1` | Backgrounds pressed |
| `--color-brand-01-lighter` | `#d9c2e5` | Backgrounds hover |
| `--color-brand-01-lightest` | `#f2eaf6` | Backgrounds selected/active |
| `--color-brand-02-base` | `#b92f72` | Links de navegação, ações secundárias |
| `--color-brand-03-base` | `#ffd464` | Destaques visuais, gráficos |

### Neutral Colors

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-neutral-light-00` | `#ffffff` | Background principal |
| `--color-neutral-light-05` | `#fbfbfb` | Background de inputs, áreas secundárias |
| `--color-neutral-light-10` | `#eceeee` | Bordas suaves, separadores |
| `--color-neutral-light-20` | `#dadedf` | Bordas de containers, disabled backgrounds |
| `--color-neutral-light-30` | `#b6bdbf` | Placeholders, disabled states |
| `--color-neutral-mid-40` | `#9da7a9` | Dividers, elementos terciários |
| `--color-neutral-mid-60` | `#6e7c7f` | Textos de suporte |
| `--color-neutral-dark-70` | `#4a5c60` | Labels, ícones, bordas de inputs |
| `--color-neutral-dark-80` | `#2c3739` | Textos corporais |
| `--color-neutral-dark-90` | `#1d2426` | Textos principais |
| `--color-neutral-dark-95` | `#0b0e0e` | Textos mais fortes, headings |

### Feedback Colors

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-feedback-positive-base` | `#107048` | Sucesso |
| `--color-feedback-warning-base` | `#efba2a` | Atenção |
| `--color-feedback-negative-base` | `#be3e37` | Erro, perigo |
| `--color-feedback-info-base` | `#23489f` | Informativo |

### Color Palette (Charts & Tags)

12 cores para visualizações de dados:
`#0c9abe`, `#2c85c8`, `#2c43c8`, `#5843c8`, `#ab43c8`, `#ab4391`, `#c64840`, `#ea9b3e`, `#abc249`, `#56b96b`, `#00b28e`, `#06a6a5`

## Typography

O PO UI utiliza a família **Roboto** em três variantes:

| Variante | Font Family | Peso | Uso |
|----------|-------------|------|-----|
| Regular | `Roboto` | 400 | Textos corporais, labels |
| Bold | `Roboto-Bold` | 700 | Títulos, botões, ênfase |
| Condensed Light | `Roboto-Condensed-Light` | 200/300 | Display headings, títulos de página |

### Escala Tipográfica

| Token | Tamanho | Uso |
|-------|---------|-----|
| `--font-size-xs` | 0.75rem (12px) | Captions, textos menores |
| `--font-size-sm` | 0.875rem (14px) | Textos secundários, badges |
| `--font-size-default` | 1rem (16px) | Corpo principal |
| `--font-size-md` | 1.25rem (20px) | Subtítulos |
| `--font-size-lg` | 1.5rem (24px) | Títulos de seção |
| `--font-size-xl` | 2rem (32px) | Títulos grandes |
| `--font-size-2xl` | 2.5rem (40px) | Display médio |
| `--font-size-3xl` | 3rem (48px) | Display grande |

### Line Heights

- `--line-height-none`: 100%
- `--line-height-sm`: 140%
- `--line-height-md`: 150%
- `--line-height-lg`: 160%

### Font Weights

- `--font-weight-normal`: 400
- `--font-weight-semibold`: 600
- `--font-weight-bold`: 700

## Layout

### Grid System

O PO UI usa um grid de **12 colunas** responsivo com breakpoints customizáveis:

| Breakpoint | Classe | Largura |
|------------|--------|---------|
| Small | `po-sm-*` | ≤ 480px |
| Medium | `po-md-*` | 481px — 960px |
| Large | `po-lg-*` | 961px — 1366px |
| Extra Large | `po-xl-*` | ≥ 1367px |

### Spacing Scale

Sistema de espaçamento baseado em múltiplos de 4px:

| Token | Valor | CSS Class |
|-------|-------|-----------|
| `--spacing-xxs` | 0.25rem (4px) | — |
| `--spacing-xs` | 0.5rem (8px) | `po-m-1` / `po-p-1` |
| `--spacing-sm` | 1rem (16px) | `po-m-2` / `po-p-2` |
| `--spacing-md` | 1.5rem (24px) | `po-m-3` / `po-p-3` |
| `--spacing-lg` | 2rem (32px) | `po-m-4` / `po-p-4` |
| `--spacing-xl` | 2.5rem (40px) | `po-m-5` / `po-p-5` |

### Squish Spacing (Padding assimétrico)

| Token | Valor |
|-------|-------|
| `--spacing-squish-xs` | 4px 8px |
| `--spacing-squish-sm` | 6px 12px |
| `--spacing-squish-md` | 8px 16px |
| `--spacing-squish-lg` | 12px 24px |
| `--spacing-squish-xl` | 16px 24px |

### Density Tokens (Layout)

O PO UI suporta ajuste de densidade via tokens:
- `--po-density-header-padding`: Padding interno em headers
- `--po-density-content-padding`: Padding interno em contents
- `--po-density-footer-padding`: Padding interno em footers
- `--po-density-gap-header-content`: Espaço entre header e content
- `--po-density-gap-spacing`: Espaço entre blocos de conteúdo

## Elevation & Depth

### Shadow Scale

| Token | Valor | Uso |
|-------|-------|-----|
| `--shadow-none` | 0 0 0 | Flat / sem elevação |
| `--shadow-sm` | 0 1px 4px 0 (10% opacidade) | Cards rasos, elementos flutuantes discretos |
| `--shadow-md` | 0 4px 8px 0 (10% opacidade) | Dropdowns, popovers, widgets |
| `--shadow-lg` | 0 6px 12px 0 (10% opacidade) | Modais, toasters, elementos flutuantes |
| `--shadow-xl` | 0 16px 24px 0 (10% opacidade) | Page slides, overlays de alto destaque |

### Overlay

- Background overlay: `--color-neutral-dark-80` com 70% de opacidade
- Usado em modais e menus laterais

## Shapes

### Border Radius

| Token | Valor | Uso |
|-------|-------|-----|
| `--border-radius-none` | none | Elementos sem arredondamento |
| `--border-radius-sm` | 2px | Sutil, componentes menores |
| `--border-radius-md` | 4px | **Padrão** — botões, inputs, cards, modais |
| `--border-radius-lg` | 8px | Containers, listbox |
| `--border-radius-xl` | 16px | Elementos especiais |
| `--border-radius-pill` | 400px | Tags, disclaimers, badges |

### Border Width

| Token | Valor | Uso |
|-------|-------|-----|
| `--border-width-sm` | 1px | Bordas padrão de containers e inputs |
| `--border-width-md` | 2px | Bordas de botões, outlines de foco |
| `--border-width-lg` | 4px | Outline de focus-visible |
| `--border-width-xl` | 8px | Decorativo |

## Components

### Button

- **Font:** Roboto Bold, tamanho padrão
- **Border radius:** 4px (`--border-radius-md`)
- **States:**
  - Default: texto `#753399`, background transparente
  - Hover: texto `#5b1c7d`, background `#d9c2e5`
  - Pressed: texto `#400e58`, background `#bd94d1`
  - Disabled: texto `#4a5c60`, cor `#b6bdbf`
  - Danger: background `#be3e37`, hover `#9b2d27`

### Input

- **Background:** `#fbfbfb`
- **Border:** bottom, cor `#4a5c60`
- **Border radius:** 4px
- **States:**
  - Hover: borda `#5b1c7d`, background `#f2eaf6`
  - Focused: borda `#753399`, outline `#260538`
  - Disabled: background `#dadedf`, borda `#b6bdbf`
  - Error: borda `#be3e37`

### Tag

- **Border radius:** pill (400px)
- **Variantes semânticas:**
  - Neutral: background `#eceeee`, texto `#2c3739`
  - Positive: background `#def7ed`, texto `#0f5236`
  - Negative: background `#f6e6e5`, texto `#72211d`
  - Warning: background `#fcf6e3`, texto `#473400`
  - Info: background `#e3e9f7`, texto `#173782`

### Widget (Card)

- **Background:** `#ffffff`
- **Border:** 1px solid `#dadedf`
- **Border radius:** 4px
- **Shadow:** `--shadow-md` (4px 8px)
- **Hover:** shadow `--shadow-lg`, border `--color-action-hover`

### Modal

- **Background:** `#ffffff`
- **Border radius:** 4px
- **Shadow:** `--shadow-md`
- **Overlay:** `#2c3739` com 70% opacidade
- **Divider:** `#dadedf`

### Table

- **Background:** `#ffffff`
- **Striped rows:** `#fbfbfb`
- **Headline rows:** `#eceeee` (bold)
- **Hover:** background `#d9c2e5`, text `#5b1c7d`
- **Selected:** background `#f2eaf6`
- **Lines:** `#9da7a9`

### Menu

- **Background:** `#fbfbfb`
- **Active item:** background `#f2eaf6`, cor `#400e58`
- **Hover:** background `#d9c2e5`, cor `#260538`
- **Pressed:** background `#bd94d1`

## Motion & Interaction

### Durations

| Token | Valor | Uso |
|-------|-------|-----|
| `--duration-extra-fast` | 70ms | Micro-interações, checkboxes |
| `--duration-fast` | 110ms | Fade in/out |
| `--duration-normal` | 150ms | Transições padrão |
| `--duration-moderate` | 240ms | Animações de skeleton |
| `--duration-slow` | 400ms | Expansões, collapses |
| `--duration-extra-slow` | 700ms | Page slides |

### Easing Functions

- `--timing-standart`: `cubic-bezier(0.35, 0, 0.1, 1)` — Transições gerais
- `--timing-entering`: `cubic-bezier(0.3, 0, 1, 0.8)` — Elementos entrando
- `--timing-exiting`: `cubic-bezier(0.1, 0, 0, 1)` — Elementos saindo
- `--timing-continuous`: `cubic-bezier(0, 0, 0, 0)` — Animações contínuas (loading)

### Accessibility Targets

- `--target-size-aaa`: 2.75rem (44px) — Área mínima de toque WCAG AAA
- `--target-size-aa`: 2rem (32px) — Área mínima WCAG AA
- `--focus-aaa`: 4px — Outline de foco WCAG AAA
- `--focus-aa`: 2px — Outline de foco WCAG AA

## Do's and Don'ts

### ✅ Do's

- Usar o roxo brand-01 (`#753399`) como cor primária para CTAs e ações
- Usar rosa brand-02 (`#b92f72`) para links de navegação e ações de leitura
- Manter `border-radius-md` (4px) como padrão para a maioria dos componentes
- Usar os tokens de feedback (positive, negative, warning, info) para comunicar status
- Aplicar `--shadow-md` em elementos flutuantes como dropdowns e popovers
- Respeitar a escala de spacing em múltiplos de 4px
- Usar `Roboto` como família tipográfica principal
- Aplicar `font-weight-bold` (700) em labels de botões e headings
- Usar a paleta categórica de 12 cores para gráficos e visualizações
- Garantir target-size mínimo de 44px (AAA) para áreas de toque

### ❌ Don'ts

- Não usar cores hardcoded — sempre referenciar tokens CSS custom properties
- Não misturar Nunito Sans (legado) com Roboto (atual) na mesma interface
- Não usar `border-radius-pill` em componentes que não sejam tags/badges
- Não aplicar sombras diretamente — usar a escala `--shadow-sm` a `--shadow-xl`
- Não ignorar os estados de interação (hover, pressed, focused, disabled)
- Não usar preto puro (`#000000`) para texto — usar a escala de neutrals
- Não substituir o overlay padrão de 70% opacidade em modais
- Não criar espaçamentos fora da escala definida (múltiplos de 4px/8px)
- Não usar cores brand-01 para textos longos — reservar para ações interativas
- Não ignorar o focus-visible outline de 4px para acessibilidade

---

## Attribution

- Source: https://github.com/po-ui/po-style + https://github.com/po-ui/po-angular
- Extracted: 2026-07-05
- Method: open-source repo
- License: Design tokens extracted from MIT-licensed open-source repository. PO UI is maintained by TOTVS S.A. No affiliation with the brand.

<!-- Source: https://designmd.app/brands/totvs-po-ui · designmd.app -->
