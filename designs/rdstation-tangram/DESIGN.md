---
name: RD Station Tangram
description: >
  Design system da RD Station (Resultados Digitais) para produtos SaaS de
  Marketing Digital, CRM de Vendas e Atendimento. Construído em React com
  pacotes @resultadosdigitais/tangram-components, tangram-design-tokens e
  tangram-react-icons. Focado em acessibilidade WCAG AA, consistência visual
  e produtividade de times de produto.
colors:
  primary:
    primary-10: "#E8F0FF"
    primary-20: "#C7DAFF"
    primary-40: "#5B93FF"
    primary-60: "#1D63FF"
    primary-80: "#0A3FC7"
    primary-on-color: "#FFFFFF"
  neutral:
    neutral-0: "#FFFFFF"
    neutral-05: "#F7F8FA"
    neutral-10: "#ECEEF2"
    neutral-20: "#D3D7DE"
    neutral-40: "#9BA2AD"
    neutral-60: "#6B7280"
    neutral-80: "#393F49"
    neutral-100: "#212429"
    neutral-interactive: "#4A5568"
  danger:
    danger-10: "#FFF0F0"
    danger-20: "#FFD6D6"
    danger-40: "#FF6B6B"
    danger-60: "#E02020"
    danger-80: "#B01A1A"
  success:
    success-10: "#E6FAF0"
    success-20: "#B3F0D6"
    success-40: "#4BD89E"
    success-60: "#00875A"
    success-80: "#006644"
  warning:
    warning-10: "#FFF8E6"
    warning-20: "#FFE8B3"
    warning-40: "#FFCC4D"
    warning-60: "#FF991F"
    warning-80: "#CC7A00"
  highlight:
    highlight-10: "#F0F0FF"
    highlight-20: "#D6D6FF"
    highlight-40: "#8B8BFF"
    highlight-60: "#5243AA"
    highlight-80: "#3D2E8C"
  support:
    support-01: "#FF6B6B"
    support-02: "#FFCC4D"
    support-03: "#4BD89E"
    support-04: "#5B93FF"
    support-05: "#8B8BFF"
    support-06: "#FF8F73"
    support-07: "#79E2F2"
    support-08: "#B3D4FF"
typography:
  families:
    - DM Sans
  weights:
    regular: 400
    bold: 700
    extraBold: 800
  sizes:
    xxl: 36
    xl: 28
    lg: 20
    md: 16
    sm: 14
    xs: 12
  lineHeights:
    xxl: 46
    xl: 36
    lg: 30
    md: 24
    sm: 20
    xs: 16
  letterSpacing:
    xxl: "-0.02em"
    xl: "-0.01em"
    lg: "-0.01em"
    md: "-0.01em"
    sm: "-0.01em"
    xs: "0em"
rounded:
  circle: "9999px"
spacing:
  spacing-01: 4
  spacing-02: 8
  spacing-03: 12
  spacing-04: 16
  spacing-05: 24
  spacing-06: 32
  spacing-07: 40
  spacing-08: 48
  spacing-09: 56
  spacing-10: 64
  spacing-11: 96
  spacing-12: 160

gallery:
  order: 1701
  author: "designmd.app"
  source: "https://designmd.app/brands/rdstation-tangram"
  tags: ["真实品牌"]
---

## Overview

**Tangram** é o design system da **RD Station** (empresa brasileira de marketing digital e vendas, anteriormente chamada Resultados Digitais). Nomeado em referência ao puzzle chinês de 7 peças que formam infinitas composições, o Tangram reflete a filosofia de criar interfaces consistentes a partir de componentes modulares reutilizáveis.

O sistema foi lançado em 2018 como "Design System 1.0" e evoluiu para a versão 2.0 em 2019-2020, acompanhando o redesign completo dos produtos RD Station Marketing e RD Station CRM. É mantido pelo time de Design Ops (internamente chamado "Kondo") e pelo time Frontend Platform.

### Pacotes

| Pacote | Função |
|--------|--------|
| `@resultadosdigitais/tangram-components` | Componentes React (inclui tokens e ícones) |
| `@resultadosdigitais/tangram-design-tokens` | Design tokens (CSS custom properties) |
| `@resultadosdigitais/tangram-react-icons` | Biblioteca de ícones |

