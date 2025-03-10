import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); 





export  const animationScrool = () => {
    const grid = document.querySelector('.gallery-container');
    const gridWrap = document.querySelector('.gallery-wrap');
	const gridItems = document.querySelectorAll('.gallery__item');
    const gridItemsInner = [...gridItems].map(item => item.querySelector('.gallery__item-inner'));
   

   
    

    const timeline = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: gridWrap,
          start: 'top bottom+=5%',
          end: 'bottom top-=5%',
          scrub: true,
        
        }
  });


 

  timeline
  .set(gridWrap, {
      transformOrigin: '0% 50%',
      rotationY: 30,
      xPercent: -75
  })
  .set(gridItems, {
      transformOrigin: '50% 0%'
  })
  .to(gridItems, {
      duration: 0.5,
      ease: 'power2',
      z: 500,
      stagger: 0.04
  }, 0)
  .to(gridItems, {
      duration: 0.5,
      ease: 'power2.in',
      z: 0,
      stagger: 0.04
  }, 0.5)
  .fromTo(gridItems, {
      rotationX: -70,
    //   filter: 'brightness(120%)'
  }, {
      duration: 1,
      rotationX: 70,
    //   filter: 'brightness(0%)',
      stagger: 0.04
  }, 0)


};


