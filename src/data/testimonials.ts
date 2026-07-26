export interface Testimonial {
  name: string;
  initials: string;
  treatment: string;
  location: string;
  rating: number;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Priya Sharma',
    initials: 'P',
    treatment: 'Acne Treatment',
    location: 'Pune',
    rating: 5,
    quote:
      'After years of struggling with acne, the personalised treatment plan cleared my skin in just three months. The clinic is spotless and the staff are incredibly kind.',
  },
  {
    name: 'Rahul Patil',
    initials: 'R',
    treatment: 'Laser Hair Removal',
    location: 'Mumbai',
    rating: 5,
    quote:
      'I was hesitant about laser hair removal, but the results speak for themselves. Virtually painless and the hair reduction is remarkable after five sessions.',
  },
  {
    name: 'Sneha Deshmukh',
    initials: 'S',
    treatment: 'PRP Therapy',
    location: 'Pune',
    rating: 5,
    quote:
      'PRP therapy genuinely worked for my hair fall. The doctor explained every step and the results are visible. Highly recommend for anyone facing hair loss.',
  },
  {
    name: 'Amit Kulkarni',
    initials: 'A',
    treatment: 'Chemical Peels',
    location: 'Nashik',
    rating: 5,
    quote:
      'My skin texture has never been better. The chemical peel sessions were comfortable and the aftercare guidance was clear and easy to follow.',
  },
  {
    name: 'Kavya Nair',
    initials: 'K',
    treatment: 'Pigmentation',
    location: 'Pune',
    rating: 5,
    quote:
      'Years of sun damage faded in a few sessions. I finally feel confident stepping out without foundation. Truly grateful for the honest advice.',
  },
  {
    name: 'Vikram Rao',
    initials: 'V',
    treatment: 'Botox',
    location: 'Pune',
    rating: 5,
    quote:
      'Natural-looking results — no frozen face, just a refreshed appearance. The doctor understood exactly the look I wanted. Professional and precise.',
  },
];
