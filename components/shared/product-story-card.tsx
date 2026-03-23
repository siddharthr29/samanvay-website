'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ProductStoryCardProps {
  humanStory: string
  productName: string
  description: string
  impactStat: string
  color: string
  features: string[]
  slug: string
  index: number
  icon: React.ReactNode
}

export function ProductStoryCard({
  humanStory,
  productName,
  description,
  impactStat,
  color,
  features,
  slug,
  index,
  icon,
}: ProductStoryCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const isEven = index % 2 === 0

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
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handleCtaClick = () => {
    if ('vibrate' in navigator) {
      navigator.vibrate(10)
    }
  }

  const textContent = (
    <div className="space-y-4">
      <p className="font-serif italic text-[#C8C8C8]/80 text-base md:text-lg leading-relaxed">
        &ldquo;{humanStory}&rdquo;
      </p>
      <h3 className="font-heading text-2xl md:text-3xl font-bold text-white">
        {productName}
      </h3>
      <p className="text-[#94A3B8] leading-relaxed">
        {description}
      </p>
      <p className="text-[#E8913A] font-bold text-lg">
        {impactStat}
      </p>
      <Link
        href={`/products/${slug}`}
        onClick={handleCtaClick}
        className="inline-flex items-center gap-2 text-white font-medium hover:text-[#E8913A] transition-colors min-h-[48px] min-w-[48px]"
      >
        Explore <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  )

  const glassCard = (
    <div
      className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 transition-all duration-300 group/card hover:border-white/20"
      style={{
        '--glow-color': color,
      } as React.CSSProperties}
    >
      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-20 transition-opacity duration-300"
        style={{ boxShadow: `0 0 40px ${color}`, backgroundColor: `${color}10` }}
      />
      <div className="relative z-10">
        <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl" style={{ backgroundColor: `${color}20` }}>
          {icon}
        </div>
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-[#C8C8C8]">
              <span
                className="mt-1.5 w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: color }}
              />
              <span className="text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

  return (
    <div
      ref={ref}
      className={cn(
        'grid gap-8 md:gap-12 items-center transition-all duration-700',
        'grid-cols-1 md:grid-cols-2',
        isVisible
          ? 'opacity-100 translate-x-0'
          : cn('opacity-0', isEven ? '-translate-x-12' : 'translate-x-12'),
        // On mobile, always same order. On desktop, alternate.
      )}
    >
      <div className={cn(!isEven && 'md:order-2')}>
        {textContent}
      </div>
      <div className={cn(!isEven && 'md:order-1')}>
        {glassCard}
      </div>
    </div>
  )
}
