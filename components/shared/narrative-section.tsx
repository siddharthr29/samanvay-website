'use client'

import { useRef, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface NarrativeSectionProps {
  children: React.ReactNode
  variant: 'dark' | 'light' | 'dawn'
  className?: string
}

const variantStyles = {
  dark: 'bg-[#0B1120] text-[#C8C8C8]',
  light: 'bg-[#FAF6F1] text-[#2C2C2C]',
  dawn: 'bg-gradient-to-b from-[#0B1120] via-[#1E2D4A] to-[#FAF6F1]',
}

export function NarrativeSection({ children, variant, className }: NarrativeSectionProps) {
  const ref = useRef<HTMLElement>(null)
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
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className={cn(
        'py-24 md:py-36',
        variantStyles[variant],
        className
      )}
    >
      <div
        className={cn(
          'max-w-2xl mx-auto px-6 transition-all duration-1000 font-heading italic',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        )}
      >
        {children}
      </div>
    </section>
  )
}
