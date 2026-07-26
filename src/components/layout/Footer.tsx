import { Link } from 'react-router-dom';
import { Stethoscope, MapPin, Phone, Clock, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';
import { clinic } from '@/data/clinic';
import { navItems } from '@/data/navigation';
import { socialLinks } from '@/data/social';

const socialIconMap = {
  Instagram,
  Facebook,
  Youtube,
  MessageCircle,
} as const;

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white shadow-float">
                <Stethoscope className="h-5 w-5" />
              </span>
              <span className="text-[15px] font-semibold leading-tight tracking-tight text-slate-900">
                {clinic.shortName}
                <span className="block text-xs font-medium text-slate-500">
                  {clinic.tagline}
                </span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {clinic.description}
            </p>
            <div className="mt-5 flex gap-2">
              {socialLinks.map((s) => {
                const Icon = socialIconMap[s.icon as keyof typeof socialIconMap];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-500 shadow-soft ring-1 ring-slate-100 transition-all hover:bg-brand-600 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-slate-600 transition-colors hover:text-brand-700"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit us */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Visit Us</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                <span>
                  {clinic.contact.addressLine1}
                  <br />
                  {clinic.contact.addressLine2}
                  <br />
                  {clinic.contact.city}, {clinic.contact.region} {clinic.contact.postalCode}
                </span>
              </li>
              <li className="flex gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                <a href={clinic.contact.phoneHref} className="hover:text-brand-700">
                  {clinic.contact.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Business Hours</h3>
            <ul className="mt-4 space-y-2.5">
              {clinic.hours.map((h) => (
                <li key={h.day} className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-slate-600">
                    <Clock className="h-3.5 w-3.5 text-brand-600" />
                    {h.day}
                  </span>
                  <span
                    className={
                      h.isEmergency ? 'text-xs font-medium text-accent-600' : 'text-slate-500'
                    }
                  >
                    {h.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {clinic.name}. All rights reserved.
          </p>
          <p>Designed with care for healthier skin.</p>
        </div>
      </div>
    </footer>
  );
}
