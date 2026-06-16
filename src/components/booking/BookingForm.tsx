import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, User, Check, Sparkles, AlertCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { SERVICES, Service } from '../../lib/constants';
import Button from '../ui/Button';

interface BookingFormProps {
  onSuccess?: () => void;
}

export default function BookingForm({ onSuccess }: BookingFormProps) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // Hardcode current month days (June 2026, current local time indicates June operates)
  const daysInMonth = 30;
  // Starting week day of June 2026: Monday (June 1 is Monday)
  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const timeSlots = [
    '09:00 AM',
    '10:30 AM',
    '11:45 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM',
    '05:30 PM',
    '07:00 PM',
  ];

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setStep(2);
  };

  const handleDateSelect = (day: number) => {
    setSelectedDate(day);
    setSelectedTime(null); // Reset selected time
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    if (step === 2 && selectedDate && selectedTime) {
      setStep(3);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    setIsSubmitting(true);
    // Simulate real API booking transition
    setTimeout(() => {
      setIsSubmitting(false);
      setIsCompleted(true);
      if (onSuccess) onSuccess();
    }, 2000);
  };

  if (isCompleted) {
    return (
      <div className="bg-[#111115] border border-white/5 p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-2xl relative">
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/10"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/10"></div>
        
        <div className="w-16 h-16 bg-copper/10 text-copper rounded-none flex items-center justify-center mx-auto mb-6 border border-copper/30">
          <Check size={32} className="stroke-[2.5]" />
        </div>
        <h3 className="font-display font-black text-white text-2xl sm:text-3xl tracking-tight mb-2 uppercase">
          TICKET GENERATED SUCCESS
        </h3>
        <p className="font-mono text-copper text-xs tracking-widest uppercase font-semibold mb-6">
          MODFLOWPLUMBING & HEATING
        </p>
        <div className="bg-[#070709] p-6 mb-8 text-left space-y-3 border border-white/10 font-mono text-xs text-zinc-400">
          <p className="border-b border-white/5 pb-2 text-white font-bold uppercase">// CONFIRMATION SUMMARY:</p>
          <p>
            <strong className="text-white">ASSIGNED TASK:</strong> {selectedService?.name} (Est: {selectedService?.price})
          </p>
          <p>
            <strong className="text-white">TIMELINE:</strong> June {selectedDate}, 2026 at {selectedTime}
          </p>
          <p>
            <strong className="text-white">RECIPIENT:</strong> {formData.name}
          </p>
          <p>
            <strong className="text-white">CONTACT LOGS:</strong> {formData.phone} / {formData.email}
          </p>
        </div>
        <p className="font-sans text-zinc-400 text-sm font-light leading-relaxed mb-8">
          A copy of your dispatch ticket brief has been registered. A dispatch engineer will review availability and confirm your exact plumber arrival timeline via SMS callout.
        </p>
        <button
          onClick={() => {
            setStep(1);
            setSelectedService(null);
            setSelectedDate(null);
            setSelectedTime(null);
            setFormData({ name: '', email: '', phone: '', notes: '' });
            setIsCompleted(false);
          }}
          className="px-6 py-3 border border-white/10 text-zinc-400 font-mono text-xs uppercase font-bold hover:bg-white/5 hover:text-white transition-all cursor-pointer focus:outline-none"
        >
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Dots with animation */}
      <div className="flex justify-center items-center space-x-6 mb-12">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center select-none">
            <button
              onClick={() => {
                if (s === 1 || (s === 2 && selectedService) || (s === 3 && selectedService && selectedDate && selectedTime)) {
                  setStep(s);
                }
              }}
              disabled={!(s === 1 || (s === 2 && selectedService) || (s === 3 && selectedService && selectedDate && selectedTime))}
              className={`w-10 h-10 rounded-none font-mono text-xs flex items-center justify-center border transition-all duration-300 relative cursor-pointer focus:outline-none ${
                step === s
                  ? 'border-copper bg-copper text-paper shadow-md scale-105'
                  : step > s
                  ? 'border-copper/40 bg-copper/5 text-copper'
                  : 'border-white/10 text-zinc-550 bg-transparent'
              }`}
            >
              0{s}
            </button>
            {s < 3 && (
              <div
                className={`w-12 sm:w-16 h-[1px] ml-6 transition-all duration-500 ${
                  step > s ? 'bg-copper' : 'bg-white/10'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Main step forms container */}
      <div className="bg-[#111115] border border-white/5 p-6 sm:p-10 shadow-2xl min-h-[450px] relative">
        <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t border-l border-white/10"></div>
        <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t border-r border-white/10"></div>

        {/* STEP 1: Select Service (Visual Grid) */}
        {step === 1 && (
          <div className="animate-fade-in">
            <h3 className="font-display font-black text-white text-xl sm:text-2xl mb-2 tracking-tight uppercase">
              // Choose Plumber Task Target
            </h3>
            <p className="font-mono text-zinc-500 text-xs sm:text-xs mb-8 uppercase tracking-widest leading-none">
              Transparent upfront fixed plumber and gas safety diagnostics. Select to continue.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SERVICES.map((service) => (
                <div
                  key={service.id}
                  onClick={() => handleServiceSelect(service)}
                  className={`border p-6 cursor-pointer transition-all duration-300 flex flex-col justify-between group h-40 relative select-none ${
                    selectedService?.id === service.id
                      ? 'border-copper bg-copper/5'
                      : 'border-white/5 bg-[#070709] hover:border-copper/50'
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase font-bold group-hover:text-copper transition-colors">
                        {service.category}
                      </span>
                      <span className="font-mono font-bold text-copper text-xs">
                        {service.price}
                      </span>
                    </div>
                    <h4 className="font-display text-base font-black text-white group-hover:text-copper transition-colors uppercase tracking-tight">
                      {service.name}
                    </h4>
                    <p className="font-sans text-zinc-500 text-xs font-light line-clamp-2 mt-1 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] text-right text-copper uppercase tracking-wider block mt-2 font-bold group-hover:translate-x-1 duration-300">
                    {service.duration} &raquo;
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: Pick Date & Time */}
        {step === 2 && (
          <div className="animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-display font-black text-white text-xl sm:text-2xl tracking-tight uppercase">
                // Select Calendar Target
              </h3>
              <button
                onClick={handlePrevStep}
                className="font-mono text-xs font-bold text-copper uppercase tracking-wider flex items-center hover:text-white transition-colors cursor-pointer focus:outline-none"
              >
                <ArrowLeft size={14} className="mr-1.5" /> Back
              </button>
            </div>

            <div className="mb-6 bg-copper/5 p-4 border border-copper/15 font-mono text-xs text-white flex items-center space-x-3">
              <Sparkles size={16} className="text-copper shrink-0 animate-pulse" />
              <span>
                Selected Task: <strong className="font-bold text-copper uppercase">{selectedService?.name}</strong> ({selectedService?.price}, {selectedService?.duration})
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Calendar Grid */}
              <div className="border border-white/5 p-6 bg-[#070709]">
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/5">
                  <span className="font-mono font-bold text-white uppercase tracking-tight">June 2026</span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500">// ON-CALL LOG</span>
                </div>

                {/* Weekdays */}
                <div className="grid grid-cols-7 gap-2 text-center mb-2">
                  {weekdays.map((wd) => (
                    <span key={wd} className="font-mono font-light text-[10px] uppercase text-zinc-500 tracking-wider">
                      {wd}
                    </span>
                  ))}
                </div>

                {/* Date numbers starting June 2026 (Mon June 1 is 1) */}
                <div className="grid grid-cols-7 gap-2 text-center">
                  {[...Array(daysInMonth)].map((_, i) => {
                    const dayNum = i + 1;
                    const isSelected = selectedDate === dayNum;
                    const isSunday = (dayNum % 7) === 0;

                    return (
                      <button
                        key={dayNum}
                        onClick={() => !isSunday && handleDateSelect(dayNum)}
                        disabled={isSunday}
                        className={`aspect-square sm:aspect-video md:aspect-square text-xs md:text-xs font-mono transition-all duration-300 focus:outline-none flex items-center justify-center border cursor-pointer ${
                          isSunday
                            ? 'text-zinc-650 bg-black/40 border-transparent cursor-not-allowed'
                            : isSelected
                            ? 'border-copper bg-copper text-paper font-bold shadow-sm'
                            : 'border-white/5 bg-white/[0.01] hover:border-copper hover:bg-copper/5 text-white'
                        }`}
                      >
                        {dayNum}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots Area */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-mono font-bold text-white text-sm mb-3 flex items-center uppercase tracking-tight">
                    <Clock size={16} className="text-copper mr-2 animate-pulse" />
                    Available Timelines
                  </h4>
                  {selectedDate ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-3 pb-2">
                      {timeSlots.map((time) => {
                        const isTimeSelected = selectedTime === time;
                        return (
                          <button
                            key={time}
                            onClick={() => handleTimeSelect(time)}
                            className={`py-3 px-4 text-[10px] font-mono tracking-wider transition-all duration-300 border focus:outline-none text-center cursor-pointer ${
                              isTimeSelected
                                ? 'border-copper bg-copper text-paper font-bold'
                                : 'border-white/5 hover:border-copper hover:bg-copper/5 bg-[#070709] text-white'
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="border border-dashed border-white/5 bg-[#070709] p-8 text-center text-zinc-500 text-xs font-mono">
                      <CalendarIcon size={24} className="mx-auto mb-2 text-copper/40" />
                      SELECT AN ACTIVE APPOINTMENT DATE.
                    </div>
                  )}
                </div>

                {/* Form Controls */}
                <div className="flex justify-end pt-4 border-t border-white/5">
                  <button
                    disabled={!selectedDate || !selectedTime}
                    onClick={handleNextStep}
                    className="px-6 py-3 bg-copper hover:bg-black text-paper font-mono text-xs uppercase font-bold flex items-center gap-1.5 cursor-pointer focus:outline-none disabled:opacity-30 disabled:pointer-events-none transition-all duration-300"
                  >
                    Proceed details
                    <ArrowRight size={14} className="ml-1.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Personal Details & Confirmation */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-display font-black text-white text-xl sm:text-2xl tracking-tight uppercase">
                // Complete Ticket Parameters
              </h3>
              <button
                type="button"
                onClick={handlePrevStep}
                className="font-mono text-xs font-bold text-copper uppercase tracking-wider flex items-center hover:text-white transition-colors cursor-pointer focus:outline-none"
              >
                <ArrowLeft size={14} className="mr-1.5" /> Back
              </button>
            </div>

            {/* Quick Summary card */}
            <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/[0.02] border border-white/5 p-6 text-xs font-mono">
              <div>
                <h4 className="font-mono font-bold text-white text-xs mb-2 uppercase">// APPOINTMENT TYPE:</h4>
                <p className="text-zinc-500 text-[10px] mb-1">{selectedService?.category}</p>
                <p className="font-bold text-copper uppercase">{selectedService?.name}</p>
                <p className="text-zinc-500 text-[10px] mt-1">{selectedService?.duration} duration</p>
              </div>
              <div className="md:border-l md:border-white/5 md:pl-6 pt-4 md:pt-0">
                <h4 className="font-mono font-bold text-white text-xs mb-2 uppercase">// TIMELINE BRIEF:</h4>
                <p className="font-bold text-white">June {selectedDate}, 2026</p>
                <p className="font-bold text-zinc-400 mt-1">{selectedTime}</p>
                <p className="text-copper text-sm mt-2 font-black tracking-tight">{selectedService?.price}</p>
              </div>
            </div>

            {/* Inputs Grid */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-mono text-zinc-500 tracking-widest uppercase font-bold mb-2">
                    Client Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter full name"
                    className="w-full bg-[#070709] border border-white/10 font-sans text-xs text-white py-3 px-4 focus:outline-none focus:border-copper"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[10px] font-mono text-zinc-500 tracking-widest uppercase font-bold mb-2">
                    UK Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="07700 900077"
                    className="w-full bg-[#070709] border border-white/10 font-mono text-xs text-white py-3 px-4 focus:outline-none focus:border-copper"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-[10px] font-mono text-zinc-500 tracking-widest uppercase font-bold mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@gmail.co.uk"
                  className="w-full bg-[#070709] border border-white/10 font-mono text-xs text-white py-3 px-4 focus:outline-none focus:border-copper"
                />
              </div>

              <div>
                <label htmlFor="notes" className="block text-[10px] font-mono text-zinc-500 tracking-widest uppercase font-bold mb-2">
                  Special Notes (Access codes, boiler model, leak situation)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Please state any specific property features or urgent diagnostic descriptors"
                  className="w-full bg-[#070709] border border-white/10 font-sans text-xs text-white py-3 px-4 focus:outline-none focus:border-copper resize-none"
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/5 pt-6">
              <span className="text-[10px] text-zinc-500 font-mono flex items-center text-center sm:text-left leading-relaxed">
                <AlertCircle size={14} className="text-copper mr-2 shrink-0 animate-pulse" /> Final pricing is reflective of transparent standard callout diagnostic parameters.
              </span>
              <button
                type="submit"
                disabled={isSubmitting || !formData.name || !formData.email || !formData.phone}
                className="px-8 py-3.5 bg-copper hover:bg-black text-paper font-mono text-xs uppercase font-black tracking-wider cursor-pointer disabled:opacity-30 disabled:pointer-events-none transition-all duration-300 border-0 shrink-0"
              >
                {isSubmitting ? 'Submitting Dispatch brief...' : 'Submit Dispatch Proposal ≫'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
