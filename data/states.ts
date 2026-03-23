export interface StateData {
  slug: string
  name: string
  capital: string
  partners: string[]
  products: string[]
  description: string
}

export const states: StateData[] = [
  {
    slug: 'karnataka',
    name: 'Karnataka',
    capital: 'Bangalore',
    partners: ['Yenepoya', 'Mentor Together', 'Hasiru Dala'],
    products: ['avni', 'bahmni', 'mentor-to-go'],
    description: 'Home to Samanvay Foundation headquarters in Bangalore. Karnataka hosts some of our deepest partnerships including Yenepoya (community health and TB care), Mentor Together (youth mentoring across cities), and Hasiru Dala (waste picker welfare). The state is also where our core engineering team builds and maintains all products.',
  },
  {
    slug: 'chhattisgarh',
    name: 'Chhattisgarh',
    capital: 'Raipur',
    partners: ['Jan Swasthya Sahyog (JSS)'],
    products: ['avni', 'shwaas'],
    description: 'Where Avni was born. Our partnership with Jan Swasthya Sahyog (JSS) in the Achanakmar Tiger Reserve in Bilaspur district was the first implementation that proved offline-first community health technology could work in the most remote settings. Shwaas, our COVID clinical decision support app, was also developed with JSS.',
  },
  {
    slug: 'west-bengal',
    name: 'West Bengal',
    capital: 'Kolkata',
    partners: ['Calcutta Kids'],
    products: ['avni'],
    description: 'Urban maternal health programs digitized through our partnership with Calcutta Kids. Since 2018, Calcutta Kids migrated from a data-entry based system to a community health worker-driven system using Avni, transforming how maternal and child health is tracked in dense urban settlements of Kolkata.',
  },
  {
    slug: 'gujarat',
    name: 'Gujarat',
    capital: 'Ahmedabad',
    partners: ['Sewa Rural'],
    products: ['avni'],
    description: 'Community health programs in rural Gujarat powered by our partnership with Sewa Rural. Since 2017, Avni has been used for improvement of adolescent health programs and community follow-up of sick newborns, demonstrating how digital tools can strengthen rural primary healthcare delivery.',
  },
  {
    slug: 'tamil-nadu',
    name: 'Tamil Nadu',
    capital: 'Chennai',
    partners: ['Ashwini'],
    products: ['avni', 'bahmni'],
    description: 'Tribal health programs in the Nilgiris through our partnership with Ashwini. A unique integration of hospital systems (Bahmni) and community health systems (Avni) creates a seamless care continuum for tribal populations, connecting village-level health workers with hospital clinicians.',
  },
  {
    slug: 'maharashtra',
    name: 'Maharashtra',
    capital: 'Mumbai',
    partners: ['UNICEF Maharashtra', 'Shelter Associates', 'IHMP'],
    products: ['avni'],
    description: 'Multiple nonprofit implementations across Maharashtra. UNICEF Maharashtra runs a pre-conception care program for maternal health improvement using Avni, operated by ANMs. Shelter Associates uses Avni for data collection and analysis, while IHMP deploys it as a job aid system for ASHA workers in urban slums and rural areas.',
  },
  {
    slug: 'rajasthan',
    name: 'Rajasthan',
    capital: 'Jaipur',
    partners: [],
    products: ['avni'],
    description: 'Community health and education programs across Rajasthan leverage Avni for field data collection and program monitoring. The offline-first design is particularly valuable in remote desert and tribal areas where connectivity is intermittent.',
  },
  {
    slug: 'uttar-pradesh',
    name: 'Uttar Pradesh',
    capital: 'Lucknow',
    partners: [],
    products: ['avni'],
    description: 'Large-scale community programs in India\'s most populous state use Avni for beneficiary tracking and program management. The platform\'s scalability makes it suitable for programs covering large populations across diverse geographies.',
  },
  {
    slug: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    capital: 'Bhopal',
    partners: [],
    products: ['avni'],
    description: 'Health and nutrition programs in Madhya Pradesh use Avni for community-level data collection and monitoring. Programs focused on maternal health, child nutrition, and community wellness benefit from the platform\'s configurable forms and decision support.',
  },
  {
    slug: 'odisha',
    name: 'Odisha',
    capital: 'Bhubaneswar',
    partners: [],
    products: ['avni'],
    description: 'Tribal and community health programs in Odisha leverage Avni\'s offline-first capabilities to reach remote populations. The platform supports local language interfaces and culturally appropriate health protocols.',
  },
  {
    slug: 'delhi',
    name: 'Delhi',
    capital: 'New Delhi',
    partners: ['NHSRC', 'CES'],
    products: ['gunak', 'avni'],
    description: 'National-level quality assessment programs through our partnership with NHSRC (National Health Systems Resource Centre). Gunak powers healthcare quality assessments across India from Delhi. The Centre for Equity Studies (CES) uses Avni to assist curative and health access services for homeless populations.',
  },
  {
    slug: 'jharkhand',
    name: 'Jharkhand',
    capital: 'Ranchi',
    partners: [],
    products: ['avni'],
    description: 'Community health programs in tribal areas of Jharkhand use Avni for population health management. The platform\'s offline-first design and decision support features are critical for health workers operating in remote forested regions with limited connectivity.',
  },
]
