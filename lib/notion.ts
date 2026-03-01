import { Client } from "@notionhq/client"
import { NotionToMarkdown } from "notion-to-md"
import { localArticles } from "@/data/articles"

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

const n2m = new NotionToMarkdown({ notionClient: notion })

function useLocalArticles(): boolean {
  return !process.env.NOTION_API_KEY || !process.env.NOTION_ARTICLES_DB
}

export interface Article {
  id: string
  title: string
  slug: string
  description: string
  category: string
  tags: string[]
  date: string
  coverImage: string | null
  author: string
  featured: boolean
  published: boolean
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  photo: string | null
  experience: string
  order: number
  linkedin: string | null
  github: string | null
  active: boolean
}

function getPropertyValue(property: Record<string, unknown>): string {
  const type = property.type as string
  switch (type) {
    case "title":
      return ((property.title as Array<{ plain_text: string }>) || []).map(t => t.plain_text).join("")
    case "rich_text":
      return ((property.rich_text as Array<{ plain_text: string }>) || []).map(t => t.plain_text).join("")
    case "select":
      return (property.select as { name: string } | null)?.name || ""
    case "multi_select":
      return ((property.multi_select as Array<{ name: string }>) || []).map(s => s.name).join(", ")
    case "date":
      return (property.date as { start: string } | null)?.start || ""
    case "checkbox":
      return String(property.checkbox || false)
    case "number":
      return String(property.number || 0)
    case "url":
      return (property.url as string) || ""
    case "email":
      return (property.email as string) || ""
    case "files":
      {
        const files = property.files as Array<{ type: string; file?: { url: string }; external?: { url: string } }>
        if (files && files.length > 0) {
          const file = files[0]
          return file.type === "file" ? file.file?.url || "" : file.external?.url || ""
        }
        return ""
      }
    default:
      return ""
  }
}

export async function getPublishedArticles(): Promise<Article[]> {
  if (useLocalArticles()) {
    return localArticles.filter(a => a.published)
  }

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_ARTICLES_DB!,
      filter: {
        property: "Published",
        checkbox: { equals: true },
      },
      sorts: [
        { property: "Published Date", direction: "descending" },
      ],
    })

    return response.results.map((page) => {
      const props = (page as { properties: Record<string, Record<string, unknown>> }).properties
      return {
        id: page.id,
        title: getPropertyValue(props.Title),
        slug: getPropertyValue(props.Slug) || page.id,
        description: getPropertyValue(props["Meta Description"]),
        category: getPropertyValue(props.Category).split(", ")[0] || "",
        tags: getPropertyValue(props.Tags).split(", ").filter(Boolean),
        date: getPropertyValue(props["Published Date"]),
        coverImage: getPropertyValue(props["Cover Image"]) || null,
        author: getPropertyValue(props.Author) || "Samanvay Foundation",
        featured: getPropertyValue(props.Featured) === "true",
        published: true,
      }
    })
  } catch (error) {
    console.error("Failed to fetch articles from Notion:", error)
    return []
  }
}

export async function getArticleBySlug(slug: string): Promise<{ article: Article; markdown: string } | null> {
  if (useLocalArticles()) {
    const article = localArticles.find(a => a.slug === slug && a.published)
    if (!article) return null
    return { article, markdown: article.content }
  }

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_ARTICLES_DB!,
      filter: {
        and: [
          { property: "Slug", rich_text: { equals: slug } },
          { property: "Published", checkbox: { equals: true } },
        ],
      },
    })

    if (response.results.length === 0) return null

    const page = response.results[0]
    const props = (page as { properties: Record<string, Record<string, unknown>> }).properties

    const mdBlocks = await n2m.pageToMarkdown(page.id)
    const markdown = n2m.toMarkdownString(mdBlocks).parent

    return {
      article: {
        id: page.id,
        title: getPropertyValue(props.Title),
        slug: getPropertyValue(props.Slug) || page.id,
        description: getPropertyValue(props["Meta Description"]),
        category: getPropertyValue(props.Category).split(", ")[0] || "",
        tags: getPropertyValue(props.Tags).split(", ").filter(Boolean),
        date: getPropertyValue(props["Published Date"]),
        coverImage: getPropertyValue(props["Cover Image"]) || null,
        author: getPropertyValue(props.Author) || "Samanvay Foundation",
        featured: getPropertyValue(props.Featured) === "true",
        published: true,
      },
      markdown,
    }
  } catch (error) {
    console.error("Failed to fetch article:", error)
    return null
  }
}

export async function getArticleCategories(): Promise<string[]> {
  if (useLocalArticles()) {
    const categories = new Set(localArticles.filter(a => a.published).map(a => a.category).filter(Boolean))
    return Array.from(categories).sort()
  }

  try {
    const articles = await getPublishedArticles()
    const categories = new Set(articles.map(a => a.category).filter(Boolean))
    return Array.from(categories).sort()
  } catch {
    return []
  }
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  if (!process.env.NOTION_API_KEY || !process.env.NOTION_TEAM_DB) {
    return []
  }

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_TEAM_DB!,
      filter: {
        property: "Active",
        checkbox: { equals: true },
      },
      sorts: [
        { property: "Order", direction: "ascending" },
      ],
    })

    return response.results.map((page) => {
      const props = (page as { properties: Record<string, Record<string, unknown>> }).properties
      return {
        id: page.id,
        name: getPropertyValue(props.Name),
        role: getPropertyValue(props.Role),
        bio: getPropertyValue(props.Bio),
        photo: getPropertyValue(props.Photo) || null,
        experience: getPropertyValue(props.Experience),
        order: parseInt(getPropertyValue(props.Order)) || 0,
        linkedin: getPropertyValue(props.LinkedIn) || null,
        github: getPropertyValue(props.GitHub) || null,
        active: true,
      }
    })
  } catch (error) {
    console.error("Failed to fetch team members:", error)
    return []
  }
}
