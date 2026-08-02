import { motion } from 'framer-motion';

export function TermsOfService() {
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
            Terms of Service
          </h1>
          <p className="text-sm font-medium text-stone-500">
            Last Updated: <span className="text-stone-800 font-semibold">31 July 2026</span>
          </p>
        </motion.div>

        {/* Terms Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-12 text-stone-700 leading-relaxed text-base sm:text-lg font-normal"
        >
          {/* Intro */}
          <div className="bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-stone-300/80 shadow-sm">
            <p className="mb-2 text-stone-900 font-semibold">
              These Terms of Service govern your use of Uthion’s website and services.
            </p>
            <p className="text-stone-600 text-sm sm:text-base">
              By accessing or using our website, you agree to these Terms.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-4 pt-4 border-t border-stone-200/80">
            <h2 className="font-display text-2xl sm:text-3xl text-stone-950 font-bold tracking-tight">
              1. About Uthion
            </h2>
            <p>
              <strong>Uthion by Uspace</strong> (“Uthion”) is a consulting and advisory firm providing services across areas including:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white/50 p-4 rounded-xl border border-stone-300/60 text-center font-bold text-stone-800 text-sm">
                Business Strategy
              </div>
              <div className="bg-white/50 p-4 rounded-xl border border-stone-300/60 text-center font-bold text-stone-800 text-sm">
                Organizational Transformation
              </div>
              <div className="bg-white/50 p-4 rounded-xl border border-stone-300/60 text-center font-bold text-stone-800 text-sm">
                Capital Structuring
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 pt-4 border-t border-stone-200/80">
            <h2 className="font-display text-2xl sm:text-3xl text-stone-950 font-bold tracking-tight">
              2. Scope of Services
            </h2>
            <p>
              We provide consulting and advisory services based on individual client requirements.
            </p>
            <p>
              The scope, deliverables, fees, timelines, and other terms of each engagement will be agreed separately with the relevant client.
            </p>
            <p>
              We reserve the right to modify or discontinue any part of our website at any time.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 pt-4 border-t border-stone-200/80">
            <h2 className="font-display text-2xl sm:text-3xl text-stone-950 font-bold tracking-tight">
              3. Website Information
            </h2>
            <p>
              The information provided on this website is for general informational purposes and is not intended to constitute professional, financial, legal, or other regulated advice.
            </p>
            <p>
              While we make reasonable efforts to keep the information on our website accurate and up to date, we do not guarantee its completeness or accuracy.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4 pt-4 border-t border-stone-200/80">
            <h2 className="font-display text-2xl sm:text-3xl text-stone-950 font-bold tracking-tight">
              4. Client Responsibilities
            </h2>
            <p>When engaging with Uthion or submitting information through our website, you agree to:</p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-stone-700">
              <li>Provide accurate and complete information</li>
              <li>Use our website lawfully</li>
              <li>Not misuse or interfere with our website or systems</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4 pt-4 border-t border-stone-200/80">
            <h2 className="font-display text-2xl sm:text-3xl text-stone-950 font-bold tracking-tight">
              5. Fees and Engagement Terms
            </h2>
            <p>
              Fees, payment terms, deliverables, and other commercial terms will be agreed between Uthion and the client before or as part of an engagement.
            </p>
            <p>
              Any consulting or advisory engagement will be governed by the applicable agreement between Uthion and the client.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4 pt-4 border-t border-stone-200/80">
            <h2 className="font-display text-2xl sm:text-3xl text-stone-950 font-bold tracking-tight">
              6. Intellectual Property
            </h2>
            <p>
              All website content, branding, logos, documents, graphics, and other materials are owned by Uthion or licensed to us.
            </p>
            <p>
              You may not reproduce, distribute, modify, or use our content for commercial purposes without prior written permission.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4 pt-4 border-t border-stone-200/80">
            <h2 className="font-display text-2xl sm:text-3xl text-stone-950 font-bold tracking-tight">
              7. Confidentiality
            </h2>
            <p>
              We treat information shared with us through inquiries and client engagements with appropriate confidentiality.
            </p>
            <p>
              Any specific confidentiality obligations relating to a client engagement will be governed by the applicable agreement between Uthion and the client.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4 pt-4 border-t border-stone-200/80">
            <h2 className="font-display text-2xl sm:text-3xl text-stone-950 font-bold tracking-tight">
              8. Limitation of Liability
            </h2>
            <p>
              To the extent permitted by applicable law, Uthion will not be liable for losses arising from reliance on general information provided on this website, interruptions to website availability, or third-party services or websites linked to our website.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4 pt-4 border-t border-stone-200/80">
            <h2 className="font-display text-2xl sm:text-3xl text-stone-950 font-bold tracking-tight">
              9. Third-Party Services and Links
            </h2>
            <p>
              We may rely on third-party providers to support the operation of our website and communications.
            </p>
            <p>
              Our website may also contain links to third-party websites. We are not responsible for the availability, content, or policies of third-party services or websites.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4 pt-4 border-t border-stone-200/80">
            <h2 className="font-display text-2xl sm:text-3xl text-stone-950 font-bold tracking-tight">
              10. Data Protection
            </h2>
            <p>
              Your use of our website is also subject to our Privacy Policy, which explains how we collect, use, and protect personal information.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4 pt-4 border-t border-stone-200/80">
            <h2 className="font-display text-2xl sm:text-3xl text-stone-950 font-bold tracking-tight">
              11. Governing Law
            </h2>
            <p>
              These Terms are governed by the applicable laws of Nigeria.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-4 pt-4 border-t border-stone-200/80">
            <h2 className="font-display text-2xl sm:text-3xl text-stone-950 font-bold tracking-tight">
              12. Changes to These Terms
            </h2>
            <p>
              We may update these Terms from time to time. The latest version will be made available on our website with a revised “Last Updated” date.
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-4 pt-4 border-t border-stone-200/80">
            <h2 className="font-display text-2xl sm:text-3xl text-stone-950 font-bold tracking-tight">
              13. Contact
            </h2>
            <p>
              If you have any questions about these Terms of Service, please contact Uthion through the contact information provided on our website.
            </p>
          </section>

          {/* Back to top button */}
          <div className="pt-8 flex justify-center">
            <button
              onClick={scrollToTop}
              className="px-6 py-3 text-xs uppercase tracking-widest font-bold rounded-full border border-stone-300 hover:border-stone-900 transition-colors"
            >
              Back to Top ↑
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}