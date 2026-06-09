import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../../lib/constants';
import SectionHeader from '../ui/SectionHeader';

export default function Testimonials() {
  // Multiply the testimonials array to make it double for a smooth infinite carousel loop
  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-24 bg-white overflow-hidden relative border-y border-champagne/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <SectionHeader
          eyebrow="The Devotion"
          heading="Client Echoes from the Sanctuary"
          subtext="Hear from our community of modern women who enjoy natural results paired with deep, immersive restoration."
        />
      </div>

      {/* Marquee Outer Container */}
      <div className="relative w-full flex overflow-hidden py-4 select-none">
        {/* Left and Right Fade overlays for premium studio finish */}
        <div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* The Marquee Flexing Track */}
        <div className="flex space-x-6 shrink-0 animate-marquee hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
          {duplicatedTestimonials.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[300px] sm:w-[400px] bg-ivory border border-champagne/20 p-8 md:p-10 flex flex-col justify-between shadow-sm relative transition-shadow hover:shadow-md shrink-0"
            >
              {/* Star Ratings Row */}
              <div className="flex space-x-1 mb-4 text-gold">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={15} className="fill-gold stroke-gold" />
                ))}
              </div>

              {/* Quote details */}
              <blockquote className="font-display italic text-onyx text-base md:text-lg mb-6 leading-relaxed">
                "{item.quote}"
              </blockquote>

              {/* Footer row */}
              <div className="pt-4 border-t border-champagne/10 flex flex-col">
                <span className="font-accent text-xs tracking-widest text-[#8E8E93] uppercase font-semibold mb-1">
                  {item.treatment}
                </span>
                <cite className="font-body text-xs text-onyx font-medium not-italic">
                  {item.name}
                </cite>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
