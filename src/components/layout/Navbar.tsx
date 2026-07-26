import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Stethoscope, CalendarHeart, Phone } from 'lucide-react';
import { navItems } from '@/data/navigation';
import { clinic } from '@/data/clinic';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrollPosition(8);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const solid = scrolled || !isHome;

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? 'bg-white/85 shadow-soft backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5" aria-label={clinic.name}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white shadow-float">
            <Stethoscope className="h-5 w-5" />
          </span>
          <span className="hidden text-[15px] font-semibold leading-tight tracking-tight sm:block">
            <span className={solid ? 'text-slate-900' : 'text-slate-900'}>
              {clinic.shortName}
            </span>
            <span
              className={`block text-xs font-medium ${
                solid ? 'text-slate-500' : 'text-slate-500'
              }`}
            >
              {clinic.tagline}
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink
                to={item.href}
                end={item.href === '/'}
                className={({ isActive }) =>
                  `rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={clinic.contact.phoneHref}
            className="hidden h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-colors hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 sm:flex"
            aria-label="Call clinic"
          >
            <Phone className="h-4 w-4" />
          </a>
          <div className="hidden sm:block">
            <WhatsAppButton variant="outline" size="sm" label="WhatsApp" />
          </div>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Link
              to="/contact"
              className="hidden items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-float transition-colors hover:bg-brand-700 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 sm:flex"
            >
              <CalendarHeart className="h-4 w-4" />
              Book Appointment
            </Link>
          </motion.div>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-colors hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <div className="lg:hidden">
            <motion.div
              className="fixed inset-0 top-16 bg-slate-900/20 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="absolute inset-x-0 top-16 origin-top bg-white px-4 pb-6 pt-2 shadow-lift"
              initial={{ opacity: 0, y: -12, scaleY: 0.96 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -8, scaleY: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <ul className="flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i + 0.05, duration: 0.25 }}
                  >
                    <NavLink
                      to={item.href}
                      end={item.href === '/'}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                          isActive
                            ? 'bg-brand-50 text-brand-700'
                            : 'text-slate-700 hover:bg-slate-50'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 * navItems.length + 0.1, duration: 0.25 }}
                className="mt-3 flex flex-col gap-2"
              >
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-float"
                >
                  <CalendarHeart className="h-4 w-4" />
                  Book Appointment
                </Link>
                <WhatsAppButton
                  variant="solid"
                  size="md"
                  showLabel
                  label="Chat on WhatsApp"
                  className="w-full"
                />
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
