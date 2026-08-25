export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  tag: string;
  metrics: string;
  features: string[];
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  practiceName: string;
  country: string;
  customCountry?: string;
  specialty: string;
  customSpecialty?: string;
  servicesInterested: string[];
  message: string;
}

export interface CountryPresence {
  name: string;
  code: string;
  flag: string;
  compliance: string;
  activePractices: string;
  region: string;
}
