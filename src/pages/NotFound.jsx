import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import AnimatedSection from '../components/common/AnimatedSection';
import Button from '../components/common/Button';
import { FaArrowLeft, FaHome } from 'react-icons/fa';

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Helmet>
        <title>Page Not Found | Bhardwaj Architect</title>
        <meta name="description" content="The page you are looking for cannot be found." />
      </Helmet>
      
      <AnimatedSection className="min-h-[80vh] flex flex-col items-center justify-center py-16 px-4 text-center" animation="fade-in">
        <div className="max-w-lg">
          <div className="mb-8">
            <div className="text-9xl font-bold text-primary">404</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h1>
            <p className="text-text-light mb-8">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/" variant="primary">
              <FaHome className="mr-2" /> Back to Home
            </Button>
            <Button onClick={() => window.history.back()} variant="outline">
              <FaArrowLeft className="mr-2" /> Go Back
            </Button>
          </div>
          
          <div className="mt-12">
            <p className="text-text-light text-sm">
              Lost? Explore our <Link to="/projects" className="text-primary hover:underline">projects</Link> or 
              <Link to="/contact" className="text-primary hover:underline"> contact us</Link> for assistance.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </motion.div>
  );
};

export default NotFound;