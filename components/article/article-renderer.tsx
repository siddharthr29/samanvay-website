"use client"

import Markdown from "markdown-to-jsx"

interface ArticleRendererProps {
  content: string
}

function sanitizeMarkdown(content: string): string {
  return content
    // Normalize line endings
    .replace(/\r\n/g, '\n')
    // Remove null bytes
    .replace(/\0/g, '')
    // Ensure paragraphs are properly separated
    .replace(/\n{3,}/g, '\n\n')
}

export function ArticleRenderer({ content }: ArticleRendererProps) {
  const cleanContent = sanitizeMarkdown(content)

  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-heading prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-pre:bg-muted prose-pre:border">
      <Markdown
        options={{
          forceBlock: true,
          overrides: {
            h1: { props: { className: "text-3xl font-bold mt-8 mb-4" } },
            h2: { props: { className: "text-2xl font-bold mt-8 mb-3" } },
            h3: { props: { className: "text-xl font-semibold mt-6 mb-3" } },
            p: { props: { className: "mb-4 leading-relaxed" } },
            ul: { props: { className: "mb-4 space-y-1" } },
            ol: { props: { className: "mb-4 space-y-1" } },
            li: { props: { className: "leading-relaxed" } },
            blockquote: { props: { className: "border-l-4 border-primary pl-4 italic my-6 text-muted-foreground" } },
            code: { props: { className: "bg-muted px-1.5 py-0.5 rounded text-sm font-mono" } },
            pre: { props: { className: "bg-muted p-4 rounded-xl overflow-x-auto my-6 border" } },
            img: { props: { className: "rounded-xl my-6" } },
            a: { props: { className: "text-primary hover:underline", target: "_blank", rel: "noopener noreferrer" } },
            hr: { props: { className: "my-8 border-border" } },
            table: { props: { className: "w-full my-6 border-collapse" } },
            th: { props: { className: "border p-2 bg-muted font-semibold text-left text-sm" } },
            td: { props: { className: "border p-2 text-sm" } },
          },
        }}
      >
        {cleanContent}
      </Markdown>
    </div>
  )
}
