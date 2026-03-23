"use client"

import { useState, useCallback, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { MapPin, ExternalLink, X } from "lucide-react"
import { products as productData } from "@/data/products"
import { partners } from "@/data/partners"

// Product color mapping
const productColors: Record<string, string> = {
  Avni: "#4CAF50",
  Bahmni: "#2196F3",
  Gunak: "#FF9800",
  TeleSathi: "#9C27B0",
  Shwaas: "#F44336",
  "Mentor To Go": "#00BCD4",
}

// State coordinate mapping (x, y in 500x600 viewBox)
const stateCoordinates: Record<string, { x: number; y: number }> = {
  Maharashtra: { x: 180, y: 340 },
  "West Bengal": { x: 340, y: 290 },
  Chhattisgarh: { x: 270, y: 310 },
  Karnataka: { x: 195, y: 430 },
  Gujarat: { x: 130, y: 290 },
  Rajasthan: { x: 155, y: 220 },
  "Uttar Pradesh": { x: 260, y: 230 },
  "Tamil Nadu": { x: 220, y: 470 },
  Kerala: { x: 185, y: 490 },
  Assam: { x: 400, y: 230 },
  Delhi: { x: 220, y: 200 },
  "Madhya Pradesh": { x: 220, y: 290 },
  "Andhra Pradesh": { x: 240, y: 390 },
  Telangana: { x: 240, y: 390 },
  Odisha: { x: 310, y: 340 },
  Bihar: { x: 320, y: 250 },
  Jharkhand: { x: 310, y: 280 },
  Punjab: { x: 190, y: 180 },
  Uttarakhand: { x: 240, y: 180 },
}

interface MapProject {
  name: string
  partner: string
  product: string
  productColor: string
  state: string
  coordinates: { x: number; y: number }
  description: string
  url?: string
}

// Build projects from partners data, assigning coordinates
function buildMapProjects(): MapProject[] {
  const result: MapProject[] = []

  for (const partner of partners) {
    if (partner.type === "funding" || partner.type === "technology") continue
    if (partner.products.length === 0) continue

    const state = partner.state
    if (!state) continue

    const coords = stateCoordinates[state]
    if (!coords) continue

    // Map product slugs to display names
    const productSlugToName: Record<string, string> = {
      avni: "Avni",
      bahmni: "Bahmni",
      gunak: "Gunak",
      telesathi: "TeleSathi",
      shwaas: "Shwaas",
      "mentor-to-go": "Mentor To Go",
    }

    const primaryProduct = productSlugToName[partner.products[0]] || partner.products[0]
    const color = productColors[primaryProduct] || "#E8913A"

    // Offset dots slightly if same state
    const existing = result.filter(p => p.state === state)
    const offset = existing.length * 12

    result.push({
      name: partner.name,
      partner: partner.name,
      product: primaryProduct,
      productColor: color,
      state,
      coordinates: { x: coords.x + offset, y: coords.y + (existing.length % 2 === 0 ? 0 : 10) },
      description: partner.description,
      url: partner.url,
    })
  }

  // Add projects without state from projects.ts that we can manually map
  const manualMappings: { partner: string; state: string; product: string }[] = [
    { partner: "NHSRC", state: "Delhi", product: "Gunak" },
    { partner: "UNICEF", state: "Delhi", product: "Avni" },
    { partner: "UNICEF Maharashtra", state: "Maharashtra", product: "Avni" },
    { partner: "CES (Centre for Equity Studies)", state: "Delhi", product: "Avni" },
    { partner: "IHMP", state: "Maharashtra", product: "Avni" },
    { partner: "Shelter Associates", state: "Maharashtra", product: "Avni" },
    { partner: "Arghyam", state: "Karnataka", product: "Avni" },
    { partner: "Chetna India", state: "Gujarat", product: "Avni" },
    { partner: "Mentor Together", state: "Karnataka", product: "Mentor To Go" },
    { partner: "Kalap Trust", state: "Uttarakhand", product: "Avni" },
    { partner: "SEARCH", state: "Maharashtra", product: "Bahmni" },
    { partner: "Spandan", state: "Gujarat", product: "Bahmni" },
    { partner: "Lend A Hand India", state: "Maharashtra", product: "Avni" },
  ]

  for (const mapping of manualMappings) {
    // Skip if already added from partners data
    if (result.some(p => p.partner === mapping.partner)) continue

    const partnerData = partners.find(p => p.name === mapping.partner)
    if (!partnerData) continue

    const coords = stateCoordinates[mapping.state]
    if (!coords) continue

    const color = productColors[mapping.product] || "#E8913A"
    const existing = result.filter(p => p.state === mapping.state)
    const offset = existing.length * 12

    result.push({
      name: partnerData.name,
      partner: partnerData.name,
      product: mapping.product,
      productColor: color,
      state: mapping.state,
      coordinates: { x: coords.x + offset, y: coords.y + (existing.length % 2 === 0 ? 0 : 10) },
      description: partnerData.description,
      url: partnerData.url,
    })
  }

  return result
}

const allProducts = ["All", "Avni", "Bahmni", "Gunak", "TeleSathi", "Shwaas", "Mentor To Go"]

export function WorkMap() {
  const svgRef = useRef<SVGSVGElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState("All")
  const [selectedProject, setSelectedProject] = useState<MapProject | null>(null)
  const mapProjects = useRef(buildMapProjects()).current

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

  const handleDotClick = useCallback((project: MapProject) => {
    if ("vibrate" in navigator) {
      navigator.vibrate(10)
    }
    setSelectedProject(prev => prev?.partner === project.partner ? null : project)
  }, [])

  const filteredProjects = activeFilter === "All"
    ? mapProjects
    : mapProjects.filter(p => p.product === activeFilter)

  const dimmedProjects = activeFilter === "All"
    ? []
    : mapProjects.filter(p => p.product !== activeFilter)

  return (
    <div className="w-full">
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {allProducts.map(product => {
          const color = productColors[product]
          const isActive = activeFilter === product
          return (
            <button
              key={product}
              onClick={() => {
                setActiveFilter(product)
                setSelectedProject(null)
              }}
              className={cn(
                "px-4 py-2 text-sm rounded-full transition-all duration-200 min-h-[48px] font-medium",
                isActive
                  ? "text-white shadow-lg"
                  : "bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white border border-white/10"
              )}
              style={isActive ? { backgroundColor: color || "#E8913A" } : undefined}
            >
              {product}
            </button>
          )
        })}
      </div>

      <div className="relative flex flex-col lg:flex-row items-start gap-8">
        {/* Map */}
        <div className="w-full lg:w-3/5 relative">
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
              className={cn(isVisible && "india-outline-draw")}
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
              className={cn(isVisible && "india-detail-draw")}
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
              className={cn(isVisible && "india-detail-draw")}
              strokeDasharray="1"
              strokeDashoffset="1"
              pathLength="1"
            />

            {/* Internal division lines */}
            <path
              d="M180 180 C220 175 260 178 300 185"
              fill="none" stroke="#94A3B8" strokeWidth="0.4" opacity="0.5"
              className={cn(isVisible && "india-detail-draw")}
              strokeDasharray="1" strokeDashoffset="1" pathLength="1"
            />
            <path
              d="M150 280 C200 270 260 268 320 275"
              fill="none" stroke="#94A3B8" strokeWidth="0.4" opacity="0.5"
              className={cn(isVisible && "india-detail-draw")}
              strokeDasharray="1" strokeDashoffset="1" pathLength="1"
            />
            <path
              d="M135 370 C190 360 250 358 310 365"
              fill="none" stroke="#94A3B8" strokeWidth="0.4" opacity="0.5"
              className={cn(isVisible && "india-detail-draw")}
              strokeDasharray="1" strokeDashoffset="1" pathLength="1"
            />
            <path
              d="M230 120 C232 180 235 240 238 320"
              fill="none" stroke="#94A3B8" strokeWidth="0.4" opacity="0.5"
              className={cn(isVisible && "india-detail-draw")}
              strokeDasharray="1" strokeDashoffset="1" pathLength="1"
            />

            {/* Dimmed project dots */}
            {dimmedProjects.map((project, i) => (
              <circle
                key={`dim-${project.partner}-${i}`}
                cx={project.coordinates.x}
                cy={project.coordinates.y}
                r="5"
                fill={project.productColor}
                opacity={0.15}
                className="transition-opacity duration-300"
              />
            ))}

            {/* Active project dots */}
            {filteredProjects.map((project, i) => (
              <g
                key={`active-${project.partner}-${i}`}
                onClick={() => handleDotClick(project)}
                className="cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={`${project.partner} - ${project.state}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    handleDotClick(project)
                  }
                }}
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
                  className={cn(isVisible && "map-dot-pulse")}
                />
                {/* Visible dot */}
                <circle
                  cx={project.coordinates.x}
                  cy={project.coordinates.y}
                  r="5"
                  fill={project.productColor}
                  className={cn(
                    "transition-all duration-200",
                    selectedProject?.partner === project.partner && "brightness-125"
                  )}
                  style={selectedProject?.partner === project.partner ? { r: 8 } : undefined}
                />
                {/* Selection ring */}
                {selectedProject?.partner === project.partner && (
                  <circle
                    cx={project.coordinates.x}
                    cy={project.coordinates.y}
                    r="14"
                    fill="none"
                    stroke={project.productColor}
                    strokeWidth="2"
                    opacity={0.6}
                  />
                )}
                {/* Invisible hit target for mobile (24px diameter = 14px radius at viewBox scale) */}
                <circle
                  cx={project.coordinates.x}
                  cy={project.coordinates.y}
                  r="14"
                  fill="transparent"
                />
              </g>
            ))}
          </svg>
        </div>

        {/* Project detail card (inline, right side on desktop, below on mobile) */}
        <div className="w-full lg:w-2/5 lg:sticky lg:top-24 min-h-[200px]">
          {selectedProject ? (
            <div
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 animate-in fade-in slide-in-from-bottom-2 duration-300"
              style={{ borderLeftColor: selectedProject.productColor, borderLeftWidth: 4 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{selectedProject.partner}</h3>
                  <div className="flex items-center gap-2 text-sm text-zinc-300">
                    <MapPin className="h-3.5 w-3.5" />
                    {selectedProject.state}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg hover:bg-white/10 text-zinc-300 hover:text-white transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center"
                  aria-label="Close project details"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <span
                className="inline-block px-3 py-1 text-xs font-semibold rounded-full text-white mb-4"
                style={{ backgroundColor: selectedProject.productColor }}
              >
                {selectedProject.product}
              </span>

              <p className="text-[#CBD5E1] text-sm leading-relaxed mb-4">
                {selectedProject.description}
              </p>

              {selectedProject.url && (
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#E8913A] hover:text-[#F5A623] transition-colors font-medium min-h-[48px]"
                >
                  Visit partner
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          ) : (
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center">
              <MapPin className="h-8 w-8 text-zinc-300 mx-auto mb-3" />
              <p className="text-zinc-300 text-sm">
                Click on a dot to explore a project
              </p>
            </div>
          )}

          {/* Legend */}
          <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
            {Object.entries(productColors).map(([name, color]) => (
              <div key={name} className="flex items-center gap-1.5 text-xs text-zinc-300">
                <span
                  className="inline-block w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: color }}
                />
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS animations using standard style tag */}
      <style dangerouslySetInnerHTML={{ __html: `
        .india-outline-draw {
          animation: drawMapOutline 2.5s ease-out forwards;
        }
        .india-detail-draw {
          animation: drawMapOutline 2s ease-out 0.8s forwards;
        }
        @keyframes drawMapOutline {
          to {
            stroke-dashoffset: 0;
          }
        }
        .map-dot-pulse {
          animation: dotPulseAnim 2s ease-in-out infinite;
        }
        @keyframes dotPulseAnim {
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
          svg circle.transition-all {
            r: 7;
          }
        }
      `}} />
    </div>
  )
}
