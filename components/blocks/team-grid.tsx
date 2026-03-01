"use client"

import { motion } from "motion/react"
import { Linkedin, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export interface TeamMember {
  name: string
  role: string
  bio: string
  photo?: string
  linkedin?: string
  github?: string
}

function getInitials(name: string) {
  const parts = name.split(" ")
  if (parts.length >= 2) return parts[0][0] + parts[parts.length - 1][0]
  return name.substring(0, 2)
}

function nameToGradient(name: string) {
  const gradients = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-orange-500 to-red-500",
    "from-green-500 to-teal-500",
    "from-indigo-500 to-purple-500",
    "from-pink-500 to-rose-500",
    "from-cyan-500 to-blue-500",
    "from-amber-500 to-orange-500",
  ]
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  return gradients[Math.abs(hash) % gradients.length]
}

function getRoleBadge(role: string) {
  const lower = role.toLowerCase()
  if (lower.includes("co-founder")) return "default" as const
  if (lower.includes("architect")) return "secondary" as const
  if (lower.includes("engineer") || lower.includes("developer")) return "outline" as const
  if (lower.includes("product")) return "secondary" as const
  if (lower.includes("analyst")) return "outline" as const
  return "outline" as const
}

export function TeamGrid({ members }: { members: TeamMember[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {members.map((member, index) => {
        const badgeVariant = getRoleBadge(member.role)
        return (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <Card className="h-full text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6">
                <Avatar className="w-20 h-20 mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                  <AvatarFallback className={`bg-gradient-to-br ${nameToGradient(member.name)} text-white font-heading text-xl font-bold`}>
                    {getInitials(member.name)}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-heading font-semibold">{member.name}</h3>
                <p className="text-sm text-primary font-medium mt-1">{member.role}</p>
                <Badge variant={badgeVariant} className="mt-2">
                  {member.role.split("&")[0].trim().split(" ").slice(-1)[0]}
                </Badge>
                {member.bio && (
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                )}
                <div className="flex items-center justify-center gap-1 mt-4">
                  {member.linkedin && (
                    <Button variant="ghost" size="icon-xs" asChild>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {member.github && (
                    <Button variant="ghost" size="icon-xs" asChild>
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} GitHub`}
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )
      })}
    </div>
  )
}
