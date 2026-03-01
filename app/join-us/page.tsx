import { Metadata } from "next"
import { ExternalLink, Mail } from "lucide-react"
import { Section } from "@/components/shared/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { CTASection } from "@/components/blocks/cta-section"
import { jobs, workCulture } from "@/data/jobs"
import { breadcrumbJsonLd } from "@/lib/seo"
import { siteConfig } from "@/data/site-config"

export const metadata: Metadata = {
  title: "Join Us",
  description: "Work with Samanvay Foundation — we look for people passionate about their craft and social development.",
}

const cultureHighlightEmojis = ["🧑‍💻", "🔧", "🌐", "🏢", "📚", "🤝"]

export default function JoinUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              { name: "Join Us", url: `${siteConfig.url}/join-us` },
            ])
          ),
        }}
      />

      {/* Gradient hero header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f2847]" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <Breadcrumbs items={[{ label: "Join Us" }]} variant="light" />
          <div className="max-w-3xl mt-4">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-white">
              Work{" "}
              <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
                With Us
              </span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              {workCulture.intro}
            </p>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading
          emoji="💡"
          title="Why Samanvay?"
          gradient="warm"
        />
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {workCulture.highlights.map((highlight, index) => (
              <div key={highlight} className="flex items-start gap-3 p-4 rounded-xl border bg-card">
                <span className="text-xl shrink-0">{cultureHighlightEmojis[index % cultureHighlightEmojis.length]}</span>
                <span className="text-muted-foreground text-sm leading-relaxed">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-muted/30">
        <SectionHeading
          emoji="📋"
          title="Open Positions"
          gradient="cool"
        />
        <div className="space-y-4 max-w-3xl mx-auto">
          {jobs.map((job) => (
            <div key={job.title} className="p-6 rounded-2xl border bg-card hover:shadow-sm transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-heading font-semibold text-lg">{job.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{job.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full shrink-0 ${
                  job.status === "open"
                    ? "bg-green-500/15 text-green-600 dark:text-green-400"
                    : "bg-muted text-muted-foreground"
                }`}>
                  {job.status === "open" ? "Open" : "Closed"}
                </span>
              </div>
              {job.detailsUrl && job.status === "open" && (
                <a
                  href={job.detailsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-primary font-medium mt-4 hover:underline"
                >
                  View Details <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto p-8 rounded-2xl border bg-card text-center">
          <span className="text-3xl mb-3 block">📮</span>
          <h3 className="font-heading font-semibold text-lg mb-2">
            Don&apos;t see a role that fits?
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            If you are not clear about the roles please contact us with your question.
          </p>
          <a
            href={`mailto:${workCulture.contactEmail}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/20"
          >
            <Mail className="h-4 w-4" />
            {workCulture.contactEmail}
          </a>
        </div>
      </Section>
    </>
  )
}
