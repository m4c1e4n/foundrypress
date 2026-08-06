import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050E21] text-slate-300 pt-16 pb-12 border-t border-blue-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-blue-900/60">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-serif font-bold text-lg">
                F
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white uppercase group-hover:text-[#16A34A] transition-colors">
                Foundry Press
              </span>
            </Link>

            <blockquote className="font-serif text-xl italic text-slate-300">
              “Every story deserves a book.”
            </blockquote>

            <p className="text-xs text-slate-400 font-sans-clean leading-relaxed font-normal max-w-sm">
              We turn spoken ideas, personal memoirs, and professional expertise into archival-quality published books in Ghana and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <span className="uppercase tracking-[0.2em] text-[#16A34A] font-semibold block mb-2">
              Navigation
            </span>
            <ul className="space-y-2 text-slate-300 font-normal">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/who-we-are" className="hover:text-white transition-colors">Who We Are</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/book-types" className="hover:text-white transition-colors">Types of Books</Link></li>
              <li><Link to="/deliverables" className="hover:text-white transition-colors">Deliverables</Link></li>
              <li><Link to="/why-write" className="hover:text-white transition-colors">Why Write A Book</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="md:col-span-4 space-y-4 text-xs">
            <span className="uppercase tracking-[0.2em] text-[#16A34A] font-semibold block mb-2">
              Publishing Imprint
            </span>
            <p className="text-slate-300 font-normal leading-relaxed">
              Ridge Tower, Independence Avenue<br />
              Accra, Ghana<br />
              Direct: +233 30 200 0199
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-5 py-2.5 bg-[#16A34A] hover:bg-[#15803D] text-white text-[11px] uppercase tracking-[0.2em] font-bold rounded-full transition-colors cursor-pointer shadow-xs"
              >
                Book Consultation
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Foundry Press. All rights reserved. Accra, Ghana.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors cursor-pointer uppercase tracking-wider text-[11px] font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#16A34A]" />
          </button>
        </div>
      </div>
    </footer>
  );
};


