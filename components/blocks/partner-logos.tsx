"use client"

import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const partners = [
  { name: "UNICEF", sector: "Global Health" },
  { name: "NHSRC", sector: "Government" },
  { name: "Ashwini", sector: "Hospital Systems" },
  { name: "Calcutta Kids", sector: "Maternal Health" },
  { name: "Sewa Rural", sector: "Rural Health" },
  { name: "SEARCH", sector: "Community Health" },
  { name: "Yenepoya", sector: "Medical Research" },
  { name: "Mentor Together", sector: "Youth Development" },
  { name: "Arghyam", sector: "Water & Sanitation" },
  { name: "Shelter Associates", sector: "Urban Development" },
]

export function PartnerLogos() {
  return (
    <div className="text-center">
      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
        Trusted by leading organizations
      </p>
      <Separator className="max-w-xs mx-auto mb-6" />
      <div className="flex flex-wrap items-center justify-center gap-2">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Badge variant="outline" className="px-3 py-1.5 text-sm font-medium hover:bg-primary/5 hover:border-primary/20 transition-all cursor-default">
              {partner.name}
            </Badge>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
