import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { TestimonialCard } from '@/components/cards/TestimonialCard';
import { testimonials } from '@/data/testimonials';
import { clinic } from '@/data/clinic';
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';

export function TestimonialsPreview({ limit = 3 }: { limit?: number }) {
  const items = testimonials.slice(0, limit);
  return (
    <Section className="bg-slate-50">
      <SectionHeader
        eyebrow="Google Reviews"
        title="What our patients say"
        description={`Hundreds of patients have trusted us with their skin and hair. Here's what they have to say.`}
        badge={
          <Badge variant="brand">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            {clinic.rating}/5 • {clinic.reviewCount}+ reviews
          </Badge>
        }
      />
      <Container className="mt-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-5 md:grid-cols-3"
        >
          {items.map((t) => (
            <motion.div key={t.name} variants={staggerItem}>
              <TestimonialCard testimonial={t} />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex justify-center"
        >
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-soft transition-all hover:border-brand-300 hover:text-brand-700 hover:bg-brand-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
          >
            Read All Reviews
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
}
