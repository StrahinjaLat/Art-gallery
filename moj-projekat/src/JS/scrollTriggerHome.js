
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); 

export function initGridAnimations() {
    // Definiši elemente
    const case1 = document.getElementById('gridItem1');
    const case2 = document.getElementById('gridItem2');
    const case3 = document.getElementById('gridItem3');
    const case4 = document.getElementById('gridItem4');
  
    // Postavi početnu poziciju za case2 i case4
    gsap.set([case2, case4], {
      y: '50%'
    });
  
    // Animacija za case2
    gsap.to(case2, {
      scrollTrigger: {
        trigger: case1, // trigger je case1 (kada on uđe u ekran)
        start: 'top bottom', // animacija počinje kada top case1 uđe u ekran
        end: 'bottom top', // animacija završava kada bottom case1 izađe iz ekrana
        scrub: true, // sinhronizuje animaciju sa skrolovanjem
        markers: true // opcionalno za debagovanje
      },
      y: '0%' // animacija pomeranja case2 na 0%
    });
  
    // Animacija za case4
    gsap.to(case4, {
      scrollTrigger: {
        trigger: case3, // trigger je case3
        start: 'top bottom', // animacija počinje kada top case3 uđe u ekran
        end: 'bottom top', // animacija završava kada bottom case3 izađe iz ekrana
        scrub: true, // sinhronizuje animaciju sa skrolovanjem
        markers: true // opcionalno za debagovanje
      },
      y: '0%' // animacija pomeranja case4 na 0%
    });
  }
  
