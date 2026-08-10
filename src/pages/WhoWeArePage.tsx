import React from 'react';
import { WhoWeAre } from '../components/WhoWeAre';
import { ShieldCheck, MapPin, Award, Users } from 'lucide-react';

interface WhoWeArePageProps {
  onOpenConsultation: () => void;
}

export const WhoWeArePage: React.FC<WhoWeArePageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="pt-24 pb-16">
      {/* Page Header */}
      <div className="bg-[#7A0000] text-white py-16 px-6 lg:px-12 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-red-100 font-bold text-xs tracking-[0.2em] uppercase">
            <MapPin className="w-4 h-4 text-white" />
            <span>Accra, Ghana • Pan-African Heritage</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
            Who We Are at Foundry Press
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-sans-clean leading-relaxed">
            We are premier ghostwriting and book crafting specialists based in Ghana, committed to giving voice to leaders, elders, visionaries, and families across Africa and the global diaspora.
          </p>
        </div>
      </div>

      <WhoWeAre />

      {/* Additional Company Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#7A0000] text-white flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#7A0000]">100% Confidentiality</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Every project is protected under strict Non-Disclosure Agreements. Your stories belong strictly to you.
              </p>
            </div>

            <div className="p-8 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#7A0000] text-white flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#7A0000]">Archival Print Quality</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Bound in linen, cloth, or premium leather with foil stamping, acid-free paper, and heirloom construction.
              </p>
            </div>

            <div className="p-8 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#7A0000] text-white flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#7A0000]">Ghana & Diaspora Reach</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Headquartered in Accra, we work seamlessly with authors across West Africa, Europe, and North America.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-[#7A0000] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6">
            <h2 className="font-serif text-3xl font-bold">Ready to preserve your story with us?</h2>
            <p className="text-red-100 max-w-xl mx-auto text-sm sm:text-base">
              Schedule a confidential consultation with our lead editorial director in Accra today.
            </p>
            <button
              onClick={onOpenConsultation}
              className="px-8 py-3.5 bg-white text-[#7A0000] hover:bg-[#003B46] hover:text-white font-bold text-sm tracking-wide rounded-full transition-all cursor-pointer shadow-lg"
            >
              Book A Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
