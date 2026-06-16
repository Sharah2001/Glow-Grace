import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../../lib/constants';
import SectionHeader from '../ui/SectionHeader';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3); // Default to desktop (3 items)

  // Update visible items based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS.length - visibleCount);

  // Auto Reset currentIndex if it exceeds maxIndex during resize
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCount, maxIndex, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="py-24 bg-white overflow-hidden relative border-y border-champagne/10 scroll-mt-20" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <SectionHeader
            eyebrow="The Devotion"
            heading="Client Echoes from the Sanctuary"
            subtext="Hear unique perspectives from our community of modern women who enjoy natural results paired with deep, immersive restoration."
            align="left"
            className="mb-0 md:mb-0 max-w-2xl"
          />

          {/* Navigation Arrows */}
          <div className="flex items-center space-x-3 mt-6 md:mt-0 z-20">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-none border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-white hover:border-gold active:scale-95 transition-all duration-300 cursor-pointer focus:outline-none"
              aria-label="Previous Review"
              id="testimonial-prev-btn"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-none border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-white hover:border-gold active:scale-95 transition-all duration-300 cursor-pointer focus:outline-none"
              aria-label="Next Review"
              id="testimonial-next-btn"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Slider Window Container */}
        <div className="relative w-full overflow-hidden select-none py-2">
          <div 
            className="flex transition-transform duration-700 ease-out gap-6"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {TESTIMONIALS.map((item) => {
              // Calculate dynamic percentage width minus part of the column gap
              const flexWidth = visibleCount === 3
                ? 'calc(33.333% - 16px)'
                : visibleCount === 2
                ? 'calc(50% - 12px)'
                : '100%';

              return (
                <div
                  key={item.id}
                  style={{ width: flexWidth }}
                  className="bg-ivory border border-champagne/20 p-8 md:p-10 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-gold/30 transition-all duration-500 shrink-0 relative group h-[320px] sm:h-[300px]"
                >
                  {/* Elegant Top Gold Accent on Hover */}
                  <div className="absolute top-0 left-0 w-0 h-[3px] bg-gold group-hover:w-full transition-all duration-500 ease-out" />
                  
                  {/* Absolute subtle background Quote icon */}
                  <Quote className="absolute right-6 top-6 text-gold/5 w-16 h-16 pointer-events-none" />

                  <div>
                    {/* Star Ratings */}
                    <div className="flex space-x-1 mb-6 text-gold">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={15} className="fill-gold stroke-gold" />
                      ))}
                    </div>

                    {/* Testimonial Quote */}
                    <blockquote className="font-display italic text-onyx text-base md:text-[17px] mb-6 leading-relaxed">
                      "{item.quote}"
                    </blockquote>
                  </div>

                  {/* Client Info Footer */}
                  <div className="pt-4 border-t border-champagne/10 flex flex-col mt-auto">
                    <span className="font-accent text-[11px] tracking-widest text-[#7D610E] uppercase font-semibold mb-1">
                      {item.treatment}
                    </span>
                    <cite className="font-body text-xs text-onyx/85 font-medium not-italic">
                      {item.name}
                    </cite>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Dot Indicators */}
        <div className="flex justify-center items-center space-x-2 mt-10">
          {[...Array(maxIndex + 1)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 transition-all duration-500 rounded-none focus:outline-none cursor-pointer ${
                currentIndex === idx 
                  ? 'bg-gold w-8' 
                  : 'bg-gold/15 hover:bg-gold/35 w-2'
              }`}
              aria-label={`Go to slide page ${idx + 1}`}
              id={`testimonial-dot-${idx}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
