import React, { ElementType } from 'react';

interface StatCardProps {
  label: string;
  value: string | number;
  subtext: string;
  icon: ElementType;
  color?: string;
}

export default function StatCard({ label, value, subtext, icon: Icon, color = 'text-copper' }: StatCardProps) {
  return (
    <div className="bg-charcoal border border-ash p-6 relative select-none font-mono">
      <div className="flex justify-between items-start">
        <div>
          <span className="text-zinc-500 uppercase text-[9px] tracking-wider block">// {label}</span>
          <span className="font-serif font-semibold text-2xl sm:text-3xl text-bone mt-2 block tracking-tight">
            {value}
          </span>
        </div>
        <div className={`p-2.5 bg-obsidian border border-ash ${color}`}>
          <Icon size={14} />
        </div>
      </div>

      <p className="text-[10px] text-smoke mt-4 border-t border-ash pb-0 pt-3 leading-relaxed font-sans font-light">
        {subtext}
      </p>
    </div>
  );
}
