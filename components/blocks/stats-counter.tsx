"use client"

import { motion } from "motion/react"
import { AnimatedCounter } from "@/components/shared/animated-counter"

const stats = [
  { emoji: "🏗️", value: 50, suffix: "+", label: "Projects", subtitle: "Health, education & welfare programs across India", color: "#4f46e5" },
  { emoji: "🤝", value: 20, suffix: "+", label: "Partners", subtitle: "NGOs, governments & grassroots organizations", color: "#0891b2" },
  { emoji: "📅", value: 8, suffix: "+", label: "Years", subtitle: "Building technology for social impact since 2017", color: "#059669" },
  { emoji: "🌍", value: 500, suffix: "+", label: "Deployments", subtitle: "Bahmni hospital systems deployed worldwide", color: "#ea580c" },
]

export function StatsCounter() {
  return (
    <div className="relative rounded-3xl overflow-hidden py-16 px-6 md:px-12">
      {/* Mesh background */}
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="glass-card rounded-2xl p-6 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <span className="text-3xl mb-3 block">{stat.emoji}</span>
            <div className="font-heading text-4xl md:text-5xl font-bold text-white">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-2 text-white font-semibold text-lg">{stat.label}</p>
            <p className="mt-1 text-slate-200 text-xs leading-relaxed">{stat.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
