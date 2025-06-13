import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from '../components/common/SectionHeading';
import AnimatedSection from '../components/common/AnimatedSection';
import Button from '../components/common/Button';
import { 
  FaPencilRuler, 
  FaHome, 
  FaCity, 
  FaTree, 
  FaBuilding, 
  FaCubes, 
  FaLaptop, 
  FaFileAlt, 
  FaPalette, 
  FaHandshake,
  FaChevronDown,
  FaCheckCircle,
} from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const processRef = useRef(null);
  const location = useLocation();
  
  // Scroll to section if hash is present in URL
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100); // Small delay to ensure content is rendered
      }
    }
  }, [location]);

  // Service categories with their details
  const services = [
    {
      id: 'architectural-design',
      title: 'Architectural Design',
      icon: <FaHome className="text-4xl text-primary" />,
      description: 'Creating innovative and functional architectural designs that meet your vision and requirements.',
      image: '/assets/images/services/architectural-design.jpg',
      features: [
        'Custom residential designs',
        'Commercial building designs',
        'Renovation and remodeling',
        'Space planning and optimization',
        'Sustainable design integration'
      ]
    },
    {
      id: 'interior-design',
      title: 'Interior Design',
      icon: <FaPalette className="text-4xl text-primary" />,
      description: 'Transforming spaces into beautiful, functional environments that reflect your style and needs.',
      image: '/assets/images/services/interior-design.jpg',
      features: [
        'Residential interior design',
        'Commercial space design',
        'Color scheme and material selection',
        'Furniture and fixture planning',
        'Lighting design'
      ]
    },
    {
      id: 'urban-planning',
      title: 'Urban Planning',
      icon: <FaCity className="text-4xl text-primary" />,
      description: 'Developing comprehensive urban planning solutions for sustainable and livable communities.',
      image: '/assets/images/services/urban-planning.jpg',
      features: [
        'Master planning',
        'Zoning and land use planning',
        'Infrastructure planning',
        'Community development',
        'Environmental impact assessment'
      ]
    },
    {
      id: 'landscape-design',
      title: 'Landscape Design',
      icon: <FaTree className="text-4xl text-primary" />,
      description: 'Creating beautiful and sustainable outdoor spaces that complement your architecture.',
      image: '/assets/images/services/landscape-design.jpg',
      features: [
        'Residential landscaping',
        'Commercial landscape design',
        'Sustainable landscaping',
        'Garden design',
        'Outdoor space planning'
      ]
    },
    {
      id: 'project-management',
      title: 'Project Management',
      icon: <FaBuilding className="text-4xl text-primary" />,
      description: 'Overseeing construction projects from conception to completion with expert management.',
      image: '/assets/images/services/project-management.jpg',
      features: [
        'Construction supervision',
        'Budget management',
        'Timeline coordination',
        'Quality control',
        'Contractor management'
      ]
    },
    {
      id: '3d-visualization',
      title: '3D Visualization',
      icon: <FaCubes className="text-4xl text-primary" />,
      description: 'Creating detailed 3D visualizations to help you visualize your project before construction.',
      image: '/assets/images/services/3D-visualization.jpeg',
      features: [
        '3D architectural rendering',
        'Interior visualization',
        'Exterior visualization',
        'Virtual walkthroughs',
        'Animation and presentation'
      ]
    },
    {
      id: 'architectural-consultation',
      title: 'Architectural Consultation',
      icon: <FaPencilRuler className="text-4xl text-primary" />,
      description: 'Providing expert architectural advice and consultation for your projects.',
      image: '/assets/images/services/architectural-consultation.jpg',
      features: [
        'Design consultation',
        'Code compliance review',
        'Site analysis',
        'Feasibility studies',
        'Construction documentation review'
      ]
    },
    {
      id: 'sustainable-design',
      title: 'Sustainable Design',
      icon: <FaHandshake className="text-4xl text-primary" />,
      description: 'Implementing eco-friendly and sustainable design solutions for a better future.',
      image: '/assets/images/services/sustainable-design.jpg',
      features: [
        'Green building design',
        'Energy efficiency planning',
        'Sustainable materials selection',
        'Water conservation design',
        'LEED certification support'
      ]
    }
  ];
  
  // Process steps
  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We begin by understanding your vision, requirements, and constraints through in-depth consultations and site visits.'
    },
    {
      number: '02',
      title: 'Concept Design',
      description: 'Our team develops initial design concepts that align with your goals, presenting multiple options for discussion and refinement.'
    },
    {
      number: '03',
      title: 'Design Development',
      description: 'The selected concept is further refined with detailed drawings, material selections, and technical specifications.'
    },
    {
      number: '04',
      title: 'Documentation',
      description: 'We prepare comprehensive construction documents, ensuring all technical details are accurately specified for execution.'
    },
    {
      number: '05',
      title: 'Implementation',
      description: 'During construction, we provide regular site visits and coordination to ensure the design vision is properly executed.'
    },
    {
      number: '06',
      title: 'Completion',
      description: 'We conduct final inspections and ensure all elements are finished according to specifications before project handover.'
    }
  ];

  useEffect(() => {
    // Process steps animation
    if (processRef.current) {
      const steps = processRef.current.querySelectorAll('.process-step');
      
      gsap.fromTo(
        steps,
        { 
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: processRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  }, []);

  // Accordion functionality
  const [activeService, setActiveService] = useState(null);
  
  const toggleService = (id) => {
    if (activeService === id) {
      setActiveService(null);
    } else {
      setActiveService(id);
      // Wait for state to update and animation to start
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
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
        <title>Services | Bhardwaj Architect</title>
        <meta name="description" content="Explore our comprehensive architectural and design services including architectural design, interior design, urban planning, and more." />
      </Helmet>
      
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src="/assets/images/backgrounds/services-bg.png" 
            alt="Bhardwaj Architect Services" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.parentElement.classList.add('bg-gradient-to-br', 'from-gray-900', 'to-gray-700');
            }}
          />
        </div>
        
        <div className="container relative z-20 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Comprehensive architectural solutions tailored to your unique vision and requirements
          </p>
        </div>
      </div>
      
      {/* Services Overview */}
      <AnimatedSection className="section bg-bg" animation="fade-up">
        <div className="container mx-auto">
          <SectionHeading
            title="What We Offer"
            subtitle="Our Services"
            description="We provide a comprehensive range of architectural and design services to bring your vision to life."
            alignment="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-bg-secondary p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center border-t-2 border-primary/20 hover:border-primary"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-text-light text-sm mb-4">{service.description}</p>
                <a 
                  href={`#${service.id}`} 
                  className="inline-flex items-center text-primary hover:text-primary-light font-medium transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(service.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      
      {/* Our Process */}
      <AnimatedSection className="section bg-bg-secondary" animation="fade-up">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Process"
            subtitle="How We Work"
            description="Our systematic approach ensures efficient delivery of exceptional results."
            alignment="center"
          />
          
          <div 
            ref={processRef}
            className="mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className="process-step bg-bg p-8 rounded-lg shadow-lg border-t-2 border-primary/20 hover:border-primary transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute -top-4 -right-4 text-[120px] font-bold text-primary/10 group-hover:text-primary/20 transition-all duration-500">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 relative">
                    <span className="text-primary mr-2">{step.number}.</span>
                    {step.title}
                  </h3>
                  <p className="text-text-light relative z-10">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Detailed Service Sections */}
      <AnimatedSection className="section bg-bg" animation="fade-up">
        <div className="container mx-auto">
          <SectionHeading
            title="Service Details"
            subtitle="Our Expertise"
            description="Explore our comprehensive range of architectural services in detail."
            alignment="center"
          />
          
          <div className="mt-12 space-y-12">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className="scroll-mt-24"
              >
                <motion.div 
                  className={`border border-border rounded-lg overflow-hidden ${index % 2 === 0 ? 'bg-bg' : 'bg-bg-secondary'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="p-6 cursor-pointer flex justify-between items-center" onClick={() => toggleService(service.id)}>
                    <div className="flex items-center">
                      <div className="mr-4">{service.icon}</div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                    </div>
                    <motion.div
                      animate={{ rotate: activeService === service.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronDown className="text-primary" />
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="overflow-hidden"
                    initial={false}
                    animate={{ 
                      height: activeService === service.id ? 'auto' : 0,
                      opacity: activeService === service.id ? 1 : 0
                    }}
                    transition={{ 
                      height: { duration: 0.4, ease: "easeInOut" },
                      opacity: { duration: 0.3, ease: "easeInOut" }
                    }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 pt-0 border-t border-border">
                      <div>
                        <p className="text-text-light mb-6">{service.description}</p>
                        
                        <h4 className="text-lg font-semibold mb-3">Our Process</h4>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <FaCheckCircle className="text-primary mt-1 mr-2" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <Button to="/contact" variant="outline" className="mt-4">
                          Inquire About This Service
                        </Button>
                      </div>
                      
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gray-200', 'dark:bg-gray-800');
                            e.target.parentElement.innerHTML = `<div class="text-2xl font-bold text-primary">${service.title}</div>`;
                          }}
                        />
                        <div className="absolute inset-0 bg-primary/10"></div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      
      {/* Call To Action */}
      <AnimatedSection className="section bg-bg-secondary" animation="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-text-light mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our services can bring your architectural vision to life.
          </p>
          <Button to="/contact" variant="primary" size="large">
            Get in Touch
          </Button>
        </div>
      </AnimatedSection>
    </motion.div>
  );
};

export default Services;