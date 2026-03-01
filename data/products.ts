export interface Product {
  name: string
  slug: string
  tagline: string
  description: string
  longDescription?: string
  url: string
  icon: string
  color: string
  features?: string[]
  category: "built-by-us" | "built-for-partner"
  emoji: string
  impact: string
  tagColor: string
  logo?: string
}

export const products: Product[] = [
  {
    name: "Avni",
    slug: "avni",
    tagline: "Open-source community service and data collection platform",
    description: "Open-source community service and data collection platform used widely in India for community health, education, and social welfare programs.",
    longDescription: "Avni is an open-source platform designed for community service delivery and data collection. It enables organizations to digitize their fieldwork, manage beneficiary data, and generate insights. Used widely across India by dozens of grassroots organizations for community health, education, water & sanitation, and social welfare programs. Avni supports offline-first mobile data collection, customizable forms, decision support, and longitudinal tracking of individuals and households.",
    url: "https://avniproject.org",
    icon: "Users",
    color: "#4f46e5",
    emoji: "👥",
    impact: "Used by 70+ organizations across India",
    tagColor: "#4f46e5",
    logo: "/images/logos/avni.webp",
    features: [
      "Offline-first mobile data collection",
      "Customizable forms and workflows",
      "Decision support for field workers",
      "Longitudinal tracking of beneficiaries",
      "Dashboard and reporting",
      "Multi-language support",
    ],
    category: "built-by-us",
  },
  {
    name: "Bahmni",
    slug: "bahmni",
    tagline: "Open-source hospital information system",
    description: "Open-source hospital information and electronic medical record system with 500+ deployments across the world.",
    longDescription: "Bahmni is an open-source hospital information and electronic medical record system. It has close to 500 deployments across the world. Samanvay team members were pivotal in developing this product. We have integrated Bahmni with Avni to create seamless workflows between community health and hospital systems.",
    url: "https://bahmni.org",
    icon: "Hospital",
    color: "#0891b2",
    emoji: "🏥",
    impact: "500+ deployments worldwide",
    tagColor: "#0891b2",
    logo: "/images/logos/bahmni.webp",
    features: [
      "Electronic medical records",
      "Patient registration and management",
      "Clinical decision support",
      "Laboratory and radiology integration",
      "500+ deployments worldwide",
      "Integration with Avni",
    ],
    category: "built-by-us",
  },
  {
    name: "Gunak",
    slug: "gunak",
    tagline: "Healthcare quality improvement platform",
    description: "Platform for quality assessment and reporting for government hospitals and health centers, used by hundreds of assessors.",
    longDescription: "Gunak is a platform for quality assessment and its reporting for government hospitals and health centers. It is used for various national health programs and by hundreds of assessors in the field. We developed Gunak in collaboration with NHSRC. The platform supports multiple programmatic assessment tools like NQAS, Laqshya, Kayakalp, Dakshata and any deployment-specific checklists. It provides a reporting and analysis dashboard.",
    url: "https://nhsrc.github.io/gunak-website/",
    icon: "ClipboardCheck",
    color: "#059669",
    emoji: "📋",
    impact: "National-scale deployment with NHSRC",
    tagColor: "#059669",
    logo: "/images/logos/gunak.webp",
    features: [
      "Quality assessment tools",
      "Multiple assessment frameworks (NQAS, Laqshya, Kayakalp)",
      "Mobile and web interfaces",
      "Reporting and analytics dashboard",
      "National-scale deployment",
    ],
    category: "built-by-us",
  },
  {
    name: "TeleSathi",
    slug: "telesathi",
    tagline: "Moderated tele-consultation platform",
    description: "Telemedicine solution enabling moderated tele-consultations for remote healthcare delivery.",
    longDescription: "TeleSathi is a telemedicine solution that enables moderated tele-consultations. It connects patients in remote areas with specialist doctors through a structured consultation process, facilitated by local health workers. The platform is designed for low-resource settings where direct access to specialists is limited.",
    url: "https://telesathi.com",
    icon: "Video",
    color: "#7c3aed",
    emoji: "📹",
    impact: "Remote healthcare delivery",
    tagColor: "#7c3aed",
    features: [
      "Moderated tele-consultations",
      "Patient-specialist video calls",
      "Health worker facilitated sessions",
      "Designed for low-resource settings",
    ],
    category: "built-by-us",
  },
  {
    name: "Shwaas",
    slug: "shwaas",
    tagline: "COVID clinical decision support app",
    description: "Android app guiding frontline workers in assessing COVID-like symptoms, developed with Jan Swasthya Sahyog.",
    longDescription: "Shwaas is an Android app that guides people experiencing COVID-like symptoms through a clinical assessment. It categorizes patients into Green (manage at home), Yellow (needs consultation), and Red (needs admission). Developed in collaboration with Jan Swasthya Sahyog (JSS), the app was primarily built for village health workers. It doesn't store any data on internet servers, ensuring privacy.",
    url: "https://shwaas.samanvayfoundation.org/",
    icon: "Stethoscope",
    color: "#dc2626",
    emoji: "🫁",
    impact: "Open-source COVID decision support",
    tagColor: "#dc2626",
    logo: "/images/logos/shwaas.webp",
    features: [
      "Clinical decision support",
      "Triage into Green/Yellow/Red categories",
      "Offline-capable Android app",
      "Privacy-first — no internet data storage",
      "Multi-language support",
      "Open-source",
    ],
    category: "built-by-us",
  },
  {
    name: "Mentor To Go",
    slug: "mentor-to-go",
    tagline: "Mobile mentoring platform",
    description: "Technology platform for Mentor Together to scale one-to-one mentoring for disadvantaged youth.",
    longDescription: "Mentor To Go is a mobile mentoring platform built for Mentor Together, India's first and largest non-profit providing one-to-one mentoring relationships. The platform automates initial screening and mentor matching processes and provides analytics to the back-end team. It helps scale mentoring through technology without compromising on quality, serving over 5000 young people across 6 urban cities.",
    url: "https://mentortogether.org/",
    icon: "GraduationCap",
    color: "#ea580c",
    emoji: "🎓",
    impact: "5000+ youth mentored",
    tagColor: "#ea580c",
    features: [
      "Automated mentor-mentee matching",
      "Mobile mentoring platform",
      "Analytics dashboard",
      "Scaling mentoring programs",
    ],
    category: "built-for-partner",
  },
]
