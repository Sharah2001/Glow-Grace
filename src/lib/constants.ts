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
    name: 'Jaffna Jasmine & Crown Artistry',
    category: 'Hair',
    price: 'LKR 8,500',
    duration: '60 mins',
    description: 'Traditional hair braids, elaborate buns, expert jasmine strand (Poo) weaving, and modern styling.',
    longDescription: 'A delicate fusion of traditional Tamil hair braiding with jasmine strands (Saram / Poo Kattal) and contemporary sculpting. Features a relaxing virgin coconut oil scalp nourishment, customized bun setting, and security-pinned flower weaves optimal for temple visits and festive occasions.',
  },
  {
    id: 'facial-skin',
    name: 'Nallur Golden Sandalwood Facial',
    category: 'Skincare',
    price: 'LKR 12,000',
    duration: '75 mins',
    description: 'Pure red sandalwood, organic wild turmeric (Kasturi Manjal), and deep botanical hydration.',
    longDescription: 'Revive natural luminance with our legendary golden therapy. Combining hand-ground Nallur red sandalwood, cold-pressed wild turmeric, and advanced cooling herbal masks to soothe heat-stressed skin, clear active hyperpigmentation, and produce a radiant bridal glow.',
  },
  {
    id: 'nail-art',
    name: 'Artisan Henna & Gel Overlay',
    category: 'Nails',
    price: 'LKR 6,500',
    duration: '60 mins',
    description: 'Intricate wedding henna designs combined with protective builder gel overlay styling.',
    longDescription: 'Celebrate rich heritage with bespoke, hand-drawn fine henna patterns combined with modern aesthetic gel overlays. Includes a luxurious hand massage using saffron-infused oils and gentle, chemical-free cuticle nourishment for optimal health.',
  },
  {
    id: 'bridal-makeup',
    name: 'Kanchipuram Heritage Bridal Makeover',
    category: 'Makeup',
    price: 'LKR 65,000',
    duration: '180 mins',
    description: 'Premium long-wear bridal look, temple jewel setting, and precise silk Kanchipuram saree pleating.',
    longDescription: 'An elite signature transformation for Jaffna Hindu and Christian brides. Includes heavy-duty sweat-resistant makeup styling for humid climates, perfect jewellery layering (Thalami, Chutti, Temple sets), and exact structural pleating and secure anchoring of heavy silk/Kanchipuram sarees.',
  },
  {
    id: 'lash-brow',
    name: 'Kajal Eye & Brow Definition',
    category: 'Eyes',
    price: 'LKR 7,500',
    duration: '45 mins',
    description: 'Surgical brow grooming, custom black-herbal lash tinting, and laminations for deep gazes.',
    longDescription: 'Accentuate your natural beauty with sharp, clean features. Includes advanced brow shaping, intense botanical tinting using organic herbal extracts for that classic, deep South Asian kajal intensity, and lash laminations optimizing symmetry.',
  },
  {
    id: 'massage-spa',
    name: 'Royal Elixir Ayurvedic Therapy',
    category: 'Wellness',
    price: 'LKR 15,000',
    duration: '90 mins',
    description: 'Full-body rejuvenation utilizing authentic local herbal oils, warm neem compresses, and head oils.',
    longDescription: 'Rebalance the nervous system and soothe the mind. Our therapists utilize heirloom Ayurvedic healing recipes from Sri Lanka, incorporating heated warm neem leaf compresses, specialized sesame-neelyadi root formulas, and deep relaxation pressure points.',
  },
];

