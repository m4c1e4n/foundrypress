import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { BOOK_CATEGORIES } from '../data/content';

interface ContactSectionProps {
  onOpenConsultation: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenConsultation }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'Memoirs',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    const phoneNumber = '233240000000';
    const text = `Hello Foundry Press, I would like to submit an inquiry:

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone || 'N/A'}
*Book Category:* ${formData.category}
*Message:* ${formData.message}`;

    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  const waInquiryUrl = `https://wa.me/233240000000?text=${encodeURIComponent(
    `Hello Foundry Press, I would like to submit an inquiry:\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone || 'N/A'}\n*Book Category:* ${formData.category}\n*Message:* ${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header with requested closing statement */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#7A0000]">
            <span className="w-2 h-0.5 bg-[#7A0000]" />
            <span>Get In Touch</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#003B46] font-semibold tracking-tight leading-[1.12]">
            Your story begins today.
          </h2>

          <p className="text-base md:text-lg text-slate-600 font-sans-clean font-normal leading-relaxed">
            Reach out to discuss your project vision, inquire about custom press runs, or schedule a conversation with an executive editor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
          
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-[#F8FAFC] border border-slate-200 p-5 sm:p-8 md:p-10 rounded-2xl shadow-xs">
            {submitted ? (
              <div className="py-8 sm:py-12 text-center space-y-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#7A0000]/10 text-[#7A0000] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-[#7A0000]" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#003B46]">
                  Thank You, {formData.name}
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto font-sans-clean font-normal leading-relaxed">
                  Your inquiry details have been compiled and sent via WhatsApp. If WhatsApp did not open automatically, click the button below:
                </p>
                <div>
                  <a
                    href={waInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-[0.18em] rounded-full shadow-md transition-all min-h-[44px]"
                  >
                    <span>Open WhatsApp Message</span>
                    <Send className="w-4 h-4" />
                  </a>
                </div>
                <div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#7A0000] hover:underline cursor-pointer min-h-[44px]"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#003B46] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-base sm:text-sm text-slate-900 focus:outline-none focus:border-[#003B46] transition-colors min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#003B46] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="eleanor@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-base sm:text-sm text-slate-900 focus:outline-none focus:border-[#003B46] transition-colors min-h-[44px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#003B46] mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+233 24 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-base sm:text-sm text-slate-900 focus:outline-none focus:border-[#003B46] transition-colors min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#003B46] mb-2">
                      Book Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-base sm:text-sm text-slate-900 focus:outline-none focus:border-[#003B46] transition-colors min-h-[44px]"
                    >
                      {BOOK_CATEGORIES.map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#003B46] mb-2">
                    Tell Us About Your Story Concept *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Share a brief overview of the memories, expertise, or legacy you wish to preserve in print..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-base sm:text-sm text-slate-900 focus:outline-none focus:border-[#003B46] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#7A0000] hover:bg-[#5C0000] text-white text-xs uppercase tracking-[0.2em] font-bold rounded-full shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer min-h-[44px]"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>

          {/* Contact Info & Repeat CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            
            {/* Direct Contact Details */}
            <div className="space-y-6">
              <h3 className="font-serif text-3xl font-semibold text-[#003B46]">
                Foundry Press Offices
              </h3>

              <div className="space-y-4 text-sm font-sans-clean">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#7A0000] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#003B46]">Publishing Headquarters</span>
                    <span className="text-slate-600">Ridge Tower, Independence Avenue<br />Accra, Ghana</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-[#7A0000] shrink-0" />
                  <div>
                    <span className="font-semibold block text-[#003B46]">Direct Editorial Line</span>
                    <span className="text-slate-600">+233 30 200 0199 / +233 24 000 0000</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <svg className="w-5 h-5 fill-[#25D366] shrink-0" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <div>
                    <span className="font-semibold block text-[#003B46]">WhatsApp Message</span>
                    <a
                      href="https://wa.me/233240000000?text=Hello%20Foundry%20Press%2C%20I%20would%20like%20to%20inquire%20about%20publishing%20a%20book."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#7A0000] hover:underline font-semibold"
                    >
                      Text us on WhatsApp (+233 24 000 0000)
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-[#7A0000] shrink-0" />
                  <div>
                    <span className="font-semibold block text-[#003B46]">Inquiries & Submissions</span>
                    <span className="text-slate-600">hello@foundrypress.com</span>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="pt-6 border-t border-slate-200">
                <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold block mb-3">
                  Literary Journal & Socials
                </span>
                <div className="flex gap-4 text-xs font-semibold text-[#003B46]">
                  <a href="#" className="hover:text-[#7A0000]">LinkedIn</a>
                  <span>•</span>
                  <a href="#" className="hover:text-[#7A0000]">X / Twitter</a>
                  <span>•</span>
                  <a href="#" className="hover:text-[#7A0000]">Instagram</a>
                  <span>•</span>
                  <a href="#" className="hover:text-[#7A0000]">Substack</a>
                </div>
              </div>
            </div>

            {/* Repeat CTA Card */}
            <div className="bg-[#003B46] text-white p-8 rounded-2xl space-y-4 shadow-md border border-[#003B46]/40">
              <h4 className="font-serif text-2xl font-bold text-white">
                Ready to speak with an editor?
              </h4>
              <p className="text-xs text-slate-300 font-sans-clean font-normal leading-relaxed">
                Schedule a complimentary 30-minute consultation to evaluate your story blueprint and receive a personalized publishing quote.
              </p>
              <button
                onClick={onOpenConsultation}
                className="w-full py-3.5 bg-[#7A0000] text-white hover:bg-[#5C0000] font-bold text-xs uppercase tracking-[0.2em] rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

