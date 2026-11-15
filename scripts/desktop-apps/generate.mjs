#!/usr/bin/env node
// 桌面端样板间：把 platform=desktop 的规范渲染成可交互的桌面窗口（侧栏切换 / 命令面板 / 深浅切换）。
// 用法：node scripts/desktop-apps/generate.mjs [--only=slug]
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { lum, contrast, mix, altPalette } from '../lib/theme.mjs'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..')
const INDEX = JSON.parse(readFileSync(join(ROOT, 'public/design-index.json'), 'utf8'))
const RUNTIME = readFileSync(join(ROOT, 'scripts/desktop-apps/runtime.js'), 'utf8')
const CSS = readFileSync(join(ROOT, 'scripts/desktop-apps/styles.css'), 'utf8')
const ONLY = (process.argv.find((a) => a.startsWith('--only=')) || '').split('=')[1]

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]))

function palette(d) {
  const r = d.roles
  const bg = r.bg || '#ffffff'
  const text = r.text || (lum(bg) < 0.2 ? '#ffffff' : '#111111')
  const brand = r.primary || text
  const primary = brand.toLowerCase() === bg.toLowerCase() ? text : brand
  const onPrimary = contrast(r['on-primary'] || '#ffffff', primary) >= 4.5
    ? r['on-primary'] || '#ffffff'
    : (contrast('#ffffff', primary) >= contrast('#000000', primary) ? '#ffffff' : '#000000')
  return {
    bg,
    surface: r.surface || (lum(bg) < 0.2 ? mix(bg, '#ffffff', 0.08) : mix(bg, '#000000', 0.04)),
    surface2: r['surface-alt'] || (lum(bg) < 0.2 ? mix(bg, '#ffffff', 0.14) : mix(bg, '#000000', 0.08)),
    text,
    muted: r.muted || mix(text, bg, 0.45),
    border: r.border || mix(bg, text, 0.16),
    primary,
    onPrimary,
    accent: r.accent || r.primary || text,
    success: r.success || '#16a34a',
    warning: r.warning || '#d97706',
    danger: r.danger || '#dc2626',
  }
}

const ICONS = {
  file: '<path d="M6 3h7l5 5v13H6z"/><path d="M13 3v5h5"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/>',
  chat: '<path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H10l-4 4v-4h-.5A2.5 2.5 0 0 1 4 13.5z"/>',
  code: '<path d="m9 8-4 4 4 4M15 8l4 4-4 4"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m3.5 7 8.5 6 8.5-6"/>',
  terminal: '<rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="m7 9 3 3-3 3M13 15h4"/>',
  grid: '<rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"/>',
}

const sprite = Object.entries(ICONS).map(([n, path]) => `<symbol id="i-${n}" viewBox="0 0 24 24">${path}</symbol>`).join('')
const icon = (n, cls = 'ic') => `<svg class="${cls}" aria-hidden="true"><use href="#i-${n}"/></svg>`
const kv = (rows) => `<dl class="kv">${rows.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>`
const toolbar = (left, right = '') => `<div class="toolbar"><div class="tb-left">${left}</div><div class="tb-right">${right}</div></div>`
const btn = (label, kind = '') => `<button class="btn ${kind}">${esc(label)}</button>`
const rows = (items) => `<div class="simple">${items.map(([t, s]) => `<button class="simple-row"><span>${esc(t)}</span><small>${esc(s)}</small></button>`).join('')}</div>`
const tiles = (n) => `<div class="tiles">${Array.from({ length: n }, (_, i) => `<div class="tile"><span class="ph"></span><b>组件 ${String(i + 1).padStart(2, '0')}</b><small>${['按钮', '输入框', '卡片', '标签', '头像', '图表'][i % 6]}</small></div>`).join('')}</div>`
const thread = (msgs) => `<div class="thread">${msgs.map(([who, t, msg]) => `<article class="msg"><span class="ava">${esc(who.slice(0, 1))}</span><div><header><b>${esc(who)}</b><time>${esc(t)}</time></header><p>${esc(msg)}</p></div></article>`).join('')}</div>`
const composer = (ph) => `<form class="composer"><input placeholder="${esc(ph)}"><button class="btn primary">发送</button></form>`

