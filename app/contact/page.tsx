import { Metadata } from "next"
import { Mail, MapPin } from "lucide-react"
import { Section } from "@/components/shared/section"
import { ContactForm } from "@/components/blocks/contact-form"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { siteConfig } from "@/data/site-config"
import { breadcrumbJsonLd } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Samanvay Foundation for technology consulting, product inquiries, or partnerships.",
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              { name: "Contact", url: `${siteConfig.url}/contact` },
            ])
          ),
        }}
      />

      <Section>
        <Breadcrumbs items={[{ label: "Contact" }]} />
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have a question about our products or want to discuss how we can help your organization?
            We&apos;d love to hear from you.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden border">
          {/* Left panel: gradient contact info */}
          <div className="lg:col-span-2 bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f2847] p-8 relative">
            <div className="absolute inset-0 dot-pattern opacity-15" />
            <div className="relative z-10">
              <h2 className="font-heading text-xl font-bold mb-6 text-white">Get in touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/10">
                    <Mail className="h-4 w-4 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-white">Email</h3>
                    <a
                      href={`mailto:${siteConfig.emails.general}`}
                      className="text-sm text-slate-300 hover:text-white transition-colors"
                    >
                      {siteConfig.emails.general}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/10">
                    <Mail className="h-4 w-4 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-white">Careers</h3>
                    <a
                      href={`mailto:${siteConfig.emails.careers}`}
                      className="text-sm text-slate-300 hover:text-white transition-colors"
                    >
                      {siteConfig.emails.careers}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/10">
                    <MapPin className="h-4 w-4 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-white">{siteConfig.addresses.office.label}</h3>
                    <p className="text-sm text-slate-300">{siteConfig.addresses.office.address}</p>
                    <a
                      href={siteConfig.addresses.office.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-orange-300 hover:text-orange-200 mt-1 inline-block"
                    >
                      View on Map
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/10">
                    <MapPin className="h-4 w-4 text-blue-200" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-white">{siteConfig.addresses.registered.label}</h3>
                    <p className="text-sm text-slate-300">{siteConfig.addresses.registered.address}</p>
                    <a
                      href={siteConfig.addresses.registered.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-orange-300 hover:text-orange-200 mt-1 inline-block"
                    >
                      View on Map
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel: form */}
          <div className="lg:col-span-3 p-8 bg-card">
            <h2 className="font-heading text-xl font-bold mb-6">Send us a message</h2>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  )
}
