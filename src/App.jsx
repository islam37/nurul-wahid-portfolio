import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import AnimatedBackground from './components/animations/AnimatedBackground';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <AnimatedBackground />
        <div className="min-h-screen flex flex-col relative z-10 bg-gradient-to-b from-navy/40 via-charcoal/40 to-navy/40">
          <Navbar />
          <AnimatePresence mode="wait">
            <main className="flex-grow">
              <Routes>
                <Route index element={<HomePage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>
          </AnimatePresence>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;