import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Atom, 
  Menu, 
  X, 
  Calendar, 
  ChevronRight,
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
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Results', href: '#results' },
    { name: 'Process', href: '#process' },
    { name: 'Global', href: '#global' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#060D2A]/85 backdrop-blur-xl border-b border-white/20 py-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo */}
            <a
              id="brand-logo"
              href="#"
              className="flex items-center gap-2.5 group focus:outline-none shrink-0"
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

            {/* Centered Desktop Navigation Capsule */}
            <nav 
              id="desktop-nav" 
              className="hidden lg:flex items-center gap-1 bg-white/[0.08] px-3.5 py-1.5 rounded-full border border-white/20 backdrop-blur-xl shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.2)]"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-3.5 py-1.5 text-xs xl:text-sm font-medium text-slate-200 hover:text-cyan-300 hover:bg-white/10 rounded-full transition-all whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Header Right Action (Book Free Consultation CTA) */}
            <div className="hidden sm:flex items-center shrink-0">
              <button
                id="header-cta-btn"
                onClick={onOpenConsultation}
                className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>Book a Free Consultation</span>
              </button>
            </div>

            {/* Mobile Hamburger & Mini CTA */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                id="mobile-cta-mini"
                onClick={onOpenConsultation}
                className="sm:hidden px-3 py-1.5 rounded-full text-xs font-bold text-slate-950 bg-cyan-400 shadow-sm"
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
            className="fixed inset-x-0 top-[68px] z-40 bg-[#060D2A]/95 backdrop-blur-2xl border-b border-white/20 px-6 py-6 lg:hidden shadow-2xl"
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

              <div className="pt-4 border-t border-white/15">
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
