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
    { value: 9, label: 'Years of Experience' },
    { value: 100, label: 'Projects Completed' },
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
    <section className="section relative min-h-[60vh]" data-scroll-section>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="/assets/images/backgrounds/about-bg.png"
          alt="About Background"
          className="w-full h-full object-cover"
          onError={(e) => {
            console.error('Error loading image:', e);
            e.target.parentElement.classList.add('bg-gradient-to-br', 'from-gray-900', 'to-gray-600');
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-20">
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
              <p className="text-white/90">
                At Bhardwaj Architects, we don't just build structures — we craft experiences. What started as a small design studio with a big vision has grown into a trusted name in architecture, known for creativity, precision, and passion.
              </p>
              <p className="text-white/90">
                Our journey began with a simple idea: to design spaces that reflect the people who live and work in them. Over the years, we've brought that vision to life through residential, commercial, and urban projects — each one guided by thoughtful planning, timeless aesthetics, and functional innovation.
              </p>
              <p className="text-white/90">
                Rooted in architectural excellence and driven by a client-first approach, we blend modern design with practical solutions to create environments that inspire. Whether it's a cozy home or a bold commercial space, every project we take on is a new story waiting to be told — and we're here to help you tell yours.
              </p>
            </motion.div>
            
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Button to="/about" variant="primary" size="large">
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
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <img 
                src="/assets/images/about-image.jpg" 
                alt="Bhardwaj Architect Team" 
                className="w-full h-full object-cover rounded-lg shadow-xl"
                onError={(e) => {
                  e.target.parentElement.classList.add('bg-gradient-to-br', 'from-gray-200', 'to-gray-400', 'dark:from-gray-800', 'dark:to-gray-900');
                  e.target.style.display = 'none';
                }}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black/20 rounded-lg"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-white opacity-20 z-[-1]"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-white opacity-20 z-[-1] rounded-full"></div>
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