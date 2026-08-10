import React, { useState } from 'react';
import { DELIVERABLES } from '../data/content';
import { CheckCircle, ShieldCheck, X, Sparkles, ExternalLink } from 'lucide-react';

export const WhatYouReceive: React.FC = () => {
  const [selectedDeliverable, setSelectedDeliverable] = useState<typeof DELIVERABLES[0] | null>(null);

  return (
    <section id="what-you-receive" className="py-24 lg:py-32 bg-[#F8FAFC] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#7A0000]">
            <span className="w-2 h-0.5 bg-[#7A0000]" />
            <span>What You Receive</span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#7A0000] font-semibold leading-[1.12]">
            Complete Publishing Deliverables
          </h2>

          <p className="text-base md:text-lg text-slate-600 font-sans-clean leading-relaxed font-normal">
            Every Foundry Press publication includes a complete suite of physical and digital assets. Click any deliverable subject to view detailed specifications in a pop-up window.
          </p>
        </div>

        {/* Deliverables Checklist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DELIVERABLES.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedDeliverable(item)}
              className={`p-8 rounded-xl border transition-all cursor-pointer group hover:border-[#003B46] hover:shadow-md flex flex-col justify-between ${
                item.isHighlight
                  ? 'bg-white border-[#7A0000] shadow-sm'
                  : 'bg-white/80 border-slate-200'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#7A0000]/10 text-[#7A0000] group-hover:bg-[#003B46] group-hover:text-white flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl text-[#7A0000] group-hover:text-[#003B46] font-semibold transition-colors">
                        {item.title}
                      </h3>
                      {item.isHighlight && (
                        <span className="inline-block mt-1 text-[10px] uppercase tracking-[0.18em] font-semibold px-2 py-0.5 bg-[#7A0000]/10 text-[#7A0000] rounded-md">
                          Included Premium
                        </span>
                      )}
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#003B46] shrink-0" />
                </div>

                <p className="text-sm text-slate-600 font-sans-clean leading-relaxed font-normal pl-11">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 text-[11px] uppercase tracking-wider font-semibold text-[#7A0000] group-hover:text-[#003B46] group-hover:underline pl-11">
                Pop Up Deliverable Specs
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-16 bg-[#7A0000] text-white p-8 md:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-[#7A0000]/40">
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-10 h-10 text-white shrink-0" />
            <div>
              <h4 className="font-serif text-2xl font-bold text-white">
                100% Creative Rights & Copyright Ownership
              </h4>
              <p className="text-xs md:text-sm text-red-100 font-sans-clean font-normal mt-1">
                Unlike traditional publisher contracts, you retain complete ownership of your manuscript, copyright, royalties, and adaptational rights.
              </p>
            </div>
          </div>

          <div className="text-right shrink-0">
            <span className="text-xs uppercase tracking-[0.2em] text-red-100 font-bold block">
              Foundry Guarantee
            </span>
          </div>
        </div>

      </div>

      {/* Deliverable Detail Pop-Up Modal */}
      {selectedDeliverable && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedDeliverable(null)}
        >
          <div 
            className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full p-6 md:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedDeliverable(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-[#003B46] hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#7A0000]">
                <Sparkles className="w-4 h-4 text-[#7A0000]" />
                <span>Deliverable Specifications</span>
              </div>

              <h3 className="font-serif text-3xl md:text-4xl font-semibold text-[#7A0000]">
                {selectedDeliverable.title}
              </h3>

              <p className="text-base text-slate-700 font-sans-clean leading-relaxed font-normal">
                {selectedDeliverable.description}
              </p>

              <div className="p-5 bg-[#F8FAFC] border border-slate-200 rounded-xl space-y-3">
                <h4 className="text-xs uppercase tracking-[0.18em] font-bold text-[#7A0000]">
                  Production Standard
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  All {selectedDeliverable.title.toLowerCase()} assets are produced to institutional quality standards, formatted for global distribution across major retail booksellers, online platforms, and library networks.
                </p>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setSelectedDeliverable(null)}
                  className="px-6 py-2.5 bg-[#7A0000] hover:bg-[#003B46] text-white text-xs uppercase tracking-[0.2em] font-bold rounded-full transition-colors cursor-pointer"
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

