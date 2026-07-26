import { motion } from 'framer-motion';
import { Seo } from '@/components/seo/Seo';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { TreatmentCard } from '@/components/cards/TreatmentCard';
import { CTA } from '@/components/sections/CTA';
import { treatments } from '@/data/treatments';
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';

export default function TreatmentsPage() {
  return (
    <>
      <Seo
        title="Treatments"
        description="Explore our full range of evidence-based dermatology, hair and laser treatments — each tailored to your skin and goals."
        path="/treatments"
      />
      <PageHero
        eyebrow="Our Treatments"
        title="Comprehensive skin, hair & laser care"
        description="From medical dermatology to advanced aesthetic procedures — every treatment is evidence-based and tailored to your unique needs."
        badge={<Badge variant="brand">12+ Specialised Treatments</Badge>}
      />
      <Section className="bg-slate-50">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {treatments.map((t) => (
              <motion.div key={t.slug} variants={staggerItem}>
                <TreatmentCard treatment={t} />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>
      <CTA />
    </>
  );
}
