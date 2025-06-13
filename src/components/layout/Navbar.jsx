import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
// import { ThemeContext } from '../../context/ThemeContext';
import ThemeContext from '../../context/ThemeContext';

import Logo from '../common/Logo';
import ThemeToggle from '../common/ThemeToggle';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useContext(ThemeContext);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location.pathname]);

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled
      ? `${theme === 'dark' ? 'bg-bg shadow-lg' : 'bg-white/90 backdrop-blur-sm shadow-lg'}`
      : 'bg-gradient-to-b from-black/70 to-transparent'
  }`;

  const getTextColor = () => {
    if (!isScrolled) return 'text-white';
    return theme === 'dark' ? 'text-white' : 'text-black';
  };

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  const handleNavClick = (e) => {
    const currentPath = window.location.pathname;
    const targetPath = e.currentTarget.getAttribute('href');
    
    if (currentPath === targetPath) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      className={navbarClasses}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4 px-4 md:px-0">
          <Link to="/" onClick={handleNavClick} className="flex items-center">
            <Logo size="default" isScrolled={isScrolled} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleNavClick}
                className={`font-medium transition-all duration-300 hover:text-primary ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : getTextColor()
                }`}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`hover:text-primary focus:outline-none ${getTextColor()}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className="fixed top-0 right-0 h-screen w-4/5 bg-bg-secondary md:hidden z-50 p-6 shadow-xl"
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={mobileMenuVariants}
      >
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setIsOpen(false)}
            className="text-text hover:text-primary"
            aria-label="Close menu"
          >
            <FaTimes size={24} />
          </button>
        </div>
        <div className="flex flex-col space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={(e) => {
                handleNavClick(e);
                setIsOpen(false);
              }}
              className={`font-medium text-lg transition-all duration-300 hover:text-primary ${
                location.pathname === item.path
                  ? 'text-primary'
                  : 'text-text'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;