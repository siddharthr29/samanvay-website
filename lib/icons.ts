import { icons } from "lucide-react"

export function getIcon(name: string) {
  return icons[name as keyof typeof icons] || null
}
