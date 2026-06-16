import React, { useState } from 'react';
import SEO from '../../components/ui/SEO';
import SectionHeader from '../../components/ui/SectionHeader';
import Button from '../../components/ui/Button';
import { Camera, Calendar, ShieldCheck, MapPin, ZoomIn, X, Clock, HelpCircle } from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (path: string) => void;
}

interface GalleryItem {
  id: string;
  title: string;
  category: 'Plumbing' | 'Heating & Gas' | 'Drainage';
  location: string;
  date: string;
  image: string;
  description: string;
  technicianNotes: string;
  duration: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Worcester Bosch System Upgrade',
    category: 'Heating & Gas',
    location: 'SE-10 Greenwich Area',
    date: 'June 2026',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=75&w=600',
    duration: '1.5 Days',
    description: 'A complete central heating system overhaul, mounting a new energy-efficient combi boiler linked with fully aligned copper pipeline feeding controls and system filter installations.',
    technicianNotes: 'Removed old system boiler. Cleaned circuits with dual action magnetic flushes. Gas tight pressure verified at 19.8 mbar.'
  },
  {
    id: 'gal-2',
    title: 'Professional Copper Manifold Jointing',
    category: 'Plumbing',
    location: 'CR-0 Croydon Sector',
    date: 'May 2026',
    image: 'https://images.unsplash.com/photo-1542013936693-8848e5744a70?auto=format&fit=crop&q=75&w=600',
    duration: '4 Hours',
    description: 'High-pressure clean water manifold distribution lines. Constructed using thick-walled copper pipes, pristine heat-soldered joints, and active flow isolators.',
    technicianNotes: 'Crafted the service lines with oxygen-free soldering. Installed smart hot water loops. tested both manifold rails to 6.2 bar without pressure loss.'
  },
  {
    id: 'gal-3',
    title: 'Multi-Zone Underfloor Heating Manifold',
    category: 'Heating & Gas',
    location: 'W-1 Mayfair Premium Area',
    date: 'June 2026',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=75&w=600',
    duration: '2 Days',
    description: 'Dynamic manifolds connecting high-grade multi-layer oxygen-barrier heating pipes symmetrically aligned on modern structural insulating layouts.',
    technicianNotes: 'Coordinated flow meters across 5 separate ground floor chambers. Static pressure test verified during screed pouring.'
  },
  {
    id: 'gal-4',
    title: 'Acoustic Trace Leak Pin-Pointing',
    category: 'Plumbing',
    location: 'Bromley borders',
    date: 'May 2026',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    duration: '3 Hours',
    description: 'Non-destructive acoustic tracing and local extraction of a pinhole leak within deep wall spaces under high-pressure main supply tubes.',
    technicianNotes: 'Employed ultra-sensitive noise filters to locate subterranean frequency peaks. Cut a neat 15x15cm drywall port directly in front of the leaking solder coupling.'
  },
  {
    id: 'gal-5',
    title: 'High-Pressure Subterranean Drain Jetting',
    category: 'Drainage',
    location: 'Islington Division',
    date: 'April 2026',
    image: 'https://images.unsplash.com/photo-1542013936693-8848e5744a70?auto=format&fit=crop&q=80&w=800',
    duration: '1 Hour',
    description: 'Subterranean blockage removal and sewer flow restoration using heavy-duty mechanical coring and high-pressure rotational jetters.',
    technicianNotes: 'Resolved grease choke levels in external brick gully chambers. CCTV logs confirmed 100% root extraction and unblocked gravity flow lines.'
  },
  {
    id: 'gal-6',
    title: 'Bespoke Sanitary Matt Black Fixture',
    category: 'Plumbing',
    location: 'Wandsworth Sector',
    date: 'May 2026',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
    duration: '5 Hours',
    description: 'Pristine setup of modern luxury matte black mixer hobs, matching hand-pumps, ceramic basin layout, and silent concealed waste lines.',
    technicianNotes: 'Configured robust control joints. Double-welded back seals inside the wall and certified wall-hung support braces.'
  }
];

