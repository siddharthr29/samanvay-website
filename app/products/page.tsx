import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Section } from "@/components/shared/section"
import { CTASection } from "@/components/blocks/cta-section"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { products } from "@/data/products"
import { breadcrumbJsonLd } from "@/lib/seo"
import { siteConfig } from "@/data/site-config"
import { getIcon } from "@/lib/icons"

export const metadata: Metadata = {
  title: "Products",
  description: "Open-source products developed by Samanvay — Avni, Bahmni, Gunak, TeleSathi, Shwaas, and more.",
}

function ProductLogo({ product }: { product: typeof products[number] }) {
  if (product.logo) {
    return (
      <div
        className="p-2 rounded-xl shrink-0 bg-white shadow-sm"
        style={{ borderColor: `${product.color}20`, borderWidth: 1 }}
      >
        <Image
          src={product.logo}
          alt={`${product.name} logo`}
          width={32}
          height={32}
          className="w-8 h-8 object-contain"
        />
      </div>
    )
  }
  const Icon = getIcon(product.icon)
  return (
    <div
      className="p-3 rounded-xl shrink-0"
      style={{ backgroundColor: `${product.color}15` }}
    >
      {Icon && <Icon className="h-6 w-6" style={{ color: product.color }} />}
    </div>
  )
}

export default function ProductsPage() {
  const builtByUs = products.filter(p => p.category === "built-by-us")
  const builtForPartners = products.filter(p => p.category === "built-for-partner")

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              { name: "Products", url: `${siteConfig.url}/products` },
            ])
          ),
        }}
      />

      <Section>
        <Breadcrumbs items={[{ label: "Products" }]} />
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Our Products
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Open-source products developed by Samanvay for the social sector.
            Products we have built and offer to organizations working in health,
            education, and community development.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <h2 className="font-heading text-2xl font-bold mb-8">Products We Have Built</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {builtByUs.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <ProductLogo product={product} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading text-xl font-bold group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {builtForPartners.length > 0 && (
        <Section className="pt-0">
          <h2 className="font-heading text-2xl font-bold mb-8">Built for Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {builtForPartners.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <ProductLogo product={product} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-heading text-xl font-bold group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <Section className="pt-0">
        <CTASection
          title="Need help choosing the right product?"
          description="We'll help you find the best solution for your organization's needs."
        />
      </Section>
    </>
  )
}
