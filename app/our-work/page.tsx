import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin, Users, Heart, Building2, GraduationCap } from "lucide-react"
import { breadcrumbJsonLd } from "@/lib/seo"
import { siteConfig } from "@/data/site-config"
import { partners, getPartnerLogoUrl } from "@/data/partners"
import { PartnerLogo } from "./partner-logo"

export const metadata: Metadata = {
  title: "Our Work — Samanvay Foundation",
  description: "60+ nonprofits across 25+ states. Explore how our open-source products serve communities across India.",
}

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1400&q=80",
  fieldWorker: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
  hospital: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
  community: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
  education: "https://images.unsplash.com/photo-1497375638960-ca368c7231e4?w=800&q=80",
  ruralIndia: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
  tablet: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  village: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
  women: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80",
  doctor: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&q=80",
}

const caseStudies = [
  {
    org: "Jan Swasthya Sahyog",
    location: "Chhattisgarh",
    product: "Avni",
    productColor: "#4CAF50",
    image: IMAGES.village,
    quote: "From 12 paper registers to real-time health tracking",
    description: "Village health workers in Achanakmar Tiger Reserve now track pregnancies, TB, and chronic diseases digitally — replacing fragmented paper records with instant decision support.",
    impact: "200+ families served per worker",
  },
  {
    org: "Calcutta Kids",
    location: "West Bengal",
    product: "Avni",
    productColor: "#4CAF50",
    image: IMAGES.community,
    quote: "Urban maternal health digitized for thousands of families",
    description: "Community health workers in Kolkata track antenatal care, immunization, and nutrition programs with complete longitudinal records.",
    impact: "5000+ families tracked",
  },
  {
    org: "NHSRC & UNICEF",
    location: "Pan-India",
    product: "Gunak",
    productColor: "#FF9800",
    image: IMAGES.hospital,
    quote: "National-scale healthcare quality assessment",
    description: "Hundreds of assessors across India use Gunak to evaluate hospitals and health centers using NQAS, Laqshya, and Kayakalp frameworks.",
    impact: "1000+ facilities assessed",
  },
  {
    org: "Yenepoya",
    location: "Karnataka",
    product: "Bahmni",
    productColor: "#2196F3",
    image: IMAGES.doctor,
    quote: "Hospital information system serving thousands",
    description: "A fully digital hospital workflow — from patient registration to lab reports, pharmacy, and billing — running on open-source technology.",
    impact: "500+ hospitals worldwide",
  },
]

const sectors = [
  { icon: Heart, label: "Health", count: "40+", desc: "Community health, maternal care, chronic disease", image: IMAGES.fieldWorker },
  { icon: Building2, label: "Hospitals", count: "500+", desc: "EMR, lab, pharmacy, billing systems", image: IMAGES.hospital },
  { icon: Users, label: "Social Protection", count: "15+", desc: "Water, sanitation, livelihoods programs", image: IMAGES.ruralIndia },
  { icon: GraduationCap, label: "Youth", count: "5000+", desc: "Mentoring & education platforms", image: IMAGES.education },
]

