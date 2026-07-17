'use client'
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
export function EditableReveal({ children, index = 0, className = '' }: { children: ReactNode; index?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null); const [ready, setReady] = useState(false)
  useEffect(() => { const node = ref.current; if (!node) return; const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setReady(true); observer.disconnect() } }, { threshold: .08 }); observer.observe(node); return () => observer.disconnect() }, [])
  return <div ref={ref} data-ready={ready} className={`editable-reveal ${className}`} style={{ '--reveal-index': index } as CSSProperties}>{children}</div>
}
