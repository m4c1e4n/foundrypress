import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');

  const phoneNumber = '233500732369'; // Ghana WhatsApp number

  const handleSendWhatsApp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const encodedText = encodeURIComponent(
      userMsg.trim() || 'Hello Foundry Press, I would like to inquire about publishing a book.'
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Expanded Quick WhatsApp Chat Card */}
      {isOpen && (
        <div className="mb-4 w-[calc(100vw-2rem)] max-w-sm sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-[#7A0000] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg">
                F
              </div>
              <div>
                <h4 className="font-semibold text-sm">Foundry Press Publishing</h4>
                <p className="text-[11px] text-emerald-300 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Online • Usually replies in minutes
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Bubble Body */}
          <div className="p-4 bg-slate-100 space-y-3 min-h-[140px] flex flex-col justify-end text-xs">
            <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-xs max-w-[88%] text-slate-800 space-y-1 border border-slate-200">
              <span className="font-bold text-[#7A0000] text-[11px] block">Executive Desk</span>
              <p className="text-slate-700 leading-relaxed">
                Welcome to Foundry Press. Chat with us directly on WhatsApp to ask questions about manuscript reviews, pricing, or custom press runs.
              </p>
              <span className="text-[10px] text-slate-400 block text-right">Just now</span>
            </div>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSendWhatsApp} className="p-3 bg-slate-50 border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-white border border-slate-200 rounded-full px-4 py-2 text-base sm:text-xs text-slate-800 focus:outline-none focus:border-[#7A0000] min-h-[40px]"
            />
            <button
              type="submit"
              className="w-10 h-10 rounded-full bg-[#7A0000] hover:bg-[#003B46] text-white flex items-center justify-center shrink-0 transition-colors shadow-xs cursor-pointer"
              title="Start WhatsApp Chat"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 bg-[#7A0000] hover:bg-[#003B46] text-white px-4 py-3.5 rounded-full shadow-xl transition-all hover:scale-105 cursor-pointer font-bold text-xs uppercase tracking-wider min-h-[44px] border border-white/20"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
        <span className="hidden sm:inline">Text us on WhatsApp</span>
      </button>
    </div>
  );
};
