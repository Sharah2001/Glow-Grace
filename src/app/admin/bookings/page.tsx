import React, { useState } from 'react';
import Sidebar from '../../../components/admin/Sidebar';
import Topbar from '../../../components/admin/Topbar';
import { Booking } from '../../../lib/constants';

interface AdminBookingsPageProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onLogout: () => void;
  bookings: Booking[];
  onUpdateBookingStatus: (id: string, status: 'New' | 'Confirmed' | 'Completed' | 'Cancelled') => void;
}

export default function AdminBookingsPage({
  currentPath,
  onNavigate,
  onLogout,
  bookings,
  onUpdateBookingStatus
}: AdminBookingsPageProps) {
  const [filter, setFilter] = useState<string>('All');

  const filteredBookings = filter === 'All'
    ? bookings
    : bookings.filter(b => b.status === filter);

  const statuses = ['All', 'New', 'Confirmed', 'Completed', 'Cancelled'];

  return (
    <div className="min-h-screen bg-obsidian flex text-bone">
      <Sidebar currentPath={currentPath} onNavigate={onNavigate} onLogout={onLogout} />

      <div className="flex-1 flex flex-col min-w-0">
        <Topbar title="CENTRAL BOOKINGS LOG" />

        <main className="p-6 sm:p-8 space-y-6">
          {/* Filtering row */}
          <div className="flex flex-wrap gap-2 mb-6 select-none">
            {statuses.map((st) => (
              <button
                key={st}
                onClick={() => setFilter(st)}
                className={`font-mono text-[10px] uppercase tracking-widest px-5 py-3 border cursor-pointer focus:outline-none duration-250 ${
                  filter === st
                    ? 'bg-copper border-copper text-obsidian font-bold'
                    : 'bg-charcoal border-ash text-smoke hover:border-copper/40 hover:text-bone'
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          {/* Bookings Table container */}
          <div className="bg-charcoal border border-ash overflow-hidden relative">
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs select-none border-collapse text-bone">
                <thead>
                  <tr className="bg-obsidian border-b border-ash text-zinc-500 font-mono">
                    <th className="p-4 uppercase tracking-wider text-[9px] font-bold">// BK REF</th>
                    <th className="p-4 uppercase tracking-wider text-[9px] font-bold">RECIPIENT CONTACT</th>
                    <th className="p-4 uppercase tracking-wider text-[9px] font-bold">TASK SPECIFICATION</th>
                    <th className="p-4 uppercase tracking-wider text-[9px] font-bold">SECTOR ZONE</th>
                    <th className="p-4 uppercase tracking-wider text-[9px] font-bold">APPOINTMENT TIMELINE</th>
                    <th className="p-4 uppercase tracking-wider text-[9px] font-bold">STATE STATUS</th>
                    <th className="p-4 uppercase tracking-wider text-[9px] font-bold text-right">OPERATORS ACTIONS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ash font-sans">
                  {filteredBookings.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="p-10 text-center text-zinc-500 font-mono text-xs uppercase tracking-widest select-none">
                        // No active queue listings recorded
                      </td>
                    </tr>
                  ) : (
                    filteredBookings.map((bk) => (
                      <tr key={bk.id} className="hover:bg-ash/20 duration-150 transition-colors">
                        <td className="p-4 font-mono font-bold text-copper">{bk.id}</td>
                        <td className="p-4">
                          <span className="font-bold text-bone block uppercase text-[13px]">{bk.customerName}</span>
                          <span className="text-smoke block text-xs mt-0.5">{bk.phone}</span>
                          <span className="text-[10px] text-zinc-500 block">{bk.email}</span>
                        </td>
                        <td className="p-4 uppercase text-[11px] text-smoke font-mono tracking-wide">
                          {bk.serviceId.replace('-', ' ')}
                        </td>
                        <td className="p-4 font-mono font-bold text-copper tracking-widest uppercase">{bk.postcode}</td>
                        <td className="p-4">
                          <span className="block font-mono text-[11px] text-bone font-medium">{bk.date}</span>
                          <span className="text-[10px] text-smoke block mt-0.5">{bk.timeSlot}</span>
                        </td>
                        <td className="p-4">
                          <span className={`px-2.5 py-1 text-[9px] font-mono tracking-widest uppercase inline-block border ${
                            bk.status === 'New'
                              ? 'bg-ember-red/10 text-[#C24A35] border-ember-red/30'
                              : bk.status === 'Confirmed'
                              ? 'bg-copper/10 text-copper border-copper/30'
                              : bk.status === 'Completed'
                              ? 'bg-emerald-950/25 text-emerald-400 border-emerald-800/40'
                              : 'bg-obsidian text-zinc-450 border-ash'
                          }`}>
                            {bk.status}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex gap-2 justify-end">
                            {bk.status === 'New' && (
                              <button
                                onClick={() => onUpdateBookingStatus(bk.id, 'Confirmed')}
                                className="px-3 py-1.5 bg-copper border border-copper hover:bg-transparent hover:text-copper text-obsidian text-[10px] font-mono tracking-wider font-bold uppercase transition-colors focus:outline-none cursor-pointer"
                                title="Confirm Work Order"
                              >
                                Confirm
                              </button>
                            )}

                            {bk.status === 'Confirmed' && (
                              <button
                                onClick={() => onUpdateBookingStatus(bk.id, 'Completed')}
                                className="px-3 py-1.5 bg-emerald-750 text-emerald-400 border border-emerald-600 hover:bg-transparent text-[10px] font-mono tracking-wider font-bold uppercase transition-colors focus:outline-none cursor-pointer"
                                title="Mark Complete"
                              >
                                Complete
                              </button>
                            )}

                            {bk.status !== 'Cancelled' && bk.status !== 'Completed' && (
                              <button
                                onClick={() => onUpdateBookingStatus(bk.id, 'Cancelled')}
                                className="px-3 py-1.5 bg-transparent border border-ash hover:border-ember-red text-smoke hover:text-[#C24A35] text-[10px] font-mono tracking-wider font-bold uppercase transition-all focus:outline-none cursor-pointer"
                                title="Cancel Order"
                              >
                                Cancel
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