const LAYOUTS = {
  figma: (p) => ({
    hasRight: true,
    screens: [
      {
        label: '设计文件', icon: 'file',
        toolbar: [btn('移动', 'on'), btn('框架'), btn('文字'), btn('缩放 100%')],
        actions: [btn('分享', 'primary')],
        main: `<div class="canvas"><div class="board"><div class="board-bar"><span>GhollStudio / 首页</span><span>1440 × 900</span></div><div class="board-body"><span class="ph ph-hero"></span><span class="ph ph-row"><i></i><i></i><i></i></span><span class="ph ph-text"></span><span class="ph ph-text short"></span><span class="sel"><em>Hero / 主视觉</em></span></div></div></div>`,
        right: `<h3 class="panel-title">设计</h3>${kv([['填充', p.primary], ['圆角', '12'], ['字体', 'Display / 32'], ['不透明度', '100%']])}<h3 class="panel-title">自动布局</h3>${kv([['方向', '纵向'], ['间距', '24'], ['内边距', '32 / 40']])}`,
      },
      {
        label: '团队库', icon: 'grid',
        toolbar: [btn('全部', 'on'), btn('组件'), btn('样式')],
        main: tiles(9),
        right: `<h3 class="panel-title">组件</h3><b class="panel-strong">按钮 / 主操作</b>${kv([['变体', '4'], ['使用次数', '128'], ['负责人', '苏见月']])}`,
      },
      {
        label: '最近打开', icon: 'clock',
        toolbar: [btn('按时间', 'on'), btn('按名称')],
        main: rows([['GhollStudio / 首页', '2 分钟前'], ['组件库 / 表单', '1 小时前'], ['品牌 / 标志', '昨天'], ['落地页 / v3', '周一']]),
      },
    ],
    status: '已同步 · 云端文件',
  }),

  notion: () => ({
    screens: [
      {
        label: '快速笔记', icon: 'file',
        toolbar: [btn('分享'), btn('评论')],
        actions: [btn('···')],
        main: `<div class="doc"><span class="doc-crumb">工作区 / 设计规范</span><h1>GhollStudio 设计规范</h1><p class="doc-lead">同一份提示词，在桌面端被重写成一套工具型界面：密度更高、信息更密、操作更快。</p><div class="callout">桌面端的首要任务是「少移动眼睛」：侧栏固定、主区可滚、检查器常驻。</div><h2>本周目标</h2><ul class="todo"><li class="done"><span class="box">✓</span>组件令牌对齐</li><li class="done"><span class="box">✓</span>深浅外观切换</li><li><span class="box"></span>命令面板接入</li><li><span class="box"></span>键盘快捷键表</li></ul><h2>排版</h2><p>正文 13–14px，标题 22–32px；行高 1.5，表格行高 40。所有数字使用等宽数字，方便扫读。</p><h2>密度</h2><p>侧栏 236px、检查器 260px、主区自适应；窄屏小于 900px 时隐藏检查器。</p></div>`,
      },
      {
        label: '路线图', icon: 'grid',
        toolbar: [btn('第 46 周', 'on'), btn('第 47 周')],
        actions: [btn('···')],
        main: `<table class="issues"><thead><tr><th>状态</th><th>事项</th><th>负责人</th><th>截止</th></tr></thead><tbody>${[['进行中', '命令面板键盘导航', '周墨白', '周三'], ['待评审', '检查器宽度记忆', '林晚舟', '周四'], ['已完成', '表格列宽持久化', '苏见月', '周一'], ['进行中', '快捷键说明页', '陈屿', '周五']].map(([s, t, w, d]) => `<tr><td><span class="state" style="--c:${s === '已完成' ? 'var(--ok)' : 'var(--warn)'}">${esc(s)}</span></td><td class="t-title">${esc(t)}</td><td>${esc(w)}</td><td class="t-muted">${esc(d)}</td></tr>`).join('')}</tbody></table>`,
      },
      {
        label: '会议记录', icon: 'chat',
        toolbar: [btn('分享'), btn('评论')],
        actions: [btn('···')],
        main: `<div class="doc"><span class="doc-crumb">会议 / 设计周会</span><h1>第 46 周设计周会</h1><p class="doc-lead">参与：林晚舟、周墨白、苏见月、陈屿</p><h2>议题</h2><ul class="todo"><li><span class="box"></span>桌面端版式确认</li><li><span class="box"></span>缩略图重拍范围</li><li><span class="box"></span>键盘快捷键清单</li></ul><h2>结论</h2><p>桌面端先落 8 套：设计工具、文档、事务、启动器、会话、终端、邮件、编辑器。命令面板统一 ⌘K。</p></div>`,
      },
    ],
    status: '已保存',
  }),

  'linear-app': (p) => ({
    hasRight: true,
    screens: [
      {
        label: '我的事务', icon: 'check', badge: '8',
        toolbar: [btn('全部事务', 'on'), btn('我的'), btn('筛选')],
        actions: [btn('新建事务', 'primary')],
        main: `<table class="issues"><thead><tr><th>状态</th><th>标题</th><th>负责人</th><th>优先级</th><th>更新</th></tr></thead><tbody>${[['进行中', '侧栏在窄窗口下折叠', '林晚舟', '高', '2 分钟前'], ['待评审', '命令面板键盘导航', '周墨白', '中', '1 小时前'], ['已完成', '表格列宽记忆', '苏见月', '低', '昨天'], ['进行中', '检查器空态文案', '陈屿', '中', '昨天'], ['阻塞', '深浅色切换闪烁', '林晚舟', '紧急', '2 天前'], ['待评审', '键盘快捷键表补全', '陈屿', '低', '2 天前'], ['进行中', '空态插画替换', '苏见月', '低', '3 天前'], ['已完成', '表格粘性表头', '周墨白', '中', '3 天前']].map(([st, title, who, pri, when], i) => `<tr class="${i === 0 ? 'is-selected' : ''}"><td><span class="state" style="--c:${st === '已完成' ? 'var(--ok)' : st === '阻塞' ? 'var(--danger)' : 'var(--warn)'}">${esc(st)}</span></td><td class="t-title">${esc(title)}</td><td>${esc(who)}</td><td>${esc(pri)}</td><td class="t-muted">${esc(when)}</td></tr>`).join('')}</tbody></table>`,
        right: `<h3 class="panel-title">选中事务</h3><b class="panel-strong">侧栏在窄窗口下折叠</b>${kv([['状态', '进行中'], ['负责人', '林晚舟'], ['优先级', '高'], ['周期', '第 46 周']])}<h3 class="panel-title">描述</h3><p class="panel-body">窗口宽度小于 1100px 时，侧栏折叠为 56px 图标条；检查器整块隐藏，主区占满剩余宽度。</p><h3 class="panel-title">活动</h3><ul class="feed"><li>林晚舟 修改了状态</li><li>周墨白 添加了标签 界面</li><li>苏见月 上传了截图</li><li>陈屿 关联了设计规范</li></ul>`,
      },
      {
        label: '收件箱', icon: 'mail', badge: '3',
        toolbar: [btn('未读', 'on'), btn('全部')],
        main: rows([['周墨白 评论了「命令面板键盘导航」', '1 小时前'], ['苏见月 指派给你「空态插画替换」', '3 小时前'], ['林晚舟 关闭了「表格列宽记忆」', '昨天']]),
        right: `<h3 class="panel-title">通知详情</h3><b class="panel-strong">周墨白 评论了「命令面板键盘导航」</b><p class="panel-body">上下键在结果间移动，回车执行；焦点环统一 2px primary。</p>`,
      },
      {
        label: '路线图', icon: 'grid',
        main: `<div class="wk">${[['第 45 周', ['组件令牌对齐', '苏见月'], ['深色模式验收', '陈屿']], ['第 46 周', ['命令面板', '周墨白'], ['检查器宽度记忆', '林晚舟'], ['快捷键表', '陈屿']], ['第 47 周', ['空态插画', '苏见月'], ['表格粘性表头', '周墨白']]].map(([wk, items]) => `<h4>${esc(wk)}</h4><ul>${items.map(([t, w]) => `<li><span>${esc(t)}</span><span>${esc(w)}</span></li>`).join('')}</ul>`).join('')}</div>`,
      },
    ],
    status: '8 个进行中',
  }),

  raycast: (p) => ({
    screens: [
      {
        label: '命令面板', icon: 'search',
        main: `<div class="launcher"><div class="cmd"><div class="cmd-input">${icon('search')}<span>搜索应用与命令…</span><kbd>⌘K</kbd></div><div class="cmd-group">建议</div>${[['打开 GhollStudio', '⌘ 1', 'grid'], ['新建事务', '⌘ N', 'layers'], ['切换深浅外观', '⌘ ⇧ L', 'sun']].map(([t, k, ic]) => `<button class="cmd-row">${icon(ic)}<span>${esc(t)}</span><kbd>${esc(k)}</kbd></button>`).join('')}<div class="cmd-group">最近文件</div>${[['设计规范 · notion', '', 'file'], ['第 46 周路线图', '', 'grid']].map(([t, k, ic]) => `<button class="cmd-row">${icon(ic)}<span>${esc(t)}</span><kbd>${esc(k)}</kbd></button>`).join('')}</div></div>`,
      },
    ],
    status: '命令面板',
  }),

  slack: () => ({
    screens: [
      {
        label: '#设计', icon: 'chat', badge: '4', status: '4 条未读',
        toolbar: [`<b class="ch">#设计</b><span class="ch-sub">18 位成员</span>`],
        actions: [btn('成员'), btn('搜索')],
        main: thread([['苏见月', '09:12', '桌面端的检查器我按规范改成常驻 260px 了，窄屏折叠。'], ['周墨白', '09:15', '命令面板的键盘导航加了吗？⌘K 进去应该能直接回车。'], ['林晚舟', '09:20', '加了，顺带把焦点环统一成 2px primary。'], ['陈屿', '09:24', '表格行高统一到 40 了，数字都改成等宽。'], ['周墨白', '09:31', '状态栏那行副本要不要跟着深浅色走？'], ['苏见月', '09:33', '要，已经跟 surface2 对齐了。']]) + composer('发消息到 #设计…'),
      },
      {
        label: '#前端', icon: 'code',
        toolbar: [`<b class="ch">#前端</b><span class="ch-sub">12 位成员</span>`],
        main: thread([['陈屿', '10:02', '桌面页的样式抽到脚本里了，一次生成 8 套。'], ['周墨白', '10:05', '缩略图重拍了吗？卡片上还是旧图。'], ['苏见月', '10:08', '拍了，8/8 完成。']]) + composer('发消息到 #前端…'),
      },
      {
        label: '私信', icon: 'mail', badge: '2',
        toolbar: [`<b class="ch">林晚舟</b><span class="ch-sub">在线</span>`],
        main: thread([['林晚舟', '11:20', '命令面板的 Esc 关闭要顺手，别把整页刷新带出来。'], ['我', '11:21', '已经拦掉了，Esc 只关面板。']]) + composer('发消息给林晚舟…'),
      },
    ],
    status: '4 条未读',
  }),

  warp: () => ({
    screens: [
      {
        label: '构建', icon: 'terminal', status: '构建通过',
        toolbar: [`<span class="branch">main</span><span class="ch-sub">~/gholl/design</span>`],
        actions: [btn('新会话')],
        main: `<div class="term"><div class="tblock"><code><span class="prompt">❯</span> npm run build</code></div><pre class="tout">tsc --noEmit
vite build
✓ built in 1.43s
postbuild · 279 个 meta 壳</pre><div class="tblock"><code><span class="prompt">❯</span> <span class="caret"></span></code></div></div>`,
      },
      {
        label: '规范校验', icon: 'check', status: '0 errors',
        toolbar: [`<span class="branch">main</span><span class="ch-sub">~/gholl/design</span>`],
        main: `<div class="term"><div class="tblock"><code><span class="prompt">❯</span> npm run design:lint</code></div><pre class="tout">共校验 279 份规范：0 errors，6485 warnings</pre><div class="tblock"><code><span class="prompt">❯</span> node scripts/desktop-apps/generate.mjs</code></div><pre class="tout">✓ figma
✓ notion
✓ linear-app
✓ raycast
✓ slack
✓ warp
✓ superhuman
✓ cursor
generated 8 / 8 desktop samples</pre></div>`,
      },
      {
        label: 'Git', icon: 'code', status: '1 变更',
        toolbar: [`<span class="branch">main</span><span class="ch-sub">~/gholl/design</span>`],
        main: `<div class="term"><div class="tblock"><code><span class="prompt">❯</span> git status --short</code></div><pre class="tout"> M scripts/desktop-apps/generate.mjs
 M public/generated/figma/index.html
?? scripts/desktop-apps/runtime.js</pre><div class="tblock"><code><span class="prompt">❯</span> <span class="caret"></span></code></div></div>`,
      },
    ],
    status: '构建通过',
  }),

  superhuman: () => ({
    screens: [
      {
        label: '收件箱', icon: 'mail', badge: '12', status: '12 封未读',
        toolbar: [btn('收件箱', 'on'), btn('未读 12'), btn('搜索')],
        actions: [btn('撰写', 'primary')],
        main: `<div class="mail-split"><div class="mail-list">${[['林晚舟', '桌面端检查器宽度确认', '按 260px 常驻，窄屏折叠…', '09:12', true], ['周墨白', '命令面板快捷键表', '⌘K / ⌘N / ⌘⇧L 三个先落地…', '08:40', true], ['苏见月', '第 46 周周报', '本周完成 8 项，1 项阻塞…', '昨天', false], ['陈屿', '表格列宽的记忆策略', '按 slug 存 sessionStorage…', '昨天', false], ['周墨白', '缩略图重拍清单', '8 个桌面页需要重拍…', '周一', false]].map(([who, subj, prev, t, unread], i) => `<button class="mail-row${unread ? ' unread' : ''}${i === 0 ? ' active' : ''}"><span class="dot"></span><div><b>${esc(who)}</b><span class="m-subj">${esc(subj)}</span><p>${esc(prev)}</p></div><time>${esc(t)}</time></button>`).join('')}</div><div class="mail-read"><span class="doc-crumb">收件箱 / 林晚舟</span><h2>桌面端检查器宽度确认</h2><p class="doc-lead">按规范把检查器固定为 260px，窗口小于 1100px 时折叠为图标条。</p><p>另外两处细节：表格行高统一 40px；所有数字使用等宽字体，扫读更快。</p><div class="callout">侧栏、检查器、状态栏的底色统一取 surface2，主区取 surface，画布取 bg。</div><div class="mail-actions">${btn('回复', 'primary')}${btn('稍后')}</div></div></div>`,
      },
      {
        label: '已发送', icon: 'check',
        toolbar: [btn('已发送', 'on'), btn('本周')],
        main: rows([['Re: 桌面端检查器宽度确认', '09:20'], ['Re: 命令面板快捷键表', '08:52'], ['第 45 周周报', '周一']]),
      },
      {
        label: '提醒', icon: 'clock',
        toolbar: [btn('待办', 'on'), btn('已完成')],
        main: rows([['回复林晚舟 · 检查器宽度', '今天 17:00'], ['给周墨白发快捷键表', '明天 10:00'], ['整理缩略图清单', '周四']]),
      },
    ],
    status: '12 封未读',
  }),

  cursor: () => ({
    hasRight: true,
    screens: [
      {
        label: 'GalleryPage.tsx', icon: 'file',
        toolbar: [`<span class="ch-sub">src/pages/GalleryPage.tsx</span>`],
        actions: [btn('运行'), btn('AI', 'on')],
        main: `<div class="editor"><ol class="gutter">${Array.from({ length: 13 }, (_, i) => `<li>${i + 1}</li>`).join('')}</ol><pre class="code"><span class="k">const</span> <span class="v">galleryMemory</span> = {
  <span class="p">category</span>: <span class="s">'all'</span>,
  <span class="p">tag</span>: <span class="k">null</span>,
  <span class="p">query</span>: <span class="s">''</span>,
  <span class="p">shown</span>: <span class="n">48</span>,
  <span class="p">scrollY</span>: <span class="n">0</span>,
}

<span class="k">export function</span> <span class="f">navigate</span>(to, opts) {
  <span class="k">if</span> (opts?.replace) history.<span class="f">replaceState</span>(<span class="k">null</span>, <span class="s">''</span>, to)
  <span class="k">else</span> history.<span class="f">pushState</span>(<span class="k">null</span>, <span class="s">''</span>, to)
  window.<span class="f">dispatchEvent</span>(<span class="k">new</span> <span class="f">PopStateEvent</span>(<span class="s">'popstate'</span>))
}</pre></div>`,
        right: `<h3 class="panel-title">AI 对话</h3><div class="ai"><p class="ai-user">把画廊的筛选状态存到组件之外，返回时复原。</p><p class="ai-bot">已用模块级 <code>galleryMemory</code> 保存 category / tag / query / shown / scrollY，并在挂载后用 rAF 复原滚动位置。</p><p class="ai-user">滚动恢复会不会和浏览器的自动恢复冲突？</p><p class="ai-bot">不会：pushState 进入新条目时浏览器不会恢复滚动，只有 popstate 会；两者取值一致，rAF 之后以我们的值为准。</p></div><form class="composer"><input placeholder="继续提问…"><button class="btn primary">发送</button></form>`,
      },
      {
        label: 'router.ts', icon: 'code',
        toolbar: [`<span class="ch-sub">src/lib/router.ts</span>`],
        main: `<div class="editor"><ol class="gutter">${Array.from({ length: 11 }, (_, i) => `<li>${i + 1}</li>`).join('')}</ol><pre class="code"><span class="k">export function</span> <span class="f">navigate</span>(to, opts) {
  <span class="k">if</span> (opts?.replace) history.<span class="f">replaceState</span>(<span class="k">null</span>, <span class="s">''</span>, to)
  <span class="k">else</span> history.<span class="f">pushState</span>(<span class="k">null</span>, <span class="s">''</span>, to)
  window.<span class="f">dispatchEvent</span>(<span class="k">new</span> <span class="f">PopStateEvent</span>(<span class="s">'popstate'</span>))
}

<span class="k">export function</span> <span class="f">useRoute</span>() {
  <span class="k">const</span> [route, setRoute] = <span class="f">useState</span>(normalize)
  <span class="k">return</span> route
}</pre></div>`,
      },
      {
        label: 'scripts', icon: 'terminal',
        toolbar: [`<span class="ch-sub">scripts/</span>`],
        main: rows([['desktop-apps/generate.mjs', '新增'], ['desktop-apps/runtime.js', '新增'], ['lib/theme.mjs', '新增'], ['mobile-apps/generate.mjs', '']]),
      },
    ],
    status: 'TypeScript',
  }),
}

