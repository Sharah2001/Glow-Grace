import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import WhyUs from '../components/home/WhyUs';
import Team from '../components/home/Team';
import Testimonials from '../components/home/Testimonials';
import Gallery from '../components/home/Gallery';
import BookingCTA from '../components/home/BookingCTA';

interface HomeProps {
  onNavigate: (path: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="relative overflow-hidden w-full">
      {/* 1. Hero banner */}
      <Hero onNavigate={onNavigate} />

      {/* 2. Services Grid */}
      <Services onNavigate={onNavigate} />

      {/* 3. Why Us feature strip */}
      <WhyUs />

      {/* 4. Team Portrait list */}
      <Team />

      {/* 5. Infinite scrolling marquee testimonials */}
      <Testimonials />

      {/* 6. Curated portfolio preview */}
      <Gallery onNavigate={onNavigate} />

      {/* 7. Animated background booking banner */}
      <BookingCTA onNavigate={onNavigate} />
    </div>
  );
}
