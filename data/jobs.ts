export interface Job {
  title: string
  status: "open" | "closed"
  description: string
  skills: string[]
  detailsUrl?: string
}

export const jobs: Job[] = [
  {
    title: "Full-stack Product Engineer",
    status: "closed",
    description: "Build and maintain open-source products for the social sector. Work across React, Java Spring, and mobile technologies.",
    skills: ["React JS", "React Native", "JavaScript", "NodeJS", "Java", "Spring", "SQL", "Docker", "AWS"],
    detailsUrl: "https://docs.google.com/document/d/1b9MkbcH4K2dRmlPv-lHgrwEAuZdGGz5O9l6X8XiVYQY",
  },
  {
    title: "Solution Engineer & Consultant",
    status: "closed",
    description: "Implement and customize solutions for partner organizations. Combine technical skills with field experience.",
    skills: ["React JS", "React Native", "JavaScript", "NodeJS", "SQL", "Linux"],
  },
  {
    title: "Software Engineer",
    status: "closed",
    description: "Develop features and maintain our open-source platforms with a focus on quality and simplicity.",
    skills: ["SQL", "JavaScript"],
  },
  {
    title: "Product Manager",
    status: "closed",
    description: "Complete product management including functional story writing, product development process management, and consulting.",
    skills: ["Product Management", "Story Writing", "Consulting"],
  },
  {
    title: "Business Analyst",
    status: "closed",
    description: "Solution development and consulting for partner organizations.",
    skills: ["Solution Development", "Consulting"],
  },
  {
    title: "Quality Analyst",
    status: "closed",
    description: "Ensure quality of our platforms through manual testing and automation.",
    skills: ["Manual Testing", "Automation"],
  },
]

export const workCulture = {
  intro: "We look for people who are passionate about their craft and want to work for social development.",
  highlights: [
    "Work on open-source products used by grassroots organizations",
    "Practice eXtreme Programming (XP) — pair programming, TDD, continuous delivery",
    "Small, collaborative team with deep engineering culture",
    "Direct impact on healthcare, education, and social welfare",
    "Based in Bangalore, India",
  ],
  contactEmail: "careers@samanvayfoundation.org",
}
