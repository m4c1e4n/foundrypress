import React from 'react';
import { WhatWeDo } from '../components/WhatWeDo';
import { WhatYouReceive } from '../components/WhatYouReceive';
import { ServiceItem } from '../types';

interface ServicesPageProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultation: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onSelectService, onOpenConsultation }) => {
  return (
    <div className="pt-24 pb-16">
      <div className="bg-[#003B46] text-white py-16 px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[#7A0000] font-semibold text-xs tracking-[0.2em] uppercase">
            End-to-End Publishing Solutions
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
            Our Publishing Services
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-sans-clean leading-relaxed">
            From recorded interviews to editorial drafting, custom typography, cover design, and physical printing in Accra, Ghana.
          </p>
        </div>
      </div>

      <WhatWeDo onSelectService={onSelectService} />

      <WhatYouReceive />

      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        <button
          onClick={onOpenConsultation}
          className="px-8 py-3.5 bg-[#7A0000] hover:bg-[#5C0000] text-white font-bold text-sm tracking-wide rounded-full transition-all cursor-pointer shadow-lg"
        >
          Discuss Your Custom Book Package
        </button>
      </div>
    </div>
  );
};
