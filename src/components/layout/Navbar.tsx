import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Navbar({ currentPath, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '#about' },
  ];

  const handleLinkClick = (path: string) => {
    setIsOpen(false);
    if (path.startsWith('#')) {
      onNavigate('/');
      setTimeout(() => {
        const id = path.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      onNavigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled
          ? 'bg-ivory/90 backdrop-blur-md border-champagne/30 py-4 shadow-xs'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => handleLinkClick('/')}
          className="cursor-pointer group flex items-center focus:outline-none"
        >
          <span className="font-display text-3xl font-light italic tracking-tight text-onyx">Lumière</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold ml-1 mt-3"></span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          <ul className="flex space-x-8">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path || (link.path.startsWith('#') && currentPath === '/' && window.location.hash === link.path);
              return (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.path)}
                    className={`font-body font-normal uppercase tracking-widest text-xs transition-colors duration-300 relative cursor-pointer focus:outline-none py-1 group ${
                      isActive ? 'text-gold' : 'text-onyx hover:text-gold'
                    }`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : ''}`} />
                  </button>
                </li>
              );
            })}
          </ul>

          <Button
            variant="pill"
            onClick={() => handleLinkClick('/booking')}
            className="text-xs tracking-widest font-semibold hover:shadow-lg hover:scale-[1.03] active:scale-95 duration-300"
          >
            BOOK NOW
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-onyx hover:text-gold transition-colors duration-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-ivory/98 z-40 transition-transform duration-500 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button in drawer top-right */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-onyx hover:text-gold transition-colors duration-300 focus:outline-none p-1"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col justify-center items-center h-full space-y-8 px-6 text-center">
          <button
            onClick={() => {
              setIsOpen(false);
              handleLinkClick('/');
            }}
            className="flex items-center justify-center mb-6 focus:outline-none"
          >
            <span className="font-display text-4xl font-light italic tracking-tight text-onyx">Lumière</span>
            <span className="w-2 h-2 rounded-full bg-gold ml-1 mt-4"></span>
          </button>

          <ul className="flex flex-col space-y-6">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.path)}
                    className={`font-body font-normal uppercase tracking-widest text-lg transition-colors duration-300 ${
                      isActive ? 'text-gold' : 'text-onyx hover:text-gold'
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="pt-8">
            <Button
              variant="pill"
              onClick={() => handleLinkClick('/booking')}
              className="text-sm px-8 py-3 tracking-widest"
            >
              BOOK APPOINTMENT
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
