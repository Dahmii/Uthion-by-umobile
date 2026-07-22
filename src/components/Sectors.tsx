import { motion } from 'framer-motion';
export function Sectors() {
  const sectors = [
  {
    title: 'Real Estate',
    description:
    'Optimizing portfolios and structuring capital for large-scale developments.',
    image:
    'https://images.unsplash.com/photo-1577985043696-8bd54d9f093f?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Aviation',
    description:
    'Supporting strategic growth through regulatory and capital advisory.',
    image:
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Financial Services',
    description:
    'Helping financial institutions stay competitive in a rapidly evolving market.',
    image:
    'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Technology',
    description:
    'Helping technology companies scale and strengthen their competitive position.',
    image:
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Manufacturing',
    description:
    'Strengthening operations and building more resilient supply chains.',
    image:
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Energy',
    description:
    'Structuring capital for infrastructure and strategic energy investments.',
    image:
    'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=800'
  }];

  return (
    <section id="sectors" className="py-32 bg-stone/30">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-ink max-w-2xl leading-tight">
               Industries We Serve 
            </h2>
          </div>
          <p className="text-sm text-ink.soft max-w-sm mt-6 md:mt-0">
            Our experience spans multiple industries, helping businesses strengthen strategy, secure funding, and improve performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {sectors.map((sector, index) =>
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
            className="group cursor-pointer">
            
              <div className="relative h-[400px] w-full overflow-hidden mb-6">
                <img
                src={sector.image}
                alt={sector.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[30%]" />
              
                <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="flex items-start">
                <span className="text-xs tracking-widest uppercase mr-3 mt-1 text-accent">
                  »
                </span>
                <div>
                  <h3 className="font-display text-2xl text-ink mb-2 group-hover:text-accent transition-colors">
                    {sector.title}
                  </h3>
                  <p className="text-sm text-ink.soft leading-relaxed">
                    {sector.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}