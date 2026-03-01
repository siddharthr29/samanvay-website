import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Check } from "lucide-react"
import { Section } from "@/components/shared/section"
import { CTASection } from "@/components/blocks/cta-section"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { useCases } from "@/data/use-cases"
import { products } from "@/data/products"
import { breadcrumbJsonLd } from "@/lib/seo"
import { siteConfig } from "@/data/site-config"

export function generateStaticParams() {
  return useCases.map((uc) => ({ slug: uc.slug }))
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const uc = useCases.find((u) => u.slug === slug)
    if (!uc) return { title: "Use Case Not Found" }
    return {
      title: uc.title,
      description: uc.description,
    }
  })
}

export default async function UseCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const uc = useCases.find((u) => u.slug === slug)

  if (!uc) notFound()

  const relatedProducts = products.filter(p => uc.products.includes(p.name))
  const otherUseCases = useCases.filter(u => u.slug !== uc.slug).slice(0, 2)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              { name: "Use Cases", url: `${siteConfig.url}/use-cases` },
              { name: uc.title, url: `${siteConfig.url}/use-cases/${uc.slug}` },
            ])
          ),
        }}
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f2847]" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <Breadcrumbs items={[{ label: "Use Cases", href: "/use-cases" }, { label: uc.sector }]} variant="light" />
          <div className="max-w-3xl mt-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">{uc.sectorEmoji}</span>
              <span className="px-3 py-1 text-xs font-medium bg-white/10 text-blue-200 rounded-full">
                {uc.sector}
              </span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-white">
              {uc.title}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              {uc.description}
            </p>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <Section>
        <div className="max-w-3xl">
          <h2 className="font-heading text-2xl font-bold mb-4">The Challenge</h2>
          <p className="text-muted-foreground leading-relaxed">{uc.challenge}</p>
        </div>
      </Section>

      {/* Solution */}
      <Section compact className="bg-muted/30">
        <div className="max-w-3xl">
          <h2 className="font-heading text-2xl font-bold mb-4">The Solution</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">{uc.solution}</p>

          <h3 className="font-heading text-lg font-semibold mb-3">Key Benefits</h3>
          <ul className="space-y-2">
            {uc.benefits.map(benefit => (
              <li key={benefit} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Products used */}
      <Section compact>
        <div className="max-w-3xl">
          <h2 className="font-heading text-xl font-bold mb-4">Products Used</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedProducts.map(product => (
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

      {/* Example partners */}
      {uc.examplePartners.length > 0 && (
        <Section compact className="bg-muted/30">
          <div className="max-w-3xl">
            <h2 className="font-heading text-xl font-bold mb-4">Organizations Using This</h2>
            <div className="flex flex-wrap gap-2">
              {uc.examplePartners.map(partner => (
                <span key={partner} className="px-3 py-1.5 text-sm font-medium bg-card border rounded-lg">
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Related use cases */}
      {otherUseCases.length > 0 && (
        <Section compact>
          <div className="max-w-3xl">
            <h2 className="font-heading text-xl font-bold mb-4">Other Use Cases</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {otherUseCases.map(other => (
                <Link
                  key={other.slug}
                  href={`/use-cases/${other.slug}`}
                  className="p-4 rounded-xl border bg-card hover:shadow-sm transition-shadow"
                >
                  <span className="text-xl mr-2">{other.sectorEmoji}</span>
                  <h3 className="font-semibold text-sm mt-2">{other.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      )}

      <Section compact>
        <div className="max-w-3xl">
          <Link
            href="/use-cases"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            All use cases
          </Link>
          <CTASection
            title="Need this solution?"
            description={`Let us help you implement ${uc.products.join(" and ")} for your ${uc.sector.toLowerCase()} program.`}
          />
        </div>
      </Section>
    </>
  )
}
