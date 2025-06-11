import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProjectCard = ({ project, index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2
      }
    }
  };
  
  return (
    <motion.div
      className="group overflow-hidden rounded-lg shadow-lg bg-bg-secondary relative h-[400px]"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image with Lazy Loading */}
      <div className="relative w-full h-full overflow-hidden">
        <LazyLoadImage
          src={project.thumbnail}
          alt={project.title}
          effect="blur"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          wrapperClassName="w-full h-full"
          onError={(e) => {
            e.target.classList.add('bg-gray-200', 'dark:bg-gray-800');
            e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
            e.target.style.height = '100%';
            e.target.style.display = 'flex';
            e.target.style.alignItems = 'center';
            e.target.style.justifyContent = 'center';
            e.target.textContent = project.title;
          }}
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80"></div>
      </div>
      
      {/* Project Info */}
      <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500 ease-in-out">
        {/* Category */}
        <span className="inline-block px-3 py-1 mb-3 text-xs font-medium bg-primary text-white rounded">
          {project.category}
        </span>
        
        {/* Project Title */}
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        
        {/* Project Details */}
        <div className="flex items-center text-sm text-gray-300 mb-4">
          <span>{project.location}</span>
          <span className="mx-2">•</span>
          <span>{project.year}</span>
        </div>
        
        {/* Description - Only visible on hover */}
        <motion.p 
          className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            height: isHovered ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
        >
          {project.description}
        </motion.p>
        
        {/* View Project Link */}
        <Link 
          to={`/projects/${project.id}`} 
          className="inline-flex items-center text-white hover:text-primary transition-colors duration-300"
        >
          View Project 
          <motion.span 
            initial={{ x: 0 }}
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.3 }}
            className="ml-2"
          >
            <FaArrowRight />
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number,
};

export default ProjectCard;