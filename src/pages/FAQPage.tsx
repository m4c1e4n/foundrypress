import React from 'react';
import { FAQ } from '../components/FAQ';

export const FAQPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="bg-[#7A0000] text-white py-16 px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-red-100 font-bold text-xs tracking-[0.2em] uppercase">
            Questions & Clarity
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-sans-clean leading-relaxed">
            Find answers to common questions about ghostwriting NDA security, interview schedules, Accra office visits, and printing timelines.
          </p>
        </div>
      </div>

      <FAQ />
    </div>
  );
};
