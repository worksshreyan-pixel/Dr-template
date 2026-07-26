import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { DoctorCard } from '@/components/cards/DoctorCard';
import { viewportOnce } from '@/lib/animations';

export function DoctorSection() {
  return (
    <Section className="bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <DoctorCard />
        </motion.div>
      </Container>
    </Section>
  );
}
