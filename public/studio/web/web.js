(() => {
  const data = window.GS_DATA
  const root = document.documentElement
  const $ = (s) => document.querySelector(s)
  const el = (tag, cls, html) => {
    const n = document.createElement(tag)
    if (cls) n.className = cls
    if (html != null) n.innerHTML = html
    return n
  }
  const money = (n) => '¥' + n.toLocaleString('zh-CN')

  const applyTheme = (theme) => {
    root.dataset.theme = theme
    localStorage.setItem('gs-theme', theme)
    const btn = $('#themeBtn')
    if (btn) btn.textContent = theme === 'dark' ? '浅色' : '深色'
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#1e1f21' : '#ffffff')
    parent?.postMessage({ type: 'gs-theme', theme }, location.origin)
  }

  const title = data.studio.tagline.split('，')
  $('#heroTitle').innerHTML = `${title[0]}，<br><em>${title[1] || ''}</em>`
  $('#heroLead').textContent =
    '设计系统、Web 交付与 AI 流水线共用一份语义 token。网站、移动端、桌面端三套外壳，读同一份项目、工单与会话数据。'

  const compact = (n) => (n >= 10000 ? `¥${(n / 10000).toFixed(1)}万` : money(n))
  const stats = [
    [String(data.projects.length), '并行项目'],
    [String(data.tickets.length), '在管工单'],
    [compact(data.tickets.reduce((s, t) => s + t.amount, 0)), '合同金额'],
    [`${data.studio.rating} / 5`, '客户评分'],
  ]
  $('#heroStats').innerHTML = stats.map(([v, k]) => `<div><b>${v}</b><span>${k}</span></div>`).join('')

  const clients = [...new Set(data.projects.map((p) => p.client))]
  $('#clientList').innerHTML = clients.map((c) => `<li>${c}</li>`).join('')

  const board = [...data.projects].sort((a, b) => b.progress - a.progress).slice(0, 3)
  $('#boardCard').innerHTML = board
    .map(
      (p) => `<div class="board-row"><span class="swatch" style="background:${p.hue}"></span>
        <span class="meta"><b>${p.name}</b><small>${p.client} · ${p.owner}</small></span>
        <span class="pct">${p.progress}%</span></div>
        <div class="bar"><i style="width:${p.progress}%;background:${p.hue}"></i></div>`,
    )
    .join('')
  $('#boardFloat').textContent = `${data.projects.filter((p) => p.status === '进行中').length} 个项目交付中`

  const services = [
    ['设计系统', '语义 token、组件基线与品牌变量分层，换品牌只改一层。', ['8 套令牌体系', '双模主题', '组件走查']],
    ['Web 交付', '营销站、控制台与投放页共用一套栅格与排版节奏。', ['响应式栅格', '首屏预算', '上线复核']],
    ['AI 流水线', '把规范喂给 agent，产出可复用的页面与组件实现。', ['规范解析', '批量生成', '人工验收']],
  ]
  $('#serviceCards').innerHTML = services
    .map(
      ([name, desc, items]) => `<article class="card"><h3>${name}</h3><p>${desc}</p>
        <ul>${items.map((i) => `<li>${i}</li>`).join('')}</ul></article>`,
    )
    .join('')

  $('#workGrid').innerHTML = data.projects
    .map(
      (p) => `<article class="work" style="--accent:${p.hue}">
        <div class="work-top"><span class="swatch" style="background:${p.hue}"></span><b>${p.type}</b><span>${p.status}</span></div>
        <h3>${p.name}</h3>
        <small>${p.client} · ${p.owner} · 截止 ${p.due}</small>
        <div class="bar"><i style="width:${p.progress}%"></i></div>
        <small>${p.progress}% · ${p.milestones.filter((m) => m[1]).length}/${p.milestones.length} 里程碑</small>
      </article>`,
    )
    .join('')

  const plans = [
    ['起步', '¥18k', '/ 项目', ['1 个并行项目', '设计系统基线', '48 小时响应'], false],
    ['标准', '¥42k', '/ 项目', ['3 个并行项目', '双模主题 + 组件库', '24 小时响应', '上线复核'], true],
    ['长期', '¥96k', '/ 季度', ['不限并行项目', '专属 token 治理', '4 小时响应', '季度审计'], false],
  ]
  $('#plans').innerHTML = plans
    .map(
      ([name, price, unit, items, hot]) => `<article class="plan${hot ? ' hot' : ''}">
        <h3>${name}</h3><div class="price">${price}<small>${unit}</small></div>
        <ul>${items.map((i) => `<li>${i}</li>`).join('')}</ul>
        <a class="btn${hot ? ' primary' : ''}" href="../desktop/">进入后台</a></article>`,
    )
    .join('')

  $('#themeBtn').addEventListener('click', () => {
    applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark')
  })
  window.addEventListener('message', (e) => {
    if (e.origin === location.origin && e.data && e.data.type === 'gs-theme') applyTheme(e.data.theme)
  })

  applyTheme(localStorage.getItem('gs-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))

  const nav = $('#nav')
  const onScroll = () => nav.classList.toggle('stuck', window.scrollY > 8)
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })

  const links = [...document.querySelectorAll('[data-spy]')]
  const sections = links.map((l) => document.getElementById(l.dataset.spy)).filter(Boolean)
  if ('IntersectionObserver' in window) {
    const watcher = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (!visible) return
        links.forEach((l) => l.classList.toggle('on', l.dataset.spy === visible.target.id))
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0.1, 0.5] },
    )
    sections.forEach((s) => watcher.observe(s))
  }

  if (new URLSearchParams(location.search).has('embed')) document.body.classList.add('embed')
})()
