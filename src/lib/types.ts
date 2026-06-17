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
