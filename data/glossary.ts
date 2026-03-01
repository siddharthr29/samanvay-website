export interface GlossaryTerm {
  term: string
  slug: string
  definition: string
  longDescription: string
  category: "health-tech" | "open-source" | "social-sector" | "data"
  relatedTerms: string[]
  relatedProducts?: string[]
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Electronic Medical Record (EMR)",
    slug: "emr",
    definition: "A digital version of a patient's paper chart that contains their medical history, diagnoses, medications, and treatment plans maintained by a healthcare provider.",
    longDescription: "An Electronic Medical Record (EMR) is a digital system used by healthcare providers to store and manage patient health information. Unlike paper records, EMRs allow for structured data entry, clinical decision support, and easy retrieval of patient histories. In low-resource settings, open-source EMR systems like Bahmni make it possible for small hospitals and clinics to adopt digital health records without expensive licensing fees. EMRs improve care quality by reducing errors, enabling data-driven decisions, and facilitating continuity of care across visits. Key features include patient registration, clinical documentation, order entry, lab integration, and reporting dashboards.",
    category: "health-tech",
    relatedTerms: ["ehr", "hospital-information-system", "clinical-decision-support"],
    relatedProducts: ["bahmni"],
  },
  {
    term: "Electronic Health Record (EHR)",
    slug: "ehr",
    definition: "A comprehensive digital record of a patient's health information that can be shared across different healthcare organizations and settings.",
    longDescription: "An Electronic Health Record (EHR) goes beyond EMRs by enabling interoperability — the sharing of patient data across different healthcare organizations, hospitals, and clinics. While an EMR is typically used within a single practice, an EHR is designed to follow the patient across the entire healthcare ecosystem. In India's social sector, the distinction matters because community health workers using platforms like Avni collect data in the field that needs to flow into hospital systems like Bahmni. This integration between community health and facility-based care is a form of EHR functionality, ensuring continuity of care from village to hospital.",
    category: "health-tech",
    relatedTerms: ["emr", "interoperability", "community-health"],
    relatedProducts: ["avni", "bahmni"],
  },
  {
    term: "Hospital Information System (HIS)",
    slug: "hospital-information-system",
    definition: "An integrated information system designed to manage all aspects of a hospital's operations including clinical, administrative, and financial functions.",
    longDescription: "A Hospital Information System (HIS) is comprehensive software that manages clinical workflows (patient records, lab orders, prescriptions), administrative tasks (patient registration, scheduling, billing), and operational analytics. Bahmni is an open-source HIS with close to 500 deployments worldwide. It integrates modules for patient registration, clinical documentation, laboratory, radiology, pharmacy, and reporting. For resource-constrained hospitals in India and developing countries, open-source HIS solutions eliminate the barrier of expensive software licensing while providing enterprise-grade functionality. Bahmni's modular architecture allows hospitals to start with basic features and progressively adopt more modules as their capacity grows.",
    category: "health-tech",
    relatedTerms: ["emr", "clinical-decision-support", "interoperability"],
    relatedProducts: ["bahmni"],
  },
  {
    term: "Community Health Worker (CHW)",
    slug: "community-health-worker",
    definition: "A frontline health worker who provides basic health education, referrals, and follow-up care within their community, often in rural or underserved areas.",
    longDescription: "Community Health Workers (CHWs) are the backbone of primary healthcare in India and many developing countries. Known as ASHAs (Accredited Social Health Activists), ANMs (Auxiliary Nurse Midwives), or other designations, they serve as the bridge between the formal health system and communities. CHWs conduct home visits, track maternal and child health, provide health education, and refer patients to facilities. Technology platforms like Avni are designed specifically to support CHW workflows with offline-first mobile apps, decision support tools, and longitudinal tracking of beneficiaries. By digitizing CHW workflows, organizations can improve data quality, enable real-time supervision, and measure program outcomes more effectively.",
    category: "social-sector",
    relatedTerms: ["community-health", "offline-first", "maternal-child-health"],
    relatedProducts: ["avni"],
  },
  {
    term: "Offline-First Architecture",
    slug: "offline-first",
    definition: "A software design approach where the application works fully without internet connectivity, syncing data when a connection becomes available.",
    longDescription: "Offline-first architecture is critical for social sector technology in India and developing countries where field workers operate in areas with unreliable or no internet connectivity. Instead of requiring constant internet access, offline-first applications store data locally on the device and synchronize with servers when connectivity is available. Avni uses this approach to ensure that community health workers can collect data, view beneficiary records, and receive decision support while working in remote villages. The technical challenges include conflict resolution during sync, data integrity management, and efficient data transfer. Open-source platforms that solve these challenges reduce the barrier for grassroots organizations to adopt digital tools.",
    category: "data",
    relatedTerms: ["community-health-worker", "data-collection", "mobile-health"],
    relatedProducts: ["avni", "shwaas"],
  },
  {
    term: "Clinical Decision Support (CDS)",
    slug: "clinical-decision-support",
    definition: "Technology systems that provide clinicians and health workers with knowledge and person-specific information to enhance health decisions at the point of care.",
    longDescription: "Clinical Decision Support (CDS) systems analyze patient data and provide recommendations, alerts, or guidelines to healthcare providers at the point of care. In resource-constrained settings, CDS is particularly valuable because it extends the capabilities of health workers who may not have specialized training. Shwaas, developed by Samanvay Foundation during COVID-19, is an example — it guides village health workers through a clinical assessment algorithm, categorizing patients into Green (manage at home), Yellow (needs consultation), or Red (needs admission). Bahmni also includes CDS features for hospital-based clinicians. The key to effective CDS in low-resource settings is simplicity, offline capability, and alignment with local clinical protocols.",
    category: "health-tech",
    relatedTerms: ["emr", "hospital-information-system", "community-health-worker"],
    relatedProducts: ["bahmni", "shwaas"],
  },
  {
    term: "Open Source Software",
    slug: "open-source-software",
    definition: "Software whose source code is freely available for anyone to view, modify, and distribute, enabling collaborative development and reducing costs.",
    longDescription: "Open source software is foundational to technology for social good. When source code is freely available, organizations in the social sector can adopt powerful software without expensive licensing fees, customize it for their specific needs, and contribute improvements back to the community. Samanvay Foundation builds and contributes to multiple open-source products: Avni for community health, Bahmni for hospital systems, Gunak for quality assessment, and more. The open-source model ensures sustainability — organizations are not locked into a single vendor, communities of developers collaborate to improve the software, and the code remains accessible even if any single organization changes direction. For nonprofits and governments with limited budgets, open source is often the only viable path to digital transformation.",
    category: "open-source",
    relatedTerms: ["interoperability", "community-health"],
    relatedProducts: ["avni", "bahmni", "gunak"],
  },
  {
    term: "Interoperability",
    slug: "interoperability",
    definition: "The ability of different information systems, devices, or applications to connect and communicate in a coordinated manner, exchanging and using data effectively.",
    longDescription: "Interoperability in healthcare means different software systems can exchange patient data seamlessly. When a community health worker records a referral in Avni, that information should flow into the hospital's Bahmni system so the receiving clinician has context. Samanvay Foundation has built the Avni-Bahmni integration to create this seamless workflow between community health and hospital care. Achieving interoperability requires standard data formats (like HL7 FHIR), well-designed APIs, and careful mapping between different systems' data models. In India's fragmented health technology landscape, interoperability is particularly challenging but critically important for continuity of care.",
    category: "health-tech",
    relatedTerms: ["ehr", "hospital-information-system", "open-source-software"],
    relatedProducts: ["avni", "bahmni"],
  },
  {
    term: "Data Collection Platform",
    slug: "data-collection",
    definition: "Software tools that enable systematic gathering, storage, and analysis of field data, especially in community development and research settings.",
    longDescription: "Data collection platforms are essential tools for organizations working in community development, public health, and social welfare. They replace paper-based data collection with digital forms on mobile devices, enabling real-time data capture, validation, and analysis. Avni is specifically designed for longitudinal data collection in the social sector — it goes beyond simple form-filling to support complex workflows, decision support, and beneficiary tracking over time. Key features of effective data collection platforms include customizable forms, offline capability, multi-language support, GPS capture, photo documentation, and integration with analysis tools. For grassroots organizations, the choice of platform significantly impacts data quality, worker efficiency, and the ability to demonstrate program impact to funders.",
    category: "data",
    relatedTerms: ["offline-first", "community-health-worker", "mobile-health"],
    relatedProducts: ["avni"],
  },
  {
    term: "Telemedicine",
    slug: "telemedicine",
    definition: "The use of telecommunications technology to provide clinical healthcare from a distance, connecting patients with healthcare providers remotely.",
    longDescription: "Telemedicine enables patients in remote or underserved areas to access specialist care without traveling long distances. In India, where specialist doctors are concentrated in urban areas, telemedicine bridges the access gap for rural populations. TeleSathi, built by Samanvay Foundation, is a moderated tele-consultation platform designed for low-resource settings. Unlike consumer telemedicine apps, TeleSathi uses a moderated model where a local health worker facilitates the consultation between the patient and remote specialist. This moderation ensures that language barriers, technology literacy gaps, and clinical context are properly managed. The COVID-19 pandemic accelerated telemedicine adoption, but sustainable models for rural India require purpose-built platforms that account for connectivity challenges and local health system workflows.",
    category: "health-tech",
    relatedTerms: ["community-health-worker", "clinical-decision-support"],
    relatedProducts: ["telesathi"],
  },
  {
    term: "Quality Assessment in Healthcare",
    slug: "quality-assessment",
    definition: "Systematic evaluation of healthcare facilities against defined standards and criteria to identify gaps and drive improvement in care delivery.",
    longDescription: "Healthcare quality assessment involves evaluating hospitals and health centers against standardized criteria to ensure they meet minimum quality standards. In India, the National Health Systems Resource Centre (NHSRC) has developed multiple assessment frameworks including NQAS (National Quality Assurance Standards), Laqshya (for labor rooms), Kayakalp (for cleanliness), and Dakshata (for safe delivery). Gunak is the digital platform built by Samanvay Foundation to support these assessments. It replaces paper-based checklists with mobile and web interfaces, enabling assessors to conduct evaluations efficiently, capture evidence, and generate standardized reports. The platform has been deployed at national scale, used by hundreds of assessors across government hospitals in India.",
    category: "health-tech",
    relatedTerms: ["hospital-information-system"],
    relatedProducts: ["gunak"],
  },
  {
    term: "Community Health",
    slug: "community-health",
    definition: "A field of public health that focuses on improving health outcomes for defined communities through preventive care, education, and outreach delivered at the community level.",
    longDescription: "Community health programs bring healthcare services directly to populations, rather than waiting for people to visit facilities. In India, these programs address maternal and child health, nutrition, immunization, disease surveillance, water and sanitation, and more. Technology plays an increasing role in community health — platforms like Avni enable organizations to digitize field worker workflows, track individual beneficiaries over time, provide decision support at the point of care, and generate data for program management. Samanvay Foundation has implemented community health technology solutions for organizations including UNICEF, Calcutta Kids, Sewa Rural, Ashwini, and many others. The key challenge is designing technology that works in low-resource settings with limited connectivity and for users with varying levels of digital literacy.",
    category: "social-sector",
    relatedTerms: ["community-health-worker", "maternal-child-health", "data-collection"],
    relatedProducts: ["avni"],
  },
  {
    term: "Maternal and Child Health (MCH)",
    slug: "maternal-child-health",
    definition: "A field of public health focused on the health of women during pregnancy, childbirth, and postpartum, as well as the health and development of children.",
    longDescription: "Maternal and Child Health (MCH) programs aim to reduce maternal mortality, neonatal mortality, and improve child health outcomes. In India, MCH is a critical area where technology can save lives by ensuring that pregnant women receive timely antenatal care, high-risk pregnancies are identified early, institutional deliveries are promoted, and postnatal follow-up is conducted. Avni has been used by multiple organizations for MCH programs — UNICEF's maternal death surveillance and response system, Calcutta Kids' maternal and child health program in urban Kolkata, Sewa Rural's adolescent health initiative, and UNICEF Maharashtra's pre-conception care program. These implementations demonstrate how digital tools can strengthen the continuum of care from community to facility.",
    category: "social-sector",
    relatedTerms: ["community-health", "community-health-worker"],
    relatedProducts: ["avni"],
  },
  {
    term: "Mobile Health (mHealth)",
    slug: "mobile-health",
    definition: "The use of mobile devices and wireless technology to support healthcare delivery, public health, and health information collection.",
    longDescription: "Mobile Health (mHealth) leverages the widespread availability of mobile phones to deliver healthcare services, collect health data, and support health workers in the field. In India, where smartphone penetration is growing rapidly even in rural areas, mHealth offers a scalable approach to improving healthcare access and quality. Avni's Android application is a prime example of mHealth — it puts powerful data collection, decision support, and beneficiary management tools in the hands of community health workers. Shwaas, the COVID clinical decision support app, is another example designed for village health workers to triage patients. The key principles of effective mHealth in low-resource settings include offline capability, intuitive interfaces, local language support, and integration with existing health system workflows.",
    category: "health-tech",
    relatedTerms: ["offline-first", "community-health-worker", "data-collection"],
    relatedProducts: ["avni", "shwaas"],
  },
]

export const glossaryCategories = [
  { value: "health-tech", label: "Health Technology", emoji: "🏥" },
  { value: "open-source", label: "Open Source", emoji: "🌐" },
  { value: "social-sector", label: "Social Sector", emoji: "🤝" },
  { value: "data", label: "Data & Technology", emoji: "📊" },
]
