import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ 
  children, 
  className = "", 
  animation = "fade-up", 
  duration = 0.8,
  delay = 0, 
  triggerOnce = true, 
  threshold = 0.1,
  stagger = 0.1,
  ...props 
}) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
  });

  // Define animation variants
  const variants = {
    // Fade up animation (default)
    "fade-up": {
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration,
          ease: "easeOut",
          delay,
          staggerChildren: stagger,
        }
      },
      hidden: { 
        opacity: 0, 
        y: 50 
      },
    },
    // Fade in animation
    "fade-in": {
      visible: { 
        opacity: 1,
        transition: {
          duration,
          ease: "easeOut",
          delay,
          staggerChildren: stagger,
        }
      },
      hidden: { 
        opacity: 0 
      },
    },
    // Slide in from left
    "slide-left": {
      visible: { 
        opacity: 1, 
        x: 0,
        transition: {
          duration,
          ease: "easeOut",
          delay,
          staggerChildren: stagger,
        }
      },
      hidden: { 
        opacity: 0, 
        x: -100 
      },
    },
    // Slide in from right
    "slide-right": {
      visible: { 
        opacity: 1, 
        x: 0,
        transition: {
          duration,
          ease: "easeOut",
          delay,
          staggerChildren: stagger,
        }
      },
      hidden: { 
        opacity: 0, 
        x: 100 
      },
    },
    // Scale up animation
    "scale-up": {
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: {
          duration,
          ease: "easeOut",
          delay,
          staggerChildren: stagger,
        }
      },
      hidden: { 
        opacity: 0, 
        scale: 0.8 
      },
    },
    // Zoom in animation
    "zoom-in": {
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: {
          duration: duration * 1.2,
          ease: "easeOut",
          delay,
          staggerChildren: stagger,
        }
      },
      hidden: { 
        opacity: 0, 
        scale: 0.5 
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants[animation]}
      {...props}
    >
      {children}
    </motion.div>
  );
};

AnimatedSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  animation: PropTypes.oneOf(["fade-up", "fade-in", "slide-left", "slide-right", "scale-up", "zoom-in"]),
  duration: PropTypes.number,
  delay: PropTypes.number,
  triggerOnce: PropTypes.bool,
  threshold: PropTypes.number,
  stagger: PropTypes.number,
};

export default AnimatedSection;