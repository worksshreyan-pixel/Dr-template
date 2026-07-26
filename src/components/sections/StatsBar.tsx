import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { clinic } from '@/data/clinic';
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';

export function StatsBar() {
  return (
    <section className="border-y border-slate-100 bg-white py-6">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {clinic.stats.map((s) => (
            <motion.div
              key={s.label}
              variants={staggerItem}
              className="text-center"
            >
              <p className="font-display text-2xl font-bold text-brand-700 sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
