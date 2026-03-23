'use client'

import { useRef, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface Milestone {
  year: string
  title: string
  description: string
  product?: string
  impact?: string
  type: string
}

interface TimelineJourneyProps {
  milestones: Milestone[]
  productColors: Record<string, string>
}

function TimelineMilestone({
  milestone,
  index,
  productColors,
  isDesktop,
}: {
  milestone: Milestone
  index: number
  productColors: Record<string, string>
  isDesktop: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const isLeft = index % 2 === 0

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

  const productColor = milestone.product ? productColors[milestone.product] : undefined

  return (
    <div
      ref={ref}
      className={cn(
        'relative grid gap-4 md:gap-8 mb-12 last:mb-0',
        isDesktop ? 'md:grid-cols-[1fr_auto_1fr]' : 'grid-cols-[auto_1fr]'
      )}
    >
      {/* Desktop: alternating sides */}
      {isDesktop && (
        <>
          {/* Left content */}
          <div className={cn(
            'hidden md:flex',
            isLeft ? 'justify-end' : 'justify-end opacity-0 pointer-events-none'
          )}>
            {isLeft && (
              <div
                className={cn(
                  'max-w-sm text-right transition-all duration-700',
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                )}
              >
                <MilestoneContent milestone={milestone} productColor={productColor} />
              </div>
            )}
          </div>

          {/* Center line + dot */}
          <div className="hidden md:flex flex-col items-center">
            <div
              className={cn(
                'w-3 h-3 rounded-full bg-[#E8913A] border-2 border-[#0B1120] z-10 transition-transform duration-500',
                isVisible ? 'scale-100' : 'scale-0'
              )}
            />
          </div>

          {/* Right content */}
          <div className={cn(
            'hidden md:flex',
            !isLeft ? 'justify-start' : 'justify-start opacity-0 pointer-events-none'
          )}>
            {!isLeft && (
              <div
                className={cn(
                  'max-w-sm transition-all duration-700',
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                )}
              >
                <MilestoneContent milestone={milestone} productColor={productColor} />
              </div>
            )}
          </div>
        </>
      )}

      {/* Mobile: all left-aligned */}
      <div className="md:hidden flex flex-col items-center">
        <div
          className={cn(
            'w-3 h-3 rounded-full bg-[#E8913A] border-2 border-[#0B1120] z-10 transition-transform duration-500',
            isVisible ? 'scale-100' : 'scale-0'
          )}
        />
      </div>
      <div
        className={cn(
          'md:hidden transition-all duration-700',
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        )}
      >
        <MilestoneContent milestone={milestone} productColor={productColor} />
      </div>
    </div>
  )
}

function MilestoneContent({
  milestone,
  productColor,
}: {
  milestone: Milestone
  productColor?: string
}) {
  return (
    <div className="space-y-2">
      <span className="text-[#E8913A] text-sm font-semibold uppercase tracking-wider">
        {milestone.year}
      </span>
      <h3 className="font-heading text-lg md:text-xl font-semibold text-white">
        {milestone.title}
      </h3>
      <p className="text-[#94A3B8] text-sm leading-relaxed">
        {milestone.description}
      </p>
      {milestone.product && (
        <span
          className="inline-block px-3 py-1 text-xs font-medium rounded-full"
          style={{
            backgroundColor: productColor ? `${productColor}20` : '#E8913A20',
            color: productColor || '#E8913A',
          }}
        >
          {milestone.product}
        </span>
      )}
      {milestone.impact && (
        <p className="text-[#E8913A] font-bold text-sm">
          {milestone.impact}
        </p>
      )}
    </div>
  )
}

export function TimelineJourney({ milestones, productColors }: TimelineJourneyProps) {
  const lineRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [lineHeight, setLineHeight] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const rect = container.getBoundingClientRect()
      const containerTop = rect.top
      const containerHeight = rect.height
      const viewportHeight = window.innerHeight

      if (containerTop > viewportHeight) {
        setLineHeight(0)
        return
      }

      const scrolledIntoView = viewportHeight - containerTop
      const progress = Math.min(Math.max(scrolledIntoView / (containerHeight + viewportHeight * 0.3), 0), 1)
      setLineHeight(progress * 100)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="relative py-20 md:py-28">
      {/* Vertical amber line - centered on desktop, left on mobile */}
      <div
        className={cn(
          'absolute top-0 bottom-0',
          'left-[6px] md:left-1/2 md:-translate-x-1/2'
        )}
      >
        {/* Track background */}
        <div className="w-px h-full bg-[#E8913A]/10" />
        {/* Animated fill */}
        <div
          ref={lineRef}
          className="absolute top-0 left-0 w-px bg-[#E8913A] transition-[height] duration-100 ease-linear"
          style={{ height: `${lineHeight}%` }}
        />
      </div>

      {/* Milestones */}
      <div className="relative z-10">
        {milestones.map((milestone, i) => (
          <TimelineMilestone
            key={i}
            milestone={milestone}
            index={i}
            productColors={productColors}
            isDesktop={true}
          />
        ))}
      </div>
    </div>
  )
}
