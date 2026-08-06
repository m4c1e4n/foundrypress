import React from 'react';
import { WhatYouReceive } from '../components/WhatYouReceive';

export const DeliverablesPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="bg-[#0B1B3D] text-white py-16 px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[#16A34A] font-semibold text-xs tracking-[0.2em] uppercase">
            Complete Publishing Deliverables
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
            What You Receive
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-sans-clean leading-relaxed">
            Every client receives heirloom physical hardcovers, digital eBook files, formatted PDFs, and full intellectual property ownership rights.
          </p>
        </div>
      </div>

      <WhatYouReceive />
    </div>
  );
};
