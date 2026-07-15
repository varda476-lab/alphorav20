import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './index.css';

// Importing Components
import InteractiveNetworkBackground from './components/InteractiveNetworkBackground';
import CinematicPreloader from './components/CinematicPreloader';

// Importing Page Components
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import SolutionsPage from './pages/SolutionsPage';
import IndustriesPage from './pages/IndustriesPage';
import ProductsPage from './pages/ProductsPage';
import MarketplacePage from './pages/MarketplacePage';
import ResearchPage from './pages/ResearchPage';
import CommandCenterPage from './pages/CommandCenterPage';
import PlaygroundPage from './pages/PlaygroundPage';
import CalculatorPage from './pages/CalculatorPage';
import ArchitecturePage from './pages/ArchitecturePage';
import TrackerPage from './pages/TrackerPage';
import DashboardPage from './pages/DashboardPage';
import CareersPage from './pages/CareersPage';
import BlogPage from './pages/BlogPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    const hasSeenPreloader = sessionStorage.getItem('alphora_preloader_seen');
    if (!hasSeenPreloader) {
      setShowPreloader(true);
    }
  }, []);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
    sessionStorage.setItem('alphora_preloader_seen', 'true');
  };

  return (
    <>
      <AnimatePresence>
        {showPreloader && (
          <CinematicPreloader onComplete={handlePreloaderComplete} />
        )}
      </AnimatePresence>
      <ScrollToTop />
      <InteractiveNetworkBackground />
      <Routes>
      {/* Core Pages */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/solutions" element={<SolutionsPage />} />
      <Route path="/industries" element={<IndustriesPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/marketplace" element={<MarketplacePage />} />
      <Route path="/research" element={<ResearchPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/contact" element={<ContactPage />} />

      {/* Interactive Workspaces */}
      <Route path="/command-center" element={<CommandCenterPage />} />
      <Route path="/playground" element={<PlaygroundPage />} />
      <Route path="/calculator" element={<CalculatorPage />} />
      <Route path="/architecture" element={<ArchitecturePage />} />
      <Route path="/tracker" element={<TrackerPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/case-studies" element={<CaseStudiesPage />} />
    </Routes>
    </>
  );
}

export default App;
