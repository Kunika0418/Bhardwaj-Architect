import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const SectionHeading = ({ 
  title, 
  subtitle, 
  description = '', 
  alignment = 'left',
  underline = true
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };
  
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <motion.div 
      className={`max-w-3xl mb-12 ${alignmentClasses[alignment]}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {subtitle && (
        <motion.span 
          className="inline-block text-primary font-medium mb-2"
          variants={itemVariants}
        >
          {subtitle.toUpperCase()}
        </motion.span>
      )}
      
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-4"
        variants={itemVariants}
      >
        {title}
      </motion.h2>
      
      {underline && (
        <motion.div 
          className={`h-1 w-16 bg-primary mb-6 ${alignment === 'center' ? 'mx-auto' : alignment === 'right' ? 'ml-auto' : ''}`}
          variants={itemVariants}
        ></motion.div>
      )}
      
      {description && (
        <motion.p 
          className="text-text-light"
          variants={itemVariants}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

SectionHeading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  alignment: PropTypes.oneOf(['left', 'center', 'right']),
  underline: PropTypes.bool,
};

export default SectionHeading;