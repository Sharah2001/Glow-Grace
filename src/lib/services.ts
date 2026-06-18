import type { Service } from './types';

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
    image: 'images/image001.jpg'
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
    image: 'images/image002.jpg'
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
    image: 'images/image003.webp'
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
    image: 'images/image004.jpg'
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
    image: 'images/image01.avif'
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
    image: 'images/image005.webp'
  }
];