const implementationPartners = partners.filter(p => p.type === "implementation" || p.type === "government")
const fundingPartners = partners.filter(p => p.type === "funding")
const technologyPartners = partners.filter(p => p.type === "technology")

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

      {/* HERO with full-bleed image */}
      <section className="relative bg-zinc-900 pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <Image src={IMAGES.hero} alt="Indian women empowerment" fill className="object-cover opacity-30" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/70 to-zinc-900/40" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[100px] animate-float-slow" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-amber-500/5 blur-[80px] animate-float-slower" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Where We <span className="text-amber-500">Work</span>
          </h1>
          <p className="mt-6 text-lg text-zinc-300 leading-relaxed max-w-2xl">
            From tiger reserves to urban hospitals, our open-source products serve communities across India.
          </p>
          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-10">
            {[
              { value: "60+", label: "Nonprofits" },
              { value: "25+", label: "States" },
              { value: "5L+", label: "Lives" },
              { value: "6", label: "Products" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-4xl md:text-5xl font-bold text-white">{s.value}</div>
                <div className="text-sm text-zinc-400 uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS WE SERVE — Image bento grid */}
      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        <div className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full bg-amber-100/40 blur-[80px] animate-float-slow" />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3">Sectors</p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">Communities we serve</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {sectors.map((s) => (
              <div key={s.label} className="group relative rounded-2xl overflow-hidden h-72 cursor-pointer">
                <Image src={s.image} alt={s.label} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <s.icon className="w-8 h-8 text-amber-400 mb-3" />
                  <h3 className="text-xl font-bold text-white mb-1">{s.label}</h3>
                  <p className="text-sm text-zinc-300">{s.desc}</p>
                  <div className="mt-3 text-2xl font-bold text-amber-400">{s.count}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO DIVIDER */}
      <div className="relative h-48 md:h-64 w-full overflow-hidden">
        <Image src={IMAGES.tablet} alt="Digital health tools in the field" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-zinc-50" />
      </div>

      {/* CASE STUDIES */}
      <section className="relative py-20 md:py-28 bg-zinc-50 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-amber-100/30 blur-[80px] animate-float-slower" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3">Case Studies</p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">Stories from the field</h2>
            <p className="mt-3 text-zinc-600 max-w-lg mx-auto">How our partners are transforming service delivery with open-source technology.</p>
          </div>
          <div className="space-y-8">
            {caseStudies.map((study, i) => (
              <div key={study.org} className="grid md:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-xl transition-shadow duration-500">
                {/* Image */}
                <div className={`relative h-64 md:h-auto min-h-[280px] ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <Image src={study.image} alt={study.org} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: study.productColor }}>
                      {study.product}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-sm text-zinc-500 mb-3">
                    <MapPin className="w-4 h-4" />
                    {study.location}
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-2">{study.org}</h3>
                  <p className="text-lg italic text-amber-700 mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                    &ldquo;{study.quote}&rdquo;
                  </p>
                  <p className="text-zinc-600 leading-relaxed mb-4">{study.description}</p>
                  <div className="text-sm font-bold text-amber-600 uppercase tracking-wider">{study.impact}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO GRID — On the ground */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3">On The Ground</p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">Technology in action</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[IMAGES.fieldWorker, IMAGES.women, IMAGES.village, IMAGES.community, IMAGES.doctor, IMAGES.education].map((src, i) => (
              <div key={i} className={`relative rounded-xl overflow-hidden group ${i === 0 ? 'row-span-2 h-auto' : 'h-48 md:h-56'}`}>
                <Image src={src} alt="Field work" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-20 md:py-28 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Implementation */}
          <div className="mb-16">
            <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3">Implementation Partners</p>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight mb-8">
              Nonprofits and government organizations using our products
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {implementationPartners.map((p) => {
                const logoUrl = getPartnerLogoUrl(p)
                return (
                  <div key={p.slug} className="bg-white rounded-xl border border-zinc-200 p-4 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col gap-3">
                    {logoUrl && <PartnerLogo src={logoUrl} alt={p.name} />}
                    <span className="text-sm font-bold text-zinc-800">{p.name}</span>
                    {p.products.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {p.products.slice(0, 2).map((prod) => (
                          <span key={prod} className="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-50 text-amber-700 font-medium">{prod}</span>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Funding + Technology */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3">Funding Partners</p>
              <div className="grid grid-cols-2 gap-3">
                {fundingPartners.map((p) => {
                const logoUrl = getPartnerLogoUrl(p)
                return (
                  <div key={p.slug} className="bg-white rounded-xl border border-zinc-200 p-4 hover:shadow-md transition-shadow flex items-center gap-3">
                    {logoUrl && <PartnerLogo src={logoUrl} alt={p.name} />}
                    <span className="text-sm font-bold text-zinc-800">{p.name}</span>
                  </div>
                )
              })}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3">Technology Partners</p>
              <div className="grid grid-cols-2 gap-3">
                {technologyPartners.map((p) => {
                const logoUrl = getPartnerLogoUrl(p)
                return (
                  <div key={p.slug} className="bg-white rounded-xl border border-zinc-200 p-4 hover:shadow-md transition-shadow flex items-center gap-3">
                    {logoUrl && <PartnerLogo src={logoUrl} alt={p.name} />}
                    <span className="text-sm font-bold text-zinc-800">{p.name}</span>
                  </div>
                )
              })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA with image bg */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <Image src={IMAGES.ruralIndia} alt="Rural India" fill className="object-cover" />
        <div className="absolute inset-0 bg-zinc-900/80" />
        <div className="relative mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Start your digital <span className="text-amber-400">journey</span>
          </h2>
          <p className="mt-5 text-zinc-300 text-lg max-w-xl mx-auto">
            Whether you serve 100 families or a million, we have the products and experience to help your organization thrive.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 mt-10 bg-amber-600 hover:bg-amber-500 text-white font-semibold px-8 py-4 rounded-full text-sm transition-colors">
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <div className="h-20 md:h-0" />
    </>
  )
}
