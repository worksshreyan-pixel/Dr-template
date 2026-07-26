import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Seo } from '@/components/seo/Seo';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { CTA } from '@/components/sections/CTA';
import { faqs } from '@/data/faq';
import { Phone, CalendarHeart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { clinic } from '@/data/clinic';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { viewportOnce } from '@/lib/animations';

export default function FaqPage() {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(faqs.map((f) => f.category)))],
    []
  );
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All' ? faqs : faqs.filter((f) => f.category === active);

  return (
    <>
      <Seo
        title="FAQ"
        description="Answers to the most common questions about appointments, pricing, treatments and aftercare."
        path="/faq"
      />
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Everything you need to know before your visit."
        badge={<Badge variant="brand">Quick Answers</Badge>}
      />
      <Section className="bg-slate-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${
                  active === cat
                    ? 'bg-brand-600 text-white shadow-float'
                    : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            <FaqAccordion items={filtered} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-10 max-w-3xl rounded-2xl border border-brand-100 bg-brand-50 p-6 text-center sm:p-8"
          >
            <h3 className="font-display text-xl font-bold text-slate-900">
              Still have questions?
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Our front desk is happy to help. Reach out and we'll get you
              sorted.
            </p>
            <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-float transition-colors hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
              >
                <CalendarHeart className="h-4 w-4" />
                Book Appointment
              </Link>
              <a
                href={clinic.contact.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
              >
                <Phone className="h-4 w-4" />
                {clinic.contact.phone}
              </a>
              <WhatsAppButton variant="solid" size="md" showLabel label="WhatsApp" />
            </div>
          </motion.div>
        </Container>
      </Section>
      <CTA />
    </>
  );
}
