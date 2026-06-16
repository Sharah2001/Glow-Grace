import React, { useState } from 'react';
import { Search, MapPin, CheckCircle, AlertTriangle, UserCheck } from 'lucide-react';
import { AREAS } from '../../lib/constants';
import SectionHeader from '../ui/SectionHeader';

export default function CoverageMap() {
  const [searchQuery, setSearchQuery] = useState('');
  const [checkResult, setCheckResult] = useState<{
    status: 'success' | 'fail' | null;
    message: string;
    areaName?: string;
  }>({ status: null, message: '' });
  
  const [selectedBorough, setSelectedBorough] = useState<string | null>(AREAS[0].id);

  const handleCheckPostcode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setCheckResult({ status: 'fail', message: 'Please enter a valid UK postcode (e.g., SE10 or CR0)' });
      return;
    }

    const cleanInput = searchQuery.trim().toUpperCase().replace(/\s+/g, '');
    
    // Find matching coverage area
    const matchedArea = AREAS.find(area => {
      return area.postcodes.some(p => {
        return cleanInput.startsWith(p) || p.startsWith(cleanInput);
      });
    });

    if (matchedArea) {
      setCheckResult({
        status: 'success',
        areaName: matchedArea.name,
        message: `✓ ModFlowPlumbing direct response is active for your area. We have ${matchedArea.activeEngineers} on-call Gas Safe engineers nearby. Estimated emergency travel time is under 45 minutes.`
      });
    } else {
      setCheckResult({
        status: 'fail',
        message: `ℹ Outside regular route, but we frequently dispatch manually on request. Call our central booking line on 0800 123 4567 to confirm engineer availability.`
      });
    }
  };

  return (
    <section id="coverage" className="py-24 bg-obsidian border-b border-ash scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="Our Reach"
          heading="London & South East Coverage"
          subtext="No travel fees, no callout charges. We operate dynamic team clusters across the key boroughs to guarantee prompt, expert arrival."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mt-12 bg-charcoal border border-ash p-6 md:p-10 select-none">
          
          {/* Column 1: Interactive London Regions */}
          <div className="lg:col-span-7 bg-obsidian border border-ash p-6 min-h-[380px] flex flex-col justify-between relative overflow-hidden">
            <div>
              <h3 className="font-mono text-copper text-xs font-bold uppercase tracking-widest mb-1.5">
                Active Support Areas
              </h3>
              <p className="font-sans text-xs text-smoke mb-4 font-light">
                Select your area below to query current local capacity and engineers on routing.
              </p>

              {/* Grid of regional blocks */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6">
                {AREAS.map((area) => (
                  <button
                    key={area.id}
                    onClick={() => setSelectedBorough(area.id)}
                    className={`p-3.5 border font-sans text-left duration-200 transition-all cursor-pointer focus:outline-none ${
                      selectedBorough === area.id
                        ? 'bg-copper text-obsidian border-copper shadow-md'
                        : 'bg-charcoal/50 border-ash text-bone hover:border-copper/40'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1.5">
                      <span className={`text-[9px] font-mono font-medium ${selectedBorough === area.id ? 'text-obsidian uppercase' : 'text-copper uppercase'}`}>
                        {area.region} Sector
                      </span>
                      <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                    </div>
                    <p className={`truncate font-serif text-[13px] font-medium leading-none ${selectedBorough === area.id ? 'text-obsidian' : 'text-bone'}`}>
                      {area.name.split(' (')[0]}
                    </p>
                    <p className={`text-[9px] font-mono mt-1 ${selectedBorough === area.id ? 'text-obsidian/75' : 'text-smoke/75'}`}>
                      Capacity: {area.activeEngineers} Engineers
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Borough Details */}
            {selectedBorough ? (
              (() => {
                const area = AREAS.find(a => a.id === selectedBorough);
                if (!area) return null;
                return (
                  <div className="bg-charcoal border border-ash p-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between font-mono text-xs">
                    <div>
                      <span className="text-copper font-medium uppercase block">[ Current Station: {area.name.split(' (')[0]} ]</span>
                      <span className="text-[11px] text-smoke block mt-1">Sectors Covered: {area.postcodes.join(', ')}</span>
                    </div>
                    <div className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 bg-obsidian text-brass-glow border border-ash font-bold uppercase text-[9px] tracking-wider select-none">
                      <UserCheck size={11} className="text-copper" />
                      {area.activeEngineers} Duty Men
                    </div>
                  </div>
                );
              })()
            ) : (
              <div className="bg-charcoal/30 border border-ash p-4 text-center font-mono text-xs text-smoke">
                Select a quadrant on the map to query local dispatch pipelines
              </div>
            )}
          </div>

          {/* Column 2: Postcode search checker widget */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-obsidian p-6 border border-ash relative">
              <h4 className="font-serif font-medium text-bone mb-2 text-lg tracking-tight">
                Check Postcode
              </h4>
              <p className="font-sans text-xs text-smoke leading-relaxed mb-5 font-light">
                Verify immediate engineer routing for your home or business address instantly below.
              </p>

              <form onSubmit={handleCheckPostcode} className="space-y-4">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-ash">
                    <MapPin size={15} />
                  </span>
                  <input
                    type="text"
                    placeholder="e.g., SE10 or CR0"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-charcoal border border-ash py-3 pl-10 pr-4 font-mono text-xs text-bone focus:outline-none focus:ring-1 focus:ring-copper focus:border-copper placeholder-smoke uppercase tracking-wider h-11"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-copper hover:bg-[#e49c6d] text-obsidian font-mono font-medium text-[11px] py-3.5 tracking-widest uppercase transition-colors flex items-center justify-center gap-2 border border-copper cursor-pointer focus:outline-none"
                >
                  <Search size={13} />
                  Check Local Dispatch
                </button>
              </form>

              {/* Result Area */}
              {checkResult.status && (
                <div className={`mt-5 p-4 border font-mono text-[11px] ${
                  checkResult.status === 'success'
                    ? 'bg-emerald-950/20 border-emerald-800/40 text-emerald-300'
                    : 'bg-ember-red/5 border-ember-red/20 text-orange-200'
                }`}>
                  <div className="flex gap-2 items-start">
                    {checkResult.status === 'success' ? (
                      <CheckCircle size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                    ) : (
                      <AlertTriangle size={14} className="text-ember-red shrink-0 mt-0.5" />
                    )}
                    <p className="leading-relaxed">{checkResult.message}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-charcoal/30 p-5 border border-ash font-mono text-xs space-y-2.5">
              <h5 className="font-bold text-copper uppercase select-none tracking-widest text-[10px]">// Service Radius Overview</h5>
              <div className="flex justify-between text-[11px] text-zinc-500">
                <span>Central London (City, West End)</span>
                <span className="text-copper">COVERED</span>
              </div>
              <div className="flex justify-between text-[11px] text-zinc-500">
                <span>South London (Croydon, Lambeth)</span>
                <span className="text-copper">COVERED</span>
              </div>
              <div className="flex justify-between text-[11px] text-zinc-500">
                <span>Greenwich & South East Borders</span>
                <span className="text-copper">COVERED</span>
              </div>
              <div className="flex justify-between text-[11px] text-zinc-500">
                <span>Kent Outskirts / Surrey Boroughs</span>
                <span className="text-brass-glow">MAPPED HAND</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
