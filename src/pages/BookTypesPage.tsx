import React from 'react';
import { TypesOfBooks } from '../components/TypesOfBooks';

export const BookTypesPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="bg-[#003B46] text-white py-16 px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[#7A0000] font-semibold text-xs tracking-[0.2em] uppercase">
            Curated Genres & Formats
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
            Types of Books We Craft
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-sans-clean leading-relaxed">
            Whether you want to document a family legacy, publish a business leader memoir, or share professional thought leadership.
          </p>
        </div>
      </div>

      <TypesOfBooks />
    </div>
  );
};
