export interface ConsultationRecord {
  id: string;
  submittedAt: string;
  name: string;
  email: string;
  phone: string;
  practice: string;
  country: string;
  customCountry?: string;
  specialty: string;
  customSpecialty?: string;
  marketingStatus?: string;
  goalsOrServices: string[];
  message?: string;
  source: 'Header / Modal Booking' | 'Page Contact Section' | 'Manual Entry';
  status: 'New' | 'Contacted' | 'Call Scheduled' | 'Converted' | 'Archived';
  notes?: string;
}

const STORAGE_KEY = 'doctorstory_consultations_v1';

export const INITIAL_DEMO_LEADS: ConsultationRecord[] = [
  {
    id: 'lead-1740481200001',
    submittedAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(), // 45 mins ago
    name: 'Dr. Vivek Sharma',
    email: 'dr.vivek@apexheartcare.com',
    phone: '+91 98201 44512',
    practice: 'Apex Cardiology & Vascular Clinic',
    country: 'India',
    specialty: 'Cardiology & Vascular Medicine',
    marketingStatus: 'Yes, active organic social media & reels only',
    goalsOrServices: [
      '24/7 AI Voice Receptionist (Zero Missed Calls)',
      'Doctor AI Video Clone + Social Content'
    ],
    message: 'We miss lots of patient calls during surgical hours. Need 24/7 reception AI voice and weekly reels.',
    source: 'Header / Modal Booking',
    status: 'New',
    notes: 'Urgent callback requested regarding after-hours voice receptionist.'
  },
  {
    id: 'lead-1740478600002',
    submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(), // 4 hours ago
    name: 'Dr. Fatima Al-Zahra',
    email: 'contact@elysiumderma.ae',
    phone: '+971 50 892 3411',
    practice: 'Elysium Aesthetic & Laser Clinic',
    country: 'UAE',
    specialty: 'Dermatology, Cosmetology & Trichology',
    marketingStatus: 'Yes, currently running Paid Ads (Meta / Google Ads)',
    goalsOrServices: [
      'Doctor AI Video Clone + Social Content',
      'Targeted Patient Acquisition Ads',
      'Google My Business & Local 3-Pack Growth'
    ],
    message: 'Looking to expand high-ticket aesthetic package inquiries from Dubai and Abu Dhabi.',
    source: 'Header / Modal Booking',
    status: 'Call Scheduled',
    notes: 'Meeting scheduled for tomorrow 3 PM GST.'
  },
  {
    id: 'lead-1740465200003',
    submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 22).toISOString(), // yesterday
    name: 'Dr. Oliver Wright, BDS',
    email: 'oliver@kensingtons相应mile.co.uk',
    phone: '+44 7700 900342',
    practice: 'Kensington Implant & Cosmetic Dental',
    country: 'UK',
    specialty: 'Dental & Orthodontics / Implantology',
    marketingStatus: 'Yes, worked with agencies/freelancers before',
    goalsOrServices: [
      '24/7 AI Voice Receptionist (Zero Missed Calls)',
      'Doctor AI Video Clone + Social Content',
      'Google My Business & Local 3-Pack Growth'
    ],
    message: 'Agency wasn’t compliant with GDC guidelines. Need medical-specialized AI clone reels.',
    source: 'Page Contact Section',
    status: 'Contacted',
    notes: 'Sent pricing deck & GDC compliance demo reels.'
  }
];

export function getConsultations(): ConsultationRecord[] {
  if (typeof window === 'undefined') return INITIAL_DEMO_LEADS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DEMO_LEADS));
      return INITIAL_DEMO_LEADS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : INITIAL_DEMO_LEADS;
  } catch (err) {
    console.error('Error loading consultations from storage:', err);
    return INITIAL_DEMO_LEADS;
  }
}

export function saveConsultation(lead: Omit<ConsultationRecord, 'id' | 'submittedAt' | 'status'> & { id?: string; submittedAt?: string; status?: ConsultationRecord['status'] }): ConsultationRecord {
  const current = getConsultations();
  const newLead: ConsultationRecord = {
    ...lead,
    id: lead.id || `lead-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
    submittedAt: lead.submittedAt || new Date().toISOString(),
    status: lead.status || 'New',
  };

  const updated = [newLead, ...current];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('doctorstory_consultations_updated'));
  } catch (err) {
    console.error('Error saving consultation:', err);
  }
  return newLead;
}

export function updateConsultationStatus(id: string, status: ConsultationRecord['status'], notes?: string): void {
  const current = getConsultations();
  const updated = current.map(item => {
    if (item.id === id) {
      return {
        ...item,
        status,
        ...(notes !== undefined ? { notes } : {})
      };
    }
    return item;
  });
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('doctorstory_consultations_updated'));
  } catch (err) {
    console.error('Error updating consultation:', err);
  }
}

export function updateConsultationNotes(id: string, notes: string): void {
  const current = getConsultations();
  const updated = current.map(item => {
    if (item.id === id) {
      return { ...item, notes };
    }
    return item;
  });
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('doctorstory_consultations_updated'));
  } catch (err) {
    console.error('Error updating notes:', err);
  }
}

export function deleteConsultation(id: string): void {
  const current = getConsultations();
  const updated = current.filter(item => item.id !== id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('doctorstory_consultations_updated'));
  } catch (err) {
    console.error('Error deleting consultation:', err);
  }
}

export function resetConsultationsToDemo(): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DEMO_LEADS));
    window.dispatchEvent(new Event('doctorstory_consultations_updated'));
  } catch (err) {
    console.error('Error resetting consultations:', err);
  }
}

export function exportConsultationsToCSV(): void {
  const data = getConsultations();
  if (!data || data.length === 0) {
    alert('No consultation records to export.');
    return;
  }

  const headers = [
    'Submission Date',
    'Status',
    'Doctor Name',
    'Email Address',
    'Phone / WhatsApp',
    'Practice / Clinic Name',
    'Country',
    'Specialty',
    'Marketing Status',
    'Selected Goals / Services',
    'Inquiry Message / Notes',
    'Source Channel'
  ];

  const csvRows = data.map(item => {
    return [
      `"${new Date(item.submittedAt).toLocaleString()}"`,
      `"${item.status}"`,
      `"${(item.name || '').replace(/"/g, '""')}"`,
      `"${(item.email || '').replace(/"/g, '""')}"`,
      `"${(item.phone || '').replace(/"/g, '""')}"`,
      `"${(item.practice || '').replace(/"/g, '""')}"`,
      `"${(item.country === 'Other' ? item.customCountry || 'Other' : item.country || '').replace(/"/g, '""')}"`,
      `"${(item.specialty === 'Other Clinical Specialty' ? item.customSpecialty || 'Other' : item.specialty || '').replace(/"/g, '""')}"`,
      `"${(item.marketingStatus || 'N/A').replace(/"/g, '""')}"`,
      `"${(item.goalsOrServices || []).join('; ').replace(/"/g, '""')}"`,
      `"${((item.message ? item.message + ' | ' : '') + (item.notes || '')).replace(/"/g, '""')}"`,
      `"${item.source}"`
    ].join(',');
  });

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...csvRows].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `doctorstory_consultation_leads_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
