import { useState } from 'react';
import { SERVICES, Service } from '../..//lib/constants';
import Button from '../../components/ui/Button';
import SectionHeader from '../../components/ui/SectionHeader';
import { Clock, Tag, Sparkles, X, ChevronRight } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
  onSelectService?: (service: Service) => void;
}

export default function ServicesPage({ onNavigate, onSelectService }: ServicesPageProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedDetailedService, setSelectedDetailedService] = useState<Service | null>(null);

  const categories = ['All', 'Hair', 'Skincare', 'Nails', 'Makeup', 'Eyes', 'Wellness'];

  const filteredServices = activeCategory === 'All'
    ? SERVICES
    : SERVICES.filter(s => s.category.toLowerCase() === activeCategory.toLowerCase());

  const handleSelectServiceAndBook = (service: Service) => {
    if (onSelectService) {
      onSelectService(service);
    }
    onNavigate('/booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-28 pb-20 bg-ivory/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Banner header */}
        <SectionHeader
          eyebrow="The Full Menu"
          heading="Curated Dermal & Sculpting Therapies"
          subtext="Discover our signature treatment catalogue, curated meticulously to enhance your raw, pristine beauty with safe botanical formulations."
          align="center"
        />

        {/* Filter Categories Row */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 sm:mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-body text-xs uppercase tracking-widest px-5 py-3 transition-all duration-300 border focus:outline-none cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gold border-gold text-white shadow-sm font-semibold'
                  : 'bg-white border-champagne/20 text-[#1A1A1A] hover:border-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 animate-fade-up">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="bg-white border border-champagne/20 p-8 md:p-10 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              {/* Highlight Slide bar */}
              <div className="absolute left-0 top-0 h-full w-[2px] bg-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

              <div>
                <div className="flex justify-between items-baseline mb-4">
                  <span className="font-accent text-[10px] tracking-widest text-[#8E8E93] uppercase font-bold">
                    {service.category}
                  </span>
                  <span className="font-display font-medium text-gold text-xl md:text-2xl">
                    {service.price}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-semibold text-onyx mb-3 group-hover:text-gold transition-colors">
                  {service.name}
                </h3>

                <p className="font-body text-[#8E8E93] text-sm leading-relaxed mb-6 font-light">
                  {service.description}
                </p>

                <div className="flex items-center space-x-6 text-xs text-[#8E8E93] font-body font-light mb-8">
                  <span className="flex items-center">
                    <Clock size={14} className="text-gold mr-1.5 shrink-0" />
                    {service.duration} duration
                  </span>
                  <span className="flex items-center">
                    <Tag size={14} className="text-gold mr-1.5 shrink-0" />
                    Botanical selection included
                  </span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 border-t border-champagne/10">
                <Button
                  variant="primary"
                  onClick={() => handleSelectServiceAndBook(service)}
                  className="text-white hover:shadow-lg text-[10px] sm:text-xs py-3"
                >
                  Book Treatment Session
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setSelectedDetailedService(service)}
                  className="text-gold border-gold/40 hover:border-gold hover:bg-gold hover:text-white text-[10px] sm:text-xs py-3"
                >
                  View Ingredient Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ingredient Details Modal Overlay */}
      {selectedDetailedService && (
        <div className="fixed inset-0 bg-onyx/70 backdrop-blur-sm z-[9999] flex items-center justify-center p-6 transition-all duration-300">
          <div className="bg-white border border-champagne/20 max-w-2xl w-full p-8 md:p-10 relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedDetailedService(null)}
              className="absolute top-6 right-6 text-[#1A1A1A] hover:text-gold transition-colors cursor-pointer focus:outline-none"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <span className="font-accent text-gold text-xs tracking-widest uppercase block mb-2 font-semibold">
              {selectedDetailedService.category} Ritual
            </span>
            <h3 className="font-display font-medium text-onyx text-3xl mb-4">
              {selectedDetailedService.name}
            </h3>

            <div className="h-[1px] w-12 bg-champagne mb-6" />

            <div className="bg-ivory p-5 mb-6 text-xs sm:text-sm font-body font-light text-[#8E8E93] border border-champagne/10 space-y-3">
              <p className="flex justify-between text-onyx font-normal">
                <span>Standard treatment duration:</span>
                <span className="font-semibold text-gold">{selectedDetailedService.duration}</span>
              </p>
              <p className="flex justify-between text-onyx font-normal">
                <span>Inclusive studio price:</span>
                <span className="font-semibold text-gold font-display text-lg">{selectedDetailedService.price}</span>
              </p>
            </div>

            <h4 className="font-display font-semibold text-onyx text-base mb-2">The Therapeutic Sequence:</h4>
            <p className="font-body text-sm font-light text-[#8E8E93] leading-relaxed mb-6">
              {selectedDetailedService.longDescription}
            </p>

            <h4 className="font-display font-semibold text-onyx text-base mb-2">Our Botanical Signature:</h4>
            <p className="font-body text-sm font-light text-[#8E8E93] leading-relaxed mb-8">
              We exclusively deploy premium certified active dermal nutrients. Completely free of sulfur, synthetic emulsifiers, parabens, or artificial pigments. Optimized for dermal sensitivity and long-term organic skin cellular restoration.
            </p>

            <div className="flex justify-end space-x-4">
              <Button
                variant="ghost"
                onClick={() => setSelectedDetailedService(null)}
                className="text-xs"
              >
                Close details
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  const serviceToBook = selectedDetailedService;
                  setSelectedDetailedService(null);
                  handleSelectServiceAndBook(serviceToBook);
                }}
                className="text-xs"
              >
                Book This Treatment
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
