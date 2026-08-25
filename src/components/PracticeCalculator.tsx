import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Calculator, 
  Sparkles, 
  TrendingUp, 
  Clock, 
  PhoneMissed, 
  Bot, 
  ArrowRight,
  DollarSign
} from 'lucide-react';

interface CalculatorProps {
  onOpenConsultation: () => void;
}

type CurrencyCode = 'USD' | 'INR' | 'AED' | 'GBP' | 'EUR' | 'SGD' | 'CAD' | 'AUD' | 'NZD';

interface CurrencyData {
  code: CurrencyCode;
  symbol: string;
  flag: string;
  label: string;
  multiplier: number;
}

const CURRENCIES: CurrencyData[] = [
  { code: 'USD', symbol: '$', flag: '🇺🇸', label: 'USD ($)', multiplier: 1 },
  { code: 'INR', symbol: '₹', flag: '🇮🇳', label: 'INR (₹)', multiplier: 45 },
  { code: 'AED', symbol: 'AED ', flag: '🇦🇪', label: 'AED', multiplier: 3.67 },
  { code: 'GBP', symbol: '£', flag: '🇬🇧', label: 'GBP (£)', multiplier: 0.8 },
  { code: 'EUR', symbol: '€', flag: '🇪🇺', label: 'EUR (€)', multiplier: 0.92 },
  { code: 'SGD', symbol: 'S$', flag: '🇸🇬', label: 'SGD (S$)', multiplier: 1.35 },
  { code: 'CAD', symbol: 'CA$', flag: '🇨🇦', label: 'CAD (CA$)', multiplier: 1.38 },
  { code: 'AUD', symbol: 'A$', flag: '🇦🇺', label: 'AUD (A$)', multiplier: 1.55 },
  { code: 'NZD', symbol: 'NZ$', flag: '🇳🇿', label: 'NZD (NZ$)', multiplier: 1.65 },
];

