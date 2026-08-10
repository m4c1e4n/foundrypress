import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/content';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  // First item open by default
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 lg:py-32 bg-[#F8FAFC] border-y border-slate-200">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#7A0000]">
            <span className="w-2 h-0.5 bg-[#7A0000]" />
            <span>Frequently Asked Questions</span>
            <span className="w-2 h-0.5 bg-[#7A0000]" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#7A0000] font-semibold">
            Everything You Need To Know
          </h2>

          <p className="text-base md:text-lg text-slate-600 font-sans-clean font-normal max-w-xl mx-auto">
            Clear answers about our ghostwriting process, timeline, approvals, and physical production.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-xl md:text-2xl font-semibold text-slate-900 group-hover:text-[#003B46] transition-colors">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 text-[#7A0000] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#7A0000] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm md:text-base text-slate-700 font-sans-clean leading-relaxed font-normal border-t border-slate-100 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

