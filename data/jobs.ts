export interface Job {
  title: string
  status: "open" | "closed"
  department?: string
  location?: string
  description: string
  skills: string[]
  detailsUrl?: string
}

export interface WhySamanvayCard {
  title: string
  description: string
}

export const whySamanvay: WhySamanvayCard[] = [
  {
    title: "Open Source First",
    description: "All our work is open source by default",
  },
  {
    title: "Extreme Programming",
    description: "We practice XP, pair programming, and TDD",
  },
  {
    title: "Domain Depth",
    description: "Work directly with nonprofits, understand real problems",
  },
  {
    title: "Small, Focused Team",
    description: "No bureaucracy, high impact per person",
  },
  {
    title: "Bangalore Based",
    description: "Work from our Indiranagar office",
  },
  {
    title: "Mission Driven",
    description: "Your code serves the people who need it most",
  },
]

export const jobs: Job[] = [
  {
    title: "Full-stack Product Engineer",
    status: "closed",
    department: "Engineering",
    location: "Bangalore",
    description:
      "Build and maintain open-source products for the social sector. Work across React, Java Spring, and mobile technologies.",
    skills: ["React JS", "React Native", "JavaScript", "NodeJS", "Java", "Spring", "SQL", "Docker", "AWS"],
    detailsUrl: "https://docs.google.com/document/d/1b9MkbcH4K2dRmlPv-lHgrwEAuZdGGz5O9l6X8XiVYQY",
  },
  {
    title: "Solution Engineer & Consultant",
    status: "closed",
    department: "Consulting",
    location: "Bangalore",
    description:
      "Implement and customize solutions for partner organizations. Combine technical skills with field experience.",
    skills: ["React JS", "React Native", "JavaScript", "NodeJS", "SQL", "Linux"],
  },
  {
    title: "Software Engineer",
    status: "closed",
    department: "Engineering",
    location: "Bangalore",
    description:
      "Develop features and maintain our open-source platforms with a focus on quality and simplicity.",
    skills: ["SQL", "JavaScript"],
  },
  {
    title: "Product Manager",
    status: "closed",
    department: "Product",
    location: "Bangalore",
    description:
      "Complete product management including functional story writing, product development process management, and consulting.",
    skills: ["Product Management", "Story Writing", "Consulting"],
  },
  {
    title: "Business Analyst",
    status: "closed",
    department: "Consulting",
    location: "Bangalore",
    description: "Solution development and consulting for partner organizations.",
    skills: ["Solution Development", "Consulting"],
  },
  {
    title: "Quality Analyst",
    status: "closed",
    department: "Engineering",
    location: "Bangalore",
    description:
      "Ensure quality of our platforms through manual testing and automation.",
    skills: ["Manual Testing", "Automation"],
  },
]

export const workCulture = {
  intro:
    "We look for people who are passionate about their craft and want to work for social development.",
  highlights: [
    "Work on open-source products used by grassroots organizations",
    "Practice eXtreme Programming (XP) — pair programming, TDD, continuous delivery",
    "Small, collaborative team with deep engineering culture",
    "Direct impact on healthcare, education, and social welfare",
    "Based in Bangalore, India",
  ],
  cultureStatement:
    "We practice Extreme Programming — pair programming, test-driven development, and continuous integration. We believe in sustainable pace and deep collaboration. Our team works directly with nonprofit partners, understanding their context before writing code.",
  contactEmail: "careers@samanvayfoundation.org",
}
