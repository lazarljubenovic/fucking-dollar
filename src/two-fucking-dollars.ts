export default function $$<T extends keyof HTMLElementTagNameMap>(selector: T): NodeListOf<HTMLElementTagNameMap[T]>
export default function $$(selector: string): NodeListOf<HTMLElement>
export default function $$(selector: string) {
  return document.querySelectorAll(selector)
}
