export interface Service {
  title: string
  description: string
  icon: string
  emoji: string
  color: string
  includes: string[]
}

export const services: Service[] = [
  {
    title: "Product Development",
    description: "We conceive, design, and build open-source software products tailored for the social sector. Our products are robust, widely used, and the right starting point for most grassroots organizations.",
    icon: "Code",
    emoji: "💻",
    color: "#4f46e5",
    includes: ["Custom product design", "Open-source development", "MVP to scale"],
  },
  {
    title: "Product Implementation",
    description: "We customize and deploy our products to fit your organization's specific context, workflows, and requirements. From configuration to training, we ensure smooth adoption.",
    icon: "Rocket",
    emoji: "🚀",
    color: "#0891b2",
    includes: ["Configuration & setup", "Training & onboarding", "Data migration"],
  },
  {
    title: "Managed Service",
    description: "We provide ongoing maintenance, support, and evolution of your technology systems. A sustainable approach that prevents years lost in technology adoption challenges.",
    icon: "Settings",
    emoji: "⚙️",
    color: "#059669",
    includes: ["24/7 monitoring", "Updates & patches", "Performance tuning"],
  },
  {
    title: "Software Integration",
    description: "We integrate multiple systems and platforms to create seamless data flows. From Avni-Bahmni integration to custom API connections, we connect your technology ecosystem.",
    icon: "Plug",
    emoji: "🔗",
    color: "#7c3aed",
    includes: ["API development", "System-to-system data flow", "Bahmni-Avni integration"],
  },
  {
    title: "Open Source",
    description: "We believe in open source as the foundation for technology in the social sector. We contribute to, maintain, and help organizations adopt open-source solutions.",
    icon: "Globe",
    emoji: "🌐",
    color: "#ea580c",
    includes: ["Community contribution", "Fork & customize", "Long-term sustainability"],
  },
]
