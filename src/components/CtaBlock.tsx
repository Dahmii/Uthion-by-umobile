import { motion } from 'framer-motion';
import { useConsultation } from '../context/ConsultationContext';
interface CtaBlockProps {
  eyebrow?: string;
  heading: string;
  body?: string;
  variant?: 'light' | 'dark' | 'feature';
}
export function CtaBlock({
  eyebrow,
  heading,
  body,
  variant = 'light'
}: CtaBlockProps) {
  const { open } = useConsultation();
  const isDark = variant === 'dark' || variant === 'feature';
  return (
    <section className={isDark ? 'bg-ink text-paper' : 'bg-paper text-ink'}>
      <div className="max-w-container mx-auto px-6 md:px-12">
        <div
          className={`${variant === 'feature' ? 'py-32' : 'py-20'} ${!isDark ? 'border-y border-stone' : ''} relative overflow-hidden`}>
          
          {variant === 'feature' &&
          <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-3xl rounded-full translate-x-1/2" />
          }

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-80px'
            }}
            transition={{
              duration: 0.6
            }}
            className={`relative z-10 flex flex-col ${variant === 'feature' ? 'items-center text-center max-w-3xl mx-auto' : 'md:flex-row md:items-end md:justify-between gap-8'}`}>
            
            <div className={variant === 'feature' ? '' : 'max-w-2xl'}>
              {eyebrow &&
              <div
                className={`flex items-center mb-6 ${variant === 'feature' ? 'justify-center' : ''}`}>
                
                  
                </div>
              }
              <h2
                className={`font-display leading-tight ${variant === 'feature' ? 'text-4xl md:text-6xl mb-6' : 'text-3xl md:text-4xl'}`}>
                
                {heading}
              </h2>
              {body &&
              <p
                className={`leading-relaxed mt-4 ${variant === 'feature' ? 'text-lg max-w-xl mx-auto' : 'max-w-md'} ${isDark ? 'text-stone/70' : 'text-ink.soft'}`}>
                
                  {body}
                </p>
              }
            </div>

            <div className={variant === 'feature' ? 'mt-10' : 'shrink-0'}>
              <button
                onClick={open}
                className={`group inline-flex items-center px-8 py-4 text-sm font-medium rounded-full transition-colors ${isDark ? 'bg-paper text-ink hover:bg-accent hover:text-white' : 'bg-ink text-white hover:bg-accent'}`}>
                
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
        </div>
      </div>
    </section>);

}