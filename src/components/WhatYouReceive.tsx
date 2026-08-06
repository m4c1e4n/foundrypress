import React from 'react';
import { DELIVERABLES } from '../data/content';
import { CheckCircle, ShieldCheck } from 'lucide-react';

export const WhatYouReceive: React.FC = () => {
  return (
    <section id="what-you-receive" className="py-24 lg:py-32 bg-[#F8FAFC] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#16A34A]">
            <span className="w-2 h-0.5 bg-[#16A34A]" />
            <span>What You Receive</span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#0B1B3D] font-semibold leading-[1.12]">
            Complete Publishing Deliverables
          </h2>

          <p className="text-base md:text-lg text-slate-600 font-sans-clean leading-relaxed font-normal">
            Every Foundry Press publication includes a complete suite of physical and digital assets. You retain 100% full intellectual property ownership.
          </p>
        </div>

        {/* Deliverables Checklist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DELIVERABLES.map((item) => (
            <div
              key={item.id}
              className={`p-8 rounded-xl border transition-all ${
                item.isHighlight
                  ? 'bg-white border-[#0B1B3D] shadow-sm'
                  : 'bg-white/80 border-slate-200'
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-7 h-7 rounded-full bg-[#0B1B3D]/10 text-[#0B1B3D] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-[#16A34A]" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-[#0B1B3D] font-semibold">
                    {item.title}
                  </h3>
                  {item.isHighlight && (
                    <span className="inline-block mt-1 text-[10px] uppercase tracking-[0.18em] font-semibold px-2 py-0.5 bg-[#16A34A]/10 text-[#16A34A] rounded-md">
                      Included Premium
                    </span>
                  )}
                </div>
              </div>

              <p className="text-sm text-slate-600 font-sans-clean leading-relaxed font-normal pl-11">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-16 bg-[#0B1B3D] text-white p-8 md:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-blue-900">
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-10 h-10 text-[#16A34A] shrink-0" />
            <div>
              <h4 className="font-serif text-2xl font-bold text-white">
                100% Creative Rights & Copyright Ownership
              </h4>
              <p className="text-xs md:text-sm text-slate-300 font-sans-clean font-normal mt-1">
                Unlike traditional publisher contracts, you retain complete ownership of your manuscript, copyright, royalties, and adaptational rights.
              </p>
            </div>
          </div>

          <div className="text-right shrink-0">
            <span className="text-xs uppercase tracking-[0.2em] text-[#16A34A] font-semibold block">
              Foundry Guarantee
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

