import React, { useState } from 'react';
import { WHY_WRITE_A_BOOK_CONTENT } from '../data/content';
import { Bookmark, Award, Feather, History, X, Sparkles, ExternalLink } from 'lucide-react';

export const WhyWriteABook: React.FC = () => {
  const icons = [History, Award, Feather, Bookmark];
  const [selectedReason, setSelectedReason] = useState<typeof WHY_WRITE_A_BOOK_CONTENT.reasons[0] | null>(null);

  return (
    <section id="why-write" className="relative">
      {/* Dark Red Hero Banner */}
      <div className="py-24 lg:py-32 bg-gradient-to-b from-[#7A0000] via-[#7A0000] to-[#7A0000] text-white px-6 lg:px-12 border-b border-[#7A0000]/40">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-semibold tracking-tight leading-[1.15]">
            A book is more than pages
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-200 font-sans-clean font-medium leading-relaxed max-w-3xl mx-auto">
            It is an archive of a lifetime. It is authority in a crowded marketplace. It is the only gift that truly lives forever.
          </p>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 font-sans-clean leading-relaxed font-normal max-w-2xl mx-auto pt-2">
            A book creates a permanent anchor in a world of fleeting digital noise. Whether for your children, your clients, or your colleagues, the written word carries a weight that speech cannot replicate.
          </p>
        </div>
      </div>

      {/* 4 Pillars Grid & Quote Box on White Canvas */}
      <div className="py-20 lg:py-28 bg-white px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#7A0000]">
              <span>Core Value & Purpose</span>
            </div>
            <h3 className="font-serif text-3xl md:text-4xl text-[#7A0000] font-semibold">
              Why Leaders & Legacy Builders Write
            </h3>
            <p className="text-xs text-slate-500 font-sans-clean">
              Click any subject below to pop up in-depth publishing insights
            </p>
          </div>

          {/* 4 Core Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_WRITE_A_BOOK_CONTENT.reasons.map((reason, index) => {
              const IconComponent = icons[index % icons.length];
              return (
                <div
                  key={reason.title}
                  onClick={() => setSelectedReason(reason)}
                  className="group bg-[#F8FAFC] hover:bg-white border border-slate-200 hover:border-[#003B46] p-8 rounded-xl space-y-4 transition-all shadow-xs hover:shadow-md cursor-pointer relative flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-full bg-[#7A0000]/10 text-[#7A0000] group-hover:bg-[#003B46] group-hover:text-white flex items-center justify-center transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#003B46] transition-colors" />
                    </div>

                    <h3 className="font-serif text-2xl text-[#7A0000] font-semibold group-hover:text-[#003B46] transition-colors">
                      {reason.title}
                    </h3>

                    <p className="text-sm text-slate-600 font-sans-clean leading-relaxed font-normal">
                      {reason.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 text-xs font-semibold text-[#7A0000] group-hover:text-[#003B46] group-hover:underline uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                    <span>Pop Up Strategic Details</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Literary Quote Box */}
          <div className="mt-20 max-w-3xl mx-auto text-center p-10 bg-[#F8FAFC] border border-slate-200 rounded-xl shadow-xs">
            <p className="font-serif text-2xl md:text-3xl italic text-[#7A0000] leading-relaxed mb-4">
              “The stories we leave behind are the only real bridges across generations. Give your loved ones the gift of hearing your voice forever.”
            </p>
            <span className="text-xs uppercase tracking-[0.2em] text-[#7A0000] font-semibold">
              Foundry Press Editorial Board
            </span>
          </div>
        </div>
      </div>

      {/* Detail Pop-up Modal */}
      {selectedReason && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedReason(null)}
        >
          <div 
            className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full p-6 md:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedReason(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-[#003B46] hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#7A0000]">
                <Sparkles className="w-4 h-4 text-[#7A0000]" />
                <span>Publishing Value Subject</span>
              </div>

              <h3 className="font-serif text-3xl md:text-4xl font-semibold text-[#7A0000]">
                {selectedReason.title}
              </h3>

              <p className="text-base text-slate-700 font-sans-clean leading-relaxed font-normal">
                {selectedReason.description}
              </p>

              <div className="p-5 bg-[#F8FAFC] border border-slate-200 rounded-xl space-y-3">
                <h4 className="text-xs uppercase tracking-[0.18em] font-bold text-[#7A0000]">
                  Why This Matters For Authors
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Publishing a book under {selectedReason.title.toLowerCase()} provides an enduring asset that separates leaders from peers, opening speaking, media, and legacy opportunities that digital articles cannot match.
                </p>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setSelectedReason(null)}
                  className="px-6 py-2.5 bg-[#7A0000] hover:bg-[#003B46] text-white text-xs uppercase tracking-[0.2em] font-bold rounded-full transition-colors cursor-pointer"
                >
                  Close Subject Info
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

