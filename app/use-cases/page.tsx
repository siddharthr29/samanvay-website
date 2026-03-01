import { Metadata } from "next"
import Link from "next/link"
import { Section } from "@/components/shared/section"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useCases } from "@/data/use-cases"
import { breadcrumbJsonLd } from "@/lib/seo"
import { siteConfig } from "@/data/site-config"

export const metadata: Metadata = {
  title: "Use Cases",
  description: "How Samanvay Foundation products are used across health, education, government, and community development. Real implementations and impact stories.",
}

export default function UseCasesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              { name: "Use Cases", url: `${siteConfig.url}/use-cases` },
            ])
          ),
        }}
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f2847]" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <Breadcrumbs items={[{ label: "Use Cases" }]} variant="light" />
          <div className="max-w-3xl mt-4">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-white">
              Real-World{" "}
              <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
                Use Cases
              </span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              How organizations use Samanvay products across health, education, government,
              and community development. Real challenges, real solutions, real impact.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map(uc => (
            <Link key={uc.slug} href={`/use-cases/${uc.slug}`} className="group">
              <Card className="h-full hover:shadow-lg hover:-translate-y-1 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">{uc.sectorEmoji}</span>
                    <Badge variant="secondary">{uc.sector}</Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {uc.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                    {uc.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {uc.products.map(p => (
                      <Badge key={p} variant="outline">{p}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </>
  )
}
