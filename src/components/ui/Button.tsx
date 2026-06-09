import React, { ReactNode } from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost' | 'secondary' | 'pill';
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-body font-semibold uppercase tracking-[0.18em] text-[11px] transition-all duration-300 ease-out focus:outline-none focus:ring-1 focus:ring-gold disabled:opacity-50 disabled:cursor-not-allowed justify-center items-center inline-flex';

  const variants = {
    primary: 'bg-gold hover:bg-gold/90 text-white border border-gold px-8 py-3.5 rounded-none hover:shadow-xs',
    secondary: 'bg-onyx hover:bg-onyx/90 text-white border border-onyx px-8 py-3.5 rounded-none',
    outline: 'bg-transparent hover:bg-gold hover:text-white border border-gold text-gold px-8 py-3.5 rounded-none',
    ghost: 'bg-transparent text-onyx hover:bg-gold/10 border border-transparent px-8 py-3.5 rounded-none',
    pill: 'bg-gold hover:bg-[#B89640] text-white border border-gold rounded-full px-8 py-2.5 shadow-xs transition-colors',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
