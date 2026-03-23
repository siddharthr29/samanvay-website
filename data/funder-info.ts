export interface Registration {
  name: string;
  description: string;
  active: boolean;
}

export interface TheoryOfChange {
  problem: string;
  approach: string;
  outcomes: string[];
  vision: string;
}

export interface AnnualReport {
  year: string;
  url: string;
  available: boolean;
}

export interface FunderInfo {
  registrations: Registration[];
  theoryOfChange: TheoryOfChange;
  annualReports: AnnualReport[];
  impactAreas: string[];
}

export const funderInfo: FunderInfo = {
  registrations: [
    { name: 'Section 8 Company', description: 'Registered under Companies Act, 2013', active: true },
    { name: '80G Certificate', description: 'Tax exemption for donors under Income Tax Act', active: true },
    { name: '12A Registration', description: 'Income tax exemption for the organization', active: true },
    { name: 'CSR-1 Registration', description: 'Eligible to receive Corporate Social Responsibility funds', active: true },
  ],
  theoryOfChange: {
    problem: 'Nonprofits managing longitudinal, community-based programs face a structural constraint: complex care delivered through fragmented, paper-bound systems.',
    approach: 'Build open-source, offline-first digital infrastructure that nonprofits can own, configure, and evolve — not just use.',
    outcomes: [
      'Frontline workers make better decisions faster',
      'Program managers see real-time data instead of month-end summaries',
      'Organizations become self-reliant technology users',
      'Ecosystem grows as organizations train each other',
    ],
    vision: 'A social sector where digital infrastructure is as reliable and accessible as physical infrastructure.',
  },
  annualReports: [
    { year: '2024-25', url: '#', available: false },
    { year: '2023-24', url: '#', available: false },
  ],
  impactAreas: [
    'Maternal & Child Health',
    'Chronic Disease Management',
    'Hospital Digitization',
    'Healthcare Quality',
    'Telemedicine',
    'Youth Mentoring',
    'Water & Sanitation',
    'Education',
  ],
};