export const TEAM: TeamMember[] = [
  {
    id: 'shanthi',
    name: 'Shanthi Sivakumar',
    role: 'Creative Director & Master Bridal Artisan',
    bio: 'With over 18 years of experience draping delicate heirloom bridal silks across Jaffna and Colombo, Shanthi is highly respected for her precise Kanchipuram saree pleating and traditional temple jeweller styling.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 'priyanga',
    name: 'Priyanga Thamilselvan',
    role: 'Lead Dermal Expert & Herbal Alchemist',
    bio: 'Deeply knowledgeable in local Sri Lankan Siddha and Ayurvedic botanical traditions, Priyanga formulates bespoke face therapies utilizing cold-pressed sandalwood, saffron extracts, and organic turmeric.',
    image: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 'aarani',
    name: 'Aarani Kailas',
    role: 'Senior Hair Sculptor & Floral Designer',
    bio: 'Aarani excels in traditional Tamil hairstyles, matching intricate Poo Saram (jasmine hair weaves) with contemporary hair cuts, giving local brides an elegant, modern-classical look.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&crop=faces',
  },
  {
    id: 'dharshini',
    name: 'Dharshini Yogarajah',
    role: 'Expert Henna Designer & Nail Stylist',
    bio: 'Dharshini brings geometric elegance to heritage bridal skin art. She is celebrated in Jaffna for her thin, highly detailed bridal henna and long-lasting protective builder gel manicures.',
    image: 'https://images.unsplash.com/photo-1488426862026-56bde64955e9?auto=format&fit=crop&q=80&w=400',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Abirami Luxman',
    rating: 5,
    treatment: 'Kanchipuram Heritage Bridal Makeover',
    quote: "Lumière is an absolute sanctuary in Jaffna! My bridal styling for our wedding near Nallur Kandaswamy Temple was perfect. Saree stayed impeccably fully-pleated for 12 hours straight.",
  },
  {
    id: 'test-2',
    name: 'Dr. Luxmy Gnanasekaram',
    rating: 5,
    treatment: 'Nallur Golden Sandalwood Facial',
    quote: "Living in the warm climate of the North can burn the skin. Priyanga's red sandalwood and turmeric treatment completely reset my hyperpigmentation. Absolutely incredible!",
  },
  {
    id: 'test-3',
    name: 'Thishanthi Ravichandran',
    rating: 5,
    treatment: 'Jaffna Jasmine & Crown Artistry',
    quote: "The organic coconut scalp massage in combination with the beautiful jasmine flower weave was fantastic. Everyone at the temple function complimented the neatness of my traditional braid.",
  },
  {
    id: 'test-4',
    name: 'Dharshini Mahendran',
    rating: 5,
    treatment: 'Artisan Henna & Gel Overlay',
    quote: "Dharshini is a true artist. Her henna patterns are incredibly intricate, fine-lined, and deep in color. The bridal gel manicure lasted weeks without a single chip.",
  },
  {
    id: 'test-5',
    name: 'Sharmila Fernando',
    rating: 5,
    treatment: 'Royal Elixir Ayurvedic Therapy',
    quote: "A sublime escape after traveling from Colombo. The heated neem leaves and therapeutic local warm oils dissolved all journey exhaustions. High-class luxury standards.",
  },
  {
    id: 'test-6',
    name: 'Kopika Sabaratnam',
    rating: 5,
    treatment: 'Kajal Eye & Brow Definition',
    quote: "The herbal black lash tinting gives such a deep, stunning natural look without needing heavy daily mascara. Professional, modern, and clean.",
  },
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Heritage Tamil Bridal Gaze',
    category: 'Makeup',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'gal-2',
    title: 'Intricate Wedding Bridal Henna',
    category: 'Nails',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'gal-3',
    title: 'Elegant Jasmine Hair Braiding',
    category: 'Hair',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'gal-4',
    title: 'Red Sandalwood & Turmeric Radiance',
    category: 'Skincare',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'gal-5',
    title: 'Herbal Black-Kajal Lash Care',
    category: 'Eyes',
    image: 'https://images.unsplash.com/photo-1488426862026-56bde64955e9?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'gal-6',
    title: 'Warm Healed Neem Leave Ayurveda',
    category: 'Wellness',
    image: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&q=80&w=600',
  },
];
