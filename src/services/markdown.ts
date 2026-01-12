import { marked } from 'marked'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-markdown'

// Configure marked
marked.setOptions({
  breaks: false
})

export const parseMarkdown = async (text: string): Promise<string> => {
  return marked.parse(text)
}

export const highlightCode = (element: HTMLElement): void => {
  Prism.highlightAllUnder(element)
} 