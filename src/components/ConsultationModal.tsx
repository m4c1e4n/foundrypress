import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle, ArrowRight, BookOpen } from 'lucide-react';
import { BOOK_CATEGORIES } from '../data/content';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'Memoirs',
    preferredDate: '',
    preferredTime: '10:00 AM EST',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleComplete = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = '233500732369';
    const text = `Hello Foundry Press, I would like to schedule a consultation:

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone || 'N/A'}
*Book Category:* ${formData.category}
*Preferred Date:* ${formData.preferredDate || 'Not specified'}
*Preferred Time:* ${formData.preferredTime}
*Notes / Vision:* ${formData.notes || 'None'}`;

    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    const newWindow = window.open(waUrl, '_blank', 'noopener,noreferrer');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      window.location.href = waUrl;
    }
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  const waBookingUrl = `https://wa.me/233500732369?text=${encodeURIComponent(
    `Hello Foundry Press, I would like to schedule a consultation:\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone || 'N/A'}\n*Book Category:* ${formData.category}\n*Preferred Date:* ${formData.preferredDate || 'Not specified'}\n*Preferred Time:* ${formData.preferredTime}\n*Notes:* ${formData.notes || 'None'}`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-2xl max-w-xl w-full p-5 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-6 sm:py-8 text-center space-y-4 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-[#7A0000]/10 text-[#7A0000] flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-[#7A0000]" />
            </div>
            
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#7A0000]">
              Consultation Reserved
            </h3>

            <p className="text-sm text-slate-600 font-sans-clean leading-relaxed max-w-md mx-auto">
              Thank you, <span className="font-semibold text-[#7A0000]">{formData.name}</span>. Your consultation booking details have been sent to WhatsApp.
            </p>

            <div className="bg-[#F8FAFC] border border-slate-200 p-4 rounded-xl text-xs text-slate-700 text-left space-y-2">
              <div className="font-semibold uppercase tracking-[0.18em] text-[#7A0000]">Booking Summary:</div>
              <p>• Date: <span className="font-semibold">{formData.preferredDate || 'Selected Date'}</span> at <span className="font-semibold">{formData.preferredTime}</span></p>
              <p>• Category: <span className="font-semibold">{formData.category}</span></p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={waBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs uppercase tracking-[0.18em] font-bold rounded-full shadow-md transition-all text-center min-h-[44px] flex items-center justify-center"
              >
                Open Booking in WhatsApp
              </a>
              <button
                onClick={resetAndClose}
                className="w-full sm:w-auto px-6 py-3 border border-slate-200 text-slate-700 text-xs uppercase tracking-[0.18em] font-bold rounded-full hover:bg-slate-100 transition-colors cursor-pointer min-h-[44px]"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 pr-8">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#7A0000] mb-1">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Foundry Executive Consultation</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#7A0000]">
                Schedule Your Complimentary Session
              </h3>
              <p className="text-xs text-slate-500 font-sans-clean mt-1 font-normal">
                Step {step} of 2. Speak directly with a senior ghostwriter or editor.
              </p>
            </div>

            <form onSubmit={handleComplete} className="space-y-4 sm:space-y-5">
              {step === 1 ? (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#7A0000] mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Thomas Sterling"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-base sm:text-sm text-slate-900 focus:outline-none focus:border-[#7A0000] min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#7A0000] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="thomas@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-base sm:text-sm text-slate-900 focus:outline-none focus:border-[#7A0000] min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#7A0000] mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-base sm:text-sm text-slate-900 focus:outline-none focus:border-[#7A0000] min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#7A0000] mb-1.5">
                      Book Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-base sm:text-sm text-slate-900 focus:outline-none focus:border-[#7A0000] min-h-[44px]"
                    >
                      {BOOK_CATEGORIES.map((cat) => (
                        <option key={cat.id} value={cat.name}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (formData.name && formData.email) setStep(2);
                    }}
                    className="w-full mt-4 py-3.5 bg-[#7A0000] hover:bg-[#003B46] text-white text-xs uppercase tracking-[0.2em] font-bold rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs min-h-[44px]"
                  >
                    <span>Continue To Date & Time</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#7A0000] mb-1.5">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-base sm:text-sm text-slate-900 focus:outline-none focus:border-[#7A0000] min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#7A0000] mb-1.5">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-base sm:text-sm text-slate-900 focus:outline-none focus:border-[#7A0000] min-h-[44px]"
                    >
                      <option value="09:00 AM EST">09:00 AM EST</option>
                      <option value="11:00 AM EST">11:00 AM EST</option>
                      <option value="02:00 PM EST">02:00 PM EST</option>
                      <option value="04:00 PM EST">04:00 PM EST</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#7A0000] mb-1.5">
                      Brief Notes / Vision for your book
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Any specific stories, goals, or deadlines you'd like us to know beforehand..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-base sm:text-sm text-slate-900 focus:outline-none focus:border-[#7A0000] resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-1/3 py-3 border border-slate-200 text-slate-600 hover:text-[#003B46] hover:border-[#003B46] text-xs uppercase tracking-[0.18em] font-semibold rounded-full transition-colors cursor-pointer min-h-[44px]"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 py-3 bg-[#7A0000] hover:bg-[#003B46] text-white text-xs uppercase tracking-[0.18em] font-bold rounded-full shadow-xs transition-colors cursor-pointer min-h-[44px] flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                      <span>Book via WhatsApp</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        )}

      </div>
    </div>
  );
};

