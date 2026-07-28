export function Footer() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-ink text-paper pt-20 pb-10">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="font-display text-3xl tracking-tight text-paper mb-6">
              Uthion<span className="text-accent">.</span>
            </div>
            <p className="text-stone/60 text-sm leading-relaxed max-w-xs mb-8">
              A strategic advisory firm helping businesses define their strategy, build capabilities, and secure the capital needed for sustainable growth.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-stone/20 flex items-center justify-center text-stone/60 hover:text-paper hover:border-paper transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-stone/20 flex items-center justify-center text-stone/60 hover:text-paper hover:border-paper transition-colors"
              >
                <span className="sr-only">X (formerly Twitter)</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Expertise Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-stone/40 mb-6">
              Expertise
            </h4>
            <ul className="space-y-4 text-sm text-stone/80">
              <li>
                <button
                  onClick={() => scrollTo('business-strategy')}
                  className="hover:text-accent transition-colors cursor-pointer text-left"
                >
                  Business Strategy
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('org-transformation')}
                  className="hover:text-accent transition-colors cursor-pointer text-left"
                >
                 Org Transformation
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('capital-structuring')}
                  className="hover:text-accent transition-colors cursor-pointer text-left"
                >
                  Capital Structuring
                </button>
              </li>
            </ul>
          </div>

          {/* Industries Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-stone/40 mb-6">
              Industries
            </h4>
            <ul className="space-y-4 text-sm text-stone/80">
              <li>
                <button
                  onClick={() => scrollTo('sectors')}
                  className="hover:text-accent transition-colors cursor-pointer text-left"
                >
                  Financial Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('sectors')}
                  className="hover:text-accent transition-colors cursor-pointer text-left"
                >
                  Aviation
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('sectors')}
                  className="hover:text-accent transition-colors cursor-pointer text-left"
                >
                  Healthcare
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('sectors')}
                  className="hover:text-accent transition-colors cursor-pointer text-left"
                >
                  Logistics
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone/50">
          <p>
            &copy; {new Date().getFullYear()} Uthion by Uspace. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">Developed by Uspace</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-paper transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-paper transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-paper transition-colors">
              Legal Notice
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}