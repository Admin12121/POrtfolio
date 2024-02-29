import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Text = ({ text, css }) => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Wrap the animation logic in a function
    const startAnimation = () => {
      const animation = gsap.to(slider.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.25,
          start: 0,
          end: window.innerHeight,
          onUpdate: (e) => (direction = e.direction * -1),
        },
        x: '-500px',
      });

      const animate = () => {
        if (xPercent < -100) {
          xPercent = 0;
        } else if (xPercent > 0) {
          xPercent = -100;
        }
        if(firstText.current){
          gsap.set(firstText.current, { xPercent: xPercent });
          gsap.set(secondText.current, { xPercent: xPercent });
        }
        requestAnimationFrame(animate);
        xPercent += 0.1 * direction;
      };

      requestAnimationFrame(animate);

      // Return the animation instance for cleanup
      return animation;
    };

    // Call the startAnimation function
    const animationInstance = startAnimation();

    // Clean up the animation when the component is unmounted
    return () => {
      // Kill the animation instance if it exists
      if (animationInstance) {
        animationInstance.kill();
      }
    };
  }, []); // Empty dependency array ensures the effect runs only once after mount

  return (
    <>
      <div ref={slider} className={css}>
        <p ref={firstText}>{text}</p>
        <p ref={secondText}>{text}</p>
      </div>
    </>
  );
};

export default Text;
