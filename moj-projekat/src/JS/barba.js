import barba from '@barba/core';
import { gsap } from 'gsap';
import { initializeAnimations } from '../JS/introAnimation'; 
// import { initGridAnimations } from '../JS/scrollTriggerHome'; 
import { initSlideshow } from '../JS/slideShowInit';
import ScrollTrigger from "gsap/ScrollTrigger";
export function initBarba() {
  const overlay = document.getElementById('overlay'); // Pronalaženje overlay elementa

  gsap.registerPlugin(ScrollTrigger); 

  barba.hooks.enter(() => {
    console.log("Barba: Resetovanje scroll-a na vrh");
    window.scrollTo(0, 0); // Uveri se da je stranica uvek na vrhu
  });

  // Inicijalizacija Barba.js
  barba.init({
    debug: true,
    transitions: [
      {
        name: 'general-transition',  // Generalna tranzicija za sve stranice
        once: ({ next }) => {
          console.log('General Transition: Once - Stranica učitana, proveravam da li ima slajder...');

          // Proveri da li postoji slajder pre nego što pozoveš funkciju
        // Proveri da li je .slides-gal prisutan
        if (next.container.querySelector('.slides-gal')) {
          initSlideshow();  // Inicijalizuj slajder
        }

          gsap.set(overlay, { opacity: 0 }); // Početno stanje overlay-a
        },
        leave: ({ current }) => {
          console.log('General Transition: Leave - Stranica izlazi...');
          return new Promise((resolve) => {
            // Animiramo crni overlay da prekriva ceo ekran kada napuštamo stranicu
            gsap.to(overlay, {
              opacity: 1,
              duration: 0.6,
              onComplete: () => {
                current.container.remove(); // Uklanjamo trenutni sadržaj stranice
                resolve(); // Završavamo animaciju i prelazimo na sledeći korak
              },
            });
          });
        },
        enter: ({ next }) => {
          console.log('General Transition: Enter - Nova stranica ulazi...');
          return new Promise((resolve) => {
            // Animiramo crni overlay da nestane kada ulazimo na novu stranicu
            gsap.to(overlay, {
              opacity: 0,
              duration: 0.6,
              onComplete: () => {
                // Proveri da li je .slides-gal prisutan
                if (next.container.querySelector('.slides-gal')) {
                  initSlideshow();  // Inicijalizuj slajder
                }
                resolve();  // Završavamo animaciju i pokazujemo sadržaj nove stranice
              },
            });
          });
        },
      },
      {
        name: 'home-transition', // Tranzicija za home stranicu
        to: {
          namespace: ['home'],  // Cilj je stranica sa namespace-om 'home'
        },
        once: ({ next }) => {
          console.log('Home Transition: Once - Stranica Home učitana');
          // Ovde možeš dodati specifične animacije za home stranicu
          gsap.set(overlay, { opacity: 0 }); // Resetovanje overlay-a pri učitavanju home stranice
          initSlideshow() 
          // initGridAnimations() 
        },
        leave: ({ current }) => {
          console.log('Home Transition: Leave - Home stranica izlazi...');
          return new Promise((resolve) => {
            gsap.to(overlay, {
              opacity: 1,
              duration: 0.6,
              onComplete: () => {
                current.container.remove(); // Uklanjanje trenutne stranice
                // ScrollTrigger.getAll().forEach(trigger => trigger.kill()); 
                resolve();
              },
            });
          });
        },
        enter: ({ next }) => {
          console.log('Home Transition: Enter - Nova Home stranica ulazi...');
          return new Promise((resolve) => {
            gsap.to(overlay, {
              opacity: 0,
              duration: 0.6,
              onComplete: () => {
                // initGridAnimations() 
                  initSlideshow(); // Inicijalizacija slajdera na home stranici
                  ScrollTrigger.refresh();

                resolve();
              },
            });
          });
        },
      },
      {
        name: 'page2-transition', // Tranzicija za page2
        to: {
          namespace: ['page2'],  // Cilj je stranica sa namespace-om 'page2'
        },
        once: ({ next }) => {
          console.log('Page2 Transition: Once - Stranica page2 učitana');
          //console.log('once phase for ' + next.namespace);
          gsap.set(overlay, { opacity: 0 }); // Resetovanje overlay-a pri učitavanju page2
        },
        leave: ({ current }) => {
          console.log('Page2 Transition: Leave - Stranica page2 izlazi...');
          return new Promise((resolve) => {
            gsap.to(overlay, {
              opacity: 1,
              duration: 0.6,
              onComplete: () => {
                current.container.remove(); // Uklanjanje trenutne stranice
                ScrollTrigger.getAll().forEach(trigger => trigger.kill()); 
                resolve();
              },
            });
          });
        },
        enter: ({ next }) => {
          console.log('Page2 Transition: Enter - Stranica page2 ulazi...');
          return new Promise((resolve) => {
            gsap.to(overlay, {
              opacity: 0,
              duration: 0.6,
              onComplete: () => {
               
                // Animacija pri ulasku na page2
                resolve();
              },
            });
          });
        },
      },
      {
        name: 'from-page2-transition', // Tranzicija pri povratku sa page2
        from: {
          namespace: ['page2'],  // Iz page2
        },
        to: {
          namespace: ['home']
        },
        leave: ({ current }) => {
          return new Promise((resolve) => {
            gsap.to(overlay, {
              opacity: 1,
              duration: 0.6,
              onComplete: () => {
                
                current.container.remove(); // Uklanjanje trenutne stranice (page2)
                resolve();
              },
            });
          });
        },
        enter: ({ next }) => {
          initSlideshow() 
          return new Promise((resolve) => {
            gsap.to(overlay, {
              opacity: 0,
              duration: 0.6,
              onComplete: () => {
                // initGridAnimations() 
                ScrollTrigger.refresh();
                resolve();
              },
            });
          });
        },
      },
    ],
  });
}
