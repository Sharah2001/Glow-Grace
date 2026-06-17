import React, { lazy, Suspense } from 'react';
import SEO from '../components/ui/SEO';
import Hero from '../components/home/Hero';
import JobTicker from '../components/home/JobTicker';
import Services from '../components/home/Services';
import WhyUs from '../components/home/WhyUs';

// Lazy load below-the-fold components for incredible performance gains
const ProcessSteps = lazy(() => import('../components/home/ProcessSteps'));
const FeaturedWork = lazy(() => import('../components/home/FeaturedWork'));
const CoverageMap = lazy(() => import('../components/home/CoverageMap'));
const Testimonials = lazy(() => import('../components/home/Testimonials'));
const BookingCTA = lazy(() => import('../components/home/BookingCTA'));
const EmergencyCTA = lazy(() => import('../components/home/EmergencyCTA'));

interface HomeProps {
  onNavigate: (path: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="relative overflow-hidden w-full">
      <SEO 
        title="24/7 Premium Plumbing & Boiler Repair"
        description="ModFlowPlumbing provides professional Gas Safe registered plumbers and heating engineers across London and the South East. Rapid emergency response, transparent fixed pricing."
        canonicalPath="/"
      />

      {/* 1. Hero landing section (Eager - Critical Paint) */}
      <Hero onNavigate={onNavigate} />

      {/* 2. Signature Live Job Ticker bar (Eager - High Priority) */}
      <JobTicker />

      {/* 3. Tradesman Services Grid preview (Eager - Above fold / Scroll entry point) */}
      <Services onNavigate={onNavigate} />

      {/* 4. Why choose us value strip (Eager) */}
      <WhyUs />

      {/* Below-the-fold components are loaded asynchronously via separate individual Suspense handlers for on-demand non-blocking render */}
      <Suspense fallback={<div className="h-48 bg-obsidian border-b border-ash animate-pulse" />}>
        {/* 5. Sequence and checklist of operations */}
        <ProcessSteps />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-obsidian border-b border-ash animate-pulse" />}>
        {/* 6. Dynamic Before/After slider showcase */}
        <FeaturedWork />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-obsidian border-b border-ash animate-pulse" />}>
        {/* 7. Postcode area coverage map & verification */}
        <CoverageMap />
      </Suspense>

      <Suspense fallback={<div className="h-48 bg-obsidian border-b border-ash animate-pulse" />}>
        {/* 8. Client testimonials review carousel */}
        <Testimonials />
      </Suspense>

      <Suspense fallback={<div className="h-48 bg-obsidian border-b border-ash animate-pulse" />}>
        {/* 9. Premium Scheduled Booking CTA */}
        <BookingCTA onNavigate={onNavigate} />
      </Suspense>

      <Suspense fallback={<div className="h-48 bg-obsidian border-b border-ash animate-pulse" />}>
        {/* 10. Urgency Emergency Action CTA banner */}
        <EmergencyCTA />
      </Suspense>
    </div>
  );
}
