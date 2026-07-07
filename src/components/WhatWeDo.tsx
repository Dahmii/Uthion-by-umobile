import { motion } from 'framer-motion';
export function WhatWeDo() {
  const services = [
  {
    id: '01',
    title: 'Capital Structuring',
    problem: 'Inefficient capital stacks limit growth and increase risk.',
    outcome:
    'We secure optimal funding and structure capital to fuel ambitious expansion while protecting equity.',
    details: ['Debt & Equity Financing', 'M&A Advisory', 'Restructuring']
  },
  {
    id: '02',
    title: 'Corporate Strategy',
    problem: 'Misaligned objectives lead to stagnant market share.',
    outcome:
    'We define clear market positioning and execute high-leverage initiatives that drive sustainable competitive advantage.',
    details: ['Market Entry', 'Growth Roadmaps', 'Competitive Positioning']
  },
  {
    id: '03',
    title: 'Organizational Transformation',
    problem: 'Outdated operations break under the pressure of scale.',
    outcome:
    'We institutionalize operations, building resilient frameworks that support rapid scale and market dominance.',
    details: [
    'Operational Excellence',
    'Leadership Alignment',
    'Change Management']

  }];

  return (
    <section id="what-we-do" className="py-32 bg-paper">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Text Content */}
          <div className="relative lg:sticky lg:top-32">
           

            <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight mb-8">
              Everything your enterprise needs to scale.
            </h2>
            <p className="text-lg text-ink.soft leading-relaxed mb-12 max-w-md">
              From the initial capital raise to final execution—we partner with
              market leaders to optimize strategy and institutionalize
              operational excellence.
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
                  <span className="text-sm font-medium text-ink.muted">
                    {service.id}
                  </span>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-ink.muted mb-2">
                    <strong className="text-ink font-medium">
                      The Challenge:
                    </strong>{' '}
                    {service.problem}
                  </p>
                  <p className="text-sm text-ink.soft">
                    <strong className="text-ink font-medium">
                      Our Impact:
                    </strong>{' '}
                    {service.outcome}
                  </p>
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