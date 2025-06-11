import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for creating scroll-triggered animations
 * 
 * @param {Object} options - Animation options
 * @param {String} options.animation - Type of animation (fade-in, fade-up, etc)
 * @param {Number} options.duration - Animation duration in seconds
 * @param {Number} options.delay - Animation delay in seconds
 * @param {Number} options.threshold - Trigger threshold (0-1)
 * @param {Boolean} options.triggerOnce - Whether to trigger animation only once
 * @returns {Object} The ref object to attach to the element to animate
 */
const useScrollAnimation = ({
  animation = 'fade-up',
  duration = 1,
  delay = 0,
  threshold = 0.2,
  triggerOnce = true,
} = {}) => {
  const elementRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Define animation configurations
    const animations = {
      'fade-in': {
        from: { opacity: 0 },
        to: { opacity: 1, duration, delay }
      },
      'fade-up': {
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0, duration, delay }
      },
      'fade-down': {
        from: { opacity: 0, y: -50 },
        to: { opacity: 1, y: 0, duration, delay }
      },
      'fade-left': {
        from: { opacity: 0, x: -50 },
        to: { opacity: 1, x: 0, duration, delay }
      },
      'fade-right': {
        from: { opacity: 0, x: 50 },
        to: { opacity: 1, x: 0, duration, delay }
      },
      'zoom-in': {
        from: { opacity: 0, scale: 0.9 },
        to: { opacity: 1, scale: 1, duration, delay }
      },
      'zoom-out': {
        from: { opacity: 0, scale: 1.1 },
        to: { opacity: 1, scale: 1, duration, delay }
      }
    };

    // Get animation configuration
    const animConfig = animations[animation] || animations['fade-up'];
    
    // Set initial state
    gsap.set(element, animConfig.from);
    
    // Create ScrollTrigger animation
    const trigger = ScrollTrigger.create({
      trigger: element,
      start: `top bottom-=${threshold * 100}%`,
      onEnter: () => {
        if (!animated || !triggerOnce) {
          gsap.to(element, {
            ...animConfig.to,
            ease: 'power3.out',
            onComplete: () => setAnimated(true)
          });
        }
      },
      onEnterBack: () => {
        if (!triggerOnce) {
          gsap.to(element, {
            ...animConfig.to,
            ease: 'power3.out'
          });
        }
      },
      onLeaveBack: () => {
        if (!triggerOnce) {
          gsap.to(element, animConfig.from);
        }
      }
    });

    return () => {
      // Clean up on unmount
      trigger.kill();
    };
  }, [animation, duration, delay, triggerOnce, threshold, animated]);

  return elementRef;
};

export default useScrollAnimation;