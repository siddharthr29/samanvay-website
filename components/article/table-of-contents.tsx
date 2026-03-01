"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface TocItem {
  id: string
  text: string
  level: number
}

export function TableOfContents({ content }: { content: string }) {
  const [activeId, setActiveId] = useState("")

  const headings: TocItem[] = content
    .split("\n")
    .filter((line) => line.match(/^#{1,3}\s/))
    .map((line) => {
      const match = line.match(/^(#{1,3})\s+(.+)$/)
      if (!match) return null
      const text = match[2].replace(/[*_`\[\]]/g, "")
      return {
        id: text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-"),
        text,
        level: match[1].length,
      }
    })
    .filter(Boolean) as TocItem[]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-100px 0px -66% 0px" }
    )

    headings.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length < 3) return null

  return (
    <nav className="hidden xl:block sticky top-24">
      <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">
        On this page
      </h4>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={cn(
                "block text-sm transition-colors",
                heading.level === 2 ? "pl-0" : "pl-4",
                activeId === heading.id
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
