import { ChevronDown } from 'lucide-react';
import Button from '../ui/Button';

interface HeroProps {
  onNavigate: (path: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const handleScrollToNext = () => {
    const nextSection = document.getElementById('services-preview');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[100vh] min-h-[600px] overflow-hidden flex items-center justify-center">
      {/* Background with Ken Burns */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center animate-ken-burns z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.4), rgba(26, 26, 26, 0.55)), url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1600')`
        }}
      />

      {/* Floating subtle details (Decorative sparks) */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-onyx/30 mix-blend-overlay z-1" />

      {/* Hero Content - Card Centered with Frosted-glass overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-up">
        <div className="backdrop-blur-md bg-white/10 border border-white/30 shadow-2xl px-8 py-14 md:px-16 md:py-20 rounded-2xl relative">
          {/* Accent Eyebrow */}
          <span className="font-display italic text-[#C9A84C] text-[10px] tracking-[0.4em] uppercase block mb-6 font-semibold animate-pulse">
            — ESTABLISHED 2009 —
          </span>

          {/* Headline */}
          <h1 className="font-display font-light text-white text-5xl sm:text-7xl md:text-8xl tracking-tight leading-[1.1] mb-6 drop-shadow-xs">
            Where Beauty <br />
            <span className="italic font-normal font-display">Becomes Art</span>
          </h1>

          {/* Subheadline */}
          <p className="font-body text-[#FAF7F2]/90 text-sm sm:text-base md:text-lg font-light tracking-wide max-w-lg mx-auto mb-10 leading-relaxed">
            Bespoke dermal therapies, hair sculpture, and premium nail design crafted uniquely for you, in the heart of the city. Experience the pinnacle of luxury self-care.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5 justify-center">
            <Button
              variant="primary"
              onClick={() => onNavigate('/booking')}
              className="text-white hover:scale-105 duration-300"
            >
              Book a Session
            </Button>
            <Button
              variant="outline"
              onClick={() => onNavigate('/services')}
              className="text-white border-white/50 hover:bg-white/10 hover:text-white duration-300"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator from Clean Minimalism design markup */}
      <button
        onClick={handleScrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-2 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer focus:outline-none"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-widest text-white">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent animate-pulse"></div>
      </button>
    </section>
  );
}
