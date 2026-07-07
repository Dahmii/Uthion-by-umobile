import { motion } from 'framer-motion';
import { useConsultation } from '../context/ConsultationContext';
export function Hero() {
  const { open } = useConsultation();
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el)
    el.scrollIntoView({
      behavior: 'smooth'
    });
  };
  

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-16 overflow-hidden bg-paper">
      <div className="max-w-container mx-auto px-6 md:px-12 w-full relative z-10 flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          {/* Left: Value proposition + CTAs */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut'
            }}
            className="lg:col-span-6 order-2 lg:order-1">
            
           
            <h1 className="font-display text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.02] text-ink font-thin tracking-tightest mb-8">
              Growth doesn't happen by {' '}
              <span className="italic font-normal text-accent font-serif tracking-normal">chance.</span>{' '}
              <strong className="font-black tracking-tighter block mt-2 text-balance">
                  We help businesses scale with strategy.
              </strong>
            </h1>

            {/* <p className="text-lg text-ink.soft leading-relaxed max-w-xl mb-10">
              Uthion partners with ambitious enterprises—securing capital,
              sharpening strategy, and institutionalizing the operations that
              turn growth into lasting market dominance.
            </p> */}

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16">
              <button
                onClick={open}
                className="group inline-flex items-center bg-ink text-white px-8 py-4 text-sm font-medium rounded-full hover:bg-accent transition-colors">
                
                Request a Consultation
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
              
            </div>

            
          </motion.div>

          {/* Right: Business-focused visual */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1,
              ease: 'easeOut',
              delay: 0.2
            }}
            className="lg:col-span-6 order-1 lg:order-2 relative">
            
            <div className="relative w-full aspect-[4/5] max-w-lg mx-auto lg:ml-auto">
              <img
                src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&q=80&w=1000"
                alt="Advisory leadership in strategic discussion"
                className="w-full h-full object-cover grayscale-[15%]" />
              
              {/* Thin corner framing */}
              <div className="absolute -top-6 -left-6 w-24 h-[1px] bg-stone"></div>
              <div className="absolute -top-6 -left-6 w-[1px] h-24 bg-stone"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-[2px] bg-accent"></div>
              <div className="absolute -bottom-6 -right-6 w-[2px] h-24 bg-accent"></div>
            </div>
          </motion.div>
        </div>
      </div>

     
      
    </section>);

}