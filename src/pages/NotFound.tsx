import { useEffect } from 'react';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function NotFound() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Page not found | Uthion';
    window.scrollTo({ top: 0, behavior: 'instant' });
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#F8F7F4] px-6 pb-20 pt-32 text-center" aria-labelledby="not-found-title">
      <div className="relative mx-auto flex w-full max-w-xl flex-col items-center">
        <p className="mb-8 text-xs font-medium uppercase tracking-[0.22em] text-ink-muted">A small detour</p>

        <div aria-hidden="true" className="mb-8 flex items-center justify-center gap-2 sm:gap-4">
          <span className="font-display text-[clamp(7rem,23vw,12rem)] font-light leading-none tracking-tightest">4</span>
          <div className="relative flex h-[clamp(6rem,20vw,10rem)] w-[clamp(6rem,20vw,10rem)] items-center justify-center rounded-full border border-accent/25 bg-accent/[0.03]">
            <span className="absolute inset-2 rounded-full border border-dashed border-accent/20 sm:inset-3" />
            <span className="absolute top-2 text-[10px] font-medium text-accent sm:top-3">N</span>
            <span className="absolute bottom-2 h-1 w-1 rounded-full bg-accent/30 sm:bottom-3" />
            <span className="absolute left-2 h-1 w-1 rounded-full bg-accent/30 sm:left-3" />
            <span className="absolute right-2 h-1 w-1 rounded-full bg-accent/30 sm:right-3" />
            <svg className="not-found-needle h-3/4 w-3/4 text-accent" viewBox="0 0 100 100" fill="none">
              <path d="M50 13L61 50H39L50 13Z" fill="currentColor" />
              <path d="M50 87L39 50H61L50 87Z" fill="currentColor" opacity="0.18" />
              <circle cx="50" cy="50" r="5" fill="#F8F7F4" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <span className="font-display text-[clamp(7rem,23vw,12rem)] font-light leading-none tracking-tightest">4</span>
        </div>

        <h1 id="not-found-title" className="font-display text-4xl font-light tracking-tight sm:text-5xl">Slightly <span className="italic text-accent">off course.</span></h1>
        <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-muted sm:text-base">The page you're looking for may have moved or doesn't exist. Let's get you heading in the right direction.</p>
        <div className="mt-9 flex flex-col items-center gap-5 sm:flex-row sm:gap-7">
          <Link to="/" className="inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
            <ArrowLeft size={16} aria-hidden="true" /> Back to home
          </Link>
          {/* <Link to="/" state={{ scrollTo: 'contact' }} className="inline-flex items-center gap-2 rounded-sm py-2 text-sm font-medium text-ink-soft transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
            Talk to us <ArrowUpRight size={16} aria-hidden="true" />
          </Link> */}
        </div>
        <p className="mt-12 text-[10px] uppercase tracking-[0.2em] text-ink-muted">Clear direction. Even from here.</p>
      </div>
    </section>
  );
}
