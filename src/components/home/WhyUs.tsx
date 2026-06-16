import React from 'react';
import { ShieldCheck, CheckCircle2, Coins, Award } from 'lucide-react';

export default function WhyUs() {
  const benefits = [
    {
      id: 'gassafe',
      icon: ShieldCheck,
      title: 'Gas Safe Registered',
      badge: 'Reg. #123456',
      text: 'Fully credentialed to execute commercial and residential gas repairs legally and safely under UK regulation.',
    },
    {
      id: 'insured',
      icon: CheckCircle2,
      title: 'Fully Insured',
      badge: '£5M Liability Coverage',
      text: 'Complete operational confidence. Every single installation is fully backed by premier tradesman coverage.',
    },
    {
      id: 'nocallout',
      icon: Coins,
      title: 'No Call-Out Fee',
      badge: '£0 Traveling Cost',
      text: 'Our diagnostic site inspections are transparent. You only pay for the precise parts and repairs required.',
    },
    {
      id: 'guarantee',
      icon: Award,
      title: '1-Year Guarantee',
      badge: 'Warrantied Excellence',
      text: 'Pristine copper tradesman joins and all fitted equipment are protected by our direct 12-month assurance.',
    },
  ];

  return (
    <section className="bg-charcoal text-bone border-t border-b border-ash relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-0 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-ash">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id} 
                className="flex flex-col items-center justify-center text-center p-10 group transition-all duration-300 hover:bg-obsidian/30"
              >
                {/* Highlight Circle with Copper Glow */}
                <div className="mb-5 w-12 h-12 rounded-full border border-copper/30 bg-obsidian text-copper flex items-center justify-center copper-border-glow group-hover:border-copper group-hover:text-brass-glow transition-all duration-300">
                  <Icon size={18} className="stroke-[1.5]" />
                </div>

                {/* Info Badge */}
                <span className="font-mono text-[9px] font-medium text-copper bg-obsidian px-2.5 py-1 border border-ash uppercase tracking-wider mb-3.5 block">
                  {item.badge}
                </span>

                {/* Section Title */}
                <span className="font-serif font-medium text-base text-bone tracking-tight mb-2.5 block">
                  {item.title}
                </span>

                {/* Description */}
                <p className="font-sans text-xs text-smoke leading-relaxed max-w-xs font-light">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
