import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { FaBuilding, FaHome, FaPencilRuler, FaTree, FaCity, FaCubes } from 'react-icons/fa';
import Button from '../common/Button';

const services = [
  {
    icon: <FaPencilRuler className="text-4xl text-primary" />,
    title: 'Architectural Design',
    description: 'From concept to detailed design, we create innovative architectural solutions tailored to your unique vision and requirements.',
    link: '/services#architectural-design'
  },
  {
    icon: <FaHome className="text-4xl text-primary" />,
    title: 'Interior Design',
    description: 'Transforming interior spaces with thoughtful design that balances aesthetics, functionality, and your personal style.',
    link: '/services#interior-design'
  },
  {
    icon: <FaCity className="text-4xl text-primary" />,
    title: 'Urban Planning',
    description: 'Creating sustainable urban environments that enhance quality of life while addressing complex social and environmental challenges.',
    link: '/services#urban-planning'
  },
  {
    icon: <FaTree className="text-4xl text-primary" />,
    title: 'Landscape Design',
    description: 'Crafting outdoor spaces that complement architecture and create harmonious connections between buildings and nature.',
    link: '/services#landscape-design'
  },
  {
    icon: <FaBuilding className="text-4xl text-primary" />,
    title: 'Project Management',
    description: 'Comprehensive project management services ensuring your project is delivered on time, within budget, and to the highest standards.',
    link: '/services#project-management'
  },
  {
    icon: <FaCubes className="text-4xl text-primary" />,
    title: '3D Visualization',
    description: 'Bringing designs to life with photorealistic 3D visualizations that help you experience your space before construction begins.',
    link: '/services#3d-visualization'
  }
];

const ServiceSection = () => {
  return (
    <section className="section" data-scroll-section>
      <div className="container mx-auto">
        <SectionHeading
          title="Our Services"
          subtitle="What We Offer"
          description="We provide a comprehensive range of architectural and design services to bring your vision to life."
          alignment="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-bg-secondary p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-t-2 border-primary/20 hover:border-primary group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-4 rounded-full bg-primary/10 inline-block mb-4 group-hover:bg-primary/20 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-text-light mb-6">{service.description}</p>
              <a 
                href={service.link}
                className="text-primary hover:text-primary-light font-medium inline-flex items-center transition-colors duration-300"
              >
                Learn More
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button to="/services" variant="outline">
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;