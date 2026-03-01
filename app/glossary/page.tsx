import { Metadata } from "next"
import Link from "next/link"
import { Section } from "@/components/shared/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { glossaryTerms, glossaryCategories } from "@/data/glossary"
import { breadcrumbJsonLd } from "@/lib/seo"
import { siteConfig } from "@/data/site-config"

export const metadata: Metadata = {
  title: "Health Technology Glossary",
  description: "A comprehensive glossary of health technology, open-source software, and social sector terms. Learn about EMR, EHR, community health, telemedicine, and more.",
}

export default function GlossaryPage() {
  const grouped = glossaryCategories.map(cat => ({
    ...cat,
    terms: glossaryTerms.filter(t => t.category === cat.value),
  }))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              { name: "Glossary", url: `${siteConfig.url}/glossary` },
            ])
          ),
        }}
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f2847]" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <Breadcrumbs items={[{ label: "Glossary" }]} variant="light" />
          <div className="max-w-3xl mt-4">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-white">
              Health Technology{" "}
              <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
                Glossary
              </span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Key terms and concepts in health technology, open-source software, and social sector
              development. Each term includes a beginner-friendly explanation and technical context.
            </p>
          </div>
        </div>
      </section>

      {grouped.map(group => (
        <Section key={group.value}>
          <SectionHeading
            emoji={group.emoji}
            title={group.label}
            align="left"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {group.terms.map(term => (
              <Link key={term.slug} href={`/glossary/${term.slug}`} className="group">
                <Card className="h-full hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {term.term}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {term.definition}
                    </p>
                    {term.relatedProducts && term.relatedProducts.length > 0 && (
                      <div className="flex gap-1.5 mt-3">
                        {term.relatedProducts.map(p => (
                          <Badge key={p} variant="secondary" className="capitalize">
                            {p}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Section>
      ))}
    </>
  )
}
