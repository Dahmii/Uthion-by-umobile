import React, { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { XIcon, CheckIcon } from 'lucide-react';
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
'Other'];

const COMPANY_SIZES = [
'1–50 employees',
'51–200 employees',
'201–1,000 employees',
'1,001–5,000 employees',
'5,000+ employees'];

const SERVICES = [
'Capital Structuring',
'Corporate Strategy',
'Organizational Transformation',
'M&A Advisory'];

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
  challenge: ''
};
export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
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
      setSubmitted(false);
    }, 300);
    return () => clearTimeout(t);
  }, [isOpen]);
  const update = (key: keyof FormState, value: string) =>
  setForm((f) => ({
    ...f,
    [key]: value
  }));
  const toggleService = (service: string) =>
  setForm((f) => ({
    ...f,
    services: f.services.includes(service) ?
    f.services.filter((s) => s !== service) :
    [...f.services, service]
  }));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production this would POST to an advisory intake endpoint / CRM.
    setSubmitted(true);
  };
  const fieldClass =
  'w-full bg-transparent border-b border-stone py-3 text-ink placeholder-ink.muted/60 focus:outline-none focus:border-accent transition-colors';
  const labelClass =
  'block text-xs font-semibold tracking-widest uppercase text-ink.muted mb-1';
  return (
    <AnimatePresence>
      {isOpen &&
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        exit={{
          opacity: 0
        }}
        transition={{
          duration: 0.25
        }}
        className="fixed inset-0 z-[100] flex items-start md:items-center justify-center p-0 md:p-6"
        aria-hidden={!isOpen}>
        
          {/* Backdrop */}
          <div
          className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
          onClick={onClose} />
        

          {/* Panel */}
          <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="consultation-title"
          initial={{
            opacity: 0,
            y: 24,
            scale: 0.98
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }}
          exit={{
            opacity: 0,
            y: 24,
            scale: 0.98
          }}
          transition={{
            duration: 0.3,
            ease: 'easeOut'
          }}
          className="relative bg-paper w-full max-w-2xl max-h-screen md:max-h-[90vh] overflow-y-auto shadow-2xl">
          
            {/* Accent corner detail */}
            <div className="absolute top-0 left-0 w-12 h-[2px] bg-accent" />
            <div className="absolute top-0 left-0 w-[2px] h-12 bg-accent" />

            <button
            onClick={onClose}
            aria-label="Close consultation form"
            className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full flex items-center justify-center text-ink.muted hover:text-ink hover:bg-stone/40 transition-colors">
            
              <XIcon size={20} />
            </button>

            {!submitted ?
          <div className="p-8 md:p-12">
                <div className="flex items-center mb-4">
                  <span className="w-8 h-[1px] bg-accent mr-4" />
                  <span className="text-xs font-medium tracking-[0.2em] uppercase text-ink.muted">
                    Request a Consultation
                  </span>
                </div>
                <h2
              id="consultation-title"
              className="font-display text-3xl md:text-4xl text-ink leading-tight mb-3">
              
                  Tell us about your business objectives.
                </h2>
                <p className="text-ink.soft leading-relaxed mb-10 max-w-lg">
                  Our advisory team will review your request and recommend next
                  steps. Every inquiry is treated with the utmost
                  confidentiality.
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
                    value={form.fullName}
                    onChange={(e) => update('fullName', e.target.value)}
                    className={fieldClass}
                    placeholder="Jane Doe" />
                  
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="company">
                        Company Name
                      </label>
                      <input
                    id="company"
                    required
                    value={form.company}
                    onChange={(e) => update('company', e.target.value)}
                    className={fieldClass}
                    placeholder="Acme Holdings" />
                  
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="email">
                        Work Email
                      </label>
                      <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    className={fieldClass}
                    placeholder="jane@company.com" />
                  
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    className={fieldClass}
                    placeholder="+1 (212) 555-0198" />
                  
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="industry">
                        Industry
                      </label>
                      <select
                    id="industry"
                    required
                    value={form.industry}
                    onChange={(e) => update('industry', e.target.value)}
                    className={`${fieldClass} cursor-pointer`}>
                    
                        <option value="" disabled>
                          Select industry
                        </option>
                        {INDUSTRIES.map((i) =>
                    <option key={i} value={i}>
                            {i}
                          </option>
                    )}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="companySize">
                        Company Size
                      </label>
                      <select
                    id="companySize"
                    required
                    value={form.companySize}
                    onChange={(e) => update('companySize', e.target.value)}
                    className={`${fieldClass} cursor-pointer`}>
                    
                        <option value="" disabled>
                          Select size
                        </option>
                        {COMPANY_SIZES.map((s) =>
                    <option key={s} value={s}>
                            {s}
                          </option>
                    )}
                      </select>
                    </div>
                  </div>

                  <div>
                    <span className={labelClass}>Services of Interest</span>
                    <div className="flex flex-wrap gap-3 mt-2">
                      {SERVICES.map((service) => {
                    const active = form.services.includes(service);
                    return (
                      <button
                        type="button"
                        key={service}
                        onClick={() => toggleService(service)}
                        className={`text-sm px-4 py-2 rounded-full border transition-colors ${active ? 'border-accent bg-accent text-white' : 'border-stone text-ink.soft hover:border-ink'}`}>
                        
                            {service}
                          </button>);

                  })}
                    </div>
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="challenge">
                      Brief Description of Business Challenge
                    </label>
                    <textarea
                  id="challenge"
                  required
                  rows={4}
                  value={form.challenge}
                  onChange={(e) => update('challenge', e.target.value)}
                  className={`${fieldClass} resize-none`}
                  placeholder="Share the strategic objectives or challenges you'd like to discuss." />
                
                  </div>

                  <div className="pt-2">
                    <button
                  type="submit"
                  className="group w-full md:w-auto inline-flex items-center justify-center bg-ink text-white px-10 py-4 text-sm font-medium rounded-full hover:bg-accent transition-colors">
                  
                      Submit Request
                      <svg
                    className="ml-2 transition-transform group-hover:translate-x-1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5">
                    
                        <path
                      d="M3 8H13M13 8L9 4M13 8L9 12"
                      strokeLinecap="round"
                      strokeLinejoin="round" />
                    
                      </svg>
                    </button>
                    <p className="text-xs text-ink.muted mt-4">
                      By submitting, you agree to be contacted by Uthion's
                      advisory team regarding your inquiry.
                    </p>
                  </div>
                </form>
              </div> :

          <motion.div
            initial={{
              opacity: 0,
              y: 12
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.4
            }}
            className="p-8 md:p-16 text-center flex flex-col items-center justify-center min-h-[420px]">
            
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
              className="border border-stone text-ink px-8 py-3 text-sm font-medium rounded-full hover:border-ink transition-colors">
              
                  Close
                </button>
              </motion.div>
          }
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

}