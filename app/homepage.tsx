'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight, Heart, Globe, Code2, Users, Building2, Stethoscope, GraduationCap, ClipboardCheck, Video, ExternalLink, ChevronDown, Sparkles, Play } from 'lucide-react'
import { products } from '@/data/products'
import { homepageFaqs } from '@/data/homepage-faqs'
import { siteConfig } from '@/data/site-config'
import { ChatGPTLogo, PerplexityLogo, ClaudeLogo, GeminiLogo, GrokLogo } from '@/components/shared/ai-logos'
import { cn } from '@/lib/utils'

/* ─── scroll-reveal hook ─── */
function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

const iconMap: Record<string, React.ElementType> = {
  Users, Hospital: Building2, ClipboardCheck, Video, Stethoscope, GraduationCap,
}

/* ─── Stock images from Unsplash (Indian context, healthcare, field workers) ─── */
const IMAGES = {
  heroMain: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1400&q=80&auto=format',
  fieldWorker: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&auto=format',
  hospital: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80&auto=format',
  community: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80&auto=format',
  education: 'https://images.unsplash.com/photo-1497375638960-ca368c7231e4?w=800&q=80&auto=format',
  ruralIndia: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80&auto=format',
  tablet: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&auto=format',
}

/* ========================================================================== */
/*  ANIMATED GRADIENT BG                                                      */
/* ========================================================================== */
function AnimatedBg() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-amber-200/30 dark:bg-amber-900/20 blur-[100px] animate-float-slow" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-orange-100/40 dark:bg-orange-900/10 blur-[80px] animate-float-slower" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-amber-100/20 dark:bg-amber-800/10 blur-[120px] animate-pulse-slow" />
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />
    </div>
  )
}

/* ========================================================================== */
/*  HERO with background image                                                */
/* ========================================================================== */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-zinc-950">
      <AnimatedBg />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-28 pb-12 md:pt-36 md:pb-20 w-full">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 dark:border-amber-800/40 bg-amber-50/80 dark:bg-amber-900/20 backdrop-blur-sm px-4 py-1.5 mb-8 animate-fade-in">
              <Heart className="w-3.5 h-3.5 text-amber-600" />
              <span className="text-xs font-semibold tracking-wide text-amber-700 dark:text-amber-400 uppercase">Nonprofit Technology &middot; Open Source</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.08] animate-slide-up">
              Open Source Technology{' '}
              <span className="relative">
                <span className="text-amber-600 dark:text-amber-500">for Social Good</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none"><path d="M2 8 C50 2, 100 2, 150 6 S250 10, 298 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-amber-500/40" /></svg>
              </span>
            </h1>

            <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed animate-slide-up-delay">
              We build digital infrastructure that India&apos;s nonprofits can own, configure, and evolve. <strong className="text-zinc-900 dark:text-white">6 products</strong> serving <strong className="text-zinc-900 dark:text-white">60+ organizations</strong> across <strong className="text-zinc-900 dark:text-white">25+ states</strong>.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 animate-slide-up-delay-2">
              <Link href="/products" className="group inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold px-7 py-3.5 rounded-full text-sm hover:scale-105 hover:shadow-xl transition-all duration-300">
                Explore Products <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/story" className="inline-flex items-center gap-2 border-2 border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-200 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-amber-500 hover:text-amber-600 transition-all duration-300">
                Our Story
              </Link>
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="relative animate-slide-up-delay">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/10 dark:shadow-amber-500/5">
              <Image
                src={IMAGES.heroMain}
                alt="Healthcare workers serving communities"
                fill
                className="object-cover"
                priority
              />
              {/* Subtle amber tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/20 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-4 -left-4 md:-left-8 bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-4 border border-zinc-200 dark:border-zinc-700 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="text-2xl font-bold text-amber-600">60+</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Nonprofits served</div>
            </div>
            {/* Floating stat card 2 */}
            <div className="absolute -top-4 -right-4 md:-right-6 bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-4 border border-zinc-200 dark:border-zinc-700 animate-fade-in" style={{ animationDelay: '1s' }}>
              <div className="text-2xl font-bold text-amber-600">5L+</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Lives touched</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ========================================================================== */
