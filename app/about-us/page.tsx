import { Metadata } from "next"
import { Section } from "@/components/shared/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { TeamGrid, type TeamMember } from "@/components/blocks/team-grid"
import { CTASection } from "@/components/blocks/cta-section"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { siteConfig } from "@/data/site-config"
import { breadcrumbJsonLd } from "@/lib/seo"

export const metadata: Metadata = {
  title: "About Us",
  description: "About Samanvay Foundation — a non-profit technology start-up with deep engineering and grassroots understanding.",
}

const teamMembers: TeamMember[] = [
  {
    name: "Vivek Singh",
    role: "Co-founder & Technologist",
    bio: "23+ years in software as a technologist, consultant, and product manager. 11 years developing technology solutions for nonprofits and governments.",
    linkedin: "https://www.linkedin.com/in/vivek-singh-4535a61/",
  },
  {
    name: "Pradipta Kundu",
    role: "Co-founder & Program Manager",
    bio: "23+ years in software as a consultant, program manager, and client partner. Seven years managing projects for NGOs and governments in health.",
  },
  {
    name: "Arjun Khandelwal",
    role: "Product Manager & Consultant",
    bio: "Software developer, product manager, and consultant. Extensive field experience in implementing software for grassroots organizations.",
  },
  {
    name: "Vinay Venu",
    role: "Software Architect",
    bio: "12 years in software as a developer, architect, and tech lead. 6 years working for social enterprises.",
  },
  {
    name: "Sachin Kadam",
    role: "Developer & Architect",
    bio: "Developer and software architect. Instrumental in making Bahmni and Avni.",
  },
  {
    name: "Joy Abraham",
    role: "Developer & Architect",
    bio: "Developer and software architect.",
  },
  {
    name: "Taqi Mohammed",
    role: "Engineer",
    bio: "Software engineer contributing to open-source products.",
  },
  {
    name: "Madhusha Joshi",
    role: "Implementation Engineer",
    bio: "Implementation engineer working directly with partner organizations.",
  },
  {
    name: "Nupoor Khandelwal",
    role: "Operations & Business Analyst",
    bio: "Operations, mobile application development, and business analyst on Avni.",
  },
  {
    name: "Hiren Thacker",
    role: "Business Analyst",
    bio: "Business analyst on Avni. Worked with non-profits and as a QA engineer before joining Samanvay.",
  },
  {
    name: "Utkarsh Hathi",
    role: "Quality Analyst",
    bio: "Quality analyst on Avni platform.",
  },
  {
    name: "Dinesh G",
    role: "Team Member",
    bio: "",
  },
]

const values = [
  {
    emoji: "💚",
    title: "Grassroots Understanding",
    description: "We understand the needs of the social sector and have made technology solutions for a large number of grassroots organizations. We recommend and create solutions that fit your budget and deliver value over the long term.",
    color: "#059669",
  },
  {
    emoji: "🌐",
    title: "Open Source First",
    description: "We have conceived, developed, and contributed to many open-source products. These robust products have been widely used and we believe are the right starting point for most grassroots organizations.",
    color: "#4f46e5",
  },
  {
    emoji: "🔄",
    title: "Sustainable Approach",
    description: "Without a sustainable approach, you can lose years in technology adoption. We help you take a long-term sustainable approach towards technology adoption and evolution.",
    color: "#ea580c",
  },
]

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              { name: "About Us", url: `${siteConfig.url}/about-us` },
            ])
          ),
        }}
      />

      {/* Gradient hero header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f2847]" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <Breadcrumbs items={[{ label: "About Us" }]} variant="light" />
          <div className="max-w-3xl mt-4">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-white">
              Deep Engineering,{" "}
              <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
                Grassroots Understanding
              </span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              {siteConfig.fullName} is a {siteConfig.type.toLowerCase()}.
              We build open-source software products for the social sector.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading
          title="What We Believe In"
          gradient="cool"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="p-6 rounded-2xl bg-card border hover:shadow-md transition-shadow"
              style={{ borderTopColor: value.color, borderTopWidth: '3px' }}
            >
              <span className="text-3xl mb-3 block">{value.emoji}</span>
              <h3 className="font-heading text-lg font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/30">
        <SectionHeading
          emoji="👥"
          title="Our Team"
          subtitle="Engineers, product managers, and consultants passionate about technology for social good"
          gradient="warm"
        />
        <TeamGrid members={teamMembers} />
      </Section>

      <Section compact>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl border bg-card">
            <span className="text-2xl mb-2 block">📍</span>
            <h3 className="font-heading font-semibold mb-2">{siteConfig.addresses.office.label}</h3>
            <p className="text-sm text-muted-foreground">{siteConfig.addresses.office.address}</p>
          </div>
          <div className="p-5 rounded-2xl border bg-card">
            <span className="text-2xl mb-2 block">🏢</span>
            <h3 className="font-heading font-semibold mb-2">{siteConfig.addresses.registered.label}</h3>
            <p className="text-sm text-muted-foreground">{siteConfig.addresses.registered.address}</p>
          </div>
        </div>
      </Section>

      <Section compact>
        <CTASection
          title="Want to join our team?"
          description="We look for people passionate about their craft and social development."
          buttonText="View Openings"
          buttonHref="/join-us"
        />
      </Section>
    </>
  )
}
