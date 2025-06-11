import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from '../components/common/SectionHeading';
import AnimatedSection from '../components/common/AnimatedSection';
import Button from '../components/common/Button';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaWhatsapp,
  FaPaperPlane
} from 'react-icons/fa';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const mapRef = useRef(null);
  const formRef = useRef(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  
  useEffect(() => {
    // Initialize map
    if (mapRef.current) {
      // In a real application, you would initialize a Google Map or another map service here
      // For demonstration purposes, we'll just add some basic animation to the map container
      gsap.fromTo(
        mapRef.current,
        { 
          opacity: 0,
          scale: 0.9
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: mapRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
    
    // Form animations
    if (formRef.current) {
      const formElements = formRef.current.querySelectorAll('.form-element');
      
      gsap.fromTo(
        formElements,
        { 
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  }, []);
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };
  
  // Validate form
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    return errors;
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Simulate form submission
    setFormSubmitting(true);
    
    // In a real application, you would send the form data to a server here
    // Simulating API call with timeout
    setTimeout(() => {
      setFormSubmitting(false);
      setFormSubmitted(true);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  // Page transition variants
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4
      }
    }
  };
  
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Helmet>
        <title>Contact Us | Bhardwaj Architect</title>
        <meta name="description" content="Get in touch with Bhardwaj Architect for inquiries about our services, collaborations, or to schedule a consultation." />
      </Helmet>
      
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src="/assets/images/contact-hero.jpg" 
            alt="Bhardwaj Architect Contact" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.parentElement.classList.add('bg-gradient-to-br', 'from-gray-900', 'to-gray-700');
            }}
          />
        </div>
        
        <div className="container relative z-20 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Get in touch with our team to discuss your architectural project
          </p>
        </div>
      </div>
      
      {/* Contact Information Section */}
      <AnimatedSection className="section bg-bg" animation="fade-up">
        <div className="container mx-auto">
          <SectionHeading
            title="Get In Touch"
            subtitle="Contact Information"
            description="Have questions or ready to start your project? Reach out to us using any of the following methods."
            alignment="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <motion.div
              className="bg-bg-secondary p-6 rounded-lg shadow-md text-center border-t-2 border-primary/20 hover:border-primary transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="text-2xl text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-text-light">
                123 Architecture Avenue<br />
                Delhi,<br />
                India
              </p>
            </motion.div>
            
            <motion.div
              className="bg-bg-secondary p-6 rounded-lg shadow-md text-center border-t-2 border-primary/20 hover:border-primary transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <FaPhoneAlt className="text-2xl text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-text-light">
                <a href="tel:+919876543210" className="hover:text-primary transition-colors">+91 98765 43210</a><br />
                <a href="tel:+919998887770" className="hover:text-primary transition-colors">+91 99988 87770</a>
              </p>
            </motion.div>
            
            <motion.div
              className="bg-bg-secondary p-6 rounded-lg shadow-md text-center border-t-2 border-primary/20 hover:border-primary transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="text-2xl text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-text-light">
                <a href="mailto:info@bhardwajarchitect.com" className="hover:text-primary transition-colors">info@bhardwajarchitect.com</a><br />
                <a href="mailto:careers@bhardwajarchitect.com" className="hover:text-primary transition-colors">careers@bhardwajarchitect.com</a>
              </p>
            </motion.div>
            
            <motion.div
              className="bg-bg-secondary p-6 rounded-lg shadow-md text-center border-t-2 border-primary/20 hover:border-primary transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-2xl text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
              <p className="text-text-light">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </motion.div>
          </div>
          
          {/* Social Media Links */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex justify-center space-x-4">
              <motion.a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-bg-secondary text-text hover:bg-primary hover:text-white flex items-center justify-center shadow-md transition-colors duration-300"
                whileHover={{ y: -5 }}
              >
                <FaFacebookF />
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-bg-secondary text-text hover:bg-primary hover:text-white flex items-center justify-center shadow-md transition-colors duration-300"
                whileHover={{ y: -5 }}
              >
                <FaTwitter />
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-bg-secondary text-text hover:bg-primary hover:text-white flex items-center justify-center shadow-md transition-colors duration-300"
                whileHover={{ y: -5 }}
              >
                <FaInstagram />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-bg-secondary text-text hover:bg-primary hover:text-white flex items-center justify-center shadow-md transition-colors duration-300"
                whileHover={{ y: -5 }}
              >
                <FaLinkedinIn />
              </motion.a>
              <motion.a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-bg-secondary text-text hover:bg-primary hover:text-white flex items-center justify-center shadow-md transition-colors duration-300"
                whileHover={{ y: -5 }}
              >
                <FaWhatsapp />
              </motion.a>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Contact Form and Map Section */}
      <AnimatedSection className="section bg-bg-secondary" animation="fade-up">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <SectionHeading
                title="Send Us a Message"
                subtitle="Get in Touch"
                alignment="left"
              />
              
              {formSubmitted && (
                <motion.div 
                  className="mb-8 p-4 bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-200 rounded-lg"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="font-medium">Thank you for your message!</p>
                  <p>We'll get back to you as soon as possible.</p>
                </motion.div>
              )}
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 mt-6">
                <div className="form-element">
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Name *
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-md bg-bg border ${formErrors.name ? 'border-red-500' : 'border-border'} focus:border-primary focus:outline-none transition-colors`}
                    placeholder="Your name"
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
                  )}
                </div>
                
                <div className="form-element">
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email *
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-md bg-bg border ${formErrors.email ? 'border-red-500' : 'border-border'} focus:border-primary focus:outline-none transition-colors`}
                    placeholder="Your email"
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                  )}
                </div>
                
                <div className="form-element">
                  <label htmlFor="phone" className="block mb-2 font-medium">
                    Phone (Optional)
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-md bg-bg border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div className="form-element">
                  <label htmlFor="subject" className="block mb-2 font-medium">
                    Subject *
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-md bg-bg border ${formErrors.subject ? 'border-red-500' : 'border-border'} focus:border-primary focus:outline-none transition-colors`}
                    placeholder="Subject of your message"
                  />
                  {formErrors.subject && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.subject}</p>
                  )}
                </div>
                
                <div className="form-element">
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Message *
                  </label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className={`w-full px-4 py-3 rounded-md bg-bg border ${formErrors.message ? 'border-red-500' : 'border-border'} focus:border-primary focus:outline-none transition-colors`}
                    placeholder="Your message"
                  ></textarea>
                  {formErrors.message && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>
                  )}
                </div>
                
                <div className="form-element">
                  <button 
                    type="submit" 
                    className={`px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-md font-medium flex items-center justify-center transition-colors ${formSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                    disabled={formSubmitting}
                  >
                    {formSubmitting ? (
                      <>
                        <span className="mr-2">Sending...</span>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      </>
                    ) : (
                      <>
                        Send Message
                        <FaPaperPlane className="ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
            
            {/* Map */}
            <div>
              <SectionHeading
                title="Our Location"
                subtitle="Find Us"
                alignment="left"
              />
              
              <div 
                ref={mapRef}
                className="w-full h-[400px] mt-6 rounded-lg overflow-hidden shadow-lg"
              >
                {/* In a real application, you would embed a Google Map or similar here */}
                {/* For now, we'll use a placeholder image */}
                <div className="w-full h-full bg-bg relative flex items-center justify-center border border-border overflow-hidden">
                  <img 
                    src="/assets/images/map.jpg" 
                    alt="Bhardwaj Architect Office Location" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const mapPlaceholder = document.createElement('div');
                      mapPlaceholder.className = 'absolute inset-0 flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-800';
                      
                      const mapIcon = document.createElement('div');
                      mapIcon.className = 'text-5xl mb-4 text-primary';
                      mapIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>';
                      
                      const mapText = document.createElement('div');
                      mapText.className = 'text-lg font-semibold';
                      mapText.textContent = 'Bhardwaj Architect';
                      
                      const mapAddress = document.createElement('div');
                      mapAddress.className = 'text-sm text-text-light text-center px-4';
                      mapAddress.textContent = '123 Architecture Avenue, Mumbai, Maharashtra 400001, India';
                      
                      mapPlaceholder.appendChild(mapIcon);
                      mapPlaceholder.appendChild(mapText);
                      mapPlaceholder.appendChild(mapAddress);
                      
                      e.target.parentElement.appendChild(mapPlaceholder);
                      e.target.style.display = 'none';
                    }}
                  />
                  
                  {/* Location Marker Overlay */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      className="relative"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <FaMapMarkerAlt className="text-4xl text-primary drop-shadow-lg" />
                      <motion.div 
                        className="w-6 h-6 bg-primary/30 rounded-full absolute -bottom-3 -left-1"
                        animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                      ></motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* Address Card */}
              <div className="mt-6 bg-bg p-6 rounded-lg shadow-md border border-border">
                <h3 className="text-lg font-semibold mb-3">Bhardwaj Architect</h3>
                <p className="text-text-light mb-4">
                  123 Architecture Avenue<br />
                  Delhi<br />
                  India
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.google.com/maps" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-light font-medium transition-colors"
                  >
                    Get Directions
                  </a>
                  <a 
                    href="tel:+919876543210" 
                    className="text-primary hover:text-primary-light font-medium transition-colors"
                  >
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* FAQ Section */}
      <AnimatedSection className="section bg-bg" animation="fade-up">
        <div className="container mx-auto">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="FAQs"
            description="Find answers to commonly asked questions about our services."
            alignment="center"
          />
          
          <div className="mt-12 max-w-3xl mx-auto space-y-6">
            <div className="bg-bg-secondary p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">What services do you provide?</h3>
              <p className="text-text-light">
                We offer a comprehensive range of architectural services including architectural design, interior design, urban planning, landscape design, project management, 3D visualization, and sustainable design solutions.
              </p>
            </div>
            
            <div className="bg-bg-secondary p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">How do I start a project with your firm?</h3>
              <p className="text-text-light">
                Starting a project is easy! Contact us through our form, phone, or email to schedule an initial consultation. We'll discuss your vision, requirements, and budget to develop a tailored approach for your project.
              </p>
            </div>
            
            <div className="bg-bg-secondary p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Do you work on projects outside of Mumbai?</h3>
              <p className="text-text-light">
                Yes, we work on projects throughout India and have experience with international projects as well. Our team is equipped to handle remote consultations and site visits as required.
              </p>
            </div>
            
            <div className="bg-bg-secondary p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">What is your design process?</h3>
              <p className="text-text-light">
                Our design process includes six key phases: Discovery, Concept Design, Design Development, Documentation, Implementation, and Completion. We ensure client collaboration at every stage to bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Call To Action */}
      <AnimatedSection className="section bg-bg-secondary" animation="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Vision?</h2>
          <p className="text-text-light mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation and take the first step towards creating exceptional architectural spaces.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="tel:+919876543210" variant="primary">
              <FaPhoneAlt className="mr-2" /> Call Us Now
            </Button>
            <Button href="https://wa.me/919876543210" variant="outline">
              <FaWhatsapp className="mr-2" /> WhatsApp
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </motion.div>
  );
};

export default Contact;