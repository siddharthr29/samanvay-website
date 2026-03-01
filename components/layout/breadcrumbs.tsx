import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  variant?: "default" | "light"
}

export function Breadcrumbs({ items, variant = "default" }: BreadcrumbsProps) {
  const isLight = variant === "light"
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className={cn(
        "flex items-center gap-1.5 text-sm",
        isLight ? "text-white/70" : "text-muted-foreground"
      )}>
        <li>
          <Link
            href="/"
            className={cn(
              "transition-colors",
              isLight ? "hover:text-white" : "hover:text-foreground"
            )}
          >
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            <ChevronRight className="h-3 w-3" />
            {item.href ? (
              <Link
                href={item.href}
                className={cn(
                  "transition-colors",
                  isLight ? "hover:text-white" : "hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            ) : (
              <span className={cn(
                "font-medium",
                isLight ? "text-white" : "text-foreground"
              )}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
