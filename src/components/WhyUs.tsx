import React from 'react';
import { motion } from 'motion/react';
import { 
  Cpu, 
  Layers, 
  TrendingUp, 
  Sparkles, 
  Check, 
  X, 
  Stethoscope,
  Award
} from 'lucide-react';

export const WhyUs: React.FC = () => {
  const whyChoosePillars = [
    {
      number: '01',
      title: 'Healthcare-Focused Expertise',
      description: 'We understand medical marketing regulations, patient psychology, and what makes doctors trustworthy online — not generic business templates.',
      icon: Stethoscope,
      badge: 'Ethical & Compliant'
    },
    {
      number: '02',
      title: 'AI-First Approach',
      description: 'From voice agents to clone avatars, we use cutting-edge AI to scale your presence without scaling your workload.',
      icon: Cpu,
      badge: 'Zero Manual Busywork'
    },
    {
      number: '03',
      title: 'End-to-End Solution',
      description: 'One agency for branding, visibility, ads, website, and automation — no juggling five different vendors.',
      icon: Layers,
      badge: 'Single Unified Partner'
    },
    {
      number: '04',
      title: 'Built for Growth',
      description: 'Every service is designed to bring in more patients, more bookings, and more revenue, not just likes and followers.',
      icon: TrendingUp,
      badge: 'Real Consultations'
    }
  ];

  const comparisonData = [
    {
      feature: 'Specialized in Healthcare & Medical Ethics',
      doctorstory: true,
      traditional: 'Rarely (Generic)',
      freelancer: false
    },
    {
      feature: '24/7 AI Voice Phone Receptionist for Inbound Calls',
      doctorstory: true,
      traditional: false,
      freelancer: false
    },
    {
      feature: 'Doctor AI Video Clone Avatars (Zero Camera Hours)',
      doctorstory: true,
      traditional: false,
      freelancer: false
    },
    {
      feature: 'Direct Integration with Clinic EHRs & Google Calendar',
      doctorstory: true,
      traditional: 'Manual leads only',
      freelancer: false
    },
    {
      feature: 'Global Compliance (HIPAA, DHA, AHPRA, India NABH)',
      doctorstory: true,
      traditional: false,
      freelancer: false
    },
    {
      feature: 'Single Unified Team (No juggling 4-5 freelancers)',
      doctorstory: true,
      traditional: 'High retainers, slow turnaround',
      freelancer: false
    }
  ];

  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>The Doctorstory Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading max-w-3xl">
            Why Choose Doctorstory
          </h2>
          <p className="text-base text-slate-200 max-w-2xl mt-4">
            We bridge the gap between complex medical clinical practice and cutting-edge artificial intelligence to deliver measurable patient growth.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-4" />
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {whyChoosePillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-2xl bg-white/[0.08] p-7 border border-white/15 hover:border-white/35 hover:bg-white/[0.12] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] backdrop-blur-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number and Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black text-cyan-300/40 font-heading">
                      {item.number}
                    </span>
                    <span className="text-[10px] font-bold text-cyan-300 bg-white/10 border border-white/20 px-2.5 py-0.5 rounded-full backdrop-blur-md">
                      {item.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-cyan-300 mb-4 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Exact Title */}
                  <h3 className="text-lg font-bold text-white mb-3 font-heading leading-snug">
                    {item.title}
                  </h3>

                  {/* Exact Description */}
                  <p className="text-sm text-slate-200 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/15 flex items-center gap-1 text-xs text-slate-300">
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Tested across global clinics</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Always Visible Comparison Section */}
        <div className="mt-14 sm:mt-20">
          <div className="text-center mb-8 px-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/25 text-cyan-300 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-2.5 backdrop-blur-md">
              <Award className="w-3.5 h-3.5 text-cyan-400" />
              <span>Full Capability Matrix</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-extrabold text-white font-heading">
              Our Agency vs Other Traditional Agencies
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto mt-2 leading-relaxed">
              See why leading healthcare practices and doctors choose an AI-native specialized partner over generic agencies and freelancers.
            </p>
          </div>

          {/* Desktop Table View (md and up) */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-white/20 bg-white/[0.08] backdrop-blur-2xl p-6 text-left shadow-[0_20px_50px_rgba(0,0,0,0.5)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/15 text-xs font-bold uppercase tracking-wider text-slate-300">
                  <th className="py-3.5 px-4">Capability &amp; Scope</th>
                  <th className="py-3.5 px-4 text-cyan-300 bg-white/10 rounded-t-xl border border-white/10">Doctorstory.in</th>
                  <th className="py-3.5 px-4">Traditional Agency</th>
                  <th className="py-3.5 px-4">Generic Freelancers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-xs sm:text-sm">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.04] transition-colors">
                    <td className="py-3.5 px-4 font-medium text-slate-100">{row.feature}</td>
                    <td className="py-3.5 px-4 bg-white/[0.06] text-cyan-300 font-semibold border-x border-white/10">
                      <div className="flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-cyan-400" />
                        <span>Included / AI Native</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-300">
                      {typeof row.traditional === 'boolean' ? (
                        row.traditional ? <Check className="w-4 h-4 text-slate-200" /> : <X className="w-4 h-4 text-rose-400" />
                      ) : (
                        <span>{row.traditional}</span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-slate-300">
                      <X className="w-4 h-4 text-rose-400" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Optimized Card Layout (sm and down) */}
          <div className="md:hidden space-y-3.5">
            {comparisonData.map((row, idx) => (
              <div 
                key={idx}
                className="rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-xl p-4 shadow-lg text-left"
              >
                {/* Feature Title */}
                <h4 className="text-sm font-bold text-white mb-3 flex items-start gap-2 leading-snug">
                  <span className="text-cyan-400 font-mono text-xs mt-0.5 font-bold">0{idx + 1}.</span>
                  <span>{row.feature}</span>
                </h4>

                {/* Doctorstory Highlight Row */}
                <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-400/30 flex items-center justify-between gap-2 mb-2.5 shadow-sm">
                  <span className="text-xs font-extrabold text-cyan-300 uppercase tracking-wide">
                    Doctorstory.in
                  </span>
                  <div className="inline-flex items-center gap-1 text-xs font-bold text-cyan-300 bg-cyan-400/20 px-2.5 py-1 rounded-full border border-cyan-400/30">
                    <Check className="w-3.5 h-3.5 text-cyan-400" />
                    <span>AI Native</span>
                  </div>
                </div>

                {/* Competitors Breakdown */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {/* Traditional Agency */}
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                    <span className="text-[10px] uppercase font-bold text-slate-400 mb-1">Traditional</span>
                    <div className="text-slate-300 font-medium">
                      {typeof row.traditional === 'boolean' ? (
                        row.traditional ? (
                          <span className="inline-flex items-center gap-1 text-slate-200">
                            <Check className="w-3.5 h-3.5 text-slate-300" /> Yes
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-rose-400 font-semibold">
                            <X className="w-3.5 h-3.5" /> No
                          </span>
                        )
                      ) : (
                        <span className="text-[11px] leading-tight text-slate-300">{row.traditional}</span>
                      )}
                    </div>
                  </div>

                  {/* Generic Freelancers */}
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                    <span className="text-[10px] uppercase font-bold text-slate-400 mb-1">Freelancers</span>
                    <div className="text-rose-400 font-semibold inline-flex items-center gap-1 text-xs">
                      <X className="w-3.5 h-3.5" /> No
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
