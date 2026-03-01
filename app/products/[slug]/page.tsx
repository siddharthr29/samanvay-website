import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, Check } from "lucide-react"
import { Section } from "@/components/shared/section"
import { CTASection } from "@/components/blocks/cta-section"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { products } from "@/data/products"
import { projects } from "@/data/projects"
import { softwareJsonLd, breadcrumbJsonLd } from "@/lib/seo"
import { siteConfig } from "@/data/site-config"

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const product = products.find((p) => p.slug === slug)
    if (!product) return { title: "Product Not Found" }
    return {
      title: product.name,
      description: product.description,
    }
  })
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  const relatedProjects = projects.filter(p =>
    p.products.includes(product.name)
  ).slice(0, 4)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareJsonLd(product)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              { name: "Products", url: `${siteConfig.url}/products` },
              { name: product.name, url: `${siteConfig.url}/products/${product.slug}` },
            ])
          ),
        }}
      />

      {/* Product-colored gradient hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, #0f172a 0%, ${product.color}50 50%, #0f172a 100%)`,
          }}
        />
        <div className="absolute inset-0 dot-pattern opacity-15" />
        {/* Decorative orb */}
        <div
          className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-3xl opacity-15 -translate-y-1/2"
          style={{ backgroundColor: product.color }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <Breadcrumbs variant="light"
            items={[
              { label: "Products", href: "/products" },
              { label: product.name },
            ]}
          />

          <div className="max-w-4xl mt-4">
            <div className="flex items-center gap-4 mb-6">
              {product.logo ? (
                <div className="p-3 bg-white rounded-xl shadow-lg">
                  <Image
                    src={product.logo}
                    alt={`${product.name} logo`}
                    width={64}
                    height={64}
                    className="h-16 w-16 object-contain"
                  />
                </div>
              ) : (
                <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                  <span className="text-4xl block">{product.emoji}</span>
                </div>
              )}
              <span
                className="px-3 py-1 text-xs font-medium rounded-full text-white"
                style={{ backgroundColor: `${product.color}50` }}
              >
                {product.category === "built-by-us" ? "Built by Samanvay" : "Built for Partner"}
              </span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-white">
              {product.name}
            </h1>
            <p className="text-xl text-white/80 mb-2">{product.tagline}</p>
            <p
              className="text-sm font-medium mb-6"
              style={{ color: `${product.color}cc` }}
            >
              {product.impact}
            </p>

            <div className="flex items-center gap-4">
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/25"
              >
                Visit Website
                <ExternalLink className="h-4 w-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-xl hover:bg-white/20 transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-4xl">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-2xl font-bold mb-4">About {product.name}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {product.longDescription || product.description}
            </p>
          </div>

          {product.features && product.features.length > 0 && (
            <div>
              <h3 className="font-heading text-lg font-semibold mb-4">Key Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="h-5 w-5 shrink-0 mt-0.5" style={{ color: product.color }} />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Section>

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <Section className="bg-muted/30">
          <h2 className="font-heading text-2xl font-bold mb-8">
            Projects using {product.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
            {relatedProjects.map((project) => (
              <div key={project.partner} className="p-5 rounded-xl border bg-card">
                <h3 className="font-heading font-semibold mb-2">{project.partner}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section className="pt-0">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all products
        </Link>
        <CTASection
          title={`Interested in ${product.name}?`}
          description="Let us help you evaluate and implement this product for your organization."
        />
      </Section>
    </>
  )
}
