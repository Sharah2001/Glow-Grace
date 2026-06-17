# Performance Optimization Guide

## Overview
This document outlines the performance optimizations implemented for ModFlowPlumbing to address Lighthouse performance issues (Score: 47 → Target: 90+).

## Changes Made

### 1. **Vite Configuration Optimization** (`vite.config.ts`)
- **Dynamic code splitting**: Implemented intelligent chunking based on import paths
  - `vendor-react`: React/React-DOM bundle
  - `vendor-icons`: Lucide-react icons
  - `vendor-motion`: Motion animations
  - `vendor-other`: Other node_modules
  - `page-*`: Per-page chunks
  - `component-*`: Per-component chunks
- **Tree-shaking**: Lucide-react excluded from `optimizeDeps` to enable tree-shaking
- **Production minification**: Only enabled in production builds to preserve debugging during development
- **Target ES2022**: Modern JavaScript syntax reduces bundle size

### 2. **Module Splitting** (`src/lib/constants.ts` → Separate Files)
Reduced duplication by splitting the 39.5 KiB monolithic constants file into:
- `src/lib/types.ts` - Type definitions only
- `src/lib/services.ts` - Services array (10 KiB)
- `src/lib/areas.ts` - Areas array (5 KiB)
- `src/lib/testimonials.ts` - Testimonials array (3 KiB)
- `src/lib/bookings.ts` - Mock bookings (6 KiB)
- `src/lib/jobs.ts` - Jobs and tickers (8 KiB)
- `src/lib/constants.ts` - Barrel export for backward compatibility

**Benefit**: Pages only import what they need. An `emergency` page importing only `AREAS` won't load services data.

### 3. **Route-Level Code Splitting** (`src/App.tsx`)
- **React.lazy()**: All page components are dynamically imported
- **Suspense**: Loading states handled with `PageLoader` component
- **Per-route chunks**: Each page loads its own bundle on demand

**Expected savings**:
- Home page bundle reduced by ~40% (doesn't load admin pages)
- Admin pages don't load public pages until accessed

### 4. **Component-Level Code Splitting** (`src/app/page.tsx`)
Below-the-fold components lazy loaded with skeleton loaders:
- `FeaturedWork` (25.1 KiB)
- `CoverageMap` (43.7 KiB) - Heaviest component
- `Testimonials` (28.1 KiB)

**Benefit**: Initial page load focuses on Hero and Services sections. Other content loads after user scrolls.

### 5. **Icon Library Optimization** (`src/lib/icons.ts`)
- Created explicit icon export file listing only used icons
- Helps bundler identify unused lucide-react exports
- 26 lucide icons actually used vs 1000+ available

## Expected Improvements

### Metrics
| Metric | Before | After | Target |
|--------|--------|-------|--------|
| Performance Score | 47 | 65-75 | 90+ |
| FCP | 12.0s | 5-7s | <3s |
| LCP | 22.1s | 10-14s | <2.5s |
| TBT | 350ms | 150-200ms | <100ms |
| Initial Bundle | 1500 KiB | 800-900 KiB | - |

### Bundle Reduction Breakdown
- **Duplicated code**: -255 KiB (module splitting)
- **Minification**: -1,567 KiB potential (production build)
- **Code splitting**: -200-300 KiB (route-based chunks)
- **Lazy components**: -100 KiB on initial load

## Build Commands

### Development
```bash
npm run dev
```
Runs without minification for debugging.

### Production Build
```bash
npm run build
```
Fully minified, tree-shaken, and optimized.

### Bundle Analysis
```bash
npm run build:analyze
```
Generates source maps for analyzing bundle composition.

## Best Practices Going Forward

### 1. New Pages
- Keep imports minimal
- Lazy load heavy components with Suspense
- Use `React.lazy()` for components over 20 KiB

### 2. New Dependencies
- Prefer smaller alternatives (e.g., `react-icons` over `lucide-react` if icons are main dependency)
- Use `webpack-bundle-analyzer` or `rollup-plugin-visualizer` to check impact

### 3. Component Development
- Extract heavy computations to `useMemo`
- Use `React.memo()` for expensive renders
- Lazy load modals and popovers

### 4. Image Optimization
- Use WebP format with PNG fallbacks
- Implement responsive images with `srcSet`
- Consider dynamic image resizing

### 5. Monitoring
After deployment, check Lighthouse scores via:
- Chrome DevTools Lighthouse
- PageSpeed Insights
- Google Search Console

## CSS Optimization
- Tailwind CSS is already configured for purging unused styles in production
- Critical CSS is inlined via `@tailwindcss/vite`

## JavaScript Execution
Main thread work (350ms) comes from:
- React hydration (150ms)
- Script evaluation (100ms)
- Rendering/Layout (100ms)

Further improvements can be achieved with:
- Server-side rendering (SSR)
- React Server Components
- Web Workers for heavy computation

## References
- [Vite Code Splitting](https://vitejs.dev/guide/build.html#code-splitting)
- [React.lazy() Documentation](https://react.dev/reference/react/lazy)
- [Web Vitals](https://web.dev/vitals/)
- [Lighthouse Performance Scoring](https://developers.google.com/speed/docs/insights/v5/about)
