import { siteConfig } from "@/data/site-config"
import type { FAQ } from "@/data/homepage-faqs"

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "NonprofitOrganization"],
    name: siteConfig.fullName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    description: siteConfig.description,
    foundingDate: "2017",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1st Floor, 147, 10th Cross Rd, Binnamangala",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560038",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.emails.general,
      contactType: "general",
    },
    sameAs: [siteConfig.social.linkedin, siteConfig.social.github],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Technology Products & Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Open Source Products",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "SoftwareApplication", name: "Avni", description: "Open-source community service and data collection platform" } },
            { "@type": "Offer", itemOffered: { "@type": "SoftwareApplication", name: "Bahmni", description: "Open-source hospital information system" } },
            { "@type": "Offer", itemOffered: { "@type": "SoftwareApplication", name: "Gunak", description: "Healthcare quality improvement platform" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Product Development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Product Implementation" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Managed Service" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Software Integration" } },
          ],
        },
      ],
    },
  }
}

export function faqJsonLd(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function articleJsonLd(article: {
  title: string
  description: string
  url: string
  datePublished: string
  author?: string
  image?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.datePublished,
    author: {
      "@type": "Organization",
      name: siteConfig.fullName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.fullName,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/logo.png`,
      },
    },
    ...(article.image && { image: article.image }),
  }
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function softwareJsonLd(product: {
  name: string
  description: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    description: product.description,
    url: product.url,
    applicationCategory: "HealthApplication",
    operatingSystem: "Web, Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: siteConfig.fullName,
    },
  }
}
