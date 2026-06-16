import React, { useEffect, useRef, useState } from 'react';
import { Flame, Droplet, Activity, Radio, Bath, ShieldCheck, ArrowRight } from 'lucide-react';
import { SERVICES } from '../../lib/constants';
import SectionHeader from '../ui/SectionHeader';
import PriceTag from '../ui/PriceTag';
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
    'boiler-repair': Flame,
    'leak-detection': Droplet,
    'drain-unblocking': Activity,
    'central-heating': Radio,
    'bathroom-installation': Bath,
    'gas-checks': ShieldCheck,
  };

  const handleCardClick = (slug: string) => {
    onNavigate(`/services`);
    setTimeout(() => {
      const element = document.getElementById(slug);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <section id="services-preview" className="py-24 bg-obsidian border-b border-ash scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="Our Specializations"
          heading="Expert Plumbing & Heating Craft"
          subtext="Comprehensive, five-star mechanical engineering tailored for residential and high-end commercial properties. All tasks are quoted clearly on site with zero hidden fees."
        />

        {/* Card Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pt-4"
        >
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.id] || Flame;
            const isVisible = visibleItems[service.id];

            return (
              <div
                key={service.id}
                data-id={service.id}
                style={{ transitionDelay: `${index * 80}ms` }}
                onClick={() => handleCardClick(service.slug)}
                className={`group relative bg-charcoal border border-ash/80 p-0 flex flex-col justify-between transition-all duration-500 h-full cursor-pointer select-none overflow-hidden hover:border-copper/45 hover:shadow-xl ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
              >
                {/* Visual Image container with elegant overlay */}
                <div className="relative h-52 w-full overflow-hidden bg-obsidian">
                  <img
                    src={service.image}
                    alt={service.name}
                    referrerPolicy="no-referrer"
                    width="400"
                    height="260"
                    className="w-full h-full object-cover grayscale brightness-[0.70] contrast-110 group-hover:grayscale-0 group-hover:scale-105 duration-700 ease-out transition-all"
                    loading="lazy"
                  />
                  {/* Subtle dark bottom-up vignette to preserve text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent"></div>
                  
                  {/* Category label on image */}
                  <span className="absolute bottom-4 left-5 inline-flex items-center gap-1.5 px-2.5 py-1 bg-obsidian/90 text-[9px] font-mono font-medium tracking-widest text-copper uppercase border border-ash">
                    {service.category}
                  </span>
                  
                  {/* Icon Panel with elegant layout */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-obsidian text-copper flex items-center justify-center border border-ash group-hover:bg-copper group-hover:text-obsidian group-hover:border-copper transition-all duration-300">
                    <IconComponent size={15} className="stroke-[1.5]" />
                  </div>
                </div>

                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Pricing and Category label */}
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-mono text-[9px] tracking-widest text-smoke uppercase">
                        Spec: {service.id.toUpperCase()}
                      </span>
                      <PriceTag price={service.price} />
                    </div>

                    {/* Service Title */}
                    <h3 className="font-serif text-xl sm:text-2xl text-bone font-medium tracking-tight mb-2 group-hover:text-copper transition-colors duration-200">
                      {service.name}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-smoke text-xs sm:text-sm leading-relaxed mb-6 font-light">
                      {service.description}
                    </p>
                  </div>

                  {/* Card CTA Link */}
                  <div className="font-mono text-[9px] font-medium uppercase tracking-widest text-copper group-hover:text-brass-glow items-center inline-flex mt-2 transition-colors duration-200 gap-1.5">
                    <span>Technical specs</span>
                    <ArrowRight size={10} className="transform group-hover:translate-x-1 duration-200" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Outer Section CTA */}
        <div className="text-center mt-12 animate-fade-up">
          <Button
            variant="outline"
            onClick={() => onNavigate('/services')}
            className="hover:scale-[1.02] duration-205"
          >
            Explore Detailed Specifications
          </Button>
        </div>
      </div>
    </section>
  );
}
