import { motion } from 'framer-motion';

export function LegalNotice() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-stone-900 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border-b border-stone-300/80 pb-10 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/80 border border-stone-300 text-xs font-semibold uppercase tracking-wider text-stone-700 mb-6">
            Legal & Compliance
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-stone-950 font-thin tracking-tight mb-4">
            Legal Notice
          </h1>
          <p className="text-sm font-medium text-stone-500">
            Last Updated: <span className="text-stone-800 font-semibold">31 July 2026</span>
          </p>
        </motion.div>

        {/* Legal Notice Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-12 text-stone-700 leading-relaxed text-base sm:text-lg font-normal"
        >
          {/* Intro */}
          <div className="bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-stone-300/80 shadow-sm">
            <p className="text-stone-900 font-medium">
              This website is operated by <strong>Uthion by Uspace</strong> (“Uthion”).
            </p>
          </div>

          {/* Business Information Card Grid */}
          <section className="space-y-4 pt-4 border-t border-stone-200/80">
            <h2 className="font-display text-2xl sm:text-3xl text-stone-950 font-bold tracking-tight mb-6">
              Business Information
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/50 p-5 rounded-xl border border-stone-300/60">
                <span className="text-xs uppercase tracking-wider font-bold text-stone-400 block mb-1">
                  Entity Name
                </span>
                <span className="font-bold text-stone-900 text-base">
                  Uthion by Uspace
                </span>
              </div>

              <div className="bg-white/50 p-5 rounded-xl border border-stone-300/60">
                <span className="text-xs uppercase tracking-wider font-bold text-stone-400 block mb-1">
                  Business Type
                </span>
                <span className="font-bold text-stone-900 text-base">
                  Consulting and Advisory
                </span>
              </div>

              <div className="bg-white/50 p-5 rounded-xl border border-stone-300/60">
                <span className="text-xs uppercase tracking-wider font-bold text-stone-400 block mb-1">
                  Location
                </span>
                <span className="font-bold text-stone-900 text-base">
                  Lagos, Nigeria
                </span>
              </div>

              <div className="bg-white/50 p-5 rounded-xl border border-stone-300/60">
                <span className="text-xs uppercase tracking-wider font-bold text-stone-400 block mb-1">
                  Primary Email
                </span>
                <a 
                  href="mailto:contact@uthion.com" 
                  className="font-bold text-[#3300FF] hover:underline text-base"
                >
                  info@uthion.com
                </a>
              </div>
            </div>
          </section>

          {/* General Information */}
          <section className="space-y-4 pt-4 border-t border-stone-200/80">
            <h2 className="font-display text-2xl sm:text-3xl text-stone-950 font-bold tracking-tight">
              General Information
            </h2>
            <p>
              The information provided on this website is for general guidance and is intended to provide an overview of Uthion, our expertise, and the services we offer.
            </p>
            <p>
              The information does not constitute professional, financial, legal, or other advice tailored to specific circumstances, nor does use of this website create a client or professional services relationship with Uthion.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="space-y-4 pt-4 border-t border-stone-200/80">
            <h2 className="font-display text-2xl sm:text-3xl text-stone-950 font-bold tracking-tight">
              Website Ownership & Intellectual Property
            </h2>
            <p>
              The content provided on this website, including text, graphics, branding, logos, and other materials, is the intellectual property of Uthion or its respective licensors and is protected by applicable intellectual property laws.
            </p>
            <p>
              Uthion’s name, logos, and marks may not be reproduced, copied, modified, published, distributed, or used commercially without prior written permission, except where permitted by applicable law.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-4 pt-4 border-t border-stone-200/80">
            <h2 className="font-display text-2xl sm:text-3xl text-stone-950 font-bold tracking-tight">
              Contact
            </h2>
            <p>
              For questions regarding this website or this Legal Notice, please contact Uthion through the contact information provided on our website.
            </p>
          </section>

          {/* Back to top button */}
          <div className="pt-8 flex justify-center">
            <button
              onClick={scrollToTop}
              className="px-6 py-3 text-xs uppercase tracking-widest font-bold rounded-full border border-stone-300 hover:border-stone-900 transition-colors cursor-pointer"
            >
              Back to Top ↑
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}