
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from 'split-type';
gsap.registerPlugin(ScrollTrigger); 


export const letterAnimations = () => {
    const animateWords = el => {
    
        // from: https://www.npmjs.com/package/split-type#splitting-text 
        // Important: The following style should be applied to all target elements. This prevents the characters from shifting slightly when text is split/reverted.
        gsap.set(el, {'font-kerning': 'none'});
      
        // Apply SplitType
        const st = new SplitType(el, { types: 'lines, words' });
        const lines = st.lines;
      
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: 'center center',
                end: '+=300%',
                scrub: true,
                pin: el
            }
        })
        .set(el, {perspective: 1000});
      
        for (const [linepos,line] of lines.entries()) {
            
            gsap.set(line, {transformStyle: 'preserve-3d'});
      
            const words = line.querySelectorAll('.word');
            
            tl
            .to(words, {
                ease: 'back.inOut',
                opacity: 0,
                rotationY: (pos,_,arr) => pos > arr.length/2 ? Math.abs(pos-arr.length/2)*-15 : Math.abs(pos-arr.length/2)*15,
                z: () => gsap.utils.random(-1000,-500),
                stagger: {
                    each: 0.02,
                    from: 'center'
                }
                
            }, linepos*.05);
      
        }
    
     
      };
    
           // GSAP Scroll Triggers
           const scroll = () => {
            [...document.querySelectorAll('[data-split]')].forEach(el => {
                animateWords(el)
            });
          };
          
          scroll()
}

 
        
  

  
  