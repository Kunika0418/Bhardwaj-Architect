import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * Initialize Locomotive Scroll and set up GSAP ScrollTrigger integration
 * @param {HTMLElement} scrollContainer - The container to apply locomotive scroll to
 * @returns {Promise<LocomotiveScroll>} - The locomotive scroll instance
 */
export const initLocomotiveScroll = async (scrollContainer) => {
  if (!scrollContainer) {
    console.error('No scroll container provided');
    return null;
  }

  // Initialize Locomotive Scroll
  const locoScroll = new LocomotiveScroll({
    el: scrollContainer,
    smooth: true, 
    multiplier: 1,
    class: 'is-revealed',
    lerp: 0.08, // Linear interpolation, lower is smoother
    smartphone: {
      smooth: true,
      multiplier: 1,
      lerp: 0.1
    },
    tablet: {
      smooth: true,
      multiplier: 1,
      lerp: 0.1
    }
  });

  // Tell ScrollTrigger to use these proxy methods for the scrollContainer
  ScrollTrigger.scrollerProxy(scrollContainer, {
    scrollTop(value) {
      return arguments.length 
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    pinType: scrollContainer.style.transform ? "transform" : "fixed"
  });

  // Update ScrollTrigger when locomotive scroll updates
  locoScroll.on("scroll", ScrollTrigger.update);

  // After everything is set up
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // Refresh ScrollTrigger and update LocomotiveScroll 
  ScrollTrigger.refresh();

  return locoScroll;
};

/**
 * Create a parallax effect on scroll
 * @param {HTMLElement} element - Element to apply parallax effect to
 * @param {number} intensity - Parallax intensity (positive for up, negative for down)
 * @param {HTMLElement} container - ScrollTrigger container
 */
export const createParallax = (element, intensity = 0.2, container = null) => {
  if (!element) return;

  gsap.to(element, {
    y: () => -intensity * 100 + '%', 
    ease: "none",
    scrollTrigger: {
      trigger: element,
      scroller: container || undefined,
      scrub: true,
      start: "top bottom",
      end: "bottom top",
    }
  });
};

/**
 * Reveal text letter by letter
 * @param {HTMLElement} element - Element containing text to animate
 * @param {Object} options - Animation options
 */
export const revealText = (element, { delay = 0, duration = 1, staggerDelay = 0.02 } = {}) => {
  if (!element) return;

  // Split text into spans if it's not already done
  let chars;
  
  if (!element.querySelector('.char')) {
    const text = element.textContent;
    element.innerHTML = '';
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement('span');
      span.className = 'char';
      span.textContent = text[i];
      // Make spaces non-breaking to keep them as characters
      if (text[i] === ' ') {
        span.innerHTML = '&nbsp;';
      }
      element.appendChild(span);
    }
  }
  
  chars = element.querySelectorAll('.char');
  
  // Set initial state
  gsap.set(chars, { opacity: 0, y: 20, rotationX: -90 });
  
  // Animate chars
  gsap.to(chars, {
    opacity: 1, 
    y: 0,
    rotationX: 0,
    stagger: staggerDelay,
    delay,
    duration,
    ease: "back.out(1.5)",
    onComplete: () => {
      // Optional callback when animation completes
    }
  });
};

/**
 * Create staggered reveal animation for multiple elements
 * @param {NodeList|Array} elements - Elements to animate
 * @param {Object} options - Animation options
 */
export const staggeredReveal = (elements, { 
  delay = 0, 
  stagger = 0.1, 
  y = 20, 
  duration = 0.8, 
  triggerEl = null,
  start = "top 80%"
} = {}) => {
  if (!elements || elements.length === 0) return;
  
  const trigger = triggerEl || elements[0];
  
  gsap.from(elements, {
    opacity: 0,
    y,
    duration,
    stagger,
    delay,
    ease: "power3.out",
    scrollTrigger: {
      trigger,
      start,
      toggleActions: "play none none none"
    }
  });
};

/**
 * Create a marquee/infinite scroll effect
 * @param {HTMLElement} element - Element to apply marquee effect to
 * @param {Object} options - Animation options
 */
export const createMarquee = (element, { duration = 20, direction = 'left' } = {}) => {
  if (!element) return;
  
  // Clone the content for seamless looping
  const content = element.firstElementChild;
  const clone = content.cloneNode(true);
  element.appendChild(clone);
  
  // Get the width for correct animation distance
  const width = content.offsetWidth;
  
  // Set initial state
  gsap.set(element, {
    xPercent: direction === 'left' ? 0 : -100
  });
  
  // Create infinite animation
  gsap.to(element, {
    xPercent: direction === 'left' ? -100 : 0,
    ease: "none",
    duration,
    repeat: -1
  });
};

export default {
  initLocomotiveScroll,
  createParallax,
  revealText,
  staggeredReveal,
  createMarquee
};