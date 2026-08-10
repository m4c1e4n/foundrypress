import React from 'react';
import { HowItWorks } from '../components/HowItWorks';

interface HowItWorksPageProps {
  onOpenConsultation: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="pt-24 pb-16">
      <div className="bg-[#003B46] text-white py-16 px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[#7A0000] font-semibold text-xs tracking-[0.2em] uppercase">
            Four-Phase Publishing Journey
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
            How It Works
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-sans-clean leading-relaxed">
            Zero writing required on your part. We record your spoken interviews, edit the manuscript, design the hardcover layout, and print your physical copies.
          </p>
        </div>
      </div>

      <HowItWorks onOpenConsultation={onOpenConsultation} />
    </div>
  );
};
