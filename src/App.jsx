import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const Projects = React.lazy(() => import('./pages/Projects'));
const About = React.lazy(() => import('./pages/About'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const Services = React.lazy(() => import('./pages/Services'));
const Contact = React.lazy(() => import('./pages/Contact'));
const ProjectDetail = React.lazy(() => import('./pages/ProjectDetail'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService'));

function App() {
  const [loading, setLoading] = useState(true);
  
  // Simulate loading state for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-bg">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-text">Loading Bhardwaj Architect...</p>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <React.Suspense fallback={
              <div className="flex items-center justify-center h-[calc(100vh-200px)]">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </React.Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;