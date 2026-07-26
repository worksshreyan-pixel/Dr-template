import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarHeart, Phone, MapPin, Clock } from 'lucide-react';
import { clinic } from '@/data/clinic';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';

export function CTA() {
  return (
    <section className="bg-brand-600 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid items-center gap-8 lg:grid-cols-3"
        >
          <motion.div variants={staggerItem} className="lg:col-span-2">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
              Ready to start your skin journey?
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-brand-100">
              Book your consultation today and take the first step towards
              confident skin and healthy hair.
            </p>
          </motion.div>
          <motion.div
            variants={staggerItem}
            className="flex flex-col gap-3 sm:flex-row lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-float transition-colors hover:bg-brand-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-600 sm:w-auto"
              >
                <CalendarHeart className="h-4 w-4" />
                Book Appointment
              </Link>
            </motion.div>
            <WhatsAppButton
              variant="white"
              size="md"
              showLabel
              label="WhatsApp Us"
              className="!w-full sm:!w-auto"
            />
          </motion.div>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 grid gap-4 border-t border-white/15 pt-8 sm:grid-cols-3"
        >
          {[
            { icon: Phone, text: clinic.contact.phone },
            { icon: MapPin, text: `${clinic.contact.addressLine2}, ${clinic.contact.city}` },
            { icon: Clock, text: 'Mon–Sat: 10AM–8PM' },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="flex items-center gap-3 text-brand-100"
            >
              <item.icon className="h-5 w-5" />
              <span className="text-sm">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
