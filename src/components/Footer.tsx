import React from 'react';
import { 
  Atom, 
  Phone, 
  Mail, 
  MapPin, 
  Globe2, 
  ShieldCheck, 
  ArrowUp,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  MessageCircle
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Why Doctorstory', href: '#why-us' },
    { name: 'How We Work', href: '#process' },
    { name: 'Global Presence', href: '#global' },
    { name: 'ROI Estimator', href: '#calculator' },
    { name: 'Contact & Booking', href: '#contact' },
  ];

  const servicesList = [
    'Google My Business Optimization',
    'Social Media Management',
    'Social Media Ads (Meta & Google)',
    'AI Clone Avatar Generation',
    'Medical Website Development',
    '24/7 AI Voice Receptionist'
  ];

  return (
    <footer id="main-footer" className="bg-[#050A20]/80 backdrop-blur-2xl text-slate-300 border-t border-white/15 pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-white/10 border border-white/20 text-cyan-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                <Atom className="w-5 h-5 animate-spin" style={{ animationDuration: '20s' }} />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-heading">
                Doctorstory<span className="text-cyan-400">.in</span>
              </span>
            </a>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Global AI automation and digital marketing agency built exclusively for doctors, clinics, hospitals, and diagnostic centres. Automating reception busywork while scaling clinical authority worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/918104468397"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-cyan-300 hover:bg-cyan-400 hover:text-slate-950 transition-all backdrop-blur-md shadow-sm"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-cyan-300 hover:bg-cyan-400 hover:text-slate-950 transition-all backdrop-blur-md shadow-sm"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-cyan-300 hover:bg-cyan-400 hover:text-slate-950 transition-all backdrop-blur-md shadow-sm"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-cyan-300 hover:bg-cyan-400 hover:text-slate-950 transition-all backdrop-blur-md shadow-sm"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-cyan-300 hover:bg-cyan-400 hover:text-slate-950 transition-all backdrop-blur-md shadow-sm"
                title="X / Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">Navigation</h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-cyan-300 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">Services</h4>
            <ul className="space-y-2 text-xs">
              {servicesList.map((service) => (
                <li key={service} className="text-slate-300 hover:text-cyan-300 transition-colors">
                  <a href="#services">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Office Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">Contact Details</h4>
            <div className="space-y-2.5 text-xs text-slate-200">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href="tel:+918104468397" className="hover:text-cyan-300">+91-8104468397</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href="mailto:teamdoctorstory@gmail.com" className="hover:text-cyan-300">teamdoctorstory@gmail.com</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>2407, Marathon Nexzone, Panvel, 410221, Navi Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © Doctorstory.in 2026. All Rights Reserved. Built for Global Healthcare Leaders.
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              Medical Advertising Compliant
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/10 border border-white/20 hover:border-cyan-400 text-slate-200 hover:text-cyan-300 backdrop-blur-md transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
