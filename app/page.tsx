import { Metadata } from "next"
import { Hero } from "@/components/blocks/hero"
import { PartnerLogos } from "@/components/blocks/partner-logos"
import { BentoGrid } from "@/components/blocks/bento-grid"
import { ProcessSteps } from "@/components/blocks/process-steps"
import { StatsCounter } from "@/components/blocks/stats-counter"
import { FeatureCards } from "@/components/blocks/feature-cards"
import { AskAISection } from "@/components/blocks/ask-ai-section"
import { CTASection } from "@/components/blocks/cta-section"
import { FAQAccordion } from "@/components/blocks/faq-accordion"
import { Section } from "@/components/shared/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { WaveDivider } from "@/components/shared/wave-divider"
import { siteConfig } from "@/data/site-config"
import { homepageFaqs } from "@/data/homepage-faqs"
import { organizationJsonLd, faqJsonLd } from "@/lib/seo"

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(homepageFaqs)) }}
      />

      <Hero />

      <Section compact>
        <PartnerLogos />
      </Section>

      <WaveDivider variant="wave" />

      <Section className="bg-muted/30">
        <SectionHeading
          badge="Open Source"
          emoji="🛠️"
          title="Our Products"
          subtitle="Technology products and product-services for the social sector"
          gradient="cool"
        />
        <BentoGrid />
      </Section>

      <WaveDivider variant="wave" flip />

      <Section compact>
        <StatsCounter />
      </Section>

      <WaveDivider variant="curve" />

      <Section className="bg-muted/30">
        <SectionHeading
          emoji="⚡"
          title="How We Work"
          subtitle="A simple, proven process to bring technology to your organization"
        />
        <ProcessSteps />
      </Section>

      <WaveDivider variant="curve" flip />

      <Section>
        <SectionHeading
          badge="Services"
          emoji="🎯"
          title="Our Services"
          subtitle="End-to-end technology services for grassroots organizations"
          gradient="warm"
        />
        <FeatureCards />
      </Section>

      <Section className="bg-muted/30">
        <AskAISection />
      </Section>

      <Section>
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Common questions about Samanvay Foundation and our work"
        />
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={homepageFaqs} />
        </div>
      </Section>

      <Section compact>
        <CTASection />
      </Section>
    </>
  )
}
