"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { products, type Product } from "@/data/products"
import { cn } from "@/lib/utils"
import { getIcon } from "@/lib/icons"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

function ProductIcon({ iconName, className }: { iconName: string; className?: string }) {
  const Icon = getIcon(iconName)
  if (!Icon) return null
  return <Icon className={className} />
}

function BentoCard({ product, index, large }: { product: Product; index: number; large?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/products/${product.slug}`} className="group block h-full">
        <Card className={cn(
          "h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden",
          large && "md:p-2"
        )}>
          {/* Decorative gradient orb */}
          <div
            className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"
            style={{ backgroundColor: product.color }}
          />

          <CardContent className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                {product.logo ? (
                  <div
                    className="p-2 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${product.color}10` }}
                  >
                    <Image
                      src={product.logo}
                      alt={`${product.name} logo`}
                      width={32}
                      height={32}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                ) : (
                  <div
                    className="p-3 rounded-xl"
                    style={{ backgroundColor: `${product.color}15` }}
                  >
                    <ProductIcon iconName={product.icon} className="h-6 w-6" />
                  </div>
                )}
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className={cn("font-heading font-bold mb-2", large ? "text-2xl" : "text-xl")}>
              {product.name}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              {product.tagline}
            </p>
            <Badge
              variant="secondary"
              className="text-xs"
              style={{
                backgroundColor: `${product.tagColor}12`,
                color: product.tagColor,
              }}
            >
              {product.impact}
            </Badge>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}

export function BentoGrid() {
  const builtByUs = products.filter(p => p.category === "built-by-us")

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {builtByUs.map((product, index) => (
          <BentoCard
            key={product.slug}
            product={product}
            index={index}
            large={index === 0}
          />
        ))}
      </div>
    </div>
  )
}
