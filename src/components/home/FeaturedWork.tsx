import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';

interface ProjectPair {
  id: string;
  title: string;
  category: string;
  location: string;
  beforeImg: string;
  afterImg: string;
}

const PROJECT_PAIRS: ProjectPair[] = [
  {
    id: 'proj-1',
    title: 'Bespoke Brass Bathroom Upgrade',
    category: 'Sanitary Refitting',
    location: 'Kensington, W8',
    beforeImg: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&fm=webp&q=35&w=400',
    afterImg: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&fm=webp&q=35&w=400'
  },
  {
    id: 'proj-2',
    title: 'Worcester Bosch Boiler Swap',
    category: 'Heating & Gas',
    location: 'Greenwich, SE10',
    beforeImg: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&fm=webp&q=35&w=400',
    afterImg: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&fm=webp&q=35&w=400'
  },
  {
    id: 'proj-3',
    title: 'Underfloor Heating Manifold',
    category: 'Thermal Overhaul',
    location: 'Richmond, TW9',
    beforeImg: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&fm=webp&q=35&w=400',
    afterImg: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&fm=webp&q=35&w=400'
  }
];

export default function FeaturedWork() {
  return (
    <section className="py-24 bg-obsidian border-b border-ash relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="Finished Portfolios"
          heading="Featured Before & After Projects"
          subtext="Witness our attention to detail. Hover and slide your cursor horizontally across each project panel to inspect custom boiler swap layouts and pristine brass sanitary joins."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {PROJECT_PAIRS.map((proj) => (
            <BeforeAfterSlider key={proj.id} project={proj} />
          ))}
        </div>

      </div>
    </section>
  );
}

function BeforeAfterSlider({ project }: { project: ProjectPair }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(x, 0), 100));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (e.touches[0]) {
      const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
      setSliderPos(Math.min(Math.max(x, 0), 100));
    }
  };

  return (
    <div className="bg-charcoal border border-ash p-5 flex flex-col justify-between group transition-all duration-300 hover:border-copper/30">
      
      {/* Slider view container */}
      <div 
        className="relative aspect-[4/3] w-full overflow-hidden bg-obsidian select-none cursor-ew-resize border border-ash/50"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setSliderPos(50); // Reset to center
        }}
      >
        {/* After Image (Base) */}
        <img 
          src={project.afterImg} 
          alt={`${project.title} After`}
          referrerPolicy="no-referrer"
          width="400"
          height="300"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        
        {/* Label After */}
        <span className="absolute bottom-3 right-3 z-20 bg-copper/90 text-obsidian text-[9px] font-mono font-medium uppercase px-2 py-0.5 tracking-wider">
          After
        </span>

        {/* Before Image (Overlay clipped) */}
        <div 
          className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-hidden"
          style={{
            clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`
          }}
        >
          <img 
            src={project.beforeImg} 
            alt={`${project.title} Before`}
            referrerPolicy="no-referrer"
            width="400"
            height="300"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale brightness-75 scale-100"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Label Before */}
        <span className="absolute bottom-3 left-3 z-20 bg-charcoal/80 text-bone text-[9px] font-mono font-medium uppercase px-2 py-0.5 tracking-wider border border-ash">
          Before
        </span>

        {/* Vertical Divider Slider Line */}
        <div 
          className="absolute top-0 bottom-0 w-[1px] bg-copper shadow-[0_0_8px_rgba(217,142,92,0.8)] z-15 pointer-events-none flex items-center justify-center"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Slider knob */}
          <div className="w-5 h-5 bg-copper text-obsidian flex items-center justify-center font-mono text-[9px] font-bold border border-copper rounded-full shadow-lg">
            ↔
          </div>
        </div>
      </div>

      {/* Caption description */}
      <div className="pt-5 flex flex-col font-sans">
        <div className="flex justify-between items-center mb-1.5 font-mono text-[9px] uppercase tracking-wider text-rose">
          <span className="text-copper">{project.category}</span>
          <span className="text-smoke">{project.location}</span>
        </div>
        
        <h3 className="font-serif font-medium text-base text-bone tracking-tight uppercase group-hover:text-copper transition-colors duration-200">
          {project.title}
        </h3>
      </div>

    </div>
  );
}