const PRODUCT = {
  figma: { label: 'Figma', kind: '设计协作' },
  notion: { label: 'Notion', kind: '文档工作区' },
  'linear-app': { label: 'Linear', kind: '事务追踪' },
  raycast: { label: 'Raycast', kind: '启动器' },
  slack: { label: 'Slack', kind: '团队消息' },
  warp: { label: 'Warp', kind: '终端' },
  superhuman: { label: 'Superhuman', kind: '邮件' },
  cursor: { label: 'Cursor', kind: '编辑器' },
}

function page(d) {
  const p = palette(d)
  const meta = PRODUCT[d.slug] || { label: d.name, kind: '桌面工具' }
  const built = LAYOUTS[d.slug](p)
  const mdPath = join(ROOT, 'designs', d.slug, 'DESIGN.md')
  const alt = existsSync(mdPath) ? altPalette(readFileSync(mdPath, 'utf8'), p) : null
  const dark = lum(p.bg) < 0.25
  const font = `${d.fontFamilyBase || 'system-ui, sans-serif'}, 'PingFang SC', 'Microsoft YaHei', sans-serif`
  const radius = d.radius || { card: '12px', control: '8px' }
  const hasNav = built.screens.length > 1
  const hasRight = Boolean(built.hasRight)
  const cols = [hasNav && '236px', '1fr', hasRight && '260px'].filter(Boolean).join(' ')

  const rootVars = `:root{
--bg:${esc(p.bg)};--surface:${esc(p.surface)};--surface2:${esc(p.surface2)};--text:${esc(p.text)};--muted:${esc(p.muted)};--border:${esc(p.border)};
--primary:${esc(p.primary)};--on-primary:${esc(p.onPrimary)};--accent:${esc(p.accent)};--ok:${esc(p.success)};--warn:${esc(p.warning)};--danger:${esc(p.danger)};
--r-card:${esc(radius.card)};--r-ctl:${esc(radius.control)};--font:${font};--shadow:0 24px 64px rgba(0,0,0,${dark ? '.55' : '.18'});
}${alt ? `
:root[data-theme="alt"]{--bg:${alt.bg};--surface:${alt.surface};--surface2:${alt.surface2};--text:${alt.text};--muted:${alt.muted};--border:${alt.border};--primary:${alt.primary};--on-primary:${alt.onPrimary};--shadow:0 24px 64px rgba(0,0,0,${alt.dark ? '.55' : '.18'})}` : ''}`

  const css = CSS.replace('{{ROOT_VARS}}', rootVars)
    .replace('{{COLS}}', cols)
    .replace('{{COLS_NARROW}}', hasNav ? '200px 1fr' : '1fr')
    .replace('{{DESK_BG}}', dark ? mix(p.bg, '#ffffff', 0.04) : mix(p.bg, '#000000', 0.08))

  const screens = built.screens.map((s) => ({
    label: s.label,
    main: ((s.toolbar || []).length ? toolbar(s.toolbar.join(''), (s.actions || []).join('')) : '') + (s.main || ''),
    right: s.right || '',
    status: s.status || built.status,
  }))

  const nav = hasNav
    ? `<div class="nav-group"><span class="nav-title">工作区</span>${built.screens.map((s, i) => `<button class="nav-item${i === 0 ? ' on' : ''}" data-nav="${i}"${i === 0 ? ' aria-current="page"' : ''}>${icon(s.icon)}<span>${esc(s.label)}</span>${s.badge ? `<em>${esc(s.badge)}</em>` : ''}</button>`).join('')}</div>`
    : ''

  const commands = [
    ...built.screens.map((s, i) => ({ label: s.label, hint: `⌘ ${i + 1}`, screen: i })),
    ...(alt ? [{ label: '切换深浅外观', hint: '⌘ ⇧ L' }] : []),
  ]

  const first = built.screens[0]
  const data = {
    title: meta.label,
    screens,
    commands,
    themeAlt: Boolean(alt),
  }

  return `<!doctype html>
<!--
  GOLDEN PROMPT 产物 · ${esc(meta.label)} · 规范：${esc(d.name)}
  决策溯源：见 designs/${d.slug}/DESIGN.md
  ─ canvas ${esc(p.bg)} · surface ${esc(p.surface)} · text ${esc(p.text)} · primary ${esc(p.primary)}
-->
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="${esc(p.bg)}">
<title>${esc(meta.label)} · ${esc(d.name)}</title>
<style>
${css}
</style>
</head>
<body>
<svg width="0" height="0" style="position:absolute" aria-hidden="true">${sprite}</svg>
<div class="win" role="application" aria-label="${esc(meta.label)} 桌面样板间">
  <div class="titlebar">
    <span class="lights" aria-hidden="true"><i></i><i></i><i></i></span>
    <span class="win-title">GhollStudio · <b>${esc(meta.label)}</b></span>
    <span class="crumb" id="crumb">${esc(first.label)}</span>
    <span class="win-tools">
      ${alt ? `<button class="tbtn" id="theme" aria-pressed="false" aria-label="切换深浅外观">${icon('sun')}外观</button>` : ''}
      <button class="tbtn" id="palette-open" aria-label="打开命令面板">⌘K 命令面板</button>
      <span>${esc(meta.kind)}</span>
    </span>
  </div>
  <div class="body">
    ${hasNav ? `<aside class="side" id="nav" aria-label="侧栏">${nav}</aside>` : ''}
    <main class="main" id="main"></main>
    ${hasRight ? `<aside class="right" id="right" aria-label="检查器">${first.right || ''}</aside>` : ''}
  </div>
  <div class="statusbar"><span id="status">${esc(first.status || built.status || '')}</span><span>${esc(d.name)}</span></div>
</div>
<div class="pal" id="palette" role="dialog" aria-modal="true" aria-label="命令面板">
  <div class="pal-box">
    <div class="pal-input">${icon('search')}<input id="palette-input" placeholder="搜索命令…" aria-label="搜索命令" autocomplete="off"><kbd>Esc 关闭</kbd></div>
    <div class="pal-list" id="palette-list" role="listbox"></div>
  </div>
</div>
<script>window.__DESK__=${JSON.stringify(data).replace(/</g, '\\u003c')}</script>
<script>${RUNTIME}</script>
</body>
</html>
`
}

const desktop = (Array.isArray(INDEX) ? INDEX : INDEX.designs || []).filter((d) => d.platform === 'desktop')
const targets = ONLY ? desktop.filter((d) => d.slug === ONLY) : desktop
let made = 0
for (const d of targets) {
  if (!LAYOUTS[d.slug]) {
    console.log(`⊘ ${d.slug}: 没有桌面版式，跳过`)
    continue
  }
  const out = join(ROOT, 'public/generated', d.slug, 'index.html')
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, page(d))
  made++
  console.log(`✓ ${d.slug} → public/generated/${d.slug}/index.html`)
}
console.log(`generated ${made} / ${desktop.length} desktop samples`)
