export interface BusinessHour {
  day: string;
  hours: string;
  isEmergency?: boolean;
}

export interface ClinicContact {
  phone: string;
  phoneHref: string;
  whatsapp: string;
  whatsappHref: string;
  email: string;
  emailHref: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  mapsUrl: string;
  mapsEmbedUrl: string;
}

export interface ClinicInfo {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  establishedYear: number;
  rating: number;
  reviewCount: number;
  stats: { label: string; value: string }[];
  hours: BusinessHour[];
  contact: ClinicContact;
}

export const clinic: ClinicInfo = {
  name: 'Aarav Skin & Hair Clinic',
  shortName: 'Aarav Clinic',
  tagline: 'Skin, Hair & Laser Clinic',
  description:
    'Premier dermatology, hair restoration and laser care — delivered with modern technology and compassionate, evidence-based medicine.',
  establishedYear: 2009,
  rating: 4.9,
  reviewCount: 500,
  stats: [
    { label: 'Years of expertise', value: '16+' },
    { label: 'Patients treated', value: '10,000+' },
    { label: 'Specialised treatments', value: '12+' },
    { label: 'Patient satisfaction', value: '98%' },
  ],
  hours: [
    { day: 'Monday', hours: '10:00 AM – 8:00 PM' },
    { day: 'Tuesday', hours: '10:00 AM – 8:00 PM' },
    { day: 'Wednesday', hours: '10:00 AM – 8:00 PM' },
    { day: 'Thursday', hours: '10:00 AM – 8:00 PM' },
    { day: 'Friday', hours: '10:00 AM – 8:00 PM' },
    { day: 'Saturday', hours: '10:00 AM – 8:00 PM' },
    { day: 'Sunday', hours: 'Emergency only', isEmergency: true },
  ],
  contact: {
    phone: '+91 98765 43210',
    phoneHref: 'tel:+919876543210',
    whatsapp: '919876543210',
    whatsappHref: 'https://wa.me/919876543210',
    email: 'care@aaravclinic.example.com',
    emailHref: 'mailto:care@aaravclinic.example.com',
    addressLine1: '1st Floor, Wellness Square, 80/81 Opp. City Park',
    addressLine2: 'Near Central Market, Civil Lines',
    city: 'Pune',
    region: 'Maharashtra',
    postalCode: '411001',
    country: 'IN',
    mapsUrl: 'https://maps.google.com/?q=Civil+Lines+Pune',
    mapsEmbedUrl:
      'https://www.google.com/maps?q=Civil+Lines+Pune&output=embed',
  },
};
