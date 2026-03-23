import { Metadata } from "next"
import Link from "next/link"
import { MapPin } from "lucide-react"
import { Section } from "@/components/shared/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { states } from "@/data/states"
import { breadcrumbJsonLd } from "@/lib/seo"
import { siteConfig } from "@/data/site-config"

export const metadata: Metadata = {
  title: "Our Impact Across India",
  description:
    "Samanvay Foundation works across 25+ Indian states. Explore our partnerships, products, and impact in each state.",
  openGraph: {
    title: "Our Impact Across India | Samanvay Foundation",
    description:
      "Open-source technology for social good across 25+ Indian states. See our work in each state.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Impact Across India | Samanvay Foundation",
    description:
      "Open-source technology for social good across 25+ Indian states.",
  },
}

export default function ImpactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              { name: "Impact", url: `${siteConfig.url}/impact` },
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
              Our Impact Across{" "}
              <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
                India
              </span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              From the tribal forests of Chhattisgarh to the urban settlements of Kolkata,
              our open-source products power social programs across 25+ Indian states.
            </p>
          </div>
          <div className="flex gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">25+</div>
              <div className="text-sm text-slate-400">States</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">60+</div>
              <div className="text-sm text-slate-400">Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500K+</div>
              <div className="text-sm text-slate-400">Lives Touched</div>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {states.map((state) => (
            <Link key={state.slug} href={`/impact/${state.slug}`} className="group">
              <Card className="h-full hover:shadow-lg hover:-translate-y-1 transition-all">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-xs text-muted-foreground">{state.capital}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {state.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                    {state.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {state.products.map((p) => (
                      <Badge key={p} variant="secondary" className="text-xs capitalize">
                        {p}
                      </Badge>
                    ))}
                  </div>
                  {state.partners.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {state.partners.slice(0, 2).map((p) => (
                        <Badge key={p} variant="outline" className="text-xs">
                          {p}
                        </Badge>
                      ))}
                      {state.partners.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{state.partners.length - 2} more
                        </Badge>
                      )}
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
