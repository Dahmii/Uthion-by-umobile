import React from 'react';
import { motion } from 'framer-motion';

export function WhyChooseUs() {
  const features = [
    {
      title: 'Experience That Counts',
      description:
        'Our team combines Big 4 + MBB experience to bring tier-one strategic clarity to your business operations.',
      tag: 'Tier-One Advisory',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0l3 3m-3-3l-3 3"
          />
        </svg>
      ),
    },
    {
      title: 'Focused on Growth',
      description:
        'Our preference is for mid-sized and growing businesses ready to convert momentum into lasting market leadership.',
      tag: 'Mid-Market Scale',
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
    {
      title: 'Built for Today',
      description:
        "Our perspectives are shaped by today's evolving business landscape, cutting through legacy complexity with agile execution.",
      tag: 'Agile Execution',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative py-20 sm:py-28 bg-[#F8F7F4] text-stone-950 overflow-hidden border-t border-stone-200/80">
      {/* Background Radial Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3300FF]/5 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        {/* Header Layout */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-thin tracking-tight leading-[1.1] mb-4 text-stone-950">
            Why Businesses{' '}
            <span className="relative inline-block italic font-serif text-[#3300FF] font-normal">
              Choose
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
            Uthion
          </h2>
          <p className="font-sans text-stone-600 text-base sm:text-lg leading-relaxed max-w-xl">
            Our commitment goes beyond standard consulting. We bring tier-one methodology tailored specifically to institutionalize and scale your growth.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group relative flex flex-col justify-between p-8 sm:p-9 rounded-[2rem] bg-[#EFECE6]/80 border-2 border-stone-300/70 text-stone-900 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#3300FF] hover:border-stone-950 hover:text-white hover:shadow-xl hover:shadow-stone-950/20"
            >
              <div>
                {/* Header Row inside Card */}
                <div className="flex items-center justify-between mb-8">
                  {/* Icon Container */}
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-stone-200/90 text-stone-900 transition-colors duration-300 group-hover:bg-[#3300FF] group-hover:text-white">
                    {item.icon}
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4 leading-snug transition-colors duration-300 group-hover:text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base leading-relaxed text-stone-600 transition-colors duration-300 group-hover:text-stone-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}