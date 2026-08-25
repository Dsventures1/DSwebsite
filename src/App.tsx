import React, { useState, useEffect } from 'react';
import { NetworkBackground } from './components/NetworkBackground';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { ClinicalOutcomes } from './components/ClinicalOutcomes';
import { Process } from './components/Process';
import { GlobalPresence } from './components/GlobalPresence';
import { PracticeCalculator } from './components/PracticeCalculator';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { AdminDashboard } from './components/AdminDashboard';

const SECRET_HASH = 'russian';

export default function App() {
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.replace(/^#\/?/, '').trim();
      if (hash === SECRET_HASH || hash === `admin-${SECRET_HASH}`) {
        setIsAdminOpen(true);
      } else if (isAdminOpen && !hash) {
        setIsAdminOpen(false);
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, [isAdminOpen]);

  const handleOpenConsultation = () => {
    setConsultationModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setConsultationModalOpen(false);
  };

  const handleExitAdmin = () => {
    setIsAdminOpen(false);
    window.location.hash = '';
  };

  if (isAdminOpen) {
    return <AdminDashboard onExit={handleExitAdmin} />;
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0A1541] via-[#102263] to-[#1E3A8A] text-slate-100 selection:bg-cyan-400 selection:text-slate-950 flex flex-col font-sans overflow-x-hidden">
      {/* Dynamic Frosted Glass Ambient Light Flares */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="fixed top-1/3 right-10 w-[700px] h-[700px] bg-blue-500/15 rounded-full blur-[180px] pointer-events-none z-0" />
      <div className="fixed bottom-10 left-10 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Background Neural Constellation Motif */}
      <NetworkBackground />

      {/* Sticky Header */}
      <Header onOpenConsultation={handleOpenConsultation} />

      {/* Main Page Flow */}
      <main className="flex-1 relative z-10">
        {/* 1. Hero Section */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* 2. About Us Section */}
        <About />

        {/* 3. Our Services Section */}
        <Services onOpenConsultation={handleOpenConsultation} />

        {/* 4. Why Choose Doctorstory */}
        <WhyUs />

        {/* 5. Proven Clinical Growth Outcomes & Global Doctor Testimonials */}
        <ClinicalOutcomes onOpenConsultation={handleOpenConsultation} />

        {/* 6. How We Work / Process */}
        <Process onOpenConsultation={handleOpenConsultation} />

        {/* 6. Global Presence Strip */}
        <GlobalPresence />

        {/* 7. Interactive Practice ROI Estimator */}
        <PracticeCalculator onOpenConsultation={handleOpenConsultation} />

        {/* 8. Contact & Final Consultation Section */}
        <Contact />
      </main>

      {/* 9. Global Footer */}
      <Footer />

      {/* Consultation Scheduling Modal */}
      <ConsultationModal 
        isOpen={consultationModalOpen} 
        onClose={handleCloseConsultation} 
      />
    </div>
  );
}
