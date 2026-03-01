import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Section } from "@/components/shared/section"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { glossaryTerms, glossaryCategories } from "@/data/glossary"
import { products } from "@/data/products"
import { breadcrumbJsonLd } from "@/lib/seo"
import { siteConfig } from "@/data/site-config"

export function generateStaticParams() {
  return glossaryTerms.map((term) => ({ slug: term.slug }))
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const term = glossaryTerms.find((t) => t.slug === slug)
    if (!term) return { title: "Term Not Found" }
    return {
      title: `${term.term} — Health Tech Glossary`,
      description: term.definition,
    }
  })
}

export default async function GlossaryTermPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const term = glossaryTerms.find((t) => t.slug === slug)

  if (!term) notFound()

  const category = glossaryCategories.find(c => c.value === term.category)
  const relatedTermObjects = glossaryTerms.filter(t => term.relatedTerms.includes(t.slug))
  const relatedProductObjects = products.filter(p => term.relatedProducts?.includes(p.slug))

  const definedTermJsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.term,
    description: term.definition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Samanvay Health Technology Glossary",
      url: `${siteConfig.url}/glossary`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              { name: "Glossary", url: `${siteConfig.url}/glossary` },
              { name: term.term, url: `${siteConfig.url}/glossary/${term.slug}` },
            ])
          ),
        }}
      />

      <Section>
        <Breadcrumbs items={[{ label: "Glossary", href: "/glossary" }, { label: term.term }]} />
        <div className="max-w-3xl mt-4">
          {category && (
            <Badge variant="secondary" className="mb-4">
              {category.emoji} {category.label}
            </Badge>
          )}
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            {term.term}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-primary/30 pl-4">
            {term.definition}
          </p>
        </div>
      </Section>

      <Separator />

      <Section compact>
        <div className="max-w-3xl">
          <h2 className="font-heading text-xl font-bold mb-4">In Depth</h2>
          <div className="prose prose-sm text-muted-foreground leading-relaxed">
            <p>{term.longDescription}</p>
          </div>
        </div>
      </Section>

      {relatedProductObjects.length > 0 && (
        <Section compact className="bg-muted/30">
          <div className="max-w-3xl">
            <h2 className="font-heading text-xl font-bold mb-4">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedProductObjects.map(product => (
                <Link key={product.slug} href={`/products/${product.slug}`}>
                  <Card className="hover:shadow-sm transition-shadow">
                    <CardContent className="flex items-center gap-3">
                      <span className="text-2xl">{product.emoji}</span>
                      <div>
                        <h3 className="font-semibold text-sm">{product.name}</h3>
                        <p className="text-xs text-muted-foreground">{product.tagline}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      )}

      {relatedTermObjects.length > 0 && (
        <Section compact>
          <div className="max-w-3xl">
            <h2 className="font-heading text-xl font-bold mb-4">Related Terms</h2>
            <div className="flex flex-wrap gap-2">
              {relatedTermObjects.map(related => (
                <Badge key={related.slug} variant="outline" asChild>
                  <Link href={`/glossary/${related.slug}`}>
                    {related.term}
                  </Link>
                </Badge>
              ))}
            </div>
          </div>
        </Section>
      )}

      <Separator />

      <Section compact>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/glossary">
            <ArrowLeft className="h-4 w-4" />
            Back to glossary
          </Link>
        </Button>
      </Section>
    </>
  )
}
