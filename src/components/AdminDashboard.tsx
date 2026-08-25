import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Lock, 
  Unlock, 
  Search, 
  Filter, 
  Download, 
  Plus, 
  Trash2, 
  Edit3, 
  ExternalLink, 
  Phone, 
  Mail, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Globe2, 
  Building2, 
  Stethoscope, 
  TrendingUp, 
  ArrowLeft, 
  RefreshCw, 
  MessageSquare,
  Sparkles,
  ShieldCheck,
  X,
  FileText,
  UserCheck
} from 'lucide-react';
import { 
  ConsultationRecord, 
  getConsultations, 
  updateConsultationStatus, 
  updateConsultationNotes, 
  deleteConsultation, 
  saveConsultation, 
  resetConsultationsToDemo,
  exportConsultationsToCSV 
} from '../lib/consultations';

interface AdminDashboardProps {
  onExit: () => void;
}

const STATUS_COLORS = {
  'New': 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40',
  'Contacted': 'bg-amber-500/20 text-amber-300 border-amber-400/40',
  'Call Scheduled': 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40',
  'Converted': 'bg-purple-500/20 text-purple-300 border-purple-400/40',
  'Archived': 'bg-slate-500/20 text-slate-400 border-slate-500/40'
};

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onExit }) => {
  const [leads, setLeads] = useState<ConsultationRecord[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [countryFilter, setCountryFilter] = useState<string>('All');
  const [selectedLead, setSelectedLead] = useState<ConsultationRecord | null>(null);
  const [editingNotesId, setEditingNotesId] = useState<string | null>(null);
  const [tempNotes, setTempNotes] = useState<string>('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState(new Date());

  // New Lead Form State
  const [newLeadForm, setNewLeadForm] = useState({
    name: '',
    email: '',
    phone: '',
    practice: '',
    country: 'India',
    specialty: 'Dental & Orthodontics / Implantology',
    marketingStatus: 'Starting fresh',
    goalsOrServices: ['24/7 AI Voice Receptionist (Zero Missed Calls)'],
    message: '',
    notes: ''
  });

  const loadData = () => {
    const data = getConsultations();
    setLeads(data);
    setLastRefreshed(new Date());
  };

  useEffect(() => {
    loadData();

    const handleUpdate = () => {
      loadData();
    };

    window.addEventListener('doctorstory_consultations_updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener('doctorstory_consultations_updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  // Filter and Search logic
  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      (lead.name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lead.practice || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lead.email || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lead.phone || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lead.specialty || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lead.country || '').toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'All' || lead.status === statusFilter;
    const matchesCountry = countryFilter === 'All' || lead.country === countryFilter;

    return matchesSearch && matchesStatus && matchesCountry;
  });

  // Calculate Metrics
  const totalLeads = leads.length;
  const newLeadsCount = leads.filter(l => l.status === 'New').length;
  const scheduledCount = leads.filter(l => l.status === 'Call Scheduled').length;
  const convertedCount = leads.filter(l => l.status === 'Converted').length;

  const handleStatusChange = (id: string, newStatus: ConsultationRecord['status']) => {
    updateConsultationStatus(id, newStatus);
  };

  const handleSaveNotes = (id: string) => {
    updateConsultationNotes(id, tempNotes);
    setEditingNotesId(null);
  };

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to delete lead for "${name}"?`)) {
      deleteConsultation(id);
      if (selectedLead?.id === id) {
        setSelectedLead(null);
      }
    }
  };

  const handleAddManualLead = (e: React.FormEvent) => {
    e.preventDefault();
    saveConsultation({
      name: newLeadForm.name,
      email: newLeadForm.email,
      phone: newLeadForm.phone,
      practice: newLeadForm.practice,
      country: newLeadForm.country,
      specialty: newLeadForm.specialty,
      marketingStatus: newLeadForm.marketingStatus,
      goalsOrServices: newLeadForm.goalsOrServices,
      message: newLeadForm.message,
      notes: newLeadForm.notes,
      source: 'Manual Entry',
      status: 'New'
    });
    setIsAddModalOpen(false);
    setNewLeadForm({
      name: '',
      email: '',
      phone: '',
      practice: '',
      country: 'India',
      specialty: 'Dental & Orthodontics / Implantology',
      marketingStatus: 'Starting fresh',
      goalsOrServices: ['24/7 AI Voice Receptionist (Zero Missed Calls)'],
      message: '',
      notes: ''
    });
  };

  const countriesList = Array.from(new Set(leads.map(l => l.country).filter(Boolean)));

  return (
    <div className="min-h-screen bg-[#060D2A] text-slate-100 flex flex-col font-sans pb-16">
      {/* Top Admin Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#0A1541]/90 backdrop-blur-xl border-b border-cyan-400/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onExit}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-slate-200 text-xs font-semibold transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-cyan-400" />
              <span>Back to Site</span>
            </button>

            <div className="h-6 w-[1px] bg-white/20 hidden sm:block" />

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-cyan-400/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 font-bold shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                <Lock className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-sm sm:text-base font-extrabold text-white font-heading tracking-tight">
                    Doctorstory.in <span className="text-cyan-400 font-mono text-xs">/ Private Suite</span>
                  </h1>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Vault
                  </span>
                </div>
                <div className="text-[10px] text-slate-400 hidden sm:block">
                  Secret Key: <span className="font-mono text-cyan-300">#05032000</span> · All Free Consultations &amp; Practice Inquiries
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => exportConsultationsToCSV()}
              className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-slate-200 hover:text-white transition-all shadow-sm cursor-pointer"
              title="Download all leads as CSV spreadsheet"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Export CSV</span>
            </button>

            <button
              onClick={() => setIsAddModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(34,211,238,0.4)] cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5 text-slate-950" />
              <span>Add Lead</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 w-full flex-1">
        {/* KPI Metrics Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-8">
          <div className="rounded-2xl bg-white/[0.06] border border-white/15 p-4 sm:p-5 backdrop-blur-xl shadow-lg relative overflow-hidden">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              Total Inquiries &amp; Bookings
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading font-mono">
              {totalLeads}
            </div>
            <div className="text-[11px] text-cyan-300 mt-1 flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>Full Practice Database</span>
            </div>
          </div>

          <div className="rounded-2xl bg-cyan-950/40 border border-cyan-400/30 p-4 sm:p-5 backdrop-blur-xl shadow-lg relative overflow-hidden">
            <div className="text-[11px] font-bold uppercase tracking-wider text-cyan-300 mb-1 flex items-center justify-between">
              <span>New / Action Required</span>
              {newLeadsCount > 0 && (
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              )}
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-300 font-heading font-mono">
              {newLeadsCount}
            </div>
            <div className="text-[11px] text-cyan-200 mt-1">
              Needs priority follow-up
            </div>
          </div>

          <div className="rounded-2xl bg-white/[0.06] border border-white/15 p-4 sm:p-5 backdrop-blur-xl shadow-lg relative overflow-hidden">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              Strategy Calls Booked
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-300 font-heading font-mono">
              {scheduledCount}
            </div>
            <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>Calendar slots locked</span>
            </div>
          </div>

          <div className="rounded-2xl bg-white/[0.06] border border-white/15 p-4 sm:p-5 backdrop-blur-xl shadow-lg relative overflow-hidden">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              Converted Retainers
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-purple-300 font-heading font-mono">
              {convertedCount}
            </div>
            <div className="text-[11px] text-purple-300 mt-1 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              <span>Active Growth Clients</span>
            </div>
          </div>
        </div>

        {/* Search & Filters Bar */}
        <div className="rounded-2xl bg-white/[0.06] border border-white/15 p-4 backdrop-blur-xl mb-6 shadow-md">
          <div className="flex flex-col md:flex-row items-center gap-3 justify-between">
            {/* Search input */}
            <div className="relative w-full md:w-80">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4 text-cyan-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search doctor, clinic, phone, specialty..."
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/[0.05] border border-white/15 focus:border-cyan-300 text-white text-xs placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-cyan-300 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 custom-scrollbar">
              <div className="flex items-center gap-1 bg-black/20 p-1 rounded-xl border border-white/10">
                {['All', 'New', 'Contacted', 'Call Scheduled', 'Converted', 'Archived'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className={`px-3 py-1 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                      statusFilter === status
                        ? 'bg-cyan-400 text-slate-950 shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>

              {/* Country Dropdown Filter */}
              {countriesList.length > 1 && (
                <select
                  value={countryFilter}
                  onChange={(e) => setCountryFilter(e.target.value)}
                  className="px-3 py-1.5 bg-white/10 border border-white/15 rounded-xl text-xs font-semibold text-slate-200 focus:outline-none focus:border-cyan-300 cursor-pointer"
                >
                  <option value="All" className="bg-slate-900 text-white">All Countries</option>
                  {countriesList.map(c => (
                    <option key={c} value={c} className="bg-slate-900 text-white">{c}</option>
                  ))}
                </select>
              )}

              <button
                onClick={loadData}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-slate-300 hover:text-white transition-all shrink-0 cursor-pointer"
                title="Refresh leads list"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Consultation Records Table */}
        {filteredLeads.length === 0 ? (
          <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-12 text-center backdrop-blur-xl">
            <AlertCircle className="w-10 h-10 text-cyan-400 mx-auto mb-3 opacity-80" />
            <h3 className="text-lg font-bold text-white mb-1 font-heading">No Consultation Bookings Found</h3>
            <p className="text-xs text-slate-300 max-w-sm mx-auto mb-4">
              {searchQuery || statusFilter !== 'All' || countryFilter !== 'All'
                ? 'No inquiries match your current filter criteria.'
                : 'No bookings have been submitted yet. Submitting a test consultation from the site will appear here instantly!'}
            </p>
            <button
              onClick={() => {
                resetConsultationsToDemo();
                setSearchQuery('');
                setStatusFilter('All');
                setCountryFilter('All');
              }}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-cyan-300 transition-all cursor-pointer"
            >
              Load Demo Consultation Data
            </button>
          </div>
        ) : (
          <div className="space-y-3.5">
            {filteredLeads.map((lead) => (
              <motion.div
                key={lead.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`rounded-2xl border transition-all p-5 backdrop-blur-xl ${
                  lead.status === 'New' 
                    ? 'bg-[#0b1b46]/90 border-cyan-400/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
                    : 'bg-white/[0.06] border-white/15 hover:border-white/25'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Doctor & Clinic Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center flex-wrap gap-2 mb-1.5">
                      <h3 className="text-base font-extrabold text-white font-heading">
                        {lead.name}
                      </h3>
                      {lead.practice && (
                        <span className="text-xs text-cyan-300 font-semibold flex items-center gap-1">
                          <Building2 className="w-3.5 h-3.5 shrink-0" />
                          <span>{lead.practice}</span>
                        </span>
                      )}
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${STATUS_COLORS[lead.status]}`}>
                        {lead.status}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {new Date(lead.submittedAt).toLocaleString()}
                      </span>
                    </div>

                    {/* Metadata strip */}
                    <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-300 mb-3">
                      <div className="flex items-center gap-1 text-cyan-200">
                        <Stethoscope className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{lead.specialty === 'Other Clinical Specialty' ? lead.customSpecialty || 'Clinical Specialty' : lead.specialty}</span>
                      </div>

                      <div className="flex items-center gap-1 text-slate-300">
                        <Globe2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{lead.country === 'Other' ? lead.customCountry || 'Other Country' : lead.country}</span>
                      </div>

                      {lead.marketingStatus && (
                        <div className="flex items-center gap-1 text-slate-400 text-[11px]">
                          <TrendingUp className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>Prior Mktg: {lead.marketingStatus}</span>
                        </div>
                      )}
                    </div>

                    {/* Growth Goals / Services Chips */}
                    {lead.goalsOrServices && lead.goalsOrServices.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {lead.goalsOrServices.map((g, i) => (
                          <span 
                            key={i}
                            className="px-2.5 py-0.5 rounded-md bg-white/[0.08] border border-white/10 text-[11px] font-medium text-slate-200"
                          >
                            {g}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Message / Requirement */}
                    {lead.message && (
                      <div className="p-3 rounded-xl bg-black/25 border border-white/10 text-xs text-slate-200 mb-3 leading-relaxed">
                        <span className="text-cyan-300 font-bold uppercase text-[10px] block mb-0.5">Doctor's Note / Goal:</span>
                        "{lead.message}"
                      </div>
                    )}

                    {/* Internal Notes Section */}
                    <div className="pt-2 border-t border-white/10">
                      {editingNotesId === lead.id ? (
                        <div className="flex items-center gap-2 mt-1">
                          <input
                            type="text"
                            value={tempNotes}
                            onChange={(e) => setTempNotes(e.target.value)}
                            placeholder="Add private note (e.g. Discussed AI voice, call at 4 PM)..."
                            className="flex-1 px-3 py-1.5 rounded-lg bg-white/10 border border-cyan-400/50 text-xs text-white focus:outline-none"
                            autoFocus
                          />
                          <button
                            onClick={() => handleSaveNotes(lead.id)}
                            className="px-3 py-1.5 rounded-lg bg-cyan-400 text-slate-950 font-bold text-xs"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => setEditingNotesId(null)}
                            className="px-2.5 py-1.5 rounded-lg bg-white/10 text-slate-300 text-xs"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between text-xs text-slate-400">
                          <div className="flex items-center gap-1.5">
                            <FileText className="w-3.5 h-3.5 text-cyan-400" />
                            <span className="text-slate-300">
                              <strong>Private Notes:</strong> {lead.notes || <em className="text-slate-500 font-normal">No notes yet</em>}
                            </span>
                          </div>
                          <button
                            onClick={() => {
                              setEditingNotesId(lead.id);
                              setTempNotes(lead.notes || '');
                            }}
                            className="text-cyan-300 hover:text-cyan-200 text-[11px] underline flex items-center gap-1 cursor-pointer"
                          >
                            <Edit3 className="w-3 h-3" />
                            <span>Edit Note</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions & Contact Launchers */}
                  <div className="flex lg:flex-col items-center lg:items-end justify-between gap-2.5 pt-3 lg:pt-0 border-t lg:border-t-0 border-white/10 shrink-0">
                    {/* Status Select dropdown */}
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] uppercase font-bold text-slate-400 hidden sm:inline">Status:</span>
                      <select
                        value={lead.status}
                        onChange={(e) => handleStatusChange(lead.id, e.target.value as ConsultationRecord['status'])}
                        className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 text-xs font-bold text-white focus:outline-none focus:border-cyan-300 cursor-pointer"
                      >
                        <option value="New" className="bg-slate-900 text-cyan-300">New</option>
                        <option value="Contacted" className="bg-slate-900 text-amber-300">Contacted</option>
                        <option value="Call Scheduled" className="bg-slate-900 text-emerald-300">Call Scheduled</option>
                        <option value="Converted" className="bg-slate-900 text-purple-300">Converted</option>
                        <option value="Archived" className="bg-slate-900 text-slate-400">Archived</option>
                      </select>
                    </div>

                    {/* Direct Contact Buttons */}
                    <div className="flex items-center gap-2">
                      {/* WhatsApp Launcher */}
                      {lead.phone && (
                        <a
                          href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(lead.name)}%2C%20this%20is%20Doctorstory.in%20regarding%20your%20practice%20consultation%20request%20for%20${encodeURIComponent(lead.practice || 'your clinic')}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/40 text-emerald-300 text-xs font-bold transition-all shadow-sm cursor-pointer"
                          title="Open direct WhatsApp message"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </a>
                      )}

                      {/* Email Launcher */}
                      {lead.email && (
                        <a
                          href={`mailto:${lead.email}?subject=Doctorstory%20Consultation%20for%20${encodeURIComponent(lead.practice || lead.name)}&body=Hello%20${encodeURIComponent(lead.name)}%2C%0A%0AThank%20you%20for%20booking%20a%20consultation%20with%20Doctorstory.in.`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-300 text-xs font-bold transition-all shadow-sm cursor-pointer"
                          title="Send Email"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Email</span>
                        </a>
                      )}

                      {/* Delete Lead */}
                      <button
                        onClick={() => handleDelete(lead.id, lead.name)}
                        className="p-1.5 rounded-xl bg-white/5 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 transition-all border border-transparent hover:border-rose-500/30 cursor-pointer"
                        title="Delete Lead Record"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </main>

      {/* Add Manual Lead Modal */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
            <div className="absolute inset-0" onClick={() => setIsAddModalOpen(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative z-10 w-full max-w-lg bg-[#0A1541] border border-cyan-400/30 rounded-3xl p-6 sm:p-7 shadow-2xl backdrop-blur-2xl text-left"
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <h3 className="text-lg font-bold text-white font-heading flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-cyan-400" />
                  <span>Log Offline / Phone Consultation Lead</span>
                </h3>
                <button
                  onClick={() => setIsAddModalOpen(false)}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleAddManualLead} className="space-y-3.5 text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-200 font-semibold mb-1">Doctor Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. Full Name"
                      value={newLeadForm.name}
                      onChange={(e) => setNewLeadForm({ ...newLeadForm, name: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-200 font-semibold mb-1">Clinic / Hospital *</label>
                    <input
                      type="text"
                      required
                      placeholder="Practice Name"
                      value={newLeadForm.practice}
                      onChange={(e) => setNewLeadForm({ ...newLeadForm, practice: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-200 font-semibold mb-1">Phone Number *</label>
                    <input
                      type="text"
                      required
                      placeholder="+91 / +971 / +1 ..."
                      value={newLeadForm.phone}
                      onChange={(e) => setNewLeadForm({ ...newLeadForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-200 font-semibold mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="doctor@clinic.com"
                      value={newLeadForm.email}
                      onChange={(e) => setNewLeadForm({ ...newLeadForm, email: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-200 font-semibold mb-1">Country</label>
                    <input
                      type="text"
                      placeholder="e.g. India, UAE, UK, USA"
                      value={newLeadForm.country}
                      onChange={(e) => setNewLeadForm({ ...newLeadForm, country: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-200 font-semibold mb-1">Specialty</label>
                    <input
                      type="text"
                      placeholder="e.g. Dental, Dermatology"
                      value={newLeadForm.specialty}
                      onChange={(e) => setNewLeadForm({ ...newLeadForm, specialty: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-200 font-semibold mb-1">Initial Discussion Notes</label>
                  <textarea
                    rows={2}
                    placeholder="Doctor wants 24/7 AI Voice and 10 reels/month..."
                    value={newLeadForm.notes}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, notes: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-white resize-none"
                  />
                </div>

                <div className="pt-3 flex items-center justify-end gap-2.5">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl bg-white/10 text-slate-300 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold"
                  >
                    Save Lead to Vault
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
