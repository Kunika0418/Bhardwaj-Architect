import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import ProjectCard from '../common/ProjectCard';
import Button from '../common/Button';

const FeaturedProjects = () => {
  // Sample featured projects data - this would be replaced with real data
  const featuredProjects = [
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
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="featured-projects" className="section section-bg projects-bg" data-scroll-section>
      <div className="container mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="Our Recent Work"
          description="Explore our portfolio of innovative architectural projects that showcase our expertise in design and execution."
          alignment="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Button to="/projects" variant="outline">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;