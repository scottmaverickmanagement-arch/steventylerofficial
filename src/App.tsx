import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { FanbaseSection } from './components/sections/FanbaseSection';
import { AerosmithSection } from './components/sections/AerosmithSection';
import { DiscographySection } from './components/sections/DiscographySection';
import { TimelineSection } from './components/sections/TimelineSection';

import { GallerySection } from './components/sections/GallerySection';
import { ContactSection } from './components/sections/ContactSection';
export function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-inter selection:bg-[#d4af37] selection:text-black">
      <Header />
      <main>
        <HeroSection />
        <FanbaseSection />
        <AerosmithSection />
        <DiscographySection />
        <TimelineSection />

        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>);

}