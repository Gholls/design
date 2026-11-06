---
version: alpha
name: "Pulso"
website: "https://pulso-storybook.rd.com.br"
description: >-
  Design system da RD Saúde (ex-RaiaDrogasil) com theming multi-marca real:
  Raia teal #006F83 e Drogasil vermelho #B6202F alternáveis via ThemeProvider,
  mais temas prime, rdsaudesistemas e subscription. Fonte variável RD Modern,
  escala "pulse" de 0.25rem, ~50 componentes React sobre Ark UI e Radix.
  Tokens públicos nos pacotes npm @rdsaude/*.
colors:
  primary-raia: "#006F83"
  primary-raia-hover: "#005261"
  primary-raia-pressed: "#003842"
  primary-drogasil: "#B6202F"
  primary-drogasil-hover: "#941925"
  primary-drogasil-pressed: "#6F151E"
  info-fill: "#E6F3FE"
  info-text: "#183349"
  success-fill: "#E6FEF1"
  success-text: "#18492E"
  success-alt: "#2A8352"
  warning-fill: "#FDF5E7"
  warning-text: "#55350C"
  danger-fill: "#FEE6F5"
  danger-alt: "#A23476"
  ink: "#303030"
  ink-secondary: "#575757"
  surface: "#FFFFFF"
  surface-1: "#F2F2F2"
  hairline: "#E6E6E6"
  special-assinatura: "#5F28BD"
  special-fastdelivery: "#D66E0F"
typography:
  caption:
    fontFamily: "RD Modern, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1
  body:
    fontFamily: "RD Modern, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.4
  subtitle:
    fontFamily: "RD Modern, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.5
  title:
    fontFamily: "RD Modern, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
  big-number:
    fontFamily: "RD Modern, sans-serif"
    fontSize: "4rem"
    fontWeight: 700
    lineHeight: 1
rounded:
  tiny: "0.25rem"
  small: "0.5rem"
  medium: "0.75rem"
  large: "1rem"
  huge: "1.25rem"
  pill: "62.4375rem"
spacing:
  half-pulse: "0.125rem"
  pulse: "0.25rem"
  4x-pulse: "1rem"
  16x-pulse: "4rem"

gallery:
  order: 1702
  author: "designmd.app"
  source: "https://designmd.app/brands/pulso-rd"
  tags: ["真实品牌"]
---

## Overview

**Pulso** é o design system da **RD Saúde** (rebrand corporativo da RaiaDrogasil, out/2024), a maior farmacêutica varejista da América Latina com as bandeiras **Raia** e **Drogasil**. Distribuído publicamente via npm, alimenta as experiências digitais das farmácias, do programa Prime, da RD Saúde Sistemas e dos produtos por assinatura.

A assinatura técnica é o **theming multi-marca real**: o mesmo componente Button renderiza teal `#006F83` no tema `raia` e vermelho `#B6202F` no tema `drogasil`, com estados hover/pressed próprios — resolvidos pelo `ThemeProvider` em tempo de execução. Cinco temas oficiais: `raia`, `drogasil`, `prime`, `rdsaudesistemas`, `subscription`.

### Características-chave

- Cores de marca alternáveis por tema com rampas completas de interação (enabled/hovered/pressed)
- Tipografia **RD Modern** — família variável proprietária com pesos 400–800
- Unidade de espaçamento própria: **1 pulse = 0.25rem**, escalas stack/inline/padding-inset de 0.125rem a 8rem
- Perigo codificado em **magenta** (#A23476) de propósito — nunca competir com o vermelho Drogasil
- ~50 componentes React construídos sobre **Ark UI + Radix UI** com tailwind-variants e vaul
- Tokens públicos: `@raiadrogasil/pulso-design-tokens` (legado) → `@rdsaude/*` (atual)

## Colors

### Marca por tema

| Token | Raia | Drogasil |
|---|---|---|
| `{colors.primary-raia}` / `{colors.primary-drogasil}` | #006F83 | #B6202F |
| Hover | #005261 | #941925 |
| Pressed | #003842 | #6F151E |

### Semânticas (idênticas nos temas)

| Papel | Fill | Texto |
|---|---|---|
| Informativo | #E6F3FE | #183349 |
| Sucesso | #E6FEF1 | #18492E (alternativa sólida #2A8352) |
| Alerta | #FDF5E7 | #55350C |
| Perigo | #FEE6F5 | alternativa #A23476 |

### Neutras e especiais

Texto `{colors.ink}` #303030 / `{colors.ink-secondary}` #575757; superfícies #FFFFFF / {colors.surface-1} #F2F2F2 / {colors.hairline} #E6E6E6.

Cores especiais de produto: fastdelivery `{colors.special-fastdelivery}` #D66E0F · evaluate #F0A94C · assinatura `{colors.special-assinatura}` #5F28BD · clube #B34C1B · genérico #FEFAA4.

## Typography

**RD Modern** (variável) em cinco pesos documentados:

| Token | Tamanho | Weight | Line-height | Uso |
|---|---|---|---|---|
| `{typography.big-number}` | 4rem | 700 | 100% | Preços e números hero |
| `{typography.title}` | 1.25rem | 600 | 130% | Títulos |
| `{typography.subtitle}` | 1rem | 500 | 150% | Subtítulos |
| `{typography.body}` | 0.875rem | 400 | 140% | Corpo padrão |
| `{typography.caption}` | 0.75rem | 400 | 100% | Legendas |

Escala completa ("pulse sizes"): 0.75 · 0.875 · 1 · 1.25 · 1.5 · 1.75 · 2 · 2.25 · 2.5 · 2.75 · 3 · 4rem. Letter-spacing: 0 ou 5%.

## Layout

Unidade base **pulse**: `{spacing.pulse}` 0.25rem (meio-pulse 0.125rem disponível). Escalas semânticas de stack, inline e padding-inset cobrem 0.125rem→8rem em passos de 0.25rem. Bordas tokenizadas: 1px/2px/4px/8px equivalentes (.0625–.5rem).

## Elevation & Depth

Superfícies em 3 níveis neutros + sombras discretas; sheets inferiores (BottomSheet via vaul) e overlays seguem o padrão mobile-first das farmácias digitais.

## Shapes

Radius progressivo por complexidade:

| Token | Valor | Uso |
|---|---|---|
| `{rounded.tiny}` | 0.25rem | Chips pequenos |
| `{rounded.small}` | 0.5rem | Badges, tags |
| `{rounded.medium}` | 0.75rem | Inputs/form fields |
| `{rounded.large}` | 1rem | Cards |
| `{rounded.huge}` | 1.25rem | Modais, superfícies grandes |
| `{rounded.pill}` | 62.4375rem | Botões e CTAs pill |

## Components

~50 componentes React: Accordion, Button (+ButtonBadge), Checkbox/Radio/Switch, Select family, InputText/Password/Counter/MultiSelect, SearchBar, Link, OptionMenu, Pagination, Modal, SideSheet, BottomSheet, Popover, Tooltip, Toast, Snackbar, Chips, Tag, Stepper, ProgressIndicator, Refresh (loader), Rating, Coachmark, CardShape/CardCategory/CardInformative, ProductCard/ProductHeader, ListItem, Label, Logo, Icon/IconDualColor, Typography (BigNumber/Title/Subtitle/Body/Caption), Content, ThemeProvider.

Stack declarada: React 18 + Ark UI + Radix UI + tailwind-variants + vaul.

## Do's and Don'ts

**Do** envolver toda árvore de componentes num único `ThemeProvider` — misturar marcas na mesma tela quebra o reconhecimento de bandeira.

**Do** usar magenta para perigo mesmo no tema Raia — reserva o teal para ações.

**Do** consumir os tokens npm (`@rdsaude/pulso-design-tokens`) como fonte única de verdade.

**Don't** hardcode hex de marca; os valores mudam por tema e versão do design.

**Don't** usar o vermelho #B6202F decorativamente fora do tema Drogasil — ele significa ação primária ali.

## Known Gaps

- Documentação visual (Storybook pulso-storybook.rd.com.br) protegida contra automação — valores extraídos dos tokens CSS e type definitions dos pacotes npm
- Rampas completas dos temas prime/rdsaudesistemas/subscription não enumeradas nesta extração
- Motion/easing não capturados

---

## Attribution

| Campo | Valor |
|-------|-------|
| Source | [npm @raiadrogasil/pulso-design-tokens](https://www.npmjs.com/package/@raiadrogasil/pulso-design-tokens) |
| Componentes | [npm @rdsaude/pulso-react-components v3.19.1](https://www.npmjs.com/package/@rdsaude/pulso-react-components) |
| Storybook | [pulso-storybook.rd.com.br](https://pulso-storybook.rd.com.br/) |
| Catálogo | [Design Systems Brasileiros — Pulso](https://designsystemsbrasileiros.com/pulso/) |
| Method | Open-source tokens extraction (npm @rdsaude/*) |
| Date | 2026-08-21 |

<!-- Source: https://designmd.app/brands/pulso-rd · designmd.app -->
