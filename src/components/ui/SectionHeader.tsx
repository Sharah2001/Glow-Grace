import React from 'react';
import { cn } from '../../lib/utils';

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
    <div className={cn(
      "mb-12 md:mb-16",
      isCenter ? 'text-center' : 'text-left',
      className
    )}>
      <span className="font-mono text-copper font-medium uppercase tracking-widest text-[11px] sm:text-xs block mb-3">
        {eyebrow}
      </span>
      <h2 className="font-serif font-semibold text-bone text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight mb-4 select-none">
        {heading}
      </h2>
      {subtext && (
        <p className={cn(
          "font-sans text-smoke text-sm sm:text-base max-w-2xl leading-relaxed font-light",
          isCenter ? 'mx-auto' : ''
        )}>
          {subtext}
        </p>
      )}
    </div>
  );
}
