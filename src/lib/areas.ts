import type { Area } from './types';

export const AREAS: Area[] = [
  { id: 'london-central', name: 'Central London (City, Westminster)', region: 'Central', postcodes: ['EC1', 'EC2', 'EC3', 'EC4', 'WC1', 'WC2', 'W1', 'SW1'], calloutCharge: '£0 (No callout fee)', activeEngineers: 3 },
  { id: 'london-croydon', name: 'Croydon & South London', region: 'South', postcodes: ['CR0', 'CR2', 'SM1', 'SM5', 'SE19', 'SE25'], calloutCharge: '£0 (No callout fee)', activeEngineers: 4 },
  { id: 'london-bromley', name: 'Bromley & Kent Borders', region: 'South', postcodes: ['BR1', 'BR3', 'BR5', 'DA1', 'DA5'], calloutCharge: '£0 (No callout fee)', activeEngineers: 3 },
  { id: 'london-greenwich', name: 'Greenwich, Lewisham & South East', region: 'South', postcodes: ['SE3', 'SE10', 'SE13', 'SE18', 'SE8'], calloutCharge: '£0 (No callout fee)', activeEngineers: 5 },
  { id: 'london-lambeth', name: 'Lambeth & Wandsworth', region: 'South', postcodes: ['SW11', 'SW12', 'SW4', 'SW8', 'SW2'], calloutCharge: '£0 (No callout fee)', activeEngineers: 4 },
  { id: 'london-ealing', name: 'Ealing, Richmond & West London', region: 'West', postcodes: ['W5', 'W13', 'TW1', 'TW9', 'SW15'], calloutCharge: '£0 (No callout fee)', activeEngineers: 3 },
  { id: 'london-islington', name: 'Islington, Camden & North London', region: 'North', postcodes: ['N1', 'NW1', 'NW3', 'N5', 'N7', 'N19'], calloutCharge: '£0 (No callout fee)', activeEngineers: 3 },
  { id: 'london-tower-hamlets', name: 'Tower Hamlets & East London', region: 'East', postcodes: ['E1', 'E3', 'E14', 'E8', 'E9', 'E15'], calloutCharge: '£0 (No callout fee)', activeEngineers: 4 }
];
