import React from 'react';
import { Hero } from '../components/Hero';
import { WhoWeAre } from '../components/WhoWeAre';
import { WhatWeDo } from '../components/WhatWeDo';
import { AudioSampleSection } from '../components/AudioSampleSection';
import { HowItWorks } from '../components/HowItWorks';
import { TypesOfBooks } from '../components/TypesOfBooks';
import { WhatYouReceive } from '../components/WhatYouReceive';
import { WhyWriteABook } from '../components/WhyWriteABook';
import { FAQ } from '../components/FAQ';
import { ContactSection } from '../components/ContactSection';
import { ServiceItem } from '../types';

interface HomePageProps {
  onOpenConsultation: () => void;
  onSelectService?: (service: ServiceItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultation, onSelectService }) => {
  return (
    <div>
      {/* Hero Section */}
      <Hero onOpenConsultation={onOpenConsultation} />

      {/* Who We Are Section */}
      <WhoWeAre onOpenConsultation={onOpenConsultation} />

      {/* What We Do / Services Section */}
      {onSelectService && <WhatWeDo onSelectService={onSelectService} />}

      {/* Spoken Voice to Written Prose Transformation */}
      <AudioSampleSection />

      {/* How It Works / Process Journey Section */}
      <HowItWorks onOpenConsultation={onOpenConsultation} />

      {/* Types of Books Section */}
      <TypesOfBooks />

      {/* What You Receive / Deliverables Section */}
      <WhatYouReceive />

      {/* Why Write A Book Section */}
      <WhyWriteABook />

      {/* Frequently Asked Questions */}
      <FAQ />

      {/* Direct Contact & Booking Section */}
      <ContactSection onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

