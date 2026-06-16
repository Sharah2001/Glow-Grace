import React from 'react';
import Sidebar from '../../../components/admin/Sidebar';
import Topbar from '../../../components/admin/Topbar';
import { Testimonial } from '../../../lib/constants';
import { Star, Trash, ShieldCheck } from 'lucide-react';

interface AdminReviewsPageProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onLogout: () => void;
  testimonials: Testimonial[];
  onRemoveReview: (id: string) => void;
}

export default function AdminReviewsPage({
  currentPath,
  onNavigate,
  onLogout,
  testimonials,
  onRemoveReview
}: AdminReviewsPageProps) {
  return (
    <div className="min-h-screen bg-obsidian flex text-bone font-mono">
      <Sidebar currentPath={currentPath} onNavigate={onNavigate} onLogout={onLogout} />

      <div className="flex-1 flex flex-col min-w-0">
        <Topbar title="REVIEWS MODERATION PANEL" />

        <main className="p-6 sm:p-8 space-y-6">
          
          {/* Summary Audit Card */}
          <div className="bg-charcoal border border-ash p-6 font-mono text-xs flex flex-col sm:flex-row gap-4 items-center justify-between select-none">
            <div className="flex gap-4 items-start">
              <ShieldCheck size={20} className="text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-bone block uppercase text-[12px] tracking-wide">// REVIEWS MODERATION MATRIX</span>
                <p className="text-smoke text-[11px] block mt-1.5 max-w-xl font-sans font-light">
                  Feedback registered by end-users flows here instantly. Review the star weight and project descriptor. If spam or offensive descriptors are found, use the terminal purge action.
                </p>
              </div>
            </div>

            <span className="bg-obsidian text-copper font-bold px-4 py-2 border border-ash whitespace-nowrap">
              {testimonials.length} ACTIVE LOGS
            </span>
          </div>

          {/* Testimonial List table */}
          <div className="bg-charcoal border border-ash overflow-hidden relative select-none">
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs text-bone border-collapse">
                <thead>
                  <tr className="bg-obsidian border-b border-ash text-zinc-500 font-mono">
                    <th className="p-4 uppercase tracking-wider text-[9px] font-bold">// REV REF</th>
                    <th className="p-4 uppercase tracking-wider text-[9px] font-bold">HOMEOWNER</th>
                    <th className="p-4 uppercase tracking-wider text-[9px] font-bold">SERVICE SEGMENT</th>
                    <th className="p-4 uppercase tracking-wider text-[9px] font-bold">STARS</th>
                    <th className="p-4 uppercase tracking-wider text-[9px] font-bold">STATEMENT QUOTE</th>
                    <th className="p-4 uppercase tracking-wider text-[9px] font-bold text-right">AUDIT PURGE ACTION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ash font-sans">
                  {testimonials.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="p-10 text-center text-zinc-500 font-mono text-xs uppercase tracking-widest">
                        // FEEDBACK LOGS EMPTY
                      </td>
                    </tr>
                  ) : (
                    testimonials.map((rev) => (
                      <tr key={rev.id} className="hover:bg-ash/20 duration-150 transition-colors">
                        <td className="p-4 font-mono font-bold text-copper">{rev.id}</td>
                        <td className="p-4">
                          <span className="font-bold block text-bone uppercase text-[13px]">{rev.name}</span>
                          <span className="text-[10px] text-zinc-500 font-normal">Sectors: {rev.area}</span>
                        </td>
                        <td className="p-4 uppercase font-mono text-[10px] tracking-wide text-smoke">{rev.service}</td>
                        <td className="p-4 text-xs font-bold font-mono">
                          <div className="flex gap-0.5 text-copper">
                            {[...Array(rev.rating)].map((_, i) => (
                              <Star key={i} size={11} className="fill-current" />
                            ))}
                          </div>
                          <span className="text-[10px] text-zinc-500 block mt-1">{rev.rating}.0 / 5.0</span>
                        </td>
                        <td className="p-4 max-w-sm">
                          <p className="text-xs text-smoke italic leading-relaxed font-light">
                            &ldquo;{rev.quote}&rdquo;
                          </p>
                          <span className="text-[9px] text-zinc-500 font-mono block mt-1.5 uppercase tracking-wider">Logged: {rev.date}</span>
                        </td>
                        <td className="p-4 text-right">
                          <button
                            onClick={() => {
                              if (confirm('Are you sure you want to purge this verified review?')) {
                                onRemoveReview(rev.id);
                              }
                            }}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#321210] border border-ember-red/35 hover:border-ember-red text-ember-red text-[10px] font-mono tracking-wider font-bold uppercase transition-all focus:outline-none cursor-pointer"
                            title="Purge spam review"
                          >
                            <Trash size={11} />
                            Purge
                          </button>
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
