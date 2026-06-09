import Button from '../ui/Button';

interface BookingCTAProps {
  onNavigate: (path: string) => void;
}

export default function BookingCTA({ onNavigate }: BookingCTAProps) {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-r from-onyx via-[#231717] to-onyx border-y border-gold/10">
      {/* Self-contained CSS for floating particles */}
      <style>{`
        @keyframes floatSlow1 {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.15; }
          50% { transform: translateY(-30px) translateX(15px); opacity: 0.45; }
        }
        @keyframes floatSlow2 {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.1; }
          50% { transform: translateY(-40px) translateX(-20px); opacity: 0.4; }
        }
        @keyframes floatSlow3 {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
          50% { transform: translateY(-25px) translateX(-10px); opacity: 0.5; }
        }
        .particle-1 { animation: floatSlow1 8s ease-in-out infinite; }
        .particle-2 { animation: floatSlow2 11s ease-in-out infinite; }
        .particle-3 { animation: floatSlow3 9s ease-in-out infinite; }
        .particle-4 { animation: floatSlow1 13s ease-in-out infinite; }
        .particle-5 { animation: floatSlow2 7s ease-in-out infinite; }
        .particle-6 { animation: floatSlow3 10s ease-in-out infinite; }
      `}</style>

      {/* Subtle Animated Particles (6 Floating Divs) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="particle-1 absolute top-[20%] left-[15%] w-3 h-3 rounded-full bg-champagne blur-[1px]" />
        <div className="particle-2 absolute top-[60%] left-[8%] w-5 h-5 rounded-full bg-blush blur-[2px]" />
        <div className="particle-3 absolute top-[35%] right-[12%] w-4 h-4 rounded-full bg-champagne blur-[1px]" />
        <div className="particle-4 absolute top-[75%] right-[25%] w-2 h-2 rounded-full bg-gold blur-[0.5px]" />
        <div className="particle-5 absolute top-[15%] right-[30%] w-6 h-6 rounded-full bg-champagne/40 blur-[3px]" />
        <div className="particle-6 absolute top-[80%] left-[45%] w-3 h-3 rounded-full bg-blush blur-[1px]" />
      </div>

      {/* Gold Ring Design */}
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/5 rounded-full pointer-events-none z-0" />
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-champagne/5 rounded-full pointer-events-none z-0" />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <span className="font-accent text-gold text-xs sm:text-sm tracking-[0.3em] uppercase block mb-4 font-semibold animate-pulse">
          Bespoke Appointment Selection
        </span>

        {/* Large Elegant Headline */}
        <h2 className="font-display font-medium text-white text-3xl sm:text-5xl md:text-6xl tracking-wide leading-tight mb-6">
          Are You Ready to Transform <br />
          <span className="italic font-normal">Your Self-Care Ritual?</span>
        </h2>

        {/* Gold Accent separator */}
        <div className="h-[1px] w-20 bg-gold mx-auto mb-8" />

        {/* Narrative text */}
        <p className="font-body text-[#FAF7F2]/80 text-sm sm:text-base max-w-xl mx-auto mb-10 font-light leading-relaxed">
          Step into a serene space optimized entirely for deep somatic relaxation and high-fidelity aesthetics. Safe, botanically driven therapies await you.
        </p>

        {/* Booking Action */}
        <div className="animate-bounce inline-block">
          <Button
            variant="primary"
            onClick={() => onNavigate('/booking')}
            className="text-white bg-gold hover:bg-gold/90 border-gold px-10 py-5 tracking-widest text-sm hover:shadow-xl hover:shadow-gold/10 hover:scale-[1.03] duration-300"
          >
            Book Your Appointment
          </Button>
        </div>
      </div>
    </section>
  );
}
