"use client"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface Milestone {
  year: string
  title: string
  description: string
  product: string
  productColor: string
  impact: string
}

const milestones: Milestone[] = [
  { year: "2017", title: "Avni is Born", description: "First version deployed with Sewa Rural in Gujarat for adolescent health tracking. A platform any nonprofit could configure without writing code.", product: "Avni", productColor: "#4CAF50", impact: "1 organization" },
  { year: "2018", title: "Calcutta Kids Goes Digital", description: "Calcutta Kids migrates to field-worker-driven community health tracking using Avni. A proof point for urban maternal health.", product: "Avni", productColor: "#4CAF50", impact: "5 organizations" },
  { year: "2019", title: "Bahmni Integration", description: "Avni and Bahmni are integrated — a seamless bridge between community health and hospital systems. Ashwini becomes the first to use both.", product: "Bahmni", productColor: "#2196F3", impact: "15 organizations" },
  { year: "2020", title: "Shwaas: Pandemic Response", description: "COVID-19 arrives. Shwaas is built in weeks with JSS — a triage tool for village health workers, offline and privacy-first.", product: "Shwaas", productColor: "#F44336", impact: "Emergency deployment" },
  { year: "2021", title: "Gunak Goes National", description: "Deployed with NHSRC for quality assessment of government hospitals across India. NQAS, Laqshya, Kayakalp frameworks on one platform.", product: "Gunak", productColor: "#FF9800", impact: "National scale" },
  { year: "2022", title: "UNICEF Partnership", description: "Maternal death surveillance system built with UNICEF using Avni. State-level deployments in Maharashtra.", product: "Avni", productColor: "#4CAF50", impact: "40+ organizations" },
  { year: "2023", title: "TeleSathi Launch", description: "Moderated tele-consultation platform launched — connecting remote patients with specialists through video, designed for low-resource settings.", product: "TeleSathi", productColor: "#9C27B0", impact: "55+ organizations" },
  { year: "2025", title: "Ecosystem Maturity", description: "Six products, 70+ organizations. Nonprofits now configure and deploy modules independently. The infrastructure is becoming self-sustaining.", product: "Avni", productColor: "#4CAF50", impact: "70+ organizations" },
]

export function StoryTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [lineHeight, setLineHeight] = useState(0)
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const rect = container.getBoundingClientRect()
      const windowHeight = window.innerHeight
      if (rect.top < windowHeight) {
        const scrolled = Math.min(Math.max((windowHeight - rect.top) / (rect.height + windowHeight * 0.5), 0), 1)
        setLineHeight(scrolled * 100)
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) setVisibleItems((prev) => new Set([...prev, index]))
        })
      },
      { threshold: 0.2 }
    )

    container.querySelectorAll("[data-index]").forEach((item) => observer.observe(item))
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => { window.removeEventListener("scroll", handleScroll); observer.disconnect() }
  }, [])

  return (
    <div ref={containerRef} className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-zinc-200 -translate-x-1/2">
        <div className="w-full bg-gradient-to-b from-amber-500 to-amber-500/30 transition-all duration-100 ease-out" style={{ height: `${lineHeight}%` }} />
      </div>

      <div className="space-y-12 md:space-y-16">
        {milestones.map((m, i) => {
          const isVisible = visibleItems.has(i)
          const isEven = i % 2 === 0

          return (
            <div key={m.year} data-index={i} className={cn("relative pl-12 md:pl-0 transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
              {/* Dot */}
              <div className={cn("absolute left-[14px] md:left-1/2 w-3.5 h-3.5 rounded-full border-[3px] border-amber-500 -translate-x-1/2 top-6 z-10 transition-colors", isVisible ? "bg-amber-500" : "bg-white")} />

              {/* Card */}
              <div className={cn("md:w-[calc(50%-2.5rem)]", isEven ? "md:mr-auto md:pr-4" : "md:ml-auto md:pl-4")}>
                <div className="bg-white rounded-2xl border border-zinc-200 p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl md:text-3xl font-bold text-amber-600 tracking-tight">{m.year}</span>
                    <span className="px-2.5 py-1 text-[11px] font-bold rounded-full text-white uppercase tracking-wider" style={{ backgroundColor: m.productColor }}>
                      {m.product}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-zinc-900 mb-2">{m.title}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-3">{m.description}</p>
                  <div className="text-xs font-bold text-amber-600 uppercase tracking-wider">{m.impact}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
