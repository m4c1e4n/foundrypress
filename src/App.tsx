import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { ConsultationModal } from './components/ConsultationModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { WhoWeArePage } from './pages/WhoWeArePage';
import { ServicesPage } from './pages/ServicesPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { BookTypesPage } from './pages/BookTypesPage';
import { DeliverablesPage } from './pages/DeliverablesPage';
import { WhyWritePage } from './pages/WhyWritePage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { ServiceItem } from './types';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#faf7f2] text-[#1c1b18] font-sans-clean antialiased selection:bg-[#6b1d2f] selection:text-[#faf7f2] flex flex-col justify-between">
        {/* Navigation Header */}
        <Header onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Multi-Page Routes */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenConsultation={() => setIsConsultationOpen(true)}
                  onSelectService={(service) => setSelectedService(service)}
                />
              }
            />
            <Route
              path="/who-we-are"
              element={<WhoWeArePage onOpenConsultation={() => setIsConsultationOpen(true)} />}
            />
            <Route
              path="/services"
              element={
                <ServicesPage
                  onSelectService={(service) => setSelectedService(service)}
                  onOpenConsultation={() => setIsConsultationOpen(true)}
                />
              }
            />
            <Route
              path="/how-it-works"
              element={<HowItWorksPage onOpenConsultation={() => setIsConsultationOpen(true)} />}
            />
            <Route path="/book-types" element={<BookTypesPage />} />
            <Route path="/deliverables" element={<DeliverablesPage />} />
            <Route path="/why-write" element={<WhyWritePage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route
              path="/contact"
              element={<ContactPage onOpenConsultation={() => setIsConsultationOpen(true)} />}
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Floating WhatsApp Widget */}
        <WhatsAppWidget />

        {/* Modals & Overlay Drawers */}
        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
        />

        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />
      </div>
    </BrowserRouter>
  );
}

