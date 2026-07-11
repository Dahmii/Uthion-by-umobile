import React from 'react';

export function UnderConstruction() {
  return (
    <div className="min-h-screen bg-paper flex flex-col justify-center items-center p-6 text-ink overflow-hidden relative">
      
      {/* Central Content */}
      <div className="flex flex-col items-center max-w-sm text-center space-y-6 z-10">
        {/* Minimal Logo Asset */}
        <div className="w-10 h-auto opacity-90">
          <img src="./ulogo.svg" alt="Uthion Logo" className="w-full h-auto" />
        </div>

        {/* Core Message */}
        <div className="space-y-2">
          <h1 className="font-display text-2xl font-normal tracking-tight">
            Uthion<span className="text-accent">.</span>
          </h1>
          <p className="text-sm font-light text-ink/50 tracking-wide">
            Our website is currently under construction.
          </p>
        </div>
      </div>

      {/* Yellow Construction Tape (Bottom Left to Right) */}
      <div className="absolute bottom-12 left-[-10%] right-[-10%] h-12 bg-[#facc15] shadow-lg flex items-center justify-center overflow-hidden rotate-[-3deg] select-none pointer-events-none">
        {/* Repeating Hazard Stripe Pattern */}
        <div 
          className="absolute inset-0 opacity-20 w-[200%]" 
          style={{
            backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, transparent)',
            backgroundSize: '40px 40px'
          }}
        />
        {/* Tape Bold Text Overlay */}
        <span className="font-mono text-xs font-black tracking-widest text-black/80 uppercase whitespace-nowrap mx-4">
          UNDER CONSTRUCTION &bull; CAUTION &bull; BUILDING SYSTEM &bull; UNDER CONSTRUCTION &bull; CAUTION &bull; BUILDING SYSTEM
        </span>
      </div>

    </div>
  );
}