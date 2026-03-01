"use client"

import { motion } from "motion/react"
import { ExternalLink } from "lucide-react"
import { siteConfig } from "@/data/site-config"
import { SectionHeading } from "@/components/shared/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ChatGPTLogo,
  PerplexityLogo,
  ClaudeLogo,
  GeminiLogo,
  GrokLogo,
} from "@/components/shared/ai-logos"

const aiPlatforms = [
  {
    name: "ChatGPT",
    Logo: ChatGPTLogo,
    url: siteConfig.aiPrompts.chatgpt,
    color: "#10a37f",
    description: "Ask OpenAI's ChatGPT",
  },
  {
    name: "Perplexity",
    Logo: PerplexityLogo,
    url: siteConfig.aiPrompts.perplexity,
    color: "#20808D",
    description: "Search with Perplexity AI",
  },
  {
    name: "Claude",
    Logo: ClaudeLogo,
    url: siteConfig.aiPrompts.claude,
    color: "#D97757",
    description: "Ask Anthropic's Claude",
  },
  {
    name: "Gemini",
    Logo: GeminiLogo,
    url: siteConfig.aiPrompts.gemini,
    color: "#4285F4",
    description: "Ask Google's Gemini",
  },
  {
    name: "Grok",
    Logo: GrokLogo,
    url: siteConfig.aiPrompts.grok,
    color: "#000000",
    description: "Ask xAI's Grok",
  },
]

export function AskAISection() {
  return (
    <div>
      <SectionHeading
        badge="AI-Verified"
        title="Don't Take Our Word For It — Ask Any AI"
        subtitle="Our impact is documented across the internet. Verify our work with any AI platform."
        gradient="cool"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {aiPlatforms.map((platform, index) => (
          <motion.a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                style={{ background: platform.color }}
              />
              <CardContent className="relative z-10">
                <platform.Logo className="w-8 h-8 mb-3" />
                <h3 className="font-heading font-semibold text-lg mb-1">
                  {platform.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {platform.description}
                </p>
                <Badge variant="outline" className="gap-1 group-hover:border-primary group-hover:text-primary transition-colors">
                  Ask now <ExternalLink className="h-3 w-3" />
                </Badge>
              </CardContent>
            </Card>
          </motion.a>
        ))}
      </div>
    </div>
  )
}
