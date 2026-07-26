import { motion } from 'framer-motion';
import { type GalleryItem } from '@/data/gallery';

export function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative h-full overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 shadow-soft transition-shadow duration-300 hover:shadow-card"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
        <span className="inline-flex rounded-full bg-white/90 px-2.5 py-0.5 text-[11px] font-semibold text-brand-700">
          {item.category}
        </span>
        <p className="mt-2 text-sm font-semibold text-white">{item.title}</p>
      </div>
    </motion.div>
  );
}
