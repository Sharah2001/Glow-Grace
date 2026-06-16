import { Instagram, Facebook, Heart, Mail, Phone, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleLinkClick = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-onyx text-white/90 pt-16 pb-8 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Column 1: Brand */}
        <div className="space-y-6 border-b border-white/5 pb-10 md:border-b-0 md:pb-0">
          <div className="font-display text-2xl tracking-[0.08em] font-semibold text-white">
            LUMIÈRE<span className="text-gold">.</span>
          </div>
          <p className="font-body text-sm text-mist leading-relaxed font-light">
            An award-winning boutique sanctuary where beauty merges with meticulous art. We design tailored self-care rituals for modern women seeking uncompromising elegance, cellular revival, and bespoke beauty transformations.
          </p>
          <div className="flex space-x-4 items-center">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-gold/20 flex items-center justify-center text-champagne hover:bg-gold hover:text-white transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-gold/20 flex items-center justify-center text-champagne hover:bg-gold hover:text-white transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-gold/20 flex items-center justify-center text-champagne hover:bg-gold hover:text-white transition-all duration-300"
              aria-label="TikTok"
            >
              <Heart size={18} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-6 border-b border-white/5 pb-10 md:border-b-0 md:pb-0">
          <h3 className="font-accent text-gold text-sm tracking-widest font-semibold uppercase">
            EXPLORE THE STUDIO
          </h3>
          <ul className="space-y-1 md:space-y-3 font-body text-sm font-light">
            <li>
              <button
                onClick={() => handleLinkClick('/')}
                className="py-2.5 md:py-0 w-full text-left hover:text-gold transition-colors duration-300 cursor-pointer focus:outline-none"
              >
                Welcome
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick('/services')}
                className="py-2.5 md:py-0 w-full text-left hover:text-gold transition-colors duration-300 cursor-pointer focus:outline-none"
              >
                Bespoke Services
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick('/gallery')}
                className="py-2.5 md:py-0 w-full text-left hover:text-gold transition-colors duration-300 cursor-pointer focus:outline-none"
              >
                Client Gallery
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick('/booking')}
                className="py-2.5 md:py-0 w-full text-left hover:text-gold transition-colors duration-300 cursor-pointer focus:outline-none text-gold font-medium"
              >
                Book Appointment
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact & Hours */}
        <div className="space-y-6">
          <h3 className="font-accent text-gold text-sm tracking-widest font-semibold uppercase">
            CONTACT & HOURS
          </h3>
          <ul className="space-y-1 md:space-y-3 font-body text-sm font-light text-white/80">
            <li className="flex items-start space-x-3 py-2 md:py-0">
              <MapPin size={16} className="text-gold shrink-0 mt-1" />
              <span>42 Palaly Road, Chundikuli, Jaffna, Sri Lanka (Near Chundikuli Girls' College)</span>
            </li>
            <li className="flex items-center">
              <a href="tel:+94212224500" className="flex items-center space-x-3 hover:text-gold transition-colors py-2.5 md:py-0 w-full">
                <Phone size={16} className="text-gold shrink-0" />
                <span>+94 (21) 222-4500</span>
              </a>
            </li>
            <li className="flex items-center">
              <a href="mailto:appointments@lumierejaffna.com" className="flex items-center space-x-3 hover:text-gold transition-colors py-2.5 md:py-0 w-full break-all">
                <Mail size={16} className="text-gold shrink-0" />
                <span>appointments@lumierejaffna.com</span>
              </a>
            </li>
            <li className="flex items-start space-x-3 pt-4 border-t border-white/5 mt-3">
              <Clock size={16} className="text-gold shrink-0 mt-1" />
              <div>
                <p>Mon - Fri: 9:00 AM - 8:00 PM</p>
                <p>Saturday: 9:00 AM - 6:00 PM</p>
                <p>Sunday: Closed for Self-Care</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Credit Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-xs text-mist font-light space-y-4 sm:space-y-0">
        <p>© {new Date().getFullYear()} Lumière Beauty Studio. All rights reserved.</p>
        <p className="flex items-center">
          In pursuit of pristine self-care & aesthetics <Heart size={10} className="mx-1 text-gold fill-gold" />
        </p>
      </div>
    </footer>
  );
}
