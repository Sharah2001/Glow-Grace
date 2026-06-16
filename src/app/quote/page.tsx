import React, { useState, useEffect } from 'react';
import SEO from '../../components/ui/SEO';
import SectionHeader from '../../components/ui/SectionHeader';
import Button from '../../components/ui/Button';
import PriceTag from '../../components/ui/PriceTag';
import { SERVICES, Booking } from '../../lib/constants';
import { CheckCircle, ShieldCheck, AlertCircle } from 'lucide-react';

interface QuotePageProps {
  onNavigate: (path: string) => void;
  onAddBooking?: (booking: Booking) => void;
}

export default function QuotePage({ onNavigate, onAddBooking }: QuotePageProps) {
  // Extract service query parameter
  const getSelectedServiceId = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('service') || '';
  };

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceId: getSelectedServiceId() || SERVICES[0].id,
    notes: '',
    date: new Date().toISOString().split('T')[0],
    timeSlot: 'Morning (08:00 - 12:00)',
    customerName: '',
    phone: '',
    email: '',
    postcode: '',
  });

  const [success, setSuccess] = useState(false);
  const [createdBookingId, setCreatedBookingId] = useState('');
  const [validationError, setValidationError] = useState('');

  // Sync state if window URL changes
  useEffect(() => {
    const initialSrv = getSelectedServiceId();
    if (initialSrv) {
      setFormData(prev => ({ ...prev, serviceId: initialSrv }));
    }
  }, []);

  const selectedService = SERVICES.find(s => s.id === formData.serviceId) || SERVICES[0];

  const handleNext = () => {
    if (step === 1 && !formData.serviceId) {
      setValidationError('Please select a system service class to proceed.');
      return;
    }
    if (step === 2) {
      if (!formData.date || !formData.timeSlot) {
        setValidationError('Please specify your preferred date and arrival slot window.');
        return;
      }
    }
    setValidationError('');
    setStep(prev => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setValidationError('');
    setStep(prev => prev - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.customerName || !formData.phone || !formData.postcode) {
      setValidationError('Please fill out all recipient name, phone, and postcode fields.');
      return;
    }
    setValidationError('');

    const bookingId = `FR-${Math.floor(1000 + Math.random() * 9000)}`;
    const newBooking: Booking = {
      id: bookingId,
      customerName: formData.customerName,
      phone: formData.phone,
      email: formData.email || 'no-email@modflowplumbing.co.uk',
      serviceId: formData.serviceId,
      postcode: formData.postcode.toUpperCase(),
      date: formData.date,
      timeSlot: formData.timeSlot,
      status: 'New',
      notes: formData.notes
    };

    if (onAddBooking) {
      onAddBooking(newBooking);
    } else {
      try {
        const stored = localStorage.getItem('hydrohaus_bookings');
        const list = stored ? JSON.parse(stored) : [];
        list.push(newBooking);
        localStorage.setItem('hydrohaus_bookings', JSON.stringify(list));
      } catch (err) {
        console.warn('LocalStorage error', err);
      }
    }

    setCreatedBookingId(bookingId);
    setSuccess(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="py-24 bg-obsidian min-h-screen text-bone">
      <SEO 
        title="Get instant transparent quotes"
        description="ModFlowPlumbing free plumbing & central heating cost estimation tool. Outline system specs to reserve a local Gas Safe engineer."
        canonicalPath="/quote"
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <SectionHeader
          eyebrow="Valuations"
          heading="System Diagnostics & Quote Form"
          subtext="Calculate clear, transparent plumbing or heating estimates. Complete our 3-step schedule module below to assign an on-duty regional engineer."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-4">
          
          {/* Left Column: Form Triage Area */}
          <div className="lg:col-span-7 space-y-6">
            {/* Progress Stepper Bar */}
            {!success && (
              <div className="flex justify-between items-center mb-6 font-mono text-[11px] select-none text-smoke">
                <div className={`flex flex-col items-center flex-1 ${step >= 1 ? 'text-copper font-bold' : 'opacity-40'}`}>
                  <span>Step 01</span>
                  <span className="text-[9px] mt-1 hidden sm:inline uppercase tracking-widest">Select Service</span>
                </div>
                <div className="h-[1px] bg-ash flex-1 mx-2" />
                <div className={`flex flex-col items-center flex-1 ${step >= 2 ? 'text-copper font-bold' : 'opacity-40'}`}>
                  <span>Step 02</span>
                  <span className="text-[9px] mt-1 hidden sm:inline uppercase tracking-widest">Date & Zone</span>
                </div>
                <div className="h-[1px] bg-ash flex-1 mx-2" />
                <div className={`flex flex-col items-center flex-1 ${step >= 3 ? 'text-copper font-bold' : 'opacity-40'}`}>
                  <span>Step 03</span>
                  <span className="text-[9px] mt-1 hidden sm:inline uppercase tracking-widest">Your Details</span>
                </div>
              </div>
            )}

            {/* Form Container */}
            <div className="bg-charcoal border border-ash p-6 sm:p-10 relative">
              {validationError && (
                <div className="mb-6 p-4 bg-ember-red/5 border border-ember-red/25 text-orange-200 font-mono text-xs flex items-start gap-2 select-none">
                  <AlertCircle size={15} className="shrink-0 mt-0.5" />
                  <span>{validationError}</span>
                </div>
              )}

              {success ? (
                <div className="text-center py-8 space-y-6 select-none font-sans text-sm">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-950/20 border border-emerald-800/40 text-emerald-400 rounded-none mb-2">
                    <CheckCircle size={32} />
                  </div>
                  
                  <div className="space-y-2">
                    <h2 className="font-serif font-medium text-bone text-2xl sm:text-3xl tracking-tight uppercase">
                      Reservation Recorded
                    </h2>
                    <p className="text-smoke font-sans max-w-md mx-auto text-sm font-light">
                      Water system diagnostics logged under reference <span className="font-mono text-copper font-semibold font-bold">{createdBookingId}</span>. A dispatch coordinator will call you back within 5 minutes.
                    </p>
                  </div>

                  <div className="bg-obsidian p-5 border border-ash text-left text-bone max-w-sm mx-auto space-y-3 font-mono text-[11px]">
                    <div className="flex justify-between border-b border-ash/40 pb-2 text-[10px] uppercase text-zinc-500">
                      <span>Ref Code:</span>
                      <span className="font-bold text-copper">{createdBookingId}</span>
                    </div>
                    <div className="flex justify-between border-b border-ash/40 pb-2 text-[10px] uppercase text-zinc-500">
                      <span>Service Chosen:</span>
                      <span className="font-bold text-bone truncate max-w-[180px]">{selectedService.name}</span>
                    </div>
                    <div className="flex justify-between border-b border-ash/40 pb-2 text-[10px] uppercase text-zinc-500">
                      <span>Telephone:</span>
                      <span className="font-bold text-bone">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between text-[10px] uppercase text-zinc-500">
                      <span>Scheduled Slot:</span>
                      <span className="font-bold text-bone">{formData.date} ({formData.timeSlot.split(' ')[0]})</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                    <Button
                      variant="primary"
                      onClick={() => onNavigate('/')}
                      className="text-[10px] uppercase tracking-widest"
                    >
                      Return Home
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => onNavigate('/admin/bookings')}
                      className="text-[10px] uppercase tracking-widest"
                    >
                      Admin Portal
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  {/* STEP 1: Select service and notes */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <div className="space-y-1">
                        <span className="font-mono text-copper text-[10px] font-bold block uppercase tracking-widest">// SECTOR DIVISION</span>
                        <h3 className="font-serif font-medium text-bone text-lg uppercase tracking-tight">Select Mechanical Task</h3>
                      </div>

                      <div className="grid grid-cols-1 gap-4">
                        {SERVICES.map((srv) => (
                          <div
                            key={srv.id}
                            onClick={() => setFormData({ ...formData, serviceId: srv.id })}
                            className={`p-4.5 border cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                              formData.serviceId === srv.id
                                ? 'border-copper bg-[#dfa075]/5 shadow-sm'
                                : 'border-ash bg-obsidian/40 hover:border-copper/30'
                            }`}
                          >
                            <div className="flex justify-between items-baseline mb-2.5">
                              <span className="font-mono text-[9px] text-copper uppercase tracking-wider font-semibold">{srv.category} Division</span>
                              <span className="font-mono text-xs text-bone font-medium">{srv.price}</span>
                            </div>
                            <h4 className="font-serif font-medium text-bone uppercase mb-1">{srv.name}</h4>
                            <p className="font-sans text-xs text-smoke font-light leading-relaxed">{srv.description}</p>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-1.5 pt-4 border-t border-ash">
                        <label className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block">Description of Boiler code / pipe repair:</label>
                        <textarea
                          rows={3}
                          placeholder="e.g., Boiler drops pressure to 0 bar; leak traces behind bathroom basin."
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          className="w-full bg-obsidian border border-ash py-3 px-4 text-xs sm:text-sm font-sans text-bone focus:outline-none focus:border-copper h-24"
                        ></textarea>
                      </div>

                      <div className="flex justify-end pt-6 border-t border-ash">
                        <button
                          onClick={handleNext}
                          className="px-8 py-3.5 bg-copper hover:bg-[#e49c6d] text-obsidian font-mono text-[10px] uppercase font-bold flex items-center gap-2 cursor-pointer focus:outline-none border-0 tracking-widest h-12"
                        >
                          Scheduling Step 02 &raquo;
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Date, Slot & Location */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <div className="space-y-1">
                        <span className="font-mono text-copper text-[10px] font-bold block uppercase tracking-widest">// DISPATCH CALENDAR</span>
                        <h3 className="font-serif font-medium text-bone text-lg uppercase tracking-tight">Preferred Arrival Window</h3>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block font-bold">Appointment Date</label>
                          <input
                            type="date"
                            value={formData.date}
                            min={new Date().toISOString().split('T')[0]}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="w-full bg-obsidian border border-ash py-3 px-4 text-xs sm:text-sm font-mono text-bone focus:outline-none focus:border-copper h-11"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block font-bold">Arrival Time Block</label>
                          <select
                            value={formData.timeSlot}
                            onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                            className="w-full bg-obsidian border border-ash py-3 px-4 text-xs sm:text-sm font-mono text-bone focus:outline-none focus:border-copper h-11"
                          >
                            <option className="bg-charcoal">Morning (08:00 - 12:00)</option>
                            <option className="bg-charcoal">Midday (12:00 - 16:00)</option>
                            <option className="bg-charcoal">Late Afternoon (16:00 - 19:00)</option>
                            <option className="bg-charcoal">Emergency Dispatch (ASAP)</option>
                          </select>
                        </div>
                      </div>

                      <div className="bg-obsidian p-4 border border-ash flex items-start gap-2.5 text-xs text-smoke leading-relaxed font-sans font-light">
                        <ShieldCheck size={16} className="text-copper shrink-0 mt-0.5" />
                        <p>
                          We operate punctual arrival schedules. Your engineer will send you a text update complete with live arrival timing as soon as they head to your postcode.
                        </p>
                      </div>

                      <div className="flex justify-between pt-6 border-t border-ash">
                        <button
                          onClick={handleBack}
                          className="px-6 py-3 border border-ash text-smoke font-mono text-[10px] uppercase font-bold flex items-center gap-2 cursor-pointer focus:outline-none hover:border-copper h-11"
                        >
                          &laquo; Back
                        </button>
                        <button
                          onClick={handleNext}
                          className="px-8 py-3.5 bg-copper hover:bg-[#e49c6d] text-obsidian font-mono text-[10px] uppercase font-bold flex items-center gap-2 cursor-pointer focus:outline-none border-0 tracking-widest h-11"
                        >
                          Contact Details Step 03 &raquo;
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Contact Summary */}
                  {step === 3 && (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-1">
                        <span className="font-mono text-copper text-[10px] font-bold block uppercase tracking-widest">// CONTACT REGISTRY</span>
                        <h3 className="font-serif font-medium text-bone text-lg uppercase tracking-tight">Assign Local Tech Representative</h3>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block font-bold">Contact Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="Frederick Thorne"
                            value={formData.customerName}
                            onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                            className="w-full bg-obsidian border border-ash py-3 px-4 text-xs sm:text-sm font-sans text-bone focus:outline-none focus:border-copper h-11"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block font-bold">Phone Number *</label>
                          <input
                            type="tel"
                            required
                            placeholder="e.g., 07711 223344"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-obsidian border border-ash py-3 px-4 text-xs sm:text-sm font-sans text-bone focus:outline-none focus:border-copper h-11"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block font-bold">Active Postcode *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g., CR0 or SW1A"
                            value={formData.postcode}
                            onChange={(e) => setFormData({ ...formData, postcode: e.target.value.toUpperCase() })}
                            className="w-full bg-obsidian border border-ash py-3 px-4 text-xs sm:text-sm font-mono text-bone tracking-widest focus:outline-none focus:border-copper h-11 uppercase"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block font-bold">Email Address</label>
                          <input
                            type="email"
                            placeholder="frederick@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-obsidian border border-ash py-3 px-4 text-xs sm:text-sm font-sans text-bone focus:outline-none focus:border-copper h-11"
                          />
                        </div>
                      </div>

                      {/* Summary card panel */}
                      <div className="bg-obsidian p-5 border border-ash space-y-2 select-none font-mono text-xs">
                        <span className="text-zinc-500 text-[9px] uppercase tracking-wider block">// CONFIRMATION BRIEF OVERVIEW:</span>
                        <div className="flex justify-between font-sans text-[13px] text-bone uppercase">
                          <span>Target Job:</span>
                          <span className="text-copper font-medium">{selectedService.name}</span>
                        </div>
                        <div className="flex justify-between text-[11px] text-smoke">
                          <span>Appointment Slot:</span>
                          <span>{formData.date} ({formData.timeSlot})</span>
                        </div>
                      </div>

                      <div className="flex justify-between pt-6 border-t border-ash">
                        <button
                          type="button"
                          onClick={handleBack}
                          className="px-6 py-3 border border-ash text-smoke font-mono text-[10px] uppercase font-bold flex items-center gap-2 cursor-pointer focus:outline-none hover:border-copper h-11"
                        >
                          &laquo; Back
                        </button>
                        <button
                          type="submit"
                          className="px-8 py-3.5 bg-copper hover:bg-[#e49c6d] text-obsidian font-mono text-[10px] uppercase font-bold tracking-widest flex items-center gap-2 cursor-pointer focus:outline-none border-0 h-11"
                        >
                          SUBMIT BOOKING ESTIMATE &raquo;
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Spec Blueprint & Quality Checklists */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Blueprint Showcase Card */}
            <div className="bg-charcoal border border-ash overflow-hidden group select-none">
              <div className="relative aspect-[4/3] bg-obsidian overflow-hidden border-b border-ash">
                <img 
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=35&w=400" 
                  alt="Technical drawing layout specifying copper pipe manifold design" 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 duration-700 ease-out transition-all"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-85" />
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 bg-copper text-[8px] font-mono font-medium tracking-widest text-obsidian uppercase border border-ash">
                  Estimation Blueprint
                </span>
              </div>
              <div className="p-5 font-sans">
                <span className="text-copper font-mono text-[9px] font-bold block uppercase tracking-widest">// SYSTEM INTEGRITY STANDARD</span>
                <p className="font-sans text-xs text-smoke leading-relaxed font-light mt-1.5">
                  ModFlowPlumbing operates under precise architectural drafting principles. Every pipe run is properly insulated to optimize heat preservation.
                </p>
              </div>
            </div>

            {/* Inclusions checklist details */}
            <div className="bg-charcoal border border-ash p-6 font-mono text-xs text-bone space-y-4">
              <span className="text-copper font-bold block border-b border-ash pb-2.5 uppercase tracking-widest text-[10px] select-none">// STANDARD SERVICE STANDARDS</span>
              <ul className="space-y-4 font-sans text-xs text-smoke font-light">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-450 font-bold select-none text-[#52b788]">✓</span>
                  <span><strong>Zero Travel Fees:</strong> Standard flat rate matching with no traveling surcharges inside the borough boundaries.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-450 font-bold select-none text-[#52b788]">✓</span>
                  <span><strong>£5M Liability Coverage:</strong> Total backup assurance protecting client properties during hot works or systems isolate.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-455 font-bold select-none text-[#52b788]">✓</span>
                  <span><strong>Prisinte Fittings Only:</strong> Heavy-walled copper runs paired with WRAS-approved lead-free solders.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
