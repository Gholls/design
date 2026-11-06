---
name: Conta Azul (LCAD)
description: >
  Linguagem Conta Azul de Design (LCAD) — design system interno da Conta Azul,
  plataforma SaaS de gestão financeira e ERP para PMEs brasileiras.
  Classificado como closed, com foco em components e ux-writing.
  Hospedado no ZeroHeight com Guia de Redação dedicado.
colors:
  primary:
    blue600: "#0066CC"
    blue700: "#005BB5"
    blue800: "#004C99"
    blue500: "#1A75D2"
    blue400: "#3D8FDB"
    blue300: "#6BB3F0"
    blue100: "#E6F2FF"
  secondary:
    yellow500: "#FFBA00"
    yellow400: "#FFCC33"
    yellow600: "#E6A800"
    green500: "#00A86B"
    green600: "#008F5A"
  neutral:
    white: "#FFFFFF"
    gray50: "#F9FAFB"
    gray100: "#F3F4F6"
    gray200: "#E5E7EB"
    gray300: "#D1D5DB"
    gray400: "#9CA3AF"
    gray500: "#6B7280"
    gray600: "#4B5563"
    gray700: "#374151"
    gray800: "#1F2937"
    gray900: "#111827"
    black: "#000000"
  feedback:
    success: "#00A86B"
    warning: "#FFBA00"
    error: "#DC2626"
    info: "#0066CC"
  darkMode:
    background: "#0F172A"
    surface: "#1E293B"
    textPrimary: "#F1F5F9"
    textSecondary: "#94A3B8"
typography:
  families:
    - Nunito Sans
    - system-ui
    - -apple-system
    - sans-serif
  weights:
    regular: 400
    medium: 500
    semiBold: 600
    bold: 700
    extraBold: 800
  sizes:
    caption: 12
    small: 14
    body: 16
    subtitle: 18
    h4: 20
    h3: 24
    h2: 32
    h1: 40
    display: 48
  lineHeights:
    tight: 1.2
    normal: 1.5
    relaxed: 1.75
rounded:
  none: "0px"
spacing:
  0: 0
  1: 4
  2: 8
  3: 12
  4: 16
  5: 20
  6: 24
  8: 32
  10: 40
  12: 48
  16: 64
  20: 80

gallery:
  order: 1675
  author: "designmd.app"
  source: "https://designmd.app/brands/conta-azul"
  tags: ["真实品牌"]
---

## Overview

**LCAD (Linguagem Conta Azul de Design)** é o design system interno da **Conta Azul**, plataforma SaaS brasileira de gestão financeira e ERP para pequenas e médias empresas. A Conta Azul conecta empresários, contadores e bancos em uma única plataforma, oferecendo emissão de notas fiscais, controle financeiro, cobrança automática, conciliação bancária e gestão de estoque.

O sistema é classificado como **closed** (não público) e está hospedado no **ZeroHeight**, com documentação de componentes e um **Guia de Redação** dedicado (UX Writing).

