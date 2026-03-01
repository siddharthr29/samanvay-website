"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { navigation } from "@/data/navigation"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Gradient accent line at top */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500" />

      <header
        className={cn(
          "fixed top-0.5 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b shadow-sm"
            : "bg-background/60 backdrop-blur-sm"
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/images/logos/samanvay-logo.webp"
                alt="Samanvay Foundation"
                width={120}
                height={36}
                className="h-8 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navigation.map((item) => {
                const isContact = item.href === "/contact"
                const isActive = pathname === item.href

                if (isContact) {
                  return (
                    <Button key={item.href} asChild size="sm" className="ml-2">
                      <Link href={item.href}>{item.label}</Link>
                    </Button>
                  )
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-0.5 bg-primary rounded-full" />
                    )}
                  </Link>
                )
              })}
              <div className="ml-2">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile menu */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-72">
                  <SheetHeader>
                    <SheetTitle>
                      <Image
                        src="/images/logos/samanvay-logo.webp"
                        alt="Samanvay Foundation"
                        width={100}
                        height={30}
                        className="h-7 w-auto object-contain"
                      />
                    </SheetTitle>
                  </SheetHeader>
                  <Separator className="my-4" />
                  <div className="space-y-1">
                    {navigation.map((item) => {
                      const isActive = pathname === item.href
                      const isContact = item.href === "/contact"

                      if (isContact) {
                        return (
                          <Button key={item.href} asChild className="w-full mt-4">
                            <Link href={item.href} onClick={() => setIsOpen(false)}>
                              {item.label}
                            </Link>
                          </Button>
                        )
                      }

                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors",
                            isActive
                              ? "text-primary bg-primary/10"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted"
                          )}
                        >
                          {item.label}
                        </Link>
                      )
                    })}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
