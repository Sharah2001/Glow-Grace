import React from 'react';
import { PhoneCall, Eye, FileText, CheckCircle } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

export default function ProcessSteps() {
  const steps = [
    {
      num: '01',
      title: 'Call or Book Online',
      icon: PhoneCall,
      description: 'Request an emergency engineer online or book a scheduled repair. Our central London desk is active 24/7.',
    },
    {
      num: '02',
      title: 'On-site Diagnosis',
      icon: Eye,
      description: 'An expert Gas Safe engineer arrives to thoroughly trace systems, analyze faults, and isolate pipe networks safely.',
    },
    {
      num: '03',
      title: 'Fixed Transparent Quote',
      icon: FileText,
      description: 'Before turning a single valve, we present a firm, itemized quote on paper. The amount we estimate is exactly what you pay.',
    },
    {
      num: '04',
      title: 'Job Done + Guarantee',
      icon: CheckCircle,
      description: 'Once repairs are complete, we run full pressure tests and email your official Gas Safe certification and 12-month warrantee.',
    },
  ];

  return (
    <section className="py-24 bg-obsidian border-b border-ash relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeader
          eyebrow="Our Workflow"
          heading="A Seamless Standard, Start to Finish"
          subtext="No surprises or hidden fees. We follow a clear, professional operating framework on every scheduled or emergency callout."
        />

        {/* Steps Timeline Row */}
        <div className="relative mt-12">
          
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[44px] left-12 right-12 h-[1px] bg-ash z-0">
            {/* Animated drawing line filler */}
            <div className="h-full bg-copper shadow-[0_0_8px_rgba(217,142,92,0.8)] animate-draw-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="bg-charcoal border border-ash p-8 flex flex-col md:items-start select-none relative group hover:border-copper/40 transition-all duration-300">
                  
                  {/* Step Circle & Icon */}
                  <div className="flex items-center gap-4 lg:gap-0 lg:flex-col lg:items-start mb-5">
                    <div className="w-12 h-12 bg-obsidian text-copper flex items-center justify-center border border-ash group-hover:bg-copper group-hover:text-obsidian group-hover:border-copper transition-all duration-300 rounded-none shadow-[0_0_15px_rgba(217,142,92,0.05)]">
                      <Icon size={16} />
                    </div>

                    <div className="lg:mt-4">
                      <span className="font-mono text-xs font-medium text-copper block uppercase tracking-wider">
                        Step {step.num}
                      </span>
                    </div>
                  </div>

                  {/* Step Description */}
                  <h3 className="font-serif text-lg font-medium text-bone mt-1 mb-2 tracking-tight group-hover:text-copper transition-colors duration-200">
                    {step.title}
                  </h3>
                  
                  <p className="font-sans text-smoke text-xs sm:text-sm leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
