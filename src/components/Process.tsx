import React from 'react';
import { motion } from 'motion/react';
import { 
  PhoneCall, 
  Settings, 
  Rocket, 
  TrendingUp, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Clock
} from 'lucide-react';

interface ProcessProps {
  onOpenConsultation: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenConsultation }) => {
  const steps = [
    {
      step: '01',
      title: 'Discovery Call',
      description: 'We learn about your practice, goals, and patient base to build a custom growth plan.',
      icon: PhoneCall,
      timeline: 'Day 1',
      deliverable: 'Custom Practice Growth Blueprint'
    },
    {
      step: '02',
      title: 'Strategy & Setup',
      description: 'We set up your GMB, website, ad campaigns, and AI voice agent tailored to your specialty.',
      icon: Settings,
      timeline: 'Days 2–4',
      deliverable: 'AI Agent Training & Asset Setup'
    },
    {
      step: '03',
      title: 'Launch',
      description: 'Your brand goes live across platforms with content, ads, and automation running.',
      icon: Rocket,
      timeline: 'Day 5',
      deliverable: '24/7 Live Patient Intake System'
    },
    {
      step: '04',
      title: 'Ongoing Growth',
      description: 'We track, optimize, and scale, continuously improving results month over month.',
      icon: TrendingUp,
      timeline: 'Continuous',
      deliverable: 'Bi-weekly Analytics & ROI Optimization'
    }
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Frictionless 4-Stage Execution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading max-w-3xl">
            How We Work
          </h2>
          <p className="text-base text-slate-200 max-w-2xl mt-4">
            A fast, predictable rollout engineered to go from zero to live AI patient intake in under 5 business days.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-4" />
        </div>

        {/* 4-Step Horizontal Timeline */}
        <div className="relative mt-8">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-white/10 via-cyan-400/50 to-white/10 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="flex flex-col rounded-2xl bg-white/[0.08] p-6 border border-white/15 hover:border-white/35 hover:bg-white/[0.12] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] backdrop-blur-2xl transition-all duration-300 group"
                >
                  {/* Top Step Badge & Timeline */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-full bg-cyan-400 text-slate-950 font-black text-sm flex items-center justify-center font-heading shadow-[0_0_20px_rgba(34,211,238,0.45)] group-hover:scale-110 transition-transform">
                      {item.step}
                    </div>
                    <span className="text-[11px] font-semibold text-cyan-200 bg-white/10 border border-white/20 px-2.5 py-0.5 rounded-full backdrop-blur-md flex items-center gap-1">
                      <Clock className="w-3 h-3 text-cyan-400" />
                      {item.timeline}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-cyan-300 mb-4 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Exact Title */}
                  <h3 className="text-xl font-bold text-white mb-2 font-heading">
                    {item.title}
                  </h3>

                  {/* Exact Description */}
                  <p className="text-sm text-slate-200 leading-relaxed font-normal mb-6 flex-1">
                    {item.description}
                  </p>

                  {/* Deliverable Badge */}
                  <div className="pt-4 border-t border-white/15 flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-slate-200 font-medium">{item.deliverable}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all transform hover:-translate-y-0.5"
          >
            <span>Start Step 1 with a Free Discovery Call</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>
      </div>
    </section>
  );
};
