import React, { useEffect, useState, useRef } from 'react';
import { COUNTRY_CODES } from '../data/countryCodes';
import { AnimatePresence, motion } from 'framer-motion';
import { XIcon, CheckIcon, Loader2 } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const INDUSTRIES = [
  'Real Estate',
  'Aviation',
  'Financial Services',
  'Technology',
  'Manufacturing',
  'Energy',
  'Healthcare',
  'Consumer Goods',
  'Other',
];

const COMPANY_SIZES = [
  '1–50 employees',
  '51–200 employees',
  '201–1,000 employees',
  '1,001–5,000 employees',
  '5,001+ employees',
];

interface FormState {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  companySize: string;
  services: string[];
  challenge: string;
}

const INITIAL_FORM: FormState = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  industry: '',
  companySize: '',
  services: [],
  challenge: '',
};

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [countryCode, setCountryCode] = useState('+234'); // Defaults to Nigeria
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  // Lock body scroll + ESC to close + focus first field
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    const t = setTimeout(() => firstFieldRef.current?.focus(), 100);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
      clearTimeout(t);
    };
  }, [isOpen, onClose]);

  // Reset form shortly after close so the thank-you state isn't visible on reopen
  useEffect(() => {
    if (isOpen) return;
    const t = setTimeout(() => {
      setForm(INITIAL_FORM);
      setCountryCode('+234');
      setSubmitted(false);
      setError(null);
    }, 300);
    return () => clearTimeout(t);
  }, [isOpen]);

  const update = (key: keyof FormState, value: string) =>
    setForm((f) => ({
      ...f,
      [key]: value,
    }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Combine country extension code with the local phone number entered
    const fullPhoneNumber = `${countryCode}${form.phone.trim()}`;

    try {
      // POST the payload formatted to match the backend expectation
      const response = await fetch('/api/send-consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: form.fullName,
          company: form.company,
          workEmail: form.email,
          phone: fullPhoneNumber,
          industry: form.industry,
          timeline: form.companySize,
          projectOverview: form.challenge,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Submission Error:', err);
      setError(err instanceof Error ? err.message : 'Failed to submit inquiry.');
    } finally {
      setIsLoading(false);
    }
  };

  const fieldClass =
    'w-full bg-transparent border-b border-stone py-3 text-ink placeholder-ink.muted/60 focus:outline-none focus:border-accent transition-colors disabled:opacity-60';
  const labelClass =
    'block text-xs font-semibold tracking-widest uppercase text-ink.muted mb-1';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-start md:items-center justify-center p-0 md:p-6"
          aria-hidden={!isOpen}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm cursor-pointer"
            onClick={isLoading ? undefined : onClose}
          />

          {/* Panel */}
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="consultation-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative bg-paper w-full max-w-2xl max-h-screen md:max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            {/* Accent corner detail */}
            <div className="absolute top-0 left-0 w-12 h-[2px] bg-accent" />
            <div className="absolute top-0 left-0 w-[2px] h-12 bg-accent" />

            <button
              onClick={onClose}
              disabled={isLoading}
              aria-label="Close consultation form"
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full flex items-center justify-center text-ink.muted hover:text-ink hover:bg-stone/40 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <XIcon size={20} />
            </button>

            {!submitted ? (
              <div className="p-8 md:p-12">
                <h2
                  id="consultation-title"
                  className="font-display text-3xl md:text-4xl text-ink leading-tight mb-3"
                >
                  Tell us about your business objectives.
                </h2>
                <p className="text-ink.soft leading-relaxed mb-10 max-w-lg">
                  Our advisory team will review your request and recommend next
                  steps. We treat every inquiry with complete confidentiality.
                </p>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className={labelClass} htmlFor="fullName">
                        Full Name
                      </label>
                      <input
                        ref={firstFieldRef}
                        id="fullName"
                        required
                        disabled={isLoading}
                        value={form.fullName}
                        onChange={(e) => update('fullName', e.target.value)}
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="company">
                        Company Name
                      </label>
                      <input
                        id="company"
                        required
                        disabled={isLoading}
                        value={form.company}
                        onChange={(e) => update('company', e.target.value)}
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="email">
                        Work Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        disabled={isLoading}
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="phone">
                        Phone Number
                      </label>
                      <div className="flex rounded-md shadow-sm">
                        <select
                          value={countryCode}
                          disabled={isLoading}
                          onChange={(e) => setCountryCode(e.target.value)}
                          className="inline-flex items-center rounded-l-md border border-r-0 border-stone bg-stone/20 px-2.5 text-sm text-ink focus:border-accent focus:outline-none disabled:opacity-50 max-w-[120px]"
                        >
                          {COUNTRY_CODES.map((c) => (
                            <option key={`${c.code}-${c.dialCode}`} value={c.dialCode}>
                              {c.name} {c.dialCode} 
                            </option>
                          ))}
                        </select>
                        <input
                          id="phone"
                          type="tel"
                          required
                          disabled={isLoading}
                          value={form.phone}
                          onChange={(e) => update('phone', e.target.value)}
                          className={`${fieldClass} rounded-l-none border-l-0 border-b`}
                          placeholder="801 234 5678"
                        />
                      </div>
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="industry">
                        Industry
                      </label>
                      <select
                        id="industry"
                        required
                        disabled={isLoading}
                        value={form.industry}
                        onChange={(e) => update('industry', e.target.value)}
                        className={`${fieldClass} cursor-pointer disabled:cursor-not-allowed`}
                      >
                        <option value="" disabled>
                          Select industry
                        </option>
                        {INDUSTRIES.map((i) => (
                          <option key={i} value={i}>
                            {i}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="companySize">
                        Company Size
                      </label>
                      <select
                        id="companySize"
                        required
                        disabled={isLoading}
                        value={form.companySize}
                        onChange={(e) => update('companySize', e.target.value)}
                        className={`${fieldClass} cursor-pointer disabled:cursor-not-allowed`}
                      >
                        <option value="" disabled>
                          Select size
                        </option>
                        {COMPANY_SIZES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="challenge">
                      Briefly tell us about your business needs
                    </label>
                    <textarea
                      id="challenge"
                      required
                      disabled={isLoading}
                      rows={4}
                      value={form.challenge}
                      onChange={(e) => update('challenge', e.target.value)}
                      className={`${fieldClass} resize-none disabled:placeholder:opacity-50`}
                      placeholder="Tell us about your business challenge, objective, or what you'd like to discuss."
                    />
                  </div>

                  <div className="pt-2">
                    {error && (
                      <div className="bg-red-50 text-red-700 text-sm p-4 rounded-xl mb-6 border border-red-200">
                        Error: {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="group w-full md:w-auto inline-flex items-center justify-center bg-ink text-white px-10 py-4 text-sm font-medium rounded-full hover:bg-accent transition-colors disabled:bg-stone disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                          Sending Inquiry...
                        </>
                      ) : (
                        <>
                          Submit Request
                          <svg
                            className="ml-2 transition-transform group-hover:translate-x-1"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <path
                              d="M3 8H13M13 8L9 4M13 8L9 12"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </>
                      )}
                    </button>
                    <p className="text-xs text-ink.muted mt-4">
                      By submitting, you agree to be contacted by Uthion's
                      advisory team regarding your inquiry.
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="p-8 md:p-16 text-center flex flex-col items-center justify-center min-h-[420px]"
              >
                <div className="w-16 h-16 rounded-full border border-accent flex items-center justify-center mb-8 text-accent">
                  <CheckIcon size={28} />
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight mb-6 max-w-md">
                  Thank you for your inquiry.
                </h2>
                <p className="text-ink.soft leading-relaxed max-w-md mb-10">
                  Our advisory team will review your request and contact you
                  within 1–2 business days to discuss potential next steps.
                </p>
                <button
                  onClick={onClose}
                  className="border border-stone text-ink px-8 py-3 text-sm font-medium rounded-full hover:border-ink transition-colors cursor-pointer"
                >
                  Close
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}