"use client"

import Link from "next/link"
import { motion } from "motion/react"
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

      {/* Floating gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/6 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 20, -20, 0], y: [0, -20, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating SVG shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-[15%] right-[10%] w-16 h-16 border border-white/10 rounded-full"
          animate={{ y: [0, -15, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[20%] left-[8%] w-12 h-12 border border-orange-400/15 rotate-45"
          animate={{ y: [0, 20, 0], rotate: [45, 90, 45] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Badge variant="outline" className="border-white/20 bg-white/5 text-white backdrop-blur-sm mb-6 px-4 py-1.5 text-sm">
            Non-profit technology for social impact
          </Badge>
        </motion.div>

        <motion.h1
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Deep Engineering for{" "}
          <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
            Social Good
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Open-source products for health, education, and community development.
          Technology consulting and managed services for grassroots organizations across India.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
        </motion.div>

        {/* Trust strip */}
        <motion.div
          className="mt-16 pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
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
        </motion.div>
      </div>
    </section>
  )
}