| Aspecto | Detalhe |
|---------|---------|
| Nome completo | Linguagem Conta Azul de Design |
| Sigla | LCAD |
| Organização | Conta Azul (adquirida pela Visma em 2025) |
| Plataforma de documentação | ZeroHeight |
| Status | Closed (interno) |
| Tags | ux-writing, components, closed |
| Listado em | [designsystemsbrasileiros.com](https://designsystemsbrasileiros.com/design-system-conta-azul/) |
| Guia de Redação | guiaderedacao.contaazul.design |

O LCAD é voltado para a consistência da experiência tanto no **Conta Azul Pro** (produto ERP principal) quanto no **CA de Bolso** (app mobile), APIs de desenvolvedores e sites institucionais.

---

## Colors

A paleta da Conta Azul é construída em torno do **azul institucional** — refletindo o próprio nome da marca — com tons de cinza neutros para hierarquia e cores de feedback para estados de sistema.

### Primary (Azul)

| Token | Hex | Uso |
|-------|-----|-----|
| `blue600` | `#0066CC` | Primary — CTAs, links, elementos interativos principais |
| `blue700` | `#005BB5` | Primary hover — estado de interação |
| `blue800` | `#004C99` | Primary pressed — estado ativo |
| `blue500` | `#1A75D2` | Primary soft — elementos com menor ênfase |
| `blue400` | `#3D8FDB` | Light accent — ícones informativos |
| `blue300` | `#6BB3F0` | Decorativo — ilustrações, gráficos |
| `blue100` | `#E6F2FF` | Background — surfaces azuladas sutis, banners info |

### Secondary

| Token | Hex | Uso |
|-------|-----|-----|
| `yellow500` | `#FFBA00` | Destaque — badges, promoções, CTAs secundários |
| `yellow400` | `#FFCC33` | Yellow hover |
| `yellow600` | `#E6A800` | Yellow pressed |
| `green500` | `#00A86B` | Sucesso — confirmações, indicadores positivos |
| `green600` | `#008F5A` | Green dark — texto sobre fundo verde |

### Neutral

| Token | Hex | Uso |
|-------|-----|-----|
| `white` | `#FFFFFF` | Background principal, cards |
| `gray50` | `#F9FAFB` | Background sutil — tabelas alternadas |
| `gray100` | `#F3F4F6` | Background secundário — sidebars, footers |
| `gray200` | `#E5E7EB` | Bordas — dividers, separadores |
| `gray300` | `#D1D5DB` | Bordas — inputs em repouso |
| `gray400` | `#9CA3AF` | Texto terciário — placeholders, hints |
| `gray500` | `#6B7280` | Texto secundário — metadata, captions |
| `gray600` | `#4B5563` | Texto auxiliar — subtítulos |
| `gray700` | `#374151` | Texto principal — body text |
| `gray800` | `#1F2937` | Texto enfático — headings |
| `gray900` | `#111827` | Texto máximo — display, hero |

### Feedback

| Token | Hex | Uso |
|-------|-----|-----|
| `success` | `#00A86B` | Operação concluída, NF emitida, pagamento recebido |
| `warning` | `#FFBA00` | Atenção — vencimento próximo, ação necessária |
| `error` | `#DC2626` | Erro — falha de validação, nota rejeitada, inadimplência |
| `info` | `#0066CC` | Informativo — dicas, onboarding, notificações neutras |

### Dark Mode (Hero/Marketing)

| Token | Hex | Uso |
|-------|-----|-----|
| `background` | `#0F172A` | Fundo escuro — hero sections do site institucional |
| `surface` | `#1E293B` | Cards sobre fundo escuro |
| `textPrimary` | `#F1F5F9` | Texto principal no dark |
| `textSecondary` | `#94A3B8` | Texto secundário no dark |

---

## Typography

### Font Family

- **Nunito Sans** — Família primária. Sans-serif neo-grotesca com terminais levemente arredondados, transmitindo acessibilidade e modernidade. Excelente legibilidade em interfaces financeiras com muitos dados.
- **Fallback:** `system-ui, -apple-system, sans-serif`

### Pesos

| Peso | Valor | Uso |
|------|:---:|---|
| Regular | 400 | Texto corrido, descrições, labels |
| Medium | 500 | Subtítulos, ênfase moderada |
| SemiBold | 600 | Headers de seção, labels de formulário |
| Bold | 700 | CTAs, headings, valores financeiros destacados |
| ExtraBold | 800 | Display, hero titles, valores em destaque no dashboard |

### Escala Tipográfica

| Token | Tamanho (px) | Uso sugerido |
|-------|:---:|---|
| `caption` | 12 | Footnotes, timestamps, badges |
| `small` | 14 | Labels, metadata, texto auxiliar |
| `body` | 16 | Texto padrão, parágrafos, descrições |
| `subtitle` | 18 | Subtítulos, destaques de seção |
| `h4` | 20 | Heading nível 4 — sub-seções |
| `h3` | 24 | Heading nível 3 — seções |
| `h2` | 32 | Heading nível 2 — páginas |
| `h1` | 40 | Heading nível 1 — títulos de área |
| `display` | 48 | Hero — marketing, landing pages |

### Line Heights

| Token | Valor | Uso |
|-------|:---:|---|
| `tight` | 1.2 | Headings, display text |
| `normal` | 1.5 | Body text, parágrafos |
| `relaxed` | 1.75 | Texto longo, blocos de ajuda |

---

## Layout

### Grid System

O site institucional e o produto utilizam um layout centrado com margens responsivas:

| Breakpoint | Min-width | Colunas | Max-width | Gutter |
|:---:|:---:|:---:|:---:|:---:|
| Mobile | 0px | 4 | 100% | 16px |
| Tablet | 768px | 8 | 720px | 24px |
| Desktop | 1024px | 12 | 960px | 24px |
| Wide | 1280px | 12 | 1200px | 32px |
| Full | 1440px | 12 | 1320px | 32px |

### Spacing Scale

Baseada em incrementos de 4px:

| Token | Valor | Uso |
|-------|:---:|---|
| `0` | 0px | Reset |
| `1` | 4px | Espaçamento mínimo — gap ícone/texto |
| `2` | 8px | Padding interno de tags, chips |
| `3` | 12px | Padding de badges, gaps menores |
| `4` | 16px | Padding padrão de componentes |
| `5` | 20px | Margens internas de cards |
| `6` | 24px | Separação entre elementos de formulário |
| `8` | 32px | Separação entre blocos |
| `10` | 40px | Espaço entre seções |
| `12` | 48px | Padding de seções de página |
| `16` | 64px | Separação de seções grandes |
| `20` | 80px | Padding de hero/banner |

---

## Elevation & Depth

O LCAD utiliza sombras sutis para indicar hierarquia e profundidade, mantendo uma estética limpa e profissional:

| Nível | Token | Box-shadow | Uso |
|:---:|-------|---------|-----|
| 0 | `flat` | nenhuma | Elementos inline, texto, backgrounds |
| 1 | `low` | `0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)` | Cards em repouso, inputs focados |
| 2 | `medium` | `0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)` | Dropdowns, tooltips, cards hover |
| 3 | `high` | `0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)` | Modais, dialogs, popovers |
| 4 | `highest` | `0 20px 25px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.04)` | Overlays, drawers, menus de contexto |

### Transições

- **Duração rápida:** 150ms — hover, focus, toggle
- **Duração média:** 250ms — expand/collapse, fade in
- **Duração longa:** 400ms — modais, page transitions
- **Curva padrão:** `cubic-bezier(0.4, 0, 0.2, 1)` — ease suave

---

## Shapes

### Border Radius

| Token | Valor | Uso |
|-------|:---:|---|
| `none` | 0px | Tabelas, dividers |
| `sm` | 4px | Inputs, selects, tags |
| `md` | 8px | Botões, cards, dropdowns |
| `lg` | 12px | Cards destacados, modais |
| `xl` | 16px | Painéis, containers arredondados |
| `full` | 9999px | Avatares, pills, badges circulares |

### Borders

| Token | Valor | Uso |
|-------|:---:|---|
| `none` | 0px | Sem borda |
| `thin` | 1px | Bordas padrão — inputs, dividers, cards |
| `medium` | 2px | Focus ring, elementos ativos, tabs selecionadas |

---

## Components

O LCAD fornece componentes para o produto Conta Azul Pro, app mobile (CA de Bolso) e sites institucionais:

### Navegação e Estrutura
- **AppBar** — Barra superior com logo, busca e ações do usuário
- **Sidebar** — Menu lateral colapsável com módulos do ERP (Financeiro, Vendas, Estoque, NF-e)
- **Breadcrumb** — Navegação hierárquica dentro dos módulos
- **Tabs** — Abas para sub-seções de um módulo
- **Stepper** — Fluxos sequenciais (emissão de NF, onboarding)

### Formulários e Inputs
- **Input** — Campo de texto com label, hint, validação e máscara (CPF/CNPJ, moeda)
- **Select** — Dropdown com busca
- **DatePicker** — Seletor de data para filtros e lançamentos
- **CurrencyInput** — Input formatado para valores monetários (R$)
- **Checkbox** — Caixas de seleção
- **RadioGroup** — Seleção exclusiva
- **Switch** — Toggle on/off
- **TextArea** — Campo multilinha para descrições e observações

### Ações
- **Button** — Variantes: primary (azul), secondary (outline), ghost, danger
- **IconButton** — Botão com apenas ícone
- **FloatingActionButton** — FAB para ações rápidas (mobile)
- **Link** — Navegação inline estilizada

### Feedback e Informação
- **Alert** — Banners de sucesso, erro, warning, info
- **Toast** — Notificações temporárias (NF emitida, pagamento registrado)
- **Dialog/Modal** — Confirmações e ações destrutivas
- **EmptyState** — Estados vazios com ilustração e CTA
- **Skeleton** — Placeholders de carregamento
- **Spinner** — Loading indicator

### Dados e Display
- **Table** — Tabela de dados com ordenação, filtros e paginação
- **Card** — Container de conteúdo (resumo financeiro, cliente)
- **Badge** — Indicadores numéricos e status (NF aprovada, pendente, rejeitada)
- **Tag** — Labels de categorização
- **Avatar** — Foto de perfil de clientes/usuários
- **Tooltip** — Informação contextual on hover
- **Chart** — Gráficos (fluxo de caixa, faturamento, vendas)

### Layout
- **Container** — Wrapper com max-width responsivo
- **Grid** — Sistema de colunas
- **Divider** — Separador visual
- **Spacer** — Espaçamento programático

---

## Do's and Don'ts

### ✅ Do's

- **Use o azul institucional (#0066CC) como cor primária** — É a identidade da marca; todos os CTAs e elementos interativos principais devem ser azuis
- **Siga o Guia de Redação** — A Conta Azul tem um guia de UX Writing dedicado; use linguagem simples, direta e empática para PMEs
- **Use Nunito Sans consistentemente** — Não introduza outras famílias tipográficas; a fonte transmite acessibilidade e profissionalismo
- **Formate valores financeiros corretamente** — Use R$ com separador de milhar (ponto) e decimal (vírgula): R$ 1.234,56
- **Aplique feedback colors semanticamente** — Verde para sucesso (pagamento recebido), amarelo para atenção (vencimento próximo), vermelho para erro (nota rejeitada)
- **Mantenha hierarquia visual clara** — Em telas com muitos dados financeiros, use peso tipográfico e cor para guiar o olho
- **Priorize clareza sobre estética** — O público-alvo são empresários de PMEs; a interface deve ser funcional e fácil de entender
- **Use espaçamento generoso** — Dashboards financeiros precisam de respiro visual para evitar sobrecarga cognitiva

### ❌ Don'ts

- **Não use cores fora da paleta** — Todo hex deve vir dos tokens definidos; evite azuis aleatórios que não sejam da escala
- **Não use jargão técnico no UX Writing** — Em vez de "conciliar extrato", prefira "conferir se as movimentações do banco bateram"
- **Não omita estados de erro** — Formulários financeiros/fiscais exigem validação clara e mensagens de erro descritivas
- **Não use sombras excessivas** — Mantenha a interface clean; sombras apenas para elementos que precisam de hierarquia (modais, dropdowns)
- **Não quebre a consistência entre Pro e Mobile** — Os componentes devem manter a mesma lógica visual no desktop (Pro) e mobile (CA de Bolso)
- **Não use textos genéricos em empty states** — Sempre ofereça uma ação clara ("Emita sua primeira nota fiscal" em vez de "Nenhum dado encontrado")
- **Não ignore acessibilidade** — Contraste mínimo AA (4.5:1) para texto sobre backgrounds; labels obrigatórios em todos os inputs
- **Não crie componentes customizados** — Use os componentes do LCAD; se algo não existe, solicite ao time de design system

---

## Attribution

| Campo | Valor |
|-------|-------|
| **Source** | [contaazul.com](https://contaazul.com) |
| **Method** | public site CSS extraction |
| **Date** | 2026-07-05 |
| **Design System** | LCAD (Linguagem Conta Azul de Design) |
| **Documentation** | [ZeroHeight](https://zeroheight.com/96cd6c46f/p/56e20d-design-system-web) |
| **UX Writing Guide** | guiaderedacao.contaazul.design |
| **Listing** | [designsystemsbrasileiros.com](https://designsystemsbrasileiros.com/design-system-conta-azul/) |
| **Tags** | ux-writing, components, closed |
| **Organization** | Conta Azul (Visma) |
| **Product** | ERP/SaaS para gestão financeira de PMEs brasileiras |

<!-- Source: https://designmd.app/brands/conta-azul · designmd.app -->
