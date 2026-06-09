import { TEAM } from '../../lib/constants';
import SectionHeader from '../ui/SectionHeader';

export default function Team() {
  return (
    <section id="about" className="py-24 bg-ivory/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <SectionHeader
          eyebrow="The Artisans"
          heading="Handcrafted Beauty by Master Minds"
          subtext="Meet the visionary directors, dermals, and visual artists dedicated to mapping and magnifying your natural symmetry."
        />

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {TEAM.map((member) => (
            <div
              key={member.id}
              className="group relative overflow-hidden bg-white border border-champagne/10 shadow-sm flex flex-col h-[500px]"
            >
              {/* Image Container with zoom */}
              <div className="w-full h-full relative overflow-hidden shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />

                {/* Shimmer overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/90 via-onyx/30 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-500" />

                {/* Overlay with Bio - slides up on hover */}
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 transform translate-y-[35px] group-hover:translate-y-0 transition-transform duration-700 ease-out flex flex-col justify-end h-[60%]">
                  {/* Name */}
                  <h3 className="font-display font-medium text-white text-xl md:text-2xl tracking-wide mb-1">
                    {member.name}
                  </h3>

                  {/* Role */}
                  <p className="font-accent text-gold text-xs tracking-widest uppercase font-semibold mb-4">
                    {member.role}
                  </p>

                  {/* Bio snippet */}
                  <p className="font-body text-white/80 text-xs md:text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-4">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
