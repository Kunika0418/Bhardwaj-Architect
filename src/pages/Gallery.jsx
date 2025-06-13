import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from '../components/common/SectionHeading';
import AnimatedSection from '../components/common/AnimatedSection';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentCategory, setCurrentCategory] = useState('All');
  
  // Sample gallery data - would be fetched from a backend in a real application
  const categories = ['All', 'Residential', 'Commercial', 'Public', 'Interior', 'Landscape'];
  
  const images = [
    {
      id: 1,
      src: '/assets/images/gallery1.jpg',
      alt: 'Modern Villa Interior',
      category: 'Interior',
      description: 'Elegant living room with panoramic views'
    },
    {
      id: 2,
      src: '/assets/images/gallery2.jpg',
      alt: 'Contemporary Office Space',
      category: 'Commercial',
      description: 'Open plan office with collaborative spaces'
    },
    {
      id: 3,
      src: '/assets/images/gallery3.jpg',
      alt: 'Cultural Center Exterior',
      category: 'Public',
      description: 'Award-winning cultural center with innovative facade'
    },
    {
      id: 4,
      src: '/assets/images/gallery4.jpg',
      alt: 'Luxury Apartment',
      category: 'Residential',
      description: 'Penthouse apartment with custom fixtures'
    },
    {
      id: 5,
      src: '/assets/images/gallery5.jpg',
      alt: 'Office Building Exterior',
      category: 'Commercial',
      description: 'Sustainable office building with green roof'
    },
    {
      id: 6,
      src: '/assets/images/gallery6.jpg',
      alt: 'Garden Design',
      category: 'Landscape',
      description: 'Contemporary garden with water features'
    },
    {
      id: 7,
      src: '/assets/images/gallery7.jpg',
      alt: 'Modern Home Interior',
      category: 'Interior',
      description: 'Minimalist dining space with natural light'
    },
    {
      id: 8,
      src: '/assets/images/gallery8.jpg',
      alt: 'Public Library',
      category: 'Public',
      description: 'Community library with reading pavilion'
    },
    {
      id: 9,
      src: '/assets/images/gallery9.jpg',
      alt: 'Beach House',
      category: 'Residential',
      description: 'Oceanfront residence with sustainable materials'
    },
    {
      id: 10,
      src: '/assets/images/gallery10.jpg',
      alt: 'Urban Park',
      category: 'Landscape',
      description: 'Urban park design with native plants'
    },
    {
      id: 11,
      src: '/assets/images/gallery11.jpg',
      alt: 'Retail Interior',
      category: 'Commercial',
      description: 'Boutique retail space with custom displays'
    },
    {
      id: 12,
      src: '/assets/images/gallery12.jpg',
      alt: 'Museum Interior',
      category: 'Public',
      description: 'Art gallery with optimal lighting design'
    },
  ];
  
  const [filteredImages, setFilteredImages] = useState(images);
  
  useEffect(() => {
    if (currentCategory === 'All') {
      setFilteredImages(images);
    } else {
      setFilteredImages(images.filter(image => image.category === currentCategory));
    }
  }, [currentCategory]);
  
  // Handle image click - open lightbox
  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };
  
  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };
  
  // Navigate to next image in lightbox
  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };
  
  // Navigate to previous image in lightbox
  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };
  
  // Handle key presses for lightbox navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, filteredImages]);
  
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
        <title>Gallery | Bhardwaj Architect</title>
        <meta name="description" content="Explore our gallery of architectural projects, interior designs, and landscape work by Bhardwaj Architect." />
      </Helmet>
      
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src="/assets/images/backgrounds/gallery-bg.png" 
            alt="Bhardwaj Architect Gallery" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.parentElement.classList.add('bg-gradient-to-br', 'from-gray-900', 'to-gray-600');
            }}
          />
        </div>
        
        <div className="container relative z-20 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Gallery</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            A visual showcase of our finest architectural and design projects
          </p>
        </div>
      </div>
      
      {/* Gallery Section */}
      <AnimatedSection className="section bg-bg" animation="fade-up">
        <div className="container mx-auto">
          <SectionHeading
            title="Project Gallery"
            subtitle="Our Visual Portfolio"
            description="Browse through our collection of architectural projects, interiors, and landscapes."
            alignment="center"
          />
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 my-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setCurrentCategory(category)}
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  currentCategory === category 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-bg-secondary hover:bg-primary/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            layout
            transition={{ duration: 0.6, type: 'spring' }}
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 aspect-square"
                onClick={() => openLightbox(image)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <LazyLoadImage
                  src={image.src}
                  alt={image.alt}
                  effect="blur"
                  className="w-full h-full object-cover"
                  wrapperClassName="w-full h-full"
                  onError={(e) => {
                    e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gray-200', 'dark:bg-gray-800');
                    const placeholder = document.createElement('div');
                    placeholder.className = 'text-gray-500 dark:text-gray-400 text-center p-4';
                    placeholder.textContent = image.alt;
                    e.target.parentElement.appendChild(placeholder);
                    e.target.style.display = 'none';
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-2">No images found</h3>
              <p className="text-text-light">Please try another category or check back later.</p>
            </div>
          )}
        </div>
      </AnimatedSection>
      
      {/* Lightbox */}
      {selectedImage && (
        <motion.div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLightbox}
        >
          <div 
            className="max-w-4xl mx-auto p-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-white hover:text-primary z-10"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <FaTimes size={24} />
            </button>
            
            <div className="relative">
              <button 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                aria-label="Previous image"
              >
                <FaChevronLeft size={20} />
              </button>
              
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="max-h-[80vh] max-w-full mx-auto"
                onError={(e) => {
                  e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gray-800', 'h-[50vh]', 'w-full');
                  const placeholder = document.createElement('div');
                  placeholder.className = 'text-gray-400 text-center p-4';
                  placeholder.textContent = selectedImage.alt;
                  e.target.parentElement.appendChild(placeholder);
                  e.target.style.display = 'none';
                }}
              />
              
              <button 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                aria-label="Next image"
              >
                <FaChevronRight size={20} />
              </button>
            </div>
            
            <div className="text-white mt-4">
              <h3 className="text-xl font-semibold">{selectedImage.alt}</h3>
              <p className="text-gray-300">{selectedImage.description}</p>
              <p className="text-primary mt-2">{selectedImage.category}</p>
            </div>
          </div>
        </motion.div>
      )}
      
      {/* Call To Action */}
      <AnimatedSection className="section bg-bg-secondary" animation="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Inspired by what you see?</h2>
          <p className="text-text-light mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create similarly impressive spaces for your next project.
          </p>
          <a href="/contact" className="btn shadow-lg">
            Start Your Project
          </a>
        </div>
      </AnimatedSection>
    </motion.div>
  );
};

export default Gallery;