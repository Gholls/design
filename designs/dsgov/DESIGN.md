---
version: alpha
name: "DSGov"
website: "https://gov.br/ds"
description: >-
  Padrão Digital de Governo: o design system oficial do Governo Federal Brasileiro,
  usado por todos os sites e serviços digitais gov.br. Fundação preta sobre azul
  institucional #1351B4, tipografia única Rawline em 9 pesos, escala de espaçamento
  base 8px, 36 componentes web acessíveis com aderência obrigatória ao e-MAG/WCAG.
  Licenças CC0 e MIT — o maior design system open-source do setor público brasileiro.
colors:
  primary: "#1351B4"
  primary-dark: "#0C326F"
  info: "#155BCB"
  success: "#168821"
  warning: "#FFCD07"
  danger: "#E52207"
  highlight: "#268744"
  focus-light: "#C2850C"
  focus-dark: "#FFBE2E"
  visited: "#0C326F"
  ink: "#1B1B1B"
  ink-muted: "#757575"
  canvas: "#FFFFFF"
  surface-1: "#F0F0F0"
  hairline: "#CCCCCC"
typography:
  down-01:
    fontFamily: "Rawline, Raleway, sans-serif"
    fontSize: "11.662px"
    fontWeight: 400
  base:
    fontFamily: "Rawline, Raleway, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "20px"
  up-01:
    fontFamily: "Rawline, Raleway, sans-serif"
    fontSize: "16.8px"
    fontWeight: 400
  up-02:
    fontFamily: "Rawline, Raleway, sans-serif"
    fontSize: "20.16px"
    fontWeight: 600
  up-03:
    fontFamily: "Rawline, Raleway, sans-serif"
    fontSize: "24.192px"
    fontWeight: 600
  up-05:
    fontFamily: "Rawline, Raleway, sans-serif"
    fontSize: "34.832px"
    fontWeight: 700
  up-08:
    fontFamily: "Rawline, Raleway, sans-serif"
    fontSize: "60.2px"
    fontWeight: 700
rounded:
  none: "0px"
  sm: "4px"
  md: "8px"
  lg: "16px"
  full: "999em"
spacing:
  half: "4px"
  base: "8px"
  baseh: "12px"
  2x: "16px"
  3x: "24px"
  4x: "32px"
  5x: "40px"
  6x: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
    fontWeight: 600
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    borderColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  header-gov:
    backgroundColor: "{colors.canvas}"
    borderBottom: "1px solid {colors.hairline}"
    height: "80px"
  footer-gov:
    backgroundColor: "{colors.surface-1}"
    borderTop: "1px solid {colors.hairline}"
gallery:
  order: 20
  author: "designmd.app"
  source: "https://designmd.app/brands/dsgov"
  tags: ["政府设计系统", "无障碍", "巴西 gov.br", "CC0/MIT"]
---

## Overview

O **DSGov** (Padrão Digital de Governo) é o design system oficial do Governo Federal Brasileiro, mantido pelo SERPRO e usado como fundação de todos os serviços digitais em `gov.br` — do portal principal aos sistemas de cada ministério. É o maior design system do setor público brasileiro, distribuído sob licenças **CC0 1.0 Universal e MIT**.

O sistema existe para resolver um problema específico: milhares de órgãos federais com identidades próprias precisam oferecer experiências digitais consistentes, acessíveis e reconhecivelmente governamentais. O resultado é uma linguagem visual institucional forte — azul primário `#1351B4`, fonte Rawline, barra padrão no topo de toda página — que serve de canvas neutro para a marca de cada órgão.

### Características-chave

