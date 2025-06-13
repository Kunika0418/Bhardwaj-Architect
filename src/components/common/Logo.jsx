import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ThemeContext from '../../context/ThemeContext';

const Logo = ({ size = 'default', isScrolled = false }) => {
  const { theme } = useContext(ThemeContext);
  const sizeClasses = {
    small: 'h-8',
    default: 'h-10',
    large: 'h-12',
  };

  const getTextColor = () => {
    if (!isScrolled) return 'text-white';
    return theme === 'dark' ? 'text-white' : 'text-text';
  };
  
  return (
    <Link to="/" className="flex items-center">
      <div className="mr-3">
        <img 
          src="/assets/images/logo.jpeg" 
          alt="Bhardwaj Architect" 
          className={`${sizeClasses[size]} rounded-lg drop-shadow-xl`}
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>
      <div className="flex flex-col">
        <span className={`text-xl font-bold tracking-wide ${getTextColor()} drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]`}>Bhardwaj</span>
        <span className={`text-sm tracking-wider font-semibold ${getTextColor()} drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]`}>Architects</span>
      </div>
    </Link>
  );
};

Logo.propTypes = {
  size: PropTypes.oneOf(['small', 'default', 'large']),
  isScrolled: PropTypes.bool
};

export default Logo;