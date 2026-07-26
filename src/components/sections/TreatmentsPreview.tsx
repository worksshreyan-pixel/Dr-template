import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { TreatmentCard } from '@/components/cards/TreatmentCard';
import { treatments } from '@/data/treatments';
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';

export function TreatmentsPreview({ limit = 6 }: { limit?: number }) {
  const items = treatments.slice(0, limit);
  return (
    <Section className="bg-slate-50">
      <SectionHeader
        eyebrow="Our Treatments"
        title="Comprehensive skin, hair & laser care"
        description="From medical dermatology to advanced aesthetic procedures — every treatment is evidence-based and tailored to your unique needs."
        badge={<Badge variant="brand">12+ Specialised Treatments</Badge>}
      />
      <Container className="mt-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((t) => (
            <motion.div key={t.slug} variants={staggerItem}>
              <TreatmentCard treatment={t} />
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
            to="/treatments"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-soft transition-all hover:border-brand-300 hover:text-brand-700 hover:bg-brand-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
          >
            View All Treatments
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
}
