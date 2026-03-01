"use client"

import { useRef, useEffect, useState } from "react"

interface AnimatedCounterProps {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
}

export function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2000,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          observer.unobserve(el)

          let startTime: number
          let animationFrame: number

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))

            if (progress < 1) {
              animationFrame = requestAnimationFrame(animate)
            }
          }

          animationFrame = requestAnimationFrame(animate)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}
