import { motion } from 'framer-motion';

export function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-sm font-medium text-stone-500">
            Last Updated: <span className="text-stone-800 font-semibold">31 July 2026</span>
          </p>
        </motion.div>

        {/* Policy Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-12 text-stone-700 leading-relaxed text-base sm:text-lg font-normal"
        >
          {/* Intro */}
          <div className="bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-stone-300/80 shadow-sm">
            <p className="mb-4">
              <strong>Uthion by Uspace</strong> (“Uthion,” “we,” “us,” or “our”) is a consulting and advisory firm based in Lagos, Nigeria.
            </p>
            <p className="text-stone-600 text-sm sm:text-base">
              This Privacy Policy explains how we collect, use, store, and share personal information when you interact with our website or contact us about our services.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-4 pt-4 border-t border-stone-200/80">
            <h2 className="font-display text-2xl sm:text-3xl text-stone-950 font-bold tracking-tight">
              1. Personal Information We Collect
            </h2>
            <p>
              We may collect personal information you provide when you contact us, submit a consultation request, or otherwise interact with our website, including:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="bg-white/50 p-5 rounded-xl border border-stone-300/60">
                <h3 className="font-bold text-stone-900 text-sm uppercase tracking-wider mb-2 text-[#3300FF]">
                  Identity & Contact
                </h3>
                <ul className="text-sm space-y-1 text-stone-600 list-disc list-inside">
                  <li>Name</li>
                  <li>Company name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                </ul>
              </div>

              <div className="bg-white/50 p-5 rounded-xl border border-stone-300/60">
                <h3 className="font-bold text-stone-900 text-sm uppercase tracking-wider mb-2 text-[#3300FF]">
                  Business & Service
                </h3>
                <ul className="text-sm space-y-1 text-stone-600 list-disc list-inside">
                  <li>Industry</li>
                  <li>Company size</li>
                  <li>Business needs & objectives</li>
                  <li>Form communications</li>
                </ul>
              </div>

              <div className="bg-white/50 p-5 rounded-xl border border-stone-300/60">
                <h3 className="font-bold text-stone-900 text-sm uppercase tracking-wider mb-2 text-[#3300FF]">
                  Technical Info
                </h3>
                <ul className="text-sm space-y-1 text-stone-600 list-disc list-inside">
                  <li>IP address</li>
                  <li>Browser details</li>
                  <li>Website usage metrics</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 pt-4 border-t border-stone-200/80">
            <h2 className="font-display text-2xl sm:text-3xl text-stone-950 font-bold tracking-tight">
              2. How We Collect Your Information
            </h2>
            <p>We may collect information:</p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-stone-700">
              <li>Directly from you when you submit a consultation request or contact us</li>
              <li>When you communicate with us by email, phone, or other channels</li>
              <li>Automatically through your use of our website, where applicable</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 pt-4 border-t border-stone-200/80">
            <h2 className="font-display text-2xl sm:text-3xl text-stone-950 font-bold tracking-tight">
              3. How We Use Your Information
            </h2>
            <p>We may use your information to:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-2 text-stone-700">
              <li className="flex items-start gap-2">
                <span className="text-[#3300FF] font-bold">•</span> Respond to your inquiries and consultation requests
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#3300FF] font-bold">•</span> Understand your business needs and determine how we may assist you
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#3300FF] font-bold">•</span> Communicate with you about our services
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#3300FF] font-bold">•</span> Manage prospective and existing client relationships
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#3300FF] font-bold">•</span> Improve our website and services
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#3300FF] font-bold">•</span> Maintain the security and functionality of our website
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#3300FF] font-bold">•</span> Comply with applicable legal and regulatory requirements
              </li>
            </ul>
            <p className="text-stone-900 font-medium pt-2 italic">
              We do not sell or rent your personal information to third parties for marketing purposes.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4 pt-4 border-t border-stone-200/80">
            <h2 className="font-display text-2xl sm:text-3xl text-stone-950 font-bold tracking-tight">
              4. Sharing Your Information
            </h2>
            <p>
              We may share personal information with trusted service providers where reasonably necessary to operate our website, manage communications, or provide our services.
            </p>
            <p>
              We may also disclose information where required or permitted by applicable law. We only seek to share information that is reasonably necessary for these purposes.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4 pt-4 border-t border-stone-200/80">
            <h2 className="font-display text-2xl sm:text-3xl text-stone-950 font-bold tracking-tight">
              5. Data Retention
            </h2>
            <p>
              We retain personal information only for as long as reasonably necessary to fulfil the purposes for which it was collected, maintain appropriate business records, resolve disputes, or comply with applicable legal and regulatory requirements.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4 pt-4 border-t border-stone-200/80">
            <h2 className="font-display text-2xl sm:text-3xl text-stone-950 font-bold tracking-tight">
              6. Your Rights
            </h2>
            <p>Subject to applicable law, you may have the right to:</p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-stone-700">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to or request restrictions on certain uses of your information</li>
            </ul>
            <p className="pt-2">
              To make a privacy-related request, please contact us using the contact information provided on our website.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4 pt-4 border-t border-stone-200/80">
            <h2 className="font-display text-2xl sm:text-3xl text-stone-950 font-bold tracking-tight">
              7. Cookies
            </h2>
            <p>
              Our website may use cookies or similar technologies to support website functionality, security, and performance.
            </p>
            <p>
              You can manage or disable cookies through your browser settings. Some website features may not function properly if certain cookies are disabled.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4 pt-4 border-t border-stone-200/80">
            <h2 className="font-display text-2xl sm:text-3xl text-stone-950 font-bold tracking-tight">
              8. Security
            </h2>
            <p>
              We take reasonable technical and organizational measures to protect personal information against unauthorized access, loss, misuse, alteration, or disclosure.
            </p>
            <p>
              However, no method of transmitting or storing information online can be guaranteed to be completely secure.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4 pt-4 border-t border-stone-200/80">
            <h2 className="font-display text-2xl sm:text-3xl text-stone-950 font-bold tracking-tight">
              9. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of external websites and encourage you to review their respective privacy policies.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4 pt-4 border-t border-stone-200/80">
            <h2 className="font-display text-2xl sm:text-3xl text-stone-950 font-bold tracking-tight">
              10. Policy Updates
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices, services, or applicable requirements.
            </p>
            <p>
              The latest version will be made available on our website with a revised “Last Updated” date.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4 pt-4 border-t border-stone-200/80">
            <h2 className="font-display text-2xl sm:text-3xl text-stone-950 font-bold tracking-tight">
              11. Contact
            </h2>
            <p>
              If you have questions about this Privacy Policy or how Uthion handles personal information, please contact us through the contact information provided on our website.
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