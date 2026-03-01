export interface FAQ {
  question: string
  answer: string
}

export const homepageFaqs: FAQ[] = [
  {
    question: "What is Samanvay Foundation?",
    answer: "Samanvay Research and Development Foundation is a non-profit technology organization based in Bangalore, India. Registered as a Section-8 company, we build open-source software products for the social sector — primarily health, education, and community development. Our tagline is 'Deep Engineering, Grassroots Understanding.'",
  },
  {
    question: "What products does Samanvay Foundation build?",
    answer: "We build and maintain several open-source products: Avni (community service and data collection platform used by 70+ organizations), Bahmni (hospital information system with 500+ deployments worldwide), Gunak (healthcare quality assessment platform with NHSRC), TeleSathi (telemedicine platform), Shwaas (COVID clinical decision support), and Mentor To Go (mobile mentoring platform serving 5000+ youth).",
  },
  {
    question: "Who does Samanvay Foundation serve?",
    answer: "We serve grassroots organizations, NGOs, and government agencies working in health, education, water & sanitation, and social welfare across India. Our partners include UNICEF, NHSRC, Ashwini, Calcutta Kids, Sewa Rural, SEARCH, Mentor Together, and 20+ other organizations.",
  },
  {
    question: "How is Samanvay different from other tech nonprofits?",
    answer: "Samanvay combines deep software engineering with grassroots understanding. We practice Extreme Programming (XP), pair programming, and TDD. Our products are open-source, designed for low-resource settings (offline-first, multi-language), and we offer full-lifecycle services from development to managed service. We don't just build — we implement, maintain, and evolve.",
  },
  {
    question: "How can organizations use Samanvay's products?",
    answer: "Organizations can adopt our products through a simple process: share your needs, choose a product, customize and integrate it for your context, and launch with ongoing support. We offer product development, implementation, managed services, and software integration. Contact us at hello@samanvayfoundation.org to get started.",
  },
]
