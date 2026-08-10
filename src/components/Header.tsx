import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { FoundryLogo } from './FoundryLogo';

interface HeaderProps {
  onOpenConsultation?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Who We Are', path: '/who-we-are' },
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Book Types', path: '/book-types' },
    { name: 'Deliverables', path: '/deliverables' },
    { name: 'Why A Book', path: '/why-write' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-slate-200 ${
        isScrolled ? 'shadow-sm py-2 sm:py-2.5' : 'py-3 sm:py-3.5'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 flex items-center justify-between gap-4">
        {/* Brand Logo - Aligned Left */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center shrink-0 group py-0.5 -ml-1 sm:-ml-2 cursor-pointer"
          aria-label="Foundry Press Home"
        >
          <FoundryLogo textColor="dark" showSubtitle={true} />
        </Link>

        {/* Center/Right Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3 2xl:gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `text-xs xl:text-sm font-semibold px-2.5 py-1.5 rounded-md transition-all duration-150 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'text-[#7A0000] font-bold bg-[#7A0000]/10 border-b-2 border-[#7A0000]'
                    : 'text-slate-700 hover:text-[#7A0000] hover:bg-red-50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-slate-800 hover:text-[#7A0000] focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-red-50 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 sm:px-6 py-5 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-semibold py-3 border-b border-slate-100 flex items-center justify-between min-h-[44px] px-2 rounded-lg ${
                    isActive ? 'text-[#7A0000] font-bold bg-[#7A0000]/10' : 'text-slate-800 hover:text-[#7A0000] hover:bg-red-50'
                  }`
                }
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};



