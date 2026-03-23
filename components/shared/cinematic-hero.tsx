'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CinematicHeroProps {
  quote: string
  subtext?: string
}

export function CinematicHero({ quote, subtext }: CinematicHeroProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [scrollOpacity, setScrollOpacity] = useState(1)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const vh = window.innerHeight
      const scrollY = window.scrollY
      const opacity = Math.max(0, 1 - scrollY / vh)
      setScrollOpacity(opacity)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] bg-[#0B1120] flex items-center justify-center overflow-hidden"
    >
      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat' }} />

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#E8913A]/[0.03] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-blue-500/[0.02] rounded-full blur-[100px]" />

      {/* SVG India topographic background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          viewBox="0 0 500 600"
          className={cn(
            'w-[80%] max-w-[500px] h-auto opacity-[0.06]',
            mounted && 'india-draw-in'
          )}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M220 30 C200 28 185 35 175 42 C160 52 148 58 140 72 C132 86 128 95 120 108 C112 120 100 128 92 140 C84 155 78 168 72 182 C65 198 58 212 55 228 C52 242 48 258 50 275 C52 290 58 305 62 318 C68 335 75 348 82 362 C88 375 95 388 105 398 C115 408 128 415 138 425 C148 438 155 452 165 465 C172 475 180 485 190 492 C200 500 212 505 222 512 C232 518 240 525 248 535 C255 542 260 552 268 558 C275 562 285 560 292 555 C298 548 302 538 308 528 C315 518 322 508 328 498 C335 485 340 472 348 460 C355 448 362 435 368 422 C375 408 380 395 385 380 C390 365 395 348 398 332 C400 318 402 302 400 288 C398 272 392 258 388 242 C382 225 375 210 368 195 C360 178 352 162 342 148 C332 135 320 125 310 115 C298 102 288 90 278 78 C268 65 258 52 248 42 C238 35 228 32 220 30 Z"
            stroke="#C8C8C8"
            strokeWidth="1.5"
            className="india-outline"
            pathLength="1"
          />
          <path
            d="M220 80 C205 78 192 88 182 98 C170 112 158 125 148 142 C138 158 128 175 120 195 C112 215 105 235 102 258 C100 278 102 298 108 318 C115 338 125 355 138 370 C150 385 165 398 180 412 C195 425 210 438 225 455 C238 468 248 482 260 492 C270 498 278 490 285 478 C295 462 305 445 315 428 C325 412 335 395 342 378 C350 360 358 340 362 320 C365 300 362 278 355 258 C348 238 338 220 325 205 C312 188 298 175 282 162 C268 150 252 138 240 125 C230 112 224 95 220 80 Z"
            stroke="#C8C8C8"
            strokeWidth="0.8"
            className="india-contour-1"
            pathLength="1"
          />
          <path
            d="M222 140 C212 138 200 148 190 162 C178 178 168 198 160 220 C152 242 148 265 150 290 C152 312 160 332 172 350 C185 368 200 382 218 398 C232 410 245 425 258 438 C268 442 275 432 282 418 C292 398 302 378 310 355 C318 335 322 312 320 290 C318 268 310 248 298 230 C285 212 270 198 255 185 C242 172 230 155 222 140 Z"
            stroke="#C8C8C8"
            strokeWidth="0.5"
            className="india-contour-2"
            pathLength="1"
          />
        </svg>
      </div>

      {/* Foreground text */}
      <div
        className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center"
        style={{ opacity: scrollOpacity }}
      >
        <h1 className="sr-only">Samanvay Foundation — Deep Engineering for Social Good</h1>
        <p
          className={cn(
            'text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#E8E4DF] leading-relaxed md:leading-loose transition-opacity duration-[1500ms] tracking-wide',
            mounted ? 'opacity-100' : 'opacity-0'
          )}
          style={{ fontFamily: 'Playfair Display, Georgia, serif', fontStyle: 'italic' }}
        >
          {quote}
        </p>
        {subtext && (
          <p
            className={cn(
              'mt-10 md:mt-14 text-base md:text-lg lg:text-xl text-[#94A3B8] leading-relaxed max-w-2xl mx-auto transition-opacity duration-[1500ms] delay-500',
              mounted ? 'opacity-100' : 'opacity-0'
            )}
          >
            {subtext}
          </p>
        )}
      </div>

      {/* Scroll indicator — very subtle */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce opacity-40"
        style={{ opacity: scrollOpacity * 0.4 }}
        aria-hidden="true"
      >
        <ChevronDown className="w-5 h-5 text-[#94A3B8]" />
      </div>

      <style jsx>{`
        .india-draw-in .india-outline {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation: drawLine 3s ease-out forwards;
        }
        .india-draw-in .india-contour-1 {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation: drawLine 3s ease-out 0.5s forwards;
        }
        .india-draw-in .india-contour-2 {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation: drawLine 3s ease-out 1s forwards;
        }
        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  )
}
