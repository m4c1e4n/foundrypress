import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/content';
import { ChevronRight, Check, ArrowRight, X, Sparkles, ExternalLink } from 'lucide-react';

interface HowItWorksProps {
  onOpenConsultation: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenConsultation }) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const activeStepData = PROCESS_STEPS.find((s) => s.stepNumber === activeStep) || PROCESS_STEPS[0];

  const handleStepClick = (stepNumber: number) => {
    setActiveStep(stepNumber);
    setIsModalOpen(true);
  };

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-white border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header matching exact image title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#7A0000] mb-3">
              <span>Process Overview</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#7A0000] font-semibold tracking-tight">
              The Journey to Publication
            </h2>
            <p className="text-xs text-slate-500 font-sans-clean mt-2">
              Click any step along the path to pop up complete phase details
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="self-start md:self-auto px-6 py-3 bg-[#7A0000] hover:bg-[#003B46] text-white text-xs uppercase tracking-[0.2em] font-bold rounded-full shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>Start Your Journey</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Elegant Vertical Timeline with Diamond Nodes */}
        <div className="relative max-w-5xl mx-auto my-12">
          
          {/* Center Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[1px] bg-slate-300 md:-translate-x-1/2" />

          {/* Timeline Steps */}
          <div className="space-y-16 md:space-y-24 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={step.stepNumber}
                  onClick={() => handleStepClick(step.stepNumber)}
                  className={`relative flex flex-col md:flex-row items-start cursor-pointer group ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Diamond Node Marker */}
                  <div className="absolute left-6 md:left-1/2 top-2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-4 h-4 bg-[#7A0000] rotate-45 transition-transform group-hover:scale-125 group-hover:bg-[#003B46] shadow-xs" />
                  </div>

                  {/* Content Box */}
                  <div
                    className={`pl-16 md:pl-0 w-full md:w-1/2 ${
                      isEven
                        ? 'md:pl-16 md:text-left'
                        : 'md:pr-16 md:text-right'
                    }`}
                  >
                    <div className="space-y-1.5 transition-opacity duration-200">
                      <div className="flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] font-semibold text-[#7A0000] font-sans-clean">
                        <span>Step 0{step.stepNumber}</span>
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </div>

                      <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#7A0000] group-hover:text-[#003B46] transition-colors">
                        {step.title}
                      </h3>

                      <p className={`text-sm md:text-base text-slate-600 font-sans-clean leading-relaxed font-normal max-w-md ${
                        isEven ? '' : 'md:ml-auto'
                      }`}>
                        {step.shortDescription}
                      </p>

                      <div className="text-[11px] uppercase tracking-wider font-semibold text-[#7A0000] group-hover:text-[#003B46] group-hover:underline pt-1">
                        Pop Up Phase Blueprint
                      </div>
                    </div>
                  </div>

                  {/* Empty Spacer Column for layout symmetry */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Step Detail Card */}
        <div className="mt-24 bg-[#F8FAFC] border border-slate-200 p-8 md:p-12 rounded-2xl shadow-xs relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 border-r-0 md:border-r border-slate-200 pr-0 md:pr-8 space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#7A0000]">
                Active Phase Focus: Step 0{activeStepData.stepNumber}
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-[#7A0000] font-semibold">
                {activeStepData.title}
              </h3>
            </div>

            <div className="md:col-span-8 space-y-4">
              <p className="text-base md:text-lg text-[#7A0000] font-medium leading-relaxed">
                {activeStepData.shortDescription}
              </p>
              <p className="text-sm md:text-base text-slate-600 font-sans-clean leading-relaxed font-normal">
                {activeStepData.detailText}
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-2 px-5 py-2 bg-[#7A0000] hover:bg-[#003B46] text-white rounded-full text-xs uppercase tracking-[0.18em] font-bold transition-colors cursor-pointer inline-flex items-center gap-2"
              >
                <span>Pop Up Full Phase Details</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Process Step Pop-Up Modal */}
      {isModalOpen && activeStepData && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full p-6 md:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-[#003B46] hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#7A0000]">
                <Sparkles className="w-4 h-4 text-[#7A0000]" />
                <span>Process Milestone: Step 0{activeStepData.stepNumber}</span>
              </div>

              <h3 className="font-serif text-3xl md:text-4xl font-semibold text-[#7A0000]">
                {activeStepData.title}
              </h3>

              <p className="text-base text-[#7A0000] font-medium leading-relaxed font-sans-clean">
                {activeStepData.shortDescription}
              </p>

              <div className="p-5 bg-[#F8FAFC] border border-slate-200 rounded-xl space-y-3">
                <h4 className="text-xs uppercase tracking-[0.18em] font-bold text-[#7A0000]">
                  What Happens In This Phase
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed font-normal font-sans-clean">
                  {activeStepData.detailText}
                </p>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
                <span className="text-xs text-slate-500 font-normal">
                  Ready to begin Step 0{activeStepData.stepNumber}?
                </span>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full sm:w-auto px-6 py-3 bg-[#7A0000] hover:bg-[#003B46] text-white text-xs uppercase tracking-[0.2em] font-bold rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs min-h-[44px]"
                >
                  <span>Book Consultation For This Phase</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
