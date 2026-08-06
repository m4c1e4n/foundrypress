import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, BookOpen, ArrowRight } from 'lucide-react';

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
        isScrolled ? 'shadow-sm py-2.5 sm:py-3' : 'py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0 group py-1">
          <div className="w-9 h-9 rounded-md bg-[#0B1B3D] text-white flex items-center justify-center font-serif font-bold text-xl shadow-xs group-hover:bg-[#16A34A] transition-colors shrink-0">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-[#0B1B3D] group-hover:text-[#16A34A] transition-colors leading-tight uppercase">
              FOUNDRY PRESS
            </span>
            <span className="text-[10px] tracking-wider text-slate-500 font-medium -mt-0.5 hidden xs:inline-block sm:block">
              Every story deserves a book
            </span>
          </div>
        </Link>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `text-xs xl:text-sm py-1.5 transition-all ${
                  isActive
                    ? 'text-[#16A34A] font-bold border-b-2 border-[#16A34A]'
                    : 'text-slate-700 font-semibold hover:text-[#0B1B3D]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Action & Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-slate-800 focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-slate-100 cursor-pointer"
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
                    isActive ? 'text-[#16A34A] font-bold bg-emerald-50/50' : 'text-slate-800 hover:text-[#16A34A] hover:bg-slate-50'
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



