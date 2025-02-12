import barba from '@barba/core';
import { gsap } from 'gsap';
import { initializeAnimations } from '../JS/introAnimation'; 
import { initSlideshow } from '../JS/slideShowInit';

export function initBarba() {
  const overlay = document.getElementById('overlay'); // Pronalaženje overlay elementa

 

  // Barba hook za resetovanje scroll-a na vrh
  barba.hooks.enter(() => {
    window.scrollTo(0, 0); // Uveri se da je stranica uvek na vrhu
  });

  // Inicijalizacija Barba.js
  barba.init({
    debug: true,
    transitions: [
      {
        name: 'general-transition',  // Generalna tranzicija za sve stranice
        once: ({ next }) => {
          // Proveri da li postoji slajder pre nego što pozoveš funkciju
        // Proveri da li je .slides-gal prisutan
        if (next.container.querySelector('.slides-gal')) {
          initSlideshow();  // Inicijalizuj slajder
        }

          gsap.set(overlay, { opacity: 0 }); // Početno stanje overlay-a
        },
        leave: ({ current }) => {
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
          console.log('Page entered (enter)');
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
          // Ovde možeš dodati specifične animacije za home stranicu
          gsap.set(overlay, { opacity: 0 }); // Resetovanje overlay-a pri učitavanju home stranice
          initSlideshow() 
        },
        leave: ({ current }) => {
          return new Promise((resolve) => {
            gsap.to(overlay, {
              opacity: 1,
              duration: 0.6,
              onComplete: () => {
                current.container.remove(); // Uklanjanje trenutne stranice
                resolve();
              },
            });
          });
        },
        enter: ({ next }) => {
          return new Promise((resolve) => {
            gsap.to(overlay, {
              opacity: 0,
              duration: 0.6,
              onComplete: () => {
               
                  initSlideshow(); // Inicijalizacija slajdera na home stranici
                
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
          console.log('once phase for ' + next.namespace);
          gsap.set(overlay, { opacity: 0 }); // Resetovanje overlay-a pri učitavanju page2
        },
        leave: ({ current }) => {
          console.log("page2-transition: leave hook");
          return new Promise((resolve) => {
            gsap.to(overlay, {
              opacity: 1,
              duration: 0.6,
              onComplete: () => {
                current.container.remove(); // Uklanjanje trenutne stranice
                resolve();
              },
            });
          });
        },
        enter: ({ next }) => {
          console.log("page2-transition: enter hook");
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
                
                resolve();
              },
            });
          });
        },
      },
    ],
  });
}
