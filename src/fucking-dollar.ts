export default function $<T extends keyof HTMLElementTagNameMap>(selector: T): HTMLElementTagNameMap[T]
export default function $(selector: string): HTMLElement
export default function $(selector: string) {
  return document.querySelector(selector)
}