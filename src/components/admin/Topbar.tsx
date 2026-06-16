import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface TopbarProps {
  title: string;
}

export default function Topbar({ title }: TopbarProps) {
  return (
    <header className="h-16 bg-charcoal border-b border-ash flex justify-between items-center px-6 sm:px-8 font-mono select-none">
      <div className="flex items-center gap-3">
        <h1 className="font-mono text-xs sm:text-sm text-bone uppercase tracking-widest text-copper font-medium">
          // {title}
        </h1>
      </div>

      <div className="flex items-center gap-4 text-xs font-medium text-smoke">
        <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[9px] tracking-wider uppercase">
          <span className="flex h-1.5 w-1.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          GRID ENGINE LIVE
        </div>

        <div className="h-4 w-[1px] bg-ash" />

        <div className="flex items-center gap-1.5 text-bone bg-obsidian px-3 py-1.5 border border-ash text-[9px] font-mono tracking-widest uppercase">
          <ShieldCheck size={12} className="text-copper" />
          GAS SAFE ID: 894320
        </div>
      </div>
    </header>
  );
}
