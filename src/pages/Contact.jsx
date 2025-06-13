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
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setFormSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/manjovag", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setFormSubmitted(true);
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
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormErrors({
        submit: 'Failed to send message. Please try again later.'
      });
    } finally {
      setFormSubmitting(false);
    }
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
            src="/assets/images/backgrounds/contact-bg.png" 
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
      <AnimatedSection className="section section-bg contact-bg" animation="fade-up">
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
                Bhardwaj Architects<br />
                Najafgarh, New Delhi, 110043<br />
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
                <a href="tel:+918700683138" className="hover:text-primary transition-colors">+91-8700683138</a><br />
                <a href="tel:+918700683138" className="hover:text-primary transition-colors">+91-8700683138</a>
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
                <a href="mailto:info@bhardwajarchitect.com" className="hover:text-primary transition-colors">info@bhardwajarchitects.in</a><br />
                
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
                href="https://www.instagram.com/bhardwaj_architects?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-bg-secondary text-text hover:bg-primary hover:text-white flex items-center justify-center shadow-md transition-colors duration-300"
                whileHover={{ y: -5 }}
              >
                <FaInstagram />
              </motion.a>
              {/* <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-bg-secondary text-text hover:bg-primary hover:text-white flex items-center justify-center shadow-md transition-colors duration-300"
                whileHover={{ y: -5 }}
              >
                <FaLinkedinIn />
              </motion.a> */}
              <motion.a 
                href="https://wa.me/91-8700683138" 
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
      <AnimatedSection className="section section-bg contact-bg" animation="fade-up">
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
              
              {formErrors.submit && (
                <motion.div 
                  className="mb-8 p-4 bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-200 rounded-lg"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="font-medium">Error</p>
                  <p>{formErrors.submit}</p>
                </motion.div>
              )}
              
              <form 
                ref={formRef} 
                onSubmit={handleSubmit} 
                className="space-y-6 mt-6"
              >
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
                    required
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
                    required
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                  )}
                </div>
                
                <div className="form-element">
                  <label htmlFor="phone" className="block mb-2 font-medium">
                    Phone
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
                    placeholder="Message subject"
                    required
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
                    required
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
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3502.598612098206!2d76.974227!3d28.611816!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0f63e47a820f%3A0x9bccd099845f0da1!2sBHARDWAJ%20ARCHITECTS!5e0!3m2!1sen!2sin!4v1749794415931!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bhardwaj Architects Location"
                ></iframe>
              </div>
              
              {/* Address Card */}
              <div className="mt-6 bg-bg p-6 rounded-lg shadow-md border border-border">
                <h3 className="text-lg font-semibold mb-3">Bhardwaj Architect</h3>
                <p className="text-text-light mb-4">
                  Najafgarh<br />
                  New Delhi, 110043<br />
                  India
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.google.com/maps/place/BHARDWAJ+ARCHITECTS/@28.611816,76.974227,15z/data=!4m6!3m5!1s0x390d0f63e47a820f:0x9bccd099845f0da1!8m2!3d28.611816!4d76.974227!16s%2Fg%2F11t1y1q8_8?entry=ttu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-light font-medium transition-colors"
                  >
                    Get Directions
                  </a>
                  <a 
                    href="tel:+918700683138" 
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
              <h3 className="text-lg font-semibold mb-2">Do you work on projects outside of New Delhi?</h3>
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
            <Button href="tel:+918700683138" variant="primary">
              <FaPhoneAlt className="mr-2" /> Call Us Now
            </Button>
            <Button href="https://wa.me/918700683138" variant="outline">
              <FaWhatsapp className="mr-2" /> WhatsApp
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </motion.div>
  );
};

export default Contact;