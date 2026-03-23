import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Check, AlertTriangle, Lightbulb } from "lucide-react"
import { Section } from "@/components/shared/section"
import { CTASection } from "@/components/blocks/cta-section"
import { Badge } from "@/components/ui/badge"
import { sectors } from "@/data/sectors"
import { products } from "@/data/products"
import { breadcrumbJsonLd } from "@/lib/seo"
import { siteConfig } from "@/data/site-config"

export function generateStaticParams() {
  return sectors.map((s) => ({ sector: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ sector: string }> }): Promise<Metadata> {
  const { sector: slug } = await params
  const sector = sectors.find((s) => s.slug === slug)
  if (!sector) return { title: "Sector Not Found" }
  return {
    title: sector.title,
    description: sector.description,
    openGraph: {
      title: `${sector.title} | Samanvay Foundation`,
      description: sector.description,
      type: "website",
      url: `${siteConfig.url}/sectors/${sector.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${sector.title} | Samanvay Foundation`,
      description: sector.description,
    },
    alternates: {
      canonical: `${siteConfig.url}/sectors/${sector.slug}`,
    },
  }
}

export default async function SectorPage({ params }: { params: Promise<{ sector: string }> }) {
  const { sector: slug } = await params
  const sector = sectors.find((s) => s.slug === slug)

  if (!sector) notFound()

  const relatedProducts = products.filter((p) =>
    sector.products.includes(p.slug)
  )
  const otherSectors = sectors.filter((s) => s.slug !== sector.slug).slice(0, 3)

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: sector.title,
    description: sector.description,
    url: `${siteConfig.url}/sectors/${sector.slug}`,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: {
      "@type": "Thing",
      name: sector.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.fullName,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              { name: "Sectors", url: `${siteConfig.url}/sectors` },
              { name: sector.name, url: `${siteConfig.url}/sectors/${sector.slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />


      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f2847]" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl mt-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">{sector.emoji}</span>
              <Badge variant="secondary" className="bg-white/10 text-blue-200 border-0">
                {sector.products.join(" + ").toUpperCase()}
              </Badge>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-white">
              {sector.title}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">{sector.description}</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      {Object.keys(sector.stats).length > 0 && (
        <Section compact>
          <div className="max-w-3xl">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {Object.entries(sector.stats).map(([key, value]) => (
                <div
                  key={key}
                  className="p-4 rounded-xl border bg-card text-center"
                >
                  <div className="text-2xl font-bold text-primary">{value}</div>
                  <div className="text-sm text-muted-foreground capitalize">{key}</div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Challenges */}
      <Section compact className={Object.keys(sector.stats).length > 0 ? "" : ""}>
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="h-5 w-5 text-orange-500" />
            <h2 className="font-heading text-2xl font-bold">The Challenge</h2>
          </div>
          <ul className="space-y-3">
            {sector.challenges.map((challenge) => (
              <li key={challenge} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 mt-2" />
                <span className="text-muted-foreground leading-relaxed">{challenge}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Solutions */}
      <Section compact className="bg-muted/30">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="h-5 w-5 text-primary" />
            <h2 className="font-heading text-2xl font-bold">How We Help</h2>
          </div>
          <ul className="space-y-3">
            {sector.solutions.map((solution) => (
              <li key={solution} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground leading-relaxed">{solution}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Products Used */}
      {relatedProducts.length > 0 && (
        <Section compact>
          <div className="max-w-3xl">
            <h2 className="font-heading text-xl font-bold mb-4">Products Used</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedProducts.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="p-4 rounded-xl border bg-card hover:shadow-sm transition-shadow flex items-center gap-3"
                >
                  <span className="text-2xl">{product.emoji}</span>
                  <div>
                    <h3 className="font-semibold text-sm">{product.name}</h3>
                    <p className="text-xs text-muted-foreground">{product.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Partners */}
      {sector.partners.length > 0 && (
        <Section compact className="bg-muted/30">
          <div className="max-w-3xl">
            <h2 className="font-heading text-xl font-bold mb-4">
              Partner Organizations
            </h2>
            <div className="flex flex-wrap gap-2">
              {sector.partners.map((partner) => (
                <span
                  key={partner}
                  className="px-3 py-1.5 text-sm font-medium bg-card border rounded-lg"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Other Sectors */}
      {otherSectors.length > 0 && (
        <Section compact>
          <div className="max-w-3xl">
            <h2 className="font-heading text-xl font-bold mb-4">
              Other Sectors We Serve
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {otherSectors.map((other) => (
                <Link
                  key={other.slug}
                  href={`/sectors/${other.slug}`}
                  className="p-4 rounded-xl border bg-card hover:shadow-sm transition-shadow"
                >
                  <span className="text-xl mr-2">{other.emoji}</span>
                  <h3 className="font-semibold text-sm mt-2">{other.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section compact>
        <div className="max-w-3xl">
          <Link
            href="/sectors"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            All sectors
          </Link>
          <CTASection
            title={`Explore how we can help your ${sector.name.toLowerCase()} program`}
            description={`Our ${sector.products.join(" and ")} products are designed for the specific constraints of ${sector.name.toLowerCase()} programs in India.`}
          />
        </div>
      </Section>
    </>
  )
}
