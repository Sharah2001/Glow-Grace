export interface Service {
  id: string;
  name: string;
  category: string;
  price: string;
  duration: string;
  description: string;
  longDescription: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  treatment: string;
  quote: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export const SERVICES: Service[] = [
  {
    id: 'hair-styling',
    name: 'Couture Hair Styling',
    category: 'Hair',
    price: '$120',
    duration: '60 mins',
    description: 'Precision cuts, blowouts, and bespoke styles tailored to enhance your structure.',
    longDescription: 'Our signature signature haircut and blowdry includes a relaxing conditioning treatment and scalp massage. Combining advanced cutting techniques with personalized Consultation, we craft a style unique to your profile, hair density, and lifestyle.',
  },
  {
    id: 'facial-skin',
    name: 'Luminous Facial Treatment',
    category: 'Skincare',
    price: '$160',
    duration: '75 mins',
    description: 'Bespoke dermal therapy combining high-performance botanicals and advanced lifting.',
    longDescription: 'Experience immediate renewal with our custom-engineered dermal facial therapies. Utilizing advanced micro-current massage, botanical essences, and deep cellular hydration, this session resets dull skin cells, producing a radiant, naturally sculpted lift.',
  },
  {
    id: 'nail-art',
    name: 'Artisan Gel Manicure',
    category: 'Nails',
    price: '$85',
    duration: '45 mins',
    description: 'Impeccable nail sculpting, cuticle refinement, and hand-painted fine nail art.',
    longDescription: 'Treat your hands to our premier manicure experience. Features safe, botanical cuticle prep, premium structural builder gels, and minimalist, fine-line hand-painted art designed by our specialist artisans to persist beautifully for weeks.',
  },
  {
    id: 'bridal-makeup',
    name: 'Red Carpet Bridal Prep',
    category: 'Makeup',
    price: '$250',
    duration: '120 mins',
    description: 'An elite customized makeup session featuring luxury hydration and natural elegance.',
    longDescription: 'An elite red-carpet beauty transformation. Every application begins with custom facial massage, luxury serum infusing, and pristine makeup selection. Engineered specifically for breathtaking photography, longevity, and high-fashion lighting.',
  },
  {
    id: 'lash-brow',
    name: 'Luxury Lash & Brow Lamination',
    category: 'Eyes',
    price: '$110',
    duration: '60 mins',
    description: 'Sculpted lash lifts and custom brow laminations to frame your gaze with natural depth.',
    longDescription: 'Frame your gaze with flawless precision. Our lamination therapy lifts and styles raw brow hairs for a fuller, pristine symmetry, while our keratin-infused lash lift provides volume, elegant curvature, and high-contrast tinting.',
  },
  {
    id: 'massage-spa',
    name: 'Somatic Oasis Massage',
    category: 'Wellness',
    price: '$140',
    duration: '90 mins',
    description: 'A deeply restorative luxury full-body treatment utilizing warm oils and stones.',
    longDescription: 'Breathe deep and release. This somatic massage integrates gentle warm stone release, therapeutic warm massage oils, and lavender aromatherapy inside an environment optimized with subtle soft-lighting to calm the nervous system.',
  },
];

export const TEAM: TeamMember[] = [
  {
    id: 'sophia',
    name: 'Sophia de la Cour',
    role: 'Creative Director & Master Stylist',
    bio: 'With over 14 years of styling for high-fashion runway shows in Paris and Milan, Sophia blends structural precision with natural movement to craft truly individual haute couture haircuts.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 'elena',
    name: 'Elena Rostova',
    role: 'Lead Skin Therapist & Dermal Expert',
    bio: 'Respected for her advanced dermal medical studies, Elena designs customized non-invasive facial sculpting programs, reviving cellular radiance using world-class botanical concentrates.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 'chloe',
    name: 'Chloe Mercer',
    role: 'Elite Lash & Brow Artisan',
    bio: 'Chloe is widely recognized for her delicate, micro-precise feathering and keratin lash extensions. She focuses on elevating native symmetry to create a natural, refreshed, wide-awake gaze.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 'isabella',
    name: 'Isabella Thorne',
    role: 'Master Nail Artist & Sculptor',
    bio: 'An artisan at heart, Isabella treats nails as a miniature luxury canvas. She specializes in advanced builder gel structure, botanical base therapies, and minimalist geometric fine art.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Alexandra Vance',
    rating: 5,
    treatment: 'Luminous Facial Treatment',
    quote: "Lumière is an absolute sanctuary. My skin has never looked so sculpted, healthy, and radiant. The level of care and elegant design is second to none.",
  },
  {
    id: 'test-2',
    name: 'Victoria Hastings',
    rating: 5,
    treatment: 'Couture Hair Styling',
    quote: "Sophia de la Cour is a genius! She gave me a custom architectural haircut that requires zero effort to look stunning every single morning.",
  },
  {
    id: 'test-3',
    name: 'Dr. Evelyn Sinclair',
    rating: 5,
    treatment: 'Artisan Gel Manicure',
    quote: "The manicure experience is incredibly refined. Isabella’s hand-painted geometric details are breathtaking, and my nails remained completely flawless for a month.",
  },
  {
    id: 'test-4',
    name: 'Genevieve Du Pont',
    rating: 5,
    treatment: 'Red Carpet Bridal Prep',
    quote: "Our session felt so calming on my wedding morning! The makeup was featherlight, looked incredibly natural, and remained pristine all through the late-night dancing.",
  },
  {
    id: 'test-5',
    name: 'Camille Sterling',
    rating: 5,
    treatment: 'Somatic Oasis Massage',
    quote: "An out-of-body wellness experience. The soft ambient lighting, warm stones, and custom botanicals absolute melt away every ounce of corporate stress.",
  },
  {
    id: 'test-6',
    name: 'Natalia Vane',
    rating: 5,
    treatment: 'Luxury Lash & Brow Lamination',
    quote: "The wide-awake transformation is amazing! The lamination gave my sparse brows a gorgeously full, editorial symmetry that completely reframes my eyes.",
  },
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Cellular Hydration Facial',
    category: 'Skincare',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'gal-2',
    title: 'Minimalist Hand-painted Gel Nail Art',
    category: 'Nails',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'gal-3',
    title: 'Editorial Blowout and Styling',
    category: 'Hair',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'gal-4',
    title: 'Hydrated Red-carpet Makeup Application',
    category: 'Makeup',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'gal-5',
    title: 'Prisinte Symmetrical Keratin Lash Lift',
    category: 'Eyes',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'gal-6',
    title: 'Warm Stones Somatic Massage Therapy',
    category: 'Wellness',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=600',
  },
];
