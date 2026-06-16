export interface Service {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: string;
  duration: string;
  description: string;
  longDescription: string;
  icon: string; // lucide icon name
  image: string; // high-quality Unsplash image link
}

export interface Area {
  id: string;
  name: string;
  region: 'North' | 'South' | 'East' | 'West' | 'Central';
  postcodes: string[];
  calloutCharge: string;
  activeEngineers: number;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  service: string;
  quote: string;
  area: string;
  date: string;
}

export interface Booking {
  id: string;
  customerName: string;
  phone: string;
  email: string;
  serviceId: string;
  postcode: string;
  date: string;
  timeSlot: string;
  status: 'New' | 'Confirmed' | 'Completed' | 'Cancelled';
  notes?: string;
}

export interface Job {
  id: string;
  customerName: string;
  phone: string;
  serviceName: string;
  area: string;
  engineerName: string;
  eta: string; // or duration
  status: 'Pending' | 'In Progress' | 'Completed';
  priority: 'Emergency' | 'High' | 'Standard';
  jobReference: string; // Mono reference like FR-9042
  notes: string;
  address: string;
  cost: string;
}

export const SERVICES: Service[] = [
  {
    id: 'boiler-repair',
    slug: 'boiler-repair-and-servicing',
    name: 'Boiler Repair & Servicing',
    category: 'Heating & Gas',
    price: 'From £85',
    duration: '1 - 2 Hours',
    description: 'Gas Safe registered troubleshooting, diagnostic checkouts, annual services, and safety certifications.',
    longDescription: 'Our Gas Safe engineers are fully equipped to diagnose and repair boiler failures of all major UK brands (Worcester Bosch, Vaillant, Baxi, Glow-worm, etc.). This service includes comprehensive visual inspections, central heating system water checks, pressure testing, flue gas analysis, and dynamic parts testing. We will supply a digital PDF Gas Safe certificate immediately on completion of any service.',
    icon: 'Flame',
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&fm=webp&q=65&w=600'
  },
  {
    id: 'leak-detection',
    slug: 'leak-detection',
    name: 'Leak Detection & Pipe Repair',
    category: 'Plumbing',
    price: 'From £69',
    duration: '1 - 3 Hours',
    description: 'Trace and access locating, pipe replacements, valve overhauls, and structural leak repairs.',
    longDescription: 'Water leaks can cause massive structural damages in short periods. We utilize active acoustic tracing, thermal imagery, and humidity meters to find hidden leak sources inside walls, ceilings, or under floorboards without destructive hammering. Includes immediate isolation, damaged pipe removal, copper/MDPE soldering, and system re-pressurization checks.',
    icon: 'Droplet',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&fm=webp&q=65&w=600'
  },
  {
    id: 'drain-unblocking',
    slug: 'drain-unblocking',
    name: 'Drain Unblocking',
    category: 'Drainage',
    price: 'From £75',
    duration: '45 - 90 mins',
    description: 'High-pressure water jetting, electro-mechanical block clearance, and drain camera inspections.',
    longDescription: 'Stubborn blockages are treated with tradesman-grade electro-mechanical coring or high-pressure water jetting. We clear silt, hair, grease, and sanitary deposits in internal sinks, toilets, or external gulleys. In complicated cases, we run a flexible CCTV drain probe to inspect structural integrity and locate root intrusions.',
    icon: 'Activity',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&fm=webp&q=65&w=600'
  },
  {
    id: 'central-heating',
    slug: 'central-heating',
    name: 'Central Heating Overhauls',
    category: 'Heating & Gas',
    price: 'From £120',
    duration: '2 - 5 Hours',
    description: 'Radiator balancing, powerflushing, pump replacements, and Smart thermostat installations.',
    longDescription: 'Optimize heating outputs and lower your utility bills. We carry out complete powerflushing of radiator circuits to remove heavy black metallic sludge, replace seized thermostatic radiator valves (TRVs), swap noisy zone valves or circulating pumps, and install intelligent heating thermostats (Nest, Hive) to modernize your system.',
    icon: 'Radio',
    image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&fm=webp&q=65&w=600' // Gorgeous unique room vertical radiator interior panel
  },
  {
    id: 'bathroom-installation',
    slug: 'bathroom-installation',
    name: 'Bathroom Installation',
    category: 'Plumbing',
    price: 'From £299',
    duration: '1 - 5 Days',
    description: 'Full sanitaryware fitting, tap installations, showers, power-pump setups, and waste connections.',
    longDescription: 'From upgrading classic basin brassware to configuring high-end digital mixer showers, we provide neat, warrantied sanitaryware installations. Our full bathroom service includes copper and multi-layer pipework structuring, wall-hung WC frames, bespoke wetroom drainage lines, and high-quality finishing.',
    icon: 'Bath',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&fm=webp&q=65&w=600' // Luxurious plumbing look
  },
  {
    id: 'gas-checks',
    slug: 'gas-safety-checks',
    name: 'Gas Safety Checks (CP12)',
    category: 'Heating & Gas',
    price: 'From £59',
    duration: '45 - 60 mins',
    description: 'Landlord gas safety certifications, appliance testing, gas tightness, and pressure checkouts.',
    longDescription: 'UK Landlords are legally bound to have an annual Gas Safety inspection carried out. Our Gas Safe engineer certifies every gas appliance (including boiler, hob, fires) to confirm tight connections, safe gas pressure levels, perfect burner ventilation, and operational smoke/CO detectors. We issue standard legal CP12 certifications on the spot.',
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&fm=webp&q=65&w=600' // Technical gas analysis engineer look
  }
];

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

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Mark G.',
    rating: 5,
    service: 'Boiler Repair & Servicing',
    quote: "Our Worcester boiler cutout during a freezing cold snap. ModFlowPlumbing had an engineer at our door in Croydon within 30 minutes. He diagnosed a faulty sensor, fetched the part, and had heating back on under an hour. Outstanding response and transparent pricing.",
    area: 'Croydon',
    date: '2026-06-03'
  },
  {
    id: 't-2',
    name: 'Sarah Jenkins',
    rating: 5,
    service: 'Leak Detection',
    quote: "Spotted wet wallpaper in our kitchen. Other plumbers wanted to rip out our custom cabinets. The ModFlowPlumbing engineer used safe acoustic sensors to pin-point a copper pinhole leak directly behind a minor baseboard. Clean, expert, and deeply impressive engineering.",
    area: 'Bromley',
    date: '2026-05-28'
  },
  {
    id: 't-3',
    name: 'Alastair MacDonald',
    rating: 5,
    service: 'Gas Safety Checks (CP12)',
    quote: "As a private rental landlord in Limehouse, speed is critical. ModFlowPlumbing schedules annual CP12 checks directly with my tenants, handles safety checks professionally, and emails the PDF certificates. Very reliable and no callout fee.",
    area: 'Tower Hamlets',
    date: '2026-06-09'
  },
  {
    id: 't-4',
    name: 'Hassan R.',
    rating: 5,
    service: 'Drain Unblocking',
    quote: "Main gully overflowed over the weekend. ModFlowPlumbing arrived quickly. Cleaned up the area, jetted the drain, and cleared a heavy grease deposit instantly. Monospace estimation was absolute, didn't pay a penny extra than quoted.",
    area: 'Islington',
    date: '2026-05-15'
  },
  {
    id: 't-5',
    name: 'Emma Broadbent',
    rating: 5,
    service: 'Bathroom Installation',
    quote: "Had our traditional brass taps and high-pressure shower valve replaced in our cottage. Handled meticulously, pristine copper joint seals, and no messy silicone. 1-year guarantee papers came in the email.",
    area: 'Richmond',
    date: '2026-04-20'
  }
];

