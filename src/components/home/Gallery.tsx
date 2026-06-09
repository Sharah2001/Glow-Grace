import { ArrowRight } from 'lucide-react';
import { GALLERY } from '../../lib/constants';
import SectionHeader from '../ui/SectionHeader';

interface GalleryProps {
  onNavigate: (path: string) => void;
}

export default function Gallery({ onNavigate }: GalleryProps) {
  // Take only the first 4 items for preview
  const previewItems = GALLERY.slice(0, 4);

  return (
    <section className="py-24 bg-ivory scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16">
          <SectionHeader
            eyebrow="The Portfolio"
            heading="Visual Evidence of Luminous Art"
            subtext="Discover our curated aesthetic creations. High-contrast precision styling, organic dermal therapies, and fine linear hand-painted details."
            align="left"
            className="mb-0 md:mb-0 max-w-2xl"
          />

          <button
            onClick={() => {
              onNavigate('/gallery');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group font-body text-xs font-semibold uppercase tracking-widest text-[#C9A84C] hover:text-[#C9A84C]/80 inline-flex items-center mt-6 md:mt-0 cursor-pointer focus:outline-none transition-colors duration-300"
          >
            Vanish into the Gallery
            <ArrowRight size={14} className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>
        </div>

        {/* Gallery 4-Item Grid (Uniform Height Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-up">
          {previewItems.map((item, index) => {
            return (
              <div
                key={item.id}
                onClick={() => {
                  onNavigate('/gallery');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group relative overflow-hidden bg-white border border-champagne/10 shadow-sm cursor-pointer h-[380px] w-full transition-all duration-700"
              >
                {/* Image under scale zoom */}
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-105"
                />

                {/* Blush Tint Glass overlay on hover */}
                <div className="absolute inset-0 bg-[#F2C4CE]/30 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-500 flex flex-col justify-end p-6" />

                {/* Gradient shade indicator */}
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/75 via-transparent to-transparent opacity-60 group-hover:opacity-10 transition-opacity duration-300" />

                {/* Content Overlay */}
                <div className="absolute inset-y-0 inset-x-0 p-6 flex flex-col justify-end z-10 pointer-events-none">
                  {/* Category */}
                  <span className="font-accent text-[10px] tracking-widest text-white/90 group-hover:text-onyx uppercase font-semibold transition-colors duration-300 mb-1">
                    {item.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-display text-lg text-white group-hover:text-onyx font-medium leading-tight mb-2 tracking-wide transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Text indicator fades in */}
                  <span className="font-body text-[10px] tracking-widest uppercase font-semibold text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0 transition-transform">
                    Enlarge Photo
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
