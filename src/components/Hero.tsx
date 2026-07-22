import { motion } from 'framer-motion';
import { useConsultation } from '../context/ConsultationContext';

export function Hero() {
  const { open } = useConsultation();

  // Premium, buttery ease-out transition
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
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
    <section className="relative min-h-[85vh] sm:min-h-screen flex flex-col justify-center pt-36 sm:pt-32 pb-20 overflow-hidden bg-paper">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 md:px-12 w-full relative z-10 flex-grow flex items-center justify-center">
        
        {/* Centered Typography Wrapper */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center flex flex-col items-center justify-center w-full"
        >
          {/* Main Heading - Balanced sizing and line-height for mobile */}
          <motion.h1 
            variants={itemVariants}
            className="font-display text-[2.6rem] sm:text-5xl md:text-6xl lg:text-[5rem] leading-[1.15] sm:leading-[1.08] text-ink font-thin tracking-tight sm:tracking-tightest mb-6 sm:mb-8 max-w-3xl"
          >
            Growth doesn't happen by{' '}
            <span className="italic font-normal text-accent font-serif tracking-normal block sm:inline">
              chance.
            </span>{' '}
            <strong className="font-black tracking-tight sm:tracking-tighter block mt-3 sm:mt-4 text-balance text-ink">
              We help businesses scale with strategy.
            </strong>
          </motion.h1>

          {/* Subtext Paragraph - Explicit text-balance to avoid awkward 1-word line wraps */}
          <motion.p 
            variants={itemVariants}
            className="text-[0.95rem] sm:text-lg text-stone-600 dark:text-ink/70 leading-relaxed max-w-xl mb-10 px-2 sm:px-0 text-balance"
          >
             Uthion partners with ambitious businesses to secure capital, refine strategy, and build the capabilities that enable sustainable growth.
          </motion.p>

          {/* Mobile-Responsive Call To Action */}
          <motion.div 
            variants={itemVariants}
            className="w-full sm:w-auto flex justify-center"
          >
            <button
              onClick={open}
              className="group w-full sm:w-auto inline-flex items-center justify-center bg-ink text-white px-8 py-4 text-base sm:text-sm font-medium rounded-full hover:bg-accent transition-colors shadow-sm hover:shadow-md"
            >
              Request a Consultation
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
            </button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}