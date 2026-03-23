export interface Partner {
  name: string;
  slug: string;
  type: 'implementation' | 'funding' | 'technology' | 'government';
  logo?: string;
  domain?: string; // for logo fetching via clearbit
  description: string;
  products: string[];
  url?: string;
  state?: string;
  featured: boolean;
}

// Helper: get logo URL from domain
export function getPartnerLogoUrl(partner: Partner): string | null {
  if (partner.logo) return partner.logo;
  if (partner.domain) return `https://logo.clearbit.com/${partner.domain}`;
  if (partner.url) {
    try {
      const domain = new URL(partner.url.startsWith('http') ? partner.url : `https://${partner.url}`).hostname.replace('www.', '');
      return `https://logo.clearbit.com/${domain}`;
    } catch { return null; }
  }
  return null;
}

export const partners: Partner[] = [
  // Implementation partners
  {
    name: 'Ashwini',
    slug: 'ashwini',
    type: 'implementation',
    description: 'Maintains hospital system based on Bahmni and implemented community health system using Avni. Integrated hospital and community health systems.',
    products: ['bahmni', 'avni'],
    url: 'http://ashwini.org/new/',
    state: 'Tamil Nadu',
    featured: true,
  },
  {
    name: 'Jan Swasthya Sahyog (JSS)',
    slug: 'jss',
    type: 'implementation',
    description: 'First partner. Multiple technology and consulting projects. Avni implementation for community health program in Chhattisgarh.',
    products: ['avni', 'shwaas'],
    url: 'http://jssbilaspur.org/',
    state: 'Chhattisgarh',
    featured: true,
  },
  {
    name: 'Calcutta Kids',
    slug: 'calcutta-kids',
    type: 'implementation',
    description: 'Migrated from data entry based system to community health workers driven system using Avni for maternal and child health programs since 2018.',
    products: ['avni'],
    url: 'https://calcuttakids.org/',
    state: 'West Bengal',
    featured: true,
  },
  {
    name: 'Sewa Rural',
    slug: 'sewa-rural',
    type: 'implementation',
    description: 'Improvement of adolescent health program using Avni since 2017. Community followup of sick newborns.',
    products: ['avni'],
    url: 'https://sewarural.org/',
    state: 'Gujarat',
    featured: true,
  },
  {
    name: 'Yenepoya',
    slug: 'yenepoya',
    domain: 'yenepoya.edu.in',
    type: 'implementation',
    description: 'Comprehensive community health program using Avni. Developed TB care and nutrition app endorsed by WHO, RNTCP, released by PM of India.',
    products: ['avni'],
    url: 'https://www.yenepoya.edu.in/',
    state: 'Karnataka',
    featured: true,
  },
  {
    name: 'Mentor Together',
    slug: 'mentor-together',
    domain: 'mentortogether.org',
    type: 'implementation',
    description: 'Built Mentor To Go mobile mentoring platform to scale one-to-one mentoring across 6 cities, serving 5000+ young people.',
    products: ['mentor-to-go'],
    url: 'https://mentortogether.org/',
    featured: true,
  },
  {
    name: 'Save the Children (Assam)',
    slug: 'save-the-children',
    domain: 'savethechildren.in',
    type: 'implementation',
    description: 'Child protection in tea plantation using Avni.',
    products: ['avni'],
    state: 'Assam',
    featured: false,
  },
  {
    name: 'CES (Centre for Equity Studies)',
    slug: 'ces',
    type: 'implementation',
    description: 'Implemented Avni to assist curative and health access services for homeless people.',
    products: ['avni'],
    url: 'http://centreforequitystudies.org/',
    featured: false,
  },
  {
    name: 'Chetna India',
    slug: 'chetna-india',
    type: 'implementation',
    description: 'Community health implementation for urban slums using Avni.',
    products: ['avni'],
    featured: false,
  },
  {
    name: 'IHMP',
    slug: 'ihmp',
    domain: 'ihmp.org',
    type: 'implementation',
    description: 'Job aid system for ASHA workers and field facilitators in urban slums and rural areas using Avni.',
    products: ['avni'],
    url: 'https://www.ihmp.org/',
    featured: false,
  },
  {
    name: 'SEARCH',
    slug: 'search',
    domain: 'searchforhealth.ngo',
    type: 'implementation',
    description: 'Maintains the hospital system based on Bahmni for SEARCH.',
    products: ['bahmni'],
    url: 'http://searchforhealth.ngo/',
    featured: false,
  },
  {
    name: 'Kalap Trust',
    slug: 'kalap-trust',
    type: 'implementation',
    description: 'Village health worker platform using Avni.',
    products: ['avni'],
    featured: false,
  },
  {
    name: 'Spandan',
    slug: 'spandan',
    type: 'implementation',
    description: 'Bahmni based hospital system setup.',
    products: ['bahmni'],
    url: 'https://www.spandan.co/',
    featured: false,
  },
  {
    name: 'Shelter Associates',
    slug: 'shelter-associates',
    domain: 'shelter-associates.org',
    type: 'implementation',
    description: 'Data collection and analysis system using Avni.',
    products: ['avni'],
    url: 'http://www.shelter-associates.org/',
    featured: false,
  },
  {
    name: 'Arghyam',
    slug: 'arghyam',
    domain: 'arghyam.org',
    type: 'implementation',
    description: 'Technology solution architecture for water-based systems. Rejuvenation of water bodies. Avni implementation.',
    products: ['avni'],
    url: 'http://arghyam.org/',
    featured: false,
  },
  {
    name: 'Lend A Hand India',
    slug: 'lend-a-hand-india',
    type: 'implementation',
    description: 'Implementation partner supporting vocational education and skill development programs.',
    products: ['avni'],
    featured: false,
  },
  {
    name: 'Hasiru Dala',
    slug: 'hasiru-dala',
    type: 'implementation',
    description: 'Developed three applications for Hasiru Dala.',
    products: [],
    url: 'http://hasirudala.in/',
    featured: false,
  },
  {
    name: 'PARI',
    slug: 'pari',
    type: 'implementation',
    description: 'Technical partner developing their website, product management consulting and infrastructure management for this online library of rural India.',
    products: [],
    url: 'https://ruralindiaonline.org/',
    featured: false,
  },
  {
    name: 'EPW',
    slug: 'epw',
    domain: 'epw.in',
    type: 'implementation',
    description: 'Technical support for critical issues in their journal management system.',
    products: [],
    url: 'https://www.epw.in/',
    featured: false,
  },

  // Government partners
  {
    name: 'UNICEF',
    slug: 'unicef',
    domain: 'unicef.org',
    type: 'government',
    description: 'Maternal death surveillance & response system using Avni. Customisation for maternal death review.',
    products: ['avni'],
    featured: true,
  },
  {
    name: 'UNICEF Maharashtra',
    slug: 'unicef-maharashtra',
    type: 'government',
    description: 'Pre-conception care program for improvement in maternal health, run by ANMs using Avni.',
    products: ['avni'],
    state: 'Maharashtra',
    featured: false,
  },
  {
    name: 'NHSRC',
    slug: 'nhsrc',
    domain: 'nhsrcindia.org',
    type: 'government',
    description: 'Quality assessment platform for government hospitals supporting NQAS, Laqshya, Kayakalp, Dakshata assessment tools.',
    products: ['gunak'],
    url: 'http://nhsrcindia.org/',
    featured: true,
  },

  // Funding partners
  {
    name: 'Chintu Gudiya Foundation',
    slug: 'chintu-gudiya',
    type: 'funding',
    description: 'Product and community development of Avni since 2018.',
    products: ['avni'],
    url: 'http://chintugudiya.org/',
    featured: true,
  },
  {
    name: 'Social Alpha',
    slug: 'social-alpha',
    domain: 'socialalpha.org',
    type: 'funding',
    description: 'Development of Avni platform (2017-2020).',
    products: ['avni'],
    url: 'https://www.socialalpha.org/',
    featured: true,
  },

  // Technology partners
  {
    name: 'Persistent',
    slug: 'persistent',
    domain: 'persistent.com',
    type: 'technology',
    description: 'Development of certain features of Avni platform.',
    products: ['avni'],
    url: 'https://www.persistent.com/',
    featured: false,
  },
  {
    name: 'Soft Corner',
    slug: 'soft-corner',
    type: 'technology',
    description: 'Avni platform development and implementation for their customers.',
    products: ['avni'],
    url: 'http://www.soft-corner.com/',
    featured: false,
  },
];
