import React from 'react';
import SEO from '../../../components/ui/SEO';
import { SERVICES, Service } from '../../../lib/constants';
import Button from '../../../components/ui/Button';
import PriceTag from '../../../components/ui/PriceTag';
import { Clock, ShieldCheck, Check, ArrowLeft, Phone } from 'lucide-react';

interface ServiceDetailProps {
  onNavigate: (path: string) => void;
  slug?: string;
}

export default function ServiceDetailPage({ onNavigate, slug }: ServiceDetailProps) {
  // Extract slug from URL if not passed explicitly as prop
  const activeSlug = slug || window.location.pathname.split('/').pop() || '';
  
  // Find matching service
  const service = SERVICES.find(s => s.slug === activeSlug) || SERVICES[0];

  const handleBookNow = () => {
    onNavigate(`/quote?service=${service.id}`);
  };

  return (
    <div className="py-24 bg-obsidian min-h-screen text-bone">
      <SEO 
        title={`${service.name} Technical Specifications`}
        description={`${service.description} Guaranteed Gas Safe repairs standard of excellence. Fixed pricing from ${service.price.toLowerCase()} and 12-month parts warranty.`}
        canonicalPath={`/services/${service.slug}`}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link Row */}
        <button
          onClick={() => onNavigate('/services')}
          className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-smoke hover:text-copper mb-8 focus:outline-none cursor-pointer group"
        >
          <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
          Back to all specifications
        </button>

        {/* Core Detail layout */}
        <div className="bg-charcoal border border-ash p-0 relative overflow-hidden">
          
          {/* Premium Hero Image Header */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-obsidian">
            <img
              src={service.image}
              alt={service.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover brightness-[0.60] contrast-110"
            />
            {/* Dark gradient vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent"></div>
            
            {/* Overlay badge info */}
            <div className="absolute bottom-6 left-6 sm:left-10 z-10">
              <span className="font-mono text-[9px] tracking-widest text-copper bg-obsidian px-2.5 py-1 border border-ash uppercase font-medium">
                Division: {service.category}
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl text-bone tracking-tight mt-3 font-semibold leading-none">
                {service.name}
              </h1>
            </div>
          </div>

          <div className="p-6 sm:p-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 border-b border-ash pb-6">
              <div className="flex items-center gap-3">
                <div>
                  <span className="font-mono text-copper text-[10px] font-bold uppercase block tracking-wider">
                    // GAS SAFE COMPLIATION
                  </span>
                  <span className="font-mono text-[9px] text-smoke block mt-0.5 uppercase">
                    Spec Code: SYS-{service.id.toUpperCase()}
                  </span>
                </div>
              </div>

              <PriceTag price={service.price} />
            </div>

            <p className="font-sans text-base text-smoke leading-relaxed mb-8 font-light">
              {service.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 border-b border-ash pb-8 mb-8 font-mono text-xs">
              <div className="space-y-1">
                <span className="text-zinc-500 block text-[9px] uppercase tracking-wider">Project Duration:</span>
                <span className="font-bold text-copper flex items-center gap-1.5 uppercase">
                  <Clock size={13} className="text-copper" />
                  {service.duration}
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-zinc-500 block text-[9px] uppercase tracking-wider">Parts Warranty:</span>
                <span className="font-bold text-copper flex items-center gap-1.5 uppercase">
                  <ShieldCheck size={13} className="text-emerald-500" />
                  12 Months Cover
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-zinc-500 block text-[9px] uppercase tracking-wider">Diagnostic site visit:</span>
                <span className="font-bold text-emerald-400 flex items-center gap-1.5 uppercase">
                  <Check size={13} className="text-emerald-400" />
                  £0 (Waived)
                </span>
              </div>
            </div>

            {/* Deep spec brief content */}
            <div className="space-y-6">
              <div>
                <h2 className="font-serif text-lg font-medium text-bone uppercase mb-3 tracking-wide text-copper">
                  1. Sequence of Mechanical Operations:
                </h2>
                <p className="font-sans text-sm text-smoke leading-relaxed font-light">
                  {service.longDescription}
                </p>
              </div>

              <div>
                <h2 className="font-serif text-lg font-medium text-bone uppercase mb-3 tracking-wide text-copper">
                  2. Tradesman Joint Integrity Guarantee:
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 font-mono text-xs text-smoke">
                  <li className="flex items-center gap-2">
                    <span className="text-copper font-bold">•</span>
                    Heavy-walled copper pipe conforming to BS EN 1057
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-copper font-bold">•</span>
                    Water-tight joints tested up to 10 bar pressure
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-copper font-bold">•</span>
                    Lead-free WRAS approved materials & fittings
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-copper font-bold">•</span>
                    Executed by active certified Gas Safe Engineers
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-lg font-medium text-bone uppercase mb-3 tracking-wide text-copper">
                  3. Emergency Dispatch Protocol:
                </h2>
                <p className="font-sans text-sm text-smoke leading-relaxed font-light">
                  Once your priority request is processed, our closest regional engineer gets a direct route alert. We ensure robust, clean, and reliable copper-fit repairs, maintaining standard travel timelines of under 45 minutes on emergency dispatches.
                </p>
              </div>
            </div>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row gap-4 pt-10 mt-8 border-t border-ash">
              <Button
                variant="primary"
                onClick={handleBookNow}
                className="text-[10px] py-4.5 tracking-widest uppercase flex-1"
              >
                Request Custom estimate
              </Button>

              <a
                href="tel:08001234567"
                className="flex-1 px-6 py-4.5 bg-ember-red text-bone hover:bg-[#d65741] duration-300 font-mono font-medium text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 border border-ember-red rounded-none"
              >
                <Phone size={13} className="fill-current" />
                Call Emergency Desk
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
