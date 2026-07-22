import { motion } from 'framer-motion';
export function Process() {
  const steps = [
  {
    number: '01',
    title: 'Discover',
    description:
    'We work with you to understand your business, identify key challenges, and uncover opportunities for growth.'
  },
  {
    number: '02',
    title: 'Strategize',
    description:
    'We work along side your team to implement initiatives and deliver measurable results.'
  },
  {
    number: '03',
    title: 'Execute',
    description:
    'We help build the systems, processes, and capabilities needed to support long-term growth.'
  },
  {
    number: '04',
    title: 'Scale',
    description:
    'With institutional frameworks in place, we help you scale operations, dominate your market sector, and prepare for future capital events or exits.'
  }];

  return (
    <section id="process" className="py-32 bg-stone/20 border-y border-stone">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className="mb-20">
          
          <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight max-w-2xl">
            Our approach to helping businessses scale.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-6 left-0 w-full h-[1px] bg-stone z-0"></div>

          {steps.map((step, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.1
            }}
            className="relative z-10">
            
              <div className="w-12 h-12 bg-paper border border-stone rounded-full flex items-center justify-center mb-8">
                <span className="text-sm font-medium text-ink">
                  {step.number}
                </span>
              </div>
              <h3 className="font-display text-2xl text-ink mb-4">
                {step.title}
              </h3>
              <p className="text-sm text-ink.soft leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}