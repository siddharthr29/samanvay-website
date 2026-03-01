import { MetadataRoute } from "next"
import { siteConfig } from "@/data/site-config"
import { products } from "@/data/products"
import { glossaryTerms } from "@/data/glossary"
import { comparisons } from "@/data/comparisons"
import { useCases } from "@/data/use-cases"
import { getPublishedArticles } from "@/lib/notion"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getPublishedArticles()

  const staticPages = [
    "",
    "/products",
    "/our-work",
    "/articles",
    "/about-us",
    "/join-us",
    "/books",
    "/contact",
    "/glossary",
    "/compare",
    "/use-cases",
  ]

  const productPages = products.map((p) => `/products/${p.slug}`)
  const glossaryPages = glossaryTerms.map((t) => `/glossary/${t.slug}`)
  const comparisonPages = comparisons.map((c) => `/compare/${c.slug}`)
  const useCasePages = useCases.map((uc) => `/use-cases/${uc.slug}`)

  const articleEntries = articles.map((a) => ({
    url: `${siteConfig.url}/articles/${a.slug}`,
    lastModified: a.date ? new Date(a.date) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const allPages = [...staticPages, ...productPages, ...glossaryPages, ...comparisonPages, ...useCasePages]

  const staticEntries = allPages.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : path.startsWith("/products/") ? 0.9 : path.startsWith("/compare/") ? 0.8 : 0.7,
  }))

  return [...staticEntries, ...articleEntries]
}
