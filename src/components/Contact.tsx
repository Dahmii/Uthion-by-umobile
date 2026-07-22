import React from 'react';
import { useConsultation } from '../context/ConsultationContext';
export function Contact() {
  const { open } = useConsultation();
  return (
    <section
      id="contact"
      className="py-32 bg-paper border-t border-stone relative overflow-hidden">
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-stone/30 -skew-x-12 translate-x-1/2"></div>

      <div className="max-w-container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center mb-6">
              {/* <span className="w-8 h-[1px] bg-accent mr-4"></span> */}
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-ink.muted">
                Engage Uthion
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-tight mb-6">
              Ready to structure your next strategic move?
            </h2>
            <p className="text-lg text-ink.soft leading-relaxed mb-10 max-w-md">
              Schedule a confidential consultation with our partners to discuss
              your capital requirements, operational challenges, and growth
              objectives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={open}
                className="bg-ink text-white px-8 py-4 text-sm font-medium rounded-full hover:bg-accent transition-colors inline-flex items-center justify-center">
                
                Request a Consultation
                <svg
                  className="ml-2"
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
            </div>
          </div>

          <div className="bg-white p-10 md:p-16 border border-stone shadow-sm relative">
            {/* Decorative frame */}
            <div className="absolute -top-2 -left-2 w-8 h-[2px] bg-accent"></div>
            <div className="absolute -top-2 -left-2 w-[2px] h-8 bg-accent"></div>

            <h3 className="font-display text-2xl text-ink mb-8">
              Direct Contact
            </h3>

            <div className="space-y-8">
              <div>
                <span className="block text-xs font-semibold tracking-widest uppercase text-ink.muted mb-2">
                  Email
                </span>
                <a
                  href="mailto:info@uthion.com"
                  className="text-lg text-ink hover:text-accent transition-colors font-medium">
                  
                  info@uthion.com
                </a>
              </div>
              <div>
                <span className="block text-xs font-semibold tracking-widest uppercase text-ink.muted mb-2">
                  Global Headquarters
                </span>
                <p className="text-ink.soft leading-relaxed">
                  Lagos
                  <br />
                  lagos, Nigeria
                </p>
                <a
                  href="tel:+12125550198"
                  className="block mt-2 text-ink hover:text-accent transition-colors">
                  
                  +1 (212) 555-0198
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}