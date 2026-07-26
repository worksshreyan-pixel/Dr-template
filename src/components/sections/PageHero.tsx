import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { staggerContainer, staggerItem } from '@/lib/animations';

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  badge?: ReactNode;
}

export function PageHero({ eyebrow, title, description, badge }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-mesh pt-32 pb-16 sm:pt-36 sm:pb-20">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-2xl text-center"
        >
          {badge && (
            <motion.div variants={staggerItem} className="flex justify-center">
              {badge}
            </motion.div>
          )}
          {eyebrow && (
            <motion.p
              variants={staggerItem}
              className="mt-3 text-sm font-semibold uppercase tracking-wider text-brand-600"
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            variants={staggerItem}
            className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl text-balance"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              variants={staggerItem}
              className="mt-4 text-base leading-relaxed text-slate-600 text-pretty"
            >
              {description}
            </motion.p>
          )}
        </motion.div>
      </Container>
    </section>
  );
}

export { Container, Badge };
