import React from 'react';
import { cn } from '../../lib/utils';

interface ImageCardProps {
  src: string;
  alt: string;
  caption?: string;
  subCaption?: string;
  className?: string;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'auto';
  glow?: boolean;
}

export default function ImageCard({
  src,
  alt,
  caption,
  subCaption,
  className = '',
  aspectRatio = 'video',
  glow = false
}: ImageCardProps) {
  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    auto: 'h-auto',
  };

  return (
    <div className={cn(
      "group relative overflow-hidden bg-charcoal border border-ash transition-all duration-500 hover:border-copper/40",
      glow && "copper-glow",
      className
    )}>
      {/* Background container for the zoom effect */}
      <div className={cn("overflow-hidden w-full relative", aspectClasses[aspectRatio])}>
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Dark Vignette / Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90"></div>
      </div>

      {/* Caption Content */}
      {(caption || subCaption) && (
        <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex flex-col pointer-events-none">
          {subCaption && (
            <span className="font-mono text-copper text-[10px] uppercase tracking-widest mb-1.5">
              {subCaption}
            </span>
          )}
          {caption && (
            <h3 className="font-serif font-medium text-bone text-lg md:text-xl tracking-tight">
              {caption}
            </h3>
          )}
        </div>
      )}
    </div>
  );
}
