'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import { cn } from '@/lib/utils'

interface Stat {
  number: number
  suffix: string
  label: string
}

interface ImpactCounterSectionProps {
  stats: Stat[]
}

function easeOutExpo(t: number): number {
  // cubic-bezier(0.16, 1, 0.3, 1) approximation
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

function CountUpNumber({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
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

          let startTime: number | null = null

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            const eased = easeOutExpo(progress)
            setCount(Math.floor(eased * target))

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setCount(target)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export function ImpactCounterSection({ stats }: ImpactCounterSectionProps) {
  return (
    <section className="bg-[#0B1120] py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            'grid gap-14 md:gap-10',
            'grid-cols-2',
            'md:grid-cols-3',
            stats.length <= 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-5'
          )}
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold text-amber-500 mb-4 tracking-tighter">
                <CountUpNumber target={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-sm uppercase tracking-[0.2em] text-[#94A3B8]/80 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
