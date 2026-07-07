import { useEffect, useState } from 'react';
import { useConsultation } from '../context/ConsultationContext';

export function Navbar() {
  const { open } = useConsultation();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu visibility

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen 
          ? 'bg-paper/95 backdrop-blur-md border-b border-stone py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-container mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center w-8 space-x-4 md:space-x-6 z-50">
          <img src="./ulogo.svg" alt="Uthion Logo" className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-ink.soft">
          <button onClick={() => scrollTo('what-we-do')} className="hover:text-accent transition-colors">Expertise</button>
          <button onClick={() => scrollTo('process')} className="hover:text-accent transition-colors">Process</button>
          <button onClick={() => scrollTo('sectors')} className="hover:text-accent transition-colors">Industries</button>
          <button onClick={() => scrollTo('contact')} className="hidden lg:inline-block text-sm font-medium text-ink hover:text-accent transition-colors">Contact</button>
        </div>

        {/* Action Buttons & Mobile Toggle */}
        <div className="flex items-center space-x-4 md:space-x-6 z-50">
          
          <button
            onClick={open}
            className="hidden lg:inline-block bg-ink text-white px-4 md:px-6 py-2.5 text-xs md:text-sm font-medium rounded-full hover:bg-accent transition-colors whitespace-nowrap"
          >
            Request a Consultation
          </button>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-ink focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                // Close Icon (X)
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                // Hamburger Icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide-down Overlay */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[73px] bg-paper border-b border-stone transition-all duration-300 ease-in-out z-40 ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-6 space-y-5 text-base font-medium text-ink">
          <button onClick={() => scrollTo('what-we-do')} className="text-left py-2 border-b border-stone/30 hover:text-accent">Expertise</button>
          <button onClick={() => scrollTo('process')} className="text-left py-2 border-b border-stone/30 hover:text-accent">Process</button>
          <button onClick={() => scrollTo('sectors')} className="text-left py-2 border-b border-stone/30 hover:text-accent">Industries</button>
          <button onClick={() => scrollTo('contact')} className="text-left py-2 text-ink.soft hover:text-accent">Contact</button>
        </div>
      </div>
    </nav>
  );
}