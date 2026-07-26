import { motion } from 'framer-motion';
import { Seo } from '@/components/seo/Seo';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { DoctorCard } from '@/components/cards/DoctorCard';
import { CTA } from '@/components/sections/CTA';
import { doctor } from '@/data/doctor';
import { Stethoscope, GraduationCap, Award, Users, BadgeCheck } from 'lucide-react';
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';

const statIcons = [Award, Users, Stethoscope, GraduationCap];

export default function DoctorPage() {
  return (
    <>
      <Seo
        title={doctor.name}
        description={`${doctor.name}, ${doctor.qualifications} — ${doctor.experienceYears}+ years of dermatology expertise with a patient-first philosophy.`}
        path="/doctor"
      />
      <PageHero
        eyebrow="Meet Your Doctor"
        title={doctor.name}
        description={`${doctor.qualifications} • ${doctor.experienceYears}+ years of dedicated dermatology practice`}
        badge={<Badge variant="brand">{doctor.specialty} Specialist</Badge>}
      />

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

      <Section className="bg-slate-50">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {doctor.stats.map((s, i) => {
              const Icon = statIcons[i % statIcons.length];
              return (
                <motion.div
                  key={s.label}
                  variants={staggerItem}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-soft transition-shadow hover:shadow-card"
                >
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon className="h-6 w-6" />
                  </span>
                  <p className="mt-4 font-display text-2xl font-bold text-slate-900">
                    {s.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">{s.label}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 rounded-2xl border border-slate-100 bg-white p-6 shadow-soft sm:p-8"
          >
            <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
              Certifications & Memberships
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {doctor.certifications.map((c) => (
                <li
                  key={c}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700"
                >
                  <BadgeCheck className="h-5 w-5 text-brand-600" />
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>
        </Container>
      </Section>

      <CTA />
    </>
  );
}
