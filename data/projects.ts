export interface Project {
  partner: string
  partnerUrl?: string
  description: string
  products: string[]
  sector: "health" | "other"
  featured?: boolean
}

export const projects: Project[] = [
  {
    partner: "Ashwini",
    partnerUrl: "http://ashwini.org/new/",
    description: "Maintains Ashwini's hospital system based on Bahmni and implemented community health system using Avni. Integrated hospital and community health systems.",
    products: ["Bahmni", "Avni"],
    sector: "health",
    featured: true,
  },
  {
    partner: "Save the Children (Assam)",
    description: "Child protection in tea plantation using Avni.",
    products: ["Avni"],
    sector: "health",
  },
  {
    partner: "Calcutta Kids",
    partnerUrl: "https://calcuttakids.org/",
    description: "Migrated from data entry based system to community health workers driven system using Avni for maternal and child health programs since 2018.",
    products: ["Avni"],
    sector: "health",
    featured: true,
  },
  {
    partner: "CES (Centre for Equity Studies)",
    partnerUrl: "http://centreforequitystudies.org/",
    description: "Implemented Avni to assist curative and health access services for homeless people.",
    products: ["Avni"],
    sector: "health",
  },
  {
    partner: "Chetna India",
    description: "Community health implementation for urban slums using Avni.",
    products: ["Avni"],
    sector: "health",
  },
  {
    partner: "UNICEF",
    description: "Maternal death surveillance & response system using Avni. Customisation for maternal death review.",
    products: ["Avni"],
    sector: "health",
    featured: true,
  },
  {
    partner: "IHMP",
    partnerUrl: "https://www.ihmp.org/",
    description: "Job aid system for ASHA workers and field facilitators in urban slums and rural areas using Avni.",
    products: ["Avni"],
    sector: "health",
  },
  {
    partner: "NHSRC (Gunak)",
    partnerUrl: "http://nhsrcindia.org/",
    description: "Quality assessment platform for government hospitals supporting NQAS, Laqshya, Kayakalp, Dakshata assessment tools.",
    products: ["Gunak"],
    sector: "health",
    featured: true,
  },
  {
    partner: "JSS (Jan Swasthya Sahyog)",
    partnerUrl: "http://jssbilaspur.org/",
    description: "Multiple technology and consulting projects. Avni implementation for community health program.",
    products: ["Avni"],
    sector: "health",
  },
  {
    partner: "Sewa Rural",
    partnerUrl: "https://sewarural.org/",
    description: "Improvement of adolescent health program using Avni since 2017. Community followup of sick newborns.",
    products: ["Avni"],
    sector: "health",
  },
  {
    partner: "SEARCH",
    partnerUrl: "http://searchforhealth.ngo/",
    description: "Maintains the hospital system based on Bahmni for SEARCH.",
    products: ["Bahmni"],
    sector: "health",
  },
  {
    partner: "Yenepoya",
    partnerUrl: "https://www.yenepoya.edu.in/",
    description: "Comprehensive community health program using Avni. Developed TB care and nutrition app endorsed by WHO, RNTCP, released by PM of India.",
    products: ["Avni"],
    sector: "health",
    featured: true,
  },
  {
    partner: "Kalap Trust",
    description: "Village health worker platform using Avni.",
    products: ["Avni"],
    sector: "health",
  },
  {
    partner: "Spandan",
    partnerUrl: "https://www.spandan.co/",
    description: "Bahmni based hospital system setup.",
    products: ["Bahmni"],
    sector: "health",
  },
  {
    partner: "UNICEF Maharashtra",
    description: "Pre-conception care program for improvement in maternal health, run by ANMs using Avni.",
    products: ["Avni"],
    sector: "health",
  },
  {
    partner: "Mentor Together",
    partnerUrl: "https://mentortogether.org/",
    description: "Built Mentor To Go mobile mentoring platform to scale one-to-one mentoring across 6 cities, serving 5000+ young people.",
    products: ["Mentor To Go"],
    sector: "other",
    featured: true,
  },
  {
    partner: "PARI",
    partnerUrl: "https://ruralindiaonline.org/",
    description: "Technical partner developing their website, product management consulting and infrastructure management for this online library of rural India.",
    products: [],
    sector: "other",
  },
  {
    partner: "Shelter Associates",
    partnerUrl: "http://www.shelter-associates.org/",
    description: "Data collection and analysis system using Avni.",
    products: ["Avni"],
    sector: "other",
  },
  {
    partner: "Hasiru Dala",
    partnerUrl: "http://hasirudala.in/",
    description: "Developed three applications for Hasiru Dala.",
    products: [],
    sector: "other",
  },
  {
    partner: "Arghyam",
    partnerUrl: "http://arghyam.org/",
    description: "Technology solution architecture for water-based systems. Rejuvenation of water bodies. Avni implementation.",
    products: ["Avni"],
    sector: "other",
  },
  {
    partner: "EPW",
    partnerUrl: "https://www.epw.in/",
    description: "Technical support for critical issues in their journal management system.",
    products: [],
    sector: "other",
  },
]

export const fundingPartners = [
  { name: "Chintu Gudiya", url: "http://chintugudiya.org/", role: "Product and community development of Avni since 2018" },
  { name: "Social Alpha", url: "https://www.socialalpha.org/", role: "Development of Avni platform (2017-2020)" },
]

export const developmentPartners = [
  { name: "Persistent", url: "https://www.persistent.com/", role: "Development of certain features of Avni platform" },
  { name: "Soft Corner", url: "http://www.soft-corner.com/", role: "Avni platform development and implementation for their customers" },
]
