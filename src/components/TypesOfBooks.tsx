import React, { useState } from 'react';
import { BOOK_CATEGORIES } from '../data/content';
import { BookCategory } from '../types';
import { BookMarked, Sparkles, Check } from 'lucide-react';

export const TypesOfBooks: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<BookCategory>(BOOK_CATEGORIES[0]);

  return (
    <section id="types-of-books" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#7A0000]">
            <span className="w-2 h-0.5 bg-[#7A0000]" />
            <span>Types of Books</span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#003B46] font-semibold leading-[1.12]">
            What Story Will You Publish?
          </h2>

          <p className="text-base md:text-lg text-slate-600 font-sans-clean leading-relaxed font-normal">
            We publish across all non-fiction and personal narrative genres. Select any category to view typical page lengths and chapter blueprints.
          </p>
        </div>

        {/* Tag / Pill List of 15 Book Categories matching reference pill buttons */}
        <div className="flex flex-wrap gap-2.5 md:gap-3 mb-12">
          {BOOK_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory.id === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? 'bg-[#003B46] text-white border-[#003B46] shadow-sm'
                    : 'bg-[#F8FAFC] text-slate-700 border-slate-200 hover:border-[#003B46] hover:bg-white'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Category Detail Inspector Card */}
        <div className="bg-[#F8FAFC] border border-slate-200 p-8 lg:p-12 rounded-2xl shadow-xs transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <BookMarked className="w-6 h-6 text-[#7A0000]" />
                <h3 className="font-serif text-3xl md:text-4xl text-[#003B46] font-semibold">
                  {selectedCategory.name}
                </h3>
              </div>

              <p className="text-base md:text-lg text-slate-700 font-sans-clean leading-relaxed font-normal">
                {selectedCategory.description}
              </p>

              <div className="pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-500 uppercase tracking-[0.18em] font-semibold block mb-1">Typical Length</span>
                  <span className="font-serif text-lg font-bold text-[#003B46]">{selectedCategory.typicalLength}</span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase tracking-[0.18em] font-semibold block mb-1">Target Audience</span>
                  <span className="text-sm font-semibold text-[#003B46]">{selectedCategory.targetAudience}</span>
                </div>
              </div>
            </div>

            {/* Example Topics */}
            <div className="lg:col-span-5 bg-white border border-slate-200 p-6 rounded-xl space-y-4 shadow-xs">
              <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#7A0000] flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#7A0000]" />
                <span>Example Chapter Focuses</span>
              </div>

              <ul className="space-y-2.5">
                {selectedCategory.exampleTopics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-800 font-sans-clean font-normal">
                    <Check className="w-4 h-4 text-[#7A0000] shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

