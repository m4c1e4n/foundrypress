import React from 'react';
import { WhyWriteABook } from '../components/WhyWriteABook';

export const WhyWritePage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="bg-[#003B46] text-white py-16 px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[#7A0000] font-semibold text-xs tracking-[0.2em] uppercase">
            Impact, Authority & Legacy
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
            Why Write A Book?
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-sans-clean leading-relaxed">
            A published book is the ultimate card of credibility and a permanent record for generations to come.
          </p>
        </div>
      </div>

      <WhyWriteABook />
    </div>
  );
};
