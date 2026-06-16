import React, { useState } from 'react';
import Sidebar from '../../../components/admin/Sidebar';
import Topbar from '../../../components/admin/Topbar';
import { ToggleLeft, ToggleRight, Save, Radio, DollarSign } from 'lucide-react';

interface AdminSettingsPageProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onLogout: () => void;
}

export default function AdminSettingsPage({
  currentPath,
  onNavigate,
  onLogout
}: AdminSettingsPageProps) {
  const [prices, setPrices] = useState({
    boilerRepair: '85',
    leakDetection: '69',
    drainUnblock: '75',
    centralHeating: '120'
  });

  const [toggles, setToggles] = useState({
    southLondon: true,
    croydon: true,
    greenwich: true,
    mayfair: false,
    autoDispatch: true,
    smsAlerts: false
  });

  const [saved, setSaved] = useState(false);

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-obsidian flex text-bone font-mono">
      <Sidebar currentPath={currentPath} onNavigate={onNavigate} onLogout={onLogout} />

      <div className="flex-grow flex flex-col min-w-0">
        <Topbar title="DISPATCH ENGINE CONFIG" />

        <main className="p-6 sm:p-8 max-w-4xl space-y-6">
          
          {saved && (
            <div className="p-4 bg-emerald-950/20 border border-emerald-800/40 text-emerald-300 font-mono text-xs uppercase flex items-center gap-2 select-none animate-fade-in">
              <span>✓ System parameters committed to core memory registry successfully.</span>
            </div>
          )}

          <form onSubmit={handleSaveSettings} className="space-y-6 font-mono text-xs select-none">
            
            {/* Rates overhaul */}
            <div className="bg-charcoal border border-ash p-6 relative">
              <h3 className="font-mono text-xs font-bold text-bone uppercase mb-4 pb-2 border-b border-ash flex items-center gap-2">
                <DollarSign size={13} className="text-copper" />
                // DISPATCH RATES Overhaul (£ / hr)
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-zinc-500 uppercase font-bold block tracking-wider text-[9px]">Boiler Diagnostics Base Rate</label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-zinc-500 font-bold">£</span>
                    <input
                      type="text"
                      required
                      value={prices.boilerRepair}
                      onChange={(e) => setPrices({ ...prices, boilerRepair: e.target.value })}
                      className="w-full bg-obsidian border border-ash py-3 pl-7 pr-4 text-bone font-bold focus:outline-none focus:border-copper h-11"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-zinc-500 uppercase font-bold block tracking-wider text-[9px]">Water Leak Location Rate</label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-zinc-500 font-bold">£</span>
                    <input
                      type="text"
                      required
                      value={prices.leakDetection}
                      onChange={(e) => setPrices({ ...prices, leakDetection: e.target.value })}
                      className="w-full bg-obsidian border border-ash py-3 pl-7 pr-4 text-bone font-bold focus:outline-none focus:border-copper h-11"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-zinc-500 uppercase font-bold block tracking-wider text-[9px]">Drain Sewer Jetting Rate</label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-zinc-500 font-bold">£</span>
                    <input
                      type="text"
                      required
                      value={prices.drainUnblock}
                      onChange={(e) => setPrices({ ...prices, drainUnblock: e.target.value })}
                      className="w-full bg-obsidian border border-ash py-3 pl-7 pr-4 text-bone font-bold focus:outline-none focus:border-copper h-11"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-zinc-500 uppercase font-bold block tracking-wider text-[9px]">Sludge Powerflush Base Rate</label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-zinc-500 font-bold">£</span>
                    <input
                      type="text"
                      required
                      value={prices.centralHeating}
                      onChange={(e) => setPrices({ ...prices, centralHeating: e.target.value })}
                      className="w-full bg-obsidian border border-ash py-3 pl-7 pr-4 text-bone font-bold focus:outline-none focus:border-copper h-11"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Coverage station switches */}
            <div className="bg-charcoal border border-ash p-6 relative">
              <h3 className="font-mono text-xs font-bold text-bone uppercase mb-4 pb-2 border-b border-ash flex items-center gap-2">
                <Radio size={13} className="text-copper" />
                // LIVE DISTRICT GATEWAY SWITCHES
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Left Column: Geographic sectors */}
                <div className="space-y-4">
                  <span className="text-zinc-500 font-bold text-[9px] block uppercase tracking-widest">// GEOGRAPHIC DISTRICT STATUS</span>
                  
                  <div className="flex justify-between items-center border-b border-ash pb-2.5">
                    <span className="text-smoke">SE-10 Greenwich Division</span>
                    <button
                      type="button"
                      onClick={() => setToggles({ ...toggles, greenwich: !toggles.greenwich })}
                      className="cursor-pointer focus:outline-none text-bone"
                    >
                      {toggles.greenwich ? <ToggleRight size={24} className="text-emerald-400" /> : <ToggleLeft size={24} className="text-zinc-600" />}
                    </button>
                  </div>
                  
                  <div className="flex justify-between items-center border-b border-ash pb-2.5">
                    <span className="text-smoke">CR-0 Croydon Sector</span>
                    <button
                      type="button"
                      onClick={() => setToggles({ ...toggles, croydon: !toggles.croydon })}
                      className="cursor-pointer focus:outline-none text-bone"
                    >
                      {toggles.croydon ? <ToggleRight size={24} className="text-emerald-400" /> : <ToggleLeft size={24} className="text-zinc-600" />}
                    </button>
                  </div>

                  <div className="flex justify-between items-center border-b border-ash pb-2.5">
                    <span className="text-smoke">W-1 Mayfair Premium Area</span>
                    <button
                      type="button"
                      onClick={() => setToggles({ ...toggles, mayfair: !toggles.mayfair })}
                      className="cursor-pointer focus:outline-none text-bone"
                    >
                      {toggles.mayfair ? <ToggleRight size={24} className="text-emerald-400" /> : <ToggleLeft size={24} className="text-zinc-600" />}
                    </button>
                  </div>
                </div>

                {/* Right Column: Platform triggers */}
                <div className="space-y-4">
                  <span className="text-zinc-500 font-bold text-[9px] block uppercase tracking-widest">// AUTOMATED DISPATCH RULES</span>
                  
                  <div className="flex justify-between items-center border-b border-ash pb-2.5">
                    <span className="text-smoke">Auto-dispatch closest active engineer</span>
                    <button
                      type="button"
                      onClick={() => setToggles({ ...toggles, autoDispatch: !toggles.autoDispatch })}
                      className="cursor-pointer focus:outline-none text-bone"
                    >
                      {toggles.autoDispatch ? <ToggleRight size={24} className="text-emerald-400" /> : <ToggleLeft size={24} className="text-zinc-600" />}
                    </button>
                  </div>

                  <div className="flex justify-between items-center border-b border-ash pb-2.5">
                    <span className="text-smoke">Trigger dispatch alarms on SMS logs</span>
                    <button
                      type="button"
                      onClick={() => setToggles({ ...toggles, smsAlerts: !toggles.smsAlerts })}
                      className="cursor-pointer focus:outline-none text-bone"
                    >
                      {toggles.smsAlerts ? <ToggleRight size={24} className="text-emerald-400" /> : <ToggleLeft size={24} className="text-zinc-600" />}
                    </button>
                  </div>
                </div>

              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="px-6 py-4 bg-copper hover:bg-[#e49c6d] text-obsidian font-mono text-[10px] tracking-widest uppercase font-bold flex items-center gap-2 border-0 cursor-pointer focus:outline-none shadow-sm transition-colors"
              >
                <Save size={13} />
                Store Parameter Registers
              </button>
            </div>

          </form>

        </main>
      </div>
    </div>
  );
}
