import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UnderConstruction } from './components/UnderConstruction';
import { ConsultationProvider } from './context/ConsultationContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Process } from './components/Process';
import { WhatWeDo } from './components/WhatWeDo';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Sectors } from './components/Sectors';
import { CaseStudies } from './components/CaseStudies';
import { Testimonials } from './components/Testimonials';
import { Leadership } from './components/Leadership';
import { Insights } from './components/Insights';
import { Contact } from './components/Contact';
import { CtaBlock } from './components/CtaBlock';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { LegalNotice } from './pages/LegalNotice';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && location.state && (location.state as any).scrollTo) {
      const sectionId = (location.state as any).scrollTo;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Slight delay allows DOM elements to render fully
    }
  }, [location]);

  return null;
}

export function App() {
  return (
    // <UnderConstruction />
    <BrowserRouter>
      <ScrollHandler />
      <ConsultationProvider>
        <div className="min-h-screen bg-paper font-sans text-ink selection:bg-accent selection:text-white">
          <Navbar />
          <main>
            <Routes>
              {/* Home Page Route */}
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    {/* <CaseStudies /> */}
                    <WhatWeDo />
                    <WhyChooseUs />
                    <Process />
                    <Sectors />
                    {/* <CtaBlock
                      eyebrow="Engage Uthion"
                      heading="planning your next strategic move?"
                      body="We help businesses make confident decisions about growth, capital, and operations." /> */}

                    {/* <Testimonials /> */}
                    {/* <Leadership /> */}
                    {/* <CtaBlock
                      variant="dark"
                      eyebrow="Partner With Us"
                      heading="Work directly with our advisory partners."
                      body="We take on a select number of engagements to ensure every client receives senior-level attention." /> */}

                    {/* <Insights /> */}
                    <Contact />
                    {/* <CtaBlock
                      variant="feature"
                      eyebrow="Begin the Conversation"
                      heading="Structure your next chapter of growth."
                      body="Tell us about your business objectives and our advisory team will review your request and recommend next steps." /> */}
                  </>
                }
              />

              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/legal" element={<LegalNotice />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ConsultationProvider>
    </BrowserRouter>
  );
}

export default App;