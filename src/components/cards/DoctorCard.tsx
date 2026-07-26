import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Stethoscope, Users, ArrowRight } from 'lucide-react';
import { doctor } from '@/data/doctor';
import { Badge } from '@/components/ui/Badge';
import { staggerContainer, staggerItem } from '@/lib/animations';

const credentialIcons = [Stethoscope, GraduationCap, Award, Users];

export function DoctorCard() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-5">
      {/* Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="lg:col-span-2"
      >
        <div className="relative mx-auto max-w-sm">
          <div className="absolute -inset-3 rounded-[2rem] bg-brand-100/60 blur-2xl" />
          <img
            src={doctor.photo}
            alt={doctor.name}
            className="relative aspect-[4/5] w-full rounded-[1.75rem] object-cover shadow-lift"
            loading="lazy"
          />
        </div>
      </motion.div>

      {/* Info */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="lg:col-span-3"
      >
        <motion.div variants={staggerItem}>
          <Badge variant="brand">{doctor.qualifications}</Badge>
        </motion.div>
        <motion.h2
          variants={staggerItem}
          className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          Meet Your Doctor
        </motion.h2>
        <motion.p variants={staggerItem} className="mt-2 text-xl font-semibold text-brand-700">
          {doctor.name}
        </motion.p>
        <motion.p variants={staggerItem} className="mt-1 text-sm font-medium text-slate-500">
          {doctor.qualifications}
        </motion.p>
        <motion.p variants={staggerItem} className="mt-5 text-base leading-relaxed text-slate-600">
          {doctor.bio}
        </motion.p>
        <motion.p variants={staggerItem} className="mt-3 text-base leading-relaxed text-slate-600">
          {doctor.philosophy}
        </motion.p>

        <motion.div
          variants={staggerItem}
          className="mt-7 grid gap-3 sm:grid-cols-2"
        >
          {doctor.credentials.map((c, i) => {
            const Icon = credentialIcons[i % credentialIcons.length];
            return (
              <motion.div
                key={c.label}
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 transition-colors hover:bg-white hover:shadow-soft"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-brand-700 shadow-soft">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{c.label}</p>
                  <p className="text-xs text-slate-500">{c.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={staggerItem}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className="mt-7 inline-block"
        >
          <Link
            to="/doctor"
            className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-float transition-colors hover:bg-brand-700 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
          >
            Learn More
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
