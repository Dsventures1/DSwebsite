import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Check, Search, X } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
  sublabel?: string;
  icon?: React.ReactNode;
}

interface CustomSelectProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: (string | SelectOption)[];
  placeholder?: string;
  icon?: React.ReactNode;
  enableSearch?: boolean;
  searchPlaceholder?: string;
  required?: boolean;
  className?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  value,
  onChange,
  options,
  placeholder = 'Select option...',
  icon,
  enableSearch = true,
  searchPlaceholder = 'Filter specialty (e.g. Dental, IVF)...',
  required = false,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [openUpward, setOpenUpward] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Normalize options
  const normalizedOptions: SelectOption[] = options.map((opt) => {
    if (typeof opt === 'string') {
      return { value: opt, label: opt };
    }
    return opt;
  });

  const selectedOption = normalizedOptions.find((opt) => opt.value === value);

  // Filter options based on search query
  const filteredOptions = normalizedOptions.filter((opt) =>
    opt.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (opt.sublabel && opt.sublabel.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Check available viewport space to open upward or downward
  useEffect(() => {
    if (isOpen && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      if (spaceBelow < 240 && spaceAbove > spaceBelow) {
        setOpenUpward(true);
      } else {
        setOpenUpward(false);
      }
    }
  }, [isOpen]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      if (enableSearch) {
        setTimeout(() => {
          searchInputRef.current?.focus();
        }, 50);
      }
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, enableSearch]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
    setSearchQuery('');
  };

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {label && (
        <label className="block text-xs font-semibold text-slate-200 mb-1">
          {label} {required && <span className="text-cyan-400">*</span>}
        </label>
      )}

      {/* Select Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between text-left px-3.5 py-2.5 rounded-xl border text-xs transition-all cursor-pointer ${
          isOpen
            ? 'bg-[#0d1f47] border-cyan-400 text-white shadow-[0_0_15px_rgba(34,211,238,0.25)]'
            : 'bg-[#0F1E4B]/80 hover:bg-[#0F1E4B] border-white/15 hover:border-white/30 text-white'
        }`}
      >
        <div className="flex items-center gap-2.5 min-w-0 pr-2">
          {icon && <span className="shrink-0 text-cyan-400/90">{icon}</span>}
          <span className="truncate font-medium text-slate-100">
            {selectedOption ? selectedOption.label : <span className="text-slate-400">{placeholder}</span>}
          </span>
        </div>
        <ChevronDown
          className={`w-3.5 h-3.5 text-cyan-300 shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-cyan-400' : ''
          }`}
        />
      </button>

      {/* Animated Custom Themed Dropdown Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: openUpward ? 4 : -4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: openUpward ? 4 : -4, scale: 0.98 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className={`absolute left-0 right-0 z-[100] bg-[#071333] border border-cyan-400/40 rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.9),0_0_20px_rgba(34,211,238,0.15)] backdrop-blur-2xl overflow-hidden ${
              openUpward ? 'bottom-full mb-1.5' : 'top-full mt-1.5'
            }`}
          >
            {/* Quick Search Filter if enabled and multiple options */}
            {enableSearch && normalizedOptions.length > 5 && (
              <div className="p-2 border-b border-white/10 bg-white/[0.04]">
                <div className="relative flex items-center">
                  <Search className="w-3.5 h-3.5 text-cyan-400/80 absolute left-2.5 pointer-events-none" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={searchPlaceholder}
                    className="w-full pl-8 pr-7 py-1.5 rounded-lg bg-[#0F1E4B] border border-white/15 focus:border-cyan-400 text-white text-[11px] placeholder-slate-400 focus:outline-none transition-all"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2 p-0.5 text-slate-400 hover:text-white"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Scrollable List with Custom Cyan Scrollbar */}
            <div ref={listRef} className="max-h-52 overflow-y-auto custom-scrollbar p-1 space-y-0.5">
              {filteredOptions.length === 0 ? (
                <div className="py-4 text-center text-xs text-slate-400">
                  No matching specialties found
                </div>
              ) : (
                filteredOptions.map((option) => {
                  const isSelected = option.value === value;
                  return (
                    <button
                      type="button"
                      key={option.value}
                      onClick={() => handleSelect(option.value)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left text-xs transition-colors cursor-pointer group ${
                        isSelected
                          ? 'bg-cyan-400/20 text-cyan-200 font-semibold border border-cyan-400/40'
                          : 'text-slate-200 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate pr-2">
                        {option.icon && (
                          <span className="shrink-0 text-cyan-400">{option.icon}</span>
                        )}
                        <span className="truncate">{option.label}</span>
                      </div>
                      {isSelected && (
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      )}
                    </button>
                  );
                })
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
