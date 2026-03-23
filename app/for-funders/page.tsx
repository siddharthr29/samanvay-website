import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Mail,
  Shield,
  WifiOff,
  Code,
  Server,
  Wrench,
  DollarSign,
  CheckCircle2,
  Building2,
  FileText,
  Award,
} from "lucide-react"
import { Section } from "@/components/shared/section"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/data/site-config"
import { breadcrumbJsonLd } from "@/lib/seo"
import { products } from "@/data/products"
import { ImpactCounters } from "./impact-counters"

export const metadata: Metadata = {
  title: "For Funders & Partners — Samanvay Foundation",
  description:
    "CSR-1 registered. Section 8 nonprofit. Partner with Samanvay to build open-source digital infrastructure for India's social sector.",
}

const gapCards = [
  {
    icon: Server,
    title: "Corporate MIS tools don't fit",
    description:
      "They assume reliable connectivity, standardized workflows, and centralized IT teams. Grassroots nonprofits have none of these.",
  },
  {
    icon: Wrench,
    title: "Volunteer-built tools don't last",
    description:
      "Well-intentioned but unsustainable. No maintenance plan, no evolution path. When the volunteer moves on, so does the tool.",
  },
  {
    icon: DollarSign,
    title: "Custom software is expensive and brittle",
    description:
      "Organization-specific builds can't scale. Each new deployment starts from scratch. The sector rebuilds the same wheel repeatedly.",
  },
]

const caseStudies = [
  {
    org: "Jan Swasthya Sahyog (JSS)",
    stat: "From 12 paper registers to real-time health tracking",
    description:
      "Village health workers in the Achanakmar Tiger Reserve now use Avni for pregnancy tracking, TB management, and chronic disease monitoring. JSS designs and deploys new modules independently.",
  },
  {
    org: "Calcutta Kids",
    stat: "Urban maternal health digitized",
    description:
      "Migrated from a data-entry system to field-worker-driven community health tracking. Real-time data on maternal and child health across urban Kolkata.",
  },
  {
    org: "UNICEF",
    stat: "State-level deployment",
    description:
      "Maternal death surveillance and response system deployed in Maharashtra. Avni enables real-time tracking and systemic analysis of maternal health outcomes.",
  },
]

const registrations = [
  { label: "Section 8 Company", icon: Building2 },
  { label: "80G Certificate", icon: FileText },
  { label: "12A Registration", icon: Award },
  { label: "CSR-1 Registration", icon: Shield },
]

