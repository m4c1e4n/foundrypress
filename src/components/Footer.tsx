import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { FoundryLogo } from './FoundryLogo';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#7A0000] text-slate-100 pt-16 pb-12 border-t border-[#7A0000]/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/20">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center group cursor-pointer"
              aria-label="Foundry Press Home"
            >
              <FoundryLogo textColor="light" />
            </Link>

            <blockquote className="font-serif text-xl italic text-slate-200">
              “Every story deserves a book.”
            </blockquote>

            <p className="text-xs text-slate-300 font-sans-clean leading-relaxed font-normal max-w-sm">
              We turn spoken ideas, personal memoirs, and professional expertise into archival-quality published books in Ghana and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <span className="uppercase tracking-[0.2em] text-white font-bold block mb-3">
              Navigation
            </span>
            <ul className="space-y-1 text-slate-200 font-medium">
              <li><Link to="/" className="hover:text-white hover:underline transition-colors block py-0.5">Home</Link></li>
              <li><Link to="/who-we-are" className="hover:text-white hover:underline transition-colors block py-0.5">Who We Are</Link></li>
              <li><Link to="/services" className="hover:text-white hover:underline transition-colors block py-0.5">Services</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white hover:underline transition-colors block py-0.5">How It Works</Link></li>
              <li><Link to="/book-types" className="hover:text-white hover:underline transition-colors block py-0.5">Types of Books</Link></li>
              <li><Link to="/deliverables" className="hover:text-white hover:underline transition-colors block py-0.5">Deliverables</Link></li>
              <li><Link to="/why-write" className="hover:text-white hover:underline transition-colors block py-0.5">Why Write A Book</Link></li>
              <li><Link to="/faq" className="hover:text-white hover:underline transition-colors block py-0.5">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-white hover:underline transition-colors block py-0.5">Contact</Link></li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="md:col-span-4 space-y-4 text-xs">
            <span className="uppercase tracking-[0.2em] text-white font-bold block mb-3">
              Publishing Imprint
            </span>
            <p className="text-slate-200 font-medium leading-relaxed">
              Labone Social Club<br />
              1 Abafun Crescent<br />
              Labone, Accra<br />
              Direct: +233 50 073 2369<br />
              <a href="mailto:foundrypressgh@gmail.com" className="hover:text-white underline transition-colors block mt-0.5">
                foundrypressgh@gmail.com
              </a>
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-5 py-2.5 bg-white text-[#7A0000] hover:bg-[#003B46] hover:text-white text-[11px] uppercase tracking-[0.2em] font-bold rounded-full transition-colors cursor-pointer shadow-sm"
              >
                Book Consultation
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1">
            <span>© {new Date().getFullYear()} Foundry Press. All rights reserved. Accra, Ghana.</span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span>
              created by{' '}
              <a
                href="https://m4c1e4n.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-100 hover:text-white underline font-medium transition-colors"
              >
                Maclean
              </a>
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-200 hover:text-white transition-colors cursor-pointer uppercase tracking-wider text-[11px] font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-[#7A0000] bg-white p-0.5 rounded-full" />
          </button>
        </div>
      </div>
    </footer>
  );
};


