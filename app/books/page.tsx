import { Metadata } from "next"
import { Section } from "@/components/shared/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { BookGrid } from "@/components/blocks/book-grid"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { breadcrumbJsonLd } from "@/lib/seo"
import { siteConfig } from "@/data/site-config"

export const metadata: Metadata = {
  title: "Books We Recommend",
  description: "Reading list on technology and social development recommended by the Samanvay Foundation team.",
}

export default function BooksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              { name: "Books", url: `${siteConfig.url}/books` },
            ])
          ),
        }}
      />

      {/* Gradient hero header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f2847]" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <Breadcrumbs items={[{ label: "Books" }]} variant="light" />
          <div className="max-w-3xl mt-4">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-white">
              Books We{" "}
              <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
                Recommend
              </span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              A reading list on technology and social development, curated by our team.
              These books have shaped our thinking on engineering, product development,
              and working in the social sector.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <BookGrid />
      </Section>
    </>
  )
}
