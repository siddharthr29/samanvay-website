"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const steps = [
  {
    emoji: "💬",
    title: "Share Your Need",
    description: "Tell us about your context, field operations, and technology requirements. We listen first and understand your grassroots reality before suggesting solutions.",
    color: "#4f46e5",
  },
  {
    emoji: "🔍",
    title: "Choose Product",
    description: "We help you evaluate our open-source products and recommend the best fit for your organization's specific needs, budget, and scale.",
    color: "#0891b2",
  },
  {
    emoji: "🔧",
    title: "Customize & Integrate",
    description: "We configure, customize, and integrate the product for your workflows. Training your team and migrating existing data for a smooth transition.",
    color: "#059669",
  },
  {
    emoji: "🚀",
    title: "Launch & Support",
    description: "Deploy, go live, and grow with ongoing managed services. We continuously evolve the system as your needs change and scale.",
    color: "#ea580c",
  },
]

export function ProcessSteps() {
  return (
    <div className="relative">
      {/* Gradient connecting line (desktop) */}
      <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#4f46e5] via-[#059669] to-[#ea580c] opacity-30" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
          >
            <Card
              className="h-full hover:shadow-md transition-all duration-300"
              style={{ borderTopColor: step.color, borderTopWidth: '3px' }}
            >
              <CardContent>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{step.emoji}</span>
                  <Badge
                    className="rounded-full text-white text-xs font-bold w-7 h-7 p-0 justify-center"
                    style={{ backgroundColor: step.color }}
                  >
                    {index + 1}
                  </Badge>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
