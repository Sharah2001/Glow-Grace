import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0E1113', // Page background
        charcoal: '#1A1F23', // Cards/Section surfaces
        ash: '#2C333A',      // Borders/Dividers
        copper: '#D98E5C',   // Accent colors
        'brass-glow': '#F0C896', // Highlights
        bone: '#EDEAE4',     // Primary light text
        smoke: '#9CA3AA',    // Muted text
        'ember-red': '#C24A35', // Emergency highlight
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'fade-up': 'fadeSlideUp 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 2.2s ease-in-out infinite',
        'pulse-ember': 'pulseEmber 2.2s ease-in-out infinite',
        'draw-line': 'drawLine 1s ease-out forwards',
        'image-zoom': 'imageZoom 15s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};

export default config;
