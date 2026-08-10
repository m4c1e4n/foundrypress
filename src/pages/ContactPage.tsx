import React from 'react';
import { ContactSection } from '../components/ContactSection';

interface ContactPageProps {
  onOpenConsultation: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="pt-24 pb-16">
      <div className="bg-[#003B46] text-white py-16 px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[#7A0000] font-semibold text-xs tracking-[0.2em] uppercase">
            Get In Touch
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
            Contact Foundry Press
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-sans-clean leading-relaxed">
            Visit us at our Accra office, message us on WhatsApp, or send an inquiry to schedule your editorial discovery call.
          </p>
        </div>
      </div>

      <ContactSection onOpenConsultation={onOpenConsultation} />
    </div>
  );
};
