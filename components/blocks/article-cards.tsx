"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { Calendar, ArrowRight } from "lucide-react"
import { formatDate } from "@/lib/utils"

export interface ArticleCardData {
  title: string
  slug: string
  description?: string
  category?: string
  date?: string
  coverImage?: string
  author?: string
}

export function ArticleCards({ articles }: { articles: ArticleCardData[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <motion.div
          key={article.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Link
            href={`/articles/${article.slug}`}
            className="group block rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full overflow-hidden"
          >
            {/* Decorative top gradient */}
            <div className="h-1 bg-gradient-to-r from-primary via-blue-400 to-primary" />
            <div className="p-6">
              {article.category && (
                <span className="inline-block px-2.5 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                  {article.category}
                </span>
              )}
              <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {article.title}
              </h3>
              {article.description && (
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {article.description}
                </p>
              )}
              <div className="flex items-center justify-between mt-auto">
                {article.date && (
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {formatDate(article.date)}
                  </span>
                )}
                <span className="text-sm text-primary font-medium inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Read <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
