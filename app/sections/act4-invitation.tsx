'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import { homepageFaqs } from '@/data/homepage-faqs'
import { FAQAccordion } from '@/components/blocks/faq-accordion'

function BlockQuote() {
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
        'max-w-3xl mx-auto text-center mb-16 md:mb-20 transition-all duration-1000',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      )}
    >
      <div className="text-6xl md:text-7xl text-[#D97706]/30 mb-6 font-heading">&ldquo;</div>
      <p className="text-2xl md:text-3xl leading-relaxed text-[#18181B]" style={{ fontFamily: 'Playfair Display, Georgia, serif', fontStyle: 'italic' }}>
        The opportunity ahead is not simply onboarding more nonprofits. It is rethinking how digital infrastructure for the social sector is imagined, built, financed and governed.
      </p>
      <div className="text-6xl md:text-7xl text-[#D97706]/30 mt-6 font-heading">&rdquo;</div>
    </div>
  )
}

function DualCTA() {
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

  const handleClick = () => {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(10)
    }
  }

  return (
    <div
      ref={ref}
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20 md:mb-28 transition-all duration-700',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      )}
    >
      {/* Nonprofit CTA */}
      <Link
        href="/products"
        onClick={handleClick}
        className="group block rounded-2xl border border-[#E8913A]/20 bg-gradient-to-br from-[#FEF3E2] to-[#FDE8CD] p-8 md:p-10 min-h-[220px] hover:shadow-xl hover:shadow-[#E8913A]/10 hover:-translate-y-1 transition-all duration-300"
      >
        <p className="text-sm font-medium text-[#E8913A] uppercase tracking-wider mb-3">
          For Nonprofits
        </p>
        <h3 className="font-heading text-xl md:text-2xl font-bold text-[#2C2C2C] mb-2">
          I run a nonprofit
        </h3>
        <p className="text-sm text-[#6B7280] mb-6 leading-relaxed">
          Explore products built for the last mile — health, education, water, and livelihoods.
        </p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#E8913A] min-h-[48px]">
          Explore Products
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </Link>

      {/* Funder CTA */}
      <Link
        href="/for-funders"
        onClick={handleClick}
        className="group block rounded-2xl border border-[#1E3A5F]/20 bg-gradient-to-br from-[#E8EEF6] to-[#D4DEF0] p-8 md:p-10 min-h-[220px] hover:shadow-xl hover:shadow-[#1E3A5F]/10 hover:-translate-y-1 transition-all duration-300"
      >
        <p className="text-sm font-medium text-[#1E3A5F] uppercase tracking-wider mb-3">
          For Funders
        </p>
        <h3 className="font-heading text-xl md:text-2xl font-bold text-[#2C2C2C] mb-2">
          I want to support this mission
        </h3>
        <p className="text-sm text-[#6B7280] mb-6 leading-relaxed">
          Learn how your investment builds infrastructure that outlasts any single grant cycle.
        </p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E3A5F] min-h-[48px]">
          Learn More
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </Link>
    </div>
  )
}

function FinalCTA() {
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

  const handleClick = () => {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(10)
    }
  }

  return (
    <div
      ref={ref}
      className={cn(
        'text-center py-16 md:py-20 transition-all duration-1000',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      )}
    >
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#18181B] mb-6 tracking-tight">
        Let&apos;s build this together
      </h2>
      <p className="text-[#6B7280] mb-8 max-w-md mx-auto">
        Whether you have a question, a partnership idea, or just want to understand our work better.
      </p>
      <Link
        href="/contact"
        onClick={handleClick}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#E8913A] to-[#D97A1A] text-white text-lg font-bold px-12 py-5 min-h-[56px] hover:shadow-xl hover:shadow-[#E8913A]/25 hover:-translate-y-0.5 transition-all duration-300 w-full max-w-md mx-auto"
      >
        Get in Touch
        <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  )
}

function FAQSection() {
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
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        'max-w-3xl mx-auto mb-8 transition-all duration-700',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      )}
    >
      <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent mb-12" />
      <h3 className="text-center text-sm uppercase tracking-[0.25em] text-zinc-300 mb-10">
        Frequently Asked Questions
      </h3>
      <FAQAccordion items={homepageFaqs} />
    </div>
  )
}

export default function Act4Invitation() {
  return (
    <section className="bg-[#FAFAF8] py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlockQuote />
        <DualCTA />
        <FAQSection />
        <FinalCTA />
      </div>
    </section>
  )
}
