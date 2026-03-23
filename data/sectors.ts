export interface Sector {
  slug: string
  name: string
  title: string
  description: string
  products: string[]
  partners: string[]
  challenges: string[]
  solutions: string[]
  stats: Record<string, string>
  emoji: string
}

export const sectors: Sector[] = [
  {
    slug: 'maternal-child-health',
    name: 'Maternal & Child Health',
    title: 'Digital Solutions for Maternal & Child Health Programs in India',
    description: 'How Avni helps nonprofits digitize antenatal care, pregnancy tracking, immunization, and child nutrition programs.',
    products: ['avni'],
    partners: ['Jan Swasthya Sahyog (JSS)', 'Calcutta Kids', 'Sewa Rural'],
    challenges: ['Paper-based ANC tracking leads to missed high-risk pregnancies', 'Delayed identification of danger signs in mothers and newborns', 'Fragmented follow-up systems across pregnancy, delivery, and postnatal care', 'No longitudinal view of a mother-child pair across the continuum of care'],
    solutions: ['Digital pregnancy registers with automated risk scoring', 'Visit reminders and clinical protocols at point of care', 'WHO z-score integration for child growth monitoring', 'Real-time dashboards for program managers to track coverage and outcomes'],
    stats: { orgs: '15+', workers: '500+', beneficiaries: '100,000+' },
    emoji: '🤰',
  },
  {
    slug: 'hospital-digitization',
    name: 'Hospital Digitization',
    title: 'Open-Source Hospital Information Systems for India',
    description: 'Bahmni provides free, open-source EMR and hospital management for district and rural hospitals.',
    products: ['bahmni'],
    partners: ['Yenepoya', 'Ashwini', 'SEARCH', 'Spandan'],
    challenges: ['Paper medical records lead to lost files and duplicate tests', 'No integration between lab, pharmacy, and clinical systems', 'Manual billing and inventory tracking', 'Commercial HIS vendors are unaffordable for nonprofit hospitals'],
    solutions: ['Complete electronic medical records with patient lifecycle management', 'Integrated laboratory, radiology, pharmacy, and billing modules', 'Customizable for local clinical protocols and languages', 'Community-to-facility integration with Avni for seamless referral workflows'],
    stats: { hospitals: '500+', countries: '40+' },
    emoji: '🏥',
  },
  {
    slug: 'healthcare-quality',
    name: 'Healthcare Quality Assessment',
    title: 'Digital Healthcare Quality Assessment Tools for India',
    description: 'Gunak enables standardized quality assessment of healthcare facilities at national scale.',
    products: ['gunak'],
    partners: ['NHSRC', 'UNICEF'],
    challenges: ['Paper-based assessments are slow and inconsistent', 'No benchmarking across facilities', 'Delayed reporting makes quality improvement reactive', 'Multiple assessment frameworks (NQAS, Laqshya, Kayakalp) with no unified platform'],
    solutions: ['Digital checklists supporting multiple assessment frameworks', 'Real-time scoring and facility benchmarking', 'Mobile-first field assessments with offline capability', 'Longitudinal tracking of quality improvement over time'],
    stats: { facilities: '1000+', states: '20+' },
    emoji: '📋',
  },
  {
    slug: 'telemedicine',
    name: 'Telemedicine',
    title: 'Telemedicine Solutions for Rural India',
    description: 'TeleSathi brings specialist healthcare to remote communities through digital consultations.',
    products: ['telesathi'],
    partners: [],
    challenges: ['Patients travel 50+ km to reach specialists', 'No patient history sharing between community and hospital', 'Lost referrals between primary and tertiary care', 'Limited specialist availability in rural areas'],
    solutions: ['Moderated video consultations connecting patients with specialists', 'Shared patient records across care settings', 'Structured referral tracking and follow-up scheduling', 'Health worker facilitated sessions for low-literacy patients'],
    stats: {},
    emoji: '📹',
  },
  {
    slug: 'youth-mentoring',
    name: 'Youth Mentoring',
    title: 'Digital Mentoring Platforms for Youth Development in India',
    description: 'Mentor To Go provides structured mentoring programs connecting youth with experienced mentors.',
    products: ['mentor-to-go'],
    partners: ['Mentor Together'],
    challenges: ['Manual mentor-mentee matching is time-intensive and error-prone', 'No structured tracking of mentoring sessions and progress', 'Dropout detection is delayed without data', 'Scaling mentoring programs across cities requires technology'],
    solutions: ['Automated screening and mentor-mentee matching', 'Mobile platform for structured mentoring interactions', 'Progress monitoring and engagement analytics', 'Scalable across multiple cities with consistent quality'],
    stats: { youth: '5,000+', mentors: '1,000+' },
    emoji: '🎓',
  },
  {
    slug: 'water-sanitation',
    name: 'Water & Sanitation',
    title: 'Digital Solutions for WASH Programs in India',
    description: 'Avni helps nonprofits track water source quality, sanitation coverage, and community health outcomes.',
    products: ['avni'],
    partners: ['Arghyam', 'Shelter Associates'],
    challenges: ['Scattered water quality data across field teams', 'No asset lifecycle tracking for water infrastructure', 'Manual reporting to funders is slow and error-prone', 'GPS and photo documentation needs are unmet by paper systems'],
    solutions: ['GPS-enabled field data collection for water source mapping', 'Photo documentation of water bodies and sanitation infrastructure', 'Customizable forms for different WASH program types', 'Dashboard reporting for program management and funder compliance'],
    stats: {},
    emoji: '🌊',
  },
  {
    slug: 'community-health',
    name: 'Community Health',
    title: 'Community Health Worker Digital Tools for India',
    description: 'Avni empowers frontline community health workers with offline-first digital tools for population-level health management.',
    products: ['avni'],
    partners: ['Jan Swasthya Sahyog (JSS)', 'Ashwini', 'Sewa Rural', 'Calcutta Kids'],
    challenges: ['Each worker maintains 12+ paper registers', 'No clinical decision support at point of care', 'Delayed data means delayed program response', 'Fragmented systems make population health management impossible'],
    solutions: ['Single digital platform replacing all paper registers', 'Clinical protocols and decision support at point of care', 'Real-time dashboards for supervisors and program managers', 'Longitudinal tracking of individuals and households over years'],
    stats: { workers: '3,000+', lives: '500,000+' },
    emoji: '🏘️',
  },
  {
    slug: 'chronic-disease-management',
    name: 'Chronic Disease Management',
    title: 'Digital Chronic Disease Management for Community Programs',
    description: 'Tracking TB, diabetes, and hypertension patients across community health programs.',
    products: ['avni'],
    partners: ['Yenepoya', 'Jan Swasthya Sahyog (JSS)'],
    challenges: ['Fragmented patient tracking across visits and providers', 'Missed follow-ups lead to treatment interruption', 'Protocol non-adherence without decision support', 'No longitudinal view of patient treatment journey'],
    solutions: ['Longitudinal patient records across the care continuum', 'Automated visit reminders and overdue alerts', 'Treatment protocol enforcement through decision support', 'TB care app endorsed by WHO and RNTCP'],
    stats: {},
    emoji: '💊',
  },
]
