import React from 'react';
import Button from '../ui/Button';

interface BookingCTAProps {
  onNavigate: (path: string) => void;
}

export default function BookingCTA({ onNavigate }: BookingCTAProps) {
  return (
    <section className="relative py-28 overflow-hidden bg-charcoal border-y border-ash">
      {/* Decorative architectural rings for depth */}
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-copper/5 rounded-full pointer-events-none z-0" />
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-copper/5 rounded-full pointer-events-none z-0" />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center select-none">
        
        {/* Eyebrow */}
        <span className="font-mono text-copper text-xs tracking-widest uppercase block mb-4 select-none">
          Get Started
        </span>

        {/* Large Elegant Headline */}
        <h2 className="font-serif font-semibold text-bone text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight mb-6">
          Schedule Your System Diagnostics <br />
          <span className="italic font-light text-[#dfa075]">On-Demand Today.</span>
        </h2>

        {/* Short separator */}
        <div className="h-[1px] w-12 bg-copper/30 mx-auto mb-8" />

        {/* Narrative text */}
        <p className="font-sans text-smoke text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Secure your priority arrival window. Our Gas Safe registered plumbing and heating engineers are dispatched across Greater London, equipped for instantaneous diagnoses and repairs on thespot.
        </p>

        {/* Booking Action */}
        <div className="inline-block">
          <Button
            variant="primary"
            onClick={() => onNavigate('/quote')}
            className="px-10 py-5 tracking-widest text-xs uppercase duration-350 cursor-pointer"
          >
            Get a Fixed Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
