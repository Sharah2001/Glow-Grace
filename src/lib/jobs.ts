import type { Job } from './types';

export const MOCK_JOBS: Job[] = [
  {
    id: 'j-1',
    customerName: 'Douglas Cooper',
    phone: '07721 445566',
    serviceName: 'Boiler Emergency Callout',
    area: 'Croydon (CR0)',
    engineerName: 'Dave Higgins (Gas Safe #4892)',
    eta: 'ETA : 12 mins',
    status: 'In Progress',
    priority: 'Emergency',
    jobReference: 'FR-9421',
    notes: 'Emergency shutoff. Major gas smell reported in boiler cupboard. Engineer on site executing system isolation test.',
    address: '24 Windmill Road, Croydon, Surrey CR0 2XX',
    cost: '£180 (Fixed)'
  },
  {
    id: 'j-2',
    customerName: 'Harriet Vane',
    phone: '07922 882233',
    serviceName: 'Leak Repaired Under Basin',
    area: 'Greenwich (SE10)',
    engineerName: 'Tom Fletcher',
    eta: 'Completed 1 hr ago',
    status: 'Completed',
    priority: 'Standard',
    jobReference: 'FR-9304',
    notes: 'Kitchen sink high pressure copper supply pipe joint corroded and slow dripping. Cleaned joint, applied copper sleeve coupler, tested line at 3.5 bar.',
    address: '8 Croom\'s Hill, Greenwich, London SE10 8ER',
    cost: '£95'
  },
  {
    id: 'j-3',
    customerName: 'Arthur Dent',
    phone: '07812 004488',
    serviceName: 'Radiator Replacement',
    area: 'Bromley (BR1)',
    engineerName: 'Marcus Broad',
    eta: 'Scheduled 14:00',
    status: 'Pending',
    priority: 'High',
    jobReference: 'FR-9430',
    notes: 'Install replacement double-convector 1200x600 steel radiator and smart TRV controller. Drain down needed.',
    address: '42 Cotmandene Crescent, Bromley, BR1 4XF',
    cost: '£165'
  },
  {
    id: 'j-4',
    customerName: 'Penelope Featherington',
    phone: '07932 771122',
    serviceName: 'Sewer Gully Jetting',
    area: 'Mayfair (W1)',
    engineerName: 'Dave Higgins (Gas Safe #4892)',
    eta: 'ETA : 45 mins',
    status: 'In Progress',
    priority: 'High',
    jobReference: 'FR-9442',
    notes: 'Shared pathway grease choke-out. Deploying high-pressure water jetter via rear drainage access port.',
    address: '14 Curzon Street, Mayfair, London W1J 7TR',
    cost: '£125'
  }
];

export const MOCK_TICKERS = [
  "✓ Boiler repair completed — Croydon, 14 mins ago",
  "✓ Emergency leak fixed — Bromley, 1 hr ago",
  "✓ Landlord Gas Check (CP12) passed — Greenwich, 2 hrs ago",
  "✓ Main sewer drain jetted & unblocked — Islington, 3 hrs ago",
  "✓ Heating pump replaced & powerflushed — Lambeth, 4 hrs ago",
  "✓ Pressure leak trace-locating successful — Mayfair, 5 hrs ago"
];
