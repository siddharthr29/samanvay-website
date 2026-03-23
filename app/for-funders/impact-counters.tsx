"use client"

import { useRef, useEffect, useState } from "react"

const stats = [
  { value: 70, suffix: "+", label: "Organizations Served" },
  { value: 500, suffix: "+", label: "Hospital Deployments" },
  { value: 25, suffix: "+", label: "States Reached" },
  { value: 6, suffix: "", label: "Open-Source Products" },
]

function useCountUp(target: number, isVisible: boolean, duration = 2000) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let start = 0
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [target, isVisible, duration])

  return count
}

function StatCounter({
  value,
  suffix,
  label,
  isVisible,
}: {
  value: number
  suffix: string
  label: string
  isVisible: boolean
}) {
  const count = useCountUp(value, isVisible)

  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-heading font-bold text-[#E8913A]">
        {count}
        {suffix}
      </div>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </div>
  )
}

export function ImpactCounters() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl border bg-card"
    >
      {stats.map((stat) => (
        <StatCounter
          key={stat.label}
          value={stat.value}
          suffix={stat.suffix}
          label={stat.label}
          isVisible={isVisible}
        />
      ))}
    </div>
  )
}
