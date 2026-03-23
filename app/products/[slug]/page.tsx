import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, ExternalLink, Check, Users, Globe, Shield } from "lucide-react"
import { products } from "@/data/products"
import { projects } from "@/data/projects"
import { softwareJsonLd, breadcrumbJsonLd } from "@/lib/seo"
import { siteConfig } from "@/data/site-config"

const PRODUCT_IMAGES: Record<string, { hero: string; inAction: string; context: string }> = {
  avni: {
    hero: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
    inAction: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80",
    context: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
  },
  bahmni: {
    hero: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80",
    inAction: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&q=80",
    context: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&q=80",
  },
  gunak: {
    hero: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=1200&q=80",
    inAction: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    context: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
  },
  telesathi: {
    hero: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    inAction: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
    context: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
  },
  shwaas: {
    hero: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1200&q=80",
    inAction: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    context: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&q=80",
  },
  "mentor-to-go": {
    hero: "https://images.unsplash.com/photo-1497375638960-ca368c7231e4?w=1200&q=80",
    inAction: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    context: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
  },
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const product = products.find((p) => p.slug === slug)
    if (!product) return { title: "Product Not Found" }
    return { title: product.name, description: product.description }
  })
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) notFound()

  const images = PRODUCT_IMAGES[slug] || PRODUCT_IMAGES.avni
  const relatedProjects = projects.filter(p => p.products.includes(product.name)).slice(0, 4)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd(product)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([
        { name: "Home", url: siteConfig.url },
        { name: "Products", url: `${siteConfig.url}/products` },
        { name: product.name, url: `${siteConfig.url}/products/${product.slug}` },
      ])) }} />

      {/* HERO with real image */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <Image src={images.hero} alt={product.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-zinc-900/75" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[100px] animate-float-slow" style={{ backgroundColor: `${product.color}15` }} />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Link href="/products" className="inline-flex items-center gap-1.5 text-sm text-zinc-300 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4" /> All Products
              </Link>
              <div className="flex items-center gap-4 mb-6">
                {product.logo && (
                  <div className="p-3 bg-white rounded-xl shadow-lg">
                    <Image src={product.logo} alt={product.name} width={56} height={56} className="h-14 w-14 object-contain" />
                  </div>
                )}
                <span className="px-3 py-1 text-xs font-bold rounded-full text-white uppercase tracking-wider" style={{ backgroundColor: product.color }}>
                  {product.sector}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">{product.name}</h1>
              <p className="text-xl text-zinc-200 mb-2">{product.tagline}</p>
              <p className="text-lg font-semibold mb-8" style={{ color: product.color }}>{product.impact}</p>
              <div className="flex flex-wrap gap-3">
                <a href={product.url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-full transition-colors" style={{ backgroundColor: product.color }}>
                  Visit Website <ExternalLink className="w-4 h-4" />
                </a>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
                  Get in Touch
                </Link>
              </div>
            </div>
            {/* Human story card */}
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <p className="text-xl text-white leading-relaxed" style={{ fontFamily: 'Playfair Display, Georgia, serif', fontStyle: 'italic' }}>
                  &ldquo;{product.humanStory}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <Users className="w-5 h-5 text-zinc-400" />
                  <span className="text-sm text-zinc-300">Built for: {product.protagonist}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT + FEATURES */}
      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        <div className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full bg-amber-100/30 blur-[80px] animate-float-slow" />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-4">About</p>
              <h2 className="text-3xl font-bold text-zinc-900 tracking-tight mb-6">What is {product.name}?</h2>
              <p className="text-zinc-600 leading-relaxed text-lg">{product.longDescription || product.description}</p>

              {/* Key stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                  <Globe className="w-5 h-5 text-amber-600 mx-auto mb-2" />
                  <div className="text-xs font-medium text-zinc-500 uppercase">Open Source</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                  <Shield className="w-5 h-5 text-amber-600 mx-auto mb-2" />
                  <div className="text-xs font-medium text-zinc-500 uppercase">Offline-First</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                  <Users className="w-5 h-5 text-amber-600 mx-auto mb-2" />
                  <div className="text-xs font-medium text-zinc-500 uppercase">{product.impactStat.split(',')[0]}</div>
                </div>
              </div>
            </div>

            {product.features && (
              <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-200">
                <h3 className="text-xl font-bold text-zinc-900 mb-6">Key Features</h3>
                <ul className="space-y-4">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: `${product.color}15` }}>
                        <Check className="w-3.5 h-3.5" style={{ color: product.color }} />
                      </div>
                      <span className="text-zinc-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* IN ACTION — Parallax image */}
      <section className="relative h-[40vh] min-h-[250px] flex items-center justify-center parallax-bg" style={{ backgroundImage: `url(${images.inAction})` }}>
        <div className="absolute inset-0" style={{ backgroundColor: `${product.color}CC` }} />
        <div className="relative text-center px-5">
          <p className="text-3xl md:text-4xl font-bold text-white tracking-tight">{product.name} in Action</p>
          <p className="mt-3 text-white/80 text-lg">{product.impactStat}</p>
        </div>
      </section>

      {/* RELATED PROJECTS */}
      {relatedProjects.length > 0 && (
        <section className="py-20 md:py-28 bg-zinc-50">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3">On The Ground</p>
            <h2 className="text-3xl font-bold text-zinc-900 tracking-tight mb-10">Organizations using {product.name}</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {relatedProjects.map((project) => (
                <div key={project.partner} className="bg-white rounded-2xl p-6 border border-zinc-200 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">{project.partner}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CONTEXT IMAGE + CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <Image src={images.context} alt="Context" fill className="object-cover" />
        <div className="absolute inset-0 bg-zinc-900/80" />
        <div className="relative mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Interested in <span style={{ color: product.color }}>{product.name}</span>?
          </h2>
          <p className="mt-4 text-zinc-300 text-lg">Let us help you evaluate and implement this product for your organization.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold px-8 py-4 rounded-full text-sm transition-colors">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/products" className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-sm hover:bg-white/10 transition-colors">
              <ArrowLeft className="w-4 h-4" /> All Products
            </Link>
          </div>
        </div>
      </section>

      <div className="h-20 md:h-0" />
    </>
  )
}
