import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Atom, 
  Menu, 
  X, 
  Phone, 
  Calendar, 
  ChevronRight,
  Globe2,
  Sparkles
} from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'Global', href: '#global' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/[0.08] backdrop-blur-xl border-b border-white/20 py-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              id="brand-logo"
              href="#"
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/25 group-hover:border-cyan-400 transition-all shadow-[0_0_20px_rgba(34,211,238,0.25)]">
                <Atom className="w-6 h-6 text-cyan-400 animate-spin" style={{ animationDuration: '18s' }} />
                <div className="absolute inset-0 rounded-xl bg-cyan-400/15 blur-sm group-hover:bg-cyan-400/30 transition-all" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1 font-heading">
                  Doctorstory<span className="text-cyan-400">.in</span>
                </span>
                <span className="text-[10px] tracking-wider uppercase text-cyan-200/80 font-semibold flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-cyan-400" /> AI Healthcare Growth
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav id="desktop-nav" className="hidden md:flex items-center gap-1 bg-white/[0.08] px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-xl shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.2)]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-3.5 py-1.5 text-sm font-medium text-slate-200 hover:text-cyan-300 hover:bg-white/10 rounded-full transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Header Right Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+918104468397"
                id="header-phone-btn"
                className="flex items-center gap-2 text-xs font-semibold text-slate-200 hover:text-cyan-300 px-3.5 py-2 rounded-xl bg-white/[0.08] border border-white/15 hover:border-cyan-400/40 backdrop-blur-md transition-all shadow-sm"
                title="Direct Line to Agency Team"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>+91 81044 68397</span>
              </a>

              <button
                id="header-cta-btn"
                onClick={onOpenConsultation}
                className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>Book a Free Consultation</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                id="mobile-cta-mini"
                onClick={onOpenConsultation}
                className="px-3 py-1.5 rounded-full text-xs font-bold text-slate-950 bg-cyan-400 shadow-sm"
              >
                Consult
              </button>

              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-white/[0.08] border border-white/20 backdrop-blur-md text-slate-200 hover:text-cyan-400 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[68px] z-40 bg-[#0A1541]/90 backdrop-blur-2xl border-b border-white/20 px-6 py-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 px-3 rounded-xl text-slate-200 hover:text-cyan-400 hover:bg-white/10 text-base font-medium transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}

              <div className="pt-4 border-t border-white/15 flex flex-col gap-3">
                <a
                  href="tel:+918104468397"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.08] border border-white/15 text-cyan-300 text-sm font-semibold backdrop-blur-md"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  +91-8104468397
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30"
                >
                  <Calendar className="w-4 h-4" />
                  Book a Free Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
