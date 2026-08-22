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

export const PracticeCalculator: React.FC<CalculatorProps> = ({ onOpenConsultation }) => {
  const [monthlyInboundCalls, setMonthlyInboundCalls] = useState<number>(350);
  const [avgPatientValue, setAvgPatientValue] = useState<number>(150); // USD/equivalent
  const [missedCallRate, setMissedCallRate] = useState<number>(25); // percentage
  const [currency, setCurrency] = useState<'USD' | 'INR' | 'AED'>('USD');

  const currencySymbols = {
    USD: '$',
    INR: '₹',
    AED: 'AED '
  };

  const currencyMultiplier = {
    USD: 1,
    INR: 82,
    AED: 3.67
  };

  // Calculations
  const missedCallsPerMonth = Math.round((monthlyInboundCalls * missedCallRate) / 100);
  const convertedRecoveredPatients = Math.round(missedCallsPerMonth * 0.45); // 45% conversion with instant 24/7 AI booking
  const baseAvg = currency === 'INR' ? avgPatientValue * 40 : currency === 'AED' ? avgPatientValue * 3.5 : avgPatientValue;
  const estimatedRevenueRecovered = convertedRecoveredPatients * baseAvg;
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
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs text-slate-300 font-semibold">Select Currency:</span>
                {(['USD', 'INR', 'AED'] as const).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr)}
                    className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all ${
                      currency === curr
                        ? 'bg-cyan-400 text-slate-950 shadow-md'
                        : 'bg-white/10 text-slate-200 border border-white/15 hover:bg-white/20 hover:text-white backdrop-blur-md'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
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
                    {currencySymbols[currency]}
                    {currency === 'INR' ? (avgPatientValue * 40).toLocaleString() : currency === 'AED' ? Math.round(avgPatientValue * 3.5).toLocaleString() : avgPatientValue}
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
              <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.08] border border-white/20 shadow-[0_15px_40px_rgba(0,0,0,0.4)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] backdrop-blur-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 px-3.5 py-1 bg-cyan-400 text-slate-950 font-bold text-[10px] uppercase rounded-bl-xl tracking-wider shadow-sm">
                  Projected Monthly Upside
                </div>

                <div className="text-xs text-slate-300 uppercase tracking-wider font-semibold mb-1">
                  Estimated Recovered Revenue
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-300 font-heading mb-6">
                  {currencySymbols[currency]}
                  {estimatedRevenueRecovered.toLocaleString()}
                  <span className="text-xs text-slate-300 font-normal ml-1">/ month</span>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/15 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-slate-200">
                      <PhoneMissed className="w-4 h-4 text-rose-400" />
                      Missed Patient Calls Prevented:
                    </span>
                    <span className="text-white font-bold font-mono">~{missedCallsPerMonth} calls</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-slate-200">
                      <TrendingUp className="w-4 h-4 text-cyan-400" />
                      New Confirmed Appointments:
                    </span>
                    <span className="text-cyan-300 font-bold font-mono">+{convertedRecoveredPatients} patients/mo</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-slate-200">
                      <Clock className="w-4 h-4 text-emerald-400" />
                      Staff Clinical Hours Saved:
                    </span>
                    <span className="text-emerald-300 font-bold font-mono">~{hoursSavedPerMonth} hours/mo</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/15">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all"
                  >
                    <span>Capture This Growth For Your Clinic</span>
                    <ArrowRight className="w-4 h-4" />
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
