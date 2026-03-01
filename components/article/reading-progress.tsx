"use client"

import { useState, useEffect } from "react"
import { Clock } from "lucide-react"

interface ReadingProgressProps {
  readTime: number
}

export function ReadingProgress({ readTime }: ReadingProgressProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight > 0) {
        setProgress(Math.min(Math.round((scrollTop / docHeight) * 100), 100))
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Fixed top progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-muted">
        <div
          className="h-full bg-gradient-to-r from-orange-500 to-orange-400 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Floating pill: read time + completion */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-2 bg-card/90 backdrop-blur-md border rounded-full shadow-lg text-sm">
        <Clock className="h-3.5 w-3.5 text-muted-foreground" />
        <span className="text-muted-foreground">{readTime} min read</span>
        <span className="text-muted-foreground">·</span>
        <span className="font-medium tabular-nums" style={{ minWidth: '2.5ch' }}>{progress}%</span>
      </div>
    </>
  )
}
