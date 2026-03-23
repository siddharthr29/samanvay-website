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
    <div className={cn("mb-12 md:mb-16", align === "center" && "text-center")}>
      {badge && (
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full tracking-wide uppercase">
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "font-heading text-4xl md:text-5xl font-bold mb-6 tracking-tight",
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
            "text-muted-foreground text-lg md:text-xl leading-relaxed",
            align === "center" && "max-w-2xl mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-6 h-1 w-20 rounded-full",
          gradient === "warm"
            ? "bg-gradient-to-r from-accent to-red-500"
            : "bg-gradient-to-r from-primary to-blue-400",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  )
}
