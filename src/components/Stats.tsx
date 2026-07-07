import React from 'react';
export function Stats() {
  const stats = [
  {
    value: '1998',
    label: 'founding year'
  },
  {
    value: '$4B+',
    label: 'capital structured'
  },
  {
    value: '3',
    label: 'core sectors'
  },
  {
    value: 'Global',
    label: 'advisory reach'
  }];

  return (
    <section className="py-24 border-y border-stone bg-paper">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6">
          {stats.map((stat, index) =>
          <div
            key={index}
            className="flex flex-col items-center text-center relative">
            
              <span className="font-display text-4xl md:text-5xl text-ink mb-2">
                {stat.value}
              </span>
              <span className="text-sm text-ink.muted">{stat.label}</span>

              {/* Divider line for desktop */}
              {index !== stats.length - 1 &&
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-stone"></div>
            }
            </div>
          )}
        </div>
      </div>
    </section>);

}