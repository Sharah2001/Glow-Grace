import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../lib/constants';
import SectionHeader from '../ui/SectionHeader';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

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

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS.length - visibleCount);

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
    <section className="py-24 bg-obsidian overflow-hidden relative border-t border-b border-ash scroll-mt-20" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <SectionHeader
            eyebrow="Verified Experience"
            heading="Delivering Five-Star Satisfaction"
            subtext="Meticulous engineering, clean pipework, and transparent estimates as told by our private and commercial customers across Greater London."
            align="left"
            className="mb-0 md:mb-0 max-w-2xl text-left"
          />

          {/* Navigation Arrows */}
          <div className="flex items-center space-x-3 mt-6 md:mt-0 z-20 shrink-0 select-none">
            <button
              onClick={handlePrev}
              className="w-12 h-12 bg-charcoal text-copper hover:bg-copper hover:text-obsidian active:scale-95 transition-all duration-300 cursor-pointer focus:outline-none flex items-center justify-center border border-ash"
              aria-label="Previous Review"
              id="testimonial-prev-btn"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 bg-charcoal text-copper hover:bg-copper hover:text-obsidian active:scale-95 transition-all duration-300 cursor-pointer focus:outline-none flex items-center justify-center border border-ash"
              aria-label="Next Review"
              id="testimonial-next-btn"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="relative w-full overflow-hidden select-none py-2">
          <div 
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {TESTIMONIALS.map((item) => {
              const flexWidth = visibleCount === 3
                ? 'calc(33.333% - 16px)'
                : visibleCount === 2
                ? 'calc(50% - 12px)'
                : '100%';

              return (
                <div
                   key={item.id}
                   style={{ width: flexWidth }}
                   className="bg-charcoal border border-ash p-8 flex flex-col justify-between hover:border-copper/40 transition-all duration-305 shrink-0 relative group min-h-[290px]"
                >
                  {/* Left Copper Accent Line */}
                  <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-copper opacity-20 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Subtle background Quote decorative icon */}
                  <Quote className="absolute right-6 top-6 text-ash/20 w-12 h-12 pointer-events-none stroke-[1]" />

                  <div>
                    {/* Star Ratings */}
                    <div className="flex space-x-1 mb-4 text-brass-glow">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={14} className="fill-brass-glow text-transparent" />
                      ))}
                    </div>

                    {/* Testimonial Quote */}
                    <blockquote className="font-serif italic text-vintage text-sm mb-6 leading-relaxed text-bone group-hover:text-white transition-colors duration-200">
                      "{item.quote}"
                    </blockquote>
                  </div>

                  {/* Client Signature Footer */}
                  <div className="pt-4 border-t border-ash flex justify-between items-end mt-auto font-sans">
                    <div>
                      <cite className="font-sans font-medium text-xs sm:text-sm text-bone not-italic block">
                        {item.name}
                      </cite>
                      <span className="font-mono text-[9px] text-smoke block mt-0.5 uppercase tracking-wider">
                        Area: {item.area}
                      </span>
                    </div>
                    
                    <span className="font-mono text-[9px] text-copper tracking-widest font-medium uppercase bg-obsidian px-2 py-0.5 border border-ash">
                      {item.service.split(' ')[0]} Verified
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Dot Indicators */}
        <div className="flex justify-center items-center space-x-2.5 mt-8 select-none">
          {[...Array(maxIndex + 1)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1 transition-all duration-300 focus:outline-none cursor-pointer ${
                currentIndex === idx 
                  ? 'bg-copper w-8' 
                  : 'bg-ash hover:bg-copper/30 w-2'
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
