import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Sparkles, 
  Stethoscope, 
  Bot, 
  Video, 
  Award, 
  CheckCircle2, 
  TrendingUp,
  Activity
} from 'lucide-react';
import doctorAiImage from '../assets/images/doctor_ai_growth_1787657981842.jpg';

export const About: React.FC = () => {
  const pillars = [
    {
      title: "Healthcare-Native Strategy",
      desc: "Built specifically for doctors, clinics, and hospital networks. We speak medical ethics, patient privacy, and clinical authority.",
      icon: Stethoscope
    },
    {
      title: "24/7 Autonomous Front Desk",
      desc: "AI voice receptionists that handle multilingual inquiries, book calendar appointments, and triage urgent vs routine calls.",
      icon: Bot
    },
    {
      title: "Effortless Content Cloning",
      desc: "Record once, produce forever. AI clone avatars create high-definition educational video shorts without stealing clinic time.",
      icon: Video
    },
    {
      title: "Global Compliance Mindset",
      desc: "Tailored to regulatory standards across India, UAE (DHA/MOH), USA (HIPAA), UK (NHS/GMC), Canada, and Australia (AHPRA).",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>About Doctorstory.in</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading max-w-3xl">
            Where Medicine Meets Modern Marketing & AI
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-4" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Exact Provided Copy & Core Highlights */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Primary Exact Copy Block */}
            <div className="p-8 rounded-2xl bg-white/[0.08] border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] backdrop-blur-2xl relative">
              <div className="absolute -top-3 left-8 px-3.5 py-0.5 rounded-full bg-cyan-400 text-slate-950 text-[11px] font-extrabold uppercase tracking-wide shadow-md">
                Our Core Mission
              </div>
              
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                <strong className="font-bold text-white">Doctorstory.in</strong> is where medicine meets modern marketing. We help doctors, clinics, hospitals, and diagnostic centres build powerful personal branding and attract patients while automating the busywork that slows healthcare practices down. From AI voice agents that never miss a patient inquiry to AI clone avatars that scale your presence across every platform, we combine healthcare expertise with cutting-edge technology. Our mission is simple: give clinical leaders the online authority they deserve, and the systems to support it — 24/7.
              </p>
            </div>

            {/* 4 Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div 
                    key={pillar.title}
                    className="p-5 rounded-2xl bg-white/[0.06] border border-white/15 hover:border-white/30 hover:bg-white/10 backdrop-blur-xl transition-all duration-300 group shadow-sm"
                  >
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="p-2.5 rounded-xl bg-white/10 border border-white/20 text-cyan-300 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-white font-heading">{pillar.title}</h4>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Visual Clinical Authority & Automation Showcase */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-white/[0.12] to-white/[0.05] p-2.5 sm:p-3 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] backdrop-blur-2xl group">
              {/* Image Frame Container */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src={doctorAiImage} 
                  alt="Doctorstory.in AI Healthcare Technology & Clinical Authority" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Ambient Gradient Overlays for High Contrast & Visual Integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-xl pointer-events-none" />

                {/* Top Floating Badge: Live Sync */}
                <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-white/25 text-[11px] font-semibold text-emerald-300 backdrop-blur-xl shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  24/7 AI Active
                </div>

                {/* Top Left Tag: Clinical Category */}
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-white/25 text-[11px] font-semibold text-cyan-300 backdrop-blur-xl shadow-lg">
                  <Stethoscope className="w-3.5 h-3.5 text-cyan-400" />
                  Clinical Authority
                </div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-3 left-3 right-3 bg-slate-950/85 backdrop-blur-xl rounded-xl p-3 sm:p-3.5 border border-white/20 shadow-xl">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
                      <span className="text-xs sm:text-sm font-bold text-white truncate">Specialist Medical Practice</span>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-cyan-300 bg-cyan-950/90 px-2 py-0.5 rounded border border-cyan-400/30 shrink-0">
                      99.4% Trust Score
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-300 pt-1.5 border-t border-white/10">
                    <span className="flex items-center gap-1 text-slate-200">
                      <Award className="w-3.5 h-3.5 text-cyan-400" />
                      HIPAA · NABH · DHA · GMC
                    </span>
                    <span className="text-cyan-300 font-semibold font-mono">10+ Countries</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
