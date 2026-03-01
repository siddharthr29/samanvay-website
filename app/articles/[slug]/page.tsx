import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Section } from "@/components/shared/section"
import { ArticleRenderer } from "@/components/article/article-renderer"
import { TableOfContents } from "@/components/article/table-of-contents"
import { ShareButtons } from "@/components/article/share-buttons"
import { ReadingProgress } from "@/components/article/reading-progress"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { getArticleBySlug, getPublishedArticles } from "@/lib/notion"
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo"
import { siteConfig } from "@/data/site-config"
import { formatDate } from "@/lib/utils"
import { Calendar, User, Clock, ArrowRight } from "lucide-react"

export const revalidate = 3600

export async function generateStaticParams() {
  const articles = await getPublishedArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const result = await getArticleBySlug(slug)
  if (!result) return { title: "Article Not Found" }

  return {
    title: result.article.title,
    description: result.article.description,
    openGraph: {
      title: result.article.title,
      description: result.article.description,
      type: "article",
      publishedTime: result.article.date,
      authors: [result.article.author],
    },
  }
}

function calculateReadTime(content: string): number {
  const words = content.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / 230))
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const result = await getArticleBySlug(slug)

  if (!result) {
    notFound()
  }

  const { article, markdown } = result
  const articleUrl = `${siteConfig.url}/articles/${article.slug}`
  const readTime = calculateReadTime(markdown)

  // Get related articles (same category first, then others, exclude current)
  const allArticles = await getPublishedArticles()
  const otherArticles = allArticles.filter(a => a.slug !== article.slug)
  const sameCategory = otherArticles.filter(a => a.category === article.category)
  const different = otherArticles.filter(a => a.category !== article.category)
  const related = [...sameCategory, ...different].slice(0, 4)

  return (
    <>
      <ReadingProgress readTime={readTime} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: article.title,
              description: article.description,
              url: articleUrl,
              datePublished: article.date,
              author: article.author,
              image: article.coverImage || undefined,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              { name: "Articles", url: `${siteConfig.url}/articles` },
              { name: article.title, url: articleUrl },
            ])
          ),
        }}
      />

      <Section>
        <Breadcrumbs
          items={[
            { label: "Articles", href: "/articles" },
            { label: article.title },
          ]}
        />

        <div className="max-w-4xl">
          {article.category && (
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
              {article.category}
            </span>
          )}
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            {article.author && (
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {article.author}
              </span>
            )}
            {article.date && (
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formatDate(article.date)}
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {readTime} min read
            </span>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-12 max-w-6xl">
          <div className="max-w-3xl">
            <ArticleRenderer content={markdown} />
            <div className="mt-12 pt-8 border-t">
              <ShareButtons url={articleUrl} title={article.title} />
            </div>
          </div>

          {/* Right sidebar */}
          <aside className="hidden xl:block">
            <div className="sticky top-24 space-y-8">
              <TableOfContents content={markdown} />

              {related.length > 0 && (
                <div>
                  <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">
                    More Articles
                  </h4>
                  <div className="space-y-4">
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        href={`/articles/${r.slug}`}
                        className="group block p-3 -mx-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <span className="inline-block px-2 py-0.5 text-[10px] font-medium bg-primary/10 text-primary rounded-full mb-1.5">
                          {r.category}
                        </span>
                        <h5 className="text-sm font-medium leading-snug group-hover:text-primary transition-colors line-clamp-2">
                          {r.title}
                        </h5>
                        <p className="text-xs text-muted-foreground mt-1">
                          {formatDate(r.date)}
                        </p>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/articles"
                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-4"
                  >
                    All articles
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              )}
            </div>
          </aside>
        </div>
      </Section>
    </>
  )
}
