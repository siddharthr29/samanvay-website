import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Quote } from "lucide-react"
import { siteConfig } from "@/data/site-config"
import { breadcrumbJsonLd } from "@/lib/seo"
import { StoryTimeline } from "./timeline"

export const metadata: Metadata = {
  title: "Our Story — Samanvay Foundation",
  description: "From a tiger reserve in Chhattisgarh to 60+ nonprofits across India. The story of building digital infrastructure for the social sector.",
}

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1400&q=80",
  village: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80",
  healthWorker: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
  community: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80",
  tablet: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
  women: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200&q=80",
  teamwork: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80",
  hospital: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80",
}

export default function StoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              { name: "Our Story", url: `${siteConfig.url}/story` },
            ])
          ),
        }}
      />

      {/* HERO — Full-bleed image */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <Image src={IMAGES.hero} alt="Indian village" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[100px] animate-float-slow" />
        <div className="relative mx-auto max-w-4xl px-5 sm:px-8 pb-16 md:pb-20 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
            Every system was once a person <span className="text-amber-400">carrying too much</span>
          </h1>
          <p className="mt-6 text-lg text-zinc-300 max-w-2xl mx-auto">
            This is the story of how technology stopped being an intervention and became infrastructure.
          </p>
        </div>
      </section>

      {/* THE BEGINNING — Split layout */}
      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        <div className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full bg-amber-100/40 blur-[80px] animate-float-slow" />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-6">The Beginning</p>
              <p className="text-xl md:text-2xl text-zinc-900 leading-relaxed mb-6" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                In 2016, inside the Achanakmar Tiger Reserve in Chhattisgarh, Kaushilya Gond walked from house to house providing primary healthcare.
              </p>
              <p className="text-zinc-600 leading-relaxed mb-4">She had studied up to class 10. She carried a feature phone to call a doctor when needed. There was no reliable internet in the forest.</p>
              <p className="text-zinc-600 leading-relaxed">Her job was clinically and operationally complex — tracking pregnancies, monitoring TB and diabetes, identifying early warning signs, and deciding when a hospital 50km away was necessary.</p>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image src={IMAGES.women} alt="Indian woman health worker" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-zinc-100">
                <div className="text-2xl font-bold text-amber-600">200+</div>
                <div className="text-xs text-zinc-500 font-medium">Families in her care</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTLENECK — Parallax divider */}
      <section className="relative h-[50vh] min-h-[300px] flex items-center justify-center parallax-bg" style={{ backgroundImage: `url(${IMAGES.village})` }}>
        <div className="absolute inset-0 bg-zinc-900/70" />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-zinc-400 text-sm uppercase tracking-wider mb-6">The Bottleneck</p>
          <p className="text-2xl md:text-3xl text-white leading-relaxed" style={{ fontFamily: 'Playfair Display, Georgia, serif', fontStyle: 'italic' }}>
            The complexity was manageable when the caseload was small. But as programs expanded, cognitive load became the bottleneck.
          </p>
        </div>
      </section>

      {/* THREE QUESTIONS */}
      <section className="py-20 md:py-28 bg-zinc-50">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="space-y-6">
            {[
              "Is the referral threshold 140 or 150 for this patient?",
              "Did I follow up after the last ANC visit?",
              "How many high-risk pregnancies are currently in my village?",
            ].map((q, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
                <Quote className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                <p className="text-lg md:text-xl text-zinc-800" style={{ fontFamily: 'Playfair Display, Georgia, serif', fontStyle: 'italic' }}>{q}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-zinc-600 text-lg">
            The answers were scattered across <strong className="text-zinc-900">twelve paper registers</strong> and a diary of reminders.
          </p>
        </div>
      </section>

      {/* THE PATTERN — Split with photos */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-4">The Pattern</p>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-6">And JSS was not unique.</h2>
              <p className="text-zinc-600 leading-relaxed mb-8">Across geographies and sectors — whether health, education, water systems or social protection — nonprofits managing long-term, person-level change face the same structural challenge.</p>
              <div className="grid grid-cols-2 gap-3">
                {['Complex care', 'Paper systems', 'Long feedback loops', 'Delayed intervention'].map((label, i) => (
                  <div key={label} className="p-4 rounded-xl border border-zinc-200 bg-zinc-50 text-center hover:border-amber-200 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 text-sm font-bold flex items-center justify-center mx-auto mb-2">{i + 1}</div>
                    <p className="text-sm font-medium text-zinc-700">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden"><Image src={IMAGES.healthWorker} alt="Health worker" fill className="object-cover" /></div>
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mt-8"><Image src={IMAGES.hospital} alt="Hospital" fill className="object-cover" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* THE SHIFT — Parallax */}
      <section className="relative h-[50vh] min-h-[300px] flex items-center justify-center parallax-bg" style={{ backgroundImage: `url(${IMAGES.tablet})` }}>
        <div className="absolute inset-0 bg-amber-900/60" />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-amber-200 text-sm uppercase tracking-wider mb-6">The Shift</p>
          <p className="text-2xl md:text-3xl text-white leading-relaxed font-medium">
            Through Samanvay, we partnered with JSS to redesign how their Village Health Worker program functioned digitally.
          </p>
        </div>
      </section>

      {/* TRANSFORMATION — Split */}
      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-amber-100/30 blur-[80px] animate-float-slower" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
              <Image src={IMAGES.teamwork} alt="Team collaboration" fill className="object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-4">The Transformation</p>
              <div className="space-y-5 text-zinc-600 leading-relaxed">
                <p>Pregnancy tracking, TB management, chronic disease monitoring and malnutrition modules were digitized. Field workers received <strong className="text-zinc-900">decision support within their workflows</strong>.</p>
                <div className="p-6 rounded-2xl border border-amber-200 bg-amber-50">
                  <p className="text-xl text-zinc-900 font-medium" style={{ fontFamily: 'Playfair Display, Georgia, serif', fontStyle: 'italic' }}>
                    &ldquo;The monthly meeting at JSS transformed from a data-cleaning exercise into a strategy discussion.&rdquo;
                  </p>
                </div>
                <p>JSS did not remain a dependent &ldquo;technology user.&rdquo; They became <strong className="text-zinc-900">ecosystem champions</strong> — training other organizations to adopt technology independently.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO MOSAIC */}
      <section className="py-4 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-3 gap-3">
            {[IMAGES.community, IMAGES.women, IMAGES.healthWorker].map((src, i) => (
              <div key={i} className="relative h-40 md:h-56 rounded-xl overflow-hidden group">
                <Image src={src} alt="Impact" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative py-20 md:py-28 bg-zinc-50 overflow-hidden">
        <div className="absolute inset-0 pattern-health" />
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3">The Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">Milestones</h2>
          </div>
          <StoryTimeline />
        </div>
      </section>

      {/* VISION — Parallax CTA */}
      <section className="relative min-h-[60vh] flex items-center justify-center parallax-bg" style={{ backgroundImage: `url(${IMAGES.community})` }}>
        <div className="absolute inset-0 bg-zinc-900/80" />
        <div className="relative mx-auto max-w-3xl px-5 sm:px-8 text-center py-20">
          <p className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-6">The Vision</p>
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            &ldquo;How do we build enduring, adaptable digital capacity within mission-driven institutions so they can focus on solving social problems — not managing spreadsheets?&rdquo;
          </blockquote>
          <Link href="/contact" className="inline-flex items-center gap-2 mt-12 bg-amber-600 hover:bg-amber-500 text-white font-semibold px-8 py-4 rounded-full text-sm transition-colors">
            Join this journey <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <div className="h-20 md:h-0" />
    </>
  )
}
