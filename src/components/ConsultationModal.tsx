import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  CheckSquare,
  Square,
  ChevronDown,
  User,
  Mail,
  Phone,
  Building2,
  Stethoscope,
  Globe2,
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { CustomSelect } from './ui/CustomSelect';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GROWTH_GOAL_OPTIONS = [
  '24/7 AI Voice Receptionist (Zero Missed Calls)',
  'Doctor AI Video Clone + Social Content',
  'Google My Business & Local 3-Pack Growth',
  'Targeted Patient Acquisition Ads'
];

const SPECIALTY_OPTIONS = [
  'Dental & Orthodontics / Implantology',
  'Dermatology, Cosmetology & Trichology',
  'Plastic, Aesthetic & Cosmetic Surgery',
  'Hair Transplant & Scalp Aesthetics',
  'Orthopedics, Spine & Joint Replacement',
  'Gynecology, Obstetrics & IVF / Fertility',
  'Ophthalmology, Lasik & Eye Care',
  'Cardiology & Vascular Medicine',
  'Pediatrics, Neonatology & Child Care',
  'ENT (Ear, Nose, Throat) & Head-Neck',
  'Neurology & Neurosurgery',
  'Urology, Andrology & Nephrology',
  'Psychiatry & Mental Health',
  'Gastroenterology & Hepatology',
  'Oncology & Cancer Care',
  'Endocrinology & Diabetology',
  'Pulmonology & Respiratory Care',
  'Physiotherapy, Rehab & Sports Medicine',
  'General & Laparoscopic Surgery',
  'Multi-Specialty Hospital / Daycare Center',
  'Other Clinical Specialty'
];

const COUNTRY_OPTIONS = [
  { value: 'India', label: 'India (🇮🇳)' },
  { value: 'UAE', label: 'United Arab Emirates (🇦🇪)' },
  { value: 'USA', label: 'United States (🇺🇸)' },
  { value: 'UK', label: 'United Kingdom (🇬🇧)' },
  { value: 'Canada', label: 'Canada (🇨🇦)' },
  { value: 'Australia', label: 'Australia (🇦🇺)' },
  { value: 'Singapore', label: 'Singapore (🇸🇬)' },
  { value: 'Ireland', label: 'Ireland (🇮🇪)' },
  { value: 'Netherlands', label: 'Netherlands (🇳🇱)' },
  { value: 'Germany', label: 'Germany (🇩🇪)' },
  { value: 'New Zealand', label: 'New Zealand (🇳🇿)' },
  { value: 'Spain', label: 'Spain (🇪🇸)' },
  { value: 'Other', label: 'Other Region / Country' }
];

