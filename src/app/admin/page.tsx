import React from 'react';
import Sidebar from '../../components/admin/Sidebar';
import Topbar from '../../components/admin/Topbar';
import StatCard from '../../components/admin/StatCard';
import { Booking, Job, Testimonial } from '../../lib/constants';
import { Calendar, ListTodo, MessageSquare, Radio, ShieldAlert } from 'lucide-react';

interface AdminDashboardPageProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onLogout: () => void;
  bookings: Booking[];
  jobs: Job[];
  testimonials: Testimonial[];
}

export default function AdminDashboardPage({
  currentPath,
  onNavigate,
  onLogout,
  bookings,
  jobs,
  testimonials
}: AdminDashboardPageProps) {
  
  // Calculate stats
  const activeBookings = bookings.filter(b => b.status === 'New').length;
  const dispatchingJobs = jobs.filter(j => j.status === 'In Progress').length;
  const closedJobs = jobs.filter(j => j.status === 'Completed').length;
  const outstandingTickets = bookings.length;

  return (
    <div className="min-h-screen bg-obsidian flex text-bone font-mono">
      <Sidebar currentPath={currentPath} onNavigate={onNavigate} onLogout={onLogout} />

      <div className="flex-1 flex flex-col min-w-0">
        <Topbar title="CENTRAL DISPATCH OVERVIEW" />

        <main className="p-6 sm:p-8 space-y-8 overflow-y-auto">
          {/* Quick Alert Bar if there are new pending bookings */}
          {activeBookings > 0 && (
            <div className="bg-[#321210]/90 border border-ember-red/45 p-4 flex items-center justify-between text-[11px] text-[#C24A35]">
              <div className="flex items-center gap-2">
                <ShieldAlert size={14} className="animate-pulse text-ember-red" />
                <span>[ WARNING ]: {activeBookings} PENDING DISPATCH BOOKING TICKETS REQUIRE CONFIRMATION.</span>
              </div>
              <button
                onClick={() => onNavigate('/admin/bookings')}
                className="underline hover:text-white uppercase font-bold focus:outline-none cursor-pointer tracking-wider font-mono text-[10px]"
              >
                Resolve queue &raquo;
              </button>
            </div>
          )}

          {/* Core Stat Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              label="Assigned Estimations"
              value={outstandingTickets}
              subtext="Total queue listings currently tracked inside local browser memory."
              icon={Calendar}
              color="text-copper"
            />
            <StatCard
              label="Pending Actions"
              value={activeBookings}
              subtext="New bookings waiting for active team status confirmation updates."
              icon={Radio}
              color="text-copper animate-pulse"
            />
            <StatCard
              label="Deployments Active"
              value={dispatchingJobs}
              subtext="Engineers currently active inside target south-east sectors."
              icon={ListTodo}
              color="text-copper"
            />
            <StatCard
              label="Tasks Completed"
              value={closedJobs}
              subtext="Successfully completed and warranty certified plumbing & gas tasks."
              icon={MessageSquare}
              color="text-emerald-400"
            />
          </div>

          {/* Breakdown Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Recent Bookings Previews */}
            <div className="lg:col-span-7 bg-charcoal border border-ash p-6 relative">
              <h3 className="font-mono text-xs font-bold text-bone uppercase mb-4 pb-2 border-b border-ash flex justify-between items-center select-none tracking-widest">
                <span>// NEW OUTSTANDING BOOKINGS</span>
                <span className="text-[9px] text-zinc-500 font-normal">Last 4 entries</span>
              </h3>

              <div className="space-y-3 font-mono text-xs">
                {bookings.slice(0, 4).map((bk) => (
                  <div key={bk.id} className="p-3 bg-obsidian border border-ash flex justify-between items-center">
                    <div>
                      <span className="font-bold text-bone block text-[13px] uppercase font-sans tracking-tight">{bk.customerName} ({bk.postcode})</span>
                      <span className="text-[10px] text-zinc-550 block mt-1 tracking-wider">Ref ID: {bk.id} | Date: {bk.date}</span>
                    </div>
                    <div className="text-right">
                      <span className={`px-2 py-0.5 text-[8px] font-black uppercase inline-block ${
                        bk.status === 'New' 
                          ? 'bg-ember-red/15 text-[#C24A35] border border-ember-red/35' 
                          : 'bg-charcoal text-smoke border border-ash'
                      }`}>
                        {bk.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Plumber ETA Pipeline statuses */}
            <div className="lg:col-span-5 bg-charcoal border border-ash p-6 relative">
              <h3 className="font-mono text-xs font-bold text-bone uppercase mb-4 pb-2 border-b border-ash select-none tracking-widest">
                // ACTIVE PIPELINE ETAs
              </h3>

              <div className="space-y-4 font-mono text-xs">
                {jobs.slice(0, 4).map((jb) => (
                  <div key={jb.id} className="flex justify-between items-center border-b border-ash pb-3 last:border-0 last:pb-0">
                    <div>
                      <span className="font-serif font-semibold text-bone hover:text-copper block uppercase text-[13px] tracking-tight">{jb.engineerName} &raquo;</span>
                      <span className="text-zinc-500 block mt-1 text-[10px] uppercase tracking-wider">Task: {jb.serviceName.slice(0, 18)}...</span>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-copper font-bold block text-[12px]">{jb.eta}</span>
                      <span className="text-zinc-550 block text-[9px] uppercase tracking-wider mt-0.5 font-bold">{jb.area}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
