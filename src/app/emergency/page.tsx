import React, { useState } from 'react';
import SEO from '../../components/ui/SEO';
import SectionHeader from '../../components/ui/SectionHeader';
import { Phone, ShieldAlert, Check, ShieldCheck, AlertCircle } from 'lucide-react';
import Button from '../../components/ui/Button';
import { AREAS } from '../../lib/constants';

interface EmergencyPageProps {
  onNavigate: (path: string) => void;
}

export default function EmergencyPage({ onNavigate }: EmergencyPageProps) {
  const [ticketForm, setTicketForm] = useState({
    name: '',
    phone: '',
    postcode: '',
    leakLevel: 'Major - Active Flood',
    description: ''
  });
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketForm.phone || !ticketForm.postcode) {
      setErrorMessage('Verification failed: Postcode and telephone digits are required for immediate dispatch callbacks.');
      return;
    }
    setErrorMessage('');
    setTicketSubmitted(true);
  };

  return (
    <div className="py-24 bg-obsidian min-h-screen text-bone">
      <SEO 
        title="24/7 Priority Emergency Dispatch & Plumbing Callouts"
        description="Active burst pipe floods, critical boiler shutdowns, and rapid emergency heating engineers. No callout charges, average 24-minute regional response."
        canonicalPath="/emergency"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Flash banner header */}
        <div className="bg-ember-red text-bone p-8 sm:p-12 relative overflow-hidden mb-12 border border-ember-red">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="flex items-center gap-1.5 select-none">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bone opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-bone"></span>
              </span>
              <span className="font-mono text-xs font-bold tracking-widest text-[#f3cfc6] uppercase select-none">
                // PRIORITY HIGH DISPATCH CENTER ACTIVE
              </span>
            </div>

            <h1 className="font-serif font-semibold text-3xl sm:text-5xl lg:text-6xl text-bone tracking-tight leading-none mb-2 select-none">
              Water Flooding? <br />
              <span className="italic font-light">Boiler Freezing?</span>
            </h1>

            <p className="font-sans text-xs sm:text-sm text-[#f3cfc6]/90 max-w-2xl leading-relaxed font-light">
              Do not panic. Locate your stopcock valve to isolate your water line instantly, then contact our emergency coordinator. We maintain multiple rapid Gas Safe engineers in primary London boroughs to guarantee ETAs under 45 minutes on active hazards.
            </p>

            <div className="pt-2 select-none">
              <a
                href="tel:08001234567"
                className="inline-flex items-center gap-2.5 bg-bone text-ember-red font-mono font-bold border border-bone px-8 py-4.5 text-xs sm:text-sm hover:bg-transparent hover:text-bone hover:border-bone transition-all duration-300 shadow-md uppercase tracking-widest"
              >
                <Phone size={13} className="fill-current shrink-0" />
                Call Dispatcher: 0800 123 4567
              </a>
            </div>
          </div>
        </div>

        {/* Dual Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Fast Ticket Form for active dispatching */}
          <div className="lg:col-span-7 bg-charcoal border border-ash p-6 sm:p-8 relative">
            <span className="font-mono text-[9px] text-copper font-medium block mb-1 uppercase tracking-wider">
              Emergency Request Log
            </span>
            <h2 className="font-serif font-medium text-bone text-lg sm:text-xl uppercase mb-6 tracking-tight select-none">
              Register Priority Callout Ticket
            </h2>

            {errorMessage && (
              <div className="mb-4 p-4 bg-ember-red/5 border border-ember-red/20 text-orange-200 font-mono text-xs flex items-start gap-2 select-none">
                <AlertCircle size={15} className="shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            {!ticketSubmitted ? (
              <form onSubmit={handleSubmitTicket} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] text-zinc-500 uppercase block tracking-wider font-bold">Your Name</label>
                    <input
                      type="text"
                      placeholder="Alastair Jenkins"
                      value={ticketForm.name}
                      onChange={(e) => setTicketForm({ ...ticketForm, name: e.target.value })}
                      className="w-full bg-obsidian border border-ash py-3 px-4 text-xs sm:text-sm font-sans text-bone focus:outline-none focus:border-copper h-11"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] text-zinc-500 uppercase block tracking-wider font-bold">Contact Telephone</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g., 07712 345678"
                      value={ticketForm.phone}
                      onChange={(e) => setTicketForm({ ...ticketForm, phone: e.target.value })}
                      className="w-full bg-obsidian border border-ash py-3 px-4 text-xs sm:text-sm font-sans text-bone focus:outline-none focus:border-copper h-11"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] text-zinc-500 uppercase block tracking-wider font-bold">Borough Postcode</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., SE10 or CR0"
                      value={ticketForm.postcode}
                      onChange={(e) => setTicketForm({ ...ticketForm, postcode: e.target.value.toUpperCase() })}
                      className="w-full bg-obsidian border border-ash py-3 px-4 text-xs sm:text-sm font-mono text-bone tracking-widest uppercase focus:outline-none focus:border-copper h-11"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] text-zinc-500 uppercase block tracking-wider font-bold">Hazard Urgency Level</label>
                    <select
                      value={ticketForm.leakLevel}
                      onChange={(e) => setTicketForm({ ...ticketForm, leakLevel: e.target.value })}
                      className="w-full bg-obsidian border border-ash py-2 px-4 text-xs sm:text-sm font-mono text-bone focus:outline-none focus:border-copper h-11"
                    >
                      <option className="bg-[#111115] text-bone">Major - Active Flood</option>
                      <option className="bg-[#111115] text-bone">Critical - Gas Odor / Line Leak</option>
                      <option className="bg-[#111115] text-bone">Severe - System Frost / No Hot Water</option>
                      <option className="bg-[#111115] text-bone">Moderate - Constant Sewer Blockage</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] text-zinc-500 uppercase block tracking-wider font-bold">Specific Boiler Code / Pipe leak location</label>
                  <textarea
                    rows={3}
                    placeholder="e.g., Boiler showing EA fail code; static water leak dripping into floor joists."
                    value={ticketForm.description}
                    onChange={(e) => setTicketForm({ ...ticketForm, description: e.target.value })}
                    className="w-full bg-obsidian border border-ash py-3 px-4 text-xs sm:text-sm font-sans text-bone focus:outline-none focus:border-copper"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-ember-red hover:bg-[#d65741] text-[#EDEAE4] font-mono font-medium text-[11px] py-4 tracking-widest uppercase transition-colors flex items-center justify-center gap-2 border border-ember-red cursor-pointer focus:outline-none shadow-sm h-12"
                >
                  <ShieldAlert size={13} className="animate-pulse" />
                  Dispatch On-Duty Engineer Now
                </button>
              </form>
            ) : (
              <div className="p-6 bg-emerald-950/20 border border-emerald-800/40 text-emerald-300 font-mono text-xs space-y-4">
                <div className="flex gap-2.5 items-start">
                  <Check size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-white uppercase text-sm mb-1.5">Priority Dispatch Confirmed</h3>
                    <p className="leading-relaxed font-sans text-smoke text-xs font-light">
                      Your callout ticket has registered under code <b className="text-copper">FR-EM-{Math.floor(1000 + Math.random() * 9000)}</b>. Our lead control desk will call you at {ticketForm.phone} within 5 minutes to confirm active borough eta.
                    </p>
                  </div>
                </div>
                <div className="bg-obsidian p-4 text-[11px] leading-relaxed border border-ash">
                  <span className="text-copper block font-bold text-[10px] tracking-wider mb-1 uppercase">// CRITICAL SHUTDOWN INSTRUCTIONS:</span>
                  1. Locate main stopcock (typically under kitchen basin or hallway flooring). <br />
                  2. Spin valve firmly clockwise to halt incoming system flow. <br />
                  3. If plumbing leak is near outlets, isolate property electrical grid safely.
                </div>
              </div>
            )}
          </div>

          {/* Column 2: Live status check lists */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visual Diagnostic Triage Image Card */}
            <div className="bg-charcoal border border-ash overflow-hidden group select-none">
              <div className="relative aspect-[4/3] bg-obsidian overflow-hidden border-b border-ash-line">
                <img 
                  src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=75&w=600" 
                  alt="High-pressure gas safe diagnostic testing tools" 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 duration-700 ease-out transition-all"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 bg-ember-red text-[8px] font-mono font-medium tracking-widest text-bone uppercase border border-ash">
                  Live Dispatch Grid
                </span>
              </div>
              <div className="p-5 font-sans">
                <span className="text-copper font-mono text-[9px] font-bold block uppercase tracking-widest">// QUALITY REASSUREMENT</span>
                <p className="font-sans text-xs text-smoke leading-relaxed font-light mt-1">
                  Engineers perform meticulous trace diagnostics and water sealing conforming to robust Gas Safe regulations.
                </p>
              </div>
            </div>

            {/* Wait Times Box */}
            <div className="bg-charcoal border border-ash p-6 font-mono text-xs text-bone">
              <span className="text-copper font-medium block mb-4 uppercase tracking-widest text-[10px]">Real-time Duty ETAs</span>
              
              <div className="space-y-4">
                {AREAS.slice(0, 5).map((area) => {
                  const randomEta = Math.floor(18 + (area.activeEngineers % 3) * 6);
                  return (
                    <div key={area.id} className="flex justify-between items-center text-[11px] border-b border-ash/40 pb-2.5 last:border-0 last:pb-0">
                      <div>
                        <span className="text-bone font-bold block uppercase">{area.name.split(' (')[0]}</span>
                        <span className="text-smoke block text-[9px] mt-0.5 uppercase">Postcode: {area.postcodes[0]}</span>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-emerald-400 font-bold block uppercase">{randomEta} Mins ETA</span>
                        <span className="text-smoke block text-[9px] uppercase mt-0.5">Capacity Ready: {area.activeEngineers} Men</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Inclusions checklist */}
            <div className="bg-charcoal/30 p-5 border border-ash font-mono text-[10px] text-smoke space-y-3.5">
              <h4 className="font-bold text-copper uppercase select-none tracking-widest text-[11px]">// STATION INCLUSIONS</h4>
              <div className="flex gap-2 items-start font-sans font-light">
                <Check size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>£0 diagnostic dispatch fees during emergency operations.</span>
              </div>
              <div className="flex gap-2 items-start font-sans font-light">
                <Check size={14} className="text-emerald-400 shrink-0 mt-0.5 text-xs" />
                <span>Full pressure checks and Gas Safe compliance verified on site.</span>
              </div>
              <div className="flex gap-2 items-start font-sans font-light">
                <Check size={14} className="text-emerald-400 shrink-0 mt-0.5 text-xs" />
                <span>Transparent fixed quotes with 1-year workmanship guarantee.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
