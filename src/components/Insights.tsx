import React from 'react';
import { motion } from 'framer-motion';
export function Insights() {
  const articles = [
  {
    category: 'Market Intelligence',
    title:
    'The New Capital Stack: Structuring for Resilience in Volatile Markets',
    date: 'Oct 12, 2023',
    readTime: '8 min read'
  },
  {
    category: 'Strategic Perspective',
    title:
    'Institutionalizing the Mid-Market: A Roadmap to Series C and Beyond',
    date: 'Sep 28, 2023',
    readTime: '6 min read'
  },
  {
    category: 'Sector Report',
    title:
    'Aviation Finance 2024: Navigating ESG Mandates and Fleet Expansion',
    date: 'Sep 15, 2023',
    readTime: '12 min read'
  }];

  return (
    <section id="insights" className="py-32 bg-stone/20">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <div className="flex items-center mb-6">
              <span className="w-8 h-[1px] bg-accent mr-4"></span>
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-ink.muted">
                Thought Leadership
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
              Strategic perspectives.
            </h2>
          </div>
          <button className="group inline-flex items-center text-ink text-sm font-medium hover:text-accent transition-colors mt-6 md:mt-0">
            View all insights
            <span className="ml-2 text-accent group-hover:translate-x-1 transition-transform inline-block">
              »
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) =>
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
            className="group cursor-pointer border-t border-stone pt-6">
            
              <span className="block text-xs font-semibold tracking-widest uppercase text-accent mb-4">
                {article.category}
              </span>
              <h3 className="font-display text-2xl text-ink mb-6 group-hover:text-accent transition-colors leading-snug">
                {article.title}
              </h3>
              <div className="flex items-center text-xs text-ink.muted">
                <span>{article.date}</span>
                <span className="mx-2">•</span>
                <span>{article.readTime}</span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}