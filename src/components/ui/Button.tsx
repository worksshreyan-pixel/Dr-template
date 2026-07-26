import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { type LucideIcon } from 'lucide-react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  icon?: LucideIcon;
  iconRight?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-600 text-white shadow-float hover:bg-brand-700 hover:shadow-lg',
  secondary:
    'bg-brand-50 text-brand-700 hover:bg-brand-100',
  outline:
    'border border-slate-200 bg-white text-slate-700 hover:border-brand-300 hover:text-brand-700 hover:bg-brand-50',
  ghost: 'text-slate-700 hover:bg-slate-100 hover:text-slate-900',
  white:
    'bg-white text-brand-700 shadow-float hover:bg-brand-50 hover:shadow-lg',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-5 py-2.5 text-sm gap-2',
  lg: 'px-7 py-3.5 text-base gap-2.5',
};

const motionProps = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
  transition: { type: 'spring' as const, stiffness: 400, damping: 17 },
};

function IconIf({ icon: Icon }: { icon?: LucideIcon }) {
  if (!Icon) return null;
  return <Icon className="h-4 w-4" aria-hidden="true" />;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  icon,
  iconRight = false,
  ...rest
}: BaseProps & {
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}) {
  const classes = `inline-flex items-center justify-center rounded-full font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {!iconRight && <IconIf icon={icon} />}
      {children}
      {iconRight && <IconIf icon={icon} />}
    </>
  );

  if (rest.to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={rest.to} className={classes}>
          {content}
        </Link>
      </motion.div>
    );
  }
  if (rest.href) {
    return (
      <motion.a
        href={rest.href}
        className={classes}
        target={rest.href.startsWith('http') ? '_blank' : undefined}
        rel={rest.href.startsWith('http') ? 'noreferrer' : undefined}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }
  return (
    <motion.button
      type={rest.type ?? 'button'}
      onClick={rest.onClick}
      className={classes}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