export const PracticeCalculator: React.FC<CalculatorProps> = ({ onOpenConsultation }) => {
  const [monthlyInboundCalls, setMonthlyInboundCalls] = useState<number>(350);
  const [avgPatientValue, setAvgPatientValue] = useState<number>(150); // USD base
  const [missedCallRate, setMissedCallRate] = useState<number>(25); // percentage
  const [currency, setCurrency] = useState<CurrencyCode>('USD');

  const selectedCurrency = CURRENCIES.find(c => c.code === currency) || CURRENCIES[0];

  // Calculations
  const missedCallsPerMonth = Math.round((monthlyInboundCalls * missedCallRate) / 100);
  const convertedRecoveredPatients = Math.round(missedCallsPerMonth * 0.45); // 45% conversion with instant 24/7 AI booking
  const convertedAvgValue = Math.round(avgPatientValue * selectedCurrency.multiplier);
  const estimatedRevenueRecovered = convertedRecoveredPatients * convertedAvgValue;
  const hoursSavedPerMonth = Math.round(35 + (monthlyInboundCalls * 0.08));

  return (
    <section id="calculator" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-white/[0.08] p-8 sm:p-12 border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Interactive Inputs */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                <Calculator className="w-3.5 h-3.5 text-cyan-400" />
                <span>Interactive Practice ROI Estimator</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading tracking-tight mb-3">
                Calculate Revenue Lost to Missed Calls & Manual Busywork
              </h2>

              <p className="text-sm text-slate-200 mb-8">
                Clinics lose up to 30% of incoming prospective patients during busy front-desk hours or after-clinic evenings. See what Doctorstory AI automation recovers for you.
              </p>

              {/* Currency Selector */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-300 font-semibold">Select Practice Currency:</span>
                  <span className="text-[11px] text-cyan-300 font-medium">Auto-calibrated for regional healthcare billing</span>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {CURRENCIES.map((curr) => (
                    <button
                      key={curr.code}
                      onClick={() => setCurrency(curr.code)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                        currency === curr.code
                          ? 'bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.4)] scale-105'
                          : 'bg-white/10 text-slate-200 border border-white/15 hover:bg-white/20 hover:text-white backdrop-blur-md'
                      }`}
                    >
                      <span>{curr.flag}</span>
                      <span>{curr.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider 1: Monthly Calls */}
              <div className="mb-6">
                <div className="flex justify-between items-center text-sm font-semibold mb-2">
                  <span className="text-slate-200">Estimated Monthly Inbound Patient Calls:</span>
                  <span className="text-cyan-300 font-mono text-base">{monthlyInboundCalls} calls</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="1500"
                  step="25"
                  value={monthlyInboundCalls}
                  onChange={(e) => setMonthlyInboundCalls(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              {/* Slider 2: Average Patient Consultation Value */}
              <div className="mb-6">
                <div className="flex justify-between items-center text-sm font-semibold mb-2">
                  <span className="text-slate-200">Average Consultation / Treatment Value:</span>
                  <span className="text-cyan-300 font-mono text-base">
                    {selectedCurrency.symbol}
                    {convertedAvgValue.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="800"
                  step="10"
                  value={avgPatientValue}
                  onChange={(e) => setAvgPatientValue(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              {/* Slider 3: Missed Call Rate */}
              <div>
                <div className="flex justify-between items-center text-sm font-semibold mb-2">
                  <span className="text-slate-200">Estimated Missed / After-hours Call Rate:</span>
                  <span className="text-amber-300 font-mono text-base">{missedCallRate}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="50"
                  step="5"
                  value={missedCallRate}
                  onChange={(e) => setMissedCallRate(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>
            </div>

            {/* Right Column: Calculated Outcomes */}
            <div className="lg:col-span-5">
              <div className="p-5 sm:p-7 lg:p-8 rounded-2xl bg-white/[0.08] border border-white/20 shadow-[0_15px_40px_rgba(0,0,0,0.4)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] backdrop-blur-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 px-3 py-1 bg-cyan-400 text-slate-950 font-bold text-[9px] sm:text-[10px] uppercase rounded-bl-xl tracking-wider shadow-sm">
                  Projected Monthly Upside
                </div>

                <div className="text-[11px] sm:text-xs text-slate-300 uppercase tracking-wider font-semibold mb-1 pr-24 sm:pr-0">
                  Estimated Recovered Revenue
                </div>
                <div className="text-2xl sm:text-4xl font-extrabold text-emerald-300 font-heading mb-5 sm:mb-6">
                  {selectedCurrency.symbol}
                  {estimatedRevenueRecovered.toLocaleString()}
                  <span className="text-xs text-slate-300 font-normal ml-1">/ month</span>
                </div>

                <div className="space-y-3.5 pt-4 border-t border-white/15 text-xs sm:text-sm">
                  <div className="flex items-center justify-between gap-3 bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                    <span className="flex items-center gap-2 text-slate-200 text-xs leading-snug">
                      <PhoneMissed className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>Missed Calls Prevented:</span>
                    </span>
                    <span className="text-white font-bold font-mono text-xs sm:text-sm shrink-0 whitespace-nowrap">
                      ~{missedCallsPerMonth} calls
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3 bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                    <span className="flex items-center gap-2 text-slate-200 text-xs leading-snug">
                      <TrendingUp className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>New Appointments:</span>
                    </span>
                    <span className="text-cyan-300 font-bold font-mono text-xs sm:text-sm shrink-0 whitespace-nowrap">
                      +{convertedRecoveredPatients} patients/mo
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3 bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                    <span className="flex items-center gap-2 text-slate-200 text-xs leading-snug">
                      <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Clinical Hours Saved:</span>
                    </span>
                    <span className="text-emerald-300 font-bold font-mono text-xs sm:text-sm shrink-0 whitespace-nowrap">
                      ~{hoursSavedPerMonth} hrs/mo
                    </span>
                  </div>
                </div>

                <div className="mt-5 sm:mt-6 pt-4 border-t border-white/15">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-3.5 px-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all cursor-pointer leading-tight text-center"
                  >
                    <span>Capture This Growth For Your Clinic</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
