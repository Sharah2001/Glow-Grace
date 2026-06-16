import React, { ReactNode } from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'emergency' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  id?: string;
}

export default function Button({
  children,
  variant = 'primary',
  className,
  id,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-sans font-medium uppercase tracking-wider text-xs px-6 py-3.5 transition-all duration-300 ease-out focus:outline-none focus:ring-1 focus:ring-copper disabled:opacity-50 disabled:cursor-not-allowed justify-center items-center inline-flex select-none cursor-pointer';

  const variants = {
    primary: 'bg-copper border border-copper text-obsidian hover:bg-[#e49c6d] hover:border-[#e49c6d] shadow-lg copper-glow',
    emergency: 'bg-ember-red border border-ember-red text-bone hover:bg-opacity-90 animate-pulse-ember font-semibold shadow-lg',
    secondary: 'bg-charcoal border border-ash text-bone hover:border-copper hover:text-copper shadow-sm',
    outline: 'bg-transparent border border-ash text-bone hover:border-copper hover:text-copper',
    ghost: 'bg-transparent text-smoke hover:bg-charcoal hover:text-bone border border-transparent',
  };

  return (
    <button
      id={id}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
