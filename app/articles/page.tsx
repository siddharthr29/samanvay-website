import { Metadata } from "next"
import { Section } from "@/components/shared/section"
import { ArticleCards, type ArticleCardData } from "@/components/blocks/article-cards"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { getPublishedArticles } from "@/lib/notion"
import { breadcrumbJsonLd } from "@/lib/seo"
import { siteConfig } from "@/data/site-config"

export const metadata: Metadata = {
  title: "Articles",
  description: "Articles at the intersection of social sector and technology, based on our experience working with dozens of organizations.",
}

export const revalidate = 3600 // ISR: revalidate every hour

export default async function ArticlesPage() {
  const articles = await getPublishedArticles()

  const articleCards: ArticleCardData[] = articles.map((a) => ({
    title: a.title,
    slug: a.slug,
    description: a.description,
    category: a.category,
    date: a.date,
    coverImage: a.coverImage || undefined,
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
            ])
          ),
        }}
      />

      <Section>
        <Breadcrumbs items={[{ label: "Articles" }]} />
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Articles
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A knowledgebase for leaders in nonprofit organizations, on issues related to
            software technology and its use in community programs.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        {articleCards.length > 0 ? (
          <ArticleCards articles={articleCards} />
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              Articles are coming soon. Check back later!
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Connect your Notion database to start publishing articles.
            </p>
          </div>
        )}
      </Section>
    </>
  )
}
