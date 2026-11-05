import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './App'
import { bootActiveDesign, getStoredSlug } from './lib/tokenEngine'
import { getDesign } from './lib/registry'

const active = getDesign(getStoredSlug())
if (active) bootActiveDesign(active)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
