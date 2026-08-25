import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Share2, 
  Megaphone, 
  Video, 
  Layout, 
  PhoneCall, 
  Sparkles, 
  ArrowRight, 
  Check, 
  X, 
  Bot, 
  Play, 
  Pause, 
  Star, 
  Clock, 
  TrendingUp,
  Volume2
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
  onOpenConsultation: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenConsultation }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [voiceSimulatorPlaying, setVoiceSimulatorPlaying] = useState(false);

  // Lock background scroll when modal is active
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  const servicesData: ServiceItem[] = [
    {
      id: 'gmb-optimization',
      title: 'Google My Business Optimization',
      shortDesc: 'We optimize your GMB profile, manage reviews, and boost local visibility so patients find you first when searching.',
      fullDesc: 'Dominate the Google 3-Pack in your local city or clinic radius. We handle full keyword-rich medical categorization, photo uploads, geo-tagging, patient review velocity campaigns, and proactive Q&A management to secure #1 search rankings.',
      iconName: 'MapPin',
      tag: 'Local Patient Growth',
      metrics: 'Avg. +240% Inbound Calls',
      features: [
        'Local SEO & Google 3-Pack ranking strategy',
        'Automated 5-star patient review generation',
        'Geo-tagged medical imagery & clinic listing audits',
        'Competitor rank monitoring & keyword alerts'
      ]
    },
    {
      id: 'social-media-management',
      title: 'Social Media Management',
      shortDesc: 'Consistent, educational content that builds your personal brand and keeps your practice top-of-mind with patients.',
      fullDesc: 'Position you as the recognized thought leader in your medical specialty. We craft medical infographics, carousels, and patient education posts that humanize your practice while adhering strictly to ethical medical promotion guidelines.',
      iconName: 'Share2',
      tag: 'Personal Brand Authority',
      metrics: '500k+ Monthly Impressions',
      features: [
        'Specialty-specific content calendar & medical copywriting',
        'Custom high-end graphic design & carousel reels',
        'Community management & patient inquiry triage',
        'Cross-platform distribution (Instagram, LinkedIn, YouTube)'
      ]
    },
    {
      id: 'social-media-ads',
      title: 'Social Media Ads',
      shortDesc: 'Targeted Meta and Google campaigns that bring in high-intent patients ready to book consultations.',
      fullDesc: 'Laser-targeted patient acquisition funnels on Meta (Instagram/Facebook) and Google Search. We capture high-intent patients searching for specialized treatments, surgeries, and second opinions with high-converting booking funnels.',
      iconName: 'Megaphone',
      tag: 'High-Intent Acquisition',
      metrics: '3.8x - 6.2x Direct Patient ROI',
      features: [
        'Google Search campaigns for high-value procedures',
        'Meta video ads targeting precise demographics & zip codes',
        'HIPAA-conscious privacy-compliant landing page funnels',
        'Live cost-per-lead tracking & appointment analytics'
      ]
    },
    {
      id: 'ai-clone-avatar',
      title: 'AI Clone Avatar',
      shortDesc: 'Your own AI-generated video presence to scale content creation without spending hours on camera.',
      fullDesc: 'Scale your video content to 30+ short-form reels every month with zero filming time after a one-time 2-minute voice/video sample. Your digital twin speaks fluently in multiple languages with realistic lip-sync and clinical gestures.',
      iconName: 'Video',
      tag: 'Scale Without Camera Time',
      metrics: '10x Content Velocity',
      features: [
        'Studio-grade 4K digital twin clone of the doctor',
        'Voice cloning with natural cadence and tone matching',
        'Multilingual video generation (English, Hindi, Arabic, Spanish)',
        'Weekly script writing researched from clinical trends'
      ]
    },
    {
      id: 'website-development',
      title: 'Website Development',
      shortDesc: 'Fast, mobile-friendly websites with clean UI and built-in appointment booking.',
      fullDesc: 'High-performance medical websites engineered for speed, patient trust, and seamless appointment conversion. Integrated directly with WhatsApp, Google Calendar, and clinic management EHR systems.',
      iconName: 'Layout',
      tag: 'High-Conversion Architecture',
      metrics: '< 1.2s Load Time · 99.9% Uptime',
      features: [
        'Ultra-fast responsive mobile-first architecture',
        '1-click appointment booking & WhatsApp integration',
        'Doctor profiles, treatment guides & video galleries',
        'SSL encryption, HIPAA-grade security & SEO schema'
      ]
    },
    {
      id: 'ai-voice-agent',
      title: 'AI Voice Agents',
      shortDesc: 'A 24/7 AI receptionist that answers calls, books appointments, and follows up so you never lose a patient to a missed call.',
      fullDesc: 'Never lose a patient to an engaged tone or after-hours call again. Our AI Voice Receptionist sounds completely natural, understands medical terminology, answers clinic FAQs, verifies doctor slots, and confirms bookings instantly.',
      iconName: 'PhoneCall',
      tag: '24/7 Front Desk Automation',
      metrics: '0 Missed Calls · 400ms Response',
      features: [
        'Instant answering with natural conversational flow',
        'Syncs directly with Google Calendar & clinic CRM',
        'Handles emergency triage & after-hours routing',
        'Automated SMS / WhatsApp appointment confirmations'
      ]
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin':
        return <MapPin className="w-6 h-6" />;
      case 'Share2':
        return <Share2 className="w-6 h-6" />;
      case 'Megaphone':
        return <Megaphone className="w-6 h-6" />;
      case 'Video':
        return <Video className="w-6 h-6" />;
      case 'Layout':
        return <Layout className="w-6 h-6" />;
      case 'PhoneCall':
        return <PhoneCall className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] max-w-[90vw]">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400 shrink-0" />
            <span className="truncate sm:whitespace-normal">Comprehensive Healthcare Growth Suite</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading max-w-3xl">
            Our Core Services
          </h2>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mt-3 sm:mt-4 leading-relaxed">
            Engineered exclusively for independent doctors, multi-specialty clinics, and hospitals looking for unfair authority and frictionless automation.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-4" />
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              id={`service-card-${service.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative rounded-2xl bg-white/[0.08] p-7 border border-white/15 hover:border-white/35 hover:bg-white/[0.12] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] backdrop-blur-2xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Subtle top-right accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400/10 rounded-bl-full pointer-events-none group-hover:bg-cyan-400/20 transition-all" />

              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3.5 rounded-xl bg-white/10 border border-white/20 text-cyan-300 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-bold text-cyan-200 bg-white/10 border border-white/20 px-3 py-1 rounded-full backdrop-blur-md">
                    {service.tag}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors font-heading">
                  {service.title}
                </h3>

                {/* Exact Service Description */}
                <p className="text-sm text-slate-200 leading-relaxed mb-6 font-normal">
                  {service.shortDesc}
                </p>

                {/* Metric pill */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/20 border border-white/10 backdrop-blur-md text-xs font-semibold text-emerald-300 mb-6">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{service.metrics}</span>
                </div>
              </div>

              {/* Action Link & Learn More trigger */}
              <div className="pt-4 border-t border-white/15 flex items-center justify-between gap-2 mt-auto">
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-bold text-cyan-300 hover:text-white inline-flex items-center gap-1.5 transition-colors group-hover:translate-x-0.5 py-1"
                >
                  <span>Explore Deep Features</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                </button>

                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-slate-200 hover:text-white transition-all shrink-0"
                >
                  Book Demo
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Interactive Modal / Deep Dive rendered into document.body */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 md:p-6 bg-slate-950/85 backdrop-blur-md">
              {/* Background Click to Dismiss */}
              <div 
                className="absolute inset-0" 
                onClick={() => {
                  setSelectedService(null);
                  setVoiceSimulatorPlaying(false);
                }} 
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.2 }}
                className="relative z-10 w-full max-w-xl max-h-[88vh] flex flex-col bg-[#071333] border border-cyan-400/30 rounded-2xl sm:rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.85)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] backdrop-blur-2xl text-left overflow-hidden my-auto"
              >
                {/* Modal Top Header Bar */}
                <div className="flex items-center justify-between px-5 sm:px-7 pt-4 sm:pt-5 pb-3.5 border-b border-white/10 shrink-0 bg-white/[0.02]">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 sm:p-2.5 rounded-xl bg-cyan-400/15 text-cyan-300 border border-cyan-400/30 shadow-md backdrop-blur-md shrink-0">
                      {getIcon(selectedService.iconName)}
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] sm:text-xs font-bold text-cyan-300 uppercase tracking-wider block">
                        {selectedService.tag}
                      </span>
                      <h3 className="text-base sm:text-xl font-bold text-white font-heading truncate">
                        {selectedService.title}
                      </h3>
                    </div>
                  </div>

                  {/* Close Button */}
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedService(null);
                      setVoiceSimulatorPlaying(false);
                    }}
                    className="p-1.5 sm:p-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-slate-300 hover:text-white transition-colors backdrop-blur-md shrink-0 ml-3 cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Scrollable Body */}
                <div className="overflow-y-auto flex-1 p-5 sm:p-7 space-y-5 custom-scrollbar">
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                    {selectedService.fullDesc}
                  </p>

                  {/* Special interactive simulator for AI Voice or AI Clone */}
                  {selectedService.id === 'ai-voice-agent' && (
                    <div className="p-4 rounded-xl bg-black/40 border border-cyan-400/25 backdrop-blur-md">
                      <div className="flex items-center justify-between mb-2 gap-2 flex-wrap">
                        <span className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                          <Volume2 className="w-4 h-4 text-cyan-400" />
                          Live AI Receptionist Audio Simulation
                        </span>
                        <span className="text-[10px] text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-400/30 font-medium">
                          Simulated Stream
                        </span>
                      </div>
                      <div className="flex items-center gap-3 bg-white/[0.08] p-3 rounded-xl border border-white/15 backdrop-blur-md">
                        <button
                          type="button"
                          onClick={() => setVoiceSimulatorPlaying(!voiceSimulatorPlaying)}
                          className="p-2.5 rounded-full bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition-all shadow-md shrink-0 cursor-pointer"
                        >
                          {voiceSimulatorPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                        </button>
                        <div className="flex-1 text-xs text-slate-200">
                          {voiceSimulatorPlaying ? (
                            <span className="text-cyan-300 italic animate-pulse">
                              "Hello! Thank you for calling Dr. Sharma's Clinic. I can schedule your consultation or answer inquiries. What day works best for you?"
                            </span>
                          ) : (
                            <span className="text-slate-300">Click play to preview natural conversational medical receptionist response.</span>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Included Implementation Highlights */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-300 mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      Included in this deployment:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedService.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 bg-white/[0.03] p-2.5 rounded-xl border border-white/10">
                          <div className="p-1 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 shrink-0 mt-0.5">
                            <Check className="w-3 h-3" />
                          </div>
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Sticky Action Footer */}
                <div className="p-4 sm:px-7 sm:py-4 border-t border-white/15 bg-slate-950/80 backdrop-blur-xl shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-slate-300 text-center sm:text-left">
                    Ready to deploy in your clinic in <span className="text-cyan-300 font-bold">under 5 business days</span>.
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedService(null);
                      onOpenConsultation();
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/25 text-center cursor-pointer"
                  >
                    Book Strategy For This Service
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};
