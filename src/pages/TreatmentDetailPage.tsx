import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Clock, Repeat, Users } from 'lucide-react';
import { Seo } from '@/components/seo/Seo';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CTA } from '@/components/sections/CTA';
import { treatments } from '@/data/treatments';
import { getIcon } from '@/lib/icons';
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';

export default function TreatmentDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const treatment = treatments.find((t) => t.slug === slug);

  if (!treatment) return <Navigate to="/treatments" replace />;

  const Icon = getIcon(treatment.icon);

  return (
    <>
      <Seo
        title={treatment.title}
        description={treatment.description}
        path={`/treatments/${treatment.slug}`}
      />
      <section className="relative overflow-hidden bg-mesh pt-32 pb-16 sm:pt-36">
        <Container>
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to="/treatments"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-brand-700 focus:outline-none focus-visible:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              All treatments
            </Link>
          </motion.div>
          <div className="mt-6 grid items-center gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Badge variant="brand">
                <Icon className="h-3.5 w-3.5" />
                {treatment.title}
              </Badge>
              <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl text-balance">
                {treatment.title}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600 text-pretty">
                {treatment.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button to="/contact" size="md">
                  Book this treatment
                </Button>
                <Button to="/contact" variant="outline" size="md">
                  Ask a question
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-3 rounded-[2rem] bg-brand-100/60 blur-2xl" />
              <img
                src={treatment.image}
                alt={treatment.title}
                className="relative aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-lift"
                loading="lazy"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-3">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="lg:col-span-2"
            >
              <motion.h2
                variants={staggerItem}
                className="font-display text-2xl font-bold tracking-tight text-slate-900"
              >
                Key benefits
              </motion.h2>
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="mt-5 grid gap-3 sm:grid-cols-2"
              >
                {treatment.benefits.map((b) => (
                  <motion.li
                    key={b}
                    variants={staggerItem}
                    whileHover={{ x: 3 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success-500 text-white">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm text-slate-700">{b}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4"
            >
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
                <h3 className="text-sm font-semibold text-slate-900">
                  Treatment details
                </h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-brand-600" />
                    <dt className="text-slate-500">Duration</dt>
                    <dd className="ml-auto font-medium text-slate-900">
                      {treatment.duration}
                    </dd>
                  </div>
                  <div className="flex items-center gap-3">
                    <Repeat className="h-4 w-4 text-brand-600" />
                    <dt className="text-slate-500">Sessions</dt>
                    <dd className="ml-auto font-medium text-slate-900">
                      {treatment.sessions}
                    </dd>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-4 w-4 text-brand-600" />
                    <dt className="text-slate-500">Suitable for</dt>
                    <dd className="ml-auto text-right font-medium text-slate-900">
                      {treatment.suitableFor}
                    </dd>
                  </div>
                </dl>
              </div>
            </motion.aside>
          </div>
        </Container>
      </Section>

      <CTA />
    </>
  );
}