export default function ForFundersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              {
                name: "For Funders",
                url: `${siteConfig.url}/for-funders`,
              },
            ])
          ),
        }}
      />


      {/* HERO: Warm gradient */}
      <section className="relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&q=80"
          alt="Partnership handshake"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] via-[#1E2D4A] to-[#E8913A]/30" />
        <div className="absolute inset-0 dot-pattern opacity-15" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[100px] animate-float-slow" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-amber-500/5 blur-[80px] animate-float-slower" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 md:py-36">
          <div className="max-w-3xl mt-6">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold mb-8 text-white tracking-tight">
              Investing in Digital Infrastructure for{" "}
              <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
                Social Change
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-200 leading-relaxed max-w-2xl">
              Partner with us to build technology that nonprofits can own.
            </p>
          </div>
        </div>
      </section>

      {/* THE CASE: Why Digital Infrastructure Matters */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-center tracking-tight">
            Why Digital Infrastructure Matters
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            The social sector faces a unique technology gap that off-the-shelf
            solutions cannot fill.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gapCards.map((card) => {
              const Icon = card.icon
              return (
                <div
                  key={card.title}
                  className="p-8 rounded-2xl border bg-card hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#D97706]/10 flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-[#D97706]" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </Section>

      {/* THEORY OF CHANGE */}
      <section className="relative py-16 md:py-24 bg-muted/30 overflow-hidden">
        <div className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full bg-amber-100/30 dark:bg-amber-900/10 blur-[80px] animate-float-slow" />
        <div className="absolute bottom-10 -left-20 w-[350px] h-[350px] rounded-full bg-orange-100/20 dark:bg-orange-900/5 blur-[80px] animate-float-slower" />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-16 text-center tracking-tight">
            Theory of Change
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                stage: "Problem",
                color: "#F44336",
                content:
                  "Complex community programs managed through paper systems",
              },
              {
                stage: "Approach",
                color: "#2196F3",
                content:
                  "Open-source, offline-first platforms that nonprofits own",
              },
              {
                stage: "Outcomes",
                color: "#4CAF50",
                content:
                  "Better decisions, real-time data, self-reliant organizations, ecosystem growth",
              },
              {
                stage: "Vision",
                color: "#E8913A",
                content:
                  "Digital infrastructure as reliable as physical infrastructure",
              },
            ].map((item, i) => (
              <div key={item.stage} className="relative">
                <div
                  className="p-6 md:p-8 rounded-2xl border bg-card h-full hover:shadow-md transition-shadow"
                  style={{
                    borderTopColor: item.color,
                    borderTopWidth: "4px",
                  }}
                >
                  <span
                    className="text-xs font-bold uppercase tracking-[0.15em]"
                    style={{ color: item.color }}
                  >
                    {item.stage}
                  </span>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-3">
                    {item.content}
                  </p>
                </div>
                {i < 3 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-muted items-center justify-center">
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* IMPACT EVIDENCE */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-center tracking-tight">
            Impact Evidence
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Numbers that represent real systems working in real communities.
          </p>

          <ImpactCounters />

          <div className="relative h-48 md:h-64 w-full overflow-hidden rounded-2xl mt-14 mb-14">
            <Image src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80" alt="Community children in India" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-950 via-transparent to-white/50 dark:to-zinc-950/50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.org}
                className="p-8 md:p-10 rounded-2xl border bg-card hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="font-heading text-lg font-bold mb-2">{study.org}</h3>
                <p className="text-base font-medium text-amber-600 mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif', fontStyle: 'italic' }}>
                  {study.stat}
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {study.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* OUR PRODUCTS */}
      <Section className="bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-center tracking-tight">
            Our Products
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Six open-source products purpose-built for the social sector.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group p-5 rounded-xl border bg-card hover:shadow-md transition-all hover:-translate-y-0.5"
                style={{
                  borderLeftColor: product.color,
                  borderLeftWidth: "3px",
                }}
              >
                <h3 className="font-heading font-bold group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  {product.tagline}
                </p>
                <p
                  className="text-xs font-medium mt-2"
                  style={{ color: product.color }}
                >
                  {product.impact}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* TRUST SIGNALS */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-center">
            Registrations &amp; Compliance
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
            {registrations.map((reg) => {
              const Icon = reg.icon
              return (
                <div
                  key={reg.label}
                  className="p-6 md:p-8 rounded-2xl border-2 border-green-500/20 bg-green-50/50 dark:bg-green-950/10 text-center hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-7 w-7 text-green-600" />
                  </div>
                  <p className="text-base font-semibold">{reg.label}</p>
                </div>
              )
            })}
          </div>

          <div className="text-center">
            <h3 className="font-heading text-lg font-semibold mb-4">
              Annual Reports
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {["2023-24", "2022-23", "2021-22"].map((year) => (
                <span
                  key={year}
                  className="px-4 py-2 rounded-lg border text-sm text-muted-foreground cursor-default"
                >
                  {year}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* PARTNERSHIP CTA */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] via-[#1E2D4A] to-[#0B1120]" />
        <div className="absolute inset-0 dot-pattern opacity-15" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <p
            className="text-xl md:text-2xl lg:text-3xl text-zinc-200 leading-relaxed mb-12"
            style={{ fontFamily: 'Playfair Display, Georgia, serif', fontStyle: 'italic' }}
          >
            We&apos;re looking for partners who see this as a systems challenge,
            not a product challenge.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/25 rounded-xl px-8 h-12 min-h-[48px]"
            >
              <Link href="/contact">
                Schedule a Conversation
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/5 border-white/20 text-white hover:bg-white/15 hover:text-white backdrop-blur-sm rounded-xl px-8 h-12 min-h-[48px]"
            >
              <a href={`mailto:${siteConfig.emails.general}`}>
                <Mail className="h-4 w-4 mr-2" />
                Email Us
              </a>
            </Button>
          </div>

          <p className="text-sm text-white/50">{siteConfig.emails.general}</p>
        </div>
      </section>
    </>
  )
}
