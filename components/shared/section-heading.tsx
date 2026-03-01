import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  badge?: string
  emoji?: string
  title: string
  subtitle?: string
  gradient?: "cool" | "warm"
  align?: "left" | "center"
}

export function SectionHeading({
  badge,
  emoji,
  title,
  subtitle,
  gradient,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-8", align === "center" && "text-center")}>
      {badge && (
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "font-heading text-3xl md:text-4xl font-bold mb-4",
          gradient === "cool" && "gradient-text",
          gradient === "warm" && "gradient-text-warm"
        )}
      >
        {emoji && <span className="mr-2">{emoji}</span>}
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-muted-foreground text-lg leading-relaxed",
            align === "center" && "max-w-2xl mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-4 h-1 w-16 rounded-full",
          gradient === "warm"
            ? "bg-gradient-to-r from-accent to-red-500"
            : "bg-gradient-to-r from-primary to-blue-400",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  )
}
