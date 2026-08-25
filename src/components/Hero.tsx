import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  Bot, 
  Video, 
  PhoneCall, 
  ShieldCheck, 
  Activity, 
  Globe2, 
  TrendingUp, 
  Clock, 
  CheckCircle2
} from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState(0);

  // Auto rotate the interactive feature showcase
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const heroShowcaseCards = [
    {
      title: "24/7 AI Voice Receptionist",
      badge: "Instant Patient Booking",
      icon: PhoneCall,
      highlight: "0 Missed Calls",
      stat: "100% Call Capture",
      desc: "Answers complex clinical queries in fluent native accents, checks doctor availability, and confirms appointments directly to clinic EHR.",
      status: "Online · Low Latency (400ms)"
    },
    {
      title: "AI Video Clone Avatar",
      badge: "Authority at Scale",
      icon: Video,
      highlight: "30 Reels / Month",
      stat: "10x Content Speed",
      desc: "Generate hyper-realistic video explainers in the doctor's voice & likeness without spending grueling hours in front of a studio camera.",
      status: "4K Render · Multi-language"
    },
    {
      title: "GMB & High-Intent Ads",
      badge: "Top 3 Local Map Pack",
      icon: TrendingUp,
      highlight: "+240% Inbound Calls",
      stat: "Guaranteed ROI",
      desc: "Dominant local search authority paired with compliant Meta & Google campaigns that turn local patients into confirmed consultations.",
      status: "HIPAA / NABH Compliant"
    }
  ];

  const rotatingTrustItems = [
    { text: "24/7 AI Receptionists for Clinics & Hospitals", icon: Bot },
    { text: "Global Clients: India · UAE · USA · UK · Canada · Australia", icon: Globe2 },
    { text: "Healthcare-Focused Since Day One", icon: ShieldCheck }
  ];

  return (
    <section id="hero-section" className="relative min-h-[92vh] pt-24 sm:pt-32 pb-16 flex flex-col justify-between overflow-hidden">
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-blue-500/20 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-400/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Global Credibility Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-[11px] sm:text-xs font-semibold tracking-wide mb-5 sm:mb-6 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Global AI Agency for Doctors, Clinics, Hospitals &amp; Diagnostic Centres</span>
            </div>

            {/* High Impact Headline - Properly Sized and Balanced */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.18] sm:leading-[1.14] mb-5 sm:mb-6 font-heading">
              Elevate Your Medical Practice with{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-400 bg-clip-text text-transparent cyan-glow-text inline-block">
                Next-Gen AI
              </span>{' '}
              &amp; Personal Branding.
            </h1>

            {/* Clear Subhead */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed max-w-2xl mb-7 sm:mb-8 font-normal">
              We help doctors, clinics, hospitals, and diagnostic centres build powerful personal branding and attract patients through cutting-edge digital content, marketing, and automations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10">
              <a
                href="#services"
                id="hero-explore-services-btn"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:shadow-[0_0_35px_rgba(34,211,238,0.6)] transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>

              <button
                id="hero-book-consult-btn"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/25 hover:border-cyan-300 backdrop-blur-xl transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
              >
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>Book a Free Consultation</span>
              </button>
            </div>

            {/* Fast Quick-Stats Strip */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-5 sm:pt-6 border-t border-white/15 w-full max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">24/7</div>
                <div className="text-[11px] sm:text-xs text-slate-300 mt-0.5 font-medium">AI Patient Receptionist</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-300 font-heading">10+</div>
                <div className="text-[11px] sm:text-xs text-slate-300 mt-0.5 font-medium">Global Countries</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">100%</div>
                <div className="text-[11px] sm:text-xs text-slate-300 mt-0.5 font-medium">Healthcare Focused</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive AI Automation System Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl bg-white/[0.08] p-6 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] backdrop-blur-2xl">
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/15">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80 shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-sm" />
                  <span className="text-xs font-medium text-slate-300 ml-2">Doctorstory AI Automation Engine</span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-cyan-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  Live Sync
                </span>
              </div>

              {/* Selector Tabs */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {heroShowcaseCards.map((card, idx) => (
                  <button
                    key={card.title}
                    onClick={() => setActiveTab(idx)}
                    className={`text-xs py-2 px-2.5 rounded-xl text-center font-medium transition-all ${
                      activeTab === idx
                        ? 'bg-cyan-400/25 text-white border border-cyan-400/60 shadow-[0_0_15px_rgba(34,211,238,0.25)] backdrop-blur-md'
                        : 'bg-white/[0.06] text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white backdrop-blur-sm'
                    }`}
                  >
                    {idx === 0 ? 'AI Reception' : idx === 1 ? 'AI Clone' : 'GMB & Ads'}
                  </button>
                ))}
              </div>

              {/* Dynamic Active Display Card */}
              {(() => {
                const current = heroShowcaseCards[activeTab];
                const IconComponent = current.icon;
                return (
                  <div className="bg-white/[0.07] rounded-xl p-5 border border-white/15 backdrop-blur-xl relative overflow-hidden shadow-inner">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-white/10 border border-white/20 text-cyan-300 shadow-sm">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-xs uppercase tracking-wider text-cyan-300 font-bold">{current.badge}</div>
                          <h3 className="text-base font-bold text-white">{current.title}</h3>
                        </div>
                      </div>
                      <span className="text-xs font-extrabold text-emerald-300 bg-emerald-950/60 px-2.5 py-1 rounded-lg border border-emerald-400/30">
                        {current.highlight}
                      </span>
                    </div>

                    <p className="text-xs text-slate-200 leading-relaxed mb-4 font-normal">
                      {current.desc}
                    </p>

                    {/* Live Activity Simulation */}
                    <div className="bg-black/25 rounded-xl p-3.5 border border-white/10 backdrop-blur-md text-[11px] space-y-2">
                      <div className="flex items-center justify-between text-slate-300">
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-cyan-400" />
                          System Health
                        </span>
                        <span className="text-cyan-300 font-mono">{current.status}</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-200 font-medium">
                        <span className="flex items-center gap-1.5 text-emerald-400">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Automation Status
                        </span>
                        <span className="text-white font-semibold">{current.stat}</span>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* Bottom Notification Capsule */}
              <div className="mt-4 flex items-center justify-between text-xs text-slate-300 px-2">
                <span className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  Real-time patient intake pipeline
                </span>
                <span className="text-slate-200 font-semibold">Doctorstory.in v4.2</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Rotating Badge & Stat Strip Below the Fold */}
      <div className="w-full mt-12 pt-6 border-y border-white/15 bg-white/[0.05] backdrop-blur-xl shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3">
            {rotatingTrustItems.map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 py-2.5 px-3.5 rounded-xl bg-white/[0.07] border border-white/15 text-slate-200 text-xs sm:text-sm font-medium backdrop-blur-md hover:bg-white/10 transition-colors shadow-sm"
                >
                  <div className="p-1.5 rounded-lg bg-white/10 text-cyan-300 shrink-0 border border-white/15">
                    <ItemIcon className="w-4 h-4" />
                  </div>
                  <span className="line-clamp-1">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
