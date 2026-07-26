export interface DoctorCredential {
  label: string;
  description: string;
}

export interface DoctorStat {
  label: string;
  value: string;
}

export interface DoctorInfo {
  name: string;
  qualifications: string;
  specialty: string;
  experienceYears: number;
  bio: string;
  philosophy: string;
  photo: string;
  credentials: DoctorCredential[];
  stats: DoctorStat[];
  certifications: string[];
}

export const doctor: DoctorInfo = {
  name: 'Dr. Aarav Mehta',
  qualifications: 'MBBS, MD Dermatology',
  specialty: 'Dermatology',
  experienceYears: 16,
  bio: 'With over 16 years of dedicated practice in dermatology, Dr. Aarav Mehta is one of the city\u2019s most trusted skin and hair specialists. He combines deep clinical expertise with a warm, patient-first philosophy — ensuring every individual receives an accurate diagnosis and a treatment plan designed specifically for them.',
  philosophy:
    'Trained at premier institutions, Dr. Mehta stays at the forefront of dermatological advances, bringing USFDA-approved technology and evidence-based protocols to every consultation and procedure.',
  photo: '/images/doctor/doctor-portrait.jpg',
  credentials: [
    {
      label: 'MBBS',
      description: 'Registered Medical Practitioner',
    },
    {
      label: 'MD Dermatology',
      description: 'Specialised Training',
    },
    {
      label: '16+ Years',
      description: 'of Clinical Experience',
    },
    {
      label: '10,000+',
      description: 'Patients Successfully Treated',
    },
  ],
  stats: [
    { label: 'Years of Experience', value: '16+' },
    { label: 'Patients Treated', value: '10,000+' },
    { label: 'Specialised Treatments', value: '12+' },
    { label: 'Patient Satisfaction', value: '98%' },
  ],
  certifications: [
    'Member, Indian Association of Dermatologists',
    'Advanced Laser & Aesthetic Certification',
  ],
};
