import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const trustPartners = ["UNICEF", "NHSRC", "Ashwini", "Calcutta Kids", "Sewa Rural", "Mentor Together"]

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0f172a]">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f2847]" />

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Floating gradient orbs — pure CSS */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-[16%] w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
          style={{ animation: "float-orb-1 8s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-1/4 right-[16%] w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
          style={{ animation: "float-orb-2 10s ease-in-out infinite" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          style={{ animation: "float-orb-3 12s ease-in-out infinite" }}
        />
      </div>

      {/* Floating SVG shapes — pure CSS */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-[15%] right-[10%] w-16 h-16 border border-white/10 rounded-full"
          style={{ animation: "float-shape-1 10s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-[20%] left-[8%] w-12 h-12 border border-orange-400/15"
          style={{ animation: "float-shape-2 8s ease-in-out infinite" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="hero-animate-1">
          <Badge variant="outline" className="border-white/20 bg-white/5 text-white backdrop-blur-sm mb-6 px-4 py-1.5 text-sm">
            Non-profit technology for social impact
          </Badge>
        </div>

        <h1
          className="hero-animate-2 font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white"
        >
          Deep Engineering for{" "}
          <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
            Social Good
          </span>
        </h1>

        <p
          className="hero-animate-3 mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
        >
          Open-source products for health, education, and community development.
          Technology consulting and managed services for grassroots organizations across India.
        </p>

        <div
          className="hero-animate-4 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/25 rounded-xl px-7 h-12">
            <Link href="/products">
              Explore Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-white/5 border-white/20 text-white hover:bg-white/15 hover:text-white backdrop-blur-sm rounded-xl px-7 h-12">
            <Link href="/contact">
              <MessageCircle className="h-4 w-4" />
              Talk to Us
            </Link>
          </Button>
        </div>

        {/* Trust strip */}
        <div
          className="hero-animate-5 mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-xs uppercase tracking-widest text-white/60 mb-4">
            Trusted by leading organizations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {trustPartners.map((partner) => (
              <span
                key={partner}
                className="text-sm font-medium text-white/70 hover:text-white/90 transition-colors"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
