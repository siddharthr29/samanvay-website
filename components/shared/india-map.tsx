'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import { cn } from '@/lib/utils'

interface Project {
  name: string
  partner: string
  product: string
  productColor: string
  state: string
  coordinates: { x: number; y: number }
  impact?: string
}

interface IndiaMapProps {
  projects: Project[]
  onProjectClick?: (project: Project) => void
}

export function IndiaMap({ projects, onProjectClick }: IndiaMapProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState<string>('All')

  const products = ['All', ...Array.from(new Set(projects.map(p => p.product)))]

  useEffect(() => {
    const el = svgRef.current
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

  const handleDotClick = useCallback((project: Project) => {
    if ('vibrate' in navigator) {
      navigator.vibrate(10)
    }
    onProjectClick?.(project)
  }, [onProjectClick])

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.product === activeFilter)

  const dimmedProjects = activeFilter === 'All'
    ? []
    : projects.filter(p => p.product !== activeFilter)

  return (
    <div className="w-full">
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {products.map(product => (
          <button
            key={product}
            onClick={() => setActiveFilter(product)}
            className={cn(
              'px-4 py-2 text-sm rounded-full transition-all duration-200 min-h-[48px] min-w-[48px]',
              activeFilter === product
                ? 'bg-[#E8913A] text-white'
                : 'bg-white/5 text-[#94A3B8] hover:bg-white/10 hover:text-white border border-white/10'
            )}
          >
            {product}
          </button>
        ))}
      </div>

      {/* Map */}
      <svg
        ref={svgRef}
        viewBox="0 0 500 600"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* India outline */}
        <path
          d="M245 18 C235 18 222 22 212 30 C202 38 195 45 185 55 C175 65 167 73 158 85
             C148 98 140 110 132 125 C124 140 117 155 110 172 C103 190 97 205 92 222
             C87 240 83 258 82 275 C81 292 82 308 85 325 C88 342 93 358 100 372
             C107 388 116 402 125 415 C135 428 145 440 155 455 C165 468 173 482 183 495
             C192 505 200 515 210 522 C218 528 226 535 235 542 C242 548 248 555 255 562
             C260 567 266 570 272 567 C278 563 283 556 288 548 C295 538 300 528 307 518
             C315 505 322 492 330 478 C338 465 345 450 352 435 C360 418 367 402 372 385
             C378 368 382 350 385 332 C388 315 390 298 388 280 C386 262 382 245 375 228
             C368 212 360 198 350 183 C340 168 328 155 318 142 C307 128 297 115 287 102
             C277 90 268 78 258 65 C250 55 243 42 237 32 C233 25 240 18 245 18 Z"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="1.2"
          className={cn(
            isVisible && 'india-map-draw'
          )}
          strokeDasharray="1"
          strokeDashoffset="1"
          pathLength="1"
        />

        {/* Kashmir region (north) */}
        <path
          d="M210 32 C200 40 192 52 185 62 C195 55 205 48 215 42 C222 38 218 35 210 32 Z"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="0.6"
          className={cn(isVisible && 'india-map-draw-delayed')}
          strokeDasharray="1"
          strokeDashoffset="1"
          pathLength="1"
        />

        {/* Northeast region */}
        <path
          d="M370 135 C378 130 388 128 395 132 C402 138 405 148 400 158 C395 165 385 168 378 162 C372 155 370 145 370 135 Z"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="0.6"
          className={cn(isVisible && 'india-map-draw-delayed')}
          strokeDasharray="1"
          strokeDashoffset="1"
          pathLength="1"
        />

        {/* Internal state-like divisions */}
        <path
          d="M180 180 C220 175 260 178 300 185"
          fill="none" stroke="#94A3B8" strokeWidth="0.4" opacity="0.5"
          className={cn(isVisible && 'india-map-draw-delayed')}
          strokeDasharray="1" strokeDashoffset="1" pathLength="1"
        />
        <path
          d="M150 280 C200 270 260 268 320 275"
          fill="none" stroke="#94A3B8" strokeWidth="0.4" opacity="0.5"
          className={cn(isVisible && 'india-map-draw-delayed')}
          strokeDasharray="1" strokeDashoffset="1" pathLength="1"
        />
        <path
          d="M135 370 C190 360 250 358 310 365"
          fill="none" stroke="#94A3B8" strokeWidth="0.4" opacity="0.5"
          className={cn(isVisible && 'india-map-draw-delayed')}
          strokeDasharray="1" strokeDashoffset="1" pathLength="1"
        />
        <path
          d="M230 120 C232 180 235 240 238 320"
          fill="none" stroke="#94A3B8" strokeWidth="0.4" opacity="0.5"
          className={cn(isVisible && 'india-map-draw-delayed')}
          strokeDasharray="1" strokeDashoffset="1" pathLength="1"
        />

        {/* Dimmed project dots */}
        {dimmedProjects.map((project, i) => (
          <g key={`dim-${i}`}>
            <circle
              cx={project.coordinates.x}
              cy={project.coordinates.y}
              r="5"
              fill={project.productColor}
              opacity={0.15}
              className="transition-opacity duration-300"
            />
          </g>
        ))}

        {/* Active project dots */}
        {filteredProjects.map((project, i) => (
          <g
            key={`active-${i}`}
            onClick={() => handleDotClick(project)}
            className="cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label={`${project.name} - ${project.state}`}
          >
            {/* Pulse ring */}
            <circle
              cx={project.coordinates.x}
              cy={project.coordinates.y}
              r="5"
              fill="none"
              stroke={project.productColor}
              strokeWidth="1.5"
              opacity={0.4}
              className={cn(isVisible && 'dot-pulse')}
            />
            {/* Dot - larger on mobile via CSS */}
            <circle
              cx={project.coordinates.x}
              cy={project.coordinates.y}
              r="5"
              fill={project.productColor}
              className="map-dot transition-all duration-200 hover:brightness-125"
            />
            {/* Invisible larger hit target for mobile */}
            <circle
              cx={project.coordinates.x}
              cy={project.coordinates.y}
              r="14"
              fill="transparent"
            />
          </g>
        ))}
      </svg>

      <style jsx>{`
        .india-map-draw {
          animation: drawMap 2.5s ease-out forwards;
        }
        .india-map-draw-delayed {
          animation: drawMap 2s ease-out 0.8s forwards;
        }
        @keyframes drawMap {
          to {
            stroke-dashoffset: 0;
          }
        }
        .dot-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% {
            r: 5;
            opacity: 0.4;
          }
          50% {
            r: 10;
            opacity: 0;
          }
        }
        @media (max-width: 768px) {
          .map-dot {
            r: 7;
          }
        }
      `}</style>
    </div>
  )
}
