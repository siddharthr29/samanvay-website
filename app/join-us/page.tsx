import { Metadata } from "next"
import Image from "next/image"
import {
  ExternalLink,
  Mail,
  Code2,
  Users,
  Globe,
  Building2,
  MapPin,
  Heart,
} from "lucide-react"
import { Section } from "@/components/shared/section"
import { jobs, whySamanvay, workCulture } from "@/data/jobs"
import { breadcrumbJsonLd } from "@/lib/seo"
import { siteConfig } from "@/data/site-config"

export const metadata: Metadata = {
  title: "Join Us",
  description:
    "Work with Samanvay Foundation — we look for people passionate about their craft and social development.",
}

const whySamanvayIcons = [Code2, Users, Globe, Building2, MapPin, Heart]

const allClosed = jobs.every((job) => job.status === "closed")

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

      {/* Dark Hero */}
      <section className="relative bg-zinc-900 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80"
          alt="Team collaboration"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-zinc-900/70" />
        <div className="absolute inset-0 dot-pattern opacity-15" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[100px] animate-float-slow" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-amber-500/5 blur-[80px] animate-float-slower" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl mt-6">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight">
              Work{" "}
              <span className="bg-gradient-to-r from-[#E8913A] to-yellow-300 bg-clip-text text-transparent">
                With Us
              </span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              Build technology that serves the last mile. From Bangalore.
            </p>
          </div>
        </div>
      </section>

      {/* Why Samanvay */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0B1120] mb-4 tracking-tight">
            Why Samanvay?
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-[#E8913A] to-[#d17e2f] mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {whySamanvay.map((card, index) => {
            const Icon = whySamanvayIcons[index % whySamanvayIcons.length]
            return (
              <div
                key={card.title}
                className="p-8 rounded-2xl border border-[#2C2C2C]/10 bg-white hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-3 rounded-xl bg-amber-600/10 w-fit mb-5">
                  <Icon className="h-7 w-7 text-amber-600" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-[#0B1120] mb-2">
                  {card.title}
                </h3>
                <p className="text-base text-zinc-900/60 leading-relaxed">
                  {card.description}
                </p>
              </div>
            )
          })}
        </div>
      </Section>

      {/* INLINE IMAGE: Between Why Samanvay and Positions */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1497375638960-ca368c7231e4?w=1200&q=80" alt="Education and teaching" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 via-transparent to-white" />
      </div>

      {/* Open Positions */}
      <Section className="bg-zinc-50">
        <div className="text-center mb-10">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0B1120] mb-4 tracking-tight">
            Open Positions
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-[#0B1120] to-blue-400 mx-auto" />
        </div>

        <div className="space-y-5 max-w-3xl mx-auto">
          {jobs.map((job) => (
            <div
              key={job.title}
              className="p-8 rounded-2xl border border-[#2C2C2C]/10 bg-white hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-heading font-semibold text-lg text-[#0B1120]">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1 text-sm text-zinc-900/50">
                    {job.department && <span>{job.department}</span>}
                    {job.department && job.location && (
                      <span className="text-zinc-900/20">|</span>
                    )}
                    {job.location && <span>{job.location}</span>}
                  </div>
                  <p className="text-sm text-zinc-900/60 mt-2">{job.description}</p>
                </div>
                <span
                  className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full shrink-0 ${
                    job.status === "open"
                      ? "bg-green-500/15 text-green-700"
                      : "bg-[#2C2C2C]/5 text-zinc-900/40"
                  }`}
                >
                  {job.status === "open" ? "Open" : "Closed"}
                </span>
              </div>
              {job.detailsUrl && job.status === "open" && (
                <a
                  href={job.detailsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-amber-600 font-medium mt-4 hover:underline min-h-[48px]"
                >
                  View Details <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          ))}

          {allClosed && (
            <div className="p-6 rounded-2xl border border-[#E8913A]/20 bg-amber-600/5 text-center">
              <p className="text-sm text-zinc-900/70">
                No open positions right now, but we&apos;re always looking for passionate
                engineers. Send us your resume.
              </p>
            </div>
          )}
        </div>
      </Section>

      {/* Culture Section */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0B1120] mb-6 tracking-tight">
            How We Work
          </h2>
          <p className="text-zinc-900/70 leading-relaxed">
            {workCulture.cultureStatement}
          </p>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-zinc-900 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Don&apos;t see a role that fits?
          </h2>
          <p className="text-slate-400 mb-6 max-w-lg mx-auto">
            Even if there&apos;s no open position, reach out at
          </p>
          <a
            href={`mailto:${workCulture.contactEmail}`}
            className="inline-flex items-center gap-2 px-6 py-3 min-h-[48px] bg-amber-600 hover:bg-[#d17e2f] text-white font-semibold rounded-xl transition-colors shadow-lg shadow-[#E8913A]/20"
          >
            <Mail className="h-4 w-4" />
            {workCulture.contactEmail}
          </a>
        </div>
      </section>
    </>
  )
}
