import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Hero from '../components/home/Hero';
import FeaturedProjects from '../components/home/FeaturedProjects';
import AboutSection from '../components/home/AboutSection';
import ServiceSection from '../components/home/ServiceSection';
import TestimonialSection from '../components/home/TestimonialSection';
import AnimatedSection from '../components/common/AnimatedSection';
import { initLocomotiveScroll } from '../utils/animations';

const Home = () => {
  useEffect(() => {
    // Initialize locomotive scroll
    const scrollContainer = document.querySelector('#scroll-container');
    
    if (scrollContainer) {
      let locoScroll;
      
      initLocomotiveScroll(scrollContainer)
        .then((scroll) => {
          locoScroll = scroll;
          
          // Update scroll on image load
          window.addEventListener('load', () => {
            locoScroll.update();
          });
          
          // Update scroll when browser is resized
          window.addEventListener('resize', () => {
            locoScroll.update();
          });
        });
      
      return () => {
        if (locoScroll) {
          locoScroll.destroy();
        }
      };
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Bhardwaj Architect | Premium Architecture & Design</title>
        <meta name="description" content="Bhardwaj Architect - Transforming spaces with innovative design and exceptional architecture services." />
      </Helmet>
      
      <div id="scroll-container" data-scroll-container>
        <Hero />
        
        <AnimatedSection className="bg-bg" animation="fade-up">
          <FeaturedProjects />
        </AnimatedSection>
        
        <AnimatedSection className="bg-bg-secondary" animation="fade-up">
          <AboutSection />
        </AnimatedSection>
        
        <AnimatedSection className="bg-bg" animation="fade-up">
          <ServiceSection />
        </AnimatedSection>
        
        <AnimatedSection className="bg-bg-secondary" animation="fade-up">
          <TestimonialSection />
        </AnimatedSection>
        
        <AnimatedSection className="bg-bg py-16 lg:py-24" animation="fade-up">
          <div className="container mx-auto px-4 text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity:
1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your <span className="text-primary">Vision</span>?
            </motion.h2>
            <motion.p 
              className="text-text-light mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's collaborate to bring your architectural dreams to life. Our team of expert architects and designers are ready to create exceptional spaces just for you.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a href="/contact" className="btn shadow-lg">
                Get in Touch
              </a>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
};

export default Home;