const MARKETING_STATUS_OPTIONS = [
  'No, haven\'t done marketing yet (Starting fresh)',
  'Yes, currently running Paid Ads (Meta / Google Ads)',
  'Yes, active organic social media & reels only',
  'Yes, worked with agencies/freelancers before',
  'Yes, have an active in-house marketing team'
];

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [, setStep] = useState<1 | 2>(1);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([
    '24/7 AI Voice Receptionist (Zero Missed Calls)'
  ]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practice: '',
    country: 'India',
    customCountry: '',
    specialty: 'Dental & Orthodontics / Implantology',
    customSpecialty: '',
    marketingStatus: 'No, haven\'t done marketing yet (Starting fresh)',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const isAllSelected = selectedGoals.length === GROWTH_GOAL_OPTIONS.length;

  const handleToggleAllGoals = () => {
    if (isAllSelected) {
      setSelectedGoals([]);
    } else {
      setSelectedGoals([...GROWTH_GOAL_OPTIONS]);
    }
  };

  const handleToggleGoal = (goal: string) => {
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(selectedGoals.filter(g => g !== goal));
    } else {
      setSelectedGoals([...selectedGoals, goal]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={handleResetAndClose} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.2 }}
        className="relative z-10 w-full max-w-xl max-h-[92vh] flex flex-col bg-[#071333] border border-cyan-400/25 rounded-2xl sm:rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.85)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] backdrop-blur-2xl text-left overflow-hidden"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-7 pt-4 sm:pt-5 pb-3 border-b border-white/10 shrink-0 bg-white/[0.02]">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-[11px] font-semibold tracking-wide shadow-[0_0_10px_rgba(34,211,238,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Priority Practice Audit</span>
          </div>

          {/* Close Button */}
          <button
            onClick={handleResetAndClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-5 sm:p-7 custom-scrollbar flex-1">
          {isSuccess ? (
            <div className="py-4 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(52,211,153,0.3)]">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-heading">Consultation Scheduled!</h3>
              <p className="text-xs sm:text-sm text-slate-200 max-w-md mb-5 leading-relaxed">
                We have reserved a priority discovery slot for <span className="text-cyan-300 font-semibold">{formData.name}</span> ({formData.practice || 'Your Practice'}). A confirmation calendar invite has been sent to <span className="text-white font-medium">{formData.email}</span>.
              </p>
              <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/15 text-xs text-slate-200 w-full mb-5 text-left space-y-2 backdrop-blur-md shadow-sm">
                <div className="flex items-center gap-2">
                  <Globe2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>
                    <strong className="text-cyan-300">Country:</strong>{' '}
                    {formData.country === 'Other' ? (formData.customCountry || 'Other Country') : formData.country}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Stethoscope className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>
                    <strong className="text-cyan-300">Specialty:</strong>{' '}
                    {formData.specialty === 'Other Clinical Specialty' ? (formData.customSpecialty || 'Other Clinical Specialty') : formData.specialty}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span><strong className="text-cyan-300">Prior Marketing:</strong> {formData.marketingStatus}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-cyan-300">Selected Goals:</strong>{' '}
                    {selectedGoals.length === GROWTH_GOAL_OPTIONS.length
                      ? 'All Services / Full-Stack Transformation'
                      : selectedGoals.join(', ') || 'Custom Consultation'}
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2.5 w-full">
                <a
                  href={`https://wa.me/918104468397?text=Hello%20Doctorstory%20team%2C%20I%20scheduled%20a%20consultation%20for%20${encodeURIComponent(formData.practice || formData.name)}%20(${encodeURIComponent(formData.specialty === 'Other Clinical Specialty' ? formData.customSpecialty || 'Clinical Practice' : formData.specialty)}%20in%20${encodeURIComponent(formData.country === 'Other' ? formData.customCountry || 'International' : formData.country)})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs uppercase tracking-wider text-center shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  Instant WhatsApp Confirmation
                </a>
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-slate-200 text-xs font-semibold hover:text-white transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mb-1 tracking-tight">
                Book a Free 1-on-1 Consultation
              </h3>
              <p className="text-xs text-slate-300 mb-5 leading-relaxed">
                Learn how AI voice receptionists &amp; personal branding can help your clinical inquiries to grow
              </p>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1">Full Name *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-3.5 h-3.5 text-cyan-400/80" />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="Dr. Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-white/[0.05] border border-white/15 focus:border-cyan-300 focus:bg-[#0d1f47] text-white text-xs placeholder-slate-400 backdrop-blur-md focus:outline-none focus:ring-1 focus:ring-cyan-300 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1">Email Address *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-3.5 h-3.5 text-cyan-400/80" />
                      </div>
                      <input
                        type="email"
                        required
                        placeholder="doctor@practice.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-white/[0.05] border border-white/15 focus:border-cyan-300 focus:bg-[#0d1f47] text-white text-xs placeholder-slate-400 backdrop-blur-md focus:outline-none focus:ring-1 focus:ring-cyan-300 transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1">Phone / WhatsApp *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-3.5 h-3.5 text-cyan-400/80" />
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder="+91 / +971 / +1 ..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-white/[0.05] border border-white/15 focus:border-cyan-300 focus:bg-[#0d1f47] text-white text-xs placeholder-slate-400 backdrop-blur-md focus:outline-none focus:ring-1 focus:ring-cyan-300 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1">Clinic / Hospital Name *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Building2 className="w-3.5 h-3.5 text-cyan-400/80" />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="Clinic / Hospital Name"
                        value={formData.practice}
                        onChange={(e) => setFormData({ ...formData, practice: e.target.value })}
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-white/[0.05] border border-white/15 focus:border-cyan-300 focus:bg-[#0d1f47] text-white text-xs placeholder-slate-400 backdrop-blur-md focus:outline-none focus:ring-1 focus:ring-cyan-300 transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <CustomSelect
                    label="Clinical Specialty"
                    required
                    value={formData.specialty}
                    onChange={(val) => setFormData({ ...formData, specialty: val })}
                    options={SPECIALTY_OPTIONS}
                    icon={<Stethoscope className="w-3.5 h-3.5" />}
                    enableSearch={true}
                    searchPlaceholder="Filter specialty (e.g. Dental, Derma, IVF)..."
                  />

                  <CustomSelect
                    label="Country / Region"
                    value={formData.country}
                    onChange={(val) => setFormData({ ...formData, country: val })}
                    options={COUNTRY_OPTIONS}
                    icon={<Globe2 className="w-3.5 h-3.5" />}
                    enableSearch={false}
                  />
                </div>

                {/* Conditional Custom Country Input if 'Other' is chosen */}
                <AnimatePresence>
                  {formData.country === 'Other' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -6 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <label className="block text-xs font-semibold text-cyan-300 mb-1">
                        Please Specify Your Country / Territory <span className="text-cyan-300">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Globe2 className="w-3.5 h-3.5 text-cyan-400" />
                        </div>
                        <input
                          type="text"
                          required
                          placeholder="e.g. South Africa, France, Saudi Arabia, Brazil..."
                          value={formData.customCountry}
                          onChange={(e) => setFormData({ ...formData, customCountry: e.target.value })}
                          className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-[#0F1E4B] border border-cyan-400/50 focus:border-cyan-300 focus:bg-[#0d1f47] text-white text-xs placeholder-slate-400 backdrop-blur-md focus:outline-none focus:ring-1 focus:ring-cyan-300 transition-all shadow-[0_0_12px_rgba(34,211,238,0.15)]"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Conditional Custom Specialty Input if 'Other Clinical Specialty' is chosen */}
                <AnimatePresence>
                  {formData.specialty === 'Other Clinical Specialty' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -6 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <label className="block text-xs font-semibold text-cyan-300 mb-1">
                        Please Specify Your Specialty / Practice Field <span className="text-cyan-300">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Stethoscope className="w-3.5 h-3.5 text-cyan-400" />
                        </div>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Pediatric Cardiology, Bariatric Surgery..."
                          value={formData.customSpecialty}
                          onChange={(e) => setFormData({ ...formData, customSpecialty: e.target.value })}
                          className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-[#0F1E4B] border border-cyan-400/50 focus:border-cyan-300 focus:bg-[#0d1f47] text-white text-xs placeholder-slate-400 backdrop-blur-md focus:outline-none focus:ring-1 focus:ring-cyan-300 transition-all shadow-[0_0_12px_rgba(34,211,238,0.15)]"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div>
                  <CustomSelect
                    label="Has your practice done marketing before?"
                    value={formData.marketingStatus}
                    onChange={(val) => setFormData({ ...formData, marketingStatus: val })}
                    options={MARKETING_STATUS_OPTIONS}
                    icon={<TrendingUp className="w-3.5 h-3.5" />}
                    enableSearch={false}
                  />
                </div>

                {/* Primary Growth Goals with "Tick All" Feature */}
                <div className="pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-semibold text-slate-200">
                      Primary Growth Goals <span className="text-slate-400 font-normal">(Select all that apply)</span>
                    </label>
                    <button
                      type="button"
                      onClick={handleToggleAllGoals}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold tracking-wide transition-all shrink-0 ${
                        isAllSelected
                          ? 'bg-cyan-400 text-slate-950 shadow-[0_0_12px_rgba(34,211,238,0.4)]'
                          : 'bg-white/10 text-cyan-300 hover:bg-white/15 border border-cyan-400/30'
                      }`}
                    >
                      {isAllSelected ? (
                        <>
                          <CheckSquare className="w-3.5 h-3.5 text-slate-950" />
                          <span>All Selected</span>
                        </>
                      ) : (
                        <>
                          <Square className="w-3.5 h-3.5 text-cyan-300" />
                          <span>Tick All</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Growth Goal Chips / Checkboxes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {GROWTH_GOAL_OPTIONS.map((goal) => {
                      const isChecked = selectedGoals.includes(goal);
                      return (
                        <button
                          type="button"
                          key={goal}
                          onClick={() => handleToggleGoal(goal)}
                          className={`flex items-start gap-2 p-2.5 rounded-xl text-left text-xs transition-all border ${
                            isChecked
                              ? 'bg-cyan-400/15 border-cyan-400/60 text-white shadow-sm'
                              : 'bg-[#0F1E4B]/70 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20'
                          }`}
                        >
                          <div className="mt-0.5 shrink-0">
                            {isChecked ? (
                              <CheckCircle2 className="w-4 h-4 text-cyan-300 fill-cyan-950/50" />
                            ) : (
                              <div className="w-4 h-4 rounded-md border border-white/30 bg-white/5" />
                            )}
                          </div>
                          <span className="leading-snug font-medium text-[11.5px]">{goal}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 sm:py-4 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-75 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        <span>Securing Consultation Slot...</span>
                      </span>
                    ) : (
                      <>
                        <Calendar className="w-4 h-4 text-slate-950" />
                        <span>Confirm Free Consultation</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-300 pt-0.5 pb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Zero obligation · 100% HIPAA/Privacy Compliant</span>
                </div>
              </form>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