### Características

- **React-based** — Componentes em React com styled-components
- **Acessibilidade WCAG AA** — Contraste mínimo de 4.5:1 para texto normal, 3:1 para texto grande
- **Token-driven** — Todas decisões visuais expressas como CSS custom properties (`--token-name`)
- **Documentação** — Docusaurus com guidelines, exemplos e API de cada componente
- **Repositório** — [github.com/ResultadosDigitais/tangram](https://github.com/ResultadosDigitais/tangram)

---

## Colors

As cores do Tangram são organizadas em 5 grupos semânticos e usam uma escala numérica (10, 20, 40, 60, 80) onde valores menores indicam tons mais claros. O sufixo `-60` geralmente representa o tom padrão de uso.

### Primary

As cores primárias predominam nos elementos interativos e de destaque. O azul é a cor central da marca RD Station.

| Token | Uso |
|-------|-----|
| `--color-primary-10` | Background sutil, hover states suaves |
| `--color-primary-20` | Borders leves, estados selecionados |
| `--color-primary-40` | Ícones secundários, links em hover |
| `--color-primary-60` | CTA principal, botões primários, links |
| `--color-primary-80` | Hover/active em botões primários |
| `--color-primary-on-color` | Texto sobre superfícies primárias |

### Neutral

Neutros são usados em elementos sem necessidade de destaque: textos, bordas, backgrounds.

| Token | Uso |
|-------|-----|
| `--color-neutral-0` | Background branco puro |
| `--color-neutral-05` | Background da página/app |
| `--color-neutral-10` | Dividers, separadores |
| `--color-neutral-20` | Bordas padrão |
| `--color-neutral-40` | Texto de placeholder |
| `--color-neutral-60` | Texto secundário |
| `--color-neutral-80` | Texto de alta ênfase |
| `--color-neutral-100` | Texto primário/títulos |
| `--color-neutral-interactive` | Neutro com contraste elevado para elementos interativos |

### Functional (Feedback)

| Grupo | Uso |
|-------|-----|
| **Danger** | Ações críticas: exclusão, desconexão, perda de dados |
| **Success** | Feedback positivo, ações concluídas |
| **Warning** | Atenção sem criticidade, ação reversível |
| **Highlight** | Informação de suporte, ajuda (não usar como outro feedback) |

### Support

Cores de suporte são exclusivas para **charts, legendas e visualização de dados**. Não devem ser usadas em componentes de interface padrão.

---

## Typography

### Font Family

O Tangram usa a **DM Sans** em três pesos: Regular (400), Bold (700) e Extra Bold (800). DM Sans é uma sans-serif geométrica de baixo contraste, otimizada para interfaces digitais e com boa legibilidade em tamanhos menores.

### Escala Tipográfica

Os tokens são agnósticos ao elemento HTML — **não estão vinculados a tags** como `<h1>`, `<h2>`, etc. Isso exige atenção para manter a semântica HTML correta independente do estilo visual.

| Token | Size | Line Height | Letter Spacing | Uso |
|-------|:---:|:---:|:---:|-----|
| `--text-xxl` | 36px | 46px (130%) | -0.02em | Big numbers, métricas em destaque |
| `--text-xl` | 28px | 36px (130%) | -0.01em | Títulos principais de página |
| `--text-lg` | 20px | 30px (150%) | -0.01em | Subtítulos, títulos de modal/sidebar |
| `--text-md` | 16px | 24px (150%) | -0.01em | Texto padrão, labels, inputs, botões |
| `--text-sm` | 14px | 20px (140%) | -0.01em | Texto secundário, validação de inputs |
| `--text-xs` | 12px | 16px (130%) | 0em | Cabeçalhos de tabela, eixos de gráficos, footers |

### Tokens de texto disponíveis no componente Text

```
TEXT_XXL_BOLD | TEXT_XXL_EXTRABOLD | TEXT_XXL_REGULAR
TEXT_XL_BOLD  | TEXT_XL_EXTRABOLD  | TEXT_XL_REGULAR
TEXT_LG_BOLD  | TEXT_LG_EXTRABOLD  | TEXT_LG_REGULAR
TEXT_MD_BOLD  | TEXT_MD_EXTRABOLD  | TEXT_MD_REGULAR
TEXT_SM_BOLD  | TEXT_SM_EXTRABOLD  | TEXT_SM_REGULAR
TEXT_XS_BOLD  | TEXT_XS_EXTRABOLD  | TEXT_XS_REGULAR
```

---

## Layout

### Spacing System

O Tangram usa um grid de **8px** como base. Há 12 tokens de espaçamento organizados em duas faixas:

**Estruturas pequenas** (componentes): 4px a 24px
**Estruturas grandes** (padrões e telas completas): acima de 24px

| Token | Valor | Uso |
|-------|:---:|-----|
| `--size-spacing-01` | 4px | Espaçamento mínimo interno |
| `--size-spacing-02` | 8px | Gap entre ícone e texto |
| `--size-spacing-03` | 12px | Padding interno de tags/chips |
| `--size-spacing-04` | 16px | Padding padrão, spacing entre título e conteúdo |
| `--size-spacing-05` | 24px | Transição entre small e large structures |
| `--size-spacing-06` | 32px | Separação entre blocos de conteúdo |
| `--size-spacing-07` | 40px | Espaçamento entre seções menores |
| `--size-spacing-08` | 48px | Padding de seções |
| `--size-spacing-09` | 56px | Separações de seção |
| `--size-spacing-10` | 64px | Seções maiores |
| `--size-spacing-11` | 96px | Grandes separações visuais |
| `--size-spacing-12` | 160px | Espaçamento máximo/hero |

### Grid (componente Grid)

O sistema de grid é responsivo com `Container`, `Row` e `Col`. Suporta propriedades por viewport e permite inversão de direção:

```jsx
import { Grid } from '@resultadosdigitais/tangram-components'

<Grid.Container>
  <Grid.Row>
    <Grid.Col sm={12} md={6} lg={4}>...</Grid.Col>
  </Grid.Row>
</Grid.Container>
```

### Vertical Rhythm

- **Título → Conteúdo abaixo:** mínimo de 16px (`--size-spacing-04`)
- **Título → Título consecutivo:** regra específica (menor espaçamento)
- Os valores são mínimos — nunca usar spacing menor que o especificado

---

## Elevation & Depth

### Sombras (Shadow tokens)

O Tangram define 6 níveis de elevação com shadows progressivos:

| Token | Nível | Uso |
|-------|:---:|-----|
| *(nenhuma)* | 1 | Nível base — textos, botões, formulários, imagens |
| `--shadow-xs` | 2 | Elementos pouco proeminentes — nav bars, cards elevados, hover states |
| `--shadow-sm` | 3 | Elementos pós-interação vinculados ao nível 1/2 — Dropdown, Popover, DatePicker |
| `--shadow-md` | 4 | Alta proeminência, atenção necessária — Toast |
| `--shadow-lg` | 5 | Máxima proeminência/isolamento — Drawer (fundo claro) |
| `--shadow-xl` | 6 | Elementos sobre fundo escuro (overlay) — Modal, Dialog, Drawer (fundo escuro) |

### Z-index

| Token | Valor | Uso |
|-------|:---:|-----|
| `--zindex-auto` | auto | Posição padrão no body |
| `--zindex-0` | 1 | Botões selecionados, Select, Card |
| `--zindex-1` | 1000 | Dropdown e Popover |
| `--zindex-2` | 1010 | Tooltips, Navbar fixa |
| `--zindex-3` | 1020 | Overlays de Drawer/Modal/Dialog |
| `--zindex-4` | 1030 | Drawer, Dialog e Modal |
| `--zindex-5` | 1040 | Overlays acima de tudo |
| `--zindex-6` | 1050 | Toast |
| `--zindex-back` | -1 | Enviar para trás |

---

## Shapes

### Border Radius

| Token | Valor | Uso |
|-------|:---:|-----|
| `--border-radius-rounded` | 2px | Arredondamento padrão de componentes |
| `--border-radius-circle` | 50% | Formações elípticas — Avatar circular |
| `--border-radius-pill` | 999px | Formações totalmente arredondadas (width = height) — pills, tags |

### Ícones

Todos os ícones do Tangram são criados em um frame de **24×24px**. Qualquer redimensionamento deve partir deste tamanho base.

---

## Motion

### Princípios

1. **Sempre com propósito** — Usar para destacar mudança de estado, revelar conteúdo ou enfatizar elemento
2. **Sem atraso desnecessário** — Animações não devem fazer o usuário esperar
3. **Metáforas do mundo físico** — Entrou pela esquerda? Sai pela esquerda. Menores se movem mais rápido

### Duration

| Token | Duração | Uso |
|-------|:---:|-----|
| `--motion-duration-extra-fast` | 100ms | Mudanças de estado em elementos pequenos (botões, toggles, checkboxes) |
| `--motion-duration-fast` | 200ms | Micro-interações, expansões curtas (select, dropdown) |
| `--motion-duration-normal` | 300ms | Expansão de elementos médios, alertas (Toasts) |

### Easing (Timing Functions)

| Token | Curva | Uso |
|-------|-------|-----|
| `--motion-timing-function-ease-in` | `cubic-bezier(0.55, 0.055, 0.675, 0.19)` | Remover elementos da tela (close modal, hide alert) |
| `--motion-timing-function-ease-out` | `cubic-bezier(0.215, 0.61, 0.355, 1)` | Adicionar elementos na tela (show modal, show sidebar) |
| `--motion-timing-function-ease-in-out` | `cubic-bezier(0.645, 0.045, 0.355, 1)` | Elementos visíveis do início ao fim (expand dropdown, toggle) |

---

## Components

O Tangram possui uma biblioteca abrangente organizada em 6 categorias:

### General
- **Brand** — Exibição do logo RD Station
- **Button** — Botões com variantes (primary, secondary, outline, ghost)
- **Dropdown** — Menu suspenso com opções
- **Link** — Links inline e standalone
- **Text** — Componente de texto com tokens tipográficos

### Layout
- **EmptyState** — Estado vazio com ilustração e ação
- **Fade** — Animação de fade-in/fade-out
- **Grid** (Container, Row, Col) — Grid responsivo
- **Hidden** — Controle de visibilidade por viewport
- **InlineGroup** — Agrupamento inline de elementos
- **Main** — Container principal
- **Overlay** — Camada de sobreposição
- **Shell** — Estrutura base da aplicação
- **Sidebar** — Painel lateral de navegação
- **Skeleton** — Placeholder de carregamento
- **Slide** — Animação de entrada/saída deslizante
- **StackGroup** — Agrupamento empilhado
- **StickyBar** — Barra fixa (ações bulk)
- **Theme** — Provider de tema

### Data Display
- **Accordion** — Conteúdo colapsável com expand/collapse
- **Avatar** — Imagem de perfil com fallback
- **Badge** — Indicador numérico/status
- **Card** — Container de conteúdo elevado
- **ChatAlert** — Alerta de mensagem de chat
- **ChatBubble** — Balão de mensagem
- **Collapse** — Conteúdo expansível
- **DataBlock** — Bloco de dados/métricas
- **Image** — Componente de imagem otimizado
- **List** (ListItem, ListHeader) — Listas verticais contínuas
- **Popover** — Popup ancorado com conteúdo rico
- **Table** (Header, Body, Row, Cell) — Tabela de dados
- **Tag** — Label categorização com cor e ação
- **Timeline** — Linha do tempo vertical
- **Tooltip** — Dica contextual on hover

### Feedback
- **Alert** — Mensagem de alerta inline
- **Dialog** — Modal de confirmação/ação
- **Drawer** — Painel deslizante lateral
- **Message** — Mensagem inline contextual
- **Modal** — Overlay modal para fluxos complexos
- **ProgressBar** — Barra de progresso
- **Snackbar** — Notificação inline breve
- **Spinner** — Indicador de carregamento
- **Toast** — Notificação temporária flutuante

### Navigation
- **DropdownMenu** — Menu dropdown de navegação
- **LinkPreview** — Preview de link ao hover
- **Navbar** — Barra de navegação principal
- **PageHeader** — Cabeçalho de página com breadcrumbs
- **Pagination** — Paginação de listas/tabelas
- **Steps** — Indicador de progresso por etapas
- **Tabs** — Abas de navegação
- **VerticalNav** — Navegação vertical (sidebar nav)

### Data Entry
- **Autocomplete** — Input com sugestões dinâmicas
- **BulkActions** — Ações em lote sobre itens selecionados
- **Checkbox** — Caixa de seleção múltipla
- **DatePicker** — Seletor de data
- **DateRangePicker** — Seletor de intervalo de datas
- **Dropfile** — Área de upload por drag and drop
- **Form** (Label, Feedback, Group) — Estrutura de formulário
- **Input** — Campo de texto com validação
- **Phone** — Input de telefone com máscara
- **Radio** — Seleção única em grupo
- **Search** — Campo de busca
- **Select** — Dropdown de seleção
- **Slider** — Controle deslizante de valor
- **Switch** — Toggle on/off
- **TextArea** — Campo de texto multilinha

---

## Do's and Don'ts

### ✅ Do's

- **Use CSS custom properties** — Todas as decisões visuais devem referenciar tokens (`--color-primary-60`, `--size-spacing-04`)
- **Respeite o contraste WCAG AA** — Mínimo 4.5:1 para texto normal, 3:1 para texto grande
- **Mantenha tokens de cor por semântica** — Use `danger` para ações críticas, `success` para positivas
- **Use a base de 8px** — O sistema de spacing é construído sobre uma grade de 8px
- **Aplique arredondamento consistente** — Use `--border-radius-rounded` (2px) como padrão em componentes
- **Siga o vertical rhythm** — Mínimo 16px entre título e conteúdo subsequente
- **Use elevações com intenção** — Elementos flutuantes usam shadow; conteúdo inline é flat (nível 1)
- **Respeite a hierarquia de z-index** — Não crie valores customizados; use os 8 tokens definidos
- **Use animações com propósito** — Destacar mudanças de estado, revelar conteúdo, enfatizar interações
- **Aplique a família DM Sans consistentemente** — Em todos os tamanhos e pesos do sistema

### ❌ Don'ts

- **Não use cores fora dos tokens** — Nunca hex/rgb hardcoded; toda cor vem da paleta tokenizada
- **Não use cores diferentes para default e hover do mesmo elemento** — Varia apenas a opacidade ou nível numérico
- **Não ignore a escala tipográfica** — Evite tamanhos intermediários (não existe `text-15px`)
- **Não misture fontes** — Use apenas DM Sans; não introduza outras famílias
- **Não use espaçamentos menores que os mínimos** — Os valores da escala são mínimos obrigatórios
- **Não crie sombras CSS customizadas** — Use os 5 tokens de shadow definidos (xs, sm, md, lg, xl)
- **Não use `--border-radius-circle` em elementos não-quadrados** — Circle (50%) só funciona corretamente com width = height
- **Não faça animações que impeçam o usuário de completar ações** — Movimentos devem ser rápidos e não bloqueantes
- **Não quebre metáforas físicas** — Se algo entrou pela esquerda, deve sair pela esquerda
- **Não use support colors em elementos de interface** — São exclusivas para gráficos e visualização de dados

---

## Attribution

| Campo | Valor |
|-------|-------|
| **Source** | [medium.com/design-rd](https://medium.com/design-rd), [rdstation.com](https://www.rdstation.com), [tangram.rdstation.com.br](https://tangram.rdstation.com.br) |
| **Method** | public documentation |
| **Date** | 2026-07-05 |
| **Repository** | [github.com/ResultadosDigitais/tangram](https://github.com/ResultadosDigitais/tangram) |
| **UI Kit** | [github.com/ResultadosDigitais/tangram-ui-kit](https://github.com/ResultadosDigitais/tangram-ui-kit) |
| **Packages** | `@resultadosdigitais/tangram-components`, `@resultadosdigitais/tangram-design-tokens`, `@resultadosdigitais/tangram-react-icons` |
| **Listed at** | [designsystemsbrasileiros.com/tangram](https://designsystemsbrasileiros.com/tangram/) |
| **Website** | [rdstation.com](https://www.rdstation.com) |

<!-- Source: https://designmd.app/brands/rdstation-tangram · designmd.app -->
