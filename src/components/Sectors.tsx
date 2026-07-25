import { motion } from 'framer-motion';
import financialImage from '../assets/finance.jpg';
import healthcareImage from '../assets/healthcare.jpg';

export function Sectors() {
  const sectors = [
    {
      title: 'Financial Services',
      services: [
        'Business strategy development',
        'License application support',
        'Mergers & acquisitions advisory',
        'Talent sourcing',
      ],
      image: financialImage,
    },
    {
      title: 'Healthcare',
      services: [
        'Business planning and setup',
        'Business valuation',
        'Capital raising advisory',
      ],
      image: healthcareImage,
    },
    {
      title: 'Aviation',
      services: ['Business structuring'],
      image:
        'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Logistics',
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
              Where we've made a <br />
              <span className="relative inline-block italic font-normal text-[#3300FF] font-serif tracking-normal mt-1">
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
            Our experience spans multiple industries, helping businesses strengthen strategy, secure funding, and improve performance.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 sm:gap-y-16">
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
                <div className="relative h-[260px] sm:h-[320px] w-full overflow-hidden rounded-[1.5rem] mb-6 border border-stone-300/80">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[20%]"
                  />
                  <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Sector Title */}
                <h3 className="font-display text-2xl sm:text-3xl text-stone-950 mb-5 font-bold group-hover:text-[#3300FF] transition-colors">
                  {sector.title}
                </h3>
              </div>

              {/* Vertical Checkmark List */}
              <ul className="space-y-3 pt-4 border-t border-stone-200/80">
                {sector.services.map((service, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-3">
                    {/* Checkmark Circle Icon */}
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-stone-200/80 border border-stone-300 flex items-center justify-center text-stone-900 group-hover:bg-[#3300FF] group-hover:border-[#3300FF] group-hover:text-white transition-all duration-300">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    {/* Service Label */}
                    <span className="text-sm sm:text-[0.95rem] font-medium text-stone-700 group-hover:text-stone-950 transition-colors">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}