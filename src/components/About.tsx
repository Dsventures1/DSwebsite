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
  ArrowUpRight,
  ImageIcon
} from 'lucide-react';

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
                Doctorstory.in is where medicine meets modern marketing. We help doctors and clinics build a powerful personal brand while automating the busywork that slows practices down. From AI voice agents that never miss a patient call to AI clone avatars that scale your presence across every platform, we combine healthcare expertise with cutting-edge technology. Our mission is simple: give doctors the online authority they deserve, and the systems to support it — 24/7.
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

          {/* Right Column: Visual Showcase with clearly labeled placeholder slot */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-white/[0.08] p-5 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] backdrop-blur-2xl">
              {/* Doctor / Tech Visual Slot (Clean placeholder image slot clearly marked for easy replacement) */}
              <div 
                id="about-visual-placeholder-slot"
                className="relative w-full h-80 rounded-xl overflow-hidden bg-black/30 border border-dashed border-white/30 flex flex-col items-center justify-center p-6 text-center group backdrop-blur-md"
              >
                {/* Abstract visual art layer */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-blue-500/15 to-indigo-500/20" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(34,211,238,0.2),transparent_60%)]" />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center text-cyan-300 mb-3 shadow-[0_0_25px_rgba(34,211,238,0.3)] backdrop-blur-md">
                    <Stethoscope className="w-8 h-8 text-cyan-300 animate-pulse" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-cyan-300 mb-1 flex items-center gap-1.5">
                    <ImageIcon className="w-3.5 h-3.5" />
                    Doctor & Clinic Imagery Slot
                  </span>
                  <p className="text-xs text-slate-200 max-w-xs mb-3">
                    [Swap in high-resolution doctor/hospital photography or custom clinical branding visuals here]
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] text-cyan-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    Doctorstory Brand Authority System
                  </div>
                </div>

                {/* Floating badge inside visual */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/10 backdrop-blur-xl rounded-xl p-3 border border-white/20 flex items-center justify-between text-xs z-20 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-slate-200 font-medium">99.4% Patient Trust Score</span>
                  </div>
                  <span className="text-cyan-300 font-bold">Verified ROI</span>
                </div>
              </div>

              {/* Bottom Authority Metric Bar */}
              <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1 text-slate-200 font-medium">
                  <Award className="w-4 h-4 text-cyan-400" />
                  International Standards
                </span>
                <span className="text-cyan-300 font-semibold">India · UAE · USA · UK</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
