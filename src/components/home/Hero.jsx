import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import Button from '../common/Button';

gsap.registerPlugin(SplitText);

const Hero = () => {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  
  useEffect(() => {
    if (heroRef.current && headingRef.current) {
      // Create our animation timeline
      const tl = gsap.timeline();
      
      // Split the text for character animation
      const splitHeading = new SplitText(headingRef.current, { type: "chars, words" });
      
      tl.from(splitHeading.chars, {
        opacity: 0,
        y: 50,
        rotationX: -90,
        stagger: 0.02,
        duration: 0.7,
        ease: "back.out(1.7)",
      });
      
      // Animate the background elements
      tl.from(".hero-bg-element", {
        scale: 0.8,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: "power3.out"
      }, "-=0.5");
      
      // Clean up split text on unmount
      return () => {
        splitHeading.revert();
      };
    }
  }, []);

  return (
    <div 
      ref={heroRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-scroll-section
    >
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src="/assets/images/hero-bg.jpg" 
          alt="Architecture Background" 
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback if image is not yet available
            e.target.parentElement.classList.add('bg-gradient-to-br', 'from-gray-900', 'to-black');
          }}
        />
      </div>
      
      {/* Animated decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-24 h-24 border-2 border-primary opacity-30 hero-bg-element" 
           style={{ transform: 'rotate(45deg)' }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-16 h-16 border border-white opacity-20 hero-bg-element"
           style={{ transform: 'rotate(15deg)' }}></div>
      <div className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full border border-primary opacity-10 hero-bg-element"></div>
      
      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 text-center">
        <motion.span 
          className="inline-block text-primary font-medium mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          ELEVATING ARCHITECTURE TO NEW HEIGHTS
        </motion.span>
        
        <h1 
          ref={headingRef} 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
        >
          Crafting Exceptional <br />
          <span className="text-primary">Architectural</span> Experiences
        </h1>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          From concept to completion, we transform architectural visions into breathtaking realities that inspire and endure.
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <Button to="/projects" variant="primary" size="large">
            View Our Projects
          </Button>
          <Button to="/contact" variant="outline" size="large">
            Contact Us
          </Button>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <a 
            href="#featured-projects" 
            className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300"
          >
            <span className="text-sm mb-2">Discover More</span>
            <div className="w-6 h-10 border border-white/50 rounded-full flex items-start justify-center p-1">
              <motion.div 
                className="w-1 h-2 bg-white rounded-full"
                animate={{ 
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              />
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;