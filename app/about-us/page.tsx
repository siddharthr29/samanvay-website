import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Landmark, Globe, MapPin, Users, Calendar, Hash } from "lucide-react"
import { TeamGrid, type TeamMember } from "@/components/blocks/team-grid"
import { siteConfig } from "@/data/site-config"
import { breadcrumbJsonLd } from "@/lib/seo"

export const metadata: Metadata = {
  title: "About Us — Samanvay Foundation",
  description: "A Section-8 nonprofit in Bangalore building open-source digital infrastructure for India's social sector since 2016.",
}

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1400&q=80",
  women: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200&q=80",
  team: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&q=80",
  field: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80",
}

const teamMembers: TeamMember[] = [
  { name: "Vivek Singh", role: "Co-founder & Technologist", bio: "23+ years in software. 11 years developing technology for nonprofits and governments.", linkedin: "https://www.linkedin.com/in/vivek-singh-4535a61/" },
  { name: "Pradipta Kundu", role: "Co-founder & Program Manager", bio: "23+ years in software. Seven years managing projects for NGOs and governments in health." },
  { name: "Arjun Khandelwal", role: "Product Manager & Consultant", bio: "Software developer and product manager. Extensive field experience implementing software for grassroots organizations." },
  { name: "Vinay Venu", role: "Software Architect", bio: "12 years in software. 6 years working for social enterprises." },
  { name: "Sachin Kadam", role: "Developer & Architect", bio: "Developer and architect. Instrumental in making Bahmni and Avni." },
  { name: "Joy Abraham", role: "Developer & Architect", bio: "Developer and software architect." },
  { name: "Taqi Mohammed", role: "Engineer", bio: "Software engineer contributing to open-source products." },
  { name: "Madhusha Joshi", role: "Implementation Engineer", bio: "Works directly with partner organizations on deployments." },
  { name: "Nupoor Khandelwal", role: "Operations & Business Analyst", bio: "Operations, mobile development, and business analysis on Avni." },
  { name: "Hiren Thacker", role: "Business Analyst", bio: "Business analyst on Avni. Previously worked with nonprofits and as QA." },
  { name: "Utkarsh Hathi", role: "Quality Analyst", bio: "Quality analyst on Avni platform." },
  { name: "Dinesh G", role: "Team Member", bio: "" },
]

const beliefs = [
  { icon: Landmark, title: "Nonprofits should own their digital infrastructure", description: "When an organization depends on a vendor for every change, it cannot evolve at the pace its programs demand. We build platforms that nonprofits configure, extend, and operate themselves.", color: "#4CAF50" },
  { icon: Globe, title: "Open source is not charity — it is strategy", description: "Open-source products accumulate collective intelligence. Every deployment improves the platform for everyone. This is how infrastructure scales in resource-constrained sectors.", color: "#2196F3" },
  { icon: MapPin, title: "The last mile is the first priority", description: "If the technology does not work offline, in a forest, on a feature phone, in the hands of someone with a class-10 education — it does not work.", color: "#E8913A" },
]

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([
        { name: "Home", url: siteConfig.url },
        { name: "About Us", url: `${siteConfig.url}/about-us` },
      ])) }} />

      {/* HERO */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <Image src={IMAGES.hero} alt="Team collaboration" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-zinc-900/75" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[100px] animate-float-slow" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Deep Engineering, <span className="text-amber-400">Grassroots Understanding</span>
          </h1>
          <p className="mt-6 text-lg text-zinc-300 leading-relaxed max-w-2xl">
            We started Samanvay because we saw a mismatch: organizations doing deeply complex work were using paper registers to manage it. The social sector didn&apos;t need more apps — it needed infrastructure.
          </p>

          {/* Company facts */}
          <div className="mt-10 flex flex-wrap gap-6">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-white font-medium">Est. November 2016</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5">
              <Landmark className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-white font-medium">Section-8 Company</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5">
              <Hash className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-white font-medium">CIN: U74999KA2016NPL097550</span>
            </div>
          </div>
        </div>
      </section>

      {/* BELIEFS */}
      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        <div className="absolute inset-0 pattern-health" />
        <div className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full bg-amber-100/40 blur-[80px] animate-float-slow" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3">Our Beliefs</p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">What drives our work</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {beliefs.map((b) => {
              const Icon = b.icon
              return (
                <div key={b.title} className="bg-white rounded-2xl border border-zinc-200 p-8 hover:shadow-xl transition-all duration-300" style={{ borderTopColor: b.color, borderTopWidth: '3px' }}>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: `${b.color}12` }}>
                    <Icon className="h-7 w-7" style={{ color: b.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-3 leading-snug">{b.title}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">{b.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* PARALLAX IMAGE DIVIDER */}
      <section className="relative h-[40vh] min-h-[250px] flex items-center justify-center parallax-bg" style={{ backgroundImage: `url(${IMAGES.women})` }}>
        <div className="absolute inset-0 bg-zinc-900/60" />
        <div className="relative text-center px-5">
          <p className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Technology built <span className="text-amber-400">by India, for India</span>
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section className="relative py-20 md:py-28 bg-zinc-50 overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3">Our Team</p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">The people behind the products</h2>
            <p className="mt-3 text-zinc-600 max-w-lg mx-auto">Engineers, product managers, and consultants passionate about technology for social good.</p>
          </div>
          <TeamGrid members={teamMembers} />
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">Where we are</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-50 rounded-2xl border border-zinc-200 p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-2">{siteConfig.addresses.office.label}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{siteConfig.addresses.office.address}</p>
              <a href={siteConfig.addresses.office.mapUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-amber-600 hover:underline mt-2 inline-block">View on Maps</a>
            </div>
            <div className="bg-zinc-50 rounded-2xl border border-zinc-200 p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <Landmark className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-2">{siteConfig.addresses.registered.label}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{siteConfig.addresses.registered.address}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <Image src={IMAGES.field} alt="Field work" fill className="object-cover" />
        <div className="absolute inset-0 bg-zinc-900/80" />
        <div className="relative mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Want to <span className="text-amber-400">join our team?</span></h2>
          <p className="mt-4 text-zinc-300 text-lg">We practice Extreme Programming, pair programming, and TDD. We look for people passionate about their craft and social development.</p>
          <Link href="/join-us" className="inline-flex items-center gap-2 mt-8 bg-amber-600 hover:bg-amber-500 text-white font-semibold px-8 py-4 rounded-full text-sm transition-colors">
            View Openings <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <div className="h-20 md:h-0" />
    </>
  )
}
