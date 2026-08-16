import { motion } from 'framer-motion';
import { useConsultation } from '../context/ConsultationContext';

export function Hero() {
  const { open } = useConsultation();

  // Staggered reveal variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-28 sm:pt-36 pb-16 overflow-hidden bg-[#F8F7F4]">
      {/* Subtle Ambient Radial Glow */}
      <div 
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3300FF]/5 blur-[120px] rounded-full pointer-events-none"
      />

      {/* Grid Overlay */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,#00000012_1px,transparent_1px),linear-gradient(to_bottom,#00000012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* LEFT COLUMN: Text Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Trust Badge */}
            {/* <motion.div 
              variants={itemVariants} 
              className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-200/60 border border-stone-300/80 text-xs font-semibold text-stone-700"
            >
              <span className="w-2 h-2 rounded-full bg-[#3300FF] animate-pulse" />
              Simple Growth Strategies
            </motion.div> */}

            {/* Headline */}
            <motion.h1 
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-thin tracking-tight text-stone-950 leading-[1.1] mb-6"
            >
              Growth doesn't happen by{' '}
              <span className="relative inline-block italic font-normal text-[#3300FF] font-serif tracking-normal">
                chance.
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#3300FF]/30 overflow-visible" viewBox="0 0 100 12" fill="none" preserveAspectRatio="none">
                  <path d="M0 8 Q 50 0, 100 8" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              {/* <strong className="block mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
                We help businesses scale with strategy.
              </strong> */}
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={itemVariants}
              className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-xl mb-8 font-normal"
            >
              Uthion partners with ambitious businesses to define their strategy, build capabilities, and secure capital that enables sustainable growth.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="w-full sm:w-auto">
              <button
                onClick={open}
                className="group relative inline-flex items-center justify-center bg-[#3300FF] border-2 border-[#3300FF] text-white hover:bg-transparent hover:text-stone-900 px-8 py-4 text-sm font-bold rounded-full transition-all duration-300 shadow-lg shadow-[#3300FF]/20 active:scale-95 cursor-pointer"
              >
                <span className="relative z-10 flex items-center">
                  Request a Consultation
                  <svg
                    className="ml-2.5 transition-transform duration-300 group-hover:translate-x-1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M3 8H13M13 8L9 4M13 8L9 12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Image & Floating Metric Cards */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-6 relative flex items-center justify-center mt-6 lg:mt-0"
          >
            {/* Curved Backdrop Card (Styled after reference design) */}
            <div className="relative w-full max-w-lg aspect-[4/5] sm:aspect-[1/1] rounded-3xl bg-stone-200/50 p-3 sm:p-4 border border-stone-300/50 shadow-2xl overflow-visible">
              <div className="w-full h-full rounded-2xl overflow-hidden relative shadow-inner">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Black business professionals shaking hands" 
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* FLOATING BADGE 1: Left Top */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-4 sm:-left-8 top-10 z-20 flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-stone-200 shadow-xl shadow-stone-900/10 pointer-events-none"
              >
                <div className="w-8 h-8 rounded-xl bg-[#3300FF]/10 text-[#3300FF] flex items-center justify-center font-bold text-sm">
                  🎯
                </div>
                <div>
                  <p className="text-[0.65rem] uppercase font-bold tracking-wider text-stone-400">Our Goal</p>
                  <p className="text-xs font-bold text-stone-900">We Help You Grow</p>
                </div>
              </motion.div>

              {/* FLOATING BADGE 2: Right Middle */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -right-4 sm:-right-8 top-1/2 -translate-y-1/2 z-20 flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-stone-200 shadow-xl shadow-stone-900/10 pointer-events-none"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-sm">
                  💼
                </div>
                <div>
                  <p className="text-[0.65rem] uppercase font-bold tracking-wider text-stone-400">Funding</p>
                  <p className="text-xs font-bold text-stone-900">Get Money To Scale</p>
                </div>
              </motion.div>

              {/* FLOATING BADGE 3: Bottom Left */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute left-6 -bottom-6 z-20 flex items-center gap-3 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl border border-stone-200 shadow-xl shadow-stone-900/10 pointer-events-none"
              >
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold text-sm">
                  📈
                </div>
                <div>
                  <p className="text-[0.65rem] uppercase font-bold tracking-wider text-stone-400">Strategy</p>
                  <p className="text-xs font-bold text-stone-900">Clear Step-by-Step Plans</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}