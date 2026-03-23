import { MetadataRoute } from "next"
import { siteConfig } from "@/data/site-config"
import { products } from "@/data/products"
import { glossaryTerms } from "@/data/glossary"
import { comparisons } from "@/data/comparisons"
import { useCases } from "@/data/use-cases"
import { sectors } from "@/data/sectors"
import { states } from "@/data/states"
import { getPublishedArticles } from "@/lib/notion"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getPublishedArticles()

  const staticPages = [
    { path: "", priority: 1.0 },
    { path: "/products", priority: 0.9 },
    { path: "/our-work", priority: 0.8 },
    { path: "/articles", priority: 0.7 },
    { path: "/about-us", priority: 0.8 },
    { path: "/join-us", priority: 0.7 },
    { path: "/books", priority: 0.5 },
    { path: "/contact", priority: 0.7 },
    { path: "/glossary", priority: 0.5 },
    { path: "/compare", priority: 0.6 },
    { path: "/use-cases", priority: 0.7 },
    { path: "/story", priority: 0.8 },
    { path: "/for-funders", priority: 0.8 },
    { path: "/sectors", priority: 0.8 },
    { path: "/impact", priority: 0.7 },
  ]

  const staticEntries = staticPages.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority,
  }))

  const productEntries = products.map((p) => ({
    url: `${siteConfig.url}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }))

  const sectorEntries = sectors.map((s) => ({
    url: `${siteConfig.url}/sectors/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const stateEntries = states.map((s) => ({
    url: `${siteConfig.url}/impact/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const glossaryEntries = glossaryTerms.map((t) => ({
    url: `${siteConfig.url}/glossary/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }))

  const comparisonEntries = comparisons.map((c) => ({
    url: `${siteConfig.url}/compare/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  const useCaseEntries = useCases.map((uc) => ({
    url: `${siteConfig.url}/use-cases/${uc.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const articleEntries = articles.map((a) => ({
    url: `${siteConfig.url}/articles/${a.slug}`,
    lastModified: a.date ? new Date(a.date) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [
    ...staticEntries,
    ...productEntries,
    ...sectorEntries,
    ...stateEntries,
    ...glossaryEntries,
    ...comparisonEntries,
    ...useCaseEntries,
    ...articleEntries,
  ]
}
