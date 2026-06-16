import React from 'react';
import SEO from '../components/ui/SEO';
import Hero from '../components/home/Hero';
import JobTicker from '../components/home/JobTicker';
import Services from '../components/home/Services';
import WhyUs from '../components/home/WhyUs';
import ProcessSteps from '../components/home/ProcessSteps';
import FeaturedWork from '../components/home/FeaturedWork';
import CoverageMap from '../components/home/CoverageMap';
import Testimonials from '../components/home/Testimonials';
import BookingCTA from '../components/home/BookingCTA';
import EmergencyCTA from '../components/home/EmergencyCTA';

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

      {/* 1. Hero landing section */}
      <Hero onNavigate={onNavigate} />

      {/* 2. Signature Live Job Ticker bar */}
      <JobTicker />

      {/* 3. Tradesman Services Grid preview */}
      <Services onNavigate={onNavigate} />

      {/* 4. Why choose us value strip */}
      <WhyUs />

      {/* 5. Sequence and checklist of operations */}
      <ProcessSteps />

      {/* 6. Dynamic Before/After slider showcase */}
      <FeaturedWork />

      {/* 7. Postcode area coverage map & verification */}
      <CoverageMap />

      {/* 8. Client testimonials review carousel */}
      <Testimonials />

      {/* 9. Premium Scheduled Booking CTA */}
      <BookingCTA onNavigate={onNavigate} />

      {/* 10. Urgency Emergency Action CTA banner */}
      <EmergencyCTA />
    </div>
  );
}
