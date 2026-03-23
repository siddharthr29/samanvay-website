"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Products", href: "/products" },
  { label: "Our Work", href: "/our-work" },
  { label: "Story", href: "/story" },
  { label: "About", href: "/about-us" },
  { label: "For Funders", href: "/for-funders" },
  { label: "Articles", href: "/articles" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Pages with dark hero backgrounds need white text initially
  const darkHeroPages = ["/products", "/our-work", "/story", "/for-funders", "/join-us", "/contact"]
  const hasDarkHero = darkHeroPages.some(p => pathname === p || pathname.startsWith(p + "/"))
  const isLight = scrolled || !hasDarkHero

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white shadow-md border-b border-zinc-100"
          : hasDarkHero
            ? "bg-transparent"
            : "bg-white/80 backdrop-blur-xl"
      )}
    >
      <nav aria-label="Main navigation" className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-16 md:h-[72px] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logos/samanvay-logo.webp"
              alt="Samanvay Foundation"
              width={180}
              height={48}
              className={cn(
                "h-10 md:h-11 w-auto object-contain transition-all duration-300",
                !isLight && "brightness-0 invert"
              )}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3.5 py-2 text-[13px] font-semibold rounded-lg transition-all duration-200",
                    isActive
                      ? "text-amber-700 bg-amber-50"
                      : isLight
                        ? "text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className={cn(
                "hidden md:inline-flex items-center font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-300",
                isLight
                  ? "bg-amber-600 text-white hover:bg-amber-700 shadow-sm"
                  : "bg-white text-zinc-900 hover:bg-zinc-100"
              )}
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
