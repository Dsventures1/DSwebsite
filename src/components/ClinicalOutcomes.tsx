import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Star, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  PhoneCall, 
  Video, 
  Search, 
  Quote, 
  Building, 
  Award,
  Zap,
  Globe2,
  CalendarCheck,
  ShieldCheck
} from 'lucide-react';

interface TestimonialItem {
  id: string;
  doctorName: string;
  credentials: string;
  role: string;
  clinic: string;
  location: string;
  specialtyTag: string;
  outcomeBadge: string;
  outcomeBadgeColor: string;
  rating: number;
  headline: string;
  quote: string;
  avatarUrl: string;
  metricType: string;
  verified: boolean;
}

interface ClinicalOutcomesProps {
  onOpenConsultation?: () => void;
}

export const ClinicalOutcomes: React.FC<ClinicalOutcomesProps> = ({ onOpenConsultation }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const testimonials: TestimonialItem[] = [
    {
      id: 'dermatology',
      doctorName: 'Dr. Ananya Roy, MD',
      credentials: 'MD (Dermatology), FAM (Germany)',
      role: 'Chief Dermatologist & Founder',
      clinic: 'Aura Skin & Aesthetic Clinic',
      location: 'Mumbai & Dubai',
      specialtyTag: 'Dermatology & Aesthetics',
      outcomeBadge: '+215% Inbound Appointments',
      outcomeBadgeColor: 'emerald',
      rating: 5,
      headline: '"Recovered 40+ high-ticket aesthetic bookings every month"',
      quote: '"Before DoctorStory, our reception missed dozens of calls during peak consultation hours and late evenings. The 24/7 AI Voice Receptionist now answers immediately, understands patient concerns, and slots them directly into my calendar. It has paid for itself 10x over."',
      avatarUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=256&h=256&q=80',
      metricType: 'AI Voice Receptionist',
      verified: true
    },
    {
      id: 'dental',
      doctorName: 'Dr. Marcus Vance, DDS',
      credentials: 'BDS, MSc (Implantology), FICOI',
      role: 'Implantologist & Clinical Director',
      clinic: 'Vance Dental Institute',
      location: 'London (UK)',
      specialtyTag: 'Dental Implants',
      outcomeBadge: '480k+ Monthly Video Views',
      outcomeBadgeColor: 'cyan',
      rating: 5,
      headline: '"The AI clone reels scaled my personal brand across Europe"',
      quote: '"I used to spend full weekends filming educational videos. With DoctorStory AI Avatar cloning, I recorded for 45 minutes once, and their team produces 20 pristine, compliant clinical reels every month. We dominate local dental search."',
      avatarUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=256&h=256&q=80',
      metricType: 'Doctor AI Clone Studio',
      verified: true
    },
    {
      id: 'orthopedics',
      doctorName: 'Dr. Tariq Al-Mansoor, FRCS',
      credentials: 'FRCS (Orth), FAAOS',
      role: 'Senior Orthopedic Surgeon',
      clinic: 'Al Mansoor Spine & Joint Center',
      location: 'Abu Dhabi (UAE)',
      specialtyTag: 'Orthopedics & Spine',
      outcomeBadge: 'Zero Missed Patient Leads',
      outcomeBadgeColor: 'teal',
      rating: 5,
      headline: '"#1 in Google Local 3-Pack for joint replacement in 60 days"',
      quote: '"Their Medical SEO and schema implementation propelled our clinic to the top 3 spots across UAE. Patient trust is immediate because of our streamlined digital booking and rapid WhatsApp response."',
      avatarUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=256&h=256&q=80',
      metricType: 'Medical SEO & Fast Booking',
      verified: true
    }
  ];

  const filteredTestimonials = selectedFilter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.id === selectedFilter);

  const stats = [
    {
      value: '85,000+',
      label: 'Patient Appointments Automated',
      color: 'text-cyan-300',
      sublabel: 'Across voice & web funnels'
    },
    {
      value: '99.4%',
      label: 'Call Capture Reliability',
      color: 'text-emerald-400',
      sublabel: 'Zero unanswered inquiries'
    },
    {
      value: '10+',
      label: 'International Countries Active',
      color: 'text-cyan-300',
      sublabel: 'India, UAE, UK, US, CA, AU, EU+'
    },
    {
      value: '<400ms',
      label: 'AI Voice Telephony Latency',
      color: 'text-cyan-300',
      sublabel: 'Natural human conversation'
    }
  ];

  return (
    <section id="results" className="py-24 relative overflow-hidden">
      {/* Dynamic Background Ambient Light Orbs matching site theme */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Pill Badge */}
        <div className="flex flex-col items-center text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] shadow-[0_0_20px_rgba(34,211,238,0.15)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Proven Clinical Growth Outcomes</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading max-w-4xl"
          >
            Trusted by Doctors & Clinics <span className="text-cyan-300 drop-shadow-[0_0_30px_rgba(34,211,238,0.4)]">Globally</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-base sm:text-lg text-slate-200 max-w-3xl mt-4 font-normal leading-relaxed"
          >
            See how healthcare leaders across India, UAE, UK, and USA eliminate missed patient calls and scale digital authority.
          </motion.p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 rounded-full mt-5" />
        </div>

        {/* 3 Clinical Testimonial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 items-stretch">
          {filteredTestimonials.map((item, index) => {
            const isEmerald = item.outcomeBadgeColor === 'emerald';
            const isTeal = item.outcomeBadgeColor === 'teal';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group relative rounded-3xl bg-white/[0.08] hover:bg-white/[0.12] p-7 sm:p-8 border border-white/15 hover:border-cyan-400/40 backdrop-blur-2xl transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.32)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.22)] flex flex-col justify-between transform hover:-translate-y-1.5"
              >
                {/* Top Subtle Glow on Hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-400/20 transition-all" />

                <div>
                  {/* Top Bar: 5 Stars + Metric Outcome Pill Badge */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    {/* 5 Stars */}
                    <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" 
                        />
                      ))}
                    </div>

                    {/* Outcome Metric Badge */}
                    <span 
                      className={`text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full border backdrop-blur-md whitespace-nowrap shadow-sm ${
                        isEmerald
                          ? 'text-emerald-300 bg-emerald-500/15 border-emerald-400/30'
                          : isTeal
                          ? 'text-teal-300 bg-teal-500/15 border-teal-400/30'
                          : 'text-cyan-300 bg-cyan-500/15 border-cyan-400/30'
                      }`}
                    >
                      {item.outcomeBadge}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 font-heading leading-snug tracking-tight group-hover:text-cyan-200 transition-colors">
                    {item.headline}
                  </h3>

                  {/* Testimonial Quote */}
                  <p className="text-slate-200 text-sm sm:text-[14.5px] leading-relaxed font-normal italic mb-8 relative">
                    {item.quote}
                  </p>
                </div>

                {/* Author Info Section */}
                <div className="pt-5 border-t border-white/15 flex items-center gap-3.5">
                  {/* Avatar with Status Ring */}
                  <div className="relative shrink-0">
                    <img
                      src={item.avatarUrl}
                      alt={item.doctorName}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400/60 shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                    />
                    <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#0A1541] flex items-center justify-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 fill-[#0A1541]" />
                    </div>
                  </div>

                  {/* Doctor Details */}
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm sm:text-base font-bold text-white font-heading truncate">
                        {item.doctorName}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-cyan-300 truncate">
                      {item.role}
                    </span>
                    <span className="text-[11px] text-slate-300 truncate">
                      {item.clinic}, {item.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Dark Navy / Midnight Blue Impact Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl sm:rounded-3xl bg-[#060D2A]/90 border border-white/15 hover:border-cyan-400/30 backdrop-blur-2xl p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] overflow-hidden"
        >
          {/* Subtle Ambient Interior Glows */}
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {stats.map((stat, idx) => (
              <div 
                key={stat.label}
                className={`flex flex-col items-center text-center ${idx !== 0 ? 'sm:pl-6 lg:pl-8' : ''} ${idx !== 0 ? 'pt-5 sm:pt-0' : ''}`}
              >
                <div className={`text-3xl sm:text-4xl lg:text-[40px] font-extrabold font-heading tracking-tight mb-1.5 ${stat.color} drop-shadow-[0_0_20px_rgba(34,211,238,0.25)]`}>
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-200 max-w-[200px] leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Action Button Strip below Testimonials */}
        {onOpenConsultation && (
          <div className="mt-12 text-center">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:shadow-[0_0_35px_rgba(34,211,238,0.6)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <CalendarCheck className="w-4 h-4 text-slate-950" />
              <span>Get Similar Results For Your Practice</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
