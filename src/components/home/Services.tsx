import { useEffect, useRef, useState } from 'react';
import { Scissors, Sparkles, Smile, Crown, Eye, HeartHandshake, ArrowRight } from 'lucide-react';
import { SERVICES } from '../../lib/constants';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

interface ServicesProps {
  onNavigate: (path: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id');
            if (id) {
              setVisibleItems((prev) => ({ ...prev, [id]: true }));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const childElements = containerRef.current?.querySelectorAll('[data-id]');
    childElements?.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  const iconMap: Record<string, any> = {
    'hair-styling': Scissors,
    'facial-skin': Sparkles,
    'nail-art': Smile, // Will style to look like a friendly pamper
    'bridal-makeup': Crown,
    'lash-brow': Eye,
    'massage-spa': HeartHandshake,
  };

  return (
    <section id="services-preview" className="py-24 bg-ivory scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <SectionHeader
          eyebrow="The Treatment Menu"
          heading="Bespoke Dermal & Aesthetic Rituals"
          subtext="Every session is a highly tailored choreography of botanical infusions, precise angles, and soothing clinical craftsmanship, leaving you entirely renewed."
        />

        {/* Card Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 pt-4"
        >
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.id] || Sparkles;
            const isVisible = visibleItems[service.id];

            return (
              <div
                key={service.id}
                data-id={service.id}
                style={{ transitionDelay: `${index * 100}ms` }}
                className={`group relative bg-white border border-champagne/20 p-8 md:p-10 flex flex-col justify-between transition-all duration-700 h-full ${
                  isVisible
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-12 scale-95'
                }`}
              >
                {/* Gold top border slide-in on hover */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-500 ease-out" />

                <div>
                  {/* Icon Panel with blush/gold background circle */}
                  <div className="w-14 h-14 bg-blush/20 text-gold flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-white transition-all duration-500 rounded-none relative">
                    <IconComponent size={24} className="stroke-[1.5]" />
                  </div>

                  {/* Pricing and Category label */}
                  <div className="flex justify-between items-baseline mb-3">
                    <span className="font-accent text-[10px] tracking-widest text-[#8E8E93] uppercase">
                      {service.category}
                    </span>
                    <span className="font-display font-medium text-gold text-lg">
                      {service.price}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="font-display text-xl sm:text-2xl text-onyx font-semibold mb-3 group-hover:text-gold transition-colors duration-300">
                    {service.name}
                  </h3>

                  {/* One-Line Description */}
                  <p className="font-body text-[#8E8E93] text-sm leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>
                </div>

                {/* Card CTA Link */}
                <button
                  onClick={() => onNavigate('/services')}
                  className="font-body text-xs font-semibold uppercase tracking-widest text-onyx hover:text-gold items-center inline-flex mt-4 cursor-pointer focus:outline-none transition-colors duration-300"
                >
                  Dermal Details
                  <ArrowRight size={14} className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Outer Section CTA */}
        <div className="text-center mt-16 animate-pulse">
          <Button
            variant="outline"
            onClick={() => onNavigate('/services')}
            className="hover:scale-105 active:scale-95 duration-300"
          >
            Savor Entire Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
