import React from 'react';
import { motion } from 'framer-motion';
export function CaseStudies() {
  const cases = [
  {
    client: 'Global Aviation Group',
    challenge:
    'Needed $250M to expand fleet while navigating complex cross-border regulations.',
    solution:
    'Structured a syndicated debt facility and optimized tax positioning across 3 jurisdictions.',
    result: '$250M Secured',
    metric: 'Capital Raised'
  },
  {
    client: 'Enterprise SaaS Provider',
    challenge:
    'Stagnant growth and operational inefficiencies ahead of a planned Series C.',
    solution:
    'Redesigned go-to-market strategy and institutionalized sales operations.',
    result: '3x Valuation',
    metric: 'Increase in 18 Months'
  },
  {
    client: 'Commercial Real Estate Trust',
    challenge:
    'Portfolio underperforming due to misaligned asset management strategy.',
    solution:
    'Executed a strategic divestiture plan and reinvested capital into high-yield urban logistics.',
    result: '28% IRR',
    metric: 'Delivered to LPs'
  }];

  return (
    <section id="case-studies" className="py-32 bg-paper">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className="mb-20 text-center">
          <div className="flex items-center justify-center mb-6">
            <span className="w-8 h-[1px] bg-accent mr-4"></span>
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-ink.muted">
              Client Outcomes
            </span>
            <span className="w-8 h-[1px] bg-accent ml-4"></span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
            Measurable impact for market leaders.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((study, index) =>
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
              duration: 0.5,
              delay: index * 0.1
            }}
            className="bg-stone/20 p-10 border border-stone hover:border-accent/30 transition-colors">
            
              <h3 className="font-display text-2xl text-ink mb-6">
                {study.client}
              </h3>

              <div className="mb-8 space-y-4">
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-widest text-ink.muted mb-1">
                    Challenge
                  </span>
                  <p className="text-sm text-ink.soft">{study.challenge}</p>
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-widest text-ink.muted mb-1">
                    Solution
                  </span>
                  <p className="text-sm text-ink.soft">{study.solution}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-stone">
                <span className="block font-display text-4xl text-ink mb-1">
                  {study.result}
                </span>
                <span className="text-xs tracking-widest uppercase text-accent">
                  {study.metric}
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}