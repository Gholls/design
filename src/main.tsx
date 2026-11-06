import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './App'
import { bootActiveDesign, getStoredSlug } from './lib/tokenEngine'
import { getDesign, loadDesigns } from './lib/registry'

const rootEl = document.getElementById('root')!

loadDesigns()
  .then(() => {
    const active = getDesign(getStoredSlug())
    if (active) bootActiveDesign(active)
    createRoot(rootEl).render(
      <StrictMode>
        <App />
      </StrictMode>,
    )
  })
  .catch((e: Error) => {
    rootEl.innerHTML =
      `<div style="padding:60px;text-align:center;font:14px system-ui">` +
      `<p style="font-weight:700">规范索引未就绪</p>` +
      `<p style="color:#64748b;margin-top:8px">${e.message}</p></div>`
  })
