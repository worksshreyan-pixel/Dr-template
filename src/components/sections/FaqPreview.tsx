import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { FaqAccordion } from './FaqAccordion';
import { faqs } from '@/data/faq';
import { viewportOnce } from '@/lib/animations';

export function FaqPreview({ limit = 5 }: { limit?: number }) {
  const items = faqs.slice(0, limit);
  return (
    <Section className="bg-slate-50">
      <SectionHeader
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Everything you need to know before your visit."
        badge={<Badge variant="brand">Quick Answers</Badge>}
      />
      <Container className="mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <FaqAccordion items={items} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex justify-center"
        >
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-soft transition-all hover:border-brand-300 hover:text-brand-700 hover:bg-brand-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
          >
            View all FAQs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
}
