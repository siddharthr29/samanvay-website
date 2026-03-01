import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { AnimateIn } from "@/components/shared/animate-in"

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
          <AnimateIn
            key={partner.name}
            variant="fade-scale"
            delay={index * 0.05}
          >
            <Badge variant="outline" className="px-3 py-1.5 text-sm font-medium hover:bg-primary/5 hover:border-primary/20 transition-all cursor-default">
              {partner.name}
            </Badge>
          </AnimateIn>
        ))}
      </div>
    </div>
  )
}