export const MOCK_BOOKINGS: Booking[] = [
  {
    id: 'b-1',
    customerName: 'Alistair Ross',
    phone: '07712 345678',
    email: 'alistair@ross-design.co.uk',
    serviceId: 'boiler-repair',
    postcode: 'CR0 1XX',
    date: '2026-06-12',
    timeSlot: 'Morning (08:00 - 12:00)',
    status: 'Confirmed',
    notes: 'Worcester Greenstar making loud rattling sound then cutting out.'
  },
  {
    id: 'b-2',
    customerName: 'Fiona Gallagher',
    phone: '07987 654321',
    email: 'fiona.g@mymail.co.uk',
    serviceId: 'leak-detection',
    postcode: 'BR1 2AA',
    date: '2026-06-12',
    timeSlot: 'Afternoon (12:00 - 16:00)',
    status: 'New',
    notes: 'Water stain appearing on living room ceiling directly under bathroom.'
  },
  {
    id: 'b-3',
    customerName: 'Geoffrey Vance',
    phone: '020 8123 4567',
    email: 'gvance@vanceholdings.co.uk',
    serviceId: 'gas-checks',
    postcode: 'E14 9YY',
    date: '2026-06-13',
    timeSlot: 'Morning (08:00 - 12:00)',
    status: 'Confirmed',
    notes: 'CP12 landlord certificate for 2-bed apartment. Boiler and hob.'
  },
  {
    id: 'b-4',
    customerName: 'Margaret Thatcher (Est)',
    phone: '07722 991100',
    email: 'info@margetestates.co.uk',
    serviceId: 'drain-unblocking',
    postcode: 'SW1A 1AA',
    date: '2026-06-11',
    timeSlot: 'Morning (08:00 - 12:00)',
    status: 'Completed',
    notes: 'Blocked kitchen waste stack causing backup.'
  },
  {
    id: 'b-5',
    customerName: 'Samir Patel',
    phone: '07833 445566',
    email: 'samir.p@techspace.io',
    serviceId: 'central-heating',
    postcode: 'N1 6PP',
    date: '2026-06-14',
    timeSlot: 'Evening (16:00 - 20:00)',
    status: 'New',
    notes: 'Install Hive hub and balance 6 radiators across three levels.'
  },
  {
    id: 'b-6',
    customerName: 'Clara Oswald',
    phone: '07900 112233',
    email: 'clara.os@tardis.co.uk',
    serviceId: 'boiler-repair',
    postcode: 'W5 1XX',
    date: '2026-06-10',
    timeSlot: 'Afternoon (12:00 - 16:00)',
    status: 'Cancelled',
    notes: 'No hot water. Cancelled because boiler self-healed after power cycle.'
  }
];

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
