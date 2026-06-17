import React from 'react';
import { Shield, Wrench, MapPin, Phone, Mail, Clock, ArrowRight, Star } from 'lucide-react';
import { SERVICES, AREAS } from '../../lib/constants';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleLinkClick = (path: string) => {
    onNavigate(path);
  };

  return (
    <footer className="bg-obsidian text-smoke pt-16 pb-8 border-t border-ash" style={{ contain: 'layout' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Column 1: Brand & Badge Info */}
        <div className="space-y-5">
          <button
            onClick={() => handleLinkClick('/')}
            className="flex items-center gap-2 group text-left focus:outline-none cursor-pointer"
          >
            <div className="border border-copper/30 bg-charcoal p-1.5 flex items-center justify-center">
              <Wrench size={16} className="text-copper rotate-45 group-hover:-rotate-45 transition-transform duration-300" />
            </div>
            <span className="font-serif text-lg font-semibold tracking-tight text-bone">
              ModFlowPlumbing<span className="text-copper">.</span>
            </span>
          </button>
          
          <p className="font-sans text-xs sm:text-sm text-smoke leading-relaxed font-light">
            London and the South East's premier engineering tradesmen. Specializing in high-end boiler overhauls, leak trace-detection, and responsive 24/7 emergency dispatch.
          </p>

          <div className="space-y-2 pt-2">
            {/* Gas Safe Blue Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-charcoal border border-ash text-[10px] font-mono font-bold tracking-wider text-copper">
              <Shield size={13} className="text-copper shrink-0" />
              GAS SAFE REGISTERED #123456
            </div>
            
            {/* Trustpilot-like badge */}
            <div className="flex items-center gap-1.5 text-xs text-brass-glow font-mono">
              <span className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="fill-brass-glow text-transparent" />
                ))}
              </span>
              <span className="text-smoke text-[11px]">(2,400+ Jobs Completed)</span>
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links (Services) */}
        <div className="space-y-4">
          <h3 className="font-mono text-copper text-xs font-bold uppercase tracking-widest">
            Services
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-smoke font-light">
            {SERVICES.map((srv) => (
              <li key={srv.id}>
                <button
                  onClick={() => handleLinkClick(`/services`)}
                  className="hover:text-copper flex items-center gap-1.5 group cursor-pointer focus:outline-none text-left"
                >
                  <ArrowRight size={10} className="text-ash group-hover:text-copper transition-colors" />
                  {srv.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Coverage Areas */}
        <div className="space-y-4">
          <h3 className="font-mono text-copper text-xs font-bold uppercase tracking-widest">
            Coverage Areas
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-smoke font-light font-sans">
            {AREAS.slice(0, 4).map((area) => (
              <li key={area.id}>
                <button
                  onClick={() => handleLinkClick('/areas-we-cover')}
                  className="hover:text-copper flex items-center gap-2 group cursor-pointer focus:outline-none text-left"
                >
                  <span className="text-copper font-mono text-[10px]">[ {area.postcodes[0]} ]</span>
                  <span>{area.name.split(' (')[0]}</span>
                </button>
              </li>
            ))}
            <li className="pt-2">
              <button
                onClick={() => handleLinkClick('/areas-we-cover')}
                className="text-brass-glow hover:text-copper font-mono text-xs block focus:outline-none uppercase tracking-wider"
              >
                View all postcodes &raquo;
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Hours */}
        <div className="space-y-4">
          <h3 className="font-mono text-copper text-xs font-bold uppercase tracking-widest">
            Contacts
          </h3>
          <ul className="space-y-3.5 text-xs sm:text-sm text-smoke font-light">
            <li className="flex items-start gap-2.5">
              <MapPin size={15} className="text-copper shrink-0 mt-0.5" />
              <span>ModFlowPlumbing Depot, Unit 12 Enterprise Way, London, SE10 0AA</span>
            </li>
            
            <li>
              <a href="tel:08001234567" className="flex items-center gap-2.5 text-bone font-medium hover:text-copper focus:outline-none">
                <Phone size={14} className="text-copper shrink-0" />
                <span>0800 123 4567 (Lines Free)</span>
              </a>
            </li>

            <li className="flex items-start gap-2.5">
              <Mail size={14} className="text-copper shrink-0 mt-0.5" />
              <span className="break-all font-mono text-xs select-all text-smoke">support@modflowplumbing.co.uk</span>
            </li>

            <li className="pt-3 border-t border-ash mt-2">
              <div className="flex gap-2 text-xs">
                <Clock size={14} className="text-copper shrink-0 mt-0.5" />
                <div className="font-mono text-[11px] text-smoke leading-normal">
                  <p className="font-bold text-copper uppercase select-none">EMERGENCY ASSISTANCE</p>
                  <p>24 Hours / 365 Days a Year</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Credit Row + Admin Portal Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-ash flex flex-col sm:flex-row justify-between items-center text-xs text-smoke/40 space-y-4 sm:space-y-0">
        <p>© {new Date().getFullYear()} ModFlowPlumbing Ltd (trading as ModFlowPlumbing & Heating). Company No. 12903810. VAT Reg. 34490210.</p>
        
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleLinkClick('/gallery')}
            className="hover:text-copper transition-colors text-smoke/60 font-mono text-[10px] uppercase tracking-wider focus:outline-none"
          >
            Gallery
          </button>
          <span>•</span>
          <button
            onClick={() => handleLinkClick('/admin')}
            className="hover:text-copper transition-colors text-smoke/60 font-mono text-[10px] uppercase tracking-wider focus:outline-none"
          >
            Staff Login
          </button>
          <span>•</span>
          <p className="font-mono text-[10px]">Premium service guarantee</p>
        </div>
      </div>
    </footer>
  );
}
