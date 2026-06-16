import React from 'react';
import { Shield, CheckCircle, Star, PhoneCall } from 'lucide-react';
import { cn } from '../../lib/utils';

interface BadgeProps {
  type: 'gas-safe' | 'insured' | 'rating' | 'emergency';
  text?: string;
  className?: string;
}

export default function Badge({ type, text, className = '' }: BadgeProps) {
  if (type === 'gas-safe') {
    return (
      <span className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 bg-charcoal/60 text-copper border border-copper/30 font-mono text-[10px] sm:text-xs font-bold tracking-wider uppercase select-none glass-badge",
        className
      )}>
        <Shield size={12} className="text-copper shrink-0 animate-pulse" />
        {text || 'Gas Safe Reg. #123456'}
      </span>
    );
  }

  if (type === 'insured') {
    return (
      <span className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 bg-charcoal/60 text-smoke border border-ash/50 font-mono text-[10px] sm:text-xs font-semibold tracking-wider uppercase select-none glass-badge",
        className
      )}>
        <CheckCircle size={12} className="text-brass-glow shrink-0" />
        {text || '£5M Public Liability'}
      </span>
    );
  }

  if (type === 'rating') {
    return (
      <span className={cn(
        "inline-flex items-center gap-1 px-3 py-1 bg-charcoal/60 text-brass-glow border border-brass-glow/20 font-mono text-[10px] sm:text-xs font-bold tracking-wider uppercase select-none glass-badge",
        className
      )}>
        <Star size={12} className="fill-brass-glow text-transparent shrink-0" />
        {text || '5★ Trustpilot Rated'}
      </span>
    );
  }

  // Emergency Badge
  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 px-3 py-1 bg-ember-red/10 text-ember-red border border-ember-red/30 font-mono text-[10px] sm:text-xs font-bold tracking-wider uppercase select-none animate-pulse-ember",
      className
    )}>
      <PhoneCall size={12} className="shrink-0" />
      {text || '24/7 CALLOUT'}
    </span>
  );
}
