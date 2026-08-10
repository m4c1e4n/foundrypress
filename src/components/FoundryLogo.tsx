import React from 'react';
import logoImage from '../assets/images/foundry_press_logo_1786396805496.jpg';

interface FoundryLogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'stacked';
  textColor?: 'dark' | 'light' | 'auto';
  showSubtitle?: boolean;
}

export const FoundryLogoIcon: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <div className={`relative overflow-hidden shrink-0 ${className}`}>
    <img
      src={logoImage}
      alt="Foundry Press Icon"
      className="w-full h-full object-cover object-left"
      referrerPolicy="no-referrer"
    />
  </div>
);

export const FoundryLogo: React.FC<FoundryLogoProps> = ({
  className = "",
  variant = 'full',
  textColor = 'auto',
  showSubtitle = false,
}) => {
  if (variant === 'icon') {
    return <FoundryLogoIcon className={className || "w-14 h-14"} />;
  }

  const isLightText = textColor === 'light';

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <div className={`inline-flex items-center rounded-md transition-all ${isLightText ? 'bg-white p-2 shadow-sm' : ''}`}>
        <img
          src={logoImage}
          alt="Foundry Press Logo"
          className="h-12 sm:h-16 md:h-20 lg:h-22 w-auto object-contain shrink-0"
          referrerPolicy="no-referrer"
        />
      </div>
      {showSubtitle && (
        <span className={`text-xs sm:text-sm font-serif italic hidden xl:inline-block border-l pl-3.5 py-1 ${isLightText ? 'text-slate-300 border-slate-700' : 'text-slate-500 border-slate-300'}`}>
          Every story deserves a book
        </span>
      )}
    </div>
  );
};



