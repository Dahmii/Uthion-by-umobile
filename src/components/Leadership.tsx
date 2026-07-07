import React from 'react';
import { motion } from 'framer-motion';
export function Leadership() {
  const leaders = [
  {
    name: 'Alexander Vance',
    role: 'Managing Partner',
    expertise: 'Capital Structuring, M&A',
    image:
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Elena Rostova',
    role: 'Senior Partner',
    expertise: 'Corporate Strategy, Market Entry',
    image:
    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Marcus Chen',
    role: 'Partner',
    expertise: 'Organizational Transformation',
    image:
    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800'
  }];

  return (
    <section id="why-uthion" className="py-32 bg-paper border-t border-stone">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <div className="flex items-center mb-6">
              <span className="w-8 h-[1px] bg-accent mr-4"></span>
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-ink.muted">
                Firm Leadership
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-ink max-w-2xl leading-tight">
              Decades of institutional expertise.
            </h2>
          </div>
          <p className="text-sm text-ink.soft max-w-sm mt-6 md:mt-0">
            Our partners bring deep sector knowledge and a track record of
            executing complex strategies for global enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) =>
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
            className="group">
            
              <div className="relative aspect-[3/4] w-full overflow-hidden mb-6">
                <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-full object-cover grayscale-[20%] transition-transform duration-700 group-hover:scale-105" />
              
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-paper z-10 hidden group-hover:block transition-all">
                  <div className="absolute top-0 right-0 w-full h-[1px] bg-accent"></div>
                  <div className="absolute top-0 right-0 w-[1px] h-full bg-accent"></div>
                </div>
              </div>
              <h3 className="font-display text-2xl text-ink mb-1">
                {leader.name}
              </h3>
              <p className="text-sm font-medium text-ink.soft mb-2">
                {leader.role}
              </p>
              <p className="text-xs tracking-widest uppercase text-ink.muted">
                {leader.expertise}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}