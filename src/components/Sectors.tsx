import { motion } from 'framer-motion';

export function Sectors() {
  const sectors = [
    {
      title: 'Financial Services',
      description:
        'Navigating complex regulatory landscapes, securing operational licenses, and structuring transformative transactions.',
      services: [
        'Business strategy development',
        'License application support',
        'Mergers & acquisitions advisory',
        'Talent sourcing',
      ],
      image:
        'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Healthcare',
      description:
        'Empowering medical enterprises to scale infrastructure, optimize valuation, and secure vital growth capital.',
      services: [
        'Business planning and setup',
        'Business valuation',
        'Capital raising advisory',
      ],
      image:
        'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Aviation',
      description:
        'Structuring resilient, compliant operations built for long-term operational and capital efficiency.',
      services: ['Business structuring'],
      image:
        'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Logistics',
      description:
        'Institutionalizing supply chain, transport, and freight enterprises for scalable expansion.',
      services: [
        'Company setup and structuring',
        'Business strategy development',
      ],
      image:
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <section id="sectors" className="py-24 sm:py-32 bg-[#F8F7F4]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 sm:mb-20">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-stone-950 max-w-2xl leading-[1.1] font-thin tracking-tight">
              Where we've made a {' '}
              <br/>
              <span className="relative inline-block italic font-normal text-[#3300FF] font-serif tracking-normal">
                Difference.
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
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-stone-600 max-w-sm mt-6 md:mt-0 font-normal leading-relaxed">
            We've worked alongside leaders across key industries, helping them solve critical structural challenges and scale efficiently.
          </p>
        </div>

        {/* Sectors Grid (Adjusts automatically from 1 to 2 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 sm:gap-y-16">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image Wrapper */}
                <div className="relative h-[280px] sm:h-[340px] w-full overflow-hidden rounded-[1.5rem] mb-6 border border-stone-300/80">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[20%]"
                  />
                  <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Title & Description */}
                <h3 className="font-display text-2xl sm:text-3xl text-stone-950 mb-3 font-bold group-hover:text-[#3300FF] transition-colors">
                  {sector.title}
                </h3>
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-6">
                  {sector.description}
                </p>
              </div>

              {/* Service Highlights / Capability Badges */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-stone-200/80">
                {sector.services.map((service, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[0.75rem] font-medium text-stone-700 bg-stone-200/60 border border-stone-300/60 px-3 py-1 rounded-full group-hover:border-[#3300FF]/30 transition-colors"
                  >
                    • {service}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}