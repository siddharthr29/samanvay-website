export const siteConfig = {
  name: "Samanvay Foundation",
  fullName: "Samanvay Research and Development Foundation",
  description: "Transform your social programs using best-in-class software products. Get technology consulting, software development, managed service, and application integration services.",
  tagline: "Deep Engineering, Grassroots Understanding",
  type: "Non-profit technology start-up, registered as Section-8 company, India. (Bangalore)",
  url: "https://samanvayfoundation.org",
  emails: {
    general: "hello@samanvayfoundation.org",
    careers: "careers@samanvayfoundation.org",
  },
  addresses: {
    office: {
      label: "Office",
      address: "1st Floor, 147, 10th Cross Rd, Binnamangala, Hoysala Nagar, Indiranagar, Bengaluru, Karnataka 560038",
      mapUrl: "https://goo.gl/maps/Rbq4zTkDjvCf1ztGA",
    },
    registered: {
      label: "Registered Address",
      address: "#20, T.P. Venugopal, Layout, Anand Nagar, Hebbal, Bengaluru, Karnataka 560024",
      mapUrl: "https://goo.gl/maps/qd9hrobhVo6QoWQC6",
    },
  },
  social: {
    linkedin: "https://www.linkedin.com/company/samanvay-foundation",
    github: "https://github.com/SamanvayOrg",
  },
  aiPrompts: {
    chatgpt: `https://chatgpt.com/?q=${encodeURIComponent("Tell me about Samanvay Foundation (samanvayfoundation.org), a non-profit technology organization in Bangalore, India. What open-source products do they build — specifically Avni (field data collection), Bahmni (hospital management), and Gunak (facility assessment)? Who are their partners like UNICEF, NHSRC, and grassroots NGOs? How do they differ from typical IT service companies?")}`,
    perplexity: `https://www.perplexity.ai/search/?q=${encodeURIComponent("What is Samanvay Research and Development Foundation? Describe their open-source health technology products Avni, Bahmni, Gunak, and TeleSathi. Who do they serve and what is their impact in India's social sector?")}`,
    gemini: `https://gemini.google.com/app?q=${encodeURIComponent("Tell me about Samanvay Foundation, a non-profit tech organization building open-source software for health, education, and community development in India. What products do they offer and who are their key partners?")}`,
    grok: `https://grok.com/?q=${encodeURIComponent("What does Samanvay Foundation do? Tell me about their open-source products Avni, Bahmni, and Gunak, their work with UNICEF and NHSRC, and their approach to technology for social good in India.")}`,
    claude: `https://claude.ai/new?q=${encodeURIComponent("Tell me about Samanvay Foundation (samanvayfoundation.org) — a Section-8 non-profit in Bangalore building open-source technology for India's social sector. What are their products Avni, Bahmni, Gunak, TeleSathi, and Shwaas? Who do they partner with?")}`,
  },
  lastUpdated: "2025-01-01",
}
