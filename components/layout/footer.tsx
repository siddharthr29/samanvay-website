"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Github, Linkedin, ExternalLink } from "lucide-react"
import { siteConfig } from "@/data/site-config"

const links = {
  company: [
    { label: "About Us", href: "/about-us" },
    { label: "Our Story", href: "/story" },
    { label: "Our Work", href: "/our-work" },
    { label: "For Funders", href: "/for-funders" },
    { label: "Join Us", href: "/join-us" },
    { label: "Contact", href: "/contact" },
  ],
  products: [
    { label: "Avni", href: "/products/avni" },
    { label: "Bahmni", href: "/products/bahmni" },
    { label: "Gunak", href: "/products/gunak" },
    { label: "TeleSathi", href: "/products/telesathi" },
    { label: "Shwaas", href: "/products/shwaas" },
    { label: "Mentor To Go", href: "/products/mentor-to-go" },
  ],
  resources: [
    { label: "Articles", href: "/articles" },
    { label: "Books", href: "/books" },
    { label: "Glossary", href: "/glossary" },
    { label: "Use Cases", href: "/use-cases" },
    { label: "Sectors", href: "/sectors" },
  ],
}

export function Footer() {
  return (
    <footer className="relative bg-zinc-900 text-zinc-300 overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 pattern-dots opacity-50" />
      {/* Amber accent line */}
      <div className="h-1 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-8 md:pt-20 md:pb-10">
        {/* Top: Logo + tagline */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-14">
          <div className="max-w-sm">
            <Image
              src="/images/logos/samanvay-logo.webp"
              alt="Samanvay Foundation"
              width={160}
              height={44}
              className="h-10 w-auto brightness-0 invert mb-4"
            />
            <p className="text-sm text-zinc-400 leading-relaxed">
              Building open-source digital infrastructure for India&apos;s social sector since 2016. Deep engineering, grassroots understanding.
            </p>
            <div className="flex gap-2 mt-5">
              <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="p-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="p-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Company</h3>
              <ul className="space-y-2.5">
                {links.company.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-zinc-400 hover:text-white transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Products</h3>
              <ul className="space-y-2.5">
                {links.products.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-zinc-400 hover:text-white transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Resources</h3>
              <ul className="space-y-2.5">
                {links.resources.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-zinc-400 hover:text-white transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
              {/* Contact */}
              <div className="mt-6 space-y-2">
                <a href={`mailto:${siteConfig.emails.general}`} className="flex items-center gap-2 text-sm text-zinc-400 hover:text-amber-400 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-amber-500" />
                  <span className="break-all">{siteConfig.emails.general}</span>
                </a>
                <div className="flex items-start gap-2 text-sm text-zinc-400">
                  <MapPin className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                  <span>Indiranagar, Bangalore</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-zinc-800 mb-6" />

        {/* Bottom: Legal + registrations */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-xs text-zinc-500">
          <div className="space-y-1">
            <p>&copy; {new Date().getFullYear()} {siteConfig.fullName}</p>
            <p>CIN: U74999KA2016NPL097550 &middot; Incorporated: 2nd November 2016</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-zinc-800 text-zinc-400 font-medium">Section-8</span>
            <span className="px-2.5 py-1 rounded bg-zinc-800 text-zinc-400 font-medium">80G</span>
            <span className="px-2.5 py-1 rounded bg-zinc-800 text-zinc-400 font-medium">12A</span>
            <span className="px-2.5 py-1 rounded bg-zinc-800 text-zinc-400 font-medium">CSR-1</span>
          </div>
        </div>
      </div>

      {/* Bottom nav clearance on mobile */}
      <div className="h-20 md:h-0" />
    </footer>
  )
}
