import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../common/Logo';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };
  
  return (
    <motion.footer 
      className="bg-bg-secondary text-text pt-16 pb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo />
            <p className="mt-4 text-text-light">
              Excellence in architectural design and innovation, creating spaces that inspire and endure.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-primary transition-colors duration-300">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-primary transition-colors duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-primary transition-colors duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-primary transition-colors duration-300">
                <FaLinkedin size={20} />
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-primary transition-colors duration-300">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-text-light hover:text-primary transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/projects" className="text-text-light hover:text-primary transition-colors duration-300">Projects</Link>
              </li>
              <li>
                <Link to="/about" className="text-text-light hover:text-primary transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-text-light hover:text-primary transition-colors duration-300">Gallery</Link>
              </li>
              <li>
                <Link to="/services" className="text-text-light hover:text-primary transition-colors duration-300">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-text-light hover:text-primary transition-colors duration-300">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services#architectural-design" className="text-text-light hover:text-primary transition-colors duration-300">Architectural Design</Link>
              </li>
              <li>
                <Link to="/services#interior-design" className="text-text-light hover:text-primary transition-colors duration-300">Interior Design</Link>
              </li>
              <li>
                <Link to="/services#urban-planning" className="text-text-light hover:text-primary transition-colors duration-300">Urban Planning</Link>
              </li>
              <li>
                <Link to="/services#landscape-design" className="text-text-light hover:text-primary transition-colors duration-300">Landscape Design</Link>
              </li>
              <li>
                <Link to="/services#project-management" className="text-text-light hover:text-primary transition-colors duration-300">Project Management</Link>
              </li>
              <li>
                <Link to="/services#3d-visualization" className="text-text-light hover:text-primary transition-colors duration-300">3D Visualization</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-primary mt-1 mr-3" />
                <span className="text-text-light">Bhardwaj Architects, Najafgarh, New Delhi, 110043</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-primary mr-3" />
                <a href="tel:+1234567890" className="text-text-light hover:text-primary transition-colors duration-300">+91-8700683138</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-primary mr-3" />
                <a href="mailto:info@bhardwajarchitect.com" className="text-text-light hover:text-primary transition-colors duration-300">info@bhardwajarchitect.com</a>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="text-primary mr-3" />
                <a href="https://wa.me/1234567890" className="text-text-light hover:text-primary transition-colors duration-300">WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-light text-sm">
              &copy; {currentYear} Bhardwaj Architect. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 space-x-4">
              <Link to="/privacy-policy" className="text-sm text-text-light hover:text-primary transition-colors duration-300">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-sm text-text-light hover:text-primary transition-colors duration-300">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;