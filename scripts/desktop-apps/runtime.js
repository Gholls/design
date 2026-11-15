const D = window.__DESK__
const $ = (s) => document.querySelector(s)
const navEl = $('#nav')
const mainEl = $('#main')
const rightEl = $('#right')
const statusEl = $('#status')
const crumbEl = $('#crumb')
const palEl = $('#palette')
const palInput = $('#palette-input')
const palList = $('#palette-list')
const themeBtn = $('#theme')

let cur = 0
let palItems = []
let palIdx = 0

function setScreen(i) {
  const s = D.screens[i]
  if (!s) return
  cur = i
  mainEl.innerHTML = s.main
  if (rightEl) rightEl.innerHTML = s.right || ''
  mainEl.scrollTop = 0
  if (statusEl) statusEl.textContent = s.status || D.status
  if (crumbEl) crumbEl.textContent = s.label
  if (navEl) {
    navEl.querySelectorAll('[data-nav]').forEach((b) => {
      const on = Number(b.dataset.nav) === i
      b.classList.toggle('on', on)
      if (on) b.setAttribute('aria-current', 'page')
      else b.removeAttribute('aria-current')
    })
  }
  document.title = `${D.title} · ${s.label}`
}

if (navEl) {
  navEl.addEventListener('click', (e) => {
    const b = e.target.closest('[data-nav]')
    if (b) setScreen(Number(b.dataset.nav))
  })
}

function paintPalette() {
  palList.innerHTML = palItems.length
    ? palItems
        .map(
          (c, i) =>
            `<button class="pal-row${i === palIdx ? ' on' : ''}" data-cmd="${i}" role="option" aria-selected="${i === palIdx}"><span>${c.label}</span>${c.hint ? `<kbd>${c.hint}</kbd>` : ''}</button>`,
        )
        .join('')
    : '<p class="pal-empty">没有匹配的命令</p>'
}

function filterPalette(q) {
  const key = q.trim().toLowerCase()
  palItems = D.commands.filter((c) => !key || c.label.toLowerCase().includes(key))
  palIdx = 0
  paintPalette()
}

function openPalette() {
  palEl.classList.add('on')
  palInput.value = ''
  filterPalette('')
  palInput.focus()
}

function closePalette() {
  palEl.classList.remove('on')
}

function runCommand(i) {
  const c = palItems[i]
  if (!c) return
  closePalette()
  if (typeof c.screen === 'number') setScreen(c.screen)
}

palInput.addEventListener('input', () => filterPalette(palInput.value))
palList.addEventListener('mousemove', (e) => {
  const r = e.target.closest('[data-cmd]')
  if (!r) return
  const i = Number(r.dataset.cmd)
  if (i !== palIdx) {
    palIdx = i
    paintPalette()
  }
})
palList.addEventListener('click', (e) => {
  const r = e.target.closest('[data-cmd]')
  if (r) runCommand(Number(r.dataset.cmd))
})
palEl.addEventListener('click', (e) => {
  if (e.target === palEl) closePalette()
})

function toggleTheme() {
  if (!D.themeAlt) return
  const root = document.documentElement
  const alt = root.dataset.theme !== 'alt'
  root.dataset.theme = alt ? 'alt' : ''
  if (themeBtn) themeBtn.setAttribute('aria-pressed', String(alt))
}

document.addEventListener('keydown', (e) => {
  const meta = e.metaKey || e.ctrlKey
  if (meta && e.key.toLowerCase() === 'k') {
    e.preventDefault()
    if (palEl.classList.contains('on')) closePalette()
    else openPalette()
    return
  }
  if (meta && e.shiftKey && e.key.toLowerCase() === 'l') {
    e.preventDefault()
    toggleTheme()
    return
  }
  if (!palEl.classList.contains('on')) return
  const n = palItems.length
  if (e.key === 'Escape') {
    e.preventDefault()
    closePalette()
  } else if (e.key === 'ArrowDown') {
    e.preventDefault()
    palIdx = n ? (palIdx + 1) % n : 0
    paintPalette()
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    palIdx = n ? (palIdx - 1 + n) % n : 0
    paintPalette()
  } else if (e.key === 'Enter') {
    e.preventDefault()
    runCommand(palIdx)
  }
})

const palBtn = $('#palette-open')
if (palBtn) palBtn.addEventListener('click', openPalette)
if (themeBtn) themeBtn.addEventListener('click', toggleTheme)
setScreen(0)
