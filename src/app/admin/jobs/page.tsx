import React from 'react';
import Sidebar from '../../../components/admin/Sidebar';
import Topbar from '../../../components/admin/Topbar';
import { Job } from '../../../lib/constants';
import { Truck, CheckCircle2 } from 'lucide-react';

interface AdminJobsPageProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onLogout: () => void;
  jobs: Job[];
  onUpdateJobStatus: (id: string, status: 'Pending' | 'In Progress' | 'Completed') => void;
}

export default function AdminJobsPage({
  currentPath,
  onNavigate,
  onLogout,
  jobs,
  onUpdateJobStatus
}: AdminJobsPageProps) {
  
  const columns = [
    { id: 'Pending', name: 'PENDING DISPATCH', color: 'border-l-[#C24A35] bg-charcoal' },
    { id: 'In Progress', name: 'ACTIVE ON-CALL', color: 'border-l-copper bg-charcoal' },
    { id: 'Completed', name: 'SIGNED OFF COVERS', color: 'border-l-emerald-500 bg-charcoal' }
  ] as const;

  return (
    <div className="min-h-screen bg-obsidian flex text-bone font-mono">
      <Sidebar currentPath={currentPath} onNavigate={onNavigate} onLogout={onLogout} />

      <div className="flex-1 flex flex-col min-w-0">
        <Topbar title="DISPATCH TARGET CONTROLLER" />

        <main className="p-6 sm:p-8 space-y-6 flex-grow flex flex-col">
          {/* Grid of Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-grow items-start select-none">
            {columns.map((col) => {
              const matchedJobs = jobs.filter(j => j.status === col.id);

              return (
                <div
                  key={col.id}
                  className={`border border-ash border-l-4 ${col.color} p-5 min-h-[70vh] flex flex-col`}
                >
                  {/* Column Header */}
                  <div className="border-b border-ash pb-3.5 mb-5 flex justify-between items-center">
                    <span className="font-mono text-xs text-bone tracking-widest font-bold">
                      {col.name}
                    </span>
                    <span className="bg-obsidian text-copper text-[9px] px-2.5 py-1 border border-ash font-bold font-mono tracking-widest">
                      {matchedJobs.length} ITEMS
                    </span>
                  </div>

                  {/* Card Container */}
                  <div className="space-y-4 flex-grow overflow-y-auto max-h-[80vh] pr-1">
                    {matchedJobs.length === 0 ? (
                      <div className="text-center py-10 font-mono text-[9px] text-[#9CA3AA] uppercase tracking-widest">
                        // Column Empty
                      </div>
                    ) : (
                      matchedJobs.map((jb) => (
                        <div
                          key={jb.id}
                          className="bg-obsidian border border-ash p-4 relative shadow-sm group font-mono text-xs text-bone"
                        >
                          {/* Top row */}
                          <div className="flex justify-between items-start mb-2">
                            <span className="font-bold text-copper font-mono text-[9px] tracking-widest uppercase block">
                              {jb.jobReference}
                            </span>
                            
                            <span className={`px-2 py-0.5 text-[8px] font-bold uppercase ${
                              jb.priority === 'Emergency'
                                ? 'bg-ember-red text-bone'
                                : jb.priority === 'High'
                                ? 'bg-copper text-obsidian'
                                : 'bg-[#212529] text-smoke border border-ash'
                            }`}>
                              {jb.priority}
                            </span>
                          </div>

                          {/* Customer */}
                          <h4 className="font-serif text-base text-bone tracking-tight mb-1 uppercase font-semibold">
                            {jb.customerName}
                          </h4>
                          <p className="text-zinc-500 text-[9px] mb-3 leading-tight tracking-wider uppercase font-mono">
                            Zone: {jb.area} | {jb.address}
                          </p>

                          {/* Service Details */}
                          <div className="border-t border-b border-ash py-2.5 mb-3 leading-normal space-y-1 text-[10px] text-smoke font-sans font-light">
                            <div className="flex justify-between">
                              <span>Service Task:</span>
                              <span className="font-bold text-bone">{jb.serviceName.slice(0, 18)}</span>
                            </div>
                            <div className="flex justify-between font-mono text-[10px]">
                              <span>Duty Technician:</span>
                              <span className="font-bold text-bone">{jb.engineerName}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Estimate:</span>
                              <span className="font-bold text-copper">{jb.cost}</span>
                            </div>
                          </div>

                          {/* Notes */}
                          <p className="text-[10px] text-smoke italic leading-tight mb-4 font-sans font-light">
                            &ldquo;{jb.notes}&rdquo;
                          </p>

                          {/* Action Arrow Buttons inside Card footer */}
                          <div className="flex justify-between items-center text-[9px] pt-2 border-t border-ash">
                            <span className="text-zinc-500 font-mono tracking-widest block bg-obsidian border border-ash px-2 py-0.5 text-[8px] uppercase font-bold">
                              {jb.eta} ETA
                            </span>

                            <div className="flex gap-1.5">
                              {jb.status === 'Pending' && (
                                <button
                                  onClick={() => onUpdateJobStatus(jb.id, 'In Progress')}
                                  className="px-2.5 py-1 bg-copper hover:bg-[#e49c6d] text-obsidian font-mono font-bold text-[9px] tracking-wider uppercase transition-colors cursor-pointer flex items-center gap-1 focus:outline-none"
                                >
                                  Deploy <Truck size={9} />
                                </button>
                              )}

                              {jb.status === 'In Progress' && (
                                <button
                                  onClick={() => onUpdateJobStatus(jb.id, 'Completed')}
                                  className="px-2.5 py-1 bg-transparent border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 font-mono font-bold text-[9px] tracking-wider uppercase transition-colors cursor-pointer flex items-center gap-1 focus:outline-none"
                                >
                                  Complete <CheckCircle2 size={9} />
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
