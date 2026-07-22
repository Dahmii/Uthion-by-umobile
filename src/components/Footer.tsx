export function Footer() {
  return (
    <footer className="bg-ink text-paper pt-20 pb-10">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="font-display text-3xl tracking-tight text-paper mb-6">
              Uthion<span className="text-accent">.</span>
            </div>
            <p className="text-stone/60 text-sm leading-relaxed max-w-xs mb-8">
              A premier strategic advisory firm partnering with market leaders
              to secure funding, optimize strategy, and institutionalize
              operational excellence.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-stone/20 flex items-center justify-center text-stone/60 hover:text-paper hover:border-paper transition-colors">
                
                <span className="sr-only">LinkedIn</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-stone/20 flex items-center justify-center text-stone/60 hover:text-paper hover:border-paper transition-colors">
                
                <span className="sr-only">Twitter</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-stone/40 mb-6">
              Expertise
            </h4>
            <ul className="space-y-4 text-sm text-stone/80">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Capital Structuring
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Corporate Strategy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Org Transformation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  M&A Advisory
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-stone/40 mb-6">
              Industries
            </h4>
            <ul className="space-y-4 text-sm text-stone/80">
              <li> Real Estate  </li>
              <li> Aviation </li>
              <li> Financial Services </li>
              <li> Technology </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-stone/40 mb-6">
              Locations
            </h4>
            <ul className="space-y-4 text-sm text-stone/80">
              <li>Lagos</li>
              <li>Abuja</li>
              <li>Ibadan</li>
              <li>Portharcourt</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone/50">
          <p>
            &copy; {new Date().getFullYear()} Uthion Strategic Advisory. All
            rights reserved.
          </p>
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
    </footer>);

}