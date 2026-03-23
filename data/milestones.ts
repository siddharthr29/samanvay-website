export interface Milestone {
  year: string;
  title: string;
  description: string;
  product?: string;
  impact?: string;
  type: 'founding' | 'product' | 'partnership' | 'milestone' | 'recognition';
}

export const milestones: Milestone[] = [
  {
    year: '2017',
    title: 'The Beginning',
    description: 'Samanvay founded in Bangalore. First partnership with Jan Swasthya Sahyog (JSS) to digitize community health programs in Chhattisgarh.',
    type: 'founding',
  },
  {
    year: '2018',
    title: 'Avni is Born',
    description: 'First version of Avni deployed. Kaushilya and fellow health workers replace twelve paper registers with a tablet that works offline.',
    product: 'avni',
    impact: '5 organizations onboarded',
    type: 'product',
  },
  {
    year: '2019',
    title: 'Bahmni Grows',
    description: 'Samanvay takes on Bahmni implementation and development. Rural hospitals begin connecting patient records digitally.',
    product: 'bahmni',
    type: 'product',
  },
  {
    year: '2020',
    title: 'COVID Response',
    description: 'When the pandemic hit, Shwaas was built rapidly — a clinical decision support tool for COVID triage at primary health centers.',
    product: 'shwaas',
    type: 'milestone',
  },
  {
    year: '2021',
    title: 'Bridging Distance',
    description: 'TeleSathi launches, enabling telemedicine consultations for patients who previously had to travel 50+ kilometers for specialist care.',
    product: 'telesathi',
    type: 'product',
  },
  {
    year: '2022',
    title: 'National Recognition',
    description: 'Gunak selected by NHSRC (National Health Systems Resource Centre) for healthcare quality assessment across India.',
    product: 'gunak',
    impact: 'National-level deployment',
    type: 'recognition',
  },
  {
    year: '2023',
    title: 'Ecosystem Takes Shape',
    description: '50+ nonprofits now using Samanvay products. JSS begins training other organizations — becoming an ecosystem champion.',
    impact: '50+ nonprofits',
    type: 'milestone',
  },
  {
    year: '2024',
    title: 'Youth & Mentoring',
    description: 'Mentor To Go reaches 5,000+ youth through structured mentoring programs. The platform approach proves itself across sectors.',
    product: 'mentor-to-go',
    impact: '5,000+ youth',
    type: 'product',
  },
  {
    year: '2025',
    title: 'The Platform Vision',
    description: 'With 60+ nonprofits and 6 products, the vision crystallizes: not just tools, but enduring digital infrastructure the social sector can own.',
    impact: '60+ nonprofits, 500K+ lives',
    type: 'milestone',
  },
];
