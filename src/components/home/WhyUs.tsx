import { Award, Compass, Heart } from 'lucide-react';
import AnimatedCounter from '../ui/AnimatedCounter';

export default function WhyUs() {
  const values = [
    {
      id: 'years',
      icon: Award,
      title: 'Decades of Mastery',
      number: 16,
      suffix: '+ Years',
      text: 'Our hand-picked team of bridal directors and styling specialists hold deep expertise in traditional South Asian heritage designs, temple jeweller ornaments, and modern international cosmetology.',
    },
    {
      id: 'products',
      icon: Compass,
      title: 'Therapeutic Botanical Tech',
      number: 45,
      suffix: ' Premium Brands',
      text: 'Sacred Ayurvedic wisdom meets medical-grade science. We exclusively formulate using hand-ground sandalwood, organic wild turmeric (manjal), cold-pressed virgin oils, and premium toxin-free clinical skincare.',
    },
    {
      id: 'satisfaction',
      icon: Heart,
      title: 'Devoted Clientele',
      number: 100,
      suffix: '% Devotion',
      text: 'Every beauty choreograph is centered entirely around your ultimate nervous-system rest, resulting in radiant bridal glows, comfortable custom drapes, and consistent aesthetic sanctuary in Jaffna.',
    },
  ];

  return (
    <section className="bg-ivory border-t border-b border-champagne/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-0 relative z-10">
        {/* Crisp grid layout with thin borders based on Clean Minimalism Design HTML */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id} 
                className="flex flex-col items-center justify-center text-center p-12 md:p-16 border-b md:border-b-0 md:border-r border-champagne/20 last:border-b-0 md:last:border-r-0 group transition-all duration-300 hover:bg-[#FAF7F2]"
              >
                {/* Micro Icon Accent */}
                <div className="mb-4 text-gold/80 group-hover:text-gold transition-colors duration-300">
                  <Icon size={18} className="stroke-[1.25]" />
                </div>

                {/* Big Elegant Stat Number in display Georgia font */}
                <div className="flex items-baseline justify-center mb-1">
                  <span className="text-4xl md:text-5xl font-light text-gold font-display tracking-tight">
                    <AnimatedCounter end={item.number} duration={1500} />
                  </span>
                  <span className="text-lg md:text-xl font-light text-gold font-display italic ml-0.5">
                    {item.suffix.replace('+ Years', '+').replace(' Premium Brands', '').replace('% Devotion', '%')}
                  </span>
                </div>

                {/* Tracking Label */}
                <span className="text-[10px] uppercase tracking-[0.25em] text-mist font-semibold mb-4 block">
                  {item.title}
                </span>

                {/* Refined clean description */}
                <p className="font-body text-xs font-light leading-relaxed text-onyx/75 max-w-xs">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
