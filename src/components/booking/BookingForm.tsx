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
      <div className="bg-white border border-champagne/30 p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-md">
        <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-6">
          <Check size={32} className="stroke-[2.5]" />
        </div>
        <h3 className="font-display font-medium text-onyx text-2xl sm:text-3xl tracking-wide mb-4">
          Appointment Requested
        </h3>
        <p className="font-accent text-gold text-xs tracking-widest uppercase font-semibold mb-6">
          Lumière Beauty Studio
        </p>
        <div className="bg-ivory p-6 mb-8 text-left space-y-3 border border-champagne/10 font-body text-sm text-mist">
          <p className="border-b border-champagne/10 pb-2 text-onyx font-medium">
            Booking Overview:
          </p>
          <p>
            <strong className="text-onyx">Service:</strong> {selectedService?.name} ({selectedService?.price})
          </p>
          <p>
            <strong className="text-onyx">Date:</strong> June {selectedDate}, 2026 at {selectedTime}
          </p>
          <p>
            <strong className="text-onyx">Client:</strong> {formData.name}
          </p>
          <p>
            <strong className="text-onyx">Contact:</strong> {formData.phone} / {formData.email}
          </p>
        </div>
        <p className="font-body text-mist text-sm font-light leading-relaxed mb-8">
          A confirmation proposal has been dispatched to your inbox. One of our booking concierge specialists will review your schedule and contact you shortly.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setStep(1);
            setSelectedService(null);
            setSelectedDate(null);
            setSelectedTime(null);
            setFormData({ name: '', email: '', phone: '', notes: '' });
            setIsCompleted(false);
          }}
          className="text-xs"
        >
          Book Another Session
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Dots with animation */}
      <div className="flex justify-center items-center space-x-6 mb-12">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <button
              onClick={() => {
                if (s === 1 || (s === 2 && selectedService) || (s === 3 && selectedService && selectedDate && selectedTime)) {
                  setStep(s);
                }
              }}
              disabled={!(s === 1 || (s === 2 && selectedService) || (s === 3 && selectedService && selectedDate && selectedTime))}
              className={`w-10 h-10 rounded-full font-display text-sm flex items-center justify-center border-2 transition-all duration-500 relative cursor-pointer focus:outline-none ${
                step === s
                  ? 'border-gold bg-gold text-white shadow-md shadow-gold/20 scale-110'
                  : step > s
                  ? 'border-gold bg-gold/10 text-gold'
                  : 'border-champagne/30 text-mist bg-transparent'
              }`}
            >
              {s}
            </button>
            {s < 3 && (
              <div
                className={`w-12 sm:w-16 h-[2px] ml-6 transition-all duration-700 ${
                  step > s ? 'bg-gold' : 'bg-champagne/20'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Main step forms container */}
      <div className="bg-white border border-champagne/20 p-6 sm:p-10 shadow-sm min-h-[450px]">
        {/* STEP 1: Select Service (Visual Grid) */}
        {step === 1 && (
          <div className="animate-fade-up">
            <h3 className="font-display font-medium text-onyx text-xl sm:text-2xl mb-2 tracking-wide">
              Select Your Ritual
            </h3>
            <p className="font-body text-mist text-xs sm:text-sm font-light mb-8">
              Pristine cellular organic and dermal sculpture services. Pick a card to begin.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SERVICES.map((service) => (
                <div
                  key={service.id}
                  onClick={() => handleServiceSelect(service)}
                  className={`border p-6 cursor-pointer transition-all duration-300 flex flex-col justify-between group h-40 ${
                    selectedService?.id === service.id
                      ? 'border-gold bg-gold/5 shadow-md'
                      : 'border-champagne/20 bg-transparent hover:border-gold hover:shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="font-accent text-[10px] tracking-widest text-mist uppercase font-bold group-hover:text-gold">
                        {service.category}
                      </span>
                      <span className="font-display font-medium text-gold text-sm">
                        {service.price}
                      </span>
                    </div>
                    <h4 className="font-display text-lg font-semibold text-onyx group-hover:text-gold transition-colors">
                      {service.name}
                    </h4>
                    <p className="font-body text-mist text-xs font-light line-clamp-2 mt-1 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <span className="font-body text-[10px] text-right text-gold font-semibold uppercase tracking-wider block mt-2">
                    {service.duration} →
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: Pick Date & Time */}
        {step === 2 && (
          <div className="animate-fade-up">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-display font-medium text-onyx text-xl sm:text-2xl tracking-wide">
                Select Date & Time
              </h3>
              <button
                onClick={handlePrevStep}
                className="font-body text-xs font-semibold text-gold uppercase tracking-wider flex items-center hover:text-gold/85"
              >
                <ArrowLeft size={14} className="mr-1.5" /> Back
              </button>
            </div>

            <div className="mb-6 bg-gold/5 p-4 border border-gold/10 font-body text-xs sm:text-sm text-onyx/90 flex items-center space-x-3">
              <Sparkles size={16} className="text-gold shrink-0 animate-pulse" />
              <span>
                Selected Service: <strong className="font-medium text-gold">{selectedService?.name}</strong> ({selectedService?.price}, {selectedService?.duration})
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Calendar Grid */}
              <div className="border border-champagne/20 p-6 bg-ivory/50">
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-champagne/10">
                  <span className="font-display font-semibold text-onyx">June 2026</span>
                  <span className="font-accent text-[10px] uppercase tracking-widest text-mist">Jaffna</span>
                </div>

                {/* Weekdays */}
                <div className="grid grid-cols-7 gap-2 text-center mb-2">
                  {weekdays.map((wd) => (
                    <span key={wd} className="font-body font-light text-[10px] uppercase text-mist tracking-wider">
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
                        className={`aspect-square sm:aspect-video md:aspect-square text-xs md:text-sm font-body transition-all duration-300 focus:outline-none flex items-center justify-center border ${
                          isSunday
                            ? 'text-mist/30 bg-transparent border-transparent cursor-not-allowed'
                            : isSelected
                            ? 'border-gold bg-gold text-white shadow-sm'
                            : 'border-champagne/10 hover:border-gold hover:bg-gold/5 text-onyx'
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
                  <h4 className="font-display font-semibold text-onyx text-base mb-3 flex items-center">
                    <Clock size={16} className="text-gold mr-2" />
                    Available Time Slots
                  </h4>
                  {selectedDate ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-3">
                      {timeSlots.map((time) => {
                        const isTimeSelected = selectedTime === time;
                        return (
                          <button
                            key={time}
                            onClick={() => handleTimeSelect(time)}
                            className={`py-3 px-4 text-xs font-body tracking-wider transition-all duration-300 border focus:outline-none text-center ${
                              isTimeSelected
                                ? 'border-gold bg-gold text-white shadow-sm font-semibold'
                                : 'border-champagne/10 hover:border-gold hover:bg-gold/5 bg-transparent text-onyx'
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="border border-dashed border-champagne/40 bg-white p-8 text-center text-mist text-sm font-body font-light">
                      <CalendarIcon size={24} className="mx-auto mb-2 text-gold/60" />
                      Please choose a date from the calendar.
                    </div>
                  )}
                </div>

                {/* Form Controls */}
                <div className="flex justify-end pt-4 border-t border-champagne/10">
                  <Button
                    variant="primary"
                    disabled={!selectedDate || !selectedTime}
                    onClick={handleNextStep}
                    className="text-xs group"
                  >
                    Proceed details
                    <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 duration-300" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Personal Details & Confirmation */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="animate-fade-up">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-display font-medium text-onyx text-xl sm:text-2xl tracking-wide">
                Complete Your Booking
              </h3>
              <button
                type="button"
                onClick={handlePrevStep}
                className="font-body text-xs font-semibold text-gold uppercase tracking-wider flex items-center hover:text-gold/85"
              >
                <ArrowLeft size={14} className="mr-1.5" /> Back
              </button>
            </div>

            {/* Quick Summary card */}
            <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4 bg-ivory border border-champagne/20 p-6 text-sm font-body">
              <div>
                <h4 className="font-display font-semibold text-onyx text-base mb-2">Selected Ritual:</h4>
                <p className="text-mist text-xs font-light mb-1">{selectedService?.category}</p>
                <p className="font-medium text-gold">{selectedService?.name}</p>
                <p className="text-mist text-xs font-light mt-1">{selectedService?.duration} treatment duration</p>
              </div>
              <div className="md:border-l md:border-champagne/20 md:pl-6 pt-4 md:pt-0">
                <h4 className="font-display font-semibold text-onyx text-base mb-2">Schedule:</h4>
                <p className="font-medium text-gold">June {selectedDate}, 2026</p>
                <p className="font-medium text-onyx mt-1">{selectedTime}</p>
                <p className="text-gold text-lg mt-2 font-display font-semibold">{selectedService?.price}</p>
              </div>
            </div>

            {/* Inputs Grid */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-accent text-gold tracking-widest uppercase font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full bg-ivory/50 border border-champagne/30 font-body text-sm text-onyx py-3 px-4 focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-accent text-gold tracking-widest uppercase font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(212) 555-0100"
                    className="w-full bg-ivory/50 border border-champagne/30 font-body text-sm text-onyx py-3 px-4 focus:outline-none focus:border-gold"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-accent text-gold tracking-widest uppercase font-semibold mb-2">
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
                  placeholder="contact@example.com"
                  className="w-full bg-ivory/50 border border-champagne/30 font-body text-sm text-onyx py-3 px-4 focus:outline-none focus:border-gold"
                />
              </div>

              <div>
                <label htmlFor="notes" className="block text-xs font-accent text-gold tracking-widest uppercase font-semibold mb-2">
                  Special Notes (Skin concerns, product request, allergies)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Please state any preferences or dermal requests"
                  className="w-full bg-ivory/50 border border-champagne/30 font-body text-sm text-onyx py-3 px-4 focus:outline-none focus:border-gold resize-none"
                />
              </div>
            </div>

            <div className="mt-8 flex justify-end items-center space-x-4 border-t border-champagne/10 pt-6">
              <span className="text-xs text-mist font-light flex items-center">
                <AlertCircle size={14} className="text-gold mr-1" /> All pricing is complete subject to Sri Lankan taxes (SSCL/VAT) and local booking terms.
              </span>
              <Button
                type="submit"
                disabled={isSubmitting || !formData.name || !formData.email || !formData.phone}
                className="text-xs shrink-0"
              >
                {isSubmitting ? 'Requesting Appointment...' : 'Submit Request'}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
