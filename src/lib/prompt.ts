import promptRaw from '../../prompts/GOLDEN.md?raw'

/** 黄金提示词全文——项目的唯一需求事实源 */
export const GOLDEN_PROMPT: string = promptRaw

export function buildAgentPrompt(designMarkdown: string, designName: string): string {
  return (
    `${GOLDEN_PROMPT}\n\n---\n\n# 随附规范：DESIGN.md「${designName}」\n\n` + designMarkdown
  )
}
