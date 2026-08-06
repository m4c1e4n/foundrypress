import React from 'react';
import { WHY_WRITE_A_BOOK_CONTENT } from '../data/content';
import { Bookmark, Award, Feather, History } from 'lucide-react';

export const WhyWriteABook: React.FC = () => {
  const icons = [History, Award, Feather, Bookmark];

  return (
    <section id="why-write" className="relative">
      {/* Dark Navy Hero Banner matching requested design */}
      <div className="py-24 lg:py-32 bg-gradient-to-b from-[#0B1B3D] via-[#081530] to-[#050E21] text-white px-6 lg:px-12 border-b border-blue-900">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-semibold tracking-tight leading-[1.15]">
            A book is more than pages
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-200 font-sans-clean font-medium leading-relaxed max-w-3xl mx-auto">
            It is an archive of a lifetime. It is authority in a crowded marketplace. It is the only gift that truly lives forever.
          </p>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 font-sans-clean leading-relaxed font-normal max-w-2xl mx-auto pt-2">
            A book creates a permanent anchor in a world of fleeting digital noise. Whether for your children, your clients, or your colleagues—the written word carries a weight that speech cannot replicate.
          </p>
        </div>
      </div>

      {/* 4 Pillars Grid & Quote Box on White Canvas */}
      <div className="py-20 lg:py-28 bg-white px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#16A34A]">
              <span className="w-2 h-0.5 bg-[#16A34A]" />
              <span>Core Value & Purpose</span>
              <span className="w-2 h-0.5 bg-[#16A34A]" />
            </div>
            <h3 className="font-serif text-3xl md:text-4xl text-[#0B1B3D] font-semibold">
              Why Leaders & Legacy Builders Write
            </h3>
          </div>

          {/* 4 Core Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_WRITE_A_BOOK_CONTENT.reasons.map((reason, index) => {
              const IconComponent = icons[index % icons.length];
              return (
                <div
                  key={reason.title}
                  className="bg-[#F8FAFC] border border-slate-200 p-8 rounded-xl space-y-4 hover:border-[#0B1B3D] transition-all shadow-xs hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-full bg-[#0B1B3D]/10 text-[#0B1B3D] flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-[#0B1B3D]" />
                  </div>

                  <h3 className="font-serif text-2xl text-[#0B1B3D] font-semibold">
                    {reason.title}
                  </h3>

                  <p className="text-sm text-slate-600 font-sans-clean leading-relaxed font-normal">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Literary Quote Box */}
          <div className="mt-20 max-w-3xl mx-auto text-center p-10 bg-[#F8FAFC] border border-slate-200 rounded-xl shadow-xs">
            <p className="font-serif text-2xl md:text-3xl italic text-[#0B1B3D] leading-relaxed mb-4">
              “The stories we leave behind are the only real bridges across generations. Give your loved ones the gift of hearing your voice forever.”
            </p>
            <span className="text-xs uppercase tracking-[0.2em] text-[#16A34A] font-semibold">
              Foundry Press Editorial Board
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

