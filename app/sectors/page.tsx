import { Metadata } from "next"
import Link from "next/link"
import { Section } from "@/components/shared/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { sectors } from "@/data/sectors"
import { breadcrumbJsonLd } from "@/lib/seo"
import { siteConfig } from "@/data/site-config"

export const metadata: Metadata = {
  title: "Sectors We Serve",
  description:
    "Samanvay Foundation builds open-source technology for maternal health, hospitals, community health, water & sanitation, youth mentoring, and more.",
  openGraph: {
    title: "Sectors We Serve | Samanvay Foundation",
    description:
      "Open-source digital solutions across health, education, water, and community development sectors in India.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sectors We Serve | Samanvay Foundation",
    description:
      "Open-source digital solutions across health, education, water, and community development sectors in India.",
  },
}

export default function SectorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              { name: "Sectors", url: `${siteConfig.url}/sectors` },
            ])
          ),
        }}
      />

      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f2847]" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl mt-4">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-white">
              Sectors We{" "}
              <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
                Serve
              </span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Open-source digital infrastructure purpose-built for India's most critical social
              sectors. From maternal health to water sanitation, our products are designed for
              the specific constraints of frontline programs.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector) => (
            <Link key={sector.slug} href={`/sectors/${sector.slug}`} className="group">
              <Card className="h-full hover:shadow-lg hover:-translate-y-1 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">{sector.emoji}</span>
                    <Badge variant="secondary">{sector.products.join(", ")}</Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {sector.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-3">
                    {sector.description}
                  </p>
                  {sector.partners.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {sector.partners.slice(0, 3).map((p) => (
                        <Badge key={p} variant="outline" className="text-xs">
                          {p}
                        </Badge>
                      ))}
                    </div>
                  )}
                  {Object.keys(sector.stats).length > 0 && (
                    <div className="flex gap-4 mt-3 pt-3 border-t">
                      {Object.entries(sector.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-sm font-bold text-primary">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </>
  )
}
