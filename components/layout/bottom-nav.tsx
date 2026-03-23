"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Package, Map, BookOpen, MoreHorizontal, X, Heart, Users, Newspaper, Briefcase, BookOpenText, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"

const bottomNavItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Products", href: "/products", icon: Package },
  { label: "Our Work", href: "/our-work", icon: Map },
  { label: "Story", href: "/story", icon: BookOpen },
]

const moreLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "Products", href: "/products", icon: Package },
  { label: "Our Work", href: "/our-work", icon: Map },
  { label: "The Story", href: "/story", icon: BookOpen },
  { label: "About Us", href: "/about-us", icon: Users },
  { label: "For Funders", href: "/for-funders", icon: Heart },
  { label: "Articles", href: "/articles", icon: Newspaper },
  { label: "Join Us", href: "/join-us", icon: Briefcase },
  { label: "Books", href: "/books", icon: BookOpenText },
  { label: "Contact", href: "/contact", icon: Mail },
]

function haptic() {
  if (typeof navigator !== "undefined" && navigator.vibrate) {
    navigator.vibrate(10)
  }
}

export function BottomNav() {
  const [moreOpen, setMoreOpen] = useState(false)
  const pathname = usePathname()

  const toggleMore = useCallback(() => {
    haptic()
    setMoreOpen((prev) => !prev)
  }, [])

  const handleNavTap = useCallback(() => {
    haptic()
    setMoreOpen(false)
  }, [])

  return (
    <>
      {/* Full-screen "More" overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden transition-opacity duration-200",
          moreOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 pt-[env(safe-area-inset-top,12px)] pb-4 mt-3">
            <h2 className="font-heading text-xl font-semibold">Navigate</h2>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={toggleMore}
                className="p-3 rounded-full bg-muted min-h-[48px] min-w-[48px] flex items-center justify-center"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Links grid */}
          <div className="flex-1 overflow-y-auto px-6 pb-32">
            <div className="grid grid-cols-2 gap-3">
              {moreLinks.map((item) => {
                const isActive = pathname === item.href
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleNavTap}
                    className={cn(
                      "flex items-center gap-3 px-4 py-4 rounded-xl transition-colors min-h-[56px]",
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "bg-muted/50 text-foreground hover:bg-muted"
                    )}
                  >
                    <Icon className="h-5 w-5 shrink-0" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                )
              })}
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              onClick={handleNavTap}
              className="mt-6 flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#E8913A] text-white font-semibold text-base min-h-[56px]"
            >
              <Mail className="h-5 w-5" />
              Partner With Us
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <nav
        aria-label="Mobile navigation"
        className={cn(
          "fixed bottom-0 left-0 right-0 z-50 md:hidden",
          "bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border-t border-zinc-200 dark:border-zinc-800"
        )}
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        <div className="flex items-center justify-around px-2 h-16">
          {bottomNavItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNavTap}
                className="flex flex-col items-center justify-center gap-0.5 min-w-[48px] min-h-[48px] py-1 relative"
              >
                {isActive && (
                  <span
                    className="absolute -top-1 w-1.5 h-1.5 rounded-full bg-[#E8913A] nav-dot-appear"
                  />
                )}
                <Icon
                  className={cn(
                    "h-5 w-5 transition-colors",
                    isActive ? "text-[#E8913A]" : "text-muted-foreground"
                  )}
                />
                <span
                  className={cn(
                    "text-[10px] leading-tight transition-colors",
                    isActive ? "text-[#E8913A] font-medium" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            )
          })}

          {/* More button */}
          <button
            onClick={toggleMore}
            aria-label="More navigation options"
          aria-expanded={moreOpen}
          className="flex flex-col items-center justify-center gap-0.5 min-w-[48px] min-h-[48px] py-1 relative"
          >
            {moreOpen && (
              <span
                className="absolute -top-1 w-1.5 h-1.5 rounded-full bg-[#E8913A] nav-dot-appear"
              />
            )}
            <MoreHorizontal
              className={cn(
                "h-5 w-5 transition-colors",
                moreOpen ? "text-[#E8913A]" : "text-muted-foreground"
              )}
            />
            <span
              className={cn(
                "text-[10px] leading-tight transition-colors",
                moreOpen ? "text-[#E8913A] font-medium" : "text-muted-foreground"
              )}
            >
              More
            </span>
          </button>
        </div>
      </nav>
    </>
  )
}