- Azul institucional `{colors.primary}` (#1351B4) como cor de ação e navegação; barra padrão do governo herdada do projeto barra.govbr
- Tipografia única **Rawline** — variante da Raleway com algarismos lining (não oldstyle), licença SIL OFL — em 9 pesos (100–900) mais itálicos
- Escala tipográfica com razão ~1,2 partindo de base 14px (`down-01` 11.662px até `up-11` 104.02px)
- Espaçamento em múltiplos de 8px com meio-passo de 4px (`half`, `base`, `baseh`, `2x`... `6xh`)
- **Acessibilidade como requisito legal**: aderência ao e-MAG (Modelo de Acessibilidade em Governo Eletrônico), WCAG 2.1 e WAI-ARIA documentadas como guia oficial
- 36 componentes implementados como Web Components framework-agnostic (Angular/React/Vue) além do CSS puro
- Focus ring dourado distinto: `{colors.focus-dark}` (#FFBE2E) sobre fundos escuros, `{colors.focus-light}` (#C2850C) sobre claros

## Colors

As rampas seguem a tradição do US Web Design System (de onde o padrão deriva): famílias nomeadas por temperatura (blue-warm, blue-cool, gray-warm, gray-cool, green-vivid, red-vivid...) com níveis numéricos 5–90.

### Semânticas

| Token | Hex | Uso |
|---|---|---|
| `{colors.primary}` | #1351B4 | Ações, links, navegação — o azul do governo |
| `{colors.info}` | #155BCB | Mensagens informativas |
| `{colors.success}` | #168821 | Confirmações (green-cool-vivid-50) |
| `{colors.warning}` | #FFCD07 | Alertas de atenção (yellow-vivid-20) |
| `{colors.danger}` | #E52207 | Erros e ações destrutivas (red-vivid-50) |
| `{colors.visited}` | #0C326F | Links visitados |

### Neutras

Rampa gray completa de 14 níveis: `#FCFCFC` (gray-1) até `#1B1B1B` (gray-90). Variações cool (`#DFE1E2`→`#1C1D1F`) e warm (`#F0F0EC`→`#171716`) para superfícies com temperatura sutil.

### Regras

- Cor nunca é o único meio de diferenciar elementos (requisito e-MAG)
- Estados de foco usam dourado dedicado, nunca reutilizar cores de feedback
- Rampas vivas (vivid) reservam-se para feedback; as sóbrias para estrutura

## Typography

Uma única família oficial: **Rawline**, disponível nos pesos thin (100) a black (900) via CDN do SERPRO (`cdngovbr-ds.estaleiro.serpro.gov.br`). Fallback: Raleway.

| Token | Tamanho | Weight | Uso |
|---|---|---|---|
| `{typography.up-08}` | 60.2px | 700 | Hero de portal |
| `{typography.up-05}` | 34.832px | 700 | Títulos de página |
| `{typography.up-03}` | 24.192px | 600 | Títulos de seção |
| `{typography.up-02}` | 20.16px | 600 | Subtítulos |
| `{typography.base}` | 14px | 400/600 | Corpo padrão, line-height 20px |
| `{typography.down-01}` | 11.662px | 400 | Legendas, metadados |

**Princípio:** a escolha de algarismos lining (todos com mesma altura) na Rawline não é estética — números tabulares são requisito para dados financeiros e estatísticos de serviços públicos.

## Layout

- **Grid:** sistema de grid próprio com breakpoints responsivos documentados no fundamento "Sistema de Grid"
- **Espaçamento:** escala linear base 8px (`{spacing.base}`) com passos intermediários de 4px para ajustes finos
- **Barra padrão:** todo site gov.br carrega a barra preta do governo federal no topo (herdada de barra.govbr)
- **Header institucional:** 80px, logo do órgão + campo de busca, separado por hairline

## Elevation & Depth

Superfícies se separam por borda hairline `{colors.hairline}` (#CCCCCC) e fundos `{colors.surface-1}` (#F0F0F0) antes de sombras. Elevação existe para modais e menus, mas a hierarquia padrão é plana e burocraticamente previsível.

## Shapes

| Token | Valor | Uso |
|---|---|---|
| `{rounded.sm}` | 4px | Badges, tags |
| `{rounded.md}` | 8px | Botões, inputs, cards — padrão |
| `{rounded.lg}` | 16px | Modais |
| `{rounded.full}` | 999em | Pills, avatares |

## Components

36 componentes oficiais: accordion, avatar, breadcrumb, button, card, carousel, checkbox, cookiebar, datetimepicker, divider, footer, header, input, item, list, loading, magic-button, menu, message, modal, notification, pagination, radio, scrim, select, sign-in, skip-link, step, switch, tab, table, tag, textarea, tooltip, upload, wizard.

Destaques institucionais:

- **header/footer** — blocos padronizados obrigatórios com barra federal, logo do órgão e links de acessibilidade
- **cookiebar** — consentimento LGPD padronizado
- **sign-in** — fluxo de autenticação integrável ao Login Único (gov.br)
- **skip-link** — navegação por teclado como componente de primeira classe
- **wizard** — formulários de serviço público multi-etapa

Implementação em camadas: CSS puro (`@govbr-ds/core`), Web Components (`govbr-ds-wbc`) e integrações Angular/React/Vue.

## Do's and Don'ts

**Do** usar o azul `{colors.primary}` para ações e navegação — é a assinatura de interatividade do sistema.

**Do** garantir contraste AA mínimo e navegação por teclado em tudo (e-MAG é exigência legal, não preferência).

**Do** manter a barra padrão e o header institucional intactos — eles comunicam legitimidade.

**Don't** introduzir fontes concorrentes à Rawline ou pesos fora da escala 100–900.

**Don't** usar vermelho `{colors.danger}` decorativamente — ele é exclusivo de erro e destruição.

**Don't** criar componentes paralelos fora dos 36 oficiais sem passar pelo processo de contribuição do SERPRO.

## Known Gaps

- Valores exatos do sistema de grid (colunas/breakpoints) não capturados nesta extração — consultar o fundamento oficial
- Tokens da V4 alpha mudam nomenclatura para camelCase JSON (`br.color.grayWarm.70`) e não devem ser usados em produção
- Ilustrações e iconografia (fundamento próprio) não enumerados aqui

---

## Attribution

| Campo | Valor |
|-------|-------|
| Source | [gov.br/ds](https://gov.br/ds) |
| Tokens CSS | [@govbr-ds/core v3.7.0](https://cdn.jsdelivr.net/npm/@govbr-ds/core) (npm público) |
| Organização | SERPRO / Governo Federal do Brasil |
| Catálogo | [Design Systems Brasileiros — DSGov](https://designsystemsbrasileiros.com/dsgov/) |
| Method | Open-source tokens extraction (@govbr-ds/core) |
| Date | 2026-08-21 |

<!-- Source: https://designmd.app/brands/dsgov · designmd.app -->
