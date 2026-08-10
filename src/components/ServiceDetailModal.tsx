import React from 'react';
import { ServiceItem } from '../types';
import { X, CheckCircle2, Clock, ArrowRight } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenConsultation,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full p-6 md:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-[#003B46] hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#7A0000]">
            <Clock className="w-3.5 h-3.5" />
            <span>Est. Timeline: {service.duration}</span>
          </div>

          <h3 className="font-serif text-4xl font-semibold text-[#7A0000]">
            {service.title}
          </h3>

          <p className="text-base text-slate-600 font-sans-clean leading-relaxed font-normal">
            {service.fullDescription}
          </p>

          <div className="pt-4 border-t border-slate-200">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#7A0000] mb-3">
              Included Deliverables & Milestones
            </h4>
            <ul className="space-y-2.5">
              {service.deliverables.map((d, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-800 font-sans-clean font-normal">
                  <CheckCircle2 className="w-4 h-4 text-[#7A0000] shrink-0 mt-0.5" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
            <span className="text-xs text-slate-500 font-normal">
              Part of our complete end-to-end publishing methodology.
            </span>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="w-full sm:w-auto px-6 py-3 bg-[#7A0000] hover:bg-[#003B46] text-white text-xs uppercase tracking-[0.2em] font-bold rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <span>Book For This Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

