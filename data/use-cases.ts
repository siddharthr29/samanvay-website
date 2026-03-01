export interface UseCase {
  slug: string
  title: string
  sector: string
  sectorEmoji: string
  description: string
  challenge: string
  solution: string
  products: string[]
  benefits: string[]
  examplePartners: string[]
}

export const useCases: UseCase[] = [
  {
    slug: "maternal-child-health",
    title: "Technology for Maternal & Child Health Programs",
    sector: "Health",
    sectorEmoji: "🤰",
    description: "Digital solutions for tracking maternal health, antenatal care, immunization, and child development in community health programs across India.",
    challenge: "Maternal and child health programs rely on community health workers conducting regular home visits across large geographies. Without digital tools, tracking high-risk pregnancies, ensuring timely ANC visits, and monitoring child growth becomes paper-heavy and error-prone. Critical referrals can be missed, and program outcomes are difficult to measure.",
    solution: "Avni provides an offline-first mobile platform for CHWs to register pregnant women, track antenatal visits using configurable schedules, flag high-risk pregnancies through decision support rules, monitor child growth with WHO z-score integration, and generate real-time dashboards for program managers. The longitudinal tracking ensures no beneficiary falls through the cracks.",
    products: ["Avni"],
    benefits: [
      "Track every pregnant woman from registration through postnatal care",
      "Automated high-risk pregnancy identification and alerts",
      "Offline data collection in areas with no internet",
      "Real-time program monitoring dashboards",
      "Integration with hospital systems for referral tracking",
    ],
    examplePartners: ["UNICEF", "Calcutta Kids", "Sewa Rural", "UNICEF Maharashtra"],
  },
  {
    slug: "hospital-digitization",
    title: "Open-Source Hospital Digitization",
    sector: "Health",
    sectorEmoji: "🏥",
    description: "Complete digital transformation for hospitals and clinics using open-source electronic medical records, laboratory, pharmacy, and billing systems.",
    challenge: "Small and medium hospitals in India, especially those run by NGOs in rural areas, cannot afford commercial hospital information systems. Without digital records, patient care suffers from lost files, duplicate tests, medication errors, and inability to generate clinical reports. The cost of commercial HIS vendors makes digital transformation seem unattainable.",
    solution: "Bahmni provides a complete, open-source hospital information system with modules for patient registration, clinical documentation, laboratory, radiology, pharmacy, and billing. It can be deployed on modest hardware, customized for local clinical protocols, and maintained with ongoing support from Samanvay Foundation. For hospitals that also run community outreach programs, Bahmni integrates with Avni to create a seamless community-to-facility care continuum.",
    products: ["Bahmni", "Avni"],
    benefits: [
      "Zero software licensing costs with full feature set",
      "Complete patient lifecycle management from registration to discharge",
      "Integrated laboratory and pharmacy modules",
      "Community-to-facility integration with Avni",
      "Customizable for local clinical protocols and languages",
    ],
    examplePartners: ["Ashwini", "SEARCH", "Spandan"],
  },
  {
    slug: "government-health-quality",
    title: "Government Healthcare Quality Assessment",
    sector: "Government",
    sectorEmoji: "🏛️",
    description: "Digital quality assessment and certification platforms for national health programs, enabling systematic evaluation of government hospitals and health centers.",
    challenge: "India's national healthcare quality programs (NQAS, Laqshya, Kayakalp, Dakshata) require hundreds of assessors to evaluate thousands of health facilities using detailed checklists. Paper-based assessments are slow, inconsistent, and make it difficult to track improvement over time. The sheer scale of India's public health system makes manual assessment infeasible.",
    solution: "Gunak is a purpose-built platform for healthcare quality assessment developed in collaboration with NHSRC. It digitizes multiple assessment frameworks, supports mobile-based field assessments, and provides a centralized reporting and analytics dashboard. Assessors can work offline in remote locations and sync results when connectivity is available. The platform has been deployed at national scale across India's government health system.",
    products: ["Gunak"],
    benefits: [
      "Support for multiple assessment frameworks (NQAS, Laqshya, Kayakalp, Dakshata)",
      "Mobile-first field assessments with offline capability",
      "Standardized scoring and reporting across facilities",
      "Longitudinal tracking of quality improvement over time",
      "National-scale deployment capability",
    ],
    examplePartners: ["NHSRC"],
  },
  {
    slug: "youth-mentoring",
    title: "Technology for Youth Mentoring Programs",
    sector: "Education",
    sectorEmoji: "🎓",
    description: "Mobile platforms that scale one-to-one mentoring relationships for disadvantaged youth through technology-enabled matching, communication, and program management.",
    challenge: "Mentoring programs for disadvantaged youth face the challenge of scale — matching mentors to mentees, managing ongoing relationships, tracking mentoring quality, and measuring outcomes across multiple cities. Without technology, the administrative overhead of running a mentoring program limits how many young people can be served.",
    solution: "Mentor To Go is a mobile mentoring platform built for Mentor Together that automates the initial screening and mentor-mentee matching process, provides a structured communication platform, and gives program managers analytics to monitor mentoring relationships across the network. The platform has enabled Mentor Together to scale from hundreds to thousands of mentoring relationships.",
    products: ["Mentor To Go"],
    benefits: [
      "Automated mentor-mentee matching based on compatibility",
      "Mobile-first platform accessible to youth on smartphones",
      "Program management analytics and reporting",
      "Scalable across multiple cities and regions",
      "Structured mentoring workflows that maintain quality at scale",
    ],
    examplePartners: ["Mentor Together"],
  },
  {
    slug: "water-sanitation",
    title: "Technology for Water & Sanitation Programs",
    sector: "Water & Sanitation",
    sectorEmoji: "🌊",
    description: "Digital data collection and monitoring solutions for water access, sanitation, and water body rejuvenation programs across India.",
    challenge: "Water and sanitation programs involve complex fieldwork — surveying water sources, monitoring usage patterns, tracking rejuvenation efforts, and engaging communities. The geographic spread and variety of data types (GPS locations, photos, surveys, measurements) make paper-based approaches inadequate for effective program management.",
    solution: "Avni's flexible data collection platform adapts to water and sanitation use cases with configurable forms, GPS capture, photo documentation, and offline-first mobile data collection. Organizations can track water bodies, monitor interventions, and generate reports for funders. The platform's longitudinal tracking enables measurement of impact over time.",
    products: ["Avni"],
    benefits: [
      "GPS-enabled field data collection for water source mapping",
      "Photo documentation of water bodies and infrastructure",
      "Offline capability for remote field locations",
      "Customizable forms for different water program types",
      "Dashboard reporting for program management and funders",
    ],
    examplePartners: ["Arghyam", "Shelter Associates"],
  },
]
