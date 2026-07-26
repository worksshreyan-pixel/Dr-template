import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { treatments } from '@/data/treatments';
import { clinic } from '@/data/clinic';
import { EASE } from '@/lib/animations';

interface FormState {
  name: string;
  email: string;
  phone: string;
  treatment: string;
  message: string;
}

const initial: FormState = {
  name: '',
  email: '',
  phone: '',
  treatment: '',
  message: '',
};

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      // Simulated submission — wire to Supabase or email service in production.
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus('success');
      setForm(initial);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="flex flex-col items-center justify-center rounded-2xl border border-success-100 bg-success-50 p-10 text-center"
      >
        <motion.span
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.1, type: 'spring', stiffness: 200, damping: 14 }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-success-500 text-white"
        >
          <CheckCircle2 className="h-7 w-7" />
        </motion.span>
        <h3 className="mt-4 text-lg font-semibold text-slate-900">
          Thank you, your request is in!
        </h3>
        <p className="mt-2 max-w-sm text-sm text-slate-600">
          Our front desk will reach out within a few hours to confirm your
          appointment. For anything urgent, please call{' '}
          <a href={clinic.contact.phoneHref} className="font-semibold text-brand-700">
            {clinic.contact.phone}
          </a>
          .
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-5 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-soft transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
        >
          Send another request
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card sm:p-8"
    >
      <AnimatePresence>
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="mb-5 flex items-center gap-2 rounded-xl bg-error-50 px-4 py-3 text-sm text-error-600"
          >
            <AlertCircle className="h-4 w-4 shrink-0" />
            Something went wrong. Please try again or call us directly.
          </motion.div>
        )}
      </AnimatePresence>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required value={form.name} onChange={handleChange} placeholder="e.g. Priya Sharma" />
        <Field label="Phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="+91 ..." />
        <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Treatment of interest
          </label>
          <select
            name="treatment"
            value={form.treatment}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
          >
            <option value="">Select a treatment</option>
            {treatments.map((t) => (
              <option key={t.slug} value={t.slug}>
                {t.title}
              </option>
            ))}
            <option value="general">General consultation</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us briefly about your concern or preferred time slot..."
          className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
        />
      </div>
      <motion.button
        type="submit"
        disabled={status === 'submitting'}
        whileHover={{ scale: status === 'submitting' ? 1 : 1.03 }}
        whileTap={{ scale: status === 'submitting' ? 1 : 0.97 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-float transition-colors hover:bg-brand-700 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-70 sm:w-auto"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Request
          </>
        )}
      </motion.button>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-slate-700">
        {label} {required && <span className="text-error-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
      />
    </div>
  );
}
