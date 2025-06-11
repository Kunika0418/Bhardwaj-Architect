import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { FaCalendar, FaMapMarkerAlt, FaBuilding, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import SectionHeading from '../components/common/SectionHeading';
import AnimatedSection from '../components/common/AnimatedSection';
import Button from '../components/common/Button';
import ProjectCard from '../components/common/ProjectCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [relatedProjects, setRelatedProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Sample project data - would be fetched from a backend in a real application
  const sampleProjects = [
    {
      id: 'modern-villa',
      title: 'Modern Villa',
      category: 'Residential',
      location: 'Mumbai, India',
      year: '2023',
      client: 'Private Owner',
      area: '5,200 sq ft',
      thumbnail: '/assets/images/project1.jpg',
      description: 'A contemporary residential villa with clean lines and open spaces, designed to maximize natural light and ventilation while providing privacy in a dense urban setting.',
      challenge: 'The site had significant constraints with limited space and strict local building codes. We needed to create a spacious feeling home while working within these limitations.',
      solution: 'By employing a vertical design strategy with multiple levels and strategically placed windows and skylights, we were able to create a sense of spaciousness and connection to the outdoors.',
      images: [
        '/assets/images/project1-detail1.jpg',
        '/assets/images/project1-detail2.jpg',
        '/assets/images/project1-detail3.jpg',
        '/assets/images/project1-detail4.jpg',
      ],
      features: [
        'Passive cooling system',
        'Rooftop garden',
        'Natural stone finishes',
        'Floor-to-ceiling windows',
        'Custom furniture',
        'Indoor-outdoor living spaces'
      ]
    },
    {
      id: 'urban-office',
      title: 'Urban Office Complex',
      category: 'Commercial',
      location: 'Delhi, India',
      year: '2022',
      client: 'TechSphere Inc.',
      area: '25,000 sq ft',
      thumbnail: '/assets/images/project2.jpg',
      description: 'Sustainable office complex designed to maximize natural light and energy efficiency while providing a collaborative and inspiring workspace for a growing technology company.',
      challenge: 'Creating a flexible office space that could accommodate rapid company growth while maintaining energy efficiency and promoting employee wellness.',
      solution: 'We designed modular office layouts with movable partitions and integrated smart building systems to optimize energy usage based on occupancy patterns.',
      images: [
        '/assets/images/project2-detail1.jpg',
        '/assets/images/project2-detail2.jpg',
        '/assets/images/project2-detail3.jpg',
        '/assets/images/project2-detail4.jpg',
      ],
      features: [
        'Smart building systems',
        'Green roof',
        'Flexible workspace configurations',
        'Rainwater harvesting',
        'EV charging stations',
        'Wellness areas'
      ]
    },
    {
      id: 'cultural-center',
      title: 'Cultural Center',
      category: 'Public',
      location: 'Jaipur, India',
      year: '2021',
      client: 'Rajasthan Arts Foundation',
      area: '45,000 sq ft',
      thumbnail: '/assets/images/project3.jpg',
      description: 'A vibrant cultural center that blends traditional Indian architecture with modern design, creating spaces for exhibitions, performances, and community gatherings.',
      challenge: 'Balancing respect for traditional architectural elements with contemporary functionality while creating a landmark public building.',
      solution: 'Our design incorporates traditional Rajasthani motifs and materials in a contemporary framework, with flexible spaces that can be reconfigured for various events.',
      images: [
        '/assets/images/project3-detail1.jpg',
        '/assets/images/project3-detail2.jpg',
        '/assets/images/project3-detail3.jpg',
        '/assets/images/project3-detail4.jpg',
      ],
      features: [
        'Multipurpose auditorium',
        'Exhibition galleries',
        'Traditional courtyard',
        'Interactive learning spaces',
        'Artisan workshops',
        'Outdoor amphitheater'
      ]
    },
  ];
  
  useEffect(() => {
    // In a real application, this would be an API call to get project details
    // Simulating API call with timeout
    setLoading(true);
    const timer = setTimeout(() => {
      const foundProject = sampleProjects.find(project => project.id === id);
      
      if (foundProject) {
        setProject(foundProject);
        
        // Get related projects (same category)
        const related = sampleProjects
          .filter(p => p.category === foundProject.category && p.id !== id)
          .slice(0, 3);
        setRelatedProjects(related);
      }
      
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [id]);
  
  useEffect(() => {
    if (project) {
      // Scroll to top when project changes
      window.scrollTo(0, 0);
      
      // GSAP animations for project details
      const tl = gsap.timeline();
      
      tl.fromTo(
        '.project-intro',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }
      );
      
      // Parallax effect on image gallery
      gsap.utils.toArray('.parallax-image').forEach((image) => {
        gsap.fromTo(
          image,
          { y: 0 },
          {
            y: -50,
            ease: 'none',
            scrollTrigger: {
              trigger: image,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            }
          }
        );
      });
    }
  }, [project]);
  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-200px)]">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  
  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
        <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
        <p className="text-text-light mb-6">We couldn't find the project you're looking for.</p>
        <Button to="/projects" variant="primary">
          Back to Projects
        </Button>
      </div>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Helmet>
        <title>{project.title} | Bhardwaj Architect</title>
        <meta name="description" content={project.description} />
      </Helmet>
      
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[80vh] flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20 z-10"></div>
          <img 
            src={project.thumbnail} 
            alt={project.title} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.parentElement.classList.add('bg-gradient-to-br', 'from-gray-900', 'to-gray-600');
            }}
          />
        </div>
        
        <div className="container relative z-20 mx-auto px-4 pb-16">
          <div className="max-w-3xl">
            <span className="inline-block text-primary font-medium mb-2 project-intro">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 project-intro">
              {project.title}
            </h1>
            <p className="text-lg text-gray-200 mb-6 project-intro">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3 project-intro">
              <div className="flex items-center text-gray-300">
                <FaMapMarkerAlt className="text-primary mr-2" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FaCalendar className="text-primary mr-2" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FaBuilding className="text-primary mr-2" />
                <span>{project.area}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Project Details */}
      <AnimatedSection className="section bg-bg" animation="fade-up">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionHeading
                title="Project Overview"
                subtitle="The Challenge"
                alignment="left"
              />
              <p className="text-text-light mb-8">
                {project.challenge}
              </p>
              
              <SectionHeading
                title="Our Approach"
                subtitle="The Solution"
                alignment="left"
              />
              <p className="text-text-light mb-8">
                {project.solution}
              </p>
              
              {/* Features List */}
              <div className="bg-bg-secondary p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
                  {project.features.map((feature, index) => (
                    <li 
                      key={index}
                      className="flex items-start"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-bg-secondary p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-text-light text-sm">Client</p>
                    <p className="font-medium">{project.client}</p>
                  </div>
                  <div>
                    <p className="text-text-light text-sm">Location</p>
                    <p className="font-medium">{project.location}</p>
                  </div>
                  <div>
                    <p className="text-text-light text-sm">Year</p>
                    <p className="font-medium">{project.year}</p>
                  </div>
                  <div>
                    <p className="text-text-light text-sm">Category</p>
                    <p className="font-medium">{project.category}</p>
                  </div>
                  <div>
                    <p className="text-text-light text-sm">Area</p>
                    <p className="font-medium">{project.area}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-semibold mb-2">Interested in a similar project?</h3>
                <p className="text-text-light mb-4">
                  Contact us today to discuss your vision.
                </p>
                <Button to="/contact" variant="primary">
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Image Gallery */}
      <AnimatedSection className="section bg-bg-secondary" animation="fade-up">
        <div className="container mx-auto">
          <SectionHeading
            title="Project Gallery"
            subtitle="Visual Showcase"
            description="Explore the details and features of this architectural project."
            alignment="center"
          />
          
          <div className="mt-12">
            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                },
              }}
              className="project-gallery-swiper"
            >
              {project.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src={image} 
                      alt={`${project.title} - Image ${index + 1}`} 
                      className="w-full h-full object-cover parallax-image"
                      onError={(e) => {
                        e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gray-200', 'dark:bg-gray-800');
                        const placeholder = document.createElement('div');
                        placeholder.className = 'text-gray-500 dark:text-gray-400 text-center p-4';
                        placeholder.textContent = `${project.title} - Image ${index + 1}`;
                        e.target.parentElement.appendChild(placeholder);
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <AnimatedSection className="section bg-bg" animation="fade-up">
          <div className="container mx-auto">
            <SectionHeading
              title="Related Projects"
              subtitle="Explore More"
              description="Discover similar projects in our portfolio."
              alignment="center"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {relatedProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </AnimatedSection>
      )}
      
      {/* Navigation */}
      <div className="bg-bg-secondary py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            <Button to="/projects" variant="outline">
              <FaArrowLeft className="mr-2" /> All Projects
            </Button>
            <Button to="/contact" variant="primary">
              Contact Us <FaArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;