import React, { useState } from 'react';
import SEO from '../../components/ui/SEO';
import { SERVICES, Service } from '../../lib/constants';
import Button from '../../components/ui/Button';
import SectionHeader from '../../components/ui/SectionHeader';
import PriceTag from '../../components/ui/PriceTag';
import { Clock, ShieldCheck, CheckSquare } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const categories = ['All', 'Heating & Gas', 'Plumbing', 'Drainage'];

  const filteredServices = activeCategory === 'All'
    ? SERVICES
    : SERVICES.filter(s => s.category.toLowerCase() === activeCategory.toLowerCase());

  const handleBookService = (service: Service) => {
    onNavigate(`/quote?service=${service.id}`);
  };

  return (
    <div className="py-24 bg-obsidian min-h-screen text-bone">
      <SEO 
        title="Technical Service Specs & Fixed Rates"
        description="Comprehensive specifications and upfront, transparent costs for Gas Safe boiler engineering, digital leak tracing, water pressure repair, and drain jetting."
        canonicalPath="/services"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <SectionHeader
          eyebrow="Our Specialities"
          heading="Plumbing, Heating & Gas Specifications"
          subtext="We execute fully transparent, high-end mechanical works. All services are quoted in full with £0 dispatch or diagnosis fee applied on site."
          align="center"
        />

        {/* Filter Categories Row */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 sm:mb-16 select-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-mono text-[10px] uppercase tracking-widest px-6 py-3.5 duration-200 border cursor-pointer focus:outline-none ${
                activeCategory === cat
                  ? 'bg-copper border-copper text-obsidian font-bold'
                  : 'bg-charcoal border-ash text-smoke hover:border-copper/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Listings Grid */}
        <div className="grid grid-cols-1 gap-12 animate-fade-up">
          {filteredServices.map((service) => {
            return (
              <div
                key={service.id}
                id={service.slug}
                className="bg-charcoal border border-ash flex flex-col lg:flex-row group relative overflow-hidden transition-all duration-300 hover:border-copper/30"
              >
                {/* Visual Image Side Panel */}
                <div className="relative lg:w-2/5 h-64 lg:h-auto min-h-[220px] overflow-hidden bg-obsidian shrink-0">
                  <img
                    src={service.image}
                    alt={service.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-[0.70] contrast-110 group-hover:grayscale-0 group-hover:scale-105 duration-700 ease-out transition-all"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-charcoal via-charcoal/40 to-transparent"></div>
                  
                  {/* Category label on image banner */}
                  <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 bg-obsidian text-[9px] font-mono font-medium tracking-widest text-copper uppercase border border-ash">
                    {service.category}
                  </span>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between">
                  {/* Reference identifier */}
                  <span className="absolute top-4 right-4 font-mono text-[8px] tracking-widest text-zinc-500 hidden sm:inline select-none">
                    SPEC-IDX: {service.id.toUpperCase()}
                  </span>

                  <div>
                    <div className="flex justify-between items-baseline mb-4">
                      <span className="font-mono text-[9px] tracking-widest text-copper bg-obsidian px-2.5 py-1 border border-ash uppercase font-medium">
                        Standard Operations
                      </span>
                      <PriceTag price={service.price} />
                    </div>

                    <h3 className="font-serif text-2xl font-medium text-bone mb-3 group-hover:text-copper transition-colors duration-200 tracking-tight leading-none">
                      {service.name}
                    </h3>

                    <p className="font-sans text-smoke text-sm sm:text-base leading-relaxed mb-6 max-w-3xl font-light">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-smoke font-mono mb-8 border-t border-b border-ash py-3.5">
                      <span className="flex items-center">
                        <Clock size={13} className="text-copper mr-1.5 shrink-0" />
                        Est. Duration: {service.duration}
                      </span>
                      <span className="flex items-center">
                        <ShieldCheck size={13} className="text-emerald-500 mr-1.5 shrink-0" />
                        12-Month Warrantied Workmanship
                      </span>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-ash">
                    <Button
                      variant="primary"
                      onClick={() => handleBookService(service)}
                      className="text-[10px] py-4 tracking-widest uppercase sm:flex-1 font-bold"
                    >
                      Request Callout Direct
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setSelectedService(service)}
                      className="text-[10px] py-4 tracking-widest uppercase sm:flex-1 font-bold"
                    >
                      Show Technical Specs &raquo;
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Specification Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-obsidian/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-charcoal border border-ash max-w-2xl w-full p-6 sm:p-8 relative overflow-y-auto max-h-[90vh] select-none animate-fade-up font-sans">
            
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="font-mono text-copper text-xs font-bold uppercase block">
                  // TECHNICAL SPECIFICATION SHEET
                </span>
                <h3 className="font-serif font-semibold text-bone text-xl sm:text-2xl tracking-tight mt-1">
                  {selectedService.name}
                </h3>
              </div>
              <PriceTag price={selectedService.price} />
            </div>

            <div className="h-[1px] w-full bg-ash my-4" />

            {/* Quick specifications breakdown */}
            <div className="grid grid-cols-2 gap-4 bg-obsidian p-4 mb-6 border border-ash font-mono text-[11px] text-bone">
              <div>
                <span className="text-zinc-500 block uppercase text-[8px]">Estimated Effort:</span>
                <span className="font-bold text-copper">{selectedService.duration} on-site</span>
              </div>
              <div>
                <span className="text-zinc-500 block uppercase text-[8px]">On-Duty Compliance:</span>
                <span className="font-bold text-copper">Landlord CP12 / Gas Safe</span>
              </div>
              <div>
                <span className="text-zinc-500 block uppercase text-[8px]">Guarantee Guarantee:</span>
                <span className="font-bold text-copper">1-Year Direct Warranty</span>
              </div>
              <div>
                <span className="text-zinc-500 block uppercase text-[8px]">Diagnosis travel:</span>
                <span className="font-bold text-emerald-400">£0 (Waived)</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-serif font-medium text-bone text-sm uppercase mb-1.5 tracking-wider text-copper">Sequence of Mechanical Operations:</h4>
                <p className="font-sans text-xs sm:text-sm text-smoke leading-relaxed font-light">
                  {selectedService.longDescription}
                </p>
              </div>

              <div>
                <h4 className="font-serif font-medium text-bone text-sm uppercase mb-1.5 tracking-wider text-copper">Quality Standards:</h4>
                <p className="font-sans text-xs sm:text-sm text-smoke leading-relaxed font-light">
                  We use heavy-wall copper pipes and custom brass couples. Heat soldered joints are clean, lead-free and Gas Safe compliant, pressure-tight up to 10bar to protect central heating flow arrays.
                </p>
              </div>
            </div>

            {/* Action buttons inside spec modal */}
            <div className="flex flex-col sm:flex-row justify-end gap-3 mt-8 pt-4 border-t border-ash">
              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-[#9CA3AA] hover:text-white transition-colors cursor-pointer focus:outline-none"
              >
                Close Spec Sheet
              </button>
              
              <Button
                variant="primary"
                onClick={() => {
                  const srv = selectedService;
                  setSelectedService(null);
                  handleBookService(srv);
                }}
                className="text-[10px]"
              >
                Book Service Callback
              </Button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
