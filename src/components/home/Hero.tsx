import React from 'react';
import { Phone, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';
import Button from '../ui/Button';

interface HeroProps {
  onNavigate: (path: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-obsidian text-bone border-b border-ash overflow-hidden pt-32 pb-20">
      {/* Premium Full-bleed Background Image with Dark Vignette / Gradient Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&fm=webp&q=40&w=650"
          srcSet="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&fm=webp&q=40&w=450 450w, https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&fm=webp&q=40&w=650 650w, https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&fm=webp&q=45&w=950 950w"
          sizes="(max-width: 768px) 100vw, 650px"
          alt="ModFlowPlumbing premium plumbing engineer at work"
          referrerPolicy="no-referrer"
          width="650"
          height="433"
          fetchPriority="high"
          className="w-full h-full object-cover opacity-35 grayscale contrast-125 brightness-[0.4] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Headline and Copy Area */}
          <div className="lg:col-span-8 space-y-7 text-left animate-fade-up">
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2.5 items-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-charcoal/80 border border-ash text-[10px] sm:text-xs font-mono font-bold tracking-wider text-copper uppercase select-none glass-badge">
                <ShieldCheck size={12} className="text-copper shrink-0" />
                Gas Safe Registered #123456
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-charcoal/80 border border-ash text-[10px] sm:text-xs font-mono font-bold tracking-wider text-brass-glow uppercase select-none glass-badge">
                <CheckCircle size={12} className="text-brass-glow shrink-0" />
                24/7 Callouts Under 1 Hr
              </span>
            </div>
          
            {/* Elegant Serif Headline */}
            <h1 className="font-serif font-semibold text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.98] text-bone select-none">
              Plumbing,<br />
              <span className="italic font-light text-[#dfa075]">Done properly.</span>
            </h1>

            {/* Muted Premium Description */}
            <p className="font-sans text-smoke text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-light">
              Premium Gas Safe engineers serving London and the South East. Confident, transparent fixed pricing with none of the usual surprises. Warrantied craftsmanship on every single installation.
            </p>

            {/* Premium action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                variant="primary"
                onClick={() => onNavigate('/quote')}
                className="group text-xs px-8 py-4.5 font-sans font-medium hover:scale-[1.02] transform duration-200"
              >
                Request an Estimate
                <ArrowRight size={13} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <a
                href="tel:08001234567"
                className="px-8 py-4 bg-transparent border border-ember-red text-ember-red hover:bg-ember-red hover:text-bone font-sans font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 duration-300 animate-pulse-ember cursor-pointer"
              >
                <Phone size={12} className="fill-current" />
                Emergency Call Now
              </a>
            </div>

            {/* Reviews / Guarantee footer line */}
            <div className="pt-6 border-t border-ash flex flex-wrap gap-y-3 gap-x-6 items-center text-smoke text-xs font-mono tracking-wide">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-brass-glow">★</span>
                ))}
                <span className="font-sans text-bone font-semibold ml-1.5">5★ Trustpilot Rated</span>
              </div>
              <span className="hidden sm:inline text-ash">•</span>
              <span>1-Year Complete Workmanship Guarantee</span>
              <span className="hidden sm:inline text-ash">•</span>
              <span>No Call-Out Feel</span>
            </div>
          </div>

          {/* Large, Beautiful Framing Bathroom Shot */}
          <div className="lg:col-span-4 relative group aspect-[4/5] w-full max-w-sm mx-auto border border-ash bg-charcoal overflow-hidden select-none hover:border-copper/30 transition-all duration-500 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&fm=webp&q=35&w=400"
              alt="Luxury modern brass bathroom plumbing fittings"
              referrerPolicy="no-referrer"
              width="400"
              height="500"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-105 duration-700 ease-out transition-all"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/10 to-transparent" />
            
            {/* Fine line borders on layout corner */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-copper/50"></div>
            <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-copper/50"></div>
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-copper/50"></div>
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-copper/50"></div>

            <div className="absolute bottom-5 left-5 right-5 z-10">
              <span className="font-mono text-copper text-[10px] uppercase tracking-widest block mb-1">Project #1402</span>
              <h3 className="font-serif font-normal text-bone text-base tracking-tight italic">
                Bespoke Sanitaryware Fitting — Kensington
              </h3>
            </div>
          </div>

        </div>

        {/* Scroll cue: thin animated vertical line */}
        <div className="hidden md:flex flex-col items-center justify-center pt-16">
          <span className="font-mono text-[10px] text-zinc-650 uppercase tracking-widest mb-3">Scroll to discover</span>
          <div className="w-[1px] h-12 bg-ash relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-copper animate-draw-line" style={{ animationDuration: '2s', animationIterationCount: 'infinite' }}></div>
          </div>
        </div>

      </div>
    </section>
  );
}
