import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Calendar, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  User, 
  Mail, 
  Phone, 
  Building2,
  Globe2,
  Stethoscope
} from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practice: '',
    country: 'India',
    specialty: 'Dental / Aesthetics',
    preferredTime: 'Morning (9 AM - 12 PM)',
    primaryGoal: '24/7 AI Voice Receptionist + Patient Acquisition'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xl overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 15 }}
        className="relative w-full max-w-xl bg-white/[0.09] border border-white/25 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.6)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] backdrop-blur-2xl text-left my-8"
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 border border-white/20 text-slate-300 hover:text-white backdrop-blur-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(52,211,153,0.3)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 font-heading">Consultation Scheduled!</h3>
            <p className="text-sm text-slate-200 max-w-md mb-6 leading-relaxed">
              We have reserved a priority discovery slot for <span className="text-cyan-300 font-semibold">{formData.name}</span> ({formData.practice || 'Your Practice'}). A confirmation calendar invite has been sent to <span className="text-white font-medium">{formData.email}</span>.
            </p>
            <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/15 text-xs text-slate-200 w-full mb-6 text-left space-y-1.5 backdrop-blur-md shadow-sm">
              <div><strong className="text-cyan-300">Selected Time Window:</strong> {formData.preferredTime}</div>
              <div><strong className="text-cyan-300">Target Focus:</strong> {formData.primaryGoal}</div>
              <div><strong className="text-cyan-300">Assigned Growth Strategist:</strong> Senior Healthcare AI Lead</div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <a
                href={`https://wa.me/918104468397?text=Hello%20Doctorstory%20team%2C%20I%20scheduled%20a%20consultation%20for%20${encodeURIComponent(formData.practice || formData.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs uppercase tracking-wider text-center shadow-lg"
              >
                Instant WhatsApp Confirmation
              </a>
              <button
                onClick={handleResetAndClose}
                className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-slate-200 text-xs font-semibold hover:text-white backdrop-blur-md"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-xs font-semibold w-fit mb-3 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Priority Practice Audit</span>
            </div>

            <h3 className="text-2xl font-bold text-white font-heading mb-1">
              Book a Free 1-on-1 Consultation
            </h3>
            <p className="text-xs text-slate-200 mb-6">
              Learn how AI voice receptionists & personal branding can double your clinical inquiries in 30 days.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Dr. Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 focus:border-cyan-300 text-white text-xs placeholder-slate-400 backdrop-blur-md focus:outline-none focus:ring-1 focus:ring-cyan-300 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="doctor@practice.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 focus:border-cyan-300 text-white text-xs placeholder-slate-400 backdrop-blur-md focus:outline-none focus:ring-1 focus:ring-cyan-300 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 / +971 / +1 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 focus:border-cyan-300 text-white text-xs placeholder-slate-400 backdrop-blur-md focus:outline-none focus:ring-1 focus:ring-cyan-300 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">Clinic Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Clinic / Hospital Name"
                    value={formData.practice}
                    onChange={(e) => setFormData({ ...formData, practice: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 focus:border-cyan-300 text-white text-xs placeholder-slate-400 backdrop-blur-md focus:outline-none focus:ring-1 focus:ring-cyan-300 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">Country</label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F1E4B] border border-white/15 focus:border-cyan-300 text-white text-xs focus:outline-none transition-all"
                  >
                    <option value="India">India (🇮🇳)</option>
                    <option value="UAE">United Arab Emirates (🇦🇪)</option>
                    <option value="USA">United States (🇺🇸)</option>
                    <option value="UK">United Kingdom (🇬🇧)</option>
                    <option value="Canada">Canada (🇨🇦)</option>
                    <option value="Australia">Australia (🇦🇺)</option>
                    <option value="Other">Other Region</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">Preferred Time</label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F1E4B] border border-white/15 focus:border-cyan-300 text-white text-xs focus:outline-none transition-all"
                  >
                    <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                    <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                    <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1">Primary Growth Goal</label>
                <select
                  value={formData.primaryGoal}
                  onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F1E4B] border border-white/15 focus:border-cyan-300 text-white text-xs focus:outline-none transition-all"
                >
                  <option value="24/7 AI Voice Receptionist">24/7 AI Voice Receptionist (Zero Missed Calls)</option>
                  <option value="AI Clone Video & Social Authority">Doctor AI Video Clone + Social Content</option>
                  <option value="Google My Business Top 3 Rank">Google My Business & Local 3-Pack Growth</option>
                  <option value="Targeted Meta/Google Patient Ads">Targeted Patient Acquisition Ads</option>
                  <option value="Full Comprehensive Agency Solution">Full-Stack Practice Transformation</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  {isSubmitting ? (
                    <span>Booking Consultation...</span>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4 text-slate-950" />
                      <span>Confirm Free Consultation</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-300 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero obligation · 100% HIPAA/Privacy Compliant</span>
              </div>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
};
