import { motion } from 'framer-motion';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { getWhatsAppHref } from '@/components/ui/WhatsAppButton';

export function FloatingWhatsApp() {
  const href = getWhatsAppHref();
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift sm:bottom-6 sm:right-6"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: 'spring', stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Subtle ping ring */}
      <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-60 motion-safe:animate-ping" />
      <WhatsAppIcon className="h-7 w-7" />
      {/* Tooltip on hover (desktop) */}
      <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-soft transition-opacity group-hover:opacity-100 sm:block">
        Chat with us
      </span>
    </motion.a>
  );
}
