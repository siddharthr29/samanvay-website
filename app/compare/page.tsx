import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Section } from "@/components/shared/section"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { comparisons } from "@/data/comparisons"
import { breadcrumbJsonLd } from "@/lib/seo"
import { siteConfig } from "@/data/site-config"

export const metadata: Metadata = {
  title: "Product Comparisons",
  description: "Compare open-source health technology products. Avni vs CommCare, Bahmni vs OpenMRS — detailed feature comparisons to help you choose the right solution.",
}

export default function ComparisonsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              { name: "Compare", url: `${siteConfig.url}/compare` },
            ])
          ),
        }}
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f2847]" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <Breadcrumbs items={[{ label: "Compare" }]} variant="light" />
          <div className="max-w-3xl mt-4">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-white">
              Product{" "}
              <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
                Comparisons
              </span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Detailed feature comparisons of open-source health technology platforms
              to help you choose the right solution for your organization.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {comparisons.map(comparison => (
            <Link key={comparison.slug} href={`/compare/${comparison.slug}`} className="group">
              <Card className="h-full hover:shadow-lg hover:-translate-y-1 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-1">
                    <Badge>{comparison.productA}</Badge>
                    <span className="text-muted-foreground text-sm">vs</span>
                    <Badge variant="outline">{comparison.productB}</Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {comparison.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {comparison.description}
                  </p>
                  <Separator className="my-3" />
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Read comparison <ArrowRight className="h-3 w-3" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </>
  )
}
