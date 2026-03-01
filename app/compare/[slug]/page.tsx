import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Check } from "lucide-react"
import { Section } from "@/components/shared/section"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { comparisons } from "@/data/comparisons"
import { breadcrumbJsonLd } from "@/lib/seo"
import { siteConfig } from "@/data/site-config"

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const comparison = comparisons.find((c) => c.slug === slug)
    if (!comparison) return { title: "Comparison Not Found" }
    return {
      title: comparison.title,
      description: comparison.description,
    }
  })
}

export default async function ComparisonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const comparison = comparisons.find((c) => c.slug === slug)

  if (!comparison) notFound()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              { name: "Compare", url: `${siteConfig.url}/compare` },
              { name: `${comparison.productA} vs ${comparison.productB}`, url: `${siteConfig.url}/compare/${comparison.slug}` },
            ])
          ),
        }}
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f2847]" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <Breadcrumbs items={[{ label: "Compare", href: "/compare" }, { label: `${comparison.productA} vs ${comparison.productB}` }]} variant="light" />
          <div className="max-w-3xl mt-4">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="secondary" className="bg-white/10 text-blue-200 border-white/20">
                {comparison.productA}
              </Badge>
              <span className="text-slate-400 text-sm">vs</span>
              <Badge variant="secondary" className="bg-white/10 text-orange-200 border-white/20">
                {comparison.productB}
              </Badge>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-white">
              {comparison.title}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              {comparison.description}
            </p>
          </div>
        </div>
      </section>

      {/* Feature comparison table */}
      <Section>
        <h2 className="font-heading text-2xl font-bold mb-6">Feature Comparison</h2>
        <div className="overflow-x-auto">
          <Table className="max-w-4xl">
            <TableHeader>
              <TableRow>
                <TableHead className="font-heading font-semibold">Feature</TableHead>
                <TableHead className="font-heading font-semibold text-primary">{comparison.productA}</TableHead>
                <TableHead className="font-heading font-semibold">{comparison.productB}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparison.features.map((f) => (
                <TableRow key={f.feature}>
                  <TableCell className="font-medium">{f.feature}</TableCell>
                  <TableCell className="text-muted-foreground">{f.productA}</TableCell>
                  <TableCell className="text-muted-foreground">{f.productB}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Section>

      {/* Verdict */}
      <Section compact className="bg-muted/30">
        <div className="max-w-3xl">
          <h2 className="font-heading text-2xl font-bold mb-4">Our Verdict</h2>
          <Card className="border-l-4 border-l-primary">
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{comparison.verdict}</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Use case recommendations */}
      <Section>
        <h2 className="font-heading text-2xl font-bold mb-6">Which Should You Choose?</h2>
        <div className="space-y-4 max-w-3xl">
          {comparison.useCases.map(uc => (
            <Card key={uc.useCase}>
              <CardHeader>
                <CardTitle className="text-sm">{uc.useCase}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{uc.recommendation}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Internal links */}
      <Section compact>
        <div className="flex flex-wrap gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/compare">
              <ArrowLeft className="h-4 w-4" />
              All comparisons
            </Link>
          </Button>
          <Button variant="link" size="sm" asChild>
            <Link href="/products">View all products</Link>
          </Button>
          <Button variant="link" size="sm" asChild>
            <Link href="/contact">Need help choosing? Contact us</Link>
          </Button>
        </div>
      </Section>
    </>
  )
}
