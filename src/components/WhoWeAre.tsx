import React from 'react';
import { WHO_WE_ARE_CONTENT, AUDIO_DEMO_SAMPLE } from '../data/content';
import { CheckCircle2, BookOpen } from 'lucide-react';

export const WhoWeAre: React.FC = () => {
  return (
    <section id="who-we-are" className="py-24 lg:py-32 bg-[#F8FAFC] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative Copy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#7A0000]">
              <span className="w-2 h-0.5 bg-[#7A0000]" />
              <span>Who We Are</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#7A0000] leading-[1.15] font-semibold">
              {WHO_WE_ARE_CONTENT.title}
            </h2>

            <div className="space-y-6 text-slate-600 text-base md:text-lg font-sans-clean leading-relaxed font-normal">
              <p>{WHO_WE_ARE_CONTENT.bodyParagraph1}</p>
              <p>{WHO_WE_ARE_CONTENT.bodyParagraph2}</p>
            </div>

            {/* Standalone Closing Statement Highlight */}
            <div className="pt-6 border-t border-slate-200">
              <blockquote className="font-serif text-2xl md:text-3xl italic text-[#7A0000] tracking-tight">
                “{WHO_WE_ARE_CONTENT.closingStatement}”
              </blockquote>
            </div>
          </div>

          {/* Right Column: Clean Manuscript Showcase */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xs space-y-6">
              <div className="flex items-center gap-2 pb-4 border-b border-slate-200">
                <BookOpen className="w-4 h-4 text-[#7A0000]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Typeset Manuscript Sample
                </span>
              </div>

              <div className="bg-[#F8FAFC] border border-slate-200 p-6 rounded-xl font-serif relative">
                <div className="text-[#7A0000] text-[11px] font-sans tracking-[0.2em] uppercase font-semibold mb-3">
                  Chapter 3 • Page 42
                </div>
                <p className="text-sm md:text-base text-slate-800 leading-relaxed italic first-letter:text-3xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:text-[#7A0000]">
                  {AUDIO_DEMO_SAMPLE.writtenManuscript}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#7A0000] shrink-0" />
                <span>Transformed into editorial-grade prose while preserving 100% of your authentic voice.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


