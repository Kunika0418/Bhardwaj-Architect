import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../common/Button';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const statsRef = useRef(null);
  
  // Statistics counters
  const stats = [
    { value: 15, label: 'Years of Experience' },
    { value: 200, label: 'Projects Completed' },
    { value: 45, label: 'Team Members' },
    { value: 18, label: 'Design Awards' }
  ];
  
  useEffect(() => {
    if (statsRef.current) {
      // Animate the stats counters when in view
      const counters = statsRef.current.querySelectorAll('.stat-counter');
      
      counters.forEach((counter) => {
        const value = parseInt(counter.dataset.value, 10);
        
        gsap.fromTo(
          counter,
          { innerText: 0 },
          {
            innerText: value,
            duration: 2,
            ease: 'power2.out',
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: counter,
              start: 'top 90%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    }
  }, []);
  
  return (
    <section className="section" data-scroll-section>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <SectionHeading
              title="About Bhardwaj Architect"
              subtitle="Our Journey"
              alignment="left"
            />
            
            <motion.div
              className="space-y-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-text-light">
                {/* Founded in 2008, Bhardwaj Architect has established itself as a premier architectural firm specializing in innovative design solutions across residential, commercial, and public sectors. */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi et sed consectetur eaque esse provident, repellendus voluptate illum est odio quod deserunt itaque. Possimus cum quos praesentium officia in reprehenderit.
              </p>
              <p className="text-text-light">
                {/* Our philosophy centers on creating harmonious spaces that blend functionality, aesthetics, and sustainability. We believe that exceptional architecture should not only captivate the eye but also enhance the quality of life for those who interact with it. */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex at, quas sed odit ullam dignissimos temporibus dolores tenetur quibusdam perferendis fuga assumenda tempora sit nulla debitis recusandae distinctio maiores architecto.
              </p>
              <p className="text-text-light">
                {/* With a team of passionate architects, designers, and planners, we bring a wealth of expertise and fresh perspectives to every project, ensuring results that exceed expectations. */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laudantium rerum ipsa praesentium voluptatem beatae, molestiae sunt animi dolorum necessitatibus debitis fugiat. Optio, magnam officia!
              </p>
            </motion.div>
            
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Button to="/about" variant="primary">
                Learn More About Us
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img 
                src="/assets/images/about-image.jpg" 
                alt="Bhardwaj Architect Team" 
                className="w-full h-full object-cover rounded-lg shadow-lg"
                onError={(e) => {
                  e.target.parentElement.classList.add('bg-gradient-to-br', 'from-gray-200', 'to-gray-400', 'dark:from-gray-800', 'dark:to-gray-900');
                  e.target.style.display = 'none';
                }}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-10"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary opacity-70 z-[-1]"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary opacity-70 z-[-1]"></div>
          </motion.div>
        </div>
        
        {/* Stats counter section */}
        <div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 py-10"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center">
                <span 
                  className="stat-counter text-4xl md:text-5xl font-bold text-primary" 
                  data-value={stat.value}
                >
                  0
                </span>
                <span className="text-4xl md:text-5xl font-bold text-primary">+</span>
              </div>
              <p className="text-text-light mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;