import React, { useState } from 'react';
import SEO from '../../components/ui/SEO';
import SectionHeader from '../../components/ui/SectionHeader';
import { TESTIMONIALS, Testimonial } from '../../lib/constants';
import Button from '../../components/ui/Button';
import { Star, PenTool, Check, AlertCircle } from 'lucide-react';

interface ReviewsPageProps {
  onNavigate: (path: string) => void;
  onAddReview?: (review: Testimonial) => void;
}

export default function ReviewsPage({ onNavigate, onAddReview }: ReviewsPageProps) {
  const [localReviews, setLocalReviews] = useState<Testimonial[]>(TESTIMONIALS);

  const [form, setForm] = useState({
    name: '',
    rating: 5,
    service: 'Boiler Servicing',
    quote: '',
    area: 'Greenwich',
  });
  const [addSuccess, setAddSuccess] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.quote) {
      setErrorMessage('Verification failed: Kindly supply your full name and an honest review statement description.');
      return;
    }
    setErrorMessage('');

    const newRev: Testimonial = {
      id: `REV-${Math.floor(100 + Math.random() * 900)}`,
      name: form.name,
      rating: form.rating,
      service: form.service,
      quote: form.quote,
      area: form.area,
      date: new Date().toISOString().split('T')[0]
    };

    if (onAddReview) {
      onAddReview(newRev);
    }
    setLocalReviews(prev => [newRev, ...prev]);
    setAddSuccess(true);
    setForm({
      name: '',
      rating: 5,
      service: 'Boiler Servicing',
      quote: '',
      area: 'Greenwich',
    });

    setTimeout(() => {
      setAddSuccess(false);
      setShowAddForm(false);
    }, 3000);
  };

  return (
    <div className="py-24 bg-obsidian min-h-screen text-bone">
      <SEO 
        title="Verified Customer Reviews & Local Case Studies"
        description="Browse authentic reviews logged by verified homeowners in South London, Greenwich, and Croydon. Transparent 5-star ratings for Gas Safe engineers."
        canonicalPath="/reviews"
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Page Header */}
        <SectionHeader
          eyebrow="Our Reputation"
          heading="Verified Client Testimonials"
          subtext="Read real client performance logs from our service portfolio database. All feedback represents verified, on-site jobs signed off by our regional engineers."
          align="center"
        />

        {/* Featured Project Visual Spotlight Card */}
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-12 bg-charcoal border border-ash relative overflow-hidden group select-none">
          <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-center space-y-4">
            <span className="font-mono text-[9px] text-copper tracking-widest uppercase font-medium">
              Recent Completed Case Study
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-bone tracking-tight leading-tight uppercase font-medium">
              High-Specification Renovation
            </h3>
            <p className="font-sans text-xs sm:text-sm text-smoke leading-relaxed font-light">
              "We hired ModFlowPlumbing to completely overhaul our main bathroom piping, install matte-black mixer valves, and hook up a high-output copper wall radiator. Perfect alignment, zero visual clutter, and neat joint seals."
            </p>
            <div className="flex items-center gap-3 font-mono text-[10px] text-smoke border-t border-ash pt-4">
              <span className="font-bold text-bone">Client: Eleanor V.</span>
              <span>•</span>
              <span className="text-copper font-medium">Lambeth Division (SW8)</span>
            </div>
          </div>

          <div className="lg:col-span-6 h-60 lg:h-auto min-h-[224px] relative bg-black shrink-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=35&w=400" 
              alt="Completed high-end bathroom sanitaryware installation by ModFlowPlumbing" 
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 duration-750 ease-out transition-all"
            />
            {/* Subtle bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-charcoal via-transparent to-transparent opacity-60"></div>
            <div className="absolute top-3 right-3 bg-obsidian/80 border border-ash px-2.5 py-1 font-mono text-[9px] text-copper uppercase tracking-wider font-bold">
              // VERIFIED 5★ WORK
            </div>
          </div>
        </div>

        {/* Top summary cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-charcoal border border-ash p-6 font-mono text-xs select-none">
            <span className="text-zinc-500 uppercase block tracking-wider text-[9px]">Overall Customer Rating</span>
            <span className="font-serif font-semibold text-3xl text-bone mt-2 block tracking-tight">4.96 / 5.00</span>
            <div className="flex gap-0.5 text-copper mt-3">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-current" />)}
            </div>
            <span className="text-zinc-500 text-[8px] block mt-4 uppercase">BASED ON OVER 1,400 VERIFIED CLIENTS</span>
          </div>

          <div className="bg-charcoal border border-ash p-6 font-mono text-xs select-none">
            <span className="text-zinc-500 uppercase block tracking-wider text-[9px]">Gas Safe Safety SLA</span>
            <span className="font-serif font-semibold text-3xl text-emerald-400 mt-2 block tracking-tight">100% SECURE</span>
            <span className="text-smoke block mt-3 font-sans font-light text-[11px]">Zero safety incidents logged</span>
            <span className="text-zinc-500 text-[8px] block mt-4 uppercase">Fully Protected & Warranted</span>
          </div>

          <div className="bg-charcoal border border-ash p-6 flex flex-col justify-center items-center font-mono">
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="w-full bg-copper hover:bg-[#e49c6d] text-obsidian font-mono font-bold text-[10px] py-4 tracking-widest uppercase transition-colors flex items-center justify-center gap-2 border-0 cursor-pointer focus:outline-none"
            >
              <PenTool size={12} />
              Submit Review Ticket
            </button>
            <span className="text-zinc-500 text-[9px] block mt-3 text-center uppercase tracking-wider">Leave Verified feedback</span>
          </div>
        </div>

        {/* Dynamic review writing form */}
        {showAddForm && (
          <div className="bg-charcoal border border-ash p-6 sm:p-8 mb-12 relative animate-fade-up">
            <h3 className="font-mono text-copper text-xs font-bold uppercase mb-4 tracking-widest">// Log client review</h3>

            {addSuccess ? (
              <div className="p-4 bg-emerald-950/20 border border-emerald-800/40 text-emerald-300 font-mono text-xs flex gap-2 items-center">
                <Check size={16} />
                <span>Review logged with success. Thank you!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-4 bg-ember-red/5 border border-ember-red/25 text-orange-200 font-mono text-xs flex items-start gap-2 select-none">
                    <AlertCircle size={15} className="shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] text-zinc-500 uppercase font-bold block tracking-wider">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Charles D."
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-obsidian border border-ash py-3 px-4 text-xs sm:text-sm font-sans text-bone focus:outline-none focus:border-copper h-11"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="font-mono text-[10px] text-zinc-500 uppercase font-bold block tracking-wider">Rating</label>
                      <select
                        value={form.rating}
                        onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
                        className="w-full bg-obsidian border border-ash py-3 px-4 text-xs sm:text-sm font-mono text-bone focus:outline-none focus:border-copper h-11"
                      >
                        <option value={5}>5 Stars (Excellent)</option>
                        <option value={4}>4 Stars (Very Good)</option>
                        <option value={3}>3 Stars (Satisfactory)</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-mono text-[10px] text-zinc-500 uppercase font-bold block tracking-wider">District</label>
                      <input
                        type="text"
                        placeholder="e.g., Croydon"
                        value={form.area}
                        onChange={(e) => setForm({ ...form, area: e.target.value })}
                        className="w-full bg-obsidian border border-ash py-3 px-4 text-xs sm:text-sm font-sans text-bone focus:outline-none focus:border-copper h-11"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] text-zinc-500 uppercase font-bold block tracking-wider">Service Task</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-obsidian border border-ash py-3 px-4 text-xs sm:text-sm font-mono text-bone focus:outline-none focus:border-copper h-11"
                  >
                    <option>Boiler Servicing</option>
                    <option>Emergency Flood Fix</option>
                    <option>Drainage Jetting</option>
                    <option>Radiator Installation</option>
                    <option>Design & Bathroom Plumb</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] text-zinc-500 uppercase font-bold block tracking-wider">Review Narrative</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Provide your experience on speed, cleanliness, and workmanship..."
                    value={form.quote}
                    onChange={(e) => setForm({ ...form, quote: e.target.value })}
                    className="w-full bg-obsidian border border-ash py-3 px-4 text-xs sm:text-sm font-sans text-bone focus:outline-none focus:border-copper"
                  ></textarea>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-copper hover:bg-[#e49c6d] text-obsidian font-mono text-[10px] uppercase font-bold tracking-widest cursor-pointer focus:outline-none"
                  >
                    Publish Review Log
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Testimonials List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
          {localReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-charcoal border border-ash p-6 flex flex-col justify-between relative hover:border-copper/40 duration-300"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex gap-0.5 text-copper">
                      {[...Array(rev.rating)].map((_, i) => <Star key={i} size={12} className="fill-current" />)}
                    </div>
                    <span className="font-mono text-[8px] text-[#A6E6C5] block mt-1 uppercase tracking-widest">
                      ✓ Service: {rev.service}
                    </span>
                  </div>
                  
                  <span className="font-mono text-[8px] text-copper bg-obsidian px-2 py-0.5 border border-ash uppercase font-bold select-none tracking-wider">
                    APPROVED
                  </span>
                </div>

                <p className="font-sans text-xs sm:text-sm text-smoke italic leading-relaxed mb-6 font-light">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-ash font-mono text-[9px] text-smoke">
                <div>
                  <span className="font-bold text-bone block uppercase">{rev.name}</span>
                  <span className="text-zinc-550 block font-normal">Sectors: {rev.area}</span>
                </div>
                <span className="text-[9px]">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
