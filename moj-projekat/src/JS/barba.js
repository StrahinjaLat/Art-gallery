import barba from '@barba/core';
import { gsap } from 'gsap';
import { introAnimatioScreen  } from '../JS/introAnimation';
import { letterAnimations } from '../JS/letterScrollAnimation'; 
// import { initGridAnimations } from '../JS/scrollTriggerHome'; 
import { initSlideshow } from '../JS/slideShowInit';
import { animationScrool } from '../JS/galleryScrool';
import { resizeSVG } from '../JS/SVGTransitionPage';
import { hoverGlove  } from '../JS/hoverCardsAnimation';
import ScrollTrigger from "gsap/ScrollTrigger";
import 'scroll-restoration-polyfill';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Registruj plugin ako već nije registrovan
gsap.registerPlugin(ScrollToPlugin);






export function initBarba() {
  
  const curveSvg = document.querySelector('.curve-svg')
  
  gsap.registerPlugin(ScrollTrigger); 


  // Onemogući browser scroll restoraciju
  if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
  }


  function startVideo() {
    const videos = document.querySelectorAll('video');
     videos.forEach(video => {
         video.play();
     })
  }


  barba.hooks.beforeEnter((data) => {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    requestAnimationFrame(() => {
      window.scrollTo(0, 0); // Postavi skrol bez animacije odmah na početak
    });
    resizeSVG()

  });
  
  barba.hooks.enter(({ next }) => {
    console.log('Global Enter Hook: Pre tranzicije za stranicu', next.namespace);
      
    // Pokreni funkcije specifične za stranicu
    if (next.namespace.includes('home')) {
     
      initSlideshow();  
      letterAnimations();
      animationScrool(); 
    }
  
    if (next.namespace.includes('protfolio') || next.namespace.includes('lemonaide')) {
      hoverGlove(); 
      startVideo()
      
    
      
    }
  
    if (next.namespace.includes('page2')) {
      
     
    }

    ScrollTrigger.refresh();
  });

  barba.hooks.leave(({ current }) => {
   
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
   
  });

  barba.init({
    // sync: true, // Za bolju sinhronizaciju animacija
    preventScroll: true,
    debug: true,
    transitions: [

      {
        name: 'once transitions all',
       
        once: async ({ next }) => { // Postavi 'async' kako bi mogao koristiti 'await'
          // Osvežavanje ScrollTrigger-a na početku
          ScrollTrigger.refresh();
     
         
        
        if (next.namespace === 'home') {
          // introAnimatioScreen() 
          initSlideshow();
        letterAnimations();
        animationScrool();
        }
      

       if (next.namespace === 'protfolio' || next.namespace === 'lemonaide') {
         hoverGlove();
         hoverGlove(); 
      startVideo()
       }
    

        },
      },
   

     

      {
        name: 'home-to-work-transition',
        from: {
          namespace: ['home'],
        },
        to: {
          namespace: ['protfolio', 'lemonaide'],
        },
        leave: ({ current }) => {
          console.log('Home to Work Transition: Leave - Napustamo Home stranicu');
          return new Promise((resolve) => {
            const tl = gsap.timeline({
              onComplete: () => {
                current.container.remove();
                resolve();
              }
            });
            tl.to(curveSvg, {
              y: '-24.2%',
              duration: 1.5,
              ease: 'power3.inOut',
            });

       

   
          
      
          });
        },
       
        enter: ({ next }) => {
          console.log('Home to Work Transition: Enter - Ulazimo na Work stranicu');
          
          return new Promise((resolve) => {
            const tl = gsap.timeline({
              onComplete: () => {
                const correction = 45 + 24.2 + 100
                gsap.set(curveSvg, {
                  y: `${correction}%`,
                })
                ScrollTrigger.refresh();
                resolve();
              }
            });
            
          
            
          

        // Prepoznajemo trenutni `namespace`
        const currentNamespace = next.namespace;
        console.log('Trenutni namespace:', currentNamespace); // Debugging output
  
        let targetTitle = null;
  
        // Prepoznavanje naslova bazirano na namespace
        if (currentNamespace.includes('protfolio')) {
          targetTitle = document.querySelector('.titlesForPages__work');
        } else if (currentNamespace.includes('lemonaide')) {
          targetTitle = document.querySelector('.titlesForPages__pro');
        }
  
  
         gsap.set('.an', { y: "70%" }); 
        gsap.set(targetTitle, { y: "100%" });
   

      
        tl.to(targetTitle, {
          opacity: 1,
          y: "0",
          duration: 0.75,
          
          ease: "power4.out"
        });
      
        tl.addLabel('start', '-=0.3');

      tl.to(curveSvg, {
        y: '-100%',
        duration: 1.5,
        ease: 'power3.inOut'
      },'start' );

      tl.to(targetTitle, {
        opacity: 0,
        y: "-300%",
        duration: 0.75,
        
        ease: "power4.out"
      } ,'start+=0.5');
        
           
            tl.to('.an', {
              y: "0",  
              duration: 1.5,
              delay: 0.35,
              ease: "power4.out"
            }, 'start'); 
         
          });
        },
     
      

      },

      {
        name: 'work-to-home-transition',
        from: {
          namespace: ['protfolio', 'lemonaide'],
        },
        to: {
          namespace: ['home'],
        },
        leave: ({ current }) => {
          console.log('Work to Home Transition: Leave - Napustamo Work stranicu');
          return new Promise((resolve) => {
            gsap.to(curveSvg, {
              y: '-24.2%',
              duration: 1.5,
              ease: 'power3.inOut',
              onComplete: () => {
                current.container.remove();
                
                resolve();
              },
            });
          });
        },
        enter: ({ next }) => {
          console.log('Work to Home Transition: Enter - Ulazimo na Home stranicu');
          return new Promise((resolve) => {

            const tl = gsap.timeline({
              onComplete: () => {
                const correction = 45 + 24.2 + 100
                gsap.set(curveSvg, {
                  y: `${correction}%`,
                })
                ScrollTrigger.refresh();
                resolve();
              },
            });
            gsap.set('.titlesForPages__home', { y: "100%" });

            tl.to('.titlesForPages__home', {
              opacity: 1,
              y: "0",
              duration: 0.75,
              
              ease: "power4.out"
            });

            tl.addLabel('start', '-=0.3');

            tl.to(curveSvg, {
              y: '-100%',
                  duration: 1.5,
                  ease: 'power3.inOut',
              
              
            }, 'start' );
            tl.to('.titlesForPages__home', {
              opacity: 0,
              y: "-300%",
              duration: 0.75,
              
              ease: "power4.out"
              
              
            },'start+=0.5');
          });
        },
      },

        
    
    ],
  });

}



