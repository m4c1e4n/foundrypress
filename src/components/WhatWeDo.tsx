import React from 'react';
import { SERVICES } from '../data/content';
import { ServiceItem } from '../types';
import { ArrowUpRight, BookOpen } from 'lucide-react';

interface WhatWeDoProps {
  onSelectService: (service: ServiceItem) => void;
}

export const WhatWeDo: React.FC<WhatWeDoProps> = ({ onSelectService }) => {
  return (
    <section id="what-we-do" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#7A0000]">
            <span>What We Do</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#7A0000] font-semibold leading-[1.12]">
            End-to-End Literary Services
          </h2>

          <p className="text-base md:text-lg text-slate-600 font-sans-clean font-normal leading-relaxed">
            From your very first recorded story to the moment you unbox your gold-foil stamped hardcovers, our comprehensive publishing house manages every stage.
          </p>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="group bg-[#F8FAFC] hover:bg-white border border-slate-200 hover:border-[#003B46] p-8 rounded-xl transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer flex flex-col justify-between relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-sm font-bold text-[#7A0000] tracking-widest">
                    0{index + 1}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-200 group-hover:bg-[#003B46] text-slate-700 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <h3 className="font-serif text-2xl text-[#7A0000] font-semibold group-hover:text-[#003B46] transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-600 font-sans-clean leading-relaxed font-normal">
                  {service.shortDescription}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span className="font-medium">Est. {service.duration}</span>
                <span className="font-semibold text-[#7A0000] group-hover:text-[#003B46] group-hover:underline uppercase tracking-wider text-[11px]">Explore Details</span>
              </div>
            </div>
          ))}

          {/* Special Feature Tile: Consultation Call Trigger */}
          <div className="bg-[#7A0000] text-white p-8 rounded-xl flex flex-col justify-between shadow-md relative overflow-hidden border border-[#7A0000]/40">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-red-100">
                Custom Imprint
              </span>
              <h3 className="font-serif text-3xl font-semibold leading-tight text-white">
                Have a unique manuscript or custom timeline?
              </h3>
              <p className="text-sm text-slate-100 font-sans-clean font-light leading-relaxed">
                We craft bespoke publishing packages for corporate archives, family trusts, and high-volume press runs.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-red-800/80 flex items-center justify-between">
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-white">
                Speak With An Editor
              </span>
              <BookOpen className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

