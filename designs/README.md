# 贡献一份 DESIGN.md

本项目采用 [Google Labs design.md](https://github.com/google-labs-code/design.md)
官方格式（alpha）：**每套规范 = 一个自包含的 `designs/<slug>/DESIGN.md`**，
YAML 设计 Token（frontmatter 和/或文内 ` ```yaml ` 块）+ Markdown 散文说明。

## 数据源与收录政策

内置基准 5 套（enterprise / apple-minimal / cyberpunk / candy-glass / brutal-neo）
之外，全部规范经 `npm run fetch` 从
[VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md)（MIT）
单向同步：74 个真实品牌设计系统分析（Apple / Airbnb / Claude / Figma / Linear /
Meta / BMW / Ferrari…），由该仓库对公开站点做结构化逆向而成，质量对标官方 spec。

- 除注入 `gallery:` 署名块（order/author/source/tags）外，**内容保持上游 verbatim**；
- 唯一例外：上游 4 份文件（supabase/raycast/elevenlabs 等）标量值含裸冒号破坏 YAML，
  fetcher 按确定性规则加引号修复（不改语义，规则见 `scripts/fetch-designs.mjs`）；
- 上游纯散文版（无机器可读 Token，如早期 Tesla/Spotify 稿）按收录标准跳过；
- 同步可重放：`node scripts/fetch-designs.mjs`（单次 tar 快照，84 份全取 74 入库）。

## 文件结构（官方规范）

```md
---
version: alpha
name: My Theme
description: 一句话简介（画廊卡片展示它）
gallery:            # ← 样板间扩展组：仅画廊消费
  order: 200
  author: your-name
  source: "https://github.com/…"   # 有出处才写
  tags: [tag1, tag2]
colors: {...}
typography: {...}
rounded: { sm, md, lg, full }
spacing: {...}
shadows: {...}      # ← 样板间扩展组
strokes: {...}      # ← 样板间扩展组
components: {...}
---

## Overview / Colors / Typography / Layout / Elevation & Depth /
## Shapes / Components / Do's and Don'ts   ← 官方章节顺序
```

官方规范允许保留未知顶层键，`gallery` / `shadows` / `strokes` 为样板间扩展组。
散文中的 `Density: n/10`、`Variance: n/10`、`Motion: n/10` 指标行会被生成 agent
消费，决定产物的留白、版式不对称度与动效强度。

## 标签约定（画廊搜索）

`gallery.tags` 同时驱动画廊搜索与热门标签筛选，建议 3–5 个，按「行业/产品 → 视觉风格 → 字体/形状」排序：

- 行业/产品：汽车、金融科技、电商、开发者工具、AI、企业服务、媒体、消费电子…
- 视觉风格：暗色、明亮、极简、编辑排版、高对比、高饱和、渐变、手绘、复古、霓虹…
- 字体/形状：衬线、等宽、大圆角、小圆角、直角、胶囊按钮、高密度、留白、零动效…

首个标签作为卡片标签行的主分类；不要写 `真实品牌`、`awesome-design-md`
这类每套都相同的来源标签，它们对搜索没有区分度。

## 样板间角色色（最佳映射名，亦支持别名/亮度推导）

| 角色 | 用途 | 常见别名 |
| --- | --- | --- |
| bg | 页面底色 | background / canvas / neutral |
| surface / surface-alt | 卡片 / 表头输入底 | card / panel / surface-variant |
| primary / primary-strong / on-primary | 主操作三件套 | brand / primary-hover / text-on-primary |
| accent | 次级强调 | tertiary / highlight |
| text / muted | 正文 / 辅助 | foreground / on-surface / meta / hairline |
| border | 分隔线 | line / outline / divider / hairline |
| success / warning / danger | 状态徽章 | positive / amber / error |

缺失角色按 `bg/text` 相对亮度与色卡分布推导；品牌规范（如 `canvas`、`ink`、
`on-primary` 命名）无需改名即可被正确消费。

## Typography 契约

解析器读取正文级 token（`body-md`/`body`/`base`，或字号最接近 16px 的）作正文基准，
标题级（`h1`/`headline-*`/`display*`，或字号最大者）作标题契约来源。

## 验收清单

- [ ] `npm run design:lint` 零 error（官方 11 条规则，含 WCAG AA 对比度）
- [ ] `npm run build` 通过，无需任何前端代码改动即出现在画廊
- [ ] `on-primary` 与 `primary` 组合可读；徽章对比度 ≥ 4.5:1
- [ ] 不引入网络字体依赖（纯静态离线）；fontFamily 写回退栈
- [ ] `DESIGN.md` 散文按官方章节顺序，含 `Do's and Don'ts`

## 生成产物契约（public/generated/）

样板间代码来自 **code agent**：`npm run generate` 合成任务文件
（GOLDEN PROMPT + 目标规范），交给任意 agent 生成**单个自包含
`index.html`**（零网络依赖、file:// 可运行、底部生成信息条、代码顶部
「决策溯源注释」写明每个界面决策来自规范哪一行），提交至
`public/generated/<slug>/index.html` 即自动路由。

## 提交

```bash
npm install          # 首次
npm run design:lint
git checkout -b design/my-theme
git add designs/my-theme/DESIGN.md
```

一个 PR 只带一套主题。MIT 协议，提交即视为同意。
