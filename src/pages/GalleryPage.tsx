import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Seo } from '@/components/seo/Seo';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { GalleryCard } from '@/components/cards/GalleryCard';
import { CTA } from '@/components/sections/CTA';
import { galleryItems, galleryCategories } from '@/data/gallery';
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';

export default function GalleryPage() {
  const [active, setActive] = useState('All');

  const filtered = useMemo(() => {
    if (active === 'All') return galleryItems;
    return galleryItems.filter((g) => g.category === active);
  }, [active]);

  return (
    <>
      <Seo
        title="Gallery"
        description="Browse before-and-after results and clinic photos. Real outcomes from real patients."
        path="/gallery"
      />
      <PageHero
        eyebrow="Gallery"
        title="Real results, real confidence"
        description="Browse our gallery to see the transformative outcomes our patients have achieved."
        badge={<Badge variant="accent">Before / After</Badge>}
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
            {galleryCategories.map((cat) => (
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
            layout
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  variants={staggerItem}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <GalleryCard item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          {filtered.length === 0 && (
            <p className="mt-10 text-center text-sm text-slate-500">
              No items in this category yet.
            </p>
          )}
        </Container>
      </Section>
      <CTA />
    </>
  );
}
