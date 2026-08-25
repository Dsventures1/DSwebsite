import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Globe2, 
  ShieldCheck, 
  Sparkles, 
  MapPin, 
  Building2, 
  CheckCircle2,
  Clock
} from 'lucide-react';
import { CountryPresence } from '../types';

export const GlobalPresence: React.FC = () => {
  const [activeCountry, setActiveCountry] = useState<string>('all');

  const countries: CountryPresence[] = [
    {
      name: 'India',
      code: 'IN',
      flag: '🇮🇳',
      compliance: 'NABH & NMC Compliant',
      activePractices: '17 Doctors & Clinics',
      region: 'Delhi, Mumbai, Bengaluru, Hyderabad'
    },
    {
      name: 'United Arab Emirates',
      code: 'AE',
      flag: '🇦🇪',
      compliance: 'DHA, DOH & MOH Guidelines',
      activePractices: '7+ Specialty Centers',
      region: 'Dubai, Abu Dhabi, Sharjah'
    },
    {
      name: 'United States',
      code: 'US',
      flag: '🇺🇸',
      compliance: 'HIPAA & TCPA Compliant AI',
      activePractices: '6 Private Practices',
      region: 'CA, NY, TX, FL'
    },
    {
      name: 'United Kingdom',
      code: 'GB',
      flag: '🇬🇧',
      compliance: 'GMC & NHS Digital Standards',
      activePractices: '11 Private Clinics',
      region: 'London, Manchester, Birmingham'
    },
    {
      name: 'Singapore',
      code: 'SG',
      flag: '🇸🇬',
      compliance: 'SMC & PDPA Healthcare Standards',
      activePractices: '2 Specialist Centers',
      region: 'Orchard, Novena, Raffles Place'
    },
    {
      name: 'Ireland & UK Europe',
      code: 'IE',
      flag: '🇮🇪',
      compliance: 'GDPR & Medical Council of Ireland',
      activePractices: '4 Private Clinics',
      region: 'Dublin, Cork, Galway'
    },
    {
      name: 'Germany & EU',
      code: 'DE',
      flag: '🇩🇪',
      compliance: 'EU GDPR & HWG Medical Advertising',
      activePractices: '5 Aesthetics & Dental',
      region: 'Berlin, Munich, Frankfurt'
    },
    {
      name: 'Netherlands',
      code: 'NL',
      flag: '🇳🇱',
      compliance: 'BIG-Register & AVG Compliant',
      activePractices: '12+ Specialty Practices',
      region: 'Amsterdam, Rotterdam, Utrecht'
    },
    {
      name: 'New Zealand',
      code: 'NZ',
      flag: '🇳🇿',
      compliance: 'MCNZ & Privacy Act 2020',
      activePractices: '1 Private Practices',
      region: 'Auckland, Wellington, Christchurch'
    },
    {
      name: 'Spain',
      code: 'ES',
      flag: '🇪🇸',
      compliance: 'AEPD & CGCOM Regulations',
      activePractices: '3 Medical & Aesthetic Clinics',
      region: 'Madrid, Barcelona, Valencia'
    },
    {
      name: 'Canada',
      code: 'CA',
      flag: '🇨🇦',
      compliance: 'PIPEDA & Provincial Standards',
      activePractices: '2 Medical Groups',
      region: 'Toronto, Vancouver, Montreal'
    },
    {
      name: 'Australia',
      code: 'AU',
      flag: '🇦🇺',
      compliance: 'AHPRA Advertising Standards',
      activePractices: '2 Aesthetic & Dental Practices',
      region: 'Sydney, Melbourne, Brisbane'
    }
  ];

  return (
    <section id="global" className="py-20 relative overflow-hidden bg-white/[0.04] backdrop-blur-xl border-y border-white/15">
      {/* Background globe visual radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-500/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
            <Globe2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>International Agency Credibility</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-heading max-w-4xl">
            Trusted by practices across <span className="text-cyan-300">India, UAE, USA, UK, Singapore, Europe & Beyond</span>
          </h2>

          <p className="text-sm text-slate-200 max-w-2xl mt-3 font-normal">
            Our AI voice receptionists, patient funnels, and personal branding models are pre-configured to adhere strictly to your local healthcare jurisdiction laws.
          </p>
        </div>

        {/* Global Country Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {countries.map((country, idx) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-5 rounded-2xl bg-white/[0.08] border border-white/15 hover:border-white/35 hover:bg-white/[0.12] backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.25)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{country.flag}</span>
                  <div>
                    <h3 className="text-base font-bold text-white font-heading">{country.name}</h3>
                    <span className="text-[11px] text-slate-300">{country.region}</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-cyan-200 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20 backdrop-blur-md">
                  {country.code}
                </span>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
                <div className="flex items-center justify-between text-slate-200">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Regulatory Standard:
                  </span>
                  <span className="font-semibold text-emerald-300">{country.compliance}</span>
                </div>

                <div className="flex items-center justify-between text-slate-200">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                    Active Footprint:
                  </span>
                  <span className="font-medium text-slate-200">{country.activePractices}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Timezones & Latency Bar */}
        <div className="mt-8 p-4 rounded-xl bg-white/[0.06] border border-white/15 backdrop-blur-md flex flex-col md:flex-row items-center justify-between text-xs text-slate-300 gap-4 shadow-sm">
          <div className="flex items-center gap-2 text-slate-200 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <span>Global Edge Deployment · Multi-region telephony infrastructure for 0ms voice delay</span>
          </div>
          <div className="flex items-center gap-4 text-cyan-300 font-medium">
            <span>IST (UTC+5:30)</span>
            <span>GST (UTC+4)</span>
            <span>EST (UTC-5)</span>
            <span>GMT (UTC+0)</span>
            <span>AEST (UTC+10)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
