import { buildAgentPrompt } from './prompt'
import { fetchMarkdown } from './registry'
import type { IndexedDesign } from '../types'

export async function copyAgentPrompt(design: IndexedDesign): Promise<boolean> {
  const markdown = await fetchMarkdown(design.slug)
  const text = buildAgentPrompt(markdown, design.design.name)
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

export async function downloadDesignMd(design: IndexedDesign): Promise<void> {
  const markdown = await fetchMarkdown(design.slug)
  const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${design.slug}.DESIGN.md`
  a.click()
  URL.revokeObjectURL(url)
}
