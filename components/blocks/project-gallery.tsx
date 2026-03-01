"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ExternalLink } from "lucide-react"
import { projects, type Project } from "@/data/projects"
import { cn } from "@/lib/utils"

const sectorEmoji: Record<string, string> = {
  health: "🏥",
  other: "🤝",
}

const filters = [
  { label: "All", value: "all", emoji: "📋" },
  { label: "Health", value: "health", emoji: "🏥" },
  { label: "Other Sectors", value: "other", emoji: "🤝" },
]

export function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter(p => p.sector === activeFilter)

  // Sort featured first
  const sorted = [...filtered].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))

  return (
    <div>
      <div className="flex items-center gap-2 mb-8 flex-wrap">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-lg transition-colors inline-flex items-center gap-1.5",
              activeFilter === filter.value
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            )}
          >
            <span>{filter.emoji}</span>
            {filter.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {sorted.map((project) => (
            <motion.div
              key={project.partner}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "group p-5 rounded-xl border bg-card hover:shadow-md transition-all duration-300",
                project.featured && "border-l-4 border-l-accent"
              )}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span>{sectorEmoji[project.sector] || "📋"}</span>
                  <h3 className="font-heading font-semibold">{project.partner}</h3>
                </div>
                <div className="flex items-center gap-2">
                  {project.featured && (
                    <span className="px-2 py-0.5 text-xs font-medium bg-accent/15 text-accent rounded-full">
                      Featured
                    </span>
                  )}
                  {project.partnerUrl && (
                    <a
                      href={project.partnerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors opacity-0 group-hover:opacity-100"
                      aria-label={`Visit ${project.partner}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                {project.description}
              </p>
              {project.products.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {project.products.map((product) => (
                    <span
                      key={product}
                      className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
