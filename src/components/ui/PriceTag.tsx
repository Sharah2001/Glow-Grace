import React from 'react';
import { cn } from '../../lib/utils';

interface PriceTagProps {
  price: string;
  className?: string;
}

export default function PriceTag({ price, className = '' }: PriceTagProps) {
  return (
    <span className={cn(
      "inline-block font-mono text-[11px] font-medium px-2.5 py-1.5 bg-obsidian text-copper border border-ash tracking-wider select-none",
      className
    )}>
      {price}
    </span>
  );
}
