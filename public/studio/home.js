(() => {
  const root = document.documentElement
  const themeBtn = document.getElementById('themeBtn')
  const frame = document.querySelector('.phone-screen iframe')
  const links = [...document.querySelectorAll('#platforms a')]
  const modules = [...document.querySelectorAll('[data-module]')]

  const applyTheme = (theme) => {
    root.dataset.theme = theme
    localStorage.setItem('gs-theme', theme)
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#1e1f21' : '#ffffff')
    frame?.contentWindow?.postMessage({ type: 'gs-theme', theme }, location.origin)
  }

  applyTheme(localStorage.getItem('gs-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))

  themeBtn.addEventListener('click', () => {
    applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark')
  })

  links.forEach((link) => {
    link.addEventListener('click', () => {
      links.forEach((l) => l.classList.toggle('on', l === link))
    })
  })

  if ('IntersectionObserver' in window) {
    const watcher = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (!visible) return
        links.forEach((l) => l.classList.toggle('on', l.dataset.platform === visible.target.dataset.module))
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0.1, 0.4, 0.7] },
    )
    modules.forEach((m) => watcher.observe(m))
  }
})()
