import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { type Testimonial } from '@/data/testimonials';

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.figure
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition-shadow duration-300 hover:shadow-card"
    >
      <div className="flex items-center justify-between">
        <div className="flex">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <Quote className="h-7 w-7 text-brand-100" />
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white">
          {testimonial.initials}
        </span>
        <div>
          <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
          <p className="text-xs text-slate-500">
            {testimonial.treatment} • {testimonial.location}
          </p>
        </div>
      </figcaption>
    </motion.figure>
  );
}
