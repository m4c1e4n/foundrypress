import React from 'react';
import { HERO_CONTENT } from '../data/content';
import bookMockupImg from '../assets/images/navy_hardcover_book_1785919313881.jpg';

interface HeroProps {
  onOpenConsultation?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="home" className="relative pt-24 lg:pt-32 pb-24 lg:pb-32 overflow-hidden bg-[#0B1B3D] text-white min-h-[520px] lg:min-h-[600px] flex flex-col justify-center">
      {/* Background Layer with Book Artwork on the Right */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#0B1B3D]">
        {/* Book image seamlessly integrated into the right side of the background */}
        <img
          src={bookMockupImg}
          alt=""
          className="absolute right-0 top-0 h-full w-full lg:w-3/5 object-cover object-center lg:object-right opacity-80 sm:opacity-90 mix-blend-lighten"
        />

        {/* Seamless Gradient Overlays blending the book image into the #0B1B3D dark navy background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B3D] via-[#0B1B3D]/85 lg:via-[#0B1B3D]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D] via-transparent to-[#0B1B3D]/70" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl" />
      </div>

      {/* Hero Content Overlay */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 relative z-10 w-full">
        <div className="max-w-2xl lg:max-w-3xl space-y-6 sm:space-y-8 text-left">
          {/* Tagline */}
          <div className="flex items-center gap-2.5 text-[#16A34A] font-semibold tracking-[0.2em] uppercase text-xs sm:text-sm">
            <span className="w-3 h-0.5 bg-[#16A34A]" />
            <span>{HERO_CONTENT.tagline}</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-sans font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.05] uppercase drop-shadow-md">
            {HERO_CONTENT.headline}
          </h1>

          {/* Subheadline paragraph */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 font-sans-clean font-normal leading-relaxed max-w-2xl drop-shadow-xs">
            {HERO_CONTENT.subheadline}
          </p>
        </div>
      </div>
    </section>
  );
};

