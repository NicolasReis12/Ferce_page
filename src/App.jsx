import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import LoadingScreen  from './components/LoadingScreen';
import Navbar         from './components/Navbar';
import HeroSection    from './components/HeroSection';
import AboutSection   from './components/AboutSection';
import GallerySection from './components/GallerySection';
import ResultsSection from './components/ResultsSection';
import BenefitsSection from './components/BenefitsSection';
import CTASection     from './components/CTASection';
import Footer         from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 2800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="bg-[#050505] overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Navbar />
          <main>
            <HeroSection    />
            <AboutSection   />
            <GallerySection />
            <ResultsSection />
            <BenefitsSection />
            <CTASection     />
          </main>
          <Footer />
          <WhatsAppButton />
        </motion.div>
      )}
    </div>
  );
}
