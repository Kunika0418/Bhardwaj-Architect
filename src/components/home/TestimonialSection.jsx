import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { FaQuoteLeft } from 'react-icons/fa';
import gsap from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
  {
    quote: "Bhardwaj Architect transformed our vision into a stunning reality. Their attention to detail and innovative approach exceeded our expectations.",
    author: "Rajesh Sharma",
    position: "CEO, Sharma Properties",
    image: "/assets/images/testimonial1.jpg"
  },
  {
    quote: "Working with the team at Bhardwaj Architect was a seamless experience from concept to completion. Their ability to blend aesthetics with functionality is unmatched.",
    author: "Priya Patel",
    position: "Homeowner",
    image: "/assets/images/testimonial2.jpg"
  },
  {
    quote: "The creativity and professionalism displayed by Bhardwaj Architect made our commercial space not just beautiful but highly functional. A truly collaborative experience.",
    author: "Amit Verma",
    position: "Director, Horizon Developers",
    image: "/assets/images/testimonial3.jpg"
  },
  {
    quote: "Our cultural center project required a delicate balance between modern design and traditional elements. Bhardwaj Architect delivered beyond our imagination.",
    author: "Sunita Singh",
    position: "Chairperson, Cultural Foundation",
    image: "/assets/images/testimonial4.jpg"
  }
];

const TestimonialSection = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    if (sectionRef.current) {
      // Add animation effects
      gsap.fromTo(
        '.testimonial-decoration',
        { 
          y: 0 
        },
        {
          y: -15,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut'
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="section relative overflow-hidden" data-scroll-section>
      {/* Decorative elements */}
      <div className="absolute left-10 top-10 w-24 h-24 border-2 border-primary opacity-10 testimonial-decoration"></div>
      <div className="absolute right-20 bottom-20 w-32 h-32 rounded-full border-2 border-primary opacity-10 testimonial-decoration"></div>
      
      <div className="container mx-auto relative">
        <SectionHeading
          title="Client Testimonials"
          subtitle="What Our Clients Say"
          description="Don't just take our word for it. Here's what our clients have to say about their experience working with Bhardwaj Architect."
          alignment="center"
        />
        
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="testimonial-swiper py-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-bg p-8 rounded-lg shadow-lg h-full flex flex-col border border-border">
                  <FaQuoteLeft className="text-primary opacity-30 text-4xl mb-6" />
                  <p className="text-text-light flex-grow">"{testimonial.quote}"</p>
                  <div className="flex items-center mt-6 pt-6 border-t border-border">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-300">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Show initials if image fails to load
                          e.target.style.display = 'none';
                          e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-primary/20');
                          const initials = document.createElement('span');
                          initials.textContent = testimonial.author.split(' ').map(n => n[0]).join('');
                          initials.className = 'text-primary font-bold';
                          e.target.parentElement.appendChild(initials);
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{testimonial.author}</h4>
                      <p className="text-text-light text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;