import { type ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'brand' | 'accent' | 'neutral' | 'success' | 'white';
  className?: string;
  icon?: ReactNode;
}

const variants = {
  brand: 'bg-brand-50 text-brand-700 ring-brand-100',
  accent: 'bg-accent-50 text-accent-600 ring-accent-100',
  neutral: 'bg-slate-100 text-slate-600 ring-slate-200',
  success: 'bg-success-50 text-success-700 ring-success-100',
  white: 'bg-white/10 text-white ring-white/20',
};

export function Badge({
  children,
  variant = 'brand',
  className = '',
  icon,
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${variants[variant]} ${className}`}
    >
      {icon}
      {children}
    </span>
  );
}
