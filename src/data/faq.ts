export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FaqItem[] = [
  {
    category: 'Appointments',
    question: 'Do I need a referral to book an appointment?',
    answer:
      'No referral is needed. You can book directly by phone, WhatsApp, or through the contact form on this website. New patients are always welcome.',
  },
  {
    category: 'Appointments',
    question: 'How do I book an appointment?',
    answer:
      'You can book by calling the clinic during business hours, sending a WhatsApp message, or using the Book Appointment button on any page. We\u2019ll confirm your slot within a few hours.',
  },
  {
    category: 'Visits',
    question: 'What are the clinic timings?',
    answer:
      'We are open Monday to Saturday, 10:00 AM to 8:00 PM. Sundays are reserved for emergencies only — please call ahead.',
  },
  {
    category: 'Pricing',
    question: 'How much does a consultation cost?',
    answer:
      'A first-time dermatology consultation is a flat, all-inclusive fee that includes your skin analysis and a personalised treatment plan. Procedure pricing is shared transparently during your visit.',
  },
  {
    category: 'Treatments',
    question: 'Are laser treatments safe for Indian skin?',
    answer:
      'Yes. We use USFDA-approved laser technology specifically calibrated for Indian skin tones, with settings adjusted to your skin type to ensure both safety and effectiveness.',
  },
  {
    category: 'Treatments',
    question: 'How many sessions will I need for laser hair removal?',
    answer:
      'Most patients see optimal results after 6 to 8 sessions spaced 4 to 6 weeks apart. Your exact number depends on the area treated, hair thickness and your skin type.',
  },
  {
    category: 'Treatments',
    question: 'Is PRP therapy painful?',
    answer:
      'A numbing cream is applied before the procedure, so most patients feel only mild pressure. Any soreness usually settles within a day.',
  },
  {
    category: 'Aftercare',
    question: 'What aftercare is needed after a chemical peel?',
    answer:
      'You\u2019ll be given a simple home-care routine: gentle cleanser, moisturiser and daily sunscreen. Avoid sun exposure and active skincare for a few days as your skin renews.',
  },
  {
    category: 'Aftercare',
    question: 'When will I see results?',
    answer:
      'It depends on the treatment. Some patients notice improvement within a week, while hair and laser treatments typically show full results over a few months as collagen and follicles respond.',
  },
  {
    category: 'Insurance',
    question: 'Do you accept insurance?',
    answer:
      'We provide detailed invoices that you can submit to your insurer. Coverage depends on your policy and the procedure — our front desk can help you with the paperwork.',
  },
];
