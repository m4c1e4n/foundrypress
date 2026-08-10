import React, { useState } from 'react';
import { AUDIO_DEMO_SAMPLE } from '../data/content';
import { Mic, FileText, ArrowRight, Volume2, VolumeX, Sparkles } from 'lucide-react';

export const AudioSampleSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7A0000]/10 text-[#7A0000] text-xs uppercase tracking-[0.2em] font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Ghostwriting Transformation</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#7A0000] font-semibold tracking-tight">
            {AUDIO_DEMO_SAMPLE.title}
          </h2>

          <p className="text-base md:text-lg text-slate-600 font-sans-clean leading-relaxed font-normal">
            See how your spoken words, natural anecdotes, and recorded conversations are polished into timeless, publication-grade literature.
          </p>
        </div>

        {/* Side-by-Side Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Audio Input Box */}
          <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-xs space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em] text-[#7A0000]">
                  <div className="w-8 h-8 rounded-full bg-[#7A0000]/10 flex items-center justify-center">
                    <Mic className="w-4 h-4 text-[#7A0000]" />
                  </div>
                  <span>Phase 1: Spoken Recording</span>
                </div>
                <span className="text-xs font-medium text-slate-400">Raw Audio Interview</span>
              </div>

              <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                <p className="font-serif italic text-slate-700 text-lg leading-relaxed">
                  {AUDIO_DEMO_SAMPLE.audioSnippet}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-4 py-2 bg-[#7A0000] hover:bg-[#003B46] text-white rounded-full text-xs uppercase tracking-[0.15em] font-bold transition-colors flex items-center gap-2 cursor-pointer"
              >
                {isPlaying ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                <span>{isPlaying ? 'Pause Sample' : 'Listen Sample'}</span>
              </button>
              <span className="text-xs text-slate-400 italic">
                {isPlaying ? 'Playing sample audio snippet...' : 'Click to hear audio snippet'}
              </span>
            </div>
          </div>

          {/* Written Output Box */}
          <div className="bg-[#7A0000] text-white p-8 rounded-2xl shadow-md space-y-6 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em] text-red-100">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-white" />
                  </div>
                  <span>Phase 2: Crafted Manuscript</span>
                </div>
                <span className="text-xs font-medium text-red-200">Publication Prose</span>
              </div>

              <div className="p-5 bg-white/10 backdrop-blur-xs border border-white/20 rounded-xl space-y-3">
                <p className="font-serif text-slate-100 text-lg leading-relaxed">
                  "{AUDIO_DEMO_SAMPLE.writtenManuscript}"
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/20 flex items-center justify-between relative z-10">
              <span className="text-xs text-red-100 font-medium">100% Authentic Voice Preserved</span>
              <div className="flex items-center gap-1 text-xs uppercase tracking-wider font-bold text-white">
                <span>Book Ready</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
