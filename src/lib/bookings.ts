import type { Booking } from './types';

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
