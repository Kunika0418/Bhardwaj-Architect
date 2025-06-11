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

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const processRef = useRef(null);
  
  // Service categories with their details
  const services = [
    {
      id: 'architectural-design',
      icon: <FaPencilRuler className="text-5xl text-primary" />,
      title: 'Architectural Design',
      shortDescription: 'Innovative design solutions tailored to your vision and requirements.',
      description: 'Our architectural design services focus on creating spaces that are not just aesthetically pleasing but also functional and sustainable. We work closely with clients to understand their needs, vision, and constraints to deliver exceptional design solutions. From initial concept sketches to detailed construction drawings, our comprehensive approach ensures that every aspect of the project is carefully considered.',
      process: [
        'Initial consultation and requirement gathering',
        'Site analysis and feasibility studies',
        'Concept design and visualization',
        'Design development and refinement',
        'Construction documentation',
        'Permit acquisition assistance',
        'Construction administration'
      ],
      projects: [
        'Modern Villa, Mumbai',
        'Cultural Center, Jaipur',
        'Beach House, Goa'
      ],
      image: '/assets/images/service-architectural.jpg'
    },
    {
      id: 'interior-design',
      icon: <FaHome className="text-5xl text-primary" />,
      title: 'Interior Design',
      shortDescription: 'Transforming interior spaces with thoughtful design that balances aesthetics, functionality, and your personal style.',
      description: 'Our interior design services transform spaces into environments that reflect your personality, lifestyle, and functional needs. We combine colors, textures, lighting, and materials to create harmonious interiors that enhance the overall architectural design. Whether its a residential, commercial, or institutional space, our team ensures that every interior element contributes to a cohesive and inspiring environment.',
      process: [
        'Space planning and layout design',
        'Material and finish selection',
        'Custom furniture design',
        'Lighting design',
        'Color scheme development',
        'Accessory and art curation',
        'Implementation and styling'
      ],
      projects: [
        'Modern Villa Interior, Mumbai',
        'Corporate Office, Delhi',
        'Luxury Apartment, Bangalore'
      ],
      image: '/assets/images/service-interior.jpg'
    },
    {
      id: 'urban-planning',
      icon: <FaCity className="text-5xl text-primary" />,
      title: 'Urban Planning',
      shortDescription: 'Creating sustainable urban environments that enhance quality of life while addressing complex social and environmental challenges.',
      description: 'Our urban planning services focus on creating vibrant, sustainable, and inclusive communities. We analyze existing urban conditions, identify opportunities for improvement, and develop comprehensive plans that address transportation, housing, public spaces, and infrastructure needs. Through careful planning and stakeholder engagement, we create urban environments that are functional, beautiful, and resilient.',
      process: [
        'Urban analysis and site assessment',
        'Stakeholder consultation',
        'Master planning and zoning strategies',
        'Transportation and circulation planning',
        'Public space design',
        'Sustainability integration',
        'Implementation strategy development'
      ],
      projects: [
        'Riverfront Development, Ahmedabad',
        'Mixed-Use District, Hyderabad',
        'Sustainable Neighborhood, Pune'
      ],
      image: '/assets/images/service-urban.jpg'
    },
    {
      id: 'landscape-design',
      icon: <FaTree className="text-5xl text-primary" />,
      title: 'Landscape Design',
      shortDescription: 'Crafting outdoor spaces that complement architecture and create harmonious connections between buildings and nature.',
      description: 'Our landscape design services create outdoor spaces that enhance the built environment and provide sustainable, functional, and beautiful settings for living, working, and recreation. We integrate natural elements, hardscape features, and planting designs to establish connections between architecture and landscape. Our approach emphasizes native plants, water conservation, and creating spaces that evolve beautifully over time.',
      process: [
        'Site assessment and analysis',
        'Conceptual landscape design',
        'Planting plan development',
        'Hardscape design',
        'Water feature and irrigation planning',
        'Outdoor lighting design',
        'Implementation oversight'
      ],
      projects: [
        'Urban Park, Mumbai',
        'Residential Garden, Delhi',
        'Corporate Campus, Bangalore'
      ],
      image: '/assets/images/service-landscape.jpg'
    },
    {
      id: 'project-management',
      icon: <FaBuilding className="text-5xl text-primary" />,
      title: 'Project Management',
      shortDescription: 'Comprehensive project management services ensuring your project is delivered on time, within budget, and to the highest standards.',
      description: 'Our project management services ensure that architectural projects are completed efficiently, on schedule, and within budget while maintaining the highest quality standards. We coordinate between clients, contractors, consultants, and regulatory authorities to streamline the construction process. With careful planning, regular monitoring, and proactive problem-solving, we navigate the complexities of construction to deliver successful project outcomes.',
      process: [
        'Project planning and scheduling',
        'Budget development and management',
        'Contractor selection and negotiation',
        'Construction documentation review',
        'Quality control and site inspection',
        'Progress reporting and communication',
        'Project closeout and evaluation'
      ],
      projects: [
        'Luxury Hotel, Goa',
        'Tech Park, Bangalore',
        'Residential Complex, Mumbai'
      ],
      image: '/assets/images/service-project.jpg'
    },
    {
      id: '3d-visualization',
      icon: <FaCubes className="text-5xl text-primary" />,
      title: '3D Visualization',
      shortDescription: 'Bringing designs to life with photorealistic 3D visualizations that help you experience your space before construction begins.',
      description: 'Our 3D visualization services provide realistic representations of architectural designs before construction begins. Through detailed renderings, animations, and virtual walkthroughs, clients can better understand spatial relationships, materials, lighting, and the overall design intent. This visual communication tool facilitates better decision-making, refinement of designs, and helps stakeholders envision the completed project with clarity.',
      process: [
        '3D model development',
        'Material and texture application',
        'Lighting setup and environment creation',
        'Camera positioning and scene composition',
        'Rendering and post-processing',
        'Animation and virtual walkthrough creation',
        'Presentation preparation'
      ],
      projects: [
        'Residential Tower Visualization, Mumbai',
        'Museum Interior Renderings, Delhi',
        'Commercial Complex Flythrough, Chennai'
      ],
      image: '/assets/images/service-3d.jpg'
    },
    {
      id: 'sustainable-design',
      icon: <FaPalette className="text-5xl text-primary" />,
      title: 'Sustainable Design',
      shortDescription: 'Environmentally responsible design solutions that minimize ecological footprint while maximizing efficiency and comfort.',
      description: 'Our sustainable design services integrate environmental considerations into every aspect of the architectural process. We employ passive design strategies, energy-efficient systems, and environmentally friendly materials to create buildings that minimize resource consumption and environmental impact. From LEED certification assistance to biophilic design implementation, we help clients achieve their sustainability goals while creating healthy, comfortable spaces.',
      process: [
        'Sustainability goal setting',
        'Site and climate analysis',
        'Passive design strategy development',
        'Energy modeling and system optimization',
        'Material selection and evaluation',
        'Green certification guidance',
        'Post-occupancy evaluation'
      ],
      projects: [
        'Net-Zero Energy Office, Pune',
        'Green Residential Complex, Bangalore',
        'Sustainable School Campus, Chennai'
      ],
      image: '/assets/images/service-sustainable.jpg'
    },
    {
      id: 'consultation',
      icon: <FaHandshake className="text-5xl text-primary" />,
      title: 'Architectural Consultation',
      shortDescription: 'Expert advice on architectural feasibility, regulations, and design possibilities for your project.',
      description: "Our architectural consultation services provide expert advice on a wide range of architectural matters. Whether you're exploring the feasibility of a project, navigating complex regulations, or seeking professional input on design options, our experienced architects offer valuable insights to guide your decision-making. These consultations can help clarify project scope, identify challenges and opportunities, and establish a solid foundation for successful project execution.",
      process: [
        'Initial client meeting and needs assessment',
        'Site evaluation and analysis',
        'Regulatory and code compliance review',
        'Design feasibility assessment',
        'Budget and timeline discussions',
        'Recommendation development',
        'Documentation and next steps planning'
      ],
      projects: [
        'Heritage Property Assessment, Delhi',
        'Commercial Redevelopment Consultation, Mumbai',
        'Residential Renovation Advising, Bangalore'
      ],
      image: '/assets/images/service-consultation.jpg'
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
    setActiveService(activeService === id ? null : id);
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
            src="/assets/images/services-hero.jpg" 
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
                <p className="text-text-light text-sm mb-4">{service.shortDescription}</p>
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
                    initial={{ height: 0 }}
                    animate={{ height: activeService === service.id ? 'auto' : 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 pt-0 border-t border-border">
                      <div>
                        <p className="text-text-light mb-6">{service.description}</p>
                        
                        <h4 className="text-lg font-semibold mb-3">Our Process</h4>
                        <ul className="space-y-2 mb-6">
                          {service.process.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start">
                              <FaCheckCircle className="text-primary mt-1 mr-2" />
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <h4 className="text-lg font-semibold mb-3">Featured Projects</h4>
                        <ul className="space-y-2 mb-6">
                          {service.projects.map((project, projectIndex) => (
                            <li key={projectIndex} className="flex items-start">
                              <div className="w-1 h-1 rounded-full bg-primary mt-2 mr-2"></div>
                              <span>{project}</span>
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