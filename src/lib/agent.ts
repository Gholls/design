import { buildAgentPrompt } from './prompt'
import type { Design } from '../types'

export async function copyAgentPrompt(design: Design): Promise<boolean> {
  const text = buildAgentPrompt(design.markdown, design.design.name)
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    const ta = document.createElement('textarea')
    ta.value = text
    ta.style.position = 'fixed'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    const ok = document.execCommand('copy')
    ta.remove()
    return ok
  }
}

export function downloadDesignMd(design: Design): void {
  const blob = new Blob([design.markdown], { type: 'text/markdown;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${design.slug}.DESIGN.md`
  a.click()
  URL.revokeObjectURL(url)
}
