interface SectionHeaderProps {
  eyebrow: string;
  heading: string;
  subtext?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  heading,
  subtext,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center' : 'text-left'} ${className}`}>
      <span className="font-display italic text-gold uppercase tracking-[0.35em] text-[10px] sm:text-xs block mb-3 font-semibold">
        {eyebrow}
      </span>
      <h2 className="font-display font-light text-onyx text-3xl sm:text-4xl md:text-5xl tracking-tight leading-normal mb-4">
        {heading}
      </h2>
      {subtext && (
        <p className={`font-body text-mist text-sm sm:text-base max-w-xl font-light leading-relaxed ${isCenter ? 'mx-auto' : ''}`}>
          {subtext}
        </p>
      )}
    </div>
  );
}
