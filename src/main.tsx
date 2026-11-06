import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './App'
import { bootActiveDesign } from './lib/tokenEngine'
import { defaultDesign, loadDesigns } from './lib/registry'

const rootEl = document.getElementById('root')!

loadDesigns()
  .then(() => {
    /* 外壳主题恒定（内置基准），不随浏览的设计变化；规范配色仅局部作用域呈现 */
    if (defaultDesign) bootActiveDesign(defaultDesign)
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
