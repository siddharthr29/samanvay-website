import { Metadata } from "next"
import { homepageFaqs } from "@/data/homepage-faqs"
import { organizationJsonLd, faqJsonLd } from "@/lib/seo"
import { Homepage } from "./homepage"

export const metadata: Metadata = {
  title: "Samanvay Foundation — Open Source Technology for Social Good",
  description:
    "Building open-source digital infrastructure for India's social sector. 60+ nonprofits. 500,000+ lives. 6 products.",
  openGraph: {
    title: "Samanvay Foundation",
    description: "Open-source digital infrastructure for India's social sector.",
    type: "website",
  },
}

export default function Page() {
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
      <Homepage />
    </>
  )
}
