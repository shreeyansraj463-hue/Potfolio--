import React, { useState } from 'react';
import { DrawerType, ToastMessage } from './types';
import { ImageRevealBackground } from './components/ImageRevealBackground';
import { Header } from './components/Header';
import { MainHero } from './components/MainHero';
import { HeroSection } from './components/HeroSection';
import { ArchiveSections } from './components/ArchiveSections';
import { SideDrawer } from './components/SideDrawer';
import { Toast } from './components/Toast';

export default function App() {
  const [activeDrawer, setActiveDrawer] = useState<DrawerType>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (message: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  const handleNavigateSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="h-screen w-full overflow-y-auto snap-y snap-proximity scroll-smooth bg-white text-black font-jakarta relative selection:bg-black selection:text-white">
      {/* Interactive Spotlight Image Reveal & Grid Background for Design 1 */}
      <ImageRevealBackground />

      {/* Main UI Scroll Flow */}
      <div className="relative z-10 w-full flex flex-col">
        {/* Fixed Header */}
        <Header
          activeDrawer={activeDrawer}
          onOpenDrawer={(drawer) => setActiveDrawer(drawer)}
          onNavigateSection={handleNavigateSection}
        />

        {/* Section 1: Design 1 (SHREEYANS RAJ Archive Hero with Interactive Spotlight Image Reveal) */}
        <div id="hero" className="w-full h-screen snap-start snap-always relative overflow-hidden shrink-0">
          <MainHero
            onScrollToAbout={() => handleNavigateSection('neuralkinetics')}
            onScrollToWork={() => handleNavigateSection('work')}
          />
        </div>

        {/* Section 2: Design 2 (NeuralKinetics Video Hero Section) */}
        <div id="neuralkinetics" className="w-full h-screen snap-start snap-always relative overflow-hidden shrink-0">
          <HeroSection onMenuClick={() => setActiveDrawer('ABOUT')} />
        </div>

        {/* Section 3 (About), Section 4 (Work), Section 5 (Contact) on Scroll */}
        <ArchiveSections onShowToast={showToast} />
      </div>

      {/* Right Side Drawers */}
      <SideDrawer
        activeDrawer={activeDrawer}
        onClose={() => setActiveDrawer(null)}
        onShowToast={showToast}
      />

      {/* Toast Notifications */}
      <Toast toasts={toasts} />
    </div>
  );
}



