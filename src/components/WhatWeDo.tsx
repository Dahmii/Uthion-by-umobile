import { motion } from 'framer-motion';
export function WhatWeDo() {
  const services = [
  {
    title: 'Business Strategy',
    points: 'Develop clear growth strategies that strengthen competitive positioning and drive long-term value.',
    details: ['Market Entry', 'Growth Roadmaps', 'Competitive Positioning']
  },
  {
    title: 'Organizational Transformation',
    points: 'Build the operation model and organizational capabilities needed to support sustainable growth.',
    details: ['Operational Excellence',
    'Leadership Alignment',
    'Change Management']

  },
    {
    title: 'Capital Structuring',
    points: 'Secure the right capital to fuel growth while managing financial risk.',
    details: ['Debt & Equity Financing', 'M&A Advisory', 'Restructuring']
  }
  ];

  return (
    <section id="what-we-do" className="py-32 bg-paper">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Text Content */}
          <div className="relative lg:sticky lg:top-32">
           

            <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight mb-8">
              Everything your business {' '} 
              
              <span className="relative inline-block italic font-normal text-[#3300FF] font-serif tracking-normal">
                needs
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#3300FF]/30 overflow-visible" viewBox="0 0 100 12" fill="none" preserveAspectRatio="none">
                    <path d="M0 8 Q 50 0, 100 8" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                </svg>
              </span>{' '}
              
               to scale.
            </h2>
            <p className="text-lg text-ink.soft leading-relaxed mb-12 max-w-md">
              From defining strategy to securing growth capital and building the capabilities and systems needed for sustainable growth, we partner with businesses to turn ambition into action.
            </p>

            <div className="hidden lg:block relative h-[400px] w-full mt-12">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
                alt="Corporate architecture"
                className="w-full h-full object-cover grayscale-[20%]" />
              
              <div className="absolute -bottom-6 -right-6 w-24 h-[1px] bg-stone"></div>
              <div className="absolute -bottom-6 -right-6 w-[1px] h-24 bg-stone"></div>
            </div>
          </div>

          {/* Right: Expanded Services List */}
          <div className="space-y-12">
            {services.map((service, index) =>
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
                once: true,
                margin: '-100px'
              }}
              transition={{
                duration: 0.5
              }}
              className="border-t border-stone pt-8 group">
              
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="font-display text-3xl text-ink group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-ink.muted mb-2">
                    {service.points}
                  </p>
                  {/* <p className="text-sm text-ink.soft">
                    {service.outcome}
                  </p> */}
                </div>

                <ul className="flex flex-wrap gap-3">
                  {service.details.map((detail, i) =>
                <li
                  key={i}
                  className="text-xs tracking-wide uppercase text-ink.muted bg-stone/30 px-3 py-1.5 rounded-sm">
                  
                      {detail}
                    </li>
                )}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}