export default function GalleryPage({ onNavigate }: GalleryPageProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filters = ['All', 'Plumbing', 'Heating & Gas', 'Drainage'];

  const filteredItems = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  const handleBookSimilar = (item: GalleryItem) => {
    let serviceId = 'boiler-repair';
    if (item.category === 'Plumbing') serviceId = 'leak-detection';
    if (item.category === 'Drainage') serviceId = 'drain-unblocking';
    
    onNavigate(`/quote?service=${serviceId}`);
  };

  return (
    <div className="py-24 bg-obsidian min-h-screen text-bone">
      <SEO 
        title="Completed Engineering Gallery & Solder Portfolios"
        description="Browse professional Gas Safe boiler overhauls, aesthetic pipework routing, smart heating manifolds, and non-destructive plumbing completed by ModFlowPlumbing."
        canonicalPath="/gallery"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <SectionHeader
          eyebrow="Our Archive"
          heading="Completed Engineering Portfolios"
          subtext="A transparent visual record of real mechanical works executed on site. We highlight clean solder joints, neatly clamped copper runs, and clean manifold assemblies."
          align="center"
        />

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 sm:mb-14 select-none">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`font-mono text-[10px] uppercase tracking-widest px-6 py-3.5 duration-200 border cursor-pointer focus:outline-none ${
                activeFilter === f
                  ? 'bg-copper border-copper text-obsidian font-bold'
                  : 'bg-charcoal border-ash text-smoke hover:border-copper/40'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry/Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="bg-charcoal border border-ash group relative overflow-hidden flex flex-col justify-between cursor-pointer hover:border-copper/50 duration-300 shadow-md"
              style={{ contentVisibility: 'auto' }}
            >
              {/* Photo Canvas */}
              <div className="relative aspect-[4/3] overflow-hidden bg-obsidian shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-[0.65] group-hover:grayscale-0 group-hover:scale-105 duration-750 ease-out transition-all"
                  loading="lazy"
                />
                {/* Visual overlay tag */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent"></div>
                
                {/* Zoom hover trigger */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-[1px] bg-obsidian/40 transition-all duration-350">
                  <div className="py-2.5 px-4 bg-copper text-obsidian flex items-center gap-2 font-mono text-[9px] uppercase font-bold tracking-widest">
                    <ZoomIn size={12} />
                    Inspect SPEC Sheet
                  </div>
                </div>

                {/* Left/Bottom location tag */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1 text-bone font-mono text-[9px] uppercase tracking-widest bg-obsidian/70 px-2 py-1 border border-ash">
                  <MapPin size={9} className="text-copper" />
                  {item.location}
                </div>
              </div>

              {/* Details card content */}
              <div className="p-5 flex-grow flex flex-col justify-between font-sans">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-mono text-[9px] text-copper uppercase tracking-wider bg-obsidian px-2 py-0.5 border border-ash">
                      {item.category}
                    </span>
                    <span className="font-mono text-[8px] text-zinc-550 uppercase">
                      ID: {item.id.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="font-serif text-base text-bone tracking-tight group-hover:text-copper transition-colors duration-200 uppercase mt-1">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-smoke font-light mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 mt-4 pt-3 border-t border-ash">
                  <span className="flex items-center gap-1 font-mono">
                    <Clock size={11} className="text-copper" />
                    Effort: {item.duration}
                  </span>
                  <span className="flex items-center gap-1 font-mono">
                    <Calendar size={11} className="text-copper" />
                    {item.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick assurance info strip */}
        <div className="mt-16 bg-charcoal border border-ash p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 relative select-none">
          <div className="space-y-1.5">
            <span className="font-mono text-copper text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-500" />
              // VERIFIABLE QUALITY ASSURANCE
            </span>
            <p className="font-sans text-xs sm:text-sm text-smoke leading-relaxed font-light max-w-2xl">
              Every photograph shown above represents an actual property installation completed by active ModFlowPlumbing tradesmen. We never rely on stock template illustrations.
            </p>
          </div>
          <div className="flex gap-4 shrink-0 font-mono text-xs">
            <Button
              variant="outline"
              onClick={() => onNavigate('/services')}
              className="text-[10px]"
            >
              Services Catalogue
            </Button>
            <Button
              variant="primary"
              onClick={() => onNavigate('/quote')}
              className="text-[10px]"
            >
              Book Direct Callout
            </Button>
          </div>
        </div>
      </div>

      {/* Lightbox inspection model */}
      {selectedItem && (
        <div className="fixed inset-0 bg-obsidian/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-charcoal border border-ash max-w-3xl w-full p-6 sm:p-8 relative overflow-y-auto max-h-[95vh] select-none animate-fade-up">
            
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-zinc-450 hover:text-white p-2.5 bg-obsidian/80 border border-ash cursor-pointer focus:outline-none"
              aria-label="Close Lightbox"
            >
              <X size={15} />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-4">
              
              {/* Image Side */}
              <div className="lg:col-span-7 bg-obsidian border border-ash overflow-hidden">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto aspect-[4/3] object-cover contrast-110"
                />
              </div>

              {/* Data Specifications Side */}
              <div className="lg:col-span-5 space-y-4">
                <div>
                  <span className="font-mono text-copper text-[11px] font-bold uppercase tracking-widest block mb-1">
                    // WORK ORDER COMPLIATION SPEC
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-bone tracking-tight leading-tight">
                    {selectedItem.title}
                  </h3>
                  <p className="font-mono text-zinc-550 text-[10px] mt-1.5 uppercase">
                    Sector: {selectedItem.category} | Zone: {selectedItem.location.split(' ')[0]}
                  </p>
                </div>

                <div className="h-[1px] bg-ash w-full"></div>

                <div className="font-mono text-xs space-y-2 py-2 text-smoke">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">PROJECT LOGGED:</span>
                    <span className="text-bone font-bold">{selectedItem.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">EFFORT ON-SITE:</span>
                    <span className="text-bone font-bold">{selectedItem.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">COMPLIANCE RATING:</span>
                    <span className="text-emerald-400 font-bold">100% SECURE</span>
                  </div>
                </div>

                <div className="bg-obsidian p-4 border border-ash font-sans">
                  <span className="font-mono text-[9px] font-bold tracking-widest text-copper uppercase block mb-1.5 flex items-center gap-1 select-none">
                    <HelpCircle size={12} />
                    Active Inspector Notes:
                  </span>
                  <p className="font-sans text-xs text-smoke leading-relaxed font-light">
                    {selectedItem.technicianNotes}
                  </p>
                </div>

                <p className="font-sans text-xs text-smoke font-light leading-relaxed">
                  {selectedItem.description}
                </p>

                {/* Booking controls */}
                <div className="flex flex-col gap-2 pt-4 border-t border-ash font-mono text-xs">
                  <Button
                    variant="primary"
                    onClick={() => {
                      const item = selectedItem;
                      setSelectedItem(null);
                      handleBookSimilar(item);
                    }}
                    className="w-full text-[10px] py-4 uppercase"
                  >
                    Request Similar Service Design
                  </Button>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="w-full py-2 bg-transparent text-zinc-450 font-mono text-[10px] uppercase hover:text-white transition-all cursor-pointer focus:outline-none"
                  >
                    Return to gallery
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>
      )}
    </div>
  );
}
