import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  compact?: boolean
}

export function Section({ children, className, id, compact }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        compact ? "py-12 md:py-16" : "py-16 md:py-24",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}
