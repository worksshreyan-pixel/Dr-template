import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';
import { Badge } from './Badge';
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  badge?: ReactNode;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  badge,
  className = '',
}: SectionHeaderProps) {
  const isCenter = align === 'center';
  return (
    <Container>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className={`${isCenter ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}
      >
        {badge && (
          <motion.div variants={staggerItem} className={isCenter ? 'flex justify-center' : ''}>
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
        <motion.h2
          variants={staggerItem}
          className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-balance"
        >
          {title}
        </motion.h2>
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
  );
}

export { Container, Badge, fadeUp };
