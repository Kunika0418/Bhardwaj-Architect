import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Logo = ({ size = 'default' }) => {
  const sizeClasses = {
    small: 'h-6',
    default: 'h-8',
    large: 'h-10',
  };
  
  return (
    <Link to="/" className="flex items-center">
      <div className="mr-2">
        <img 
          src="/assets/images/logo.png" 
          alt="Bhardwaj Architect" 
          className={`${sizeClasses[size]}`}
          onError={(e) => {
            // Fallback to text if logo image is not available
            e.target.style.display = 'none';
          }}
        />
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-semibold text-primary">Bhardwaj</span>
        <span className="text-sm text-text">Architect</span>
      </div>
    </Link>
  );
};

Logo.propTypes = {
  size: PropTypes.oneOf(['small', 'default', 'large']),
};

export default Logo;