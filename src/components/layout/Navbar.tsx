import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Wrench, ShieldAlert } from 'lucide-react';
import Button from '../ui/Button';
import { cn } from '../../lib/utils';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Navbar({ currentPath, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCallBarVisible, setIsCallBarVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scrolling state
      setIsScrolled(currentScrollY > 80);

      // Determine CallBar visible state
      if (currentScrollY > 50) {
        if (currentScrollY > lastScrollY.current) {
          setIsCallBarVisible(false);
        } else {
          setIsCallBarVisible(true);
        }
      } else {
        setIsCallBarVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Areas Covered', path: '/areas-we-cover' },
    { name: 'Project Gallery', path: '/gallery' },
    { name: 'Emergency 24/7', path: '/emergency', isEmergency: true },
    { name: 'Reviews', path: '/reviews' },
  ];

  const handleLinkClick = (path: string) => {
    setIsOpen(false);
    onNavigate(path);
  };

  return (
    <header
      className={cn(
        "fixed left-0 w-full z-45 transition-all duration-300 select-none",
        isCallBarVisible ? 'top-10' : 'top-0',
        isScrolled
          ? 'bg-charcoal/90 backdrop-blur-md border-b border-ash py-3 shadow-xl'
          : 'bg-transparent border-b border-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => handleLinkClick('/')}
          className="flex items-center gap-2 group focus:outline-none cursor-pointer h-10 text-left"
        >
          <div className="border border-copper/30 bg-charcoal p-1.5 flex items-center justify-center rounded-none group-hover:border-copper transition-colors duration-300">
            <Wrench size={16} className="text-copper rotate-45 group-hover:-rotate-45 transition-transform duration-300" />
          </div>
          <div>
            <span className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-bone block leading-none">
              ModFlowPlumbing<span className="text-copper">.</span>
            </span>
            <span className="font-mono text-[9px] tracking-widest text-smoke block leading-none mt-1 uppercase">
              Premium Heating & Plumbing
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7">
          <ul className="flex space-x-7 h-10 items-center">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.path)}
                    className={cn(
                      "font-sans font-medium uppercase tracking-wider text-xs transition-all duration-300 relative cursor-pointer focus:outline-none py-1 group",
                      link.isEmergency 
                        ? 'text-ember-red hover:text-opacity-80 font-semibold' 
                        : isActive 
                          ? 'text-copper' 
                          : 'text-smoke hover:text-bone'
                    )}
                  >
                    {link.name}
                    {/* Animated underline */}
                    <span
                      className={cn(
                        "absolute bottom-0 left-0 w-full h-[1px] bg-copper transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100",
                        isActive && "scale-x-100 bg-copper"
                      )}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="h-4 w-[1px] bg-ash mx-1" />

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              onClick={() => handleLinkClick('/quote')}
              className="text-[10px] tracking-wider py-2.5 px-4 shadow-sm"
              id="nav-quote-btn"
            >
              Get a Quote
            </Button>
            
            <a
              href="tel:08001234567"
              className="px-4 py-2.5 font-sans font-medium text-[10px] uppercase bg-transparent border border-ember-red text-ember-red hover:bg-ember-red hover:text-bone duration-300 animate-pulse-ember flex items-center gap-1.5 focus:outline-none"
            >
              <Phone size={10} className="fill-current text-current" />
              Emergency
            </a>
          </div>
        </nav>

        {/* Mobile/Tablet CTA & Toggle Menu */}
        <div className="flex items-center lg:hidden gap-2">
          {/* Always visible Emergency Call on Mobile */}
          <a
            href="tel:08001234567"
            className="px-3 py-1.5 font-sans font-medium text-[10px] uppercase bg-ember-red border border-ember-red text-bone flex items-center gap-1 hover:bg-opacity-90 duration-200 focus:outline-none shrink-0"
          >
            <Phone size={10} className="fill-current" />
            0800 123 4567
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-smoke hover:text-bone transition-colors duration-200 focus:outline-none p-2 bg-charcoal border border-ash rounded-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar/Drawer Container */}
      {isOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-obsidian z-50 animate-fade-up">
          {/* Drawer Top Navigation Bar */}
          <div className="flex justify-between items-center p-4 border-b border-ash bg-charcoal">
            <div className="flex items-center gap-2">
              <Wrench size={14} className="text-copper" />
              <span className="font-serif text-lg text-bone font-semibold uppercase tracking-tight">
                ModFlowPlumbing
              </span>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="text-smoke hover:text-bone transition-colors focus:outline-none p-1 bg-charcoal border border-ash rounded-none"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          {/* Links list in mobile drawer */}
          <div className="flex flex-col items-center pt-8 space-y-5 px-6">
            <ul className="flex flex-col space-y-4 text-center w-full max-w-xs">
              {navLinks.map((link) => {
                const isActive = currentPath === link.path;
                return (
                  <li key={link.name} className="border-b border-ash pb-3">
                    <button
                      onClick={() => handleLinkClick(link.path)}
                      className={cn(
                        "font-sans font-medium uppercase tracking-wider text-xs transition-all block w-full py-1",
                        link.isEmergency
                          ? 'text-ember-red font-semibold flex items-center justify-center gap-1.5'
                          : isActive 
                            ? 'text-copper' 
                            : 'text-smoke hover:text-bone'
                      )}
                    >
                      {link.isEmergency && <ShieldAlert size={12} className="text-ember-red animate-pulse" />}
                      {link.name}
                    </button>
                  </li>
                );
              })}
              <li className="border-b border-ash pb-3">
                <button
                  onClick={() => handleLinkClick('/quote')}
                  className={cn(
                    "font-sans font-medium uppercase tracking-wider text-xs transition-all block w-full py-1",
                    currentPath === '/quote' ? 'text-copper' : 'text-smoke hover:text-bone'
                  )}
                >
                  Request Quote
                </button>
              </li>
            </ul>

            <div className="w-full max-w-xs pt-4 flex flex-col gap-3">
              <Button
                variant="primary"
                onClick={() => handleLinkClick('/quote')}
                className="w-full text-[11px]"
              >
                Instant Quote Request
              </Button>
              
              <div className="text-center font-mono text-[9px] text-smoke leading-normal uppercase">
                Gas Safe Engineers • Guaranteed Excellence
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
