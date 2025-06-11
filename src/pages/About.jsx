import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from '../components/common/SectionHeading';
import AnimatedSection from '../components/common/AnimatedSection';
import { FaAward, FaBullseye, FaHandshake, FaLeaf } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const timelineRef = useRef(null);
  const valuesRef = useRef(null);
  
  // Team members data
  const teamMembers = [
    {
      name: "Vikram Bhardwaj",
      role: "Principal Architect & Founder",
      image: "/assets/images/team1.jpg",
      bio: "With over 20 years of experience, Vikram founded Bhardwaj Architect with a vision to create meaningful spaces that inspire and endure."
    },
    {
      name: "Priya Sharma",
      role: "Senior Architect",
      image: "/assets/images/team2.jpg",
      bio: "Priya specializes in sustainable design and has led some of our most innovative eco-friendly projects over the past 10 years."
    },
    {
      name: "Rahul Verma",
      role: "Design Director",
      image: "/assets/images/team3.jpg",
      bio: "Rahul brings creative vision and technical expertise to every project, with a particular focus on blending traditional elements with modern design."
    },
    {
      name: "Ananya Patel",
      role: "Interior Design Lead",
      image: "/assets/images/team4.jpg",
      bio: "Ananya's approach to interior spaces creates harmonious environments that complement architectural designs while exceeding client expectations."
    },
  ];
  
  // Timeline data
  const timeline = [
    {
      year: "2008",
      title: "Foundation",
      description: "Bhardwaj Architect was founded with a mission to create exceptional architectural experiences."
    },
    {
      year: "2012",
      title: "First Major Project",
      description: "Completed the award-winning Cultural Center in Jaipur, establishing our reputation for innovative design."
    },
    {
      year: "2015",
      title: "Expansion",
      description: "Expanded our team and opened a second office in Mumbai to better serve our growing client base."
    },
    {
      year: "2018",
      title: "International Recognition",
      description: "Received international acclaim with our first global award for sustainable architectural design."
    },
    {
      year: "2021",
      title: "Innovation Hub",
      description: "Launched our innovation lab focused on sustainable building technologies and smart architecture."
    },
    {
      year: "Present",
      title: "Continued Excellence",
      description: "Continuing our journey of creating architectural masterpieces that transform spaces and lives."
    }
  ];
  
  // Company values
  const values = [
    {
      icon: <FaBullseye className="text-4xl text-primary" />,
      title: "Excellence",
      description: "We pursue excellence in every aspect of our work, from conceptual design to final execution."
    },
    {
      icon: <FaHandshake className="text-4xl text-primary" />,
      title: "Collaboration",
      description: "We believe in the power of collaboration, working closely with clients to bring their vision to life."
    },
    {
      icon: <FaLeaf className="text-4xl text-primary" />,
      title: "Sustainability",
      description: "We are committed to sustainable practices that minimize environmental impact and promote well-being."
    },
    {
      icon: <FaAward className="text-4xl text-primary" />,
      title: "Innovation",
      description: "We continuously push boundaries to discover innovative solutions to architectural challenges."
    }
  ];
  
  useEffect(() => {
    // Animate timeline
    if (timelineRef.current) {
      gsap.fromTo(
        '.timeline-item',
        { 
          opacity: 0,
          x: -50
        },
        {
          opacity: 1,
          x: 0,
          stagger: 0.3,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
    
    // Animate values
    if (valuesRef.current) {
      gsap.fromTo(
        '.value-item',
        { 
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: valuesRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  }, []);
  
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
        <title>About Us | Bhardwaj Architect</title>
        <meta name="description" content="Learn about Bhardwaj Architect's journey, our team of talented professionals, and our commitment to exceptional architectural design." />
      </Helmet>
      
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src="/assets/images/about-hero.jpg" 
            alt="About Bhardwaj Architect" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.parentElement.classList.add('bg-gradient-to-br', 'from-gray-900', 'to-gray-600');
            }}
          />
        </div>
        
        <div className="container relative z-20 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Excellence in architectural design since 2008
          </p>
        </div>
      </div>
      
      {/* Our Story Section */}
      <AnimatedSection className="section bg-bg" animation="fade-up">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Our Story"
                subtitle="Journey of Excellence"
                alignment="left"
              />
              
              <div className="space-y-4 mt-6">
                <p className="text-text-light">
                  {/* Founded in 2008 by Vikram Bhardwaj, our firm began with a vision to create architectural designs that are not just aesthetically pleasing but also functional, sustainable, and meaningful. */}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae est doloribus praesentium aspernatur vel nihil dolorem nobis assumenda, beatae eos ex asperiores quidem temporibus?
                </p>
                <p className="text-text-light">
                  {/* Over the years, we have evolved from a small studio into a comprehensive architecture and design practice, earning a reputation for innovative solutions and exceptional client service. */}
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, in repellat debitis voluptatibus tenetur nemo deleniti esse ipsam sunt temporibus distinctio aspernatur quis maiores magnam praesentium, consequuntur repudiandae, fuga vitae.
                </p>
                <p className="text-text-light">
                  {/* Today, Bhardwaj Architect stands as a testament to our unwavering commitment to architectural excellence. Our portfolio spans residential, commercial, and public projects, each reflecting our passion for design and attention to detail. */}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aliquid impedit quae eveniet voluptatum autem aut minus repudiandae nisi eaque magnam suscipit, voluptates unde deleniti aperiam voluptate, dolorem ut odio.
                </p>
                <p className="text-text-light">
                  {/* We continue to push boundaries, embracing new technologies and sustainable practices while staying true to our core values of excellence, integrity, and client satisfaction. */}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam neque doloremque similique. Ipsa, fugiat minima. Veritatis asperiores quisquam natus quod voluptatem itaque illo ut nostrum commodi, tempore, temporibus quo dicta.
                </p>
              </div>
            </div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-xl">
                <img 
                  src="/assets/images/about-story.jpg" 
                  alt="Our Story" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.parentElement.classList.add('bg-gradient-to-br', 'from-gray-200', 'to-gray-400', 'dark:from-gray-800', 'dark:to-gray-900');
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-10"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary opacity-70 z-[-1]"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-primary opacity-70 z-[-1] rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Our Values Section */}
      <AnimatedSection className="section bg-bg-secondary" animation="fade-up">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Values"
            subtitle="What Drives Us"
            description="Our core values shape every aspect of our work and define who we are as a firm."
            alignment="center"
          />
          
          <div 
            ref={valuesRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
          >
            {values.map((value, index) => (
              <div 
                key={index}
                className="value-item bg-bg p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center border-t-2 border-primary/20 hover:border-primary"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-text-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      
      {/* Our Timeline */}
      <AnimatedSection className="section bg-bg" animation="fade-up">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Journey"
            subtitle="Company Timeline"
            description="The key milestones that have shaped our growth and success over the years."
            alignment="center"
          />
          
          <div 
            ref={timelineRef}
            className="relative mt-16 border-l-2 border-primary ml-4 md:ml-0 md:mx-auto md:max-w-3xl"
          >
            {timeline.map((item, index) => (
              <div 
                key={index}
                className="timeline-item mb-12 md:mb-0 md:clear-both md:w-1/2 md:float-right md:pr-8 md:relative md:pb-16"
              >
                <div className="hidden md:block absolute top-0 left-0 md:-left-4 w-8 h-8 bg-primary rounded-full transform -translate-x-1/2 border-4 border-bg"></div>
                <div className="ml-8 md:ml-0">
                  <div className="absolute left-0 md:left-auto md:right-full top-0 md:mr-8 block md:hidden w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 border-4 border-bg"></div>
                  <span className="inline-block py-1 px-2 bg-primary text-white text-sm font-medium rounded mb-2">{item.year}</span>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-text-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      
      {/* Team Section */}
      <AnimatedSection className="section bg-bg-secondary" animation="fade-up">
        <div className="container mx-auto">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The Experts"
            description="Our talented professionals bring diverse skills and expertise to every project."
            alignment="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-bg rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.parentElement.classList.add('bg-gradient-to-br', 'from-gray-200', 'to-gray-400', 'dark:from-gray-800', 'dark:to-gray-900');
                      e.target.style.display = 'none';
                      
                      // Create initials as fallback
                      const initials = document.createElement('div');
                      initials.className = 'w-full h-full flex items-center justify-center text-4xl font-bold text-gray-500 dark:text-gray-400';
                      initials.textContent = member.name.split(' ').map(n => n[0]).join('');
                      e.target.parentElement.appendChild(initials);
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-text-light">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      
      {/* Call To Action */}
      <AnimatedSection className="section bg-bg" animation="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Team</h2>
          <p className="text-text-light mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for exceptional architecture and design.
          </p>
          <a href="/contact#careers" className="btn shadow-lg">
            View Openings
          </a>
        </div>
      </AnimatedSection>
    </motion.div>
  );
};

export default About;