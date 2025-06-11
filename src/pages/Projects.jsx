import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import SectionHeading from '../components/common/SectionHeading';
import ProjectCard from '../components/common/ProjectCard';
import AnimatedSection from '../components/common/AnimatedSection';
import { FaFilter, FaTimes } from 'react-icons/fa';

const Projects = () => {
  // Sample project data - would be fetched from a backend in a real application
  const [projects, setProjects] = useState([
    {
      id: 'modern-villa',
      title: 'Modern Villa',
      category: 'Residential',
      location: 'Mumbai, India',
      year: '2023',
      thumbnail: '/assets/images/project1.jpg',
      description: 'A contemporary residential villa with clean lines and open spaces.'
    },
    {
      id: 'urban-office',
      title: 'Urban Office Complex',
      category: 'Commercial',
      location: 'Delhi, India',
      year: '2022',
      thumbnail: '/assets/images/project2.jpg',
      description: 'Sustainable office complex designed to maximize natural light and energy efficiency.'
    },
    {
      id: 'cultural-center',
      title: 'Cultural Center',
      category: 'Public',
      location: 'Jaipur, India',
      year: '2021',
      thumbnail: '/assets/images/project3.jpg',
      description: 'A vibrant cultural center that blends traditional Indian architecture with modern design.'
    },
    {
      id: 'luxury-apartments',
      title: 'Luxury Apartments',
      category: 'Residential',
      location: 'Bangalore, India',
      year: '2022',
      thumbnail: '/assets/images/project4.jpg',
      description: 'Premium residential apartments featuring modern amenities and elegant design.'
    },
    {
      id: 'retail-plaza',
      title: 'Retail Plaza',
      category: 'Commercial',
      location: 'Hyderabad, India',
      year: '2021',
      thumbnail: '/assets/images/project5.jpg',
      description: 'A multi-level retail plaza with dynamic spaces and striking architectural elements.'
    },
    {
      id: 'public-library',
      title: 'Public Library',
      category: 'Public',
      location: 'Chennai, India',
      year: '2020',
      thumbnail: '/assets/images/project6.jpg',
      description: 'A modern public library designed to encourage learning and community engagement.'
    },
    {
      id: 'seaside-villa',
      title: 'Seaside Villa',
      category: 'Residential',
      location: 'Goa, India',
      year: '2023',
      thumbnail: '/assets/images/project7.jpg',
      description: 'Luxurious seaside villa with panoramic ocean views and sustainable design features.'
    },
    {
      id: 'corporate-headquarters',
      title: 'Corporate Headquarters',
      category: 'Commercial',
      location: 'Pune, India',
      year: '2022',
      thumbnail: '/assets/images/project8.jpg',
      description: 'Innovative corporate headquarters with collaborative workspaces and modern aesthetics.'
    },
    {
      id: 'art-museum',
      title: 'Art Museum',
      category: 'Public',
      location: 'Kolkata, India',
      year: '2021',
      thumbnail: '/assets/images/project9.jpg',
      description: 'Contemporary art museum designed to showcase exhibitions with optimal lighting and flow.'
    },
  ]);

  // Filter states
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  
  const filters = ['All', 'Residential', 'Commercial', 'Public'];
  
  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter, projects]);
  
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
        <title>Projects | Bhardwaj Architect</title>
        <meta name="description" content="Explore our diverse portfolio of architectural projects ranging from residential to commercial and public spaces." />
      </Helmet>
      
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src="/assets/images/projects-hero.jpg" 
            alt="Bhardwaj Architect Projects" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.parentElement.classList.add('bg-gradient-to-br', 'from-gray-900', 'to-gray-600');
            }}
          />
        </div>
        
        <div className="container relative z-20 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Projects</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Discover our portfolio of architectural excellence spanning residential, commercial, and public spaces.
          </p>
        </div>
      </div>
      
      {/* Projects Section */}
      <AnimatedSection className="section bg-bg">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
            <SectionHeading
              title="Featured Projects"
              subtitle="Our Portfolio"
              description=""
              alignment="left"
              underline={false}
            />
            
            {/* Filter Toggle Button - Mobile */}
            <button 
              className="md:hidden flex items-center px-4 py-2 bg-bg-secondary rounded-md shadow"
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? <FaTimes className="mr-2" /> : <FaFilter className="mr-2" />}
              {showFilters ? "Close Filters" : "Filter Projects"}
            </button>
            
            {/* Desktop Filters */}
            <div className="hidden md:flex space-x-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-md transition-all duration-300 ${
                    activeFilter === filter 
                      ? 'bg-primary text-white shadow-md' 
                      : 'bg-bg-secondary hover:bg-primary/10'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          
          {/* Mobile Filter Menu */}
          <motion.div 
            className={`md:hidden mb-6 ${showFilters ? 'block' : 'hidden'}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: showFilters ? 'auto' : 0, opacity: showFilters ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-wrap gap-2 p-4 bg-bg-secondary rounded-md shadow">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => {
                    setActiveFilter(filter);
                    setShowFilters(false);
                  }}
                  className={`px-4 py-2 rounded-md transition-all duration-300 ${
                    activeFilter === filter 
                      ? 'bg-primary text-white shadow-md' 
                      : 'bg-bg hover:bg-primary/10'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>
          
          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
            transition={{ duration: 0.6, type: 'spring' }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
          
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-text-light">Please try another filter or check back later.</p>
            </div>
          )}
        </div>
      </AnimatedSection>
      
      {/* Call To Action */}
      <AnimatedSection className="section bg-bg-secondary" animation="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a project in mind?</h2>
          <p className="text-text-light mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your architectural vision to life. Our team of experts is ready to create exceptional spaces tailored to your needs.
          </p>
          <a href="/contact" className="btn shadow-lg">
            Get in Touch
          </a>
        </div>
      </AnimatedSection>
    </motion.div>
  );
};

export default Projects;