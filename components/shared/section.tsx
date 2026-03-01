"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  compact?: boolean
}

export function Section({ children, className, id, compact }: SectionProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        compact ? "py-8 md:py-12" : "py-12 md:py-16",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </motion.section>
  )
}
