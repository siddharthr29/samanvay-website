"use client"

import { motion } from "motion/react"
import { services } from "@/data/services"
import { getIcon } from "@/lib/icons"
import { Check } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

function ServiceIcon({ iconName, className }: { iconName: string; className?: string }) {
  const Icon = getIcon(iconName)
  if (!Icon) return null
  return <Icon className={className} />
}

export function FeatureCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Card
            className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            style={{ borderTopColor: service.color, borderTopWidth: '3px' }}
          >
            <CardHeader>
              <div className="flex items-center gap-3">
                <div
                  className="p-3 rounded-xl"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <ServiceIcon iconName={service.icon} className="h-6 w-6" />
                </div>
                <span className="text-2xl">{service.emoji}</span>
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="font-heading font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>

              <Separator className="mb-3" />
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Includes</p>
              <ul className="space-y-1.5">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-3.5 w-3.5 shrink-0" style={{ color: service.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
