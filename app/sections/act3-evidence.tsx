'use client'

import { useRef, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { ImpactCounterSection } from '@/components/shared/impact-counter-section'
import { MessageSquare, Search, Wrench, Handshake } from 'lucide-react'

const impactStats = [
  { number: 60, suffix: '+', label: 'Nonprofits' },
  { number: 500, suffix: 'K+', label: 'Lives Touched' },
  { number: 3000, suffix: '+', label: 'Field Workers' },
  { number: 6, suffix: '', label: 'Products' },
  { number: 25, suffix: '+', label: 'States' },
]

const partners = [
  'UNICEF', 'NHSRC', 'Ashwini', 'Calcutta Kids', 'Sewa Rural',
  'SEARCH', 'Yenepoya', 'Mentor Together', 'Arghyam', 'Shelter Associates',
  'Jan Swasthya Sahyog', 'Lend A Hand India',
]

const processSteps = [
  { icon: MessageSquare, title: 'Understand', description: 'Listen first — your context, constraints, and goals' },
  { icon: Search, title: 'Build', description: 'Engineer the right product for your reality' },
  { icon: Wrench, title: 'Deploy', description: 'Configure, train, and launch with your teams' },
  { icon: Handshake, title: 'Transfer Ownership', description: 'Your technology, your capacity, your future' },
]

function PartnerMarquee() {
  return (
    <div className="overflow-hidden py-16 md:py-20">
      <p className="text-center text-xs uppercase tracking-[0.25em] text-zinc-300/60 mb-10">
        Trusted by leading organizations
      </p>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-[#0B1120] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-[#0B1120] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-8 animate-marquee">
          {[...partners, ...partners].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="shrink-0 text-sm md:text-base font-medium text-zinc-300/70 whitespace-nowrap px-5 py-2.5 rounded-full border border-white/10"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: max-content;
        }
      `}</style>
    </div>
  )
}

function HowWeWork() {
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
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="py-24 md:py-32">
      <h3
        className={cn(
          'text-center text-xs uppercase tracking-[0.25em] text-zinc-300/60 mb-16 transition-opacity duration-700',
          isVisible ? 'opacity-100' : 'opacity-0'
        )}
      >
        How We Work
      </h3>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Connecting line (desktop) */}
        <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-zinc-400/20 to-transparent" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {processSteps.map((step, i) => (
            <div
              key={step.title}
              className={cn(
                'text-center transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/[0.05] border border-white/10 mb-5">
                <step.icon className="w-8 h-8 text-[#E8913A]" />
              </div>
              <div className="text-xs font-bold text-[#E8913A] mb-2">0{i + 1}</div>
              <h4 className="font-heading text-xl md:text-2xl font-semibold text-white mb-3">
                {step.title}
              </h4>
              <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Act3Evidence() {
  return (
    <div className="bg-[#0B1120]">
      <ImpactCounterSection stats={impactStats} />
      <PartnerMarquee />
      <HowWeWork />
    </div>
  )
}
