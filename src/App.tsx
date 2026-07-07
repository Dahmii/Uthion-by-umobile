import { ConsultationProvider } from './context/ConsultationContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Process } from './components/Process';
import { WhatWeDo } from './components/WhatWeDo';
import { Sectors } from './components/Sectors';
import { CaseStudies } from './components/CaseStudies';
import { Testimonials } from './components/Testimonials';
import { Leadership } from './components/Leadership';
import { Insights } from './components/Insights';
import { Contact } from './components/Contact';
import { CtaBlock } from './components/CtaBlock';
import { Footer } from './components/Footer';
export function App() {
  return (
    <ConsultationProvider>
      <div className="min-h-screen bg-paper font-sans text-ink selection:bg-accent selection:text-white">
        <Navbar />
        <main>
          <Hero />
          {/* <CaseStudies /> */}
          <WhatWeDo />
          <Process />
          <Sectors />
          <CtaBlock
            eyebrow="Engage Uthion"
            heading="Considering a strategic move in your sector?"
            body="Our partners advise on the capital and operational decisions that define market leaders." />
          
          <Testimonials />
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
          
        </main>
        <Footer />
      </div>
    </ConsultationProvider>);

}