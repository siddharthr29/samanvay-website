"use client"

import { useRef, useEffect, type ReactNode } from "react"

interface AnimateInProps {
  children: ReactNode
  className?: string
  delay?: number
  variant?: "fade-up" | "fade-scale"
}

export function AnimateIn({ children, className = "", delay = 0, variant = "fade-up" }: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => el.classList.add("is-visible"), delay * 1000)
          } else {
            el.classList.add("is-visible")
          }
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const animClass = variant === "fade-scale" ? "animate-on-scroll-scale" : "animate-on-scroll"

  return (
    <div
      ref={ref}
      className={`${animClass} ${className}`}
      style={delay > 0 ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  )
}
