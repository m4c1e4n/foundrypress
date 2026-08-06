import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/content';
import { ChevronRight, Check, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenConsultation: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenConsultation }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const activeStepData = PROCESS_STEPS.find((s) => s.stepNumber === activeStep) || PROCESS_STEPS[0];

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-white border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header matching exact image title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#16A34A] mb-3">
              <span className="w-2 h-0.5 bg-[#16A34A]" />
              <span>Process Overview</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0B1B3D] font-semibold tracking-tight">
              The Journey to Publication
            </h2>
          </div>

          <button
            onClick={onOpenConsultation}
            className="self-start md:self-auto px-6 py-3 bg-[#0B1B3D] hover:bg-[#16A34A] text-white text-xs uppercase tracking-[0.2em] font-bold rounded-full shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
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
                  onClick={() => setActiveStep(step.stepNumber)}
                  className={`relative flex flex-col md:flex-row items-start cursor-pointer group ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Diamond Node Marker */}
                  <div className="absolute left-6 md:left-1/2 top-2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-4 h-4 bg-[#0B1B3D] rotate-45 transition-transform group-hover:scale-125 group-hover:bg-[#16A34A] shadow-xs" />
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
                      <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#16A34A] font-sans-clean block">
                        Step 0{step.stepNumber}
                      </span>

                      <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#0B1B3D] group-hover:text-[#16A34A] transition-colors">
                        {step.title}
                      </h3>

                      <p className={`text-sm md:text-base text-slate-600 font-sans-clean leading-relaxed font-normal max-w-md ${
                        isEven ? '' : 'md:ml-auto'
                      }`}>
                        {step.shortDescription}
                      </p>
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
        <div className="mt-24 bg-[#F8FAFC] border border-slate-200 p-8 md:p-12 rounded-2xl shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 border-r-0 md:border-r border-slate-200 pr-0 md:pr-8 space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#16A34A]">
                Active Phase Focus — Step 0{activeStepData.stepNumber}
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-[#0B1B3D] font-semibold">
                {activeStepData.title}
              </h3>
            </div>

            <div className="md:col-span-8 space-y-4">
              <p className="text-base md:text-lg text-[#0B1B3D] font-medium leading-relaxed">
                {activeStepData.shortDescription}
              </p>
              <p className="text-sm md:text-base text-slate-600 font-sans-clean leading-relaxed font-normal">
                {activeStepData.detailText}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
