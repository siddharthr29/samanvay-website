"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ChevronDown, ExternalLink, MapPin } from "lucide-react"

interface CaseStudy {
  partner: string
  location: string
  product: string
  productColor: string
  headline: string
  challenge: string
  solution: string
  impact: string
  url?: string
  fullDetails: string
}

const caseStudies: CaseStudy[] = [
  {
    partner: "Jan Swasthya Sahyog (JSS)",
    location: "Chhattisgarh",
    product: "Avni",
    productColor: "#4CAF50",
    headline: "From 12 paper registers to real-time health tracking across a tiger reserve",
    challenge: "Community health workers in remote forested areas of Chhattisgarh tracked patient data across 12 separate paper registers, making it nearly impossible to follow up on cases or generate program insights.",
    solution: "Implemented Avni to digitize all community health workflows, enabling offline data collection, automated follow-up scheduling, and real-time dashboards for program managers.",
    impact: "Complete digital transformation of community health program",
    url: "http://jssbilaspur.org/",
    fullDetails: "JSS was Samanvay's first partner organization. The collaboration spans multiple technology and consulting projects, including implementation of Avni for their community health program and development of Shwaas, the COVID clinical decision support app used during the pandemic.",
  },
  {
    partner: "Calcutta Kids",
    location: "West Bengal",
    product: "Avni",
    productColor: "#4CAF50",
    headline: "Urban maternal health program digitized for thousands of families",
    challenge: "A data-entry-based system created bottlenecks between field visits and program insights, delaying critical maternal and child health interventions in urban Kolkata.",
    solution: "Migrated to a community health worker-driven system using Avni, putting data collection directly in the hands of frontline workers during home visits since 2018.",
    impact: "Thousands of families tracked with real-time maternal health data",
    url: "https://calcuttakids.org/",
    fullDetails: "Calcutta Kids has been using Avni since 2018, making them one of the longest-running implementations. The migration from a data-entry model to a field-worker-driven model fundamentally changed how the organization delivers care, enabling proactive follow-ups and early intervention for high-risk pregnancies.",
  },
  {
    partner: "NHSRC / UNICEF",
    location: "Pan-India",
    product: "Gunak",
    productColor: "#FF9800",
    headline: "National-scale healthcare quality assessment with Gunak",
    challenge: "Assessing quality across thousands of government hospitals required standardized tools that could work offline in remote facilities while supporting multiple assessment frameworks like NQAS, Laqshya, and Kayakalp.",
    solution: "Developed Gunak, a quality assessment platform supporting multiple national assessment tools with offline capability, standardized scoring, and centralized reporting dashboards.",
    impact: "Deployed nationally across government hospitals by NHSRC",
    url: "http://nhsrcindia.org/",
    fullDetails: "Gunak was developed in collaboration with NHSRC (National Health Systems Resource Centre) to bring standardization and efficiency to healthcare quality assessment at national scale. The platform supports NQAS, Laqshya, Kayakalp, and Dakshata assessment tools, used by hundreds of assessors across the country.",
  },
  {
    partner: "Yenepoya",
    location: "Karnataka",
    product: "Avni",
    productColor: "#4CAF50",
    headline: "TB care app endorsed by WHO and released by the Prime Minister of India",
    challenge: "Comprehensive community health programs needed a flexible platform that could handle TB care, nutrition tracking, and community outreach while meeting international standards.",
    solution: "Developed a comprehensive community health program using Avni, including a specialized TB care and nutrition app built to WHO and RNTCP standards.",
    impact: "TB care app endorsed by WHO, RNTCP; released by PM of India",
    url: "https://www.yenepoya.edu.in/",
    fullDetails: "The Yenepoya collaboration resulted in one of Avni's most prestigious implementations. The TB care and nutrition app was endorsed by the World Health Organization and India's Revised National TB Control Programme (RNTCP), and was officially released by the Prime Minister of India.",
  },
]

export function CaseStudies() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {caseStudies.map((study, index) => {
        const isExpanded = expandedIndex === index
        return (
          <div
            key={study.partner}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/20"
            style={{ borderLeftColor: study.productColor, borderLeftWidth: 4 }}
          >
            <button
              onClick={() => setExpandedIndex(isExpanded ? null : index)}
              className="w-full text-left p-6 min-h-[48px]"
              aria-expanded={isExpanded}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full text-white"
                      style={{ backgroundColor: study.productColor }}
                    >
                      {study.product}
                    </span>
                    <span className="text-xs text-zinc-300 flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {study.location}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {study.partner}
                  </h3>
                </div>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-zinc-300 transition-transform duration-200 shrink-0 mt-1",
                    isExpanded && "rotate-180"
                  )}
                />
              </div>

              <p className="text-sm text-[#E8913A] font-medium italic leading-relaxed">
                &ldquo;{study.headline}&rdquo;
              </p>
            </button>

            <div
              className={cn(
                "grid transition-all duration-300 ease-in-out",
                isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 space-y-4">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1">Challenge</h4>
                    <p className="text-sm text-[#CBD5E1] leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1">Solution</h4>
                    <p className="text-sm text-[#CBD5E1] leading-relaxed">{study.solution}</p>
                  </div>
                  <div className="flex items-center gap-2 py-2 px-3 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300">Impact:</span>
                    <span className="text-sm font-semibold text-white">{study.impact}</span>
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed">{study.fullDetails}</p>
                  {study.url && (
                    <a
                      href={study.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[#E8913A] hover:text-[#F5A623] transition-colors font-medium min-h-[48px]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Visit {study.partner.split("(")[0].trim()}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
