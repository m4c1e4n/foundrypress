import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { WhoWeAre } from '../components/WhoWeAre';
import { WhatWeDo } from '../components/WhatWeDo';
import { HowItWorks } from '../components/HowItWorks';
import { TypesOfBooks } from '../components/TypesOfBooks';
import { WhyWriteABook } from '../components/WhyWriteABook';
import { ContactSection } from '../components/ContactSection';
import { ServiceItem } from '../types';

interface HomePageProps {
  onOpenConsultation: () => void;
  onSelectService: (service: ServiceItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultation, onSelectService }) => {
  return (
    <div>
      <Hero onOpenConsultation={onOpenConsultation} />
      
      <WhoWeAre />

      <WhatWeDo onSelectService={onSelectService} />

      <HowItWorks onOpenConsultation={onOpenConsultation} />

      <TypesOfBooks />

      <WhyWriteABook />

      <ContactSection onOpenConsultation={onOpenConsultation} />
    </div>
  );
};
