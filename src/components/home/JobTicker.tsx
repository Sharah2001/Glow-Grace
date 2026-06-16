import React from 'react';
import { MOCK_TICKERS } from '../../lib/constants';

export default function JobTicker() {
  // Duplicate for seamless infinite scrolling
  const tickers = [...MOCK_TICKERS, ...MOCK_TICKERS, ...MOCK_TICKERS];

  return (
    <div className="bg-charcoal border-b border-ash h-12 flex items-center overflow-hidden relative select-none">
      {/* Decorative vertical gradients at left/right edges */}
      <div className="absolute top-0 left-0 bottom-0 w-12 bg-gradient-to-r from-charcoal to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-charcoal to-transparent z-10 pointer-events-none" />

      {/* Marquee Wrapper */}
      <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap gap-16 text-[11px] sm:text-xs">
        {tickers.map((ticker, index) => (
          <div key={index} className="flex items-center gap-2 font-mono uppercase tracking-wider text-copper">
            <span className="text-brass-glow">✓</span>
            <span>{ticker.replace("✓ ", "")}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
