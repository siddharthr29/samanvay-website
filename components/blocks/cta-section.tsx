import Link from "next/link"
import { ArrowRight, Mail, MessageSquare, Phone, Video } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CTASectionProps {
  title?: string
  description?: string
  buttonText?: string
  buttonHref?: string
}

export function CTASection({
  title = "Which products suit your needs?",
  description = "Let us help you find the right technology solution for your organization.",
  buttonText = "Schedule a Call",
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <div className="relative rounded-3xl overflow-hidden">
      {/* Multi-layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f2847]" />
      <div className="absolute inset-0 dot-pattern opacity-20" />

      {/* Animated orbs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/15 rounded-full blur-3xl" />

      <div className="relative z-10 p-8 md:p-12 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Content */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/25 rounded-xl h-12">
                <Link href={buttonHref}>
                  {buttonText}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/5 border-white/20 text-white hover:bg-white/15 hover:text-white backdrop-blur-sm rounded-xl h-12">
                <a href="mailto:hello@samanvayfoundation.org">
                  <Mail className="h-4 w-4" />
                  Email Us
                </a>
              </Button>
            </div>
            <p className="mt-6 text-sm text-white/60">
              Serving 20+ organizations across India
            </p>
          </div>

          {/* Right: Contact graphic */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-64 h-52">
              {/* Chat bubble - main */}
              <div className="absolute top-2 left-4 right-8 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl rounded-bl-sm p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Let&apos;s talk</div>
                    <div className="text-xs text-white/50">We respond within 24 hours</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-white/10 rounded-full w-full" />
                  <div className="h-2 bg-white/10 rounded-full w-3/4" />
                </div>
              </div>

              {/* Floating contact method icons */}
              <div className="absolute bottom-4 left-6 flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-orange-400" />
                </div>
                <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                  <Video className="w-5 h-5 text-blue-400" />
                </div>
                <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-emerald-400" />
                </div>
              </div>

              {/* Decorative dot */}
              <div className="absolute top-0 right-4 w-3 h-3 rounded-full bg-orange-400/60" />
              <div className="absolute bottom-12 right-2 w-2 h-2 rounded-full bg-blue-400/40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
