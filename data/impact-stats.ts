export interface ImpactStat {
  number: number;
  suffix: string;
  label: string;
  description: string;
}

export const impactStats: ImpactStat[] = [
  { number: 60, suffix: '+', label: 'Nonprofits Partnered', description: 'Organizations using our platforms' },
  { number: 500000, suffix: '+', label: 'Lives Touched', description: 'People served through our products' },
  { number: 3000, suffix: '+', label: 'Frontline Workers', description: 'Equipped with digital tools' },
  { number: 6, suffix: '', label: 'Open Source Products', description: 'Built for the social sector' },
  { number: 25, suffix: '+', label: 'States Covered', description: 'Across India' },
];
