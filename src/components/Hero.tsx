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
    <section className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-36 pb-12 overflow-hidden bg-[#F8F7F4]">
      {/* 1. Subtle Radial Gradient Glow in Center */}
      <div 
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3300FF]/5 blur-[120px] rounded-full pointer-events-none"
      />

      {/* 2. Delicate Grid Background Overlay */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,#00000015_1px,transparent_1px),linear-gradient(to_bottom,#00000015_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"
      />

      {/* OPTION 2: Floating Metric Cards (Desktop Only) */}
      {/* Card Left: Tier-One Advisory */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden lg:flex absolute left-6 xl:left-16 top-1/3 z-20 items-center gap-3 bg-white/80 backdrop-blur-md px-4 py-3 rounded-2xl border border-stone-300/80 shadow-xl shadow-stone-900/5 pointer-events-none"
      >
        {/* <div className="w-8 h-8 rounded-xl bg-[#3300FF]/10 text-[#3300FF] flex items-center justify-center font-bold text-xs">
          MBB
        </div> */}
        <div>
          <p className="text-[0.65rem] uppercase font-bold tracking-wider text-stone-400">Methodology</p>
          <p className="text-xs font-bold text-stone-900">Tier-One Advisory</p>
        </div>
      </motion.div>

      {/* Card Right Top: Capital Raised */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="hidden lg:flex absolute right-6 xl:right-16 top-1/3 z-20 items-center gap-3 bg-white/80 backdrop-blur-md px-4 py-3 rounded-2xl border border-stone-300/80 shadow-xl shadow-stone-900/5 pointer-events-none"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
        <div>
          <p className="text-[0.65rem] uppercase font-bold tracking-wider text-stone-400">Track Record</p>
          <p className="text-xs font-bold text-stone-900">$50M+ Capital Advisory</p>
        </div>
      </motion.div>

      {/* Card Right Bottom: Scale Factor */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="hidden lg:flex absolute right-12 xl:right-28 top-2/3 z-20 items-center gap-3 bg-white/80 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-stone-300/80 shadow-xl shadow-stone-900/5 pointer-events-none"
      >
        <span className="text-xs font-mono font-extrabold text-[#3300FF] bg-[#3300FF]/10 px-2 py-0.5 rounded-md">
          4x
        </span>
        <span className="text-xs font-bold text-stone-800">Growth Velocity</span>
      </motion.div>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 md:px-12 w-full relative z-10 flex-grow flex items-center justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center flex flex-col items-center justify-center w-full"
        >
          {/* Mobile Trust Badge (Visible on Mobile/Tablet only) */}
          <motion.div 
            variants={itemVariants} 
            className="lg:hidden mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-200/60 border border-stone-300/80 text-xs font-medium text-stone-700"
          >
            <span className="w-2 h-2 rounded-full bg-[#3300FF] animate-pulse" />
            Tier-One Strategic Advisory
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            variants={itemVariants}
            className="font-display text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[5rem] leading-[1.08] text-stone-950 font-thin tracking-tight sm:tracking-tightest mb-6 max-w-4xl"
          >
            Growth doesn't happen by{' '}
            <span className="relative inline-block italic font-normal text-[#3300FF] font-serif tracking-normal">
              chance.
              {/* Subtle underline curve */}
              <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#3300FF]/30 overflow-visible" viewBox="0 0 100 12" fill="none" preserveAspectRatio="none">
                <path d="M0 8 Q 50 0, 100 8" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            
            {/* Reduced Font Size & Single Line Layout */}
            <strong className="block mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-stone-900 md:whitespace-nowrap">
              We help businesses scale with strategy.
            </strong>
          </motion.h1>

          {/* Subtext Paragraph */}
          <motion.p 
            variants={itemVariants}
            className="text-[1rem] sm:text-lg text-stone-600 leading-relaxed max-w-xl mb-10 px-2 sm:px-0 text-balance font-normal"
          >
            Uthion partners with ambitious businesses to define their strategy, build capabilities and secure capital that enables sustainable growth.
          </motion.p>

          {/* Highly Visible CTA Button */}
          <motion.div 
            variants={itemVariants}
            className="w-full sm:w-auto flex justify-center"
          >
            <button
              onClick={open}
              className="group relative inline-flex items-center justify-center hover:bg-transparent hover:text-black hover:border-2 hover:border-black px-5 py-2.5 sm:px-8 sm:py-4 text-xs sm:text-sm font-bold rounded-full transition-all duration-300 bg-[#3300FF] border-[#3300FF] text-white shadow-lg shadow-[#3300FF]/25 active:scale-95 cursor-pointer"
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
        </motion.div>
      </div>
    </section>
  );
}