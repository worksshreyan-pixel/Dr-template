import { clinic } from './clinic';
import { doctor } from './doctor';
import { treatments } from './treatments';
import { faqs } from './faq';

export const siteConfig = {
  url: 'https://aaravclinic.example.com',
  name: clinic.name,
  shortName: clinic.shortName,
  title: `${clinic.name} | Expert Dermatology Care`,
  description: clinic.description,
  ogImage: '/og-image.png',
};

export function getMedicalSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: clinic.name,
    description: clinic.description,
    url: siteConfig.url,
    telephone: clinic.contact.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${clinic.contact.addressLine1}, ${clinic.contact.addressLine2}`,
      addressLocality: clinic.contact.city,
      addressRegion: clinic.contact.region,
      postalCode: clinic.contact.postalCode,
      addressCountry: clinic.contact.country,
    },
    medicalSpecialty: doctor.specialty,
    openingHoursSpecification: clinic.hours
      .filter((h) => !h.isEmergency)
      .map((h) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: h.day,
        opens: '10:00',
        closes: '20:00',
      })),
    founder: {
      '@type': 'Physician',
      name: doctor.name,
      medicalSpecialty: doctor.specialty,
      qualification: doctor.qualifications,
    },
    makesOffer: treatments.map((t) => ({
      '@type': 'MedicalTherapy',
      name: t.title,
      description: t.shortDescription,
    })),
    subjectOf: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}
