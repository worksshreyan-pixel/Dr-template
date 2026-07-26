import { motion } from 'framer-motion';
import { Seo } from '@/components/seo/Seo';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { StatsBar } from '@/components/sections/StatsBar';
import { CTA } from '@/components/sections/CTA';
import { DoctorSection } from '@/components/sections/DoctorSection';
import { clinic } from '@/data/clinic';
import { HeartPulse, ShieldCheck, Sparkles, Users, Award, Microscope } from 'lucide-react';
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';

const values = [
  {
    icon: HeartPulse,
    title: 'Patient-First Care',
    description:
      'Every plan is built around your unique skin, lifestyle and goals — never a one-size-fits-all protocol.',
  },
  {
    icon: ShieldCheck,
    title: 'Evidence-Based Medicine',
    description:
      'We use only clinically-proven, USFDA-approved technology and protocols backed by dermatology research.',
  },
  {
    icon: Sparkles,
    title: 'Modern Technology',
    description:
      'Our clinic is equipped with the latest lasers and aesthetic devices, calibrated for Indian skin.',
  },
  {
    icon: Users,
    title: 'Compassionate Team',
    description:
      'A warm, judgement-free environment where every question is welcome and every concern is heard.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Us"
        description={`Learn about ${clinic.name} — our philosophy, our team and our commitment to evidence-based, compassionate dermatology.`}
        path="/about"
      />
      <PageHero
        eyebrow="About Us"
        title="Caring for skin, built on trust"
        description={clinic.description}
        badge={<Badge variant="brand">Established {clinic.establishedYear}</Badge>}
      />
      <StatsBar />

      <Section className="bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Badge variant="brand">Our Story</Badge>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                A clinic built around you
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                Founded in {clinic.establishedYear}, {clinic.name} began with a
                simple belief: dermatology should be accessible, honest and
                genuinely caring. Over {new Date().getFullYear() - clinic.establishedYear}{' '}
                years, we have grown into one of {clinic.contact.city}'s most
                trusted skin and hair destinations — but our philosophy has
                never changed.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Every consultation starts with listening. We diagnose the root
                cause, explain it clearly, and build a plan that fits your life
                — not the other way around.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Badge variant="neutral" icon={<Award className="h-3.5 w-3.5" />}>
                  16+ Years
                </Badge>
                <Badge variant="neutral" icon={<Users className="h-3.5 w-3.5" />}>
                  10,000+ Patients
                </Badge>
                <Badge variant="neutral" icon={<Microscope className="h-3.5 w-3.5" />}>
                  USFDA Equipment
                </Badge>
              </div>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid gap-4 sm:grid-cols-2"
            >
              {values.map((v) => (
                <motion.div
                  key={v.title}
                  variants={staggerItem}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-all hover:bg-white hover:shadow-card"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {v.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </Section>

      <DoctorSection />
      <CTA />
    </>
  );
}
