import { useState } from 'react';
import { GALLERY, GalleryItem } from '../../lib/constants';
import SectionHeader from '../../components/ui/SectionHeader';
import { ZoomIn, X } from 'lucide-react';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedImage, setExpandedImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Hair', 'Skincare', 'Nails', 'Makeup', 'Eyes', 'Wellness'];

  const filteredGallery = activeCategory === 'All'
    ? GALLERY
    : GALLERY.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="pt-28 pb-20 bg-ivory/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Banner Headers */}
        <SectionHeader
          eyebrow="The Portfolio"
          heading="A Visual Register of Care"
          subtext="Witness the bespoke results, pristine transformations, and immersive serene relaxation sculpted daily at our high-fashion studio."
          align="center"
        />

        {/* Filter Categories Row */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 sm:mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-body text-xs uppercase tracking-widest px-5 py-3 transition-all duration-300 border focus:outline-none cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gold border-gold text-white shadow-sm font-semibold'
                  : 'bg-white border-champagne/20 text-[#1A1A1A] hover:border-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Uniform Responsive Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-fade-up">
          {filteredGallery.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => setExpandedImage(item)}
                className="relative overflow-hidden bg-white border border-champagne/10 shadow-sm cursor-zoom-in group h-[380px] w-full transition-all duration-300"
              >
                {/* Image under zoom */}
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  crossOrigin="anonymous"
                  width={600}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />

                {/* Blush Glass tint hover overlay */}
                <div className="absolute inset-0 bg-[#F2C4CE]/30 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-500 flex flex-col justify-end p-6">
                  {/* Category */}
                  <span className="font-accent text-[10px] tracking-widest text-[#1A1A1A] uppercase font-bold mb-1">
                    {item.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-display text-lg text-onyx font-medium leading-tight mb-2 tracking-wide">
                    {item.title}
                  </h3>

                  {/* Expand icon */}
                  <div className="w-8 h-8 rounded-full border border-[#1A1A1A]/30 flex items-center justify-center text-onyx">
                    <ZoomIn size={14} />
                  </div>
                </div>

                {/* Constant dark gradient on bottom when not hovered */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-onyx/50 to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-0" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Image Zoom Lightbox modal */}
      {expandedImage && (
        <div 
          className="fixed inset-0 bg-onyx/90 backdrop-blur-md z-[9999] flex flex-col items-center justify-center p-4 transition-all duration-300 animate-fade-up"
          onClick={() => setExpandedImage(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setExpandedImage(null)}
            className="absolute top-6 right-6 text-white/75 hover:text-gold transition-colors cursor-pointer focus:outline-none"
            aria-label="Close Lightbox"
          >
            <X size={32} />
          </button>

          {/* Lightbox content card */}
          <div 
            className="max-w-4xl max-h-[80vh] bg-transparent flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Stop bubbling
          >
            <img
              src={expandedImage.image}
              alt={expandedImage.title}
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
              width={1200}
              height={800}
              loading="eager"
              className="max-w-full max-h-[70vh] object-contain border border-gold/15"
            />
            {/* Legend bottom bar */}
            <div className="text-center mt-4 space-y-1">
              <span className="font-accent text-gold text-xs tracking-[0.2em] uppercase font-semibold block">
                {expandedImage.category}
              </span>
              <p className="font-display text-white text-lg tracking-wide md:text-xl font-light">
                {expandedImage.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
