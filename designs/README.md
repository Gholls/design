# 贡献一份 DESIGN.md

本项目采用 [Google Labs design.md](https://github.com/google-labs-code/design.md)
的官方格式（alpha）：**每套规范 = 一个自包含的 `designs/<slug>/DESIGN.md`**，
YAML 设计 Token（frontmatter 和/或文内 ` ```yaml ` 块）+ Markdown 散文说明。

[designmd.app](https://designmd.app/) 收录的 700+ 份社区规范可直接放入
`designs/<你的slug>/DESIGN.md`——解析器的角色兜底会尽力映射，但完整覆盖
下列角色色才能获得样板间最佳观感。

## 社区收录政策（designmd.app）

`designs/` 中的 7 份规范（minimalism-swiss-style、acrylic-fluent、de-stijl-abstrato、
8-bit-retro-terminal、cyber-tribal、dsgov、stone）收录自
[designmd.app](https://designmd.app/) 的公开库（上游：gitlab.com/fabriciotelles/vibe-styles，
DSGov 明确 CC0/MIT）。收录原则：

1. **原文 verbatim**——token 值与散文不改写，保持社区规范的真实性；
2. 仅注入一个 `gallery:` 块（order/author="designmd.app"/source 出处链接/tags）；
3. 违反官方 spec 导致 lint error 的最小兼容修正必须行内注释标明（现有唯一一处：
   stone 的 `rounded.circle: 50% → 9999px`）；
4. 角色解析器对真实数据做了三层容错：嵌套色卡分组扁平化（brand.primaryMain）、
   大小写/后缀别名匹配、以及基于亮度分布与 WCAG 对比度的兜底推导
   （详见 [src/lib/designMd.ts](../src/lib/designMd.ts)）。

## 文件结构（官方规范）

```md
---
version: alpha
name: My Theme
description: 一句话简介（画廊卡片展示它）
gallery:            # ← 样板间扩展组：仅画廊消费
  order: 6
  author: your-name
  tags: [tag1, tag2]
colors: {...}
typography: {...}
rounded: { sm, md, lg, full }
spacing: { base, xs, sm, md, lg, table-row }
shadows: {...}      # ← 样板间扩展组
strokes: {...}      # ← 样板间扩展组
components: {...}
---

## Overview …（章节顺序必须遵循官方规范）
## Colors / ## Typography / ## Layout / ## Elevation & Depth
## Shapes / ## Components / ## Do's and Don'ts
```

官方规范允许保留未知顶层键，`gallery` / `shadows` / `strokes` 即本项目的
样板间扩展组（lint 可能对后两者提示 token-like 警告，属预期，可忽略）。

## 样板间角色色（最佳映射名，亦支持别名/亮度推导）

| 角色 | 用途 | 常见别名 |
| --- | --- | --- |
| bg | 页面底色 | background / canvas / neutral |
| surface / surface-alt | 卡片 / 表头输入底 | card / panel / surface-variant |
| primary / primary-strong / on-primary | 主操作三件套 | brand / primary-hover / text-on-primary |
| accent | 次级强调 | tertiary / highlight / secondary |
| text / muted | 正文 / 辅助 | foreground / on-surface / meta / subtle |
| border | 分隔线 | line / outline / divider |
| success / warning / danger | 状态徽章 | positive / amber / error |

缺失的角色会按 `bg/text` 相对亮度自动推导（保证深色主题可读），但**不要**
依赖推导——显式定义才是规范。

## Typography 契约

解析器读取 `body-md`（正文：fontFamily/fontSize→基准字号）与 `h1`
（标题：fontWeight/letterSpacing→标题契约）。请至少定义这两级。

## rounded / spacing 契约

- 卡片圆角 ← `rounded.lg`，控件 ← `rounded.md`，徽章 ← `rounded.full`
- 全局密度 = `spacing.base`（px）÷ 16；行高 ← `spacing.table-row`

## 验收清单

- [ ] `npm run design:lint` 零 error（warning 尽量清零，官方 11 条规则含 WCAG AA 对比度）
- [ ] `npm run build` 通过，无需任何前端代码改动即出现在画廊
- [ ] 样板间状态徽章对比度 ≥ 4.5:1；`on-primary` 与 `primary` 组合可读
- [ ] 不引入网络字体依赖（纯静态离线）；fontFamily 写回退栈
- [ ] 散文章节按官方顺序；`Do's and Don'ts` 至少 3 条

## 提交

```bash
npm install          # 首次（提供官方 linter）
npm run design:lint
git checkout -b design/my-theme
git add designs/my-theme/DESIGN.md
git commit -m "feat(designs): 新增 My Theme 规范"
```

一个 PR 只带一套主题。MIT 协议，提交即视为同意。