/*  PHOTO STRIP — Horizontal scrolling images                                 */
/* ========================================================================== */
function PhotoStrip() {
  const images = [
    { src: IMAGES.fieldWorker, alt: 'Health worker with digital tools' },
    { src: IMAGES.hospital, alt: 'Hospital information systems' },
    { src: IMAGES.community, alt: 'Community programs' },
    { src: IMAGES.education, alt: 'Education initiatives' },
    { src: IMAGES.ruralIndia, alt: 'Rural India' },
    { src: IMAGES.tablet, alt: 'Digital health solutions' },
  ]
  return (
    <div className="overflow-hidden py-6 bg-zinc-100 dark:bg-zinc-900">
      <div className="flex gap-4 animate-scroll-x">
        {[...images, ...images].map((img, i) => (
          <div key={i} className="shrink-0 w-64 h-40 md:w-80 md:h-48 rounded-xl overflow-hidden relative group">
            <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          </div>
        ))}
      </div>
    </div>
  )
}

/* ========================================================================== */
/*  STATS BAR with animated counters                                          */
/* ========================================================================== */
function StatsBar() {
  const { ref, visible } = useReveal(0.3)
  const stats = [
    { value: '60+', label: 'Nonprofits' },
    { value: '5L+', label: 'Lives Touched' },
    { value: '3000+', label: 'Field Workers' },
    { value: '6', label: 'Products' },
    { value: '25+', label: 'States' },
  ]
  return (
    <section ref={ref} className="relative bg-zinc-900 dark:bg-zinc-800 py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 via-transparent to-amber-900/10" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-4">
          {stats.map((s, i) => (
            <div key={s.label} className={cn('text-center transition-all duration-700', visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-90')} style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">{s.value}</div>
              <div className="mt-2 text-sm text-zinc-400 font-medium uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ========================================================================== */
/*  PRODUCTS with hover effects                                               */
/* ========================================================================== */
function ProductsSection() {
  const { ref, visible } = useReveal()
  return (
    <section ref={ref} className="py-24 md:py-32 bg-white dark:bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 pattern-mobile" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3">Our Products</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight">Six products. One mission.</h2>
          </div>
          <Link href="/products" className="text-sm font-semibold text-amber-600 hover:text-amber-700 inline-flex items-center gap-1">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p, i) => {
            const Icon = iconMap[p.icon] || Users
            return (
              <Link key={p.slug} href={`/products/${p.slug}`}
                className={cn(
                  'group relative bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-7 border border-zinc-200 dark:border-zinc-800',
                  'hover:shadow-2xl hover:shadow-amber-500/5 hover:-translate-y-2 hover:border-amber-200 dark:hover:border-amber-800/40',
                  'transition-all duration-500 cursor-pointer',
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
                )}
                style={{ transitionDelay: `${i * 100}ms`, transitionDuration: '600ms' }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(circle at 50% 0%, ${p.color}08, transparent 70%)` }} />

                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    {p.logo ? (
                      <Image src={p.logo} alt={p.name} width={120} height={40} className="h-9 w-auto object-contain" />
                    ) : (
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${p.color}15` }}>
                        <Icon className="w-5 h-5" style={{ color: p.color }} />
                      </div>
                    )}
                    <ArrowUpRight className="w-5 h-5 text-zinc-300 dark:text-zinc-600 group-hover:text-amber-600 group-hover:rotate-45 transition-all duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">{p.name}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">{p.tagline}</p>
                  <p className="text-sm italic text-zinc-700 dark:text-zinc-300 border-l-2 pl-3 mb-4" style={{ borderColor: p.color }}>
                    &ldquo;{p.humanStory}&rdquo;
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: p.color }} />
                    <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">{p.impactStat}</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ========================================================================== */
/*  STORY BANNER with image                                                   */
/* ========================================================================== */
function StoryBanner() {
  const { ref, visible } = useReveal(0.15)
  return (
    <section ref={ref} className="relative py-28 md:py-40 overflow-hidden">
      <Image src={IMAGES.ruralIndia} alt="Rural India" fill className="object-cover" />
      <div className="absolute inset-0 bg-zinc-900/80 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 via-transparent to-amber-900/10" />
      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <p className={cn('text-2xl sm:text-3xl md:text-4xl text-white leading-relaxed font-light transition-all duration-1000', visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}
          style={{ fontFamily: 'Playfair Display, Georgia, serif', fontStyle: 'italic' }}>
          &ldquo;In 2016, inside a tiger reserve in Chhattisgarh, a village health worker named Kaushilya walked house to house — carrying twelve paper registers, a feature phone, and the health of 200 families in her memory.&rdquo;
        </p>
        <Link href="/story" className={cn('inline-flex items-center gap-2 mt-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium text-sm px-6 py-3 rounded-full transition-all duration-500', visible ? 'opacity-100' : 'opacity-0')}>
          Read the full story <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}

/* ========================================================================== */
/*  PARTNERS                                                                  */
/* ========================================================================== */
function Partners() {
  const { ref, visible } = useReveal()
  const partners = [
    'UNICEF', 'NHSRC', 'Jan Swasthya Sahyog', 'Calcutta Kids', 'Sewa Rural', 'Ashwini',
    'Yenepoya', 'Mentor Together', 'Arghyam', 'SEARCH', 'Shelter Associates', 'Lend A Hand India',
  ]
  return (
    <section ref={ref} className="relative py-20 md:py-28 bg-zinc-50 dark:bg-zinc-900 overflow-hidden">
      <div className="absolute inset-0 pattern-dots" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3">Trusted By</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">Organizations we work with</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {partners.map((name, i) => (
            <div key={name}
              className={cn(
                'flex items-center justify-center px-5 py-6 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700',
                'hover:shadow-lg hover:-translate-y-1 hover:border-amber-200 dark:hover:border-amber-800/40 transition-all duration-300',
                visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90',
              )}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200 text-center leading-tight">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ========================================================================== */
/*  IMPACT MOSAIC — Photo grid showing real impact                            */
/* ========================================================================== */
function ImpactMosaic() {
  const { ref, visible } = useReveal()
  const images = [
    { src: IMAGES.fieldWorker, label: 'Field workers using Avni', span: 'md:col-span-2 md:row-span-2' },
    { src: IMAGES.hospital, label: 'Hospitals running Bahmni', span: '' },
    { src: IMAGES.community, label: 'Community programs', span: '' },
    { src: IMAGES.education, label: 'Youth mentoring', span: 'md:col-span-2' },
    { src: IMAGES.tablet, label: 'Digital health tools', span: '' },
  ]
  return (
    <section ref={ref} className="py-20 md:py-28 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3">On The Ground</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">Technology in action</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div key={i} className={cn(
              'relative rounded-2xl overflow-hidden group cursor-pointer',
              img.span,
              i === 0 ? 'h-64 md:h-auto' : 'h-40 md:h-48',
              visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
            )} style={{ transitionDelay: `${i * 100}ms`, transitionDuration: '600ms' }}>
              <Image src={img.src} alt={img.label} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">{img.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ========================================================================== */
/*  HOW WE WORK                                                               */
/* ========================================================================== */
function HowWeWork() {
  const { ref, visible } = useReveal()
  const steps = [
    { num: '01', title: 'Understand', desc: 'We spend time with your teams in the field — listening to context, constraints, and goals.', img: IMAGES.community },
    { num: '02', title: 'Build', desc: 'We engineer open-source products for low-resource, offline-first environments.', img: IMAGES.tablet },
    { num: '03', title: 'Deploy', desc: 'We configure, train, and launch alongside your teams — not from a distance.', img: IMAGES.fieldWorker },
    { num: '04', title: 'Transfer', desc: 'Your organization owns the technology. We build capacity so you evolve it independently.', img: IMAGES.education },
  ]
  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-zinc-50 dark:bg-zinc-900 overflow-hidden">
      <div className="absolute inset-0 pattern-health" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3">Our Process</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">How we work</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.num} className={cn(
              'group bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-700',
              'hover:shadow-xl hover:-translate-y-1 transition-all duration-500',
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            )} style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="relative h-32 overflow-hidden">
                <Image src={s.img} alt={s.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-800 to-transparent" />
                <div className="absolute top-3 left-3 text-3xl font-bold text-white/50">{s.num}</div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">{s.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ========================================================================== */
/*  ASK AI                                                                    */
/* ========================================================================== */
function AskAI() {
  const { ref, visible } = useReveal()
  const aiPlatforms = [
    { name: 'ChatGPT', Logo: ChatGPTLogo, url: siteConfig.aiPrompts.chatgpt, desc: 'Ask OpenAI' },
    { name: 'Perplexity', Logo: PerplexityLogo, url: siteConfig.aiPrompts.perplexity, desc: 'Search with AI' },
    { name: 'Claude', Logo: ClaudeLogo, url: siteConfig.aiPrompts.claude, desc: 'Ask Anthropic' },
    { name: 'Gemini', Logo: GeminiLogo, url: siteConfig.aiPrompts.gemini, desc: 'Ask Google' },
    { name: 'Grok', Logo: GrokLogo, url: siteConfig.aiPrompts.grok, desc: 'Ask xAI' },
  ]
  return (
    <section ref={ref} className="py-20 md:py-28 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 dark:border-violet-800/40 bg-violet-50 dark:bg-violet-900/20 px-4 py-1.5 mb-5">
            <Sparkles className="w-3.5 h-3.5 text-violet-600" />
            <span className="text-xs font-semibold tracking-wide text-violet-700 dark:text-violet-400 uppercase">AI-Verified</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">
            Don&apos;t take our word for it — Ask any AI
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 max-w-lg mx-auto">Our impact is documented across the internet.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {aiPlatforms.map((ai, i) => (
            <a key={ai.name} href={ai.url} target="_blank" rel="noopener noreferrer"
              className={cn(
                'group flex flex-col items-center gap-3 bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-700',
                'hover:shadow-xl hover:-translate-y-2 hover:border-violet-200 dark:hover:border-violet-800/40 transition-all duration-300',
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
              )}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <ai.Logo className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-center">
                <div className="text-sm font-bold text-zinc-900 dark:text-white">{ai.name}</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{ai.desc}</div>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-violet-600 dark:text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Ask now <ExternalLink className="w-3 h-3" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ========================================================================== */
/*  DUAL CTA                                                                  */
/* ========================================================================== */
function DualCTA() {
  const { ref, visible } = useReveal()
  return (
    <section ref={ref} className="py-24 md:py-32 bg-zinc-50 dark:bg-zinc-900">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className={cn('text-center mb-14 transition-all duration-700', visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">Let&apos;s build this together</h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">Whether you run a nonprofit or fund one — there&apos;s a place for you in this work.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/products" className={cn('group overflow-hidden rounded-2xl p-8 md:p-10 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/10 border border-amber-200/60 dark:border-amber-800/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500', visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6')} style={{ transitionDelay: '100ms' }}>
            <Globe className="w-10 h-10 text-amber-600 mb-5 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">For Nonprofits</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed">Explore open-source products built for the last mile.</p>
            <span className="inline-flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold text-sm">Explore Products <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" /></span>
          </Link>
          <Link href="/for-funders" className={cn('group overflow-hidden rounded-2xl p-8 md:p-10 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/15 dark:to-indigo-900/10 border border-blue-200/60 dark:border-blue-800/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500', visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6')} style={{ transitionDelay: '200ms' }}>
            <Code2 className="w-10 h-10 text-blue-600 mb-5 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">For Funders</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed">Invest in infrastructure that outlasts any single grant cycle. CSR-1 registered.</p>
            <span className="inline-flex items-center gap-2 text-blue-700 dark:text-blue-400 font-semibold text-sm">Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" /></span>
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ========================================================================== */
/*  FAQ                                                                       */
/* ========================================================================== */
function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const { ref, visible } = useReveal()
  return (
    <section ref={ref} className="py-24 md:py-32 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight text-center mb-14">Frequently asked questions</h2>
        <div className="space-y-3">
          {homepageFaqs.map((faq, i) => (
            <div key={i} className={cn('rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 overflow-hidden hover:border-amber-200 dark:hover:border-amber-800/40 transition-all duration-300', visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')} style={{ transitionDelay: `${i * 60}ms` }}>
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left">
                <span className="text-base font-semibold text-zinc-900 dark:text-white pr-4">{faq.question}</span>
                <ChevronDown className={cn('w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-300', open === i && 'rotate-180 text-amber-500')} />
              </button>
              <div className={cn('overflow-hidden transition-all duration-300', open === i ? 'max-h-96 pb-5' : 'max-h-0')}>
                <p className="px-6 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ========================================================================== */
/*  FINAL CTA with bg image                                                   */
/* ========================================================================== */
function FinalCTA() {
  const { ref, visible } = useReveal()
  return (
    <section ref={ref} className="relative py-28 md:py-36 overflow-hidden">
      <Image src={IMAGES.community} alt="Community impact" fill className="object-cover" />
      <div className="absolute inset-0 bg-zinc-900/85" />
      <div className={cn('relative mx-auto max-w-3xl px-5 sm:px-8 text-center transition-all duration-700', visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6')}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
          Ready to transform your <span className="text-amber-400">program?</span>
        </h2>
        <p className="mt-5 text-zinc-300 text-lg max-w-xl mx-auto">Whether you have a question, a partnership idea, or just want to understand our work — we&apos;d love to hear from you.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="group inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold px-8 py-4 rounded-full text-sm hover:scale-105 transition-all duration-300">
            Get in Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/our-work" className="inline-flex items-center gap-2 border border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full text-sm transition-all duration-300">
            See Our Work
          </Link>
        </div>
      </div>
      <div className="h-20 md:h-0" />
    </section>
  )
}

/* ========================================================================== */
/*  HOMEPAGE                                                                  */
/* ========================================================================== */
export function Homepage() {
  return (
    <>
      <Hero />
      <PhotoStrip />
      <StatsBar />
      <ProductsSection />
      <StoryBanner />
      <Partners />
      <ImpactMosaic />
      <HowWeWork />
      <AskAI />
      <DualCTA />
      <FAQ />
      <FinalCTA />
    </>
  )
}
