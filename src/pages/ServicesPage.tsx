import React from 'react';
import { Link } from 'react-router-dom';
import { WhatWeDo } from '../components/WhatWeDo';
import { ServiceItem } from '../types';
import { PackageCheck, ArrowRight } from 'lucide-react';

interface ServicesPageProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultation: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onSelectService, onOpenConsultation }) => {
  return (
    <div className="pt-24 pb-16">
      <div className="bg-[#7A0000] text-white py-16 px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-red-100 font-bold text-xs tracking-[0.2em] uppercase">
            End-to-End Publishing Solutions
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
            Our Publishing Services
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-sans-clean leading-relaxed">
            From recorded interviews to editorial drafting, custom typography, cover design, and physical printing in Accra, Ghana.
          </p>
        </div>
      </div>

      {/* Main Services Grid */}
      <WhatWeDo onSelectService={onSelectService} />

      {/* Teaser Banner to Deliverables Tab */}
      <section className="py-12 bg-[#F8FAFC] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#7A0000]/10 text-[#7A0000] flex items-center justify-center shrink-0">
              <PackageCheck className="w-6 h-6 text-[#7A0000]" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#7A0000]">
                Want to see what you receive in your finished package?
              </h3>
              <p className="text-sm text-slate-600 font-sans-clean">
                Explore physical leather hardcovers, digital eBook files, ISBN setup, and proofreading certificates.
              </p>
            </div>
          </div>

          <Link
            to="/deliverables"
            className="px-6 py-3 bg-[#7A0000] hover:bg-[#003B46] text-white font-bold text-xs uppercase tracking-[0.18em] rounded-full transition-colors shrink-0 flex items-center gap-2"
          >
            <span>View All Deliverables</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        <button
          onClick={onOpenConsultation}
          className="px-8 py-3.5 bg-[#7A0000] hover:bg-[#003B46] text-white font-bold text-sm tracking-wide rounded-full transition-all cursor-pointer shadow-lg"
        >
          Discuss Your Custom Book Package
        </button>
      </div>
    </div>
  );
};
