import { Metadata } from "next"
import { Section } from "@/components/shared/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { ProjectGallery } from "@/components/blocks/project-gallery"
import { StatsCounter } from "@/components/blocks/stats-counter"
import { CTASection } from "@/components/blocks/cta-section"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { fundingPartners, developmentPartners } from "@/data/projects"
import { breadcrumbJsonLd } from "@/lib/seo"
import { siteConfig } from "@/data/site-config"

export const metadata: Metadata = {
  title: "Our Work",
  description: "Projects done by Samanvay for various partners and organizations in health, education, and community development.",
}

export default function OurWorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              { name: "Our Work", url: `${siteConfig.url}/our-work` },
            ])
          ),
        }}
      />

      {/* Gradient hero header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f2847]" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <Breadcrumbs items={[{ label: "Our Work" }]} variant="light" />
          <div className="max-w-3xl mt-4">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-white">
              Work Done by{" "}
              <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
                Samanvay
              </span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              We understand the needs of the social sector and have made technology solutions
              for a large number of grassroots organizations. Here are some of our projects.
            </p>
          </div>
        </div>
      </section>

      <Section compact>
        <StatsCounter />
      </Section>

      <Section>
        <SectionHeading
          emoji="📋"
          title="Our Projects"
          subtitle="Featured projects and partner implementations across health, education, and community development"
          gradient="cool"
        />
        <ProjectGallery />
      </Section>

      <Section className="bg-muted/30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <SectionHeading
              emoji="💰"
              title="Funding Organisations"
              align="left"
            />
            <div className="space-y-4">
              {fundingPartners.map((partner) => (
                <div key={partner.name} className="p-4 rounded-xl border bg-card hover:shadow-sm transition-shadow">
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:text-primary transition-colors"
                  >
                    {partner.name}
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">{partner.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading
              emoji="🤝"
              title="Development Partners"
              align="left"
            />
            <div className="space-y-4">
              {developmentPartners.map((partner) => (
                <div key={partner.name} className="p-4 rounded-xl border bg-card hover:shadow-sm transition-shadow">
                  {partner.url ? (
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold hover:text-primary transition-colors"
                    >
                      {partner.name}
                    </a>
                  ) : (
                    <span className="font-semibold">{partner.name}</span>
                  )}
                  <p className="text-sm text-muted-foreground mt-1">{partner.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section compact>
        <CTASection
          title="Want to work with us?"
          description="We'd love to help your organization with technology solutions."
        />
      </Section>
    </>
  )
}
