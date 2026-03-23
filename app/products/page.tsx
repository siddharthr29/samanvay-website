import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight, Github, ExternalLink } from "lucide-react"
import { products } from "@/data/products"
import { breadcrumbJsonLd } from "@/lib/seo"
import { siteConfig } from "@/data/site-config"
import { getIcon } from "@/lib/icons"

export const metadata: Metadata = {
  title: "Products — Samanvay Foundation",
  description:
    "6 open-source products for India's social sector: Avni, Bahmni, Gunak, TeleSathi, Shwaas, Mentor To Go.",
}

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              { name: "Products", url: `${siteConfig.url}/products` },
            ])
          ),
        }}
      />

      {/* HERO */}
      <section className="relative bg-zinc-900 pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80"
          alt="People working on laptop"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-zinc-900/70" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[100px] animate-float-slow" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-amber-500/5 blur-[80px] animate-float-slower" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl mt-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Six Products. <span className="text-amber-500">One Mission.</span>
            </h1>
            <p className="mt-6 text-lg text-zinc-300 leading-relaxed max-w-2xl">
              Each built to solve a specific problem in India&apos;s social sector. All open source.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCT LIST */}
      <section className="relative py-16 md:py-24 bg-white dark:bg-zinc-950 overflow-hidden">
        <div className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full bg-amber-100/30 dark:bg-amber-900/10 blur-[80px] animate-float-slow" />
        <div className="absolute bottom-20 -left-20 w-[350px] h-[350px] rounded-full bg-orange-100/20 dark:bg-orange-900/5 blur-[80px] animate-float-slower" />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 space-y-12">
          {products.map((product) => {
            const Icon = getIcon(product.icon)
            return (
              <div key={product.slug} className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-10 p-6 md:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
                {/* Left: Logo + links */}
                <div className="flex flex-col items-start gap-4">
                  {product.logo ? (
                    <Image src={product.logo} alt={product.name} width={140} height={48} className="h-12 w-auto object-contain" />
                  ) : (
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${product.color}15` }}>
                      {Icon && <Icon className="w-7 h-7" style={{ color: product.color }} />}
                    </div>
                  )}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">{product.name}</h2>
                    <span className="inline-block mt-1 px-2.5 py-0.5 text-xs font-medium rounded-full text-white" style={{ backgroundColor: product.color }}>{product.sector}</span>
                  </div>
                  <p className="text-sm italic text-zinc-600 dark:text-zinc-300 border-l-2 pl-3" style={{ borderColor: product.color }}>
                    &ldquo;{product.humanStory}&rdquo;
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <Link href={`/products/${product.slug}`} className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-zinc-700 dark:hover:bg-zinc-100 transition-colors">
                      Explore <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a href={product.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-medium border border-zinc-300 dark:border-zinc-600 text-zinc-600 dark:text-zinc-300 hover:border-zinc-500 transition-colors">
                      <ExternalLink className="w-3.5 h-3.5" /> Website
                    </a>
                  </div>
                </div>

                {/* Right: Description + features */}
                <div>
                  <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-5">{product.description}</p>
                  {product.features && (
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-5">
                      {product.features.slice(0, 6).map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: product.color }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold uppercase tracking-wider" style={{ color: product.color }}>{product.impactStat}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* OPEN SOURCE */}
      <section className="py-16 md:py-24 bg-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-50" />
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Built in the open. Built to last.</h2>
          <p className="text-zinc-300 text-lg leading-relaxed mb-8">All our products are open source. The social sector deserves technology it can own — not just use.</p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {products.map((p) => (
              <a key={p.slug} href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-zinc-700 text-sm text-zinc-200 hover:bg-zinc-800 transition-colors">
                <Github className="h-4 w-4" /> {p.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white dark:bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 pattern-mobile" />
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight mb-4">Need help choosing?</h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">We&apos;ll help you find the best solution for your organization.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold px-8 py-4 rounded-full text-sm transition-colors">
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <div className="h-20 md:h-0" />
    </>
  )
}
