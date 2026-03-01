export interface ComparisonFeature {
  feature: string
  productA: string
  productB: string
}

export interface Comparison {
  slug: string
  productA: string
  productB: string
  title: string
  description: string
  verdict: string
  features: ComparisonFeature[]
  useCases: {
    useCase: string
    recommendation: string
  }[]
}

export const comparisons: Comparison[] = [
  {
    slug: "avni-vs-commcare",
    productA: "Avni",
    productB: "CommCare",
    title: "Avni vs CommCare: Open-Source Community Health Platforms Compared",
    description: "A detailed comparison of Avni and CommCare — two leading platforms for community health data collection and field worker management in developing countries.",
    verdict: "Avni is better suited for Indian organizations that need longitudinal beneficiary tracking with deep customization and no per-user licensing. CommCare has a larger global footprint and more pre-built modules but comes with usage-based pricing for larger deployments.",
    features: [
      { feature: "Pricing Model", productA: "Fully open-source, no per-user fees", productB: "Freemium — free tier, paid for larger deployments" },
      { feature: "Offline Support", productA: "Full offline-first architecture", productB: "Offline capable with sync" },
      { feature: "Longitudinal Tracking", productA: "Built-in individual & household tracking", productB: "Case management with extensions" },
      { feature: "Decision Support", productA: "Configurable rules engine", productB: "Form-level logic and calculations" },
      { feature: "Customization", productA: "Highly customizable via configuration", productB: "App builder with drag-and-drop" },
      { feature: "Language Support", productA: "Multi-language including Indian regional", productB: "Multi-language" },
      { feature: "Hospital Integration", productA: "Native Bahmni integration", productB: "Third-party integrations via API" },
      { feature: "Hosting", productA: "Self-hosted or Samanvay-managed", productB: "Cloud-hosted by Dimagi" },
      { feature: "Community", productA: "Growing Indian open-source community", productB: "Large global community" },
      { feature: "Best For", productA: "Indian NGOs, government health programs", productB: "Global health programs, INGOs" },
    ],
    useCases: [
      { useCase: "Indian NGO running a maternal health program in rural villages", recommendation: "Avni — purpose-built for Indian contexts, no licensing costs, native hospital integration" },
      { useCase: "International NGO managing health programs across multiple countries", recommendation: "CommCare — broader global presence, multi-country support, established training ecosystem" },
      { useCase: "Government health program needing quality assessment", recommendation: "Avni (with Gunak) — proven at national scale with NHSRC, fully customizable" },
      { useCase: "Organization needing combined community + hospital system", recommendation: "Avni + Bahmni — unique integrated solution from community to facility" },
    ],
  },
  {
    slug: "bahmni-vs-openmrs",
    productA: "Bahmni",
    productB: "OpenMRS",
    title: "Bahmni vs OpenMRS: Open-Source Hospital Systems Compared",
    description: "Comparing Bahmni and OpenMRS — two leading open-source hospital information systems for resource-constrained healthcare settings.",
    verdict: "Bahmni is built on top of OpenMRS and adds a complete user interface, laboratory, radiology, pharmacy, and billing modules. Choose OpenMRS if you need a bare EMR platform with maximum flexibility; choose Bahmni for a ready-to-deploy complete hospital system.",
    features: [
      { feature: "Architecture", productA: "Complete HIS built on OpenMRS + other components", productB: "Core EMR platform with modular extensions" },
      { feature: "User Interface", productA: "Modern, integrated clinical UI", productB: "Basic UI, customizable via modules" },
      { feature: "Lab Integration", productA: "Built-in lab module (OpenELIS)", productB: "Requires separate integration" },
      { feature: "Pharmacy", productA: "Built-in pharmacy management", productB: "Module-based, varies by implementation" },
      { feature: "Billing", productA: "Built-in billing and invoicing", productB: "Community modules available" },
      { feature: "Radiology", productA: "Integrated with PACS", productB: "Requires separate setup" },
      { feature: "Deployment Complexity", productA: "Docker-based, streamlined setup", productB: "More manual configuration needed" },
      { feature: "Community Integration", productA: "Avni integration for community-to-facility", productB: "Various community health extensions" },
      { feature: "Deployments", productA: "500+ worldwide", productB: "5000+ worldwide" },
      { feature: "Best For", productA: "Complete hospital setup in resource-limited settings", productB: "Custom EMR development and research settings" },
    ],
    useCases: [
      { useCase: "Small rural hospital needing complete digital system", recommendation: "Bahmni — out-of-the-box complete solution with all modules included" },
      { useCase: "Research institution building a custom clinical system", recommendation: "OpenMRS — maximum flexibility for custom development" },
      { useCase: "Hospital that also runs community health programs", recommendation: "Bahmni — seamless integration with Avni for community-to-facility care" },
      { useCase: "Large hospital network with existing IT team", recommendation: "Either works — OpenMRS for maximum customization, Bahmni for faster deployment" },
    ],
  },
]
