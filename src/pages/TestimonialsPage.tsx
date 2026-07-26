import { motion } from 'framer-motion';
import { Seo } from '@/components/seo/Seo';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { TestimonialCard } from '@/components/cards/TestimonialCard';
import { CTA } from '@/components/sections/CTA';
import { testimonials } from '@/data/testimonials';
import { clinic } from '@/data/clinic';
import { Star } from 'lucide-react';
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';

export default function TestimonialsPage() {
  return (
    <>
      <Seo
        title="Testimonials"
        description={`Read what our patients say — ${testimonials.length}+ verified reviews from people who trusted us with their skin and hair.`}
        path="/testimonials"
      />
      <PageHero
        eyebrow="Google Reviews"
        title="What our patients say"
        description="Hundreds of patients have trusted us with their skin and hair. Here's what they have to say."
        badge={
          <Badge variant="brand">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            {clinic.rating}/5 • {clinic.reviewCount}+ reviews
          </Badge>
        }
      />
      <Section className="bg-slate-50">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={staggerItem}>
                <TestimonialCard testimonial={t} />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>
      <CTA />
    </>
  );
}
