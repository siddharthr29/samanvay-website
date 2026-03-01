import { NextResponse } from "next/server"
import { products } from "@/data/products"
import { services } from "@/data/services"
import { glossaryTerms } from "@/data/glossary"
import { comparisons } from "@/data/comparisons"
import { useCases } from "@/data/use-cases"
import { homepageFaqs } from "@/data/homepage-faqs"
import { getPublishedArticles } from "@/lib/notion"

export async function GET() {
  const articles = await getPublishedArticles()

  const productLines = products
    .map((p) => `- ${p.name} (${p.emoji}): ${p.tagline}. ${p.impact}. URL: ${p.url}`)
    .join("\n")

  const serviceLines = services
    .map((s) => `- ${s.title} (${s.emoji}): ${s.description.split(".")[0]}. Includes: ${s.includes.join(", ")}`)
    .join("\n")

  const articleLines =
    articles.length > 0
      ? articles.map((a) => `- [${a.title}](/articles/${a.slug}): ${a.description}`).join("\n")
      : "- Articles coming soon"

  const glossaryLines = glossaryTerms
    .map((t) => `- ${t.term}: ${t.definition}`)
    .join("\n")

  const comparisonLines = comparisons
    .map((c) => `- ${c.productA} vs ${c.productB}: ${c.description}`)
    .join("\n")

  const useCaseLines = useCases
    .map((uc) => `- ${uc.title} (${uc.sector}): ${uc.description}`)
    .join("\n")

  const faqLines = homepageFaqs
    .map((f) => `Q: ${f.question}\nA: ${f.answer}`)
    .join("\n\n")

  const content = `# Samanvay Foundation (Samanvay Research and Development Foundation)
> Non-profit technology startup in Bangalore, India. Section-8 company. Founded 2017.
> We build open-source software products for the social sector.
> Deep Engineering, Grassroots Understanding.
> 50+ projects, 20+ partners, 8+ years, 500+ deployments worldwide.

## Products
${productLines}

## Services
${serviceLines}

## Key Partners
- UNICEF, NHSRC, Ashwini, Calcutta Kids, Sewa Rural, SEARCH, Yenepoya, Mentor Together, Arghyam, Shelter Associates

## Use Cases
${useCaseLines}

## Product Comparisons
${comparisonLines}

## Health Technology Glossary
${glossaryLines}

## FAQ
${faqLines}

## Articles
${articleLines}

## Team
- Vivek Singh — Co-founder & Technologist (23+ years in software)
- Pradipta Kundu — Co-founder & Program Manager (23+ years in software)
- Plus a team of architects, engineers, product managers, and analysts

## Contact
- Email: hello@samanvayfoundation.org
- Careers: careers@samanvayfoundation.org
- Website: https://samanvayfoundation.org
- GitHub: https://github.com/SamanvayOrg
- LinkedIn: https://www.linkedin.com/company/samanvay-foundation
- Location: Indiranagar, Bangalore, India

## Technology Stack
- Open source first: All products are open source
- Practices: Extreme Programming (XP), pair programming, TDD
- Stack: Java, JavaScript/TypeScript, React, React Native, PostgreSQL
`

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
