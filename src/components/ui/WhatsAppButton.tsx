import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { WhatsAppIcon } from './WhatsAppIcon';
import { clinic } from '@/data/clinic';

type WhatsAppVariant = 'floating' | 'solid' | 'outline' | 'ghost' | 'white';
type WhatsAppSize = 'sm' | 'md' | 'lg';

interface WhatsAppButtonProps {
  variant?: WhatsAppVariant;
  size?: WhatsAppSize;
  label?: string;
  className?: string;
  children?: ReactNode;
  showLabel?: boolean;
}

const variants: Record<WhatsAppVariant, string> = {
  floating:
    'bg-[#25D366] text-white shadow-float hover:bg-[#1ebe5d] hover:shadow-lg',
  solid:
    'bg-[#25D366] text-white shadow-soft hover:bg-[#1ebe5d]',
  outline:
    'border border-[#25D366]/30 bg-white text-[#1ebe5d] hover:bg-[#25D366]/5',
  ghost:
    'text-[#1ebe5d] hover:bg-[#25D366]/10',
  white:
    'bg-white text-[#1ebe5d] shadow-soft hover:bg-[#25D366]/5',
};

const sizes: Record<WhatsAppSize, string> = {
  sm: 'h-9 w-9 gap-1.5 text-sm',
  md: 'h-11 w-11 gap-2 text-sm',
  lg: 'h-12 w-12 gap-2.5 text-base',
};

const iconSizes: Record<WhatsAppSize, string> = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
};

export function getWhatsAppHref(): string {
  return clinic.contact.whatsappHref || 'https://wa.me/919876543210';
}

export function WhatsAppButton({
  variant = 'solid',
  size = 'md',
  label = 'Chat on WhatsApp',
  className = '',
  children,
  showLabel = false,
}: WhatsAppButtonProps) {
  const href = getWhatsAppHref();
  const iconClass = iconSizes[size];

  // Icon-only round button (no label)
  if (!showLabel && !children) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={label}
        className={`inline-flex items-center justify-center rounded-full font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 ${variants[variant]} ${sizes[size]} ${className}`}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        <WhatsAppIcon className={iconClass} />
      </motion.a>
    );
  }

  // Pill button with label
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <WhatsAppIcon className={iconClass} />
      {children ?? label}
    </motion.a>
  );
}
