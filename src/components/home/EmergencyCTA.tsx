import React from 'react';
import { Phone, ShieldAlert } from 'lucide-react';

export default function EmergencyCTA() {
  return (
    <section className="relative py-24 bg-obsidian border-b border-ash overflow-hidden select-none">
      {/* Background trade photo (water pipe closeup / night trade work) */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&fm=webp&q=40&w=650"
          alt="Emergency plumber night shift response"
          referrerPolicy="no-referrer"
          width="650"
          height="433"
          loading="lazy"
          className="w-full h-full object-cover opacity-20 grayscale brightness-50"
        />
        {/* Extreme dark gradient overlay for premium look */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/85 to-obsidian/50" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10 z-10">
        
        {/* Core text block */}
        <div className="text-center md:text-left space-y-4">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="inline-flex w-2 h-2 bg-ember-red rounded-full animate-ping"></span>
            <span className="font-mono text-xs font-bold tracking-widest text-[#ec9685] uppercase">
              // Immediate Dispatch Active
            </span>
          </div>
          
          <h2 className="font-serif font-semibold text-3xl sm:text-4xl md:text-5xl text-bone tracking-tight leading-tight">
            Emergencies don't wait. <br />
            <span className="italic font-light text-[#dfa075]">Neither do we.</span>
          </h2>
          
          <p className="font-sans text-smoke text-sm max-w-xl font-light leading-relaxed">
            Burst pipes, boiler breakdowns, flooding. Our duty engineers are stationed across London and the South East for direct, fast-response routing. No travel charges, no hidden fees.
          </p>
        </div>

        {/* Large phone link with pulsing ring */}
        <div className="shrink-0">
          <a
            href="tel:08001234567"
            className="inline-flex items-center gap-3 bg-ember-red hover:bg-[#d65741] text-bone font-mono font-medium text-xs sm:text-sm px-8 py-5 tracking-widest uppercase transition-all duration-300 shadow-xl animate-pulse-ember border border-ember-red rounded-none"
          >
            <Phone size={13} className="fill-current" />
            <span>Call 0800 123 4567</span>
          </a>
        </div>

      </div>
    </section>
  );
}
