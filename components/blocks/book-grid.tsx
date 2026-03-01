"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { books, type Book } from "@/data/books"
import { cn } from "@/lib/utils"

const categoryStyles: Record<string, { gradient: string; emoji: string }> = {
  Engineering: { gradient: "from-blue-600 to-cyan-500", emoji: "💻" },
  Strategy: { gradient: "from-orange-500 to-amber-500", emoji: "🎯" },
  "Social Development": { gradient: "from-green-600 to-emerald-500", emoji: "🌱" },
  Management: { gradient: "from-purple-600 to-violet-500", emoji: "📊" },
  Design: { gradient: "from-pink-500 to-rose-500", emoji: "🎨" },
  "Health Tech": { gradient: "from-red-500 to-rose-500", emoji: "🏥" },
}

function getStyle(category?: string) {
  if (!category) return { gradient: "from-gray-500 to-gray-600", emoji: "📖" }
  return categoryStyles[category] || { gradient: "from-gray-500 to-gray-600", emoji: "📖" }
}

export function BookGrid() {
  const categories = Array.from(new Set(books.map(b => b.category).filter(Boolean)))
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filtered = activeCategory
    ? books.filter(b => b.category === activeCategory)
    : books

  return (
    <div>
      <div className="flex items-center gap-2 mb-8 flex-wrap">
        <button
          onClick={() => setActiveCategory(null)}
          className={cn(
            "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
            !activeCategory
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:text-foreground"
          )}
        >
          All
        </button>
        {categories.map((cat) => {
          const style = getStyle(cat!)
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat!)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-colors inline-flex items-center gap-1.5",
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              <span>{style.emoji}</span>
              {cat}
            </button>
          )
        })}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((book) => {
            const style = getStyle(book.category)
            return (
              <motion.a
                key={book.title}
                href={book.url}
                target="_blank"
                rel="noopener noreferrer"
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group p-4 rounded-xl border bg-card hover:shadow-md transition-all hover:-translate-y-1"
              >
                {/* CSS book cover */}
                <div className={`aspect-[3/4] rounded-lg bg-gradient-to-br ${style.gradient} relative overflow-hidden flex items-center justify-center mb-3`}>
                  <div className="absolute inset-0 dot-pattern opacity-20" />
                  <span className="text-3xl relative z-10">{style.emoji}</span>
                </div>
                <h3 className="text-sm font-medium leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                  {book.title}
                </h3>
                {book.category && (
                  <p className="text-xs text-muted-foreground mt-1">{book.category}</p>
                )}
              </motion.a>
            )
          })}
        </AnimatePresence>
      </div>
    </div>
  )
}
