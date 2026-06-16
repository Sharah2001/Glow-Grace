import React, { useState, useEffect, useRef } from 'react';
import { Phone, ShieldCheck } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function CallBar() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50) {
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down -> Hide CallBar
          setIsVisible(false);
        } else {
          // Scrolling up -> Show CallBar
          setIsVisible(true);
        }
      } else {
        // Near top -> Show CallBar
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-full bg-charcoal text-copper text-[11px] sm:text-xs h-10 border-b border-ash flex items-center justify-between px-4 sm:px-6 z-50 transition-transform duration-300",
        isVisible ? 'translate-y-0' : '-translate-y-full'
      )}
    >
      <div className="flex items-center gap-2">
        <span className="inline-flex w-2 h-2 bg-ember-red rounded-full animate-pulse-ember"></span>
        <a href="tel:08001234567" className="font-mono hover:text-brass-glow transition-colors font-semibold flex items-center gap-1.5 focus:outline-none">
          <Phone size={11} className="text-copper" />
          <span>0800 123 4567</span>
          <span className="text-smoke">— AVAILABLE 24/7 FOR EMERGENCY CALLS</span>
        </a>
      </div>
      <div className="hidden md:flex items-center gap-2 font-mono font-medium text-smoke">
        <ShieldCheck size={13} className="text-copper" />
        <span>Gas Safe Registered No. 123456</span>
      </div>
    </div>
  );
}
