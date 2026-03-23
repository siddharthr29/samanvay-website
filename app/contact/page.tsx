import { Metadata } from "next"
import Image from "next/image"
import { Mail, MapPin, Clock, Github, Linkedin, Shield } from "lucide-react"
import { ContactForm } from "@/components/blocks/contact-form"
import { siteConfig } from "@/data/site-config"
import { breadcrumbJsonLd } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Samanvay Foundation for technology consulting, product inquiries, or partnerships.",
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              { name: "Contact", url: `${siteConfig.url}/contact` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="relative bg-zinc-900 pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=1200&q=80"
          alt="Community gathering"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-zinc-900/70" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[100px] animate-float-slow" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-amber-500/5 blur-[80px] animate-float-slower" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Let&apos;s Build This <span className="text-amber-500">Together</span>
          </h1>
          <p className="mt-6 text-lg text-zinc-300 leading-relaxed max-w-2xl">
            Whether you&apos;re a nonprofit exploring digital tools, a funder seeking impact, or a developer wanting to contribute — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="relative py-16 md:py-24 bg-white dark:bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full bg-amber-100/30 dark:bg-amber-900/10 blur-[80px] animate-float-slow" />
        <div className="absolute bottom-10 -left-20 w-[350px] h-[350px] rounded-full bg-orange-100/20 dark:bg-orange-900/5 blur-[80px] animate-float-slower" />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-900/20 shrink-0">
                  <Mail className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">Email</h3>
                  <a href={`mailto:${siteConfig.emails.general}`} className="text-amber-600 hover:underline break-all">
                    {siteConfig.emails.general}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-900/20 shrink-0">
                  <Mail className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">Careers</h3>
                  <a href={`mailto:${siteConfig.emails.careers}`} className="text-amber-600 hover:underline break-all">
                    {siteConfig.emails.careers}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-900/20 shrink-0">
                  <MapPin className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">Office</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">{siteConfig.addresses.office.address}</p>
                  <a href={siteConfig.addresses.office.mapUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-amber-600 hover:underline mt-1 inline-block">
                    View on Google Maps
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-900/20 shrink-0">
                  <MapPin className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">Registered Address</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">{siteConfig.addresses.registered.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30">
                <Clock className="h-5 w-5 text-amber-600 shrink-0" />
                <p className="text-sm font-semibold text-zinc-900 dark:text-white">We respond within 48 hours</p>
              </div>

              <div className="flex items-center gap-3">
                <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                  className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-amber-300 dark:hover:border-amber-700 hover:bg-amber-50 dark:hover:bg-amber-900/10 transition-colors">
                  <Github className="h-5 w-5 text-zinc-600 dark:text-zinc-300" />
                </a>
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-amber-300 dark:hover:border-amber-700 hover:bg-amber-50 dark:hover:bg-amber-900/10 transition-colors">
                  <Linkedin className="h-5 w-5 text-zinc-600 dark:text-zinc-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-8 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {['Section-8 Company', 'CSR-1 Registered', '80G Certified'].map((badge) => (
              <div key={badge} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                <Shield className="h-4 w-4 text-amber-600" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-20 md:h-0" />
    </>
  )
}
