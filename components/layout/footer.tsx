import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Github, Linkedin } from "lucide-react"
import { siteConfig } from "@/data/site-config"
import { navigation } from "@/data/navigation"

const resources = [
  { label: "Use Cases", href: "/use-cases" },
  { label: "Product Comparisons", href: "/compare" },
  { label: "Health Tech Glossary", href: "/glossary" },
]

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      {/* Gradient separator */}
      <div className="h-1 bg-gradient-to-r from-orange-500 via-blue-500 to-orange-500" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logos/samanvay-logo.webp"
                alt="Samanvay Foundation"
                width={120}
                height={36}
                className="h-8 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              {siteConfig.tagline}
            </p>
            <p className="mt-2 text-sm text-slate-400">
              {siteConfig.type}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-slate-200">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-slate-200">
              Products
            </h3>
            <ul className="space-y-2">
              {["Avni", "Bahmni", "Gunak", "TeleSathi", "Shwaas"].map((product) => (
                <li key={product}>
                  <Link
                    href={`/products/${product.toLowerCase()}`}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-slate-200">
              Resources
            </h3>
            <ul className="space-y-2">
              {resources.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Ask AI links */}
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mt-5 mb-3 text-slate-200">
              Ask AI About Us
            </h3>
            <div className="flex flex-wrap gap-x-2 gap-y-1">
              {[
                { label: "ChatGPT", url: siteConfig.aiPrompts.chatgpt },
                { label: "Perplexity", url: siteConfig.aiPrompts.perplexity },
                { label: "Claude", url: siteConfig.aiPrompts.claude },
                { label: "Gemini", url: siteConfig.aiPrompts.gemini },
                { label: "Grok", url: siteConfig.aiPrompts.grok },
              ].map((ai, i) => (
                <span key={ai.label} className="flex items-center gap-1">
                  {i > 0 && <span className="text-slate-600">·</span>}
                  <a
                    href={ai.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    {ai.label}
                  </a>
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-slate-200">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-slate-500" />
                <a href={`mailto:${siteConfig.emails.general}`} className="hover:text-white transition-colors">
                  {siteConfig.emails.general}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-slate-500" />
                <span>{siteConfig.addresses.office.address}</span>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-4">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved.</p>
          <p className="text-xs">Built with Next.js, open source, and purpose.</p>
        </div>
      </div>
    </footer>
  )
}
