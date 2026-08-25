import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  Building, 
  Globe, 
  MessageSquare,
  ShieldCheck,
  CheckSquare,
  Square
} from 'lucide-react';
import { ConsultationFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    practiceName: '',
    country: 'India',
    specialty: 'Dental / Aesthetics',
    servicesInterested: ['AI Voice Agent for Clinics', 'Social Media Ads'],
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const availableServices = [
    'AI Voice Agent for Clinics',
    'AI Clone Avatar',
    'Google My Business Optimization',
    'Social Media Management',
    'Social Media Ads',
    'Website Development'
  ];

  const isAllServicesSelected = formData.servicesInterested.length === availableServices.length;

  const handleToggleAllServices = () => {
    if (isAllServicesSelected) {
      setFormData(prev => ({ ...prev, servicesInterested: [] }));
    } else {
      setFormData(prev => ({ ...prev, servicesInterested: [...availableServices] }));
    }
  };

  const handleToggleService = (service: string) => {
    setFormData(prev => {
      const exists = prev.servicesInterested.includes(service);
      if (exists) {
        return {
          ...prev,
          servicesInterested: prev.servicesInterested.filter(s => s !== service)
        };
      } else {
        return {
          ...prev,
          servicesInterested: [...prev.servicesInterested, service]
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable form processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-500/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Schedule Your Strategy Session</span>
          </div>

          {/* Exact Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading max-w-3xl">
            Ready to Grow Your Practice?
          </h2>

          {/* Exact Subhead */}
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mt-4 font-normal">
            Let's build your personal brand and put your patient acquisition on autopilot.
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-4" />
        </div>

        {/* 2-Column Contact Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Agency Contact Details & Credibility */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="rounded-3xl bg-white/[0.08] p-8 border border-white/20 shadow-[0_15px_40px_rgba(0,0,0,0.35)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] backdrop-blur-2xl">
              <h3 className="text-xl font-bold text-white mb-6 font-heading flex items-center gap-2">
                <span>Doctorstory Direct Office</span>
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20 text-cyan-300 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-300">Direct Phone / WhatsApp</div>
                    <a 
                      href="tel:+918104468397"
                      className="text-base font-bold text-white hover:text-cyan-300 transition-colors"
                    >
                      +91-8104468397
                    </a>
                    <div className="text-[11px] text-emerald-300 mt-0.5">Available for voice consultation & WhatsApp triage</div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20 text-cyan-300 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-300">Official Inquiries</div>
                    <a 
                      href="mailto:teamdoctorstory@gmail.com"
                      className="text-base font-bold text-white hover:text-cyan-300 transition-colors"
                    >
                      teamdoctorstory@gmail.com
                    </a>
                    <div className="text-[11px] text-slate-300 mt-0.5">Guaranteed response within 4 business hours</div>
                  </div>
                </div>

                {/* Exact Address */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20 text-cyan-300 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-300">Headquarters Address</div>
                    <p className="text-sm font-medium text-slate-200 leading-snug">
                      2407, Marathon Nexzone, Panvel, 410221, Navi Mumbai, India
                    </p>
                    <div className="text-[11px] text-cyan-300/90 mt-0.5">Serving international practices worldwide</div>
                  </div>
                </div>
              </div>

              {/* Consultation Guarantee note */}
              <div className="mt-8 pt-6 border-t border-white/15 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-200 leading-relaxed">
                  <strong className="text-white">Strict Confidentiality:</strong> All clinical metrics, patient booking data, and physician personal details discussed during discovery calls are protected under strict NDA standards.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Consultation Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl bg-white/[0.08] p-8 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.4)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] backdrop-blur-2xl">
              {submitted ? (
                <div className="py-12 px-4 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mb-4 shadow-[0_0_25px_rgba(52,211,153,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-heading">Consultation Request Received!</h3>
                  <p className="text-sm text-slate-200 max-w-md mb-6">
                    Thank you, <span className="text-cyan-300 font-semibold">{formData.fullName}</span>. Our healthcare AI growth specialist will review {formData.practiceName ? `for ${formData.practiceName}` : 'your practice'} and contact you at <span className="text-white font-medium">{formData.email}</span> within 4 hours.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`https://wa.me/918104468397?text=Hi%20Doctorstory%20Team%2C%20I%20just%20submitted%20a%20consultation%20request%20for%20my%20practice%20(${encodeURIComponent(formData.practiceName || formData.fullName)})`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                    >
                      <span>Connect Instantly on WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-slate-200 text-xs font-semibold hover:text-white backdrop-blur-md"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form id="practice-consultation-form" onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Your Full Name <span className="text-cyan-300">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. Rajesh Mehta / Clinic Admin"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 focus:border-cyan-300 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-300 backdrop-blur-md transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Email Address <span className="text-cyan-300">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="doctor@clinic.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 focus:border-cyan-300 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-300 backdrop-blur-md transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Phone Number (with country code) <span className="text-cyan-300">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 / +971 / +1 ..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 focus:border-cyan-300 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-300 backdrop-blur-md transition-all"
                      />
                    </div>

                    {/* Clinic / Practice Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Clinic / Practice Name <span className="text-cyan-300">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Skin & Dental Clinic"
                        value={formData.practiceName}
                        onChange={(e) => setFormData({ ...formData, practiceName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 focus:border-cyan-300 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-300 backdrop-blur-md transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Country */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Practice Location / Country <span className="text-cyan-300">*</span>
                      </label>
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0F1E4B] border border-white/15 focus:border-cyan-300 text-white text-sm focus:outline-none focus:ring-1 focus:ring-cyan-300 transition-all"
                      >
                        <option value="India">India (🇮🇳)</option>
                        <option value="UAE">United Arab Emirates (🇦🇪)</option>
                        <option value="USA">United States (🇺🇸)</option>
                        <option value="UK">United Kingdom (🇬🇧)</option>
                        <option value="Canada">Canada (🇨🇦)</option>
                        <option value="Australia">Australia (🇦🇺)</option>
                        <option value="Singapore">Singapore (🇸🇬)</option>
                        <option value="Ireland">Ireland (🇮🇪)</option>
                        <option value="Netherlands">Netherlands (🇳🇱)</option>
                        <option value="Germany">Germany (🇩🇪)</option>
                        <option value="New Zealand">New Zealand (🇳🇿)</option>
                        <option value="Spain">Spain (🇪🇸)</option>
                        <option value="Other">Other International Practice</option>
                      </select>
                    </div>

                    {/* Specialty */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Primary Specialty
                      </label>
                      <select
                        value={formData.specialty}
                        onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0F1E4B] border border-white/15 focus:border-cyan-300 text-white text-sm focus:outline-none focus:ring-1 focus:ring-cyan-300 transition-all"
                      >
                        <option value="Dental / Aesthetics">Dental & Aesthetics</option>
                        <option value="Dermatology / Cosmetology">Dermatology & Cosmetology</option>
                        <option value="Orthopedics / Sports">Orthopedics & Spine</option>
                        <option value="Gynecology / IVF">Gynecology & IVF</option>
                        <option value="Cardiology / Internal Medicine">Cardiology & Internal Medicine</option>
                        <option value="Ophthalmology / Eye Clinic">Ophthalmology</option>
                        <option value="Multi-Specialty Hospital">Multi-Specialty Hospital</option>
                        <option value="Other">Other Clinical Specialty</option>
                      </select>
                    </div>
                  </div>

                  {/* Services Needed Selectors with Tick All */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-semibold text-slate-200">
                        Services You Want to Explore <span className="text-slate-400 font-normal">(Select all that apply)</span>
                      </label>
                      <button
                        type="button"
                        onClick={handleToggleAllServices}
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-[11px] font-bold tracking-wide transition-all ${
                          isAllServicesSelected
                            ? 'bg-cyan-400 text-slate-950 shadow-[0_0_10px_rgba(34,211,238,0.4)]'
                            : 'bg-white/10 text-cyan-300 hover:bg-white/15 border border-cyan-400/30'
                        }`}
                      >
                        {isAllServicesSelected ? (
                          <>
                            <CheckSquare className="w-3 h-3 text-slate-950" />
                            <span>All Selected</span>
                          </>
                        ) : (
                          <>
                            <Square className="w-3 h-3 text-cyan-300" />
                            <span>Tick All</span>
                          </>
                        )}
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {availableServices.map((service) => {
                        const isSelected = formData.servicesInterested.includes(service);
                        return (
                          <button
                            type="button"
                            key={service}
                            onClick={() => handleToggleService(service)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                              isSelected
                                ? 'bg-cyan-400 text-slate-950 font-semibold shadow-md'
                                : 'bg-white/10 border border-white/15 text-slate-200 hover:bg-white/15 hover:text-white backdrop-blur-md'
                            }`}
                          >
                            {isSelected && <CheckCircle2 className="w-3 h-3 inline mr-1" />}
                            {service}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                      Tell us about your practice goals or current bottlenecks
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g., We are missing evening patient calls and want to establish an authority brand on Instagram with doctor reels..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 focus:border-cyan-300 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-300 backdrop-blur-md transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button (Exact CTA text requested: "Book a Free Consultation") */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:shadow-[0_0_35px_rgba(34,211,238,0.6)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          <span>Preparing Your Practice Audit...</span>
                        </>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4 text-slate-950" />
                          <span>Book a Free Consultation</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
