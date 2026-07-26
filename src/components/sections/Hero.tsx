import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarHeart, ArrowRight, Star, ShieldCheck, Award, HeartPulse, Users } from 'lucide-react';
import { clinic } from '@/data/clinic';
import { assets } from '@/data/assets';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { fadeUp, scaleIn, staggerContainer, staggerItem, EASE } from '@/lib/animations';

const trustIcons = [
  { icon: Award, label: '16+ Years of expertise' },
  { icon: Users, label: '10,000+ patients treated' },
  { icon: ShieldCheck, label: 'USFDA-Approved Equipment' },
  { icon: HeartPulse, label: 'MD Dermatology Specialist' },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-mesh pt-32 pb-20 sm:pt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={staggerItem}
              className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700 shadow-soft ring-1 ring-brand-100"
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-brand-600" />
              Trusted dermatology care in {clinic.contact.city}
            </motion.span>
            <motion.h1
              variants={staggerItem}
              className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl text-balance"
            >
              Confident Skin. Healthy Hair. Advanced Laser Care.
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600 text-pretty"
            >
              Expert dermatology, hair restoration and laser treatments
              delivered with modern technology and compassionate care.
            </motion.p>
            <motion.div
              variants={staggerItem}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-float transition-colors hover:bg-brand-700 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                >
                  <CalendarHeart className="h-5 w-5" />
                  Book Appointment
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Link
                  to="/treatments"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 transition-colors hover:border-brand-300 hover:text-brand-700 hover:bg-brand-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                >
                  View Treatments
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
              <WhatsAppButton variant="solid" size="md" showLabel className="!px-6 !py-3.5 text-base" />
            </motion.div>
            <motion.div
              variants={staggerItem}
              className="mt-6 flex items-center gap-2 text-sm text-slate-600"
            >
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-slate-900">{clinic.rating}/5</span>
              <span>by {clinic.reviewCount}+ happy patients</span>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 rounded-[2rem] bg-brand-200/40 blur-2xl" />
              <img
                src={assets.hero.main}
                alt="Dermatology consultation"
                className="relative aspect-[4/5] w-full rounded-[1.75rem] object-cover shadow-lift"
                loading="eager"
              />
              <motion.div
                initial={{ opacity: 0, y: 16, x: -16 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6, ease: EASE }}
                className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white p-4 shadow-float sm:block"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <HeartPulse className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Personalised Care Plans
                    </p>
                    <p className="text-xs text-slate-500">Designed for you</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Trust bar */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 grid grid-cols-2 gap-4 border-t border-slate-100 pt-8 sm:grid-cols-4"
        >
          {trustIcons.map((t) => (
            <motion.div
              key={t.label}
              variants={staggerItem}
              className="flex items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <t.icon className="h-5 w-5" />
              </span>
              <p className="text-sm font-medium text-slate-700">{t.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
