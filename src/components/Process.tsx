import { motion } from 'framer-motion';

export function Process() {
  const steps = [
    {
      title: 'Discover',
      description:
        'We work with you to understand your business, identify key challenges, and uncover opportunities for growth.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Strategize',
      description:
        'We develop a practical roadmap that aligns your strategy, priorities, and resources.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
      ),
    },
    {
      title: 'Execute',
      description:
        'We work alongside your team to implement initiatives and deliver measurable results.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Scale',
      description:
        'We help build the systems, processes, and capabilities needed to support long-term growth.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="process" className="py-24 sm:py-32 bg-[#F8F7F4] border-y border-stone-200/80">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-stone-950 leading-[1.1] max-w-2xl font-thin tracking-tight">
            Our approach to{' '}
            <span className="relative inline-block italic font-normal text-[#3300FF] font-serif tracking-normal">
              helping
              <svg
                className="absolute -bottom-1 left-0 w-full h-2 text-[#3300FF]/30 overflow-visible"
                viewBox="0 0 100 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 8 Q 50 0, 100 8"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            businesses scale.
          </h2>
        </div>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative z-10 flex flex-col justify-start"
            >
              {/* Icon Circle */}
              <div className="w-12 h-12 bg-white border-2 border-stone-950 rounded-2xl flex items-center justify-center mb-6 text-stone-950 transition-all duration-300 group-hover:bg-[#3300FF] group-hover:border-[#3300FF] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#3300FF]/20">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-950 mb-3 group-hover:text-[#3300FF] transition-colors duration-300">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}