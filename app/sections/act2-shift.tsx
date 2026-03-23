'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { products } from '@/data/products'
import { ArrowRight } from 'lucide-react'

const productMeta: Record<string, { humanStory: string; color: string; impactStat: string }> = {
  avni: { humanStory: 'So Kaushilya could focus on care, not paperwork', color: '#4CAF50', impactStat: '70+ organizations, 25+ states' },
  bahmni: { humanStory: 'So the hospital she refers patients to could see their full history', color: '#2196F3', impactStat: '500+ hospital deployments worldwide' },
  gunak: { humanStory: 'So the quality of care could be measured, not assumed', color: '#FF9800', impactStat: 'Used by NHSRC across India' },
  telesathi: { humanStory: 'So the doctor 50km away could be present without the journey', color: '#9C27B0', impactStat: 'Bridging healthcare access gaps' },
  shwaas: { humanStory: 'So when a pandemic arrived, triage happened in seconds', color: '#F44336', impactStat: 'COVID clinical decision support' },
  'mentor-to-go': { humanStory: 'So the next generation could be guided, not guessed at', color: '#00BCD4', impactStat: '5,000+ youth mentored' },
}

function ProductStoryCard({
  product,
  index,
}: {
  product: (typeof products)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const meta = productMeta[product.slug] ?? { humanStory: product.humanStory, color: product.color, impactStat: product.impactStat }
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
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <Link
        href={`/products/${product.slug}`}
        className={cn(
          'group block rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 md:p-10',
          'hover:border-white/20 hover:bg-white/[0.06] hover:shadow-xl transition-all duration-300',
          'md:flex md:items-center md:gap-12',
          !isEven && 'md:flex-row-reverse'
        )}
      >
        {/* Story side */}
        <div className="flex-1 mb-6 md:mb-0">
          <p
            className="text-lg md:text-xl italic leading-relaxed"
            style={{ color: meta.color, fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            &ldquo;{meta.humanStory}&rdquo;
          </p>
        </div>

        {/* Product info side */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-3 h-3 rounded-full shrink-0"
              style={{ backgroundColor: meta.color }}
            />
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white">
              {product.name}
            </h3>
            <ArrowRight className="w-5 h-5 text-white/40 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
          </div>
          <p className="text-sm md:text-base text-zinc-300 leading-relaxed mb-4">
            {product.tagline}
          </p>
          <span className="text-xs font-medium text-zinc-300/80 uppercase tracking-[0.15em]">
            {meta.impactStat}
          </span>
        </div>
      </Link>
    </div>
  )
}

function HeadlineReveal() {
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
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        'text-center mb-24 md:mb-32 transition-all duration-1000',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      )}
    >
      <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8" style={{ letterSpacing: '-0.03em' }}>
        What if the infrastructure{' '}
        <span className="bg-gradient-to-r from-[#E8913A] to-[#F6C065] bg-clip-text text-transparent">
          matched the commitment?
        </span>
      </h2>
      <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent mb-8" />
      <p className="text-lg md:text-xl text-zinc-300 max-w-xl mx-auto leading-relaxed">
        This is <strong className="text-white">Samanvay</strong>. Building enduring, adaptable digital capacity within mission-driven institutions.
      </p>
    </div>
  )
}

export default function Act2Shift() {
  return (
    <section className="bg-gradient-to-b from-[#0B1120] via-[#1E2D4A] to-[#0B1120] py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <HeadlineReveal />
        <div className="space-y-8 md:space-y-10">
          {products.map((product, index) => (
            <ProductStoryCard key={product.slug} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
