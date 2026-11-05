---
version: alpha
name: Brutal Neo
description: 新粗野主义：米纸底、2px 纯黑描边、硬投影零模糊、警示黄主色，一切边界都掷地有声。
gallery:
  order: 5
  author: gholl
  tags: [brutalism, 高对比, 硬阴影, editorial]
colors:
  bg: "#f4f1ea"
  surface: "#ffffff"
  surface-alt: "#efe9dc"
  primary: "#ffd400"
  primary-strong: "#f0c000"
  on-primary: "#111111"
  accent: "#ff4757"
  text: "#111111"
  muted: "#55524a"
  border: "#111111"
  success: "#00963f"
  warning: "#e8590c"
  danger: "#d00000"
typography:
  body-md:
    fontFamily: "'Space Grotesk', 'Helvetica Neue', 'PingFang SC', Arial, ui-sans-serif, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  h1:
    fontFamily: "'Space Grotesk', 'Helvetica Neue', Arial, ui-sans-serif, system-ui, sans-serif"
    fontSize: 32px
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: 0em
rounded:
  sm: 0px
  md: 0px
  lg: 0px
  full: 0px
spacing:
  base: 18px
  xs: 4px
  sm: 8px
  md: 18px
  lg: 36px
  table-row: 48px
shadows:
  card: "6px 6px 0 #111111"
  control: "3px 3px 0 #111111"
strokes:
  card: 2px
  control: 2px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 10px
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
  surface-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
  button-primary-hover:
    backgroundColor: "{colors.primary-strong}"
  page-shell:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
  table-header:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.text}"
  divider:
    backgroundColor: "{colors.border}"
  meta-dot:
    backgroundColor: "{colors.muted}"
  accent-dot:
    backgroundColor: "{colors.accent}"
  status-dot-success:
    backgroundColor: "{colors.success}"
  status-dot-warning:
    backgroundColor: "{colors.warning}"
  status-dot-danger:
    backgroundColor: "{colors.danger}"
---

# Brutal Neo

> 拒绝圆角糖衣。边框是结构，阴影是重量，颜色是宣言。

## Overview

新粗野主义（Neo-Brutalism）在编辑类与个性工具产品中久盛不衰。它对 Token
体系是绝佳的压力测试：2px 黑色描边 + 零模糊硬投影意味着任何「半透明叠色」
技巧都必须重新校准。

## Colors

主色是警示黄 `#ffd400`，其上必须用纯黑文字；`border` 就是 `#111111` 本身——
描边不参与「弱化」，只参与「界定」。米纸底 `#f4f1ea` 中和刺眼。

## Typography

Space Grotesk / Helvetica，基准 16px，字距为 0（不紧排）。标题 800，
正文照常重——层级靠框线而不是灰度。

## Layout

base 18px 的大节奏、48px 行高：粗野但不拥挤。网格感强，区块像贴上去的纸。

## Elevation & Depth

阴影为偏移实色：卡片 6px、控件 3px，纯黑、零模糊。物体是「垫」在页面上的。

## Shapes

圆角一律 0px。任何圆角都是对本主题的背叛。

## Components

主按钮黄底黑字 2px 描边 + 3px 硬投影，按下时投影消失（位移 3px）；
输入框同样全黑描边。

## Do's and Don'ts

- Do 保持描边粗细全主题统一为 2px
- Don't 使用透明叠色做徽章底——在纯黄上会显脏，改用实色描边
- Don't 混入渐变或柔化滤镜
