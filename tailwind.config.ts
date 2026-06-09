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
        blush: '#F2C4CE',
        champagne: '#EDD9A3',
        onyx: '#1A1A1A',
        ivory: '#FAF7F2',
        gold: '#C9A84C',
        mist: '#8E8E93',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Cormorant Garamond', 'serif'],
        body: ['var(--font-body)', 'DM Sans', 'sans-serif'],
        accent: ['var(--font-accent)', 'Italiana', 'serif'],
      },
      keyframes: {
        kenBurns: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.08)' },
        },
        marquee: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-50%)' },
        },
        floatUp: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeSlideUp: {
          'from': { opacity: '0', transform: 'translateY(24px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          'from': { backgroundPosition: '-200% 0' },
          'to': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'ken-burns': 'kenBurns 12s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'float': 'floatUp 3s ease-in-out infinite',
        'fade-up': 'fadeSlideUp 0.6s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
