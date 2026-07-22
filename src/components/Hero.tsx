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
    <section className="relative min-h-screen flex flex-col justify-between pt-36 pb-12 overflow-hidden bg-[#F8F7F4]">
      
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

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-5 sm:px-8 md:px-12 w-full relative z-10 flex-grow flex items-center justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center flex flex-col items-center justify-center w-full"
        >
          {/* Main Headline */}
          <motion.h1 
            variants={itemVariants}
            className="font-display text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[5.25rem] leading-[1.08] text-stone-950 font-thin tracking-tight sm:tracking-tightest mb-8 max-w-3xl"
          >
            Growth doesn't happen by{' '}
            <span className="relative inline-block italic font-normal text-[#3300FF] font-serif tracking-normal">
              chance.
              {/* Subtle underline curve */}
              <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#3300FF]/30 overflow-visible" viewBox="0 0 100 12" fill="none" preserveAspectRatio="none">
                <path d="M0 8 Q 50 0, 100 8" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </svg>
            </span>{' '}
            <strong className="font-black tracking-tight sm:tracking-tighter block mt-3 sm:mt-4 text-balance text-stone-900">
              We help businesses scale with strategy.
            </strong>
          </motion.h1>

          {/* Subtext Paragraph */}
          <motion.p 
            variants={itemVariants}
            className="text-[1rem] sm:text-lg text-stone-600 leading-relaxed max-w-xl mb-10 px-2 sm:px-0 text-balance font-normal"
          >
            Uthion partners with ambitious businesses to secure capital, refine
            strategy, and build the capabilities that enable sustainable growth.
          </motion.p>

          {/* Highly Visible CTA Button */}
          <motion.div 
            variants={itemVariants}
            className="w-full sm:w-auto flex justify-center"
          >
              <button
                onClick={open}
                className="group relative inline-flex items-center justify-center bg-transparent text-black border-2 border-black px-8 py-4 text-base sm:text-sm font-bold rounded-full transition-all duration-300 hover:bg-[#3300FF] hover:border-[#3300FF] hover:text-white hover:shadow-lg hover:shadow-[#3300FF]/25 active:scale-95 cursor-pointer"
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