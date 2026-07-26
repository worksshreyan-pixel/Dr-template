import { Seo } from '@/components/seo/Seo';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { ContactForm } from '@/components/sections/ContactForm';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { clinic } from '@/data/clinic';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';

const contactCards = [
  {
    icon: Phone,
    label: 'Call us',
    value: clinic.contact.phone,
    href: clinic.contact.phoneHref,
  },
  {
    icon: Mail,
    label: 'Email us',
    value: clinic.contact.email,
    href: clinic.contact.emailHref,
  },
];

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact"
        description={`Book an appointment or get in touch with ${clinic.name}. Call, email or send us a message — we respond within a few hours.`}
        path="/contact"
      />
      <PageHero
        eyebrow="Contact"
        title="Book your appointment"
        description="Send us a message and our front desk will confirm your slot within a few hours."
        badge={<Badge variant="brand">We're here to help</Badge>}
      />
      <Section className="bg-slate-50">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Left: info + map */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.div variants={staggerItem} className="grid gap-4 sm:grid-cols-2">
                {contactCards.map((c) => (
                  <motion.a
                    key={c.label}
                    href={c.href}
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                    className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-soft transition-colors hover:shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <p className="mt-3 text-xs font-medium text-slate-500">
                      {c.label}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-slate-900">
                      {c.value}
                    </p>
                  </motion.a>
                ))}
                <motion.div
                  variants={staggerItem}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  className="rounded-2xl border border-[#25D366]/20 bg-[#25D366]/5 p-5 shadow-soft transition-colors hover:shadow-card"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#1ebe5d]">
                    <WhatsAppIconSmall />
                  </span>
                  <p className="mt-3 text-xs font-medium text-slate-500">
                    WhatsApp
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-slate-900">
                    Chat with us
                  </p>
                </motion.div>
              </motion.div>

              {/* WhatsApp CTA band */}
              <motion.div
                variants={staggerItem}
                className="mt-4 flex flex-col items-start gap-3 rounded-2xl border border-[#25D366]/20 bg-white p-5 shadow-soft sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366] text-white">
                    <WhatsAppIconSmall />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Prefer to chat instantly?
                    </p>
                    <p className="text-xs text-slate-500">
                      Message us on WhatsApp — we usually reply within minutes.
                    </p>
                  </div>
                </div>
                <WhatsAppButton variant="solid" size="md" showLabel label="Open WhatsApp" />
              </motion.div>

              <motion.div
                variants={staggerItem}
                className="mt-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-soft"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  Visit the clinic
                </h3>
                <div className="mt-4 flex items-start gap-3 text-sm text-slate-600">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  <p>
                    {clinic.contact.addressLine1}
                    <br />
                    {clinic.contact.addressLine2}
                    <br />
                    {clinic.contact.city}, {clinic.contact.region}{' '}
                    {clinic.contact.postalCode}
                  </p>
                </div>
                <a
                  href={clinic.contact.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800 focus:outline-none focus-visible:underline"
                >
                  Open in Google Maps
                </a>
                <div className="mt-5 overflow-hidden rounded-xl border border-slate-100">
                  <iframe
                    title="Clinic location"
                    src={clinic.contact.mapsEmbedUrl}
                    className="h-56 w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>

              <motion.div
                variants={staggerItem}
                className="mt-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-soft"
              >
                <h3 className="flex items-center gap-2 text-base font-semibold text-slate-900">
                  <Clock className="h-4 w-4 text-brand-600" />
                  Business hours
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {clinic.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-slate-600">{h.day}</span>
                      <span
                        className={
                          h.isEmergency
                            ? 'text-xs font-medium text-accent-600'
                            : 'font-medium text-slate-900'
                        }
                      >
                        {h.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function WhatsAppIconSmall() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
