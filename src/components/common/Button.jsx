import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  to = null, 
  href = null, 
  onClick = null, 
  disabled = false,
  className = '',
  ...props 
}) => {
  // Button variant styles
  const variantClasses = {
    primary: 'bg-primary hover:bg-primary-light text-white shadow-md hover:shadow-lg',
    secondary: 'bg-secondary hover:bg-opacity-90 text-text shadow-md hover:shadow-lg',
    outline: 'bg-transparent border-2 border-primary hover:bg-primary/10 text-primary',
    ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-text',
    link: 'bg-transparent p-0 hover:text-primary text-text underline',
  };
  
  // Button size styles
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-6 py-3',
    large: 'px-8 py-4 text-lg',
    icon: 'p-2',
  };
  
  // Common button classes
  const baseClasses = `inline-flex items-center justify-center font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md ${
    disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'
  } ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  // Button animation
  const buttonVariants = {
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 }
    },
  };
  
  // If 'to' prop is provided, create a Link component for internal navigation
  if (to) {
    return (
      <motion.div
        whileTap="tap"
        whileHover={!disabled && "hover"}
        variants={buttonVariants}
      >
        <Link to={to} className={baseClasses} {...props}>
          {children}
        </Link>
      </motion.div>
    );
  }
  
  // If 'href' prop is provided, create an anchor tag for external links
  if (href) {
    return (
      <motion.div
        whileTap="tap"
        whileHover={!disabled && "hover"}
        variants={buttonVariants}
      >
        <a 
          href={href} 
          className={baseClasses}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      </motion.div>
    );
  }
  
  // If neither 'to' nor 'href' is provided, create a button element
  return (
    <motion.button
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      whileTap={!disabled && "tap"}
      whileHover={!disabled && "hover"}
      variants={buttonVariants}
      {...props}
    >
      {children}
    </motion.button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost', 'link']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'icon']),
  to: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;