import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { type Treatment } from '@/data/treatments';
import { getIcon } from '@/lib/icons';

export function TreatmentCard({ treatment }: { treatment: Treatment }) {
  const Icon = getIcon(treatment.icon);
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Link
        to={`/treatments/${treatment.slug}`}
        className="group block h-full overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition-colors duration-300 hover:border-brand-200 hover:shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
      >
        <div className="flex items-start justify-between">
          <motion.span
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white"
          >
            <Icon className="h-6 w-6" />
          </motion.span>
          <ArrowRight className="h-5 w-5 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-brand-600" />
        </div>
        <h3 className="mt-5 text-lg font-semibold text-slate-900">
          {treatment.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {treatment.shortDescription}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
          Learn more
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </Link>
    </motion.div>
  );
}
