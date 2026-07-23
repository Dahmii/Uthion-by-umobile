import { motion } from 'framer-motion';
export function Testimonials() {
  return (
    <section className="py-32 bg-ink text-paper overflow-hidden relative">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 blur-3xl rounded-full translate-x-1/2"></div>

      <div className="max-w-container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-8">
              "
              <span className="relative inline-block italic font-normal text-[#3300FF] font-serif tracking-normal">
              Uthion
              <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#3300FF]/30 overflow-visible" viewBox="0 0 100 12" fill="none" preserveAspectRatio="none">
                <path d="M0 8 Q 50 0, 100 8" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </svg> 
              </span>{' '}
               doesn't just advise; they architect the future of the
              enterprise."
            </h2>
            <p className="text-stone/70 leading-relaxed mb-10">
              Our partners trust us to navigate their most critical inflection
              points—from complex capital raises to complete organizational
              transformations.
            </p>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-stone/30 flex items-center justify-center hover:bg-stone/10 transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5">
                  
                  <path
                    d="M15 18l-6-6 6-6"
                    strokeLinecap="round"
                    strokeLinejoin="round" />
                  
                </svg>
              </button>
              <button className="w-12 h-12 rounded-full border border-stone/30 flex items-center justify-center hover:bg-stone/10 transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5">
                  
                  <path
                    d="M9 18l6-6-6-6"
                    strokeLinecap="round"
                    strokeLinejoin="round" />
                  
                </svg>
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{
                opacity: 0,
                x: 20
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6
              }}
              className="bg-stone/5 border border-stone/20 p-10 md:p-16 relative">
              
              <span className="absolute top-8 left-8 text-6xl text-accent/40 font-display leading-none">
                "
              </span>
              <blockquote className="font-display text-2xl md:text-3xl leading-snug mb-10 relative z-10 pt-4">
                The strategic clarity and rigorous execution Uthion brought to
                our Series C process was unparalleled. They didn't just help us
                secure funding; they institutionalized our operations to ensure
                we could deploy that capital effectively.
              </blockquote>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
                  alt="Sarah Jenkins"
                  className="w-14 h-14 rounded-full object-cover mr-4 grayscale" />
                
                <div>
                  <p className="font-medium text-paper">Sarah Jenkins</p>
                  <p className="text-sm text-stone/60">
                    CEO, Nexus Technologies
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>);

}