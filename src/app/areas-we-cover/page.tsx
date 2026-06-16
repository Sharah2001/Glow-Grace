import React from 'react';
import SEO from '../../components/ui/SEO';
import SectionHeader from '../../components/ui/SectionHeader';
import CoverageMap from '../../components/home/CoverageMap';
import { AREAS } from '../../lib/constants';
import { ShieldCheck } from 'lucide-react';
import Button from '../../components/ui/Button';

interface AreasCoveredPageProps {
  onNavigate: (path: string) => void;
}

export default function AreasCoveredPage({ onNavigate }: AreasCoveredPageProps) {
  const regions = ['Central', 'South', 'East', 'North', 'West'] as const;

  return (
    <div className="py-24 bg-obsidian min-h-screen text-bone">
      <SEO 
        title="Boroughs & Postcodes Covered in London"
        description="View our extensive 24/7 plumbing and heating coverage zones. Active plumber dispatching in Croydon, Bromley, Greenwich, Islington, Mayfair, and across Greater London."
        canonicalPath="/areas-we-cover"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <SectionHeader
          eyebrow="Our Sectors"
          heading="Borough Directory & Active Stations"
          subtext="No travel fees, no surcharge rates. We maintain dispatch hubs across primary districts to guarantee response times under 45 minutes on emergency callouts."
          align="center"
        />

        {/* Fleet Showcase Split Panel */}
        <div className="mb-14 grid grid-cols-1 lg:grid-cols-12 bg-charcoal border border-ash relative overflow-hidden">
          <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-center space-y-6">
            <span className="font-mono text-[9px] text-copper tracking-widest uppercase font-medium">
              Rapid Response Fleet
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-bone tracking-tight leading-tight uppercase font-medium">
              Regional Response Vehicles
            </h2>
            <p className="font-sans text-xs sm:text-sm text-smoke leading-relaxed font-light">
              Our service coordinators deploy custom mechanical response vehicles fully outfitted with high-resolution acoustic leak traces, mechanical pipe benders, and genuine replacement boiler parts.
            </p>
            <div className="grid grid-cols-2 gap-4 font-mono text-xs text-bone">
              <div className="bg-obsidian p-3 border border-ash">
                <span className="text-zinc-500 text-[8px] block uppercase">Average Arrival:</span>
                <span className="font-bold text-copper">Under 45 Mins</span>
              </div>
              <div className="bg-obsidian p-3 border border-ash">
                <span className="text-zinc-500 text-[8px] block uppercase">On-Duty Fleet:</span>
                <span className="font-bold text-copper">Gas Safe Certified</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-6 h-64 lg:h-auto min-h-[300px] relative bg-black shrink-0 overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=75&w=600" 
              alt="ModFlowPlumbing premium rapid response vehicle on-call in London" 
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 duration-750 ease-out transition-all"
            />
            {/* Subtle bottom dark vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-charcoal via-transparent to-transparent opacity-60"></div>
          </div>
        </div>

        {/* Embedded Interactive Coverage Map Section */}
        <div className="mb-16">
          <CoverageMap />
        </div>

        {/* Postcodes Directory Grid */}
        <div className="bg-charcoal border border-ash p-6 sm:p-10 relative">
          <h2 className="font-serif text-lg sm:text-2xl text-bone tracking-tight mb-8 font-medium">
            Active Regional Operational Units
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region) => {
              const matchedAreas = AREAS.filter(a => a.region === region);
              if (matchedAreas.length === 0) return null;

              return (
                <div key={region} className="border border-ash p-6 bg-obsidian relative">
                  <h3 className="font-mono text-copper text-xs font-bold uppercase tracking-widest mb-4 pb-2 border-b border-ash flex justify-between items-baseline select-none">
                    <span>// {region.toUpperCase()} DIVISION</span>
                    <span className="text-[8px] text-zinc-500 font-normal">Active Quadrant</span>
                  </h3>

                  <div className="space-y-4">
                    {matchedAreas.map((area) => (
                      <div key={area.id} className="space-y-1">
                        <div className="flex justify-between items-baseline">
                          <span className="font-serif font-medium text-xs sm:text-sm text-bone">
                            {area.name.split(' (')[0]}
                          </span>
                          <span className="font-mono text-[9px] text-copper tracking-widest font-medium uppercase">
                            {area.activeEngineers} Ready
                          </span>
                        </div>
                        <p className="font-mono text-[9px] sm:text-[10px] text-smoke">
                          Sectors: {area.postcodes.join(', ')}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Surcharges disclaimer */}
          <div className="mt-10 bg-obsidian p-5 border border-ash flex flex-col sm:flex-row gap-6 items-center justify-between font-mono text-xs">
            <div className="flex gap-2.5 items-start">
              <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
              <p className="leading-relaxed font-sans text-smoke text-xs font-light max-w-2xl">
                <span className="font-mono text-copper font-medium uppercase block text-[10px] tracking-wider mb-1">Our Committment</span>
                Every sector registered above qualifies for standard £0 diagonal call-out dispatch travel rates. You sign off strictly on the price quote estimated.
              </p>
            </div>
            
            <Button
              variant="outline"
              onClick={() => onNavigate('/quote')}
              className="text-[10px] py-3.5 shrink-0"
            >
              Request Callout Info
            </Button>
          </div>

        </div>

      </div>
    </div>
  );
}
