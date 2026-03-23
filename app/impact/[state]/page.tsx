import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, MapPin } from "lucide-react"
import { Section } from "@/components/shared/section"
import { CTASection } from "@/components/blocks/cta-section"
import { Badge } from "@/components/ui/badge"
import { states } from "@/data/states"
import { products } from "@/data/products"
import { breadcrumbJsonLd } from "@/lib/seo"
import { siteConfig } from "@/data/site-config"

export function generateStaticParams() {
  return states.map((s) => ({ state: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state: slug } = await params
  const state = states.find((s) => s.slug === slug)
  if (!state) return { title: "State Not Found" }
  const title = `Samanvay Foundation in ${state.name}`
  const description = `Open-source technology for social programs in ${state.name}. ${state.partners.length > 0 ? `Partners: ${state.partners.join(", ")}.` : ""} Products: ${state.products.join(", ")}.`
  return {
    title,
    description,
    openGraph: {
      title: `${title} | Samanvay Foundation`,
      description,
      type: "website",
      url: `${siteConfig.url}/impact/${state.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Samanvay Foundation`,
      description,
    },
    alternates: {
      canonical: `${siteConfig.url}/impact/${state.slug}`,
    },
  }
}

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state: slug } = await params
  const state = states.find((s) => s.slug === slug)

  if (!state) notFound()

  const stateProducts = products.filter((p) => state.products.includes(p.slug))
  const otherStates = states.filter((s) => s.slug !== state.slug).slice(0, 4)

  const areaServedJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Samanvay Foundation in ${state.name}`,
    description: state.description,
    url: `${siteConfig.url}/impact/${state.slug}`,
    about: {
      "@type": "Organization",
      name: siteConfig.fullName,
      areaServed: {
        "@type": "AdministrativeArea",
        name: state.name,
        containedInPlace: {
          "@type": "Country",
          name: "India",
        },
      },
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
              { name: "Impact", url: `${siteConfig.url}/impact` },
              { name: state.name, url: `${siteConfig.url}/impact/${state.slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaServedJsonLd) }}
      />


      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f2847]" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl mt-4">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-orange-400" />
              <span className="text-sm text-slate-400">{state.capital}, {state.name}</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-white">
              Samanvay Foundation in {state.name}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">{state.description}</p>
          </div>
        </div>
      </section>

      {/* Products Active */}
      <Section compact>
        <div className="max-w-3xl">
          <h2 className="font-heading text-xl font-bold mb-4">
            Products Active in {state.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {stateProducts.map((product) => (
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

      {/* Partners */}
      {state.partners.length > 0 && (
        <Section compact className="bg-muted/30">
          <div className="max-w-3xl">
            <h2 className="font-heading text-xl font-bold mb-4">
              Partner Organizations in {state.name}
            </h2>
            <div className="flex flex-wrap gap-2">
              {state.partners.map((partner) => (
                <span
                  key={partner}
                  className="px-4 py-2 text-sm font-medium bg-card border rounded-lg"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Other States */}
      <Section compact>
        <div className="max-w-3xl">
          <h2 className="font-heading text-xl font-bold mb-4">
            Our Work in Other States
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {otherStates.map((other) => (
              <Link
                key={other.slug}
                href={`/impact/${other.slug}`}
                className="p-3 rounded-xl border bg-card hover:shadow-sm transition-shadow text-center"
              >
                <MapPin className="h-4 w-4 text-primary mx-auto mb-1" />
                <h3 className="font-semibold text-sm">{other.name}</h3>
                <p className="text-xs text-muted-foreground">{other.capital}</p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section compact>
        <div className="max-w-3xl">
          <Link
            href="/impact"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            All states
          </Link>
          <CTASection
            title={`Working in ${state.name}?`}
            description={`Let us help your organization in ${state.name} adopt open-source technology for greater impact.`}
          />
        </div>
      </Section>
    </>
  )
}
