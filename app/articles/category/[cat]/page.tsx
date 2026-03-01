import { Metadata } from "next"
import { Section } from "@/components/shared/section"
import { ArticleCards, type ArticleCardData } from "@/components/blocks/article-cards"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { getPublishedArticles, getArticleCategories } from "@/lib/notion"
import { breadcrumbJsonLd } from "@/lib/seo"
import { siteConfig } from "@/data/site-config"

export const revalidate = 3600

export async function generateStaticParams() {
  const categories = await getArticleCategories()
  return categories.map((cat) => ({
    cat: cat.toLowerCase().replace(/\s+/g, "-"),
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ cat: string }> }): Promise<Metadata> {
  const { cat } = await params
  const categoryName = cat.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
  return {
    title: `${categoryName} Articles`,
    description: `Articles about ${categoryName} from Samanvay Foundation.`,
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ cat: string }> }) {
  const { cat } = await params
  const categoryName = cat.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())

  const articles = await getPublishedArticles()
  const filtered = articles.filter(
    (a) => a.category.toLowerCase().replace(/\s+/g, "-") === cat
  )

  const articleCards: ArticleCardData[] = filtered.map((a) => ({
    title: a.title,
    slug: a.slug,
    description: a.description,
    category: a.category,
    date: a.date,
    author: a.author,
  }))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              { name: "Articles", url: `${siteConfig.url}/articles` },
              { name: categoryName, url: `${siteConfig.url}/articles/category/${cat}` },
            ])
          ),
        }}
      />

      <Section>
        <Breadcrumbs
          items={[
            { label: "Articles", href: "/articles" },
            { label: categoryName },
          ]}
        />
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            {categoryName}
          </h1>
          <p className="text-lg text-muted-foreground">
            Articles about {categoryName.toLowerCase()} from the Samanvay team.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        {articleCards.length > 0 ? (
          <ArticleCards articles={articleCards} />
        ) : (
          <p className="text-muted-foreground text-center py-8">
            No articles in this category yet.
          </p>
        )}
      </Section>
    </>
  )
